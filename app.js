const eventLog = document.getElementById('eventLog');
const motionCam1 = document.getElementById('motionCam1');
const motionCam2 = document.getElementById('motionCam2');
const systemStatus = document.getElementById('systemStatus');

const activityEvents = [
  { camera: 'CAM-01', text: 'Motion detected near snack bowl.', type: 'motion' },
  { camera: 'CAM-02', text: 'Suspicious sock crossing hallway.', type: 'motion' },
  { camera: 'CAM-01', text: 'Cat detected: 98% confidence 🐈', type: 'alert' },
  { camera: 'CAM-02', text: 'Robot vacuum patrol in progress.', type: 'motion' },
  { camera: 'CAM-01', text: 'Cat detected: loaf mode activated.', type: 'alert' },
  { camera: 'CAM-02', text: 'No threat found. Probably a shadow.', type: 'info' }
];

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function setMotionBadge(el, type) {
  el.className = 'badge';
  if (type === 'motion') {
    el.classList.add('motion');
    el.textContent = 'Motion';
  } else if (type === 'alert') {
    el.classList.add('alert');
    el.textContent = 'Cat alert';
  } else {
    el.textContent = 'No motion';
  }
}

function pushEvent() {
  const event = activityEvents[Math.floor(Math.random() * activityEvents.length)];
  const li = document.createElement('li');
  li.innerHTML = `<span class="time">${nowTime()}</span><strong>${event.camera}</strong> · ${event.text}`;
  eventLog.prepend(li);

  while (eventLog.children.length > 12) {
    eventLog.removeChild(eventLog.lastChild);
  }

  setMotionBadge(motionCam1, event.camera === 'CAM-01' ? event.type : 'info');
  setMotionBadge(motionCam2, event.camera === 'CAM-02' ? event.type : 'info');

  systemStatus.textContent = event.type === 'alert' ? 'ATTENTION' : 'ONLINE';
  systemStatus.className = event.type === 'alert' ? 'badge alert' : 'ok';
}

for (let i = 0; i < 3; i += 1) {
  pushEvent();
}

setInterval(pushEvent, 3500);
