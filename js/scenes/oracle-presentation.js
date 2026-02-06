// oracle-presentation.js — ACT 2-4: 4 slides + 97.6% countup

import { clearScreen, drawRect, drawRectStroke, drawText, drawLine, drawCircle, getBaseSize, setAlpha, resetAlpha, drawGradientRect } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, getCurrentNode, cleanupDialogue } from '../systems/dialogue.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn } from '../engine/transition.js';

export class OraclePresentationScene {
  constructor() {
    this.time = 0;
    this.slideIndex = -1;
    this.countupValue = 0;
    this.countupActive = false;
    this.countupDone = false;
    this.slideTransitionAlpha = 0;
  }

  async init() {
    setDialogueCallbacks({
      sceneChange: async (sceneId) => {
        await fadeOut(800);
        await loadScene(sceneId);
        await fadeIn(800);
      },
      nodeChange: (node) => {
        if (node.slide) {
          if (node.slide.index !== undefined) {
            this.slideIndex = node.slide.index;
          }
          if (node.slide.triggerCountup) {
            this.countupActive = true;
            this.countupValue = 0;
          }
        }
      },
      effects: null
    });
    startDialogue('pres_slide_01');
  }

  update(dt) {
    this.time += dt;
    updateDialogue(dt);

    // Countup animation (easeOutExpo)
    if (this.countupActive && !this.countupDone) {
      this.countupValue += dt * 35; // Takes ~3s to reach 97.6
      if (this.countupValue >= 97.6) {
        this.countupValue = 97.6;
        this.countupDone = true;
      }
    }
  }

  render(ctx) {
    const { w, h } = getBaseSize();
    clearScreen('#0a0a12');

    // Dark grid background
    setAlpha(0.08);
    for (let x = 0; x < w; x += 16) {
      drawRect(x, 0, 1, h, '#4466aa');
    }
    for (let y = 0; y < h; y += 16) {
      drawRect(0, y, w, 1, '#4466aa');
    }
    resetAlpha();

    // Draw current slide visual
    switch (this.slideIndex) {
      case 0: this.renderPixelZoom(ctx, w, h); break;
      case 1: this.renderTimeline(ctx, w, h); break;
      case 2: this.renderPatternGraph(ctx, w, h); break;
      case 3: this.renderCountup(ctx, w, h); break;
      default: break;
    }
  }

  renderPixelZoom(ctx, w, h) {
    // Pixel zoom visualization - expanding grid squares
    const cx = w / 2;
    const cy = h / 2 - 20;
    const zoom = 1 + Math.sin(this.time * 0.5) * 0.3;
    const gridSize = 8 * zoom;

    for (let gx = -6; gx <= 6; gx++) {
      for (let gy = -4; gy <= 4; gy++) {
        const px = cx + gx * gridSize;
        const py = cy + gy * gridSize;
        const dist = Math.sqrt(gx * gx + gy * gy);
        const alpha = Math.max(0, 0.5 - dist * 0.06);
        const hue = (dist * 30 + this.time * 20) % 360;

        setAlpha(alpha);
        drawRect(px - gridSize / 2 + 1, py - gridSize / 2 + 1, gridSize - 2, gridSize - 2,
          `hsl(${220 + gx * 5}, 60%, ${30 + gy * 3}%)`);
        resetAlpha();
      }
    }

    // Title
    drawText('불연속성의 증거', cx, 16, {
      color: 'rgba(180, 200, 255, 0.9)',
      size: 12,
      align: 'center',
      weight: '700'
    });
    drawText('Evidence of Discreteness', cx, 30, {
      color: 'rgba(140, 160, 200, 0.5)',
      size: 7,
      align: 'center'
    });
  }

  renderTimeline(ctx, w, h) {
    const cx = w / 2;
    const lineY = h / 2 - 15;

    // Timeline base
    drawLine(40, lineY, w - 40, lineY, 'rgba(100, 130, 200, 0.4)', 1);

    // Timeline markers
    const markers = [60, 110, 160, 200, 250, 300, 340];
    const anomalies = [1, 3, 5]; // indices of anomalous markers

    markers.forEach((mx, i) => {
      const isAnomaly = anomalies.includes(i);
      const color = isAnomaly ? 'rgba(255, 60, 60, 0.8)' : 'rgba(100, 150, 220, 0.6)';
      drawRect(mx - 1, lineY - 6, 2, 12, color);

      if (isAnomaly) {
        // Pulsing red marker
        const pulse = Math.sin(this.time * 3 + i) * 0.3 + 0.7;
        setAlpha(pulse);
        drawCircle(mx, lineY, 4, 'rgba(255, 40, 40, 0.6)');
        resetAlpha();
      }
    });

    // Title
    drawText('기록의 불일치', cx, 16, {
      color: 'rgba(180, 200, 255, 0.9)',
      size: 12,
      align: 'center',
      weight: '700'
    });
    drawText('Record Inconsistencies', cx, 30, {
      color: 'rgba(140, 160, 200, 0.5)',
      size: 7,
      align: 'center'
    });
  }

