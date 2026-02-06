// ending.js — ACT 4: Zoom-out → Phone → Chat → Hand → Pocket → Title

import { clearScreen, getBaseSize } from '../engine/renderer.js';
import { loadScene, isMobile } from '../main.js';
import { blockInput, unblockInput, onAdvance } from '../engine/input.js';
import { getNode } from '../data/script.js';
import { fadeIn, setFadeOpacity } from '../engine/transition.js';

// Ending phases
const PHASE = {
  INIT: 0,
  ZOOM_OUT: 1,        // Canvas shrinks (3s)
  PHONE_APPEAR: 2,    // Phone frame fades in (1.5s)
  SHOW_CHAT: 3,       // Canvas hidden, chat UI appears
  CHAT_MESSAGES: 4,   // Chat messages appear one by one
  HAND_APPEAR: 5,     // Hand fades in
  REACTION: 6,        // "그렇구나." text
  POCKET: 7,          // Phone+hand move down
  FADE_BLACK: 8,      // Fade to black
  TITLE: 9,           // Show title
  DONE: 10
};

export class EndingScene {
  constructor() {
    this.phase = PHASE.INIT;
    this.phaseTime = 0;
    this.mobile = false;
    this.chatMessages = [];
    this.chatIndex = 0;
    this.removeAdvance = null;
  }

  async init() {
    this.mobile = isMobile();
    blockInput();

    // Get chat messages from script data
    const chatNode = getNode('ending_chat_01');
    if (chatNode && chatNode.chatMessages) {
      this.chatMessages = chatNode.chatMessages;
    }

    // Fade in from the previous scene's fadeOut
    await fadeIn(1500);

    // Brief pause before zoom-out begins
    await this.wait(1000);
    this.startPhase(PHASE.ZOOM_OUT);
  }

  startPhase(phase) {
    this.phase = phase;
    this.phaseTime = 0;

    switch (phase) {
      case PHASE.ZOOM_OUT:
        this.doZoomOut();
        break;
      case PHASE.PHONE_APPEAR:
        this.doPhoneAppear();
        break;
      case PHASE.SHOW_CHAT:
        this.doShowChat();
        break;
      case PHASE.CHAT_MESSAGES:
        this.doChatMessages();
        break;
      case PHASE.HAND_APPEAR:
        this.doHandAppear();
        break;
      case PHASE.REACTION:
        this.doReaction();
        break;
      case PHASE.POCKET:
        this.doPocket();
        break;
      case PHASE.FADE_BLACK:
        this.doFadeBlack();
        break;
      case PHASE.TITLE:
        this.doTitle();
        break;
    }
  }

  doZoomOut() {
    const wrapper = document.getElementById('game-wrapper');
    wrapper.style.transition = 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)';
    wrapper.style.transform = 'scale(0.35)';

