// renderer.js — Canvas initialization, scaling, draw helpers

const BASE_W = 384;
const BASE_H = 216;

let canvas, ctx;
let scale = 1;

export function initRenderer() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  canvas.width = BASE_W;
  canvas.height = BASE_H;
  resize();
  window.addEventListener('resize', resize);
  return { canvas, ctx };
}

function resize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  scale = Math.min(vw / BASE_W, vh / BASE_H);
  canvas.style.width = `${BASE_W * scale}px`;
  canvas.style.height = `${BASE_H * scale}px`;
}

export function getScale() { return scale; }
export function getCanvas() { return canvas; }
export function getCtx() { return ctx; }
export function getBaseSize() { return { w: BASE_W, h: BASE_H }; }

// Coordinate transform: screen → canvas
export function screenToCanvas(sx, sy) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (sx - rect.left) / scale,
    y: (sy - rect.top) / scale
  };
}

// Draw helpers
export function clearScreen(color = '#000000') {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, BASE_W, BASE_H);
}

export function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

export function drawRectStroke(x, y, w, h, color, lineWidth = 1) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(x, y, w, h);
}

export function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

export function drawText(text, x, y, {
  color = '#ffffff',
  size = 14,
  align = 'left',
  baseline = 'top',
  font = 'Noto Sans KR',
  weight = '300',
  maxWidth = undefined
} = {}) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px '${font}', sans-serif`;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;
  if (maxWidth) {
    ctx.fillText(text, x, y, maxWidth);
  } else {
    ctx.fillText(text, x, y);
  }
}

export function drawLine(x1, y1, x2, y2, color, lineWidth = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

export function drawGradientRect(x, y, w, h, colorStops) {
  const grad = ctx.createLinearGradient(x, y, x, y + h);
  colorStops.forEach(([offset, color]) => grad.addColorStop(offset, color));
  ctx.fillStyle = grad;
  ctx.fillRect(x, y, w, h);
}

export function drawRadialGradient(cx, cy, r1, r2, colorStops) {
  const grad = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  colorStops.forEach(([offset, color]) => grad.addColorStop(offset, color));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, r2, 0, Math.PI * 2);
  ctx.fill();
}

export function setAlpha(a) {
  ctx.globalAlpha = a;
}

export function resetAlpha() {
  ctx.globalAlpha = 1;
}

export function saveCtx() { ctx.save(); }
export function restoreCtx() { ctx.restore(); }
