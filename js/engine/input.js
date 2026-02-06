// input.js — Unified click/touch/keyboard input

import { screenToCanvas } from './renderer.js';

let advanceCallbacks = [];
let clickCallbacks = [];
let blocked = false;
let lastInputTime = 0;
const INPUT_DEBOUNCE = 80; // ms, prevents touch+click double-fire

export function initInput() {
  window.addEventListener('click', handlePointer);
  window.addEventListener('touchstart', handleTouch, { passive: false });
  window.addEventListener('keydown', handleKey);
}

function debounce() {
  const now = performance.now();
  if (now - lastInputTime < INPUT_DEBOUNCE) return true;
  lastInputTime = now;
  return false;
}

function handlePointer(e) {
  if (blocked || debounce()) return;
  const pos = screenToCanvas(e.clientX, e.clientY);
  fireClick(pos.x, pos.y);
  fireAdvance();
}

function handleTouch(e) {
  if (blocked || debounce()) return;
  e.preventDefault();
  const t = e.touches[0];
  const pos = screenToCanvas(t.clientX, t.clientY);
  fireClick(pos.x, pos.y);
  fireAdvance();
}

function handleKey(e) {
  if (blocked) return;
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault();
    fireAdvance();
  }
}

function fireAdvance() {
  for (const cb of advanceCallbacks) cb();
}

function fireClick(x, y) {
  for (const cb of clickCallbacks) cb(x, y);
}

export function onAdvance(callback) {
  advanceCallbacks.push(callback);
  return () => {
    advanceCallbacks = advanceCallbacks.filter(cb => cb !== callback);
  };
}

export function onClick(callback) {
  clickCallbacks.push(callback);
  return () => {
    clickCallbacks = clickCallbacks.filter(cb => cb !== callback);
  };
}

export function clearAllInputs() {
  advanceCallbacks = [];
  clickCallbacks = [];
}

export function blockInput() { blocked = true; }
export function unblockInput() { blocked = false; }
