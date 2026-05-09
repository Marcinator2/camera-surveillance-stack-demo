export function setMotionBadge(el, type) {
  el.className = 'badge';

  if (type === 'motion') {
    el.classList.add('motion');
    el.textContent = 'Motion';
    return;
  }

  if (type === 'alert') {
    el.classList.add('alert');
    el.textContent = 'Cat alert';
    return;
  }

  el.textContent = 'No motion';
}
