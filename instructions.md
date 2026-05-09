# instructions.md – Arbeiten mit dem `camera-surveillance-stack-demo`

Diese Anleitung ist für Einsteiger gedacht: **forken, lokal testen, anpassen und auf GitHub Pages veröffentlichen**.

## 1) Schnellstart: Fork, Clone, lokal starten

### Fork & Clone
1. Öffne das Repository auf GitHub.
2. Klicke auf **Fork**.
3. Klone deinen Fork lokal:

```bash
git clone https://github.com/<YOUR_USERNAME>/camera-surveillance-stack-demo.git
cd camera-surveillance-stack-demo
```

### Lokale Entwicklung (empfohlen mit VS Code)

#### Option A: VS Code Live Server
1. Projektordner in VS Code öffnen.
2. Extension **Live Server** (Ritwick Dey) installieren.
3. `index.html` öffnen.
4. Unten rechts auf **Go Live** klicken.

#### Option B: Python-Server
Im Projektordner:

```bash
python -m http.server 8080
```

Dann im Browser öffnen: `http://localhost:8080/`

---

## 2) Weitere GIFs/Videos hinzufügen

### Empfohlene Ordnerstruktur

```text
assets/
  gifs/
    cam-garden.gif
    cam-garage.gif
  videos/
    cam-driveway.mp4
```

### Im Dashboard einbinden (`index.html`)
- Für GIF/SVG weiterhin `<img ...>` verwenden.
- Für MP4 `<video ...>` verwenden.

Beispiel GIF:

```html
<img src="assets/gifs/cam-garden.gif" alt="CAM-03 Garten" />
```

Beispiel Video:

```html
<video src="assets/videos/cam-driveway.mp4" autoplay muted loop playsinline></video>
```

> Tipp: Nutze möglichst **relative Pfade** (`assets/...`), damit lokal und auf GitHub Pages alles gleich funktioniert.

---

## 3) Weitere Kamera-Feeds (zusätzliche Kacheln) integrieren

Dateien, die du typischerweise anpasst:
- `index.html` → neue Kamera-Kachel ergänzen
- `app.js` → Motion-Badge-Logik für neue Kamera ergänzen
- `style.css` → optional Größen/Layout feinjustieren

### Schritte
1. In `index.html` eine weitere `<article class="panel">...</article>` in `<section class="feeds">` hinzufügen.
2. Ein neues Badge-Element mit eigener ID einbauen (z. B. `motionCam3`).
3. In `app.js` per `document.getElementById('motionCam3')` referenzieren.
4. In `pushEvent()` die Badge-Aktualisierung für CAM-03 ergänzen.

---

## 4) Event-Mockup-Bereich erweitern

Relevante Stelle: `app.js` → Array `activityEvents`.

Du kannst dort zusätzliche Einträge ergänzen, z. B.:

```javascript
{ camera: 'CAM-03', text: 'Bewegung am Gartentor erkannt.', type: 'motion' }
```

Mögliche `type`-Werte im aktuellen Stand:
- `motion`
- `alert`
- `info`

Neue Events erscheinen automatisch im Bereich **Mock Events** (`#eventLog`).

---

## 5) Hinweise & Tipps für Anpassungen

### Farbtheme ändern
In `style.css` unter `:root` die Variablen anpassen:
- `--bg`, `--panel`, `--line`, `--text`
- `--ok`, `--warn`, `--alert`

### Layout anpassen
- Hauptlayout: `.layout`
- Kamera-Grid: `.feeds`
- Kachelstil: `.panel`

### Später echte Kamera-Streams
Wenn du von Demo-Medien auf echte Streams wechselst:
- zuerst bei lokalem Test bleiben (z. B. HLS/WebRTC mit Testquelle)
- danach schrittweise Integration im Frontend
- CORS/Authentifizierung und Datenschutz einplanen

---

## 6) Optional: GitHub Pages aktivieren

1. Repo öffnen → **Settings** → **Pages**
2. **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Speichern

Typische URL danach:

`https://<YOUR_USERNAME>.github.io/camera-surveillance-stack-demo/`

Für dieses Projekt konkret (wenn es im Account `marcinator2` liegt):

`https://marcinator2.github.io/camera-surveillance-stack-demo/`
