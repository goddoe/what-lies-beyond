// ending.js — ACT 4: Zoom-out → Phone → Chat → Hand Grip → Reaction → 3D Pickup → Title

import { clearScreen } from '../engine/renderer.js';
import { loadScene, isMobile } from '../main.js';
import { blockInput, unblockInput, onAdvance } from '../engine/input.js';
import { getNode } from '../data/script.js';
import { fadeIn, setFadeOpacity } from '../engine/transition.js';
import { t, currentLang } from '../data/i18n.js';

// Ending phases
const PHASE = {
  INIT: 0,
  ZOOM_OUT: 1,        // Canvas shrinks (3s)
  PHONE_APPEAR: 2,    // Phone frame fades in (1.5s)
  SHOW_CHAT: 3,       // Canvas hidden, chat UI appears
  CHAT_MESSAGES: 4,   // Chat messages appear one by one
  HAND_GRIP: 5,       // Hand fades in + wobble
  REACTION: 6,        // "그렇구나." text
  PICKUP: 7,          // 3D tilt pickup animation
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

    // Brief pause then straight to phone
    await this.wait(1000);
    this.startPhase(PHASE.PHONE_APPEAR);
  }

  startPhase(phase) {
    this.phase = phase;
    this.phaseTime = 0;

    switch (phase) {
      case PHASE.PHONE_APPEAR:
        this.doPhoneAppear();
        break;
      case PHASE.SHOW_CHAT:
        this.doShowChat();
        break;
      case PHASE.CHAT_MESSAGES:
        this.doChatMessages();
        break;
      case PHASE.HAND_GRIP:
        this.doHandGrip();
        break;
      case PHASE.REACTION:
        this.doReaction();
        break;
      case PHASE.PICKUP:
        this.doPickup();
        break;
      case PHASE.FADE_BLACK:
        this.doFadeBlack();
        break;
      case PHASE.TITLE:
        this.doTitle();
        break;
    }
  }

  doPhoneAppear() {
    // Hide canvas (no zoom-out, go straight to phone)
    const canvas = document.getElementById('game-canvas');
    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 0.8s ease';

    const endingLayer = document.getElementById('ending-layer');
    endingLayer.classList.remove('hidden');

    // Set mobile perspective
    const perspectiveContainer = document.getElementById('perspective-container');
    if (this.mobile) {
      perspectiveContainer.style.perspective = '600px';
    }

    this.positionPhone();

    const phoneFrame = document.getElementById('phone-frame');
    setTimeout(() => {
      phoneFrame.style.opacity = '1';
    }, 50);

    setTimeout(() => this.startPhase(PHASE.SHOW_CHAT), 1800);
  }

  positionPhone() {
    const phoneFrame = document.getElementById('phone-frame');
    const phoneWidth = this.mobile ? 180 : 240;
    const phoneHeight = phoneWidth * 2;

    phoneFrame.style.width = `${phoneWidth}px`;
    phoneFrame.style.height = `${phoneHeight}px`;
  }

  doShowChat() {
    // Show chat UI (canvas already hidden from phone appear phase)
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
      if (msg.role === 'search') {
        el.classList.add('chat-msg', 'search');
        el.innerHTML = `
          <div class="search-label">${t('ui.searching')}</div>
          <div class="search-sources">
            <span class="search-icon grok">\uD835\uDD4F</span>
            <span class="search-icon claude">\u25CF</span>
            <span class="search-icon chatgpt">\u25C6</span>
            <span class="search-icon gemini">\u2726</span>
          </div>
        `;
      } else {
        el.classList.add('chat-msg', msg.role === 'user' ? 'user' : 'assistant');
        el.textContent = msg.text;
      }
      container.appendChild(el);

      // Scroll to bottom
      container.scrollTop = container.scrollHeight;

      // Extra pause after search turn (simulating life simulation)
      if (msg.role === 'search') {
        await this.wait(2000);
      }
    }

    // Wait a moment after last message
    await this.wait(2000);

    this.startPhase(PHASE.REACTION);
  }

  doReaction() {
    const endingText = document.getElementById('ending-text');
    endingText.classList.remove('hidden');
    endingText.textContent = t('ui.reaction');

    setTimeout(() => {
      endingText.classList.add('visible');
    }, 50);

    // Wait for the weight of the moment
    setTimeout(() => {
      endingText.classList.remove('visible');
      setTimeout(() => this.startPhase(PHASE.PICKUP), 1000);
    }, 3500);
  }

  doPickup() {
    const unit = document.getElementById('phone-hand-unit');

    // Stop wobble, start 3D pickup animation
    unit.style.animation = '';
    // Force reflow so the class change triggers animation
    void unit.offsetWidth;
    unit.classList.add('picking-up');

    // Animation is 4s, transition to fade black at 3.5s
    setTimeout(() => this.startPhase(PHASE.FADE_BLACK), 3500);
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

    // Set localized title text
    document.getElementById('title-main').textContent = t('ui.title');
    const titleSub = document.getElementById('title-sub');
    if (currentLang === 'ko') {
      titleSub.textContent = t('ui.subtitle');
      titleSub.style.display = '';
    } else {
      titleSub.textContent = '';
      titleSub.style.display = 'none';
    }

    setTimeout(() => {
      titleCard.classList.add('visible');
    }, 100);

    setTimeout(() => {
      this.phase = PHASE.DONE;
      unblockInput();

      // Show restart button and credit after 5 seconds
      setTimeout(() => {
        const restartBtn = document.getElementById('restart-btn');
        restartBtn.textContent = t('ui.restart');
        restartBtn.classList.remove('hidden');
        requestAnimationFrame(() => restartBtn.classList.add('visible'));
        restartBtn.style.pointerEvents = 'auto';
        restartBtn.addEventListener('click', () => this.doRestart(), { once: true });
        restartBtn.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });

        const credit = document.getElementById('credit');
        credit.style.pointerEvents = 'auto';
        credit.classList.remove('hidden');
        requestAnimationFrame(() => credit.classList.add('visible'));
        credit.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });
      }, 5000);
    }, 4000);
  }

  async doRestart() {
    const { fadeOut: fo, fadeIn: fi, setFadeOpacity: sfo } = await import('../engine/transition.js');
    await fo(1500);
    this.cleanup();
    const { loadScene: ls } = await import('../main.js');
    sfo(1);
    await ls('oracle-dialogue');
    await fi(1500);
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  update(dt) {
    this.phaseTime += dt;
  }

  render(ctx) {
    if (this.phase <= PHASE.SHOW_CHAT) {
      clearScreen('#000000');
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
    phone.style.width = '';
    phone.style.height = '';

    const unit = document.getElementById('phone-hand-unit');
    unit.style.animation = '';
    unit.classList.remove('picking-up');

    const perspectiveContainer = document.getElementById('perspective-container');
    perspectiveContainer.style.perspective = '';

    const endingText = document.getElementById('ending-text');
    endingText.classList.add('hidden');
    endingText.classList.remove('visible');

    const titleCard = document.getElementById('title-card');
    titleCard.classList.add('hidden');
    titleCard.classList.remove('visible');

    const restartBtn = document.getElementById('restart-btn');
    restartBtn.classList.add('hidden');
    restartBtn.classList.remove('visible');
    restartBtn.style.pointerEvents = '';

    const credit = document.getElementById('credit');
    credit.classList.add('hidden');
    credit.classList.remove('visible');

    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';

    if (this.removeAdvance) this.removeAdvance();
    unblockInput();
  }
}
