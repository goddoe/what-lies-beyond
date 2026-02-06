// transition.js — Scene transitions (fade, glitch)

let overlay = null;

function ensureOverlay() {
  if (overlay) return overlay;
  overlay = document.createElement('div');
  overlay.id = 'fade-overlay';
  document.getElementById('game-container').appendChild(overlay);
  // Force reflow
  overlay.offsetHeight;
  return overlay;
}

export function fadeOut(ms = 800) {
  return new Promise(resolve => {
    const el = ensureOverlay();
    el.style.transitionDuration = `${ms}ms`;
    el.style.opacity = '1';
    setTimeout(resolve, ms);
  });
}

export function fadeIn(ms = 800) {
  return new Promise(resolve => {
    const el = ensureOverlay();
    el.style.transitionDuration = `${ms}ms`;
    el.style.opacity = '0';
    setTimeout(resolve, ms);
  });
}

export function setFadeOpacity(val) {
  const el = ensureOverlay();
  el.style.transition = 'none';
  el.style.opacity = String(val);
}

export function glitchTransition(ms = 600) {
  return new Promise(resolve => {
    const el = ensureOverlay();
    const container = document.getElementById('game-container');
    // Quick flash sequence
    let step = 0;
    const totalSteps = 6;
    const stepTime = ms / totalSteps;

    function flash() {
      if (step >= totalSteps) {
        el.style.background = '#000';
        el.style.boxShadow = 'none';
        el.style.opacity = '1';
        container.classList.remove('glitch-shake');
        setTimeout(resolve, 100);
        return;
      }
      el.style.transition = 'none';
      el.style.background = '#000';
      if (step % 2 === 0) {
        el.style.opacity = '0.9';
        el.style.boxShadow = step < 3 ? 'inset 0 0 0 100vmax #ff0040' : 'none';
      } else {
        el.style.boxShadow = 'none';
        el.style.opacity = '0';
      }
      container.classList.add('glitch-shake');
      step++;
      setTimeout(flash, stepTime);
    }
    flash();
  });
}

export function instantBlack() {
  const el = ensureOverlay();
  el.style.transition = 'none';
  el.style.background = '#000';
  el.style.opacity = '1';
}

export function resetOverlay() {
  if (overlay) {
    overlay.style.background = '#000';
    overlay.style.transition = 'none';
    overlay.style.opacity = '0';
  }
}
