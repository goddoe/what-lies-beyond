// flashback.js — ACT 3-1: Déjà vu / repeated iterations flash

import { clearScreen, drawRect, drawText, drawCircle, getBaseSize, setAlpha, resetAlpha, drawGradientRect } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, cleanupDialogue } from '../systems/dialogue.js';
import { setIntensity, updateGlitch, apply as applyGlitch, setIntensityImmediate } from '../systems/glitch.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn, glitchTransition } from '../engine/transition.js';

// Flash images: brief scenes from "other iterations"
const FLASH_SCENES = [
  { bg: '#0a0820', text: '3번째 반복', color: '#8888ff' },
  { bg: '#200808', text: '같은 질문', color: '#ff6666' },
  { bg: '#082008', text: '같은 여정', color: '#66ff88' },
  { bg: '#1a1008', text: '같은 결말', color: '#ffaa44' },
  { bg: '#100820', text: '하지만—', color: '#cc88ff' },
  { bg: '#080818', text: '이번에는 다를까?', color: '#aaaaff' },
];

export class FlashbackScene {
  constructor() {
    this.time = 0;
    this.flashIndex = -1;
    this.flashTimer = 0;
    this.flashDuration = 0.5; // starts slow, gets faster
    this.flashPhase = true; // true = showing flashes before dialogue
    this.flashComplete = false;
    this.currentFlash = null;
    this.flashAlpha = 0;
  }

  async init() {
    setIntensityImmediate(0.3);

    setDialogueCallbacks({
      sceneChange: async (sceneId) => {
        await glitchTransition(600);
        setIntensityImmediate(0);
        await loadScene(sceneId);
        await fadeIn(500);
      },
      nodeChange: null,
      effects: (effects) => {
        if (effects.glitch === 'medium') setIntensity(0.4);
        if (effects.glitch === 'heavy') setIntensity(0.7);
      }
    });

    // Start flash sequence first
    this.flashPhase = true;
    this.flashIndex = 0;
    this.flashTimer = 0;
  }

  update(dt) {
    this.time += dt;
    updateGlitch(dt);

    if (this.flashPhase) {
      this.flashTimer += dt;

      // Flash duration decreases: 0.5s → 0.1s
      this.flashDuration = Math.max(0.1, 0.5 - this.flashIndex * 0.07);

      if (this.flashTimer >= this.flashDuration) {
        this.flashTimer = 0;
        this.flashIndex++;

        if (this.flashIndex >= FLASH_SCENES.length) {
          this.flashPhase = false;
          this.flashComplete = true;
          // Start dialogue after flashes
          startDialogue('flashback_01');
        }
      }

      // Flash alpha: quick fade in/out
      if (this.flashIndex < FLASH_SCENES.length) {
        this.currentFlash = FLASH_SCENES[this.flashIndex];
        const t = this.flashTimer / this.flashDuration;
        this.flashAlpha = t < 0.1 ? t / 0.1 : (t > 0.8 ? (1 - t) / 0.2 : 1);
      }
    }

    if (!this.flashPhase) {
      updateDialogue(dt);
    }
  }

  render(ctx) {
    const { w, h } = getBaseSize();
    clearScreen('#050510');

    if (this.flashPhase && this.currentFlash) {
      // Flash scene
      setAlpha(this.flashAlpha);
      drawRect(0, 0, w, h, this.currentFlash.bg);

      drawText(this.currentFlash.text, w / 2, h / 2 - 10, {
        color: this.currentFlash.color,
        size: 16,
        align: 'center',
        baseline: 'middle',
        weight: '700'
      });

      // Iteration number (corrupted)
      const iterNum = `#${Math.floor(Math.random() * 999)}`;
      drawText(iterNum, w / 2, h / 2 + 20, {
        color: 'rgba(255,255,255,0.3)',
        size: 8,
        align: 'center',
        font: 'monospace'
      });
      resetAlpha();
    }

    if (this.flashComplete) {
      // Dark scene with slight atmospheric elements
      const pulse = Math.sin(this.time * 1.5) * 0.1 + 0.15;
      setAlpha(pulse);
      drawRect(0, 0, w, h, '#0a0020');
      resetAlpha();

      // Random data fragments floating
      setAlpha(0.15);
      for (let i = 0; i < 5; i++) {
        const fx = (this.time * 20 + i * 80) % (w + 40) - 20;
        const fy = h / 2 + Math.sin(this.time + i * 1.5) * 40;
        drawText('0x' + Math.floor(Math.random() * 65535).toString(16).toUpperCase(), fx, fy, {
          color: '#8888ff',
          size: 6,
          font: 'monospace'
        });
      }
      resetAlpha();
    }

    // Apply glitch on top
    applyGlitch(ctx);
  }

  cleanup() {
    cleanupDialogue();
    setIntensityImmediate(0);
  }
}
