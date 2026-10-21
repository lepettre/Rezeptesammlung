# Rezeptesammlung – Projektkontext für Claude Code

Rezepte-Web-App (PWA) ohne Server, Konto oder Cloud. Gehostet über GitHub Pages: https://lepettre.github.io/Rezeptesammlung/
Aktuelle Version: 3.3 (technisch `sw.js` VERSION v50). Anzeige in der App: `APP_VERSION`, `HISTORY`, `LEGAL` in `renderInfo`. Verlauf in `VERSIONEN.md`.

## Arbeitsregeln
- Sprache: Deutsch. Antworten sachlich und knapp. Nie Ausrufezeichen, weder in Antworten noch in der App.
- Änderungen erst vorschlagen bzw. zeigen, dann nach ausdrücklicher Freigabe umsetzen. Fragen wie „wie lässt sich das verbessern?“ nur mit Vorschlägen beantworten.
- Token sparsam: Aufgaben sortieren, keine unnötigen Läufe.
- Nichts erfinden: Mengen, Fakten, Rezeptangaben nur übernehmen, wenn sie vorliegen. Unklares als offene Frage markieren.
- Referenzgerät: iPhone 17 (Breite 402 px). Layouts dort prüfen, auch Umbrüche über mehrere Zeilen.
- Schreibweisen in Rezepten: „Sauce“ statt „Soße“, „Grad“ statt „°C“, Spannen mit Gedankenstrich (1–2), Brüche als ½ ¼ ¾, „ca.“ mit Punkt, EL/TL/g/l.

## Aufbau
- `index.html` – die gesamte App in einer Datei: CSS, Parser und App-Logik (Vanilla JS, keine Build-Schritte). Einzige Quelle; es gibt keine getrennten Quelldateien.
- `sw.js` – Service Worker. Bei jeder Änderung an der App `VERSION` hochzählen (z. B. v48 → v49), sonst bekommen Geräte kein Update. Cache-first für `ocr/` und `pdf/`.
- `manifest.webmanifest`, `icons/` – App-Icon (Spiegelei auf Schwarz).
- `fonts/` – zehn WOFF2-Schriften, zugeschnitten auf Latin inkl. Latin Extended.
- `ocr/` – Texterkennung offline: ONNX Runtime Web (`ort.wasm.min.js`, `.mjs`, `.wasm.1/.2`), PaddleOCR PP-OCRv6 small (`det.onnx.1/.2`, `rec.onnx.1–3`, `rec_dict.txt`), Wörterbuch `woerter.txt`. Große Dateien liegen in Teilen (< 8,4 MB) und werden in `fetchParts()` zusammengesetzt. Lädt erst beim ersten Fotoimport nach Rückfrage.
- `pdf/` – jsPDF und Schrift für den PDF-Druck auf dem iPhone (Home-Bildschirm-App kann nicht direkt drucken).
- `lizenzen/` – Lizenzen der Fremdbestandteile, Übersicht in `HINWEISE.md`.

## Daten
- IndexedDB `rezeptkasten`, Store `recipes`. Einstellungen in localStorage (`pref`: Name, Stil, Symbolart; `ocrReady`; `rkFix` gelernte Korrekturen; `rkSeeded`).
- Rezeptfelder u. a.: `title`, `ingGroups[{t,text}]`, `stepGroups[{t,text}]` (dazu flach `ingredientsText`, `stepsText`), `servings`, `servingsUnit`, `prep`, `cook`, `rest`, `difficulty`, `shelfLife`, `courses`, `tags`, `notes`, `intro`, `source{name,author,url}`, `by`, `via`, `photo`, `scans`, `fav`, `createdAt`, `updatedAt`.
- Gespeicherte Texte nie still umschreiben. Verbesserungen wirken beim Anzeigen (Parser), Originale bleiben erhalten. Migrationen in `migrateRecipe()`.

## Wichtige Stellen in index.html
- Parser: `parseIng`, `renderIng`, `parseRecipeText`, `parseStepsText`, `proseIngredients` (Fließtext), `decap` (Versalien), `NOISE`, `CHAT_RE`.
- Import: `handleFiles` (Bilder → OCR, .html/.json → Import), `runOCR`, `pickRegions` (Rahmenarten: Auto, Titel, Zutaten, Zubereitung, Notizen, Fließtext), `orderJobs` (mehrere Bilder), `layoutText`, `fixLine`/`fixWord` (Korrektur).
- Anzeige: `renderList`, `renderDetail`, `renderEditor`, `renderHelp`, `scaleStepText`.
- Teilen/Druck: `exportHTML`, `exportLibraryHTML`, `printLayouts` (Hoch-/Querformat), `buildPDF`.
- Darstellung: `STYLES`, `applyLook` (Standard: Moos = `nordisch`).

## Veröffentlichen
Änderungen committen und auf `main` pushen; GitHub Pages veröffentlicht automatisch. Danach `VERSIONEN.md` um das Update ergänzen (Zwischen-Update z. B. 3.3, neue Hauptversion nur bei grundlegendem Wechsel).
