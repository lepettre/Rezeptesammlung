# Rezeptesammlung – Versionsverlauf

Rückblickend zusammengestellt. Die Versionsnummer ist die des Service Workers (`sw.js`). Für v1–v17 liegen keine Einzelzuordnungen vor, sie sind als Generation zusammengefasst.

## Generation 1 – Grundgerüst (v1–v17, 3.–4. Oktober 2026)
- Web-App als eine Datei, offline nutzbar, Rezepte in der Datenbank des Browsers, kein Konto
- Zutaten-Erkennung: Brüche, Spannen, ca.-Angaben, Einheiten, Zwischenüberschriften
- Portionen umrechnen, Einheiten Original / Metrisch / US, Einheit per Antippen wechseln
- Editor mit Zeiten, Kategorien, Schlagwörtern, Quelle, Foto
- Import aus eingefügtem Text, erste Fotoerkennung (Tesseract)
- Teilen & sichern als HTML-Datei mit eingebetteten Schriften, Import mit Duplikat-Abfrage, „Das bin ich“
- Filter nach Kategorie, Schlagwort, Person, Zeit, Favoriten; „Bildschirm an“
- Erstes Design: Bauhaus

## Generation 2 – Design und neue Texterkennung (v20–v24)
- v20: sechs Stile wählbar, Kategoriesymbole als Formen oder Zeichnungen; Fotoerkennung auf PaddleOCR umgestellt, Wörterbuch-Korrektur, Ladehinweis vor dem ersten Download
- v21: Kategorie „Desserts & Süßes“
- v22: „Hinzufügen“ ohne Überschrift, „Datei importieren“, kontrastreiche Symbole, jede Kategorie mit eigener Form
- v23: Beispieltexte in den Eckdaten-Feldern
- v24: nur noch feste Kategorien, eigene werden zu Schlagwörtern

## Generation 3 – Bessere Erkennung (v25–v29)
- v25: stärkeres Modell (PP-OCRv6), Spalten über Textflüsse, Schräglage-Ausgleich, Rahmen mit Etikett außerhalb, Randschnipsel ignorieren
- v26: große Dateien für GitHub in Teile gesplittet
- v27: Rahmen ohne Nummern, Vorlage nach dem Import zoombar, „Portionen“ statt „Personen“, kompakter Rezeptkopf, mehrteilige Rezepte, Druck ohne Nebeneinander
- v28: jeder Satz ein Schritt, Zutatenlisten und Schrittfolgen getrennt erweiterbar, „Für den Teig:“ wird eigene Liste, Hinweis zur Fotoqualität
- v29: Ladebalken mit Phasen, Hinweis zur Dauer, Feldkorrekturen

## Generation 4 – Gestalt (v30–v32)
- v30–v31: neues App-Icon, zuletzt das Spiegelei
- v32: Stile heißen Signal, Kohle, Moos, Rosé, Kontrast, Bauhaus

## Generation 5 – Mehrere Bilder und Korrektur (v33–v37)
- v33: Reihenfolge mehrerer Bilder aus doppeltem Text, Dubletten entfernt, Zutaten vor Schritten, Titel nach Schriftgröße, überlappende und mehrfache Rahmen
- v34: Restzeit entfernt; Korrektur verbessert (Wortzerlegung, Zeichenpaare, Küchenwörter, unsichere Mengen rot, Lernen aus Korrekturen)
- v35: Sätze werden nicht mehr zerrissen, Nummern markieren Schritte, Wortschatz aus eigenen Rezepten
- v36: Übung mit 12 Fotos: Überschriften wie „Ihr braucht“, Störtext aus Screenshots, volle Auflösung beim Lesen
- v37: zwei Beispielrezepte für neue Nutzer

## Generation 6 – Bedienung und Druck (v38–v44)
- v38: Quelle mit zwei Feldern (Quelle, Autor:in), „Geteilt von“ optional
- v39: Drucklayouts für Hoch- und Querformat, Moos als Standard, Ziehen und Ablegen
- v40: Ablagefeld „hierher ziehen oder tippen“
- v41: Sichern-Dialog am Computer
- v42: ausgeschriebene Zahlen, „Saft einer Zitrone“ umrechenbar, Mengen in Schritten skaliert, plausible Zahlen (11/4, 21 Brühe), Schlagwort-Vorschläge, Titel im Rahmen, Druck aus der Seite
- v43: Schriften mit allen europäischen Buchstaben, keine zusätzliche TXT-Datei, Abgleich mit geprüften Rezepten
- v44: Rahmen „Notizen“, Versalien normalisiert, „Zutaten für Glasur“ als eigene Liste, PDF-Druck auf dem iPhone

## Generation 7 – Fließtext und Feinschliff (v45–v48, 18.–19. Oktober 2026)
- v45: Rezepte ohne Zutatenliste (etwa aus Nachrichten) werden erkannt, Rahmen „Fließtext“, neue Rahmenauswahl, keine Ausrufezeichen
- v46: Hilfeseite „So funktioniert die App“
- v47: Eier und US-Mengen sinnvoll gerundet, Suche tolerant gegenüber Umlauten und Tippfehlern, Begrüßungen werden ignoriert
- v48: ein Importweg für Foto, Screenshot, Datei und Text direkt im neuen Rezept, Auswahlmenü entfällt; Hinweise und Beschriftungen gekürzt, Hilfeseite gestrafft
- v49: Import von Sicherungen wieder unter „Teilen & sichern“ erreichbar, auch bei leerer Sammlung
- v50 (3.3): Hilfe überarbeitet (Sichern und Wiederherstellen zusammengefasst, Installation unter Android), „Das bin ich“ ersetzt durch „Als meine eigenen Rezepte übernehmen“, neue Seite „Version und Rechtliches“ mit Kurzverlauf in 0.5-Schritten, Kontakt, Datenschutz und Lizenzen
- v51: Kontaktangaben ergänzt
