# Rezeptesammlung – eigenständige Web-App

Läuft komplett im Browser. Kein Konto, kein Abo, kein Server-Code, keine Analyse-Dienste.
Rezepte liegen in der IndexedDB des Geräts. Nach dem ersten Laden funktioniert alles offline.
Die Texterkennung für Fotos (PaddleOCR PP-OCRv6 mit Wörterbuch-Korrektur) wird erst beim ersten Foto-Import
nach Rückfrage geladen, einmalig ca. 45 MB, danach ebenfalls offline.

Darstellung: sechs Stile und zwei Symbolarten (Formen oder Zeichnungen), oben in der Liste unter „Darstellung“.

## Installation (einmalig, ca. 5 Minuten)

Die App braucht eine HTTPS-Adresse, sonst lässt iOS sie nicht als App installieren.
Kostenlos geht das z. B. so:

**GitHub Pages**
1. Neues Repository anlegen (darf privat sein bei GitHub Pro, sonst öffentlich – die Rezepte liegen NICHT im Repo, nur der App-Code).
2. Den Inhalt dieses Ordners hochladen (index.html muss oben liegen).
3. Settings › Pages › Branch „main“, Ordner „/ (root)“ › Save.
4. Nach 1–2 Minuten ist die App unter https://<name>.github.io/<repo>/ erreichbar.

**Alternativ Netlify Drop:** app.netlify.com/drop öffnen und den Ordner hineinziehen.

## Aufs iPhone
iPhone/iPad: Adresse in **Safari** öffnen › Teilen › „Zum Home-Bildschirm“.
Android: Adresse in **Chrome** öffnen › Menü ⋮ › „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
Ab dann startet die Rezeptesammlung wie eine App, im Vollbild und offline.
Als installierte App bleiben die Daten dauerhaft erhalten und werden nicht nach Inaktivität gelöscht.

## Daten sichern & umziehen
„Teilen“ oben in der Rezeptliste erzeugt eine HTML-Datei mit allen Rezepten – zugleich Backup und Datei für Freunde.
In einem Cloud-Speicher (iCloud Drive, Google Drive, Dropbox …) oder auf dem Gerät ablegen. Auf einem anderen Gerät: dieselbe Adresse öffnen › „Hinzufügen“ › „Datei importieren“ › „Das bin ich“.
Es gibt bewusst keinen Sync-Server.
Einzelne Rezepte: „Teilen“ erzeugt eine eigenständige, druckbare HTML-Datei,
die sich in jeder Rezeptesammlung wieder importieren lässt.

## Mit Freunden teilen
Oben in der Rezeptliste auf „Name“ tippen (einmalig). Dein Name steht dann bei deinen Rezepten und in allem, was du teilst.
„Teilen“ erzeugt eine HTML-Datei mit allen Rezepten (oder nur der aktuellen Filterauswahl),
mit Inhaltsverzeichnis, lesbar und druckbar in jedem Browser. In der Rezeptesammlung der Freunde über „Hinzufügen“ › „Datei importieren“
komplett übernehmen: Rezepte sind dann mit „geteilt von …“ markiert und über die Zeile „Von“ filterbar.
Schon vorhandene Rezepte werden nicht doppelt angelegt.

## Updates
Nach Änderungen an index.html in sw.js die Zeile `const VERSION = 'v1'` hochzählen.

## Enthaltene Fremdsoftware
Siehe lizenzen/HINWEISE.md.
