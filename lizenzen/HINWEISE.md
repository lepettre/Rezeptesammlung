# Lizenzen und Fremdbestandteile

## Eigener Code
`index.html`, `sw.js` und die übrigen eigenen Dateien stehen unter der MIT-No-Attribution-Lizenz (MIT-0), siehe `LICENSE` im Hauptordner. Nutzung, Änderung und Weitergabe sind ohne Namensnennung erlaubt, die Software wird ohne Gewähr bereitgestellt.

## Fremdbestandteile
Diese Bestandteile behalten ihre eigenen Lizenzen. Die Lizenztexte liegen in diesem Ordner.

| Bestandteil | Verwendung | Lizenz | Datei |
| --- | --- | --- | --- |
| ONNX Runtime Web (Microsoft) | führt die Texterkennung im Browser aus (`ocr/ort*`) | MIT | `onnxruntime-LICENSE.txt` |
| PaddleOCR PP-OCRv6 small (PaddlePaddle) | Modelle zur Erkennung von Textzeilen und Zeichen (`ocr/det.onnx.*`, `ocr/rec.onnx.*`, `ocr/rec_dict.txt`) | Apache 2.0 | `paddleocr-LICENSE.txt` |
| RapidOCR | ONNX-Fassung der PaddleOCR-Modelle | Apache 2.0 | `rapidocr-LICENSE.txt` |
| Wortliste (pyspellchecker, beruhend auf FrequencyWords von Hermit Dave, OpenSubtitles) | Korrektur der Texterkennung (`ocr/woerter.txt`), ergänzt um Küchenvokabular | CC BY-SA 4.0 | `woerter-CC-BY-SA-4.0.txt` |
| pyspellchecker | Quelle der Wortliste | MIT | `pyspellchecker-LICENSE.txt` |
| jsPDF | PDF-Druck auf iPhone und iPad (`pdf/`) | MIT | `jspdf-LICENSE.txt` |
| Tabler Icons | Symbole der Oberfläche | MIT | `tabler-icons-LICENSE.txt` |
| Archivo, Archivo Black | Schriften | SIL OFL 1.1 | `archivo-OFL.txt`, `archivoblack-OFL.txt` |
| Space Mono | Schrift | SIL OFL 1.1 | `spacemono-OFL.txt` |
| Geist | Schrift | SIL OFL 1.1 | `geist-OFL.txt` |
| Inter | Schrift | SIL OFL 1.1 | `inter-OFL.txt` |
| Fraunces | Schrift | SIL OFL 1.1 | `fraunces-OFL.txt` |
| DM Serif Display, DM Sans | Schriften | SIL OFL 1.1 | `dmserifdisplay-OFL.txt`, `dmsans-OFL.txt` |
| Space Grotesk | Schrift | SIL OFL 1.1 | `spacegrotesk-OFL.txt` |

Die Wortliste `ocr/woerter.txt` bleibt unter CC BY-SA 4.0 und wird unter denselben Bedingungen weitergegeben.
