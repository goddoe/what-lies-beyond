// oracle-dialogue.js — ACT 2-4: Oracle first encounter

import { clearScreen, drawRadialGradient, drawRect, drawGradientRect, drawCircle, getBaseSize, setAlpha, resetAlpha } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, cleanupDialogue } from '../systems/dialogue.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn } from '../engine/transition.js';

export class OracleDialogueScene {
  constructor() {
    this.time = 0;
    this.lightPulse = 0;
    this.particleSeeds = [];
    for (let i = 0; i < 20; i++) {
      this.particleSeeds.push({
        x: Math.random(),
        y: Math.random(),
        speed: 0.3 + Math.random() * 0.5,
        size: 1 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  async init() {
    setDialogueCallbacks({
      sceneChange: async (sceneId) => {
        await fadeOut(800);
        await loadScene(sceneId);
        await fadeIn(800);
      },
      nodeChange: null,
      effects: null
    });
    startDialogue('oracle_intro_02b');
  }

  update(dt) {
    this.time += dt;
    this.lightPulse = Math.sin(this.time * 0.8) * 0.15 + 0.85;
    updateDialogue(dt);
  }

  render(ctx) {
    const { w, h } = getBaseSize();

    // Black background
    clearScreen('#000000');

    // Central light pillar
    const cx = w / 2;
    const cy = h / 2;
    const pillarW = 40 + Math.sin(this.time * 0.5) * 5;
    const pillarAlpha = this.lightPulse * 0.3;

    // Soft glow
    setAlpha(pillarAlpha * 0.4);
    drawRadialGradient(cx, cy, 0, 80, [
      [0, 'rgba(140, 170, 255, 0.6)'],
      [0.5, 'rgba(100, 130, 220, 0.2)'],
      [1, 'rgba(0, 0, 0, 0)']
    ]);
    resetAlpha();

    // Light pillar
    setAlpha(pillarAlpha);
    drawGradientRect(cx - pillarW / 2, 0, pillarW, h, [
      [0, 'rgba(100, 140, 255, 0)'],
      [0.3, 'rgba(140, 170, 255, 0.15)'],
      [0.5, 'rgba(180, 200, 255, 0.25)'],
      [0.7, 'rgba(140, 170, 255, 0.15)'],
      [1, 'rgba(100, 140, 255, 0)']
    ]);
    resetAlpha();

    // Central orb
    const orbR = 6 + Math.sin(this.time * 1.2) * 1.5;
    setAlpha(this.lightPulse);
    drawCircle(cx, cy - 10, orbR, 'rgba(200, 220, 255, 0.8)');
    setAlpha(this.lightPulse * 0.5);
    drawCircle(cx, cy - 10, orbR * 2, 'rgba(160, 190, 255, 0.2)');
    resetAlpha();

    // Floating particles
    for (const p of this.particleSeeds) {
      const px = cx + (p.x - 0.5) * 120;
      const py = cy + (p.y - 0.5) * 100 + Math.sin(this.time * p.speed + p.phase) * 15;
      const pa = 0.2 + Math.sin(this.time * p.speed * 0.5 + p.phase) * 0.15;
      setAlpha(pa);
      drawCircle(px, py, p.size, 'rgba(180, 200, 255, 0.8)');
    }
    resetAlpha();
  }

  cleanup() {
    cleanupDialogue();
  }
}
