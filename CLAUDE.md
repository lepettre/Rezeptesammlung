# Rezeptesammlung – Projektkontext für Claude Code

Rezepte-Web-App (PWA) ohne Server, Konto oder Cloud. Gehostet über GitHub Pages: https://lepettre.github.io/Rezeptesammlung/
Aktuelle Version: 3.6 (technisch `sw.js` VERSION v58). Anzeige in der App: `APP_VERSION`, `HISTORY`, `LEGAL` in `renderInfo`. Verlauf in `VERSIONEN.md`.

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

## Gestaltungsregeln
- Navigation höchstens drei bis vier Zeilen; gleichartige Elemente (z. B. Filter-Chips) nie auf mehrere Zeilen verteilen, lieber eine seitlich scrollbare Zeile.

## Wichtige Stellen in index.html
- Parser: `parseIng`, `renderIng`, `parseRecipeText`, `parseStepsText`, `proseIngredients` (Fließtext), `decap` (Versalien), `NOISE`, `CHAT_RE`.
- Import: `handleFiles` (Bilder → OCR, .html/.json → Import), `runOCR`, `pickRegions` (Rahmenarten: Auto, Titel, Zutaten, Zubereitung, Notizen, Fließtext), `orderJobs` (mehrere Bilder), `layoutText`, `fixLine`/`fixWord` (Korrektur).
- Anzeige: `renderList`, `renderDetail`, `renderEditor`, `renderHelp`, `scaleStepText`, Kacheln `tileHTML`/`tileFit`.
- Baustein „Kacheln und Kochmodus“ (`kmOpen`, `kmPaint`, `kmFit`, CSS `.rtile`, `.km-*`) zwischen den Markierungen „BAUSTEIN … Ende BAUSTEIN“: gemeinsam mit dem StandBy-Dashboard, Änderungen in beiden Projekten gleich halten.
- Teilen/Druck: `exportHTML`, `exportLibraryHTML`, `printLayouts` (Hoch-/Querformat), `buildPDF`.
- Darstellung: `STYLES`, `applyLook` (Standard: Moos = `nordisch`).

## Veröffentlichen
Änderungen committen und auf `main` pushen; GitHub Pages veröffentlicht automatisch. Danach `VERSIONEN.md` um das Update ergänzen (Zwischen-Update z. B. 3.4, neue Hauptversion nur bei grundlegendem Wechsel).

## Offen (Pause seit 02.11.2026, nur nach Freigabe angehen)
- Korrigierte Rezeptdatei vom 11.10. einspielen? Entscheidung des Autors.
- Große Favoriten-Kachel ja/nein. Entscheidung des Autors.
- Portionsangaben für 9 Rezepte (Dinkelbrötchen, Sumach-Aubergine, Gurken-Feigen-Salat, Bärlauch-Maultaschen, drei Kimchis, Rösti, Lemon Cake Balls): nur Werte des Autors, nicht schätzen.
- Mengen im Kochmodus: hier nur Mengen aus dem Schritttext; das StandBy-Dashboard nennt zusätzlich Mengen aus der Zutatenliste. Für den gemeinsamen Baustein eine Regel festlegen.
- Vorschlag „Rezepte prüfen“ (auffällige Stellen mit Vorschlag, einzeln bestätigen) – erst Entwurf zeigen.
- Synchronisation mit dem Dashboard oder zwischen Geräten: zurückgestellt; Austausch nur per Export-Datei.

