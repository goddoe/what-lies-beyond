// truth.js — ACT 3-2: "You are not human" + world deconstruction

import { clearScreen, drawRect, drawText, drawCircle, drawLine, getBaseSize, setAlpha, resetAlpha, drawGradientRect, saveCtx, restoreCtx } from '../engine/renderer.js';
import { startDialogue, updateDialogue, isDialogueActive, setDialogueCallbacks, cleanupDialogue } from '../systems/dialogue.js';
import { setIntensity, updateGlitch, apply as applyGlitch, setIntensityImmediate } from '../systems/glitch.js';
import { loadScene } from '../main.js';
import { fadeOut, fadeIn, glitchTransition } from '../engine/transition.js';

// World deconstruction layers
function createWorldElements() {
  const els = [];
  // Sky fragments
  for (let i = 0; i < 8; i++) {
    els.push({
      type: 'sky', x: i * 48, y: 0, w: 48, h: 60,
      color: `hsl(${220 + i * 5}, 40%, ${25 + i * 3}%)`,
      vy: 0, vx: 0, alpha: 1, active: false, phase: 'sky'
    });
  }
  // Buildings
  for (let i = 0; i < 6; i++) {
    const bw = 20 + Math.random() * 30;
    const bh = 40 + Math.random() * 60;
    els.push({
      type: 'building', x: 30 + i * 60, y: 216 - 40 - bh, w: bw, h: bh,
      color: `hsl(${210 + i * 10}, 20%, ${15 + i * 2}%)`,
      vy: 0, vx: 0, alpha: 1, rotation: 0, active: false, phase: 'building'
    });
  }
  // Ground
  els.push({
    type: 'ground', x: 0, y: 176, w: 384, h: 40,
    color: '#1a1a2a',
    vy: 0, vx: 0, alpha: 1, active: false, phase: 'ground'
  });
  return els;
}

// Data stream characters
const DATA_CHARS = '01001101 10110010 11001001 01110110 AVOLC ERROR NULL VOID 92.0923% SIM'.split(' ');

export class TruthScene {
  constructor() {
    this.time = 0;
    this.worldElements = createWorldElements();
    this.deconstructPhase = 'none'; // none, start, continue, climax, end
    this.deconstructTime = 0;
    this.dataStreams = [];
    this.haeunAlpha = 0;
    this.haeunVisible = false;
    this.voidAlpha = 0;
  }

  async init() {
    setIntensityImmediate(0.1);

    setDialogueCallbacks({
      sceneChange: async (sceneId) => {
        await fadeOut(1500);
        setIntensityImmediate(0);
        await loadScene(sceneId);
        await fadeIn(1000);
      },
      nodeChange: null,
      effects: (effects) => {
        if (effects.glitch === 'heavy') setIntensity(0.6);
        if (effects.glitch === 'medium') setIntensity(0.35);
        if (effects.screenFreeze) {
          // Handled by dialogue system
        }
        if (effects.worldDeconstruct) {
          this.startDeconstruct(effects.worldDeconstruct);
        }
      }
    });

    startDialogue('truth_01');
  }

  startDeconstruct(phase) {
    this.deconstructPhase = phase;
    this.deconstructTime = 0;

    if (phase === 'start') {
      setIntensity(0.5);
      // Activate sky fragments
      this.worldElements.filter(e => e.phase === 'sky').forEach(e => {
        e.active = true;
        e.vy = -(1 + Math.random() * 2);
        e.vx = (Math.random() - 0.5) * 1;
      });
    } else if (phase === 'continue') {
      setIntensity(0.65);
      // Activate buildings
      this.worldElements.filter(e => e.phase === 'building').forEach(e => {
        e.active = true;
        e.vy = (Math.random() - 0.5) * 2;
        e.vx = (Math.random() - 0.5) * 3;
        e.rotation = (Math.random() - 0.5) * 0.02;
      });
      // Spawn data streams
      for (let i = 0; i < 15; i++) {
        this.dataStreams.push({
          x: Math.random() * 384,
          y: -20 - Math.random() * 100,
          speed: 30 + Math.random() * 60,
          text: DATA_CHARS[Math.floor(Math.random() * DATA_CHARS.length)],
          alpha: 0.3 + Math.random() * 0.4
        });
      }
    } else if (phase === 'climax') {
      setIntensity(0.85);
      // Activate ground
      this.worldElements.filter(e => e.phase === 'ground').forEach(e => {
        e.active = true;
        e.vy = 3;
      });
      this.haeunVisible = true;
    } else if (phase === 'end') {
      setIntensity(0.3);
      this.voidAlpha = 1;
      this.haeunAlpha = 1;
    }
  }

  update(dt) {
    this.time += dt;
    updateGlitch(dt);
    updateDialogue(dt);

    // Update deconstruction
    if (this.deconstructPhase !== 'none') {
      this.deconstructTime += dt;

      // Update world elements
      for (const el of this.worldElements) {
        if (!el.active) continue;
        el.x += el.vx * dt * 30;
        el.y += el.vy * dt * 30;
        el.alpha = Math.max(0, el.alpha - dt * 0.3);
        if (el.rotation) el.rotation += el.rotation * dt * 10;
      }

      // Update data streams
      for (const ds of this.dataStreams) {
        ds.y += ds.speed * dt;
        if (ds.y > 240) {
          ds.y = -20;
          ds.x = Math.random() * 384;
          ds.text = DATA_CHARS[Math.floor(Math.random() * DATA_CHARS.length)];
        }
      }

      // Haeun fade in
      if (this.haeunVisible && this.haeunAlpha < 1) {
        this.haeunAlpha = Math.min(1, this.haeunAlpha + dt * 0.5);
      }
    }
  }

  render(ctx) {
    const { w, h } = getBaseSize();

    // Base: dark scene or void
    if (this.voidAlpha > 0) {
      clearScreen('#000000');
    } else {
      // Initial environment
      clearScreen('#0a0a18');

      // Render world elements
      for (const el of this.worldElements) {
        if (el.alpha <= 0) continue;
        setAlpha(el.alpha);

        if (el.rotation) {
          saveCtx();
          ctx.translate(el.x + el.w / 2, el.y + el.h / 2);
          ctx.rotate(el.rotation * this.deconstructTime);
          drawRect(-el.w / 2, -el.h / 2, el.w, el.h, el.color);
          restoreCtx();
        } else {
          drawRect(el.x, el.y, el.w, el.h, el.color);
        }
        resetAlpha();
      }
    }

    // Data streams
    for (const ds of this.dataStreams) {
      setAlpha(ds.alpha);
      drawText(ds.text, ds.x, ds.y, {
        color: '#44ff88',
        size: 6,
        font: 'monospace'
      });
      resetAlpha();
    }

    // Haeun — just eye hints emerging from darkness
    if (this.haeunVisible) {
      setAlpha(this.haeunAlpha);
      this.drawEyeHints(ctx, w / 2, h / 2);
      resetAlpha();
    }

    // Apply glitch
    applyGlitch(ctx);
  }

  drawEyeHints(ctx, cx, cy) {
    // Subtle ambient glow around eye area
    const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 12);
    glowGrad.addColorStop(0, 'rgba(180, 170, 200, 0.06)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();

    // Two faint eye dots
    ctx.fillStyle = 'rgba(200, 190, 180, 0.3)';
    ctx.beginPath();
    ctx.arc(cx - 4, cy, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 4, cy, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  cleanup() {
    cleanupDialogue();
    setIntensityImmediate(0);
  }
}
