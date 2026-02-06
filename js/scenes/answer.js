// answer.js — ACT 3-3: Fourth wall break, "97.6%"

import { clearScreen, drawRect, drawText, drawCircle, getBaseSize, setAlpha, resetAlpha } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, cleanupDialogue } from '../systems/dialogue.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn } from '../engine/transition.js';

export class AnswerScene {
  constructor() {
    this.time = 0;
    this.fourthWallBreak = false;
    this.breakTime = 0;
    this.eyeOpen = 0; // 0 to 1
    this.haeunY = 0;
    this.breathe = 0;
  }

  async init() {
    setDialogueCallbacks({
      sceneChange: async (sceneId) => {
        await fadeOut(2000);
        await loadScene(sceneId);
        // No fadeIn — ending scene handles its own entrance
      },
      nodeChange: null,
      effects: (effects) => {
        if (effects.fourthWallBreak) {
          this.fourthWallBreak = true;
          this.breakTime = 0;
        }
      }
    });

    startDialogue('answer_01');
  }

  update(dt) {
    this.time += dt;
    this.breathe = Math.sin(this.time * 1.5) * 1.5;

    if (this.fourthWallBreak) {
      this.breakTime += dt;
      // Eyes slowly open
      this.eyeOpen = Math.min(1, this.breakTime / 2);
    }

    updateDialogue(dt);
  }

  render(ctx) {
    const { w, h } = getBaseSize();
    clearScreen('#000000');

    const cx = w / 2;
    const baseY = h / 2 + 15 + this.breathe;

    // Haeun silhouette (larger, closer)
    setAlpha(0.9);
    this.drawHaeunClose(ctx, cx, baseY);
    resetAlpha();

    // Fourth wall break: eyes that look at player
    if (this.fourthWallBreak) {
      this.drawEyes(ctx, cx, baseY - 45, this.eyeOpen);
    }

    // Subtle vignette
    setAlpha(0.4);
    const grad = ctx.createRadialGradient(cx, h / 2, 30, cx, h / 2, w / 2);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    resetAlpha();
  }

  drawHaeunClose(ctx, cx, cy) {
    // Larger silhouette for close-up
    // Head
    drawCircle(cx, cy - 40, 14, 'rgba(160, 140, 130, 0.85)');
    // Hair
    drawRect(cx - 16, cy - 52, 32, 16, 'rgba(35, 25, 20, 0.95)');
    drawRect(cx - 18, cy - 40, 6, 22, 'rgba(35, 25, 20, 0.9)');
    drawRect(cx + 12, cy - 40, 6, 22, 'rgba(35, 25, 20, 0.9)');
    // Body
    drawRect(cx - 14, cy - 26, 28, 40, 'rgba(100, 85, 75, 0.8)');
    // Shoulders
    drawRect(cx - 20, cy - 26, 8, 8, 'rgba(100, 85, 75, 0.6)');
    drawRect(cx + 12, cy - 26, 8, 8, 'rgba(100, 85, 75, 0.6)');
  }

  drawEyes(ctx, cx, eyeY, openAmount) {
    if (openAmount < 0.05) return;

    const eyeSpacing = 7;
    const eyeW = 4;
    const eyeH = 2.5 * openAmount;

    // Left eye
    setAlpha(openAmount);
    drawRect(cx - eyeSpacing - eyeW / 2, eyeY - eyeH / 2, eyeW, eyeH, 'rgba(220, 200, 180, 0.9)');
    // Right eye
    drawRect(cx + eyeSpacing - eyeW / 2, eyeY - eyeH / 2, eyeW, eyeH, 'rgba(220, 200, 180, 0.9)');

    // Pupils (look directly at camera = center)
    if (openAmount > 0.3) {
      const pupilAlpha = (openAmount - 0.3) / 0.7;
      setAlpha(pupilAlpha);
      drawRect(cx - eyeSpacing - 1, eyeY - 0.5, 2, 1, 'rgba(20, 15, 10, 0.95)');
      drawRect(cx + eyeSpacing - 1, eyeY - 0.5, 2, 1, 'rgba(20, 15, 10, 0.95)');
    }

    // Subtle eye glow when fully open
    if (openAmount > 0.8) {
      const glowAlpha = (openAmount - 0.8) / 0.2 * 0.15;
      setAlpha(glowAlpha);
      drawCircle(cx - eyeSpacing, eyeY, 6, 'rgba(180, 200, 255, 0.3)');
      drawCircle(cx + eyeSpacing, eyeY, 6, 'rgba(180, 200, 255, 0.3)');
    }
    resetAlpha();
  }

  cleanup() {
    cleanupDialogue();
  }
}
