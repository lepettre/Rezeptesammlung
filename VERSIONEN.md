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
- v52: Knopf „Als eigenes Rezept übernehmen“
- v53: Lizenz MIT-0 und fehlende Lizenztexte der Fremdbestandteile ergänzt, Lizenzabschnitt in der App, Knopf „Importieren“ in der Liste
- v54 (3.4): Ansicht „Kacheln“ (Schalter Liste/Kacheln, Standard bleibt die Liste; Kachelfarbe aus der Kategorie im gewählten Stil, Titel ohne Silbentrennung, fehlende Angaben entfallen). Kochmodus über „Kochen“ in der Rezeptansicht: ein Schritt pro Bildschirm, Wischen oder Pfeile, Fortschrittsleiste, Bildschirm bleibt an, Nachtmodus rot auf Schwarz, Zutatenliste mit Abhaken. Mengen nur umgerechnet, wo sie im Schritt selbst stehen. Baustein gemeinsam mit dem StandBy-Dashboard.
- v55 (3.5): Navigation auf drei Zeilen: Kopfzeile mit Symbolknöpfen (Teilen, sichern und importieren · Darstellung · Name), Suche, eine seitlich scrollbare Filterzeile (Favoriten, Kategorien, Zeit, Schlagwörter, Personen). Ansicht Liste/Kacheln, Sortierung und Bezug des Zeitfilters jetzt unter Darstellung. Kacheln in Spalten unterschiedlicher Höhe nach Textlänge, auf breiten Bildschirmen mehr Spalten.
- v56 (3.6): Kacheln einheitlich quadratisch (wie im StandBy-Dashboard), Eckenradius passend zum Stil wie bei den Knöpfen; Rezepte mit Foto zeigen das Bild in der ganzen Kachel, Text auf einem Unschärfe-Feld; Titel passen sich nach dem Laden der Schrift an und werden nicht mehr abgeschnitten. Darstellung kompakter: Stile als Farbfelder, Ansicht, Sortierung und Zeitfilter je eine Zeile, Symbolart nur in der Listenansicht. Vorgabe für den Zeitfilter wirkt wieder. Einblendfenster mit gleichem Radius an allen Ecken.
- v57: Stil-Kreise unter Darstellung nicht mehr angeschnitten; Knopf „Hinzufügen“ mit Rand in Papierfarbe, damit er sich von gleichfarbigen Kacheln abhebt.
- v58: Knopf „Hinzufügen“ ohne Rand, stattdessen mit Schatten abgehoben und leicht nach rechts versetzt (nicht mehr bündig mit den Kacheln); auf großen Bildschirmen am Inhalt statt in der Bildschirmecke.
- v59: Knopf „Hinzufügen“ mittig unten, unabhängig von Kachel- und Bildschirmkanten.
- v60 (3.7): Filter in zwei seitlich scrollbaren Zeilen (oben Favoriten und Kategorien, unten Zeit, die häufigsten Schlagwörter mit „Alle“, Personen), Trefferzahl mit „Filter löschen“, Scrollposition bleibt beim Antippen. Import aus Text: WhatsApp-Zeitstempel und Namen, Emojis, Hashtags, Links und Aufrufe („Folgt mir“, „Link in Bio“, „save for later“) werden vor dem Erkennen entfernt; Links werden als Quelle eingetragen; Zutatenlisten im Satz („Zutaten: a, b, c. Dann …“, „Du brauchst …“) werden getrennt; Titel aus „Name: …“ oder „für den …“; mehr Mengenwörter (Kilo, Würfel, Schuss, „ne Tasse“, „halber Liter“, „bisschen“), auch klein getippte Nachrichten; Portionen aus „Zutaten (2 Portionen)“. Nach dem Erkennen nennt eine Liste die unsicheren Stellen. Rezeptansicht: Zeile mit Einheiten und „Kochen“ nicht mehr abgeschnitten, „Grad“ statt „°C“ in der Anzeige, Zwischenüberschrift ohne Kennzeichen wird erkannt. Kacheln: Titel in festen Größenstufen, Kategorie einzeilig. Gespeicherte Texte bleiben unverändert.
- v61 (3.8): Sortierung und Zeitfilter aus „Darstellung“ in die obere Filterzeile verlegt, je ein Knopf mit Auswahlfenster (Zeit mit Bezug Zubereitung/Gesamt). Zweite Zeile nur noch Schlagwörter und Personen. Nachtmodus (Rot auf Schwarz) als Modus über jedem Stil unter „Darstellung“, gilt für die ganze App samt Kochansicht; der eigene Knopf in der Kochansicht entfällt. Kochansicht in den Farbkombinationen des StandBy-Dashboards (je Rezept fest), blättern auch mit der Maus (ziehen, Klick in linke oder rechte Hälfte, Scrollrad) und der Tastatur (Pfeile, Leertaste, Esc). Rezepte mit mehreren Zutatenlisten zeigen diese nebeneinander, wenn der Platz reicht. Neues Symbol (zwei Pfeile) für „Teilen, sichern und importieren“.
- v62 (3.9): Nachtmodus-Feinschliff und erster Versuch mit zwölf einfarbigen Stilen (in v63 ersetzt).
- v63 (3.10): Vier bunte Stile (Pop, Sorbet, Neon, Marine) in eigener Reihe unter Darstellung, jeder mit eigener Schrift, Form und Kachelfarben nach Kategorie (Pop folgt den Rezeptfarben des StandBy-Dashboards, Kategorie legt das Farbpaar fest). Kochansicht übernimmt die Farbe der Kategorie. Kacheln wieder unterschiedlich groß: hochkant gleich breit und unterschiedlich hoch, quer gleich hoch und unterschiedlich breit, nach Länge des Titels. Die zwölf einfarbigen Stile aus 3.9 entfallen. Nachtmodus gilt weiter über jedem Stil.
- v64 (3.11): Die vier bunten Stile Pop, Sorbet, Neon und Marine ersetzt durch Zitrone, Bonbon, Wald und Meer. Grundlage sind die dreifarbigen Kombinationen des StandBy-Dashboards (Gelb · Schwarz, Rosa · Blau, Limette · Tanne, Mint · Marine). Aus den drei Farben entstehen drei Kachelpaare, die Kategorie legt das Paar fest, jede Kategorie behält ihr Paar. Eigene Schrift und Form je Stil. Wörter in Kacheln werden nie getrennt, der Titel wird stattdessen kleiner. Die sechs älteren Stile bleiben unverändert.
- v65 (4.0): Darstellung neu aufgebaut. Statt zehn fester Stile wählbar: Modus (Hell, Dunkel, Automatisch, folgt dem Gerät), Farbwelt (Atelier, Zitrone, Orchidee, Tannengrün, Lagune, Moos, Karmin; nach den Kombinationen des StandBy-Dashboards, Atelier mit den mehrfarbigen Rezeptfarben je Kategorie), Schrift (Klar, Plakat, Redaktion, Manuskript, Raster), Ecken (Eckig, Weich, Rund) und Symbole. Frühere Stile werden beim Start in diese Auswahl übernommen. Der Nachtmodus entfällt. Kochansicht und Kacheln folgen Farbwelt und Modus. Kopf der Rezeptansicht: kein leeres Symbolfeld ohne Foto, eine Kennzeile (Kategorie, Gesamtzeit, Portionen, Schwierigkeit), Einzelzeiten klein darunter, Schlagwörter und Herkunft in einer grauen Zeile, Portionen und Kochen in einer Reihe, Einheiten und Bildschirm an darunter.
- v66 (4.1): Knopf „Kochmodus“ statt „Kochen“. Im Kochmodus heißt der Knopf bei geöffneter Zutatenliste „Liste schließen“ und ist in Kontrastfarbe gefüllt, „Fertig“ mit kräftigem Rand. „Fertig“ in den Fenstern als gefüllter Hauptknopf. Schlagwörter: „Alle 30 Schlagwörter“ statt „Alle 30“. Zeilenhöhe von Titeln erhöht, damit p, g und andere Unterlängen in Kopfzeile, Rezeptnamen und Kacheln nicht abgeschnitten werden. Portionen und Mengenangaben nicht mehr auf den Kacheln. Auswahlring der Farbwelten in Schriftfarbe.
- v67 (4.2): Farbwelten neu: zwölf Paletten, abgestimmt auf die Home-Assistant-Themes des Autors (Gelb · Silber, Rosa · Blau, Limette · Tanne, Orange · Creme, Mint · Marine, Rot · Rosé, Lila · Gelb, Pfirsich · Bordeaux, Blau · Eis, Grün · Pink, Silber · Schwarz, Marine · Creme), jeweils mit den Werten für hell und dunkel; dazu Atelier. Kacheln immer kräftig in den Farben der dunklen Fassung, Seite und Bedienelemente in den Werten des gewählten Modus. Fotokacheln wie im StandBy-Dashboard: Bild füllt die Kachel, dunkler Verlauf von unten, weiße Schrift, kein Unschärfe-Kasten. Unsplash-Suche für Rezeptfotos wie im StandBy-Dashboard (Kochmodus: Kamera-Knopf; Rezeptansicht: Knopf „Foto“): Foto wählen, aus der Zwischenablage, Bildadresse, Suche mit Ergebnisraster. Unsplash-Bilder werden direkt von Unsplash geladen, Fotograf und Unsplash stehen in der Rezeptansicht und im Kochmodus, der Download wird gemeldet. Kochmodus zeigt das Foto als Hintergrund. Frühere Farbwelten werden auf die neuen abgebildet.
- v68 (4.3): Foto-Auswahl (Foto wählen, Zwischenablage, Bildadresse, Unsplash) aus dem Kochmodus entfernt und oben im Rezeptformular angeboten, beim Bearbeiten und beim Anlegen neuer Rezepte; der Nachweis bleibt im Kochmodus sichtbar, wenn ein Unsplash-Foto gesetzt ist. Drei Schriften aus dem StandBy-Dashboard ergänzt: Gerundet (Systemschrift, nur auf Apple-Geräten rund), Zeitung (Systemserife), Maschine (Space Mono). Scrollbalken in Fenstern schmal und mit Abstand zu den runden Ecken.