    setTimeout(() => this.startPhase(PHASE.PHONE_APPEAR), 3000);
  }

  doPhoneAppear() {
    const endingLayer = document.getElementById('ending-layer');
    endingLayer.classList.remove('hidden');

    const phoneFrame = document.getElementById('phone-frame');

    // Position phone so its screen area overlaps with the shrunken canvas
    this.positionPhone();

    // Fade in phone
    setTimeout(() => {
      phoneFrame.style.opacity = '1';
    }, 50);

    setTimeout(() => this.startPhase(PHASE.SHOW_CHAT), 1800);
  }

  positionPhone() {
    const phoneFrame = document.getElementById('phone-frame');
    const wrapper = document.getElementById('game-wrapper');
    const canvas = document.getElementById('game-canvas');

    // Phone is centered by flex layout of ending-layer
    // Adjust phone size to frame the canvas
    const canvasRect = canvas.getBoundingClientRect();
    const phoneWidth = this.mobile ? 180 : 240;
    const phoneHeight = phoneWidth * 2;

    phoneFrame.style.width = `${phoneWidth}px`;
    phoneFrame.style.height = `${phoneHeight}px`;
  }

  doShowChat() {
    // Hide canvas
    const canvas = document.getElementById('game-canvas');
    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 0.5s ease';

    // Show chat UI
    const chatUI = document.getElementById('chat-ui');
    chatUI.style.opacity = '1';

    setTimeout(() => this.startPhase(PHASE.CHAT_MESSAGES), 800);
  }

  async doChatMessages() {
    const container = document.getElementById('chat-messages');
    container.innerHTML = '';

    for (let i = 0; i < this.chatMessages.length; i++) {
      const msg = this.chatMessages[i];
      await this.wait(600);

      const el = document.createElement('div');
      el.classList.add('chat-msg', msg.role === 'user' ? 'user' : 'assistant');
      el.textContent = msg.text;
      container.appendChild(el);

      // Scroll to bottom
      container.scrollTop = container.scrollHeight;
    }

    // Wait a moment after last message
    await this.wait(2000);

    if (this.mobile) {
      // On mobile: skip hand, go directly to reaction
      this.startPhase(PHASE.REACTION);
    } else {
      this.startPhase(PHASE.HAND_APPEAR);
    }
  }

  doHandAppear() {
    const hand = document.getElementById('hand-svg');
    hand.classList.remove('hidden');

    setTimeout(() => {
      hand.classList.add('visible');
    }, 50);

    setTimeout(() => this.startPhase(PHASE.REACTION), 2500);
  }

  doReaction() {
    const endingText = document.getElementById('ending-text');
    endingText.classList.remove('hidden');
    endingText.textContent = '그렇구나.';

    setTimeout(() => {
      endingText.classList.add('visible');
    }, 50);

    // Wait for the weight of the moment
    setTimeout(() => {
      endingText.classList.remove('visible');
      setTimeout(() => this.startPhase(PHASE.POCKET), 1000);
    }, 3500);
  }

  doPocket() {
    const endingLayer = document.getElementById('ending-layer');
    const phone = document.getElementById('phone-frame');
    const hand = document.getElementById('hand-svg');

    // Animate everything down
    phone.style.transition = 'transform 3s cubic-bezier(0.4, 0, 0.65, 1)';
    phone.style.transform = 'translateY(120vh)';

    if (!this.mobile && hand) {
      hand.style.transition = 'transform 3s cubic-bezier(0.4, 0, 0.65, 1), opacity 2s ease';
      hand.style.transform = 'translateX(-50%) translateY(120vh)';
    }

    setTimeout(() => this.startPhase(PHASE.FADE_BLACK), 2500);
  }

  doFadeBlack() {
    // Hide ending layer
    const endingLayer = document.getElementById('ending-layer');
    endingLayer.style.opacity = '0';
    endingLayer.style.transition = 'opacity 2s ease';

    // Also hide game wrapper
    const wrapper = document.getElementById('game-wrapper');
    wrapper.style.opacity = '0';
    wrapper.style.transition = 'opacity 1s ease';

    setTimeout(() => this.startPhase(PHASE.TITLE), 3000);
  }

  doTitle() {
    const titleCard = document.getElementById('title-card');
    titleCard.classList.remove('hidden');

    setTimeout(() => {
      titleCard.classList.add('visible');
    }, 100);

    // Allow click to... nothing. Just sit with the feeling.
    setTimeout(() => {
      unblockInput();
      this.phase = PHASE.DONE;
    }, 4000);
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  update(dt) {
    this.phaseTime += dt;
  }

  render(ctx) {
    // During zoom-out phase, keep rendering black with haeun
    if (this.phase <= PHASE.SHOW_CHAT) {
      const { w, h } = getBaseSize();
      clearScreen('#000000');

      // Faint silhouette of haeun at center
      if (this.phase <= PHASE.ZOOM_OUT) {
        const cx = w / 2;
        const cy = h / 2 + 10;
        ctx.fillStyle = 'rgba(100, 85, 75, 0.5)';
        // Head
        ctx.beginPath();
        ctx.arc(cx, cy - 28, 8, 0, Math.PI * 2);
        ctx.fill();
        // Body
        ctx.fillRect(cx - 8, cy - 20, 16, 25);
      }
    }
  }

  cleanup() {
    // Reset DOM elements
    const wrapper = document.getElementById('game-wrapper');
    wrapper.style.transform = '';
    wrapper.style.transition = '';
    wrapper.style.opacity = '';

    const canvas = document.getElementById('game-canvas');
    canvas.style.opacity = '';
    canvas.style.transition = '';

    const endingLayer = document.getElementById('ending-layer');
    endingLayer.classList.add('hidden');
    endingLayer.style.opacity = '';

    const phone = document.getElementById('phone-frame');
    phone.style.opacity = '0';
    phone.style.transform = '';

    const hand = document.getElementById('hand-svg');
    hand.classList.add('hidden');
    hand.classList.remove('visible');
    hand.style.transform = '';

    const endingText = document.getElementById('ending-text');
    endingText.classList.add('hidden');
    endingText.classList.remove('visible');

    const titleCard = document.getElementById('title-card');
    titleCard.classList.add('hidden');
    titleCard.classList.remove('visible');

    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';

    if (this.removeAdvance) this.removeAdvance();
    unblockInput();
  }
}
