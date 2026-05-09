import { activityEvents } from './data/activity-events.js';
import { setMotionBadge } from './ui/badges.js';
import { nowTime } from './utils/time.js';

const eventLog = document.getElementById('eventLog');
const motionCam1 = document.getElementById('motionCam1');
const motionCam2 = document.getElementById('motionCam2');
const systemStatus = document.getElementById('systemStatus');

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
