// dialogue.js — Dialogue engine: typing, presentation slides, cinematic auto-advance

import { getNode, getNextNodeId } from '../data/script.js';
import { onAdvance, blockInput, unblockInput } from '../engine/input.js';

const overlay = () => document.getElementById('dialogue-overlay');
const speakerEl = () => document.getElementById('dialogue-speaker');
const textEl = () => document.getElementById('dialogue-text');
const promptEl = () => document.getElementById('dialogue-prompt');

let currentNode = null;
let displayedText = '';
let fullText = '';
let charIndex = 0;
let typingTimer = 0;
let typingSpeed = 33; // ms per char
let typingComplete = false;
let waitingForInput = false;
let autoAdvanceTimer = 0;
let frozen = false;
let freezeTimer = 0;
let freezeDone = false;
let removeAdvanceListener = null;

// Callback when dialogue needs scene change or finishes
let onSceneChange = null;
let onNodeChange = null;
let onEffects = null;

export function setDialogueCallbacks({ sceneChange, nodeChange, effects }) {
  onSceneChange = sceneChange || null;
  onNodeChange = nodeChange || null;
  onEffects = effects || null;
}

export function startDialogue(nodeId) {
  const node = getNode(nodeId);
  if (!node) {
    console.warn(`Dialogue node not found: ${nodeId}`);
    return;
  }
  loadNode(node);
  showOverlay();
  setupInput();
}

function loadNode(node) {
  currentNode = node;
  fullText = node.text;
  displayedText = '';
  charIndex = 0;
  typingTimer = 0;
  typingSpeed = node.typingSpeed || 33;
  typingComplete = false;
  waitingForInput = false;
  autoAdvanceTimer = 0;
  frozen = false;
  freezeTimer = 0;
  freezeDone = false;

  // Update speaker
  const ov = overlay();
  const sp = speakerEl();
  if (node.speaker === 'narrator') {
    sp.textContent = '';
    ov.setAttribute('data-speaker', 'narrator');
  } else if (node.speaker === 'system') {
    sp.textContent = node.speakerName || 'SYSTEM';
    ov.setAttribute('data-speaker', 'system');
  } else {
    sp.textContent = node.speakerName || '';
    ov.setAttribute('data-speaker', node.speaker);
  }

  textEl().textContent = '';
  promptEl().style.visibility = 'hidden';

  // Fire effects
  if (node.effects && onEffects) {
    onEffects(node.effects);
  }

  // Notify node change
  if (onNodeChange) {
    onNodeChange(node);
  }

  unblockInput();
}

function showOverlay() {
  overlay().classList.remove('hidden');
}

export function hideOverlay() {
  overlay().classList.add('hidden');
}

function setupInput() {
  if (removeAdvanceListener) removeAdvanceListener();
  removeAdvanceListener = onAdvance(handleAdvance);
}

function handleAdvance() {
  if (frozen) return;

  if (!typingComplete) {
    // Skip to end of typing
    displayedText = fullText;
    charIndex = fullText.length;
    typingComplete = true;
    textEl().textContent = displayedText;
    onTypingDone();
    return;
  }

  if (waitingForInput) {
    advanceToNext();
  }
}

function onTypingDone() {
  // Handle freeze effect (only once per node)
  if (!freezeDone && currentNode.effects && currentNode.effects.screenFreeze) {
    frozen = true;
    freezeDone = true;
    freezeTimer = currentNode.effects.screenFreeze / 1000;
    blockInput();
    return;
  }

  if (currentNode.type === 'cinematic' && currentNode.autoAdvanceDelay) {
    autoAdvanceTimer = currentNode.autoAdvanceDelay / 1000;
    return;
  }

  // Standard: wait for input
  waitingForInput = true;
  promptEl().style.visibility = 'visible';
}

function advanceToNext() {
  waitingForInput = false;
  promptEl().style.visibility = 'hidden';

  const nextId = getNextNodeId(currentNode);
  if (!nextId) {
    // End of dialogue
    hideOverlay();
    if (removeAdvanceListener) removeAdvanceListener();
    currentNode = null;
    return;
  }

  if (nextId.startsWith('__scene:')) {
    const sceneId = nextId.replace('__scene:', '');
    hideOverlay();
    if (removeAdvanceListener) removeAdvanceListener();
    currentNode = null;
    if (onSceneChange) onSceneChange(sceneId);
    return;
  }

  const nextNode = getNode(nextId);
  if (nextNode) {
    loadNode(nextNode);
  }
}

export function updateDialogue(dt) {
  if (!currentNode) return;

  // Handle freeze
  if (frozen) {
    freezeTimer -= dt;
    if (freezeTimer <= 0) {
      frozen = false;
      unblockInput();
      onTypingDone();
    }
    return;
  }

  // Handle typing
  if (!typingComplete) {
    typingTimer += dt * 1000;
    while (typingTimer >= typingSpeed && charIndex < fullText.length) {
      typingTimer -= typingSpeed;
      charIndex++;
      displayedText = fullText.substring(0, charIndex);
      textEl().textContent = displayedText;
    }
    if (charIndex >= fullText.length) {
      typingComplete = true;
      onTypingDone();
    }
    return;
  }

  // Handle auto-advance
  if (autoAdvanceTimer > 0) {
    autoAdvanceTimer -= dt;
    if (autoAdvanceTimer <= 0) {
      advanceToNext();
    }
  }
}

export function isDialogueActive() {
  return currentNode !== null;
}

export function getCurrentNode() {
  return currentNode;
}

export function cleanupDialogue() {
  if (removeAdvanceListener) {
    removeAdvanceListener();
    removeAdvanceListener = null;
  }
  currentNode = null;
  hideOverlay();
}
