// main.js — Game loop, scene manager, bootstrap

import { initRenderer, clearScreen, getCtx } from './engine/renderer.js';
import { initInput } from './engine/input.js';
import { fadeIn, setFadeOpacity } from './engine/transition.js';

// Scene imports
import { OracleDialogueScene } from './scenes/oracle-dialogue.js';
import { OraclePresentationScene } from './scenes/oracle-presentation.js';
import { FlashbackScene } from './scenes/flashback.js';
import { TruthScene } from './scenes/truth.js';
import { AnswerScene } from './scenes/answer.js';
import { EndingScene } from './scenes/ending.js';

// Scene registry
const scenes = {
  'oracle-dialogue': OracleDialogueScene,
  'oracle-presentation': OraclePresentationScene,
  'flashback': FlashbackScene,
  'truth': TruthScene,
  'answer': AnswerScene,
  'ending': EndingScene,
};

let currentScene = null;
let ctx = null;
let lastTime = 0;
let running = false;

// Mobile detection
export function isMobile() {
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || (window.innerWidth <= 600);
}

export async function loadScene(id) {
  if (currentScene && currentScene.cleanup) {
    currentScene.cleanup();
  }

  const SceneClass = scenes[id];
  if (!SceneClass) {
    console.error(`Scene not found: ${id}`);
    return;
  }

  currentScene = new SceneClass();
  if (currentScene.init) {
    await currentScene.init();
  }
}

function gameLoop(timestamp) {
  if (!running) return;

  const dt = Math.min((timestamp - lastTime) / 1000, 0.1); // Cap at 100ms
  lastTime = timestamp;

  // Update
  if (currentScene && currentScene.update) {
    currentScene.update(dt);
  }

  // Render
  if (currentScene && currentScene.render) {
    currentScene.render(ctx);
  }

  requestAnimationFrame(gameLoop);
}

async function boot() {
  // Wait for fonts
  await document.fonts.ready;

  // Init systems
  const { ctx: renderCtx } = initRenderer();
  ctx = renderCtx;
  initInput();

  // Clear to black
  clearScreen('#000000');

  // Start game loop
  running = true;
  lastTime = performance.now();
  requestAnimationFrame(gameLoop);

  // Start with black overlay, then fade in
  setFadeOpacity(1);
  await loadScene('oracle-dialogue');
  await fadeIn(1500);
}

// Start when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
