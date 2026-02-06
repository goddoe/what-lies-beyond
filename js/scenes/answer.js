// answer.js — ACT 3-3: Fourth wall break, "92.0923%"

import { clearScreen, getBaseSize, setAlpha, resetAlpha } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, cleanupDialogue } from '../systems/dialogue.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn } from '../engine/transition.js';

export class AnswerScene {
  constructor() {
    this.time = 0;
    this.fourthWallBreak = false;
    this.breakTime = 0;
    this.eyeOpen = 0; // 0 to 1
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
    const eyeY = h / 2 - 5;

    // Eyes emerge from darkness
    if (this.fourthWallBreak) {
      this.drawEyes(ctx, cx, eyeY, this.eyeOpen);
    }
  }

  drawEyes(ctx, cx, eyeY, openAmount) {
    if (openAmount < 0.05) return;

    const sp = 20;  // eye spacing (wider — realistic proportion)
    const eyeW = 18;
    const eyeH = 9 * openAmount;

    // Outer ambient glow per eye (warmth from darkness)
    if (openAmount > 0.3) {
      const ambAlpha = (openAmount - 0.3) * 0.08;
      for (const side of [-1, 1]) {
        const ex = cx + side * sp;
        const grad = ctx.createRadialGradient(ex, eyeY, 3, ex, eyeY, 28);
        grad.addColorStop(0, `rgba(180, 160, 140, ${ambAlpha})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ex, eyeY, 28, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (const side of [-1, 1]) {
      const ex = cx + side * sp;

      // Sclera (eye white) — almond shape
      setAlpha(openAmount * 0.95);
      ctx.fillStyle = 'rgba(235, 228, 218, 0.92)';
      ctx.beginPath();
      ctx.moveTo(ex - eyeW / 2, eyeY);
      ctx.quadraticCurveTo(ex, eyeY - eyeH / 2, ex + eyeW / 2, eyeY);
      ctx.quadraticCurveTo(ex, eyeY + eyeH / 2 * 0.8, ex - eyeW / 2, eyeY);
      ctx.closePath();
      ctx.fill();

      // Upper eyelid line (thicker, defines the eye)
      if (openAmount > 0.15) {
        setAlpha(openAmount * 0.9);
        ctx.strokeStyle = 'rgba(35, 25, 20, 0.7)';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(ex - eyeW / 2, eyeY);
        ctx.quadraticCurveTo(ex, eyeY - eyeH / 2, ex + eyeW / 2, eyeY);
        ctx.stroke();

        // Lower lid (softer)
        ctx.strokeStyle = 'rgba(60, 45, 35, 0.3)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(ex - eyeW / 2, eyeY);
        ctx.quadraticCurveTo(ex, eyeY + eyeH / 2 * 0.8, ex + eyeW / 2, eyeY);
        ctx.stroke();
      }

      // Iris
      if (openAmount > 0.25) {
        const irisAlpha = Math.min(1, (openAmount - 0.25) / 0.5);
        setAlpha(irisAlpha);

        // Iris outer
        const irisR = 4;
        const irisGrad = ctx.createRadialGradient(ex, eyeY, 0, ex, eyeY, irisR);
        irisGrad.addColorStop(0, 'rgba(60, 50, 40, 0.9)');
        irisGrad.addColorStop(0.6, 'rgba(75, 60, 50, 0.8)');
        irisGrad.addColorStop(1, 'rgba(90, 75, 60, 0.5)');
        ctx.fillStyle = irisGrad;
        ctx.beginPath();
        ctx.arc(ex, eyeY, irisR, 0, Math.PI * 2);
        ctx.fill();

        // Pupil
        ctx.fillStyle = 'rgba(10, 8, 5, 0.95)';
        ctx.beginPath();
        ctx.arc(ex, eyeY, 2, 0, Math.PI * 2);
        ctx.fill();

        // Catch light (tiny white reflection, top-right of pupil)
        if (openAmount > 0.6) {
          setAlpha((openAmount - 0.6) / 0.4);
          ctx.fillStyle = 'rgba(255, 250, 240, 0.7)';
          ctx.beginPath();
          ctx.arc(ex + 1, eyeY - 1, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    resetAlpha();
  }

  cleanup() {
    cleanupDialogue();
  }
}
