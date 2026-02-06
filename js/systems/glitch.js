// glitch.js — Glitch effects: tear, color corruption, text corruption, tile crack

import { getBaseSize, getCtx } from '../engine/renderer.js';

let intensity = 0;
let targetIntensity = 0;
const LERP_SPEED = 2;

// Corruption characters for text glitch
const CORRUPT_CHARS = '▓░▒█▌▐▀▄■□◊◈◇◆☐☒✕✖✗✘⌧⊘⊗⊕⊙⊛⊜⊝';

export function setIntensity(val) {
  targetIntensity = Math.max(0, Math.min(1, val));
}

export function setIntensityImmediate(val) {
  intensity = targetIntensity = Math.max(0, Math.min(1, val));
}

export function getIntensity() { return intensity; }

export function updateGlitch(dt) {
  // Lerp toward target
  intensity += (targetIntensity - intensity) * LERP_SPEED * dt;
  if (Math.abs(intensity - targetIntensity) < 0.001) intensity = targetIntensity;
}

export function apply(ctx) {
  if (intensity < 0.01) return;

  const { w, h } = getBaseSize();

  // Horizontal tear
  if (intensity > 0.1 && Math.random() < intensity * 0.3) {
    horizontalTear(ctx, w, h);
  }

  // Color corruption
  if (intensity > 0.2 && Math.random() < intensity * 0.2) {
    colorCorruption(ctx, w, h);
  }

  // Scan lines
  if (intensity > 0.05) {
    scanLines(ctx, w, h);
  }

  // Tile crack (high intensity)
  if (intensity > 0.6 && Math.random() < intensity * 0.15) {
    tileCrack(ctx, w, h);
  }
}

function horizontalTear(ctx, w, h) {
  const sliceCount = Math.floor(1 + intensity * 4);
  for (let i = 0; i < sliceCount; i++) {
    const y = Math.random() * h;
    const sliceH = 1 + Math.random() * (3 + intensity * 8);
    const offset = (Math.random() - 0.5) * intensity * 20;

    const imageData = ctx.getImageData(0, Math.floor(y), w, Math.ceil(sliceH));
    ctx.putImageData(imageData, Math.floor(offset), Math.floor(y));
  }
}

function colorCorruption(ctx, w, h) {
  const count = Math.floor(1 + intensity * 3);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const cw = 10 + Math.random() * 40 * intensity;
    const ch = 2 + Math.random() * 10 * intensity;
    const colors = ['rgba(255,0,0,', 'rgba(0,255,0,', 'rgba(0,0,255,', 'rgba(255,0,255,'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = `${color}${0.1 + intensity * 0.3})`;
    ctx.fillRect(x, y, cw, ch);
  }
}

function scanLines(ctx, w, h) {
  ctx.fillStyle = `rgba(0, 0, 0, ${0.03 + intensity * 0.05})`;
  for (let y = 0; y < h; y += 2) {
    ctx.fillRect(0, y, w, 1);
  }
}

function tileCrack(ctx, w, h) {
  const cx = Math.random() * w;
  const cy = Math.random() * h;
  const size = 10 + Math.random() * 30;

  ctx.save();
  ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + intensity * 0.3})`;
  ctx.lineWidth = 1;
  ctx.beginPath();

  // Random jagged crack lines
  let x = cx, y = cy;
  ctx.moveTo(x, y);
  const segments = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < segments; i++) {
    x += (Math.random() - 0.5) * size;
    y += (Math.random() - 0.5) * size;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}

export function corruptText(text) {
  if (intensity < 0.1) return text;

  const chars = text.split('');
  const corruptCount = Math.floor(chars.length * intensity * 0.3);

  for (let i = 0; i < corruptCount; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    chars[idx] = CORRUPT_CHARS[Math.floor(Math.random() * CORRUPT_CHARS.length)];
  }

  return chars.join('');
}

export function resetGlitch() {
  intensity = 0;
  targetIntensity = 0;
}