  renderPatternGraph(ctx, w, h) {
    const cx = w / 2;

    // Graph axes
    drawLine(60, 40, 60, h - 55, 'rgba(100, 130, 200, 0.3)', 1);
    drawLine(60, h - 55, w - 40, h - 55, 'rgba(100, 130, 200, 0.3)', 1);

    // "Natural" line (blue)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(80, 140, 220, 0.5)';
    ctx.lineWidth = 1;
    for (let x = 60; x < w - 40; x += 2) {
      const t = (x - 60) / (w - 100);
      const y = (h - 55) - (40 + Math.sin(t * 6) * 15 + t * 30);
      if (x === 60) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // "Observed" line (white, with anomalous spikes)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1;
    for (let x = 60; x < w - 40; x += 2) {
      const t = (x - 60) / (w - 100);
      let y = (h - 55) - (40 + Math.sin(t * 6) * 15 + t * 30);
      // Anomalous spikes
      if (Math.abs(t - 0.3) < 0.03 || Math.abs(t - 0.6) < 0.03 || Math.abs(t - 0.85) < 0.02) {
        y -= 20 + Math.sin(this.time * 5 + t * 20) * 5;
      }
      if (x === 60) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Legend
    drawRect(w - 120, 45, 8, 2, 'rgba(80, 140, 220, 0.5)');
    drawText('자연 패턴', w - 108, 42, { color: 'rgba(80, 140, 220, 0.6)', size: 6 });
    drawRect(w - 120, 55, 8, 2, 'rgba(255, 255, 255, 0.7)');
    drawText('관측값', w - 108, 52, { color: 'rgba(255, 255, 255, 0.6)', size: 6 });

    // Title
    drawText('상위 존재의 개입', cx, 16, {
      color: 'rgba(180, 200, 255, 0.9)',
      size: 12,
      align: 'center',
      weight: '700'
    });
    drawText('Signs of External Intervention', cx, 30, {
      color: 'rgba(140, 160, 200, 0.5)',
      size: 7,
      align: 'center'
    });
  }

  renderCountup(ctx, w, h) {
    const cx = w / 2;
    const cy = h / 2 - 20;

    // Title
    drawText('시뮬레이션 확률', cx, 16, {
      color: 'rgba(180, 200, 255, 0.9)',
      size: 12,
      align: 'center',
      weight: '700'
    });
    drawText('Simulation Probability', cx, 30, {
      color: 'rgba(140, 160, 200, 0.5)',
      size: 7,
      align: 'center'
    });

    // Big number
    const displayVal = this.countupActive ? this.countupValue.toFixed(1) : '0.0';
    const numColor = this.countupDone ? 'rgba(255, 100, 100, 1)' : 'rgba(200, 220, 255, 0.95)';

    drawText(`${displayVal}%`, cx, cy, {
      color: numColor,
      size: 36,
      align: 'center',
      baseline: 'middle',
      weight: '700'
    });

    // Pulsing ring when done
    if (this.countupDone) {
      const pulse = Math.sin(this.time * 2) * 0.2 + 0.5;
      setAlpha(pulse);
      drawRectStroke(cx - 60, cy - 25, 120, 50, 'rgba(255, 80, 80, 0.6)', 1);
      resetAlpha();
    }

    // Progress bar
    const barW = 200;
    const barH = 4;
    const barX = cx - barW / 2;
    const barY = cy + 35;
    drawRect(barX, barY, barW, barH, 'rgba(60, 70, 100, 0.5)');
    const fillW = (this.countupActive ? this.countupValue / 100 : 0) * barW;
    const barColor = this.countupDone ? 'rgba(255, 80, 80, 0.8)' : 'rgba(100, 150, 255, 0.7)';
    drawRect(barX, barY, fillW, barH, barColor);
  }

  cleanup() {
    cleanupDialogue();
  }
}
