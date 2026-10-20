# Rezeptesammlung

Rezepte-App für den Browser und den Home-Bildschirm. Kein Server, kein Konto, keine Cloud. Alle Rezepte bleiben auf dem eigenen Gerät und sind nach dem ersten Laden offline nutzbar.

**Zur App:** https://lepettre.github.io/Rezeptesammlung/

## Funktionen

- **Import** aus Foto, Screenshot, Datei (HTML, JSON) oder eingefügtem Text. Fotos werden lokal per Texterkennung gelesen, optional mit Rahmen für Titel, Zutaten, Zubereitung, Notizen oder Fließtext. Das Originalbild bleibt als Vorlage erhalten.
- **Zutaten- und Schrittparser** für Brüche, Spannen, „ca.“-Angaben, ausgeschriebene Zahlen, Zwischenüberschriften und Rezepte ohne Zutatenliste.
- **Portionen umrechnen**, auch Mengen im Text der Schritte. Einheiten wahlweise Original, Metrisch oder US, einzeln per Antippen umschaltbar.
- **Ordnen und finden:** feste Kategorien, Schlagwörter, Favoriten, Filter nach Zeit und Person, Suche tolerant gegenüber Umlauten und Tippfehlern.
- **Teilen und sichern** als eigenständige HTML-Datei, einzeln oder als ganze Sammlung mit Inhaltsverzeichnis. Dieselbe Datei dient als Backup und lässt sich in jeder Rezeptesammlung wieder importieren.
- **Drucken** in Hoch- oder Querformat, auf dem iPhone als PDF.
- **Darstellung:** sechs Stile, zwei Symbolarten, Standard ist Moos.

## Datenschutz

Rezepte liegen in der IndexedDB des Geräts, Einstellungen im localStorage. Es gibt keine Analyse und keine Übertragung. Die Texterkennung läuft vollständig im Browser und wird beim ersten Fotoimport nach Rückfrage geladen (ca. 45 MB, danach offline).

## Installation

- **iPhone, iPad:** Adresse in Safari öffnen, Teilen, „Zum Home-Bildschirm“.
- **Android:** Adresse in Chrome öffnen, Menü, „App installieren“.

Als installierte App bleiben die Daten dauerhaft erhalten. Sicherungen über „Teilen & sichern“ in der Rezeptliste.

## Selbst hosten

Die App braucht nur eine HTTPS-Adresse, etwa GitHub Pages: Repository anlegen, Inhalt hochladen, unter Settings › Pages den Branch `main` und den Ordner `/ (root)` wählen. Die Rezepte liegen nicht im Repository.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | die gesamte App: CSS, Parser, Logik (Vanilla JS, kein Build-Schritt) |
| `sw.js` | Service Worker für den Offline-Betrieb; bei jeder Änderung `VERSION` hochzählen |
| `manifest.webmanifest`, `icons/` | Installation als App |
| `fonts/` | zehn WOFF2-Schriften |
| `ocr/` | ONNX Runtime Web, PaddleOCR-Modelle, Wörterbuch; große Dateien in Teilen unter 8,4 MB |
| `pdf/` | jsPDF und Schrift für den PDF-Druck |
| `lizenzen/` | Lizenzen der Fremdbestandteile |

## Weiteres

- [Versionsverlauf](VERSIONEN.md)
- [Fremdbestandteile und Lizenzen](lizenzen/HINWEISE.md): ONNX Runtime Web, PaddleOCR PP-OCRv6 über RapidOCR, pyspellchecker-Wortliste, Tabler Icons, jsPDF, zehn Schriften unter OFL
