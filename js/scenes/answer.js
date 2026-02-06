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
    // Head (oval, slightly larger)
    ctx.fillStyle = 'rgba(160, 140, 130, 0.85)';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 40, 13, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.fillStyle = 'rgba(150, 130, 120, 0.8)';
    ctx.beginPath();
    ctx.moveTo(cx - 4, cy - 26);
    ctx.lineTo(cx + 4, cy - 26);
    ctx.lineTo(cx + 3, cy - 22);
    ctx.lineTo(cx - 3, cy - 22);
    ctx.closePath();
    ctx.fill();

    // Body + shoulders (smooth curved torso)
    ctx.fillStyle = 'rgba(100, 85, 75, 0.8)';
    ctx.beginPath();
    ctx.moveTo(cx - 4, cy - 23);
    ctx.quadraticCurveTo(cx - 22, cy - 20, cx - 24, cy - 16);
    ctx.quadraticCurveTo(cx - 25, cy - 10, cx - 18, cy + 14);
    ctx.lineTo(cx + 18, cy + 14);
    ctx.quadraticCurveTo(cx + 25, cy - 10, cx + 24, cy - 16);
    ctx.quadraticCurveTo(cx + 22, cy - 20, cx + 4, cy - 23);
    ctx.closePath();
    ctx.fill();

    // Hair top (fuller, curved)
    ctx.fillStyle = 'rgba(35, 25, 20, 0.95)';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 46, 15, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Left hair strand (flowing to shoulder)
    ctx.beginPath();
    ctx.moveTo(cx - 13, cy - 44);
    ctx.bezierCurveTo(cx - 19, cy - 34, cx - 21, cy - 20, cx - 18, cy - 8);
    ctx.lineTo(cx - 13, cy - 10);
    ctx.bezierCurveTo(cx - 15, cy - 22, cx - 14, cy - 34, cx - 10, cy - 40);
    ctx.closePath();
    ctx.fill();

    // Right hair strand
    ctx.beginPath();
    ctx.moveTo(cx + 13, cy - 44);
    ctx.bezierCurveTo(cx + 19, cy - 34, cx + 21, cy - 20, cx + 18, cy - 8);
    ctx.lineTo(cx + 13, cy - 10);
    ctx.bezierCurveTo(cx + 15, cy - 22, cx + 14, cy - 34, cx + 10, cy - 40);
    ctx.closePath();
    ctx.fill();
  }

  drawEyes(ctx, cx, eyeY, openAmount) {
    if (openAmount < 0.05) return;

    const eyeSpacing = 7;
    const eyeW = 5;
    const eyeH = 3 * openAmount;

    // Left eye (ellipse)
    setAlpha(openAmount);
    ctx.fillStyle = 'rgba(220, 200, 180, 0.9)';
    ctx.beginPath();
    ctx.ellipse(cx - eyeSpacing, eyeY, eyeW / 2, eyeH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Right eye (ellipse)
    ctx.beginPath();
    ctx.ellipse(cx + eyeSpacing, eyeY, eyeW / 2, eyeH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pupils (look directly at camera = center)
    if (openAmount > 0.3) {
      const pupilAlpha = (openAmount - 0.3) / 0.7;
      setAlpha(pupilAlpha);
      ctx.fillStyle = 'rgba(20, 15, 10, 0.95)';
      ctx.beginPath();
      ctx.arc(cx - eyeSpacing, eyeY, 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + eyeSpacing, eyeY, 1.2, 0, Math.PI * 2);
      ctx.fill();
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
