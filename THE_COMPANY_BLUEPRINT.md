# THE COMPANY — Konzernbauplan einer AI-nativen Firma

> **Status:** Durchlauf 2 läuft — Anhang 0 + Kapitel 1–3 ausgearbeitet. Kapitel 4–18 folgen abschnittsweise.
> **Festgelegter Rahmen:** DE (UG/GmbH) · MVP = AI Software Studio · Erstprodukt "Landingpage in 48 h" (750–1.500 €) · Startkapital < 5.000 € · Gründer = Koordinator (~30–40 h/Woche) · Akquise via LinkedIn/Social Selling · Marke = Premium-Studio, AI im Hintergrund · Modelle = Multi-Provider + lokal (Ollama) · rote Linien = Zahlungen & Verträge.
> **Arbeitsname:** "The Company"
> **Dokumenttyp:** Interner Konzernbauplan (Entwurf)
> **Letzte Aktualisierung:** 2026-05-14

---

## Über dieses Dokument

Dieses Dokument entwirft "The Company" — eine autonome, AI-native digitale Holding.
Es wird in mehreren Durchläufen erstellt:

1. **Durchlauf 1 (dieses Commit):** Vollständige Struktur, alle Kapitelüberschriften, Platzhalter.
2. **Durchlauf 2+:** Jeder Abschnitt wird einzeln, extrem detailliert ausgearbeitet — nach jeweiliger Freigabe.

Die nachstehende Gliederung ist die verbindliche Inhaltsstruktur.

---

## Inhaltsverzeichnis

- [1. Executive Summary](#1-executive-summary)
- [2. Konzernmodell](#2-konzernmodell)
- [3. Organigramm](#3-organigramm)
- [4. Business Units](#4-business-units)
- [5. Agentenarchitektur](#5-agentenarchitektur)
- [6. Zugriff auf die reale Welt](#6-zugriff-auf-die-reale-welt)
- [7. Human Workforce Modell](#7-human-workforce-modell)
- [8. Geschäftsmodell](#8-geschäftsmodell)
- [9. Finanzmodell](#9-finanzmodell)
- [10. Governance, Sicherheit und Recht](#10-governance-sicherheit-und-recht)
- [11. Marken- und Kulturmodell](#11-marken-und-kulturmodell)
- [12. Beispieltag in dieser Firma](#12-beispieltag-in-dieser-firma)
- [13. Dashboard und Betriebssystem](#13-dashboard-und-betriebssystem)
- [14. Beispiel: Ein neues Repo wird gestartet](#14-beispiel-ein-neues-repo-wird-gestartet)
- [15. Risiken und Gegenmaßnahmen](#15-risiken-und-gegenmaßnahmen)
- [16. MVP-Plan](#16-mvp-plan)
- [17. 12-Monats-Roadmap](#17-12-monats-roadmap)
- [18. Finale Bewertung](#18-finale-bewertung)
- [Anhang 0: Musteranalyse großer Firmen](#anhang-0-musteranalyse-großer-firmen)

---

## Anhang 0: Musteranalyse großer Firmen

> _Diese Analyse ist die Denkgrundlage. "The Company" kopiert keine dieser Firmen, sondern übernimmt einzelne bewährte Strukturprinzipien und kombiniert sie neu._

### 0.1 Porsche / Mercedes-Benz — das Premium-Engineering-Muster

Was diese Firmen wirklich gut können (und was davon übertragbar ist):

| Prinzip | Wie es bei Porsche/MB funktioniert | Übertragung auf "The Company" |
|---|---|---|
| **Premium-Marke** | Hoher Preis wird durch wahrnehmbare Qualität, Konsistenz und Markenversprechen gerechtfertigt. Kunde zahlt für Verlässlichkeit, nicht für Material. | "The Company" verkauft nicht "billige AI-Arbeit", sondern geprüfte, verlässliche Ergebnisse zum mittleren Premium-Preis (750–1.500 € Einstieg). Marke = Vertrauen. |
| **Engineering-Kultur** | Ingenieure haben Status, Prozesse sind dokumentiert, nichts geht ungeprüft raus. | Jeder Agenten-Output durchläuft definierte QS-Gates. "Engineering Discipline" ist Kulturwert Nr. 1. |
| **Produktplattformen** | Ein Baukasten (z.B. MEB-Plattform) trägt viele Modelle → Skaleneffekte. | Wiederverwendbare Bausteine: Landingpage-Plattform, Komponentenbibliothek, Standard-Workflows. Projekt #10 nutzt 80 % von Projekt #1. |
| **Qualitätssicherung** | Eigene QS-Abteilung mit Vetorecht, Fehler werden bis zur Ursache verfolgt. | Eigener QA-Agent + Audit-Agent mit Vetorecht. Jeder Fehler erzeugt einen Eintrag im Lernsystem. |
| **Lieferketten** | Tier-1/Tier-2-Lieferanten, geprüft, mit SLAs und Audits. | Freelancer/Dienstleister sind "Lieferanten" mit Rating, SLA, Onboarding-Prüfung. |
| **After-Sales** | Service, Wartung, Ersatzteile = oft profitabler als der Verkauf selbst. | Wartungs-/Support-Abos nach Projektabschluss = wiederkehrender Umsatz. |
| **Finanzierung/Leasing** | Eigene Bank macht das Produkt erschwinglich und bindet Kunden. | Ratenzahlung/Retainer-Modelle statt nur Einmalzahlung — bindet Kunden, glättet Cashflow. |
| **Händler-/Service-Netzwerk** | Lokale Präsenz ohne eigene Filialen — Partner tragen das Risiko. | Local Operations Network: lokale Operatoren als "Vertragspartner-Netz" für physische Arbeit. |
| **Software-defined Products** | Funktionen kommen per Update, Produkt verbessert sich nach Kauf. | Ausgelieferte Produkte bleiben über Wartungsvertrag "lebendig" — Updates, Verbesserungen. |

**Was "The Company" NICHT übernimmt:** schwerfällige Hierarchien, jahrelange Entwicklungszyklen, Kapitalintensität von Fabriken.

### 0.2 Activision Blizzard / große Gaming-Firmen — das Studio-/Franchise-Muster

| Prinzip | Wie es im Gaming funktioniert | Übertragung auf "The Company" |
|---|---|---|
| **Studios** | Halbautonome Einheiten mit eigener Kultur, eigenem Team, eigener P&L-Verantwortung. | Jede Business Unit und jedes Projekt-Repo ist ein "Studio" — eigenes Budget, eigene KPIs, eigene Mini-Identität. |
| **Franchises** | Eine starke Marke (z.B. Call of Duty) wird über Jahre gemolken und erweitert. | Erfolgreiche Produkte/Repos werden zu wiederkehrenden Produktlinien ausgebaut, nicht weggeworfen. |
| **Live Operations** | Spiel ist nach Release nicht fertig — laufende Events, Patches, Saisons. | Produkte werden nach Launch aktiv betrieben (Live Ops Agent): Updates, Monitoring, Iteration. |
| **Community** | Spieler-Community ist Marketingkanal, Testlabor und Bindungsinstrument. | Nutzer-/Kunden-Community pro Produktlinie als Feedback- und Akquisekanal. |
| **Content-Pipelines** | Industrialisierte Erstellung von Assets, Levels, Content. | Industrialisierte Pipelines für Code, Copy, Design, Marketing-Assets. |
| **Monetarisierung** | Mehrere Erlösebenen: Vollpreis, DLC, Battle Pass, Mikrotransaktionen. | Mehrere Erlösebenen pro Kunde: Projekt + Wartung + Erweiterungen + Hosting. |
| **Release-Kalender** | Fixe Termine erzwingen Disziplin und Marketing-Koordination. | Verbindlicher Release-Kalender pro Projekt (z.B. "Landingpage in 48h" ist ein Versprechen). |
| **QA** | Eigene Testabteilung, strukturierte Bug-Datenbanken. | Siehe QA-Agent — strukturierte Fehlerdatenbank, Regressionstests. |
| **Datenanalyse** | Jede Spielerentscheidung wird gemessen und fließt ins nächste Release. | Jedes Projekt erzeugt Nachkalkulation + Lerndaten fürs nächste Projekt. |
| **Support** | Mehrstufiger Support, Self-Service + Eskalation. | Customer-Support-Agent mit Self-Service-Ebene und Eskalation an Menschen. |

**Was "The Company" NICHT übernimmt:** Crunch-Kultur, ausbeuterische Monetarisierung, Überproduktion.

### 0.3 Amazon / Apple / Siemens — das Plattform- und Exzellenz-Muster

| Firma | Kernprinzip | Übertragung auf "The Company" |
|---|---|---|
| **Amazon** | Plattform + Marktplatz: Amazon verkauft eigene Produkte UND lässt Dritte auf seiner Infrastruktur verkaufen. Obsession mit operativen Kennzahlen. "Two-Pizza-Teams". | "The Company" nutzt das eigene OS für eigene Projekte UND bietet es später als White-Label-Plattform an. Kleine, autonome Agenten-Teams pro Projekt. Alles wird gemessen. |
| **Apple** | Hardware/Software/Services greifen nahtlos ineinander; radikaler Fokus auf wenige, exzellente Produkte; Kontrolle über die gesamte Erfahrung. | Durchgängige Erfahrung von Akquise bis Support aus einer Hand. Lieber wenige Produktlinien exzellent als viele mittelmäßig. |
| **Siemens** | Globale Standardprozesse, starke interne Tools, Compliance als Kernkompetenz, B2B-Engineering im Großmaßstab. | Standardisierte, dokumentierte Prozesse von Tag 1. Compliance ist eingebaut, nicht nachgerüstet. Internes Tooling (das OS) ist strategisches Asset. |

**Gemeinsamer Nenner aller drei:** starke interne Werkzeuge, operative Exzellenz, Prozesse, die unabhängig von einzelnen Personen funktionieren.

### 0.4 Übertragung auf "The Company" — die Synthese

"The Company" = **Porsche-Qualitätsanspruch** + **Activision-Studio-Struktur** + **Amazon-Plattformlogik** + **Siemens-Prozessdisziplin**, ausgeführt von **autonomen Agenten** statt von tausenden Mitarbeitern.

Das Neue: In klassischen Konzernen ist die Organisation aus *Menschen* gebaut, und Software unterstützt sie. Bei "The Company" ist die Organisation aus *Agenten und Prozessen* gebaut, und Menschen werden gezielt dort eingesetzt, wo Haftung, Kreativität, physische Arbeit, Verhandlung oder gesetzlich vorgeschriebene Verantwortung liegen.

| Klassischer Konzern | "The Company" |
|---|---|
| Mitarbeiter sind die Grundeinheit | Agenten + Prozesse sind die Grundeinheit, Menschen sind spezialisierte Ressource |
| Wachstum = mehr Personal einstellen | Wachstum = mehr Agenten instanziieren + Operator-Netz erweitern |
| Wissen steckt in Köpfen | Wissen steckt im Memory-Layer, ist versioniert und auditierbar |
| Org-Änderung dauert Monate | Org-Änderung = Konfigurationsänderung im OS |
| Fixkosten dominieren | Kosten sind großteils variabel (pro Task, pro Auftrag) |
| Kontrolle über Reporting im Nachhinein | Kontrolle über Approval-Gates in Echtzeit |

---

## 1. Executive Summary

### 1.1 Kurzdefinition

"The Company" ist eine **AI-native digitale Holding nach deutschem Recht** (GmbH/UG). Sie ist keine Agentur, die zufällig AI benutzt, und kein Software-Tool, das zufällig Geld verdient. Sie ist eine **Unternehmensform, deren Organisationsstruktur selbst aus Software besteht**: autonome Agenten übernehmen Planung, Entwicklung, Marketing, Vertrieb, Support, Einkauf, Buchhaltungsvorbereitung, Qualitätssicherung, Controlling und Koordination. Menschen — angefangen beim Gründer als Koordinator — übernehmen dort, wo Haftung, Unterschrift, Geldfreigabe, Verhandlung, Kreativität oder physische Arbeit liegt.

Jedes Projekt, jedes Repository, jede Website, jeder Service kann innerhalb dieser Holding wie eine eigene Mini-Firma betrieben werden — mit eigenem Budget, eigenen Kennzahlen, eigener Marke, aber gemeinsamer Infrastruktur ("The Company OS").

In der hier geplanten Ausprägung startet "The Company" als **Solo-Founder-Betrieb mit unter 5.000 € Startkapital**, beginnt mit der Business Unit **AI Software Studio** und dem standardisierten Erstprodukt **"Landingpage in 48 h" (750–1.500 €)**, akquiriert über **LinkedIn/Social Selling** und tritt nach außen als **Premium-Studio auf, bei dem AI im Hintergrund arbeitet**.

### 1.2 Das Neuartige — Abgrenzung zu reinem Agenten-Tooling

Ein reines Agenten-System ist ein Werkzeug: man gibt eine Aufgabe rein, bekommt ein Ergebnis raus. "The Company" ist dagegen eine **stehende Organisation** mit fünf Eigenschaften, die ein Tool nicht hat:

1. **Persistente Rollen statt Einmal-Prompts.** Es gibt einen dauerhaften CFO-Agent, einen dauerhaften QA-Agent usw. — mit Gedächtnis, Verantwortungsbereich, Kennzahlen und Grenzen. Sie existieren auch, wenn gerade kein Auftrag läuft.
2. **Governance ist eingebaut, nicht angeflanscht.** Approval-Gates, Budgetlimits, Audit-Logs und rote Linien (Zahlungen, Verträge) sind Teil der Architektur. Ein Agent *kann* bestimmte Dinge technisch gar nicht ohne menschliche Freigabe.
3. **Selbstverbesserung über Nachkalkulation.** Jedes abgeschlossene Projekt erzeugt strukturierte Lerndaten. Das System wird mit jedem Auftrag günstiger und besser — wie eine Lernkurve in einer echten Fabrik.
4. **Reale-Welt-Anbindung über kontrollierte Schnittstellen.** Die Firma kann reale Wirkung entfalten (E-Mails, Rechnungen, Beauftragung von Freelancern, Deployments) — aber nur über definierte, protokollierte, begrenzte Interfaces.
5. **Mensch-Maschine-Arbeitsteilung als Designprinzip.** Es ist von Anfang an festgelegt, *was* ein Agent autonom darf, *was* er nur vorschlagen darf und *was* immer ein Mensch entscheiden muss.

Kurz: Ein Agenten-Tool *erledigt Aufgaben*. "The Company" *betreibt ein Unternehmen*.

### 1.3 Kernversprechen

- **Gegenüber Kunden:** "Ergebnisse in Premium-Qualität, schneller und planbarer als eine klassische Agentur — jeder Output ist von einem Menschen geprüft, bevor er euch erreicht."
- **Gegenüber dem Gründer:** "Du koordinierst und entscheidest. Das System bereitet jede Entscheidung vor, führt aus, dokumentiert lückenlos und lernt aus jedem Auftrag."
- **Gegenüber dem Recht:** "Jede Agentenentscheidung ist protokolliert, erklärbar und rückverfolgbar. Geld und Verträge bleiben immer in menschlicher Hand."

### 1.4 Grenzen und Ehrlichkeit — was die Firma bewusst NICHT ist

Ein ehrlicher Konzernbauplan benennt seine Grenzen:

- **Kein "Geld-druck-Automat".** Die Firma braucht echte Kunden, echte Lieferqualität und echten Vertrieb. AI senkt die Stückkosten — sie ersetzt nicht Nachfrage.
- **Keine vollständige Autonomie.** Bei < 5.000 € Kapital und einem einzigen menschlichen Prüfer ist der Gründer der Engpass. "Aggressiv autonom" bezieht sich auf *Routine-Arbeit*, niemals auf Geld, Verträge oder rechtsverbindliche Erklärungen.
- **Kein rechtsfreier Raum.** Steuerrecht, Arbeitsrecht, DSGVO, UWG (Werberecht), Plattformregeln und Haftungsrecht gelten vollständig. Wo das Gesetz einen Menschen verlangt (z. B. Steuerberater, Vertragsunterschrift), gibt es keinen Workaround.
- **Kein Ersatz für Fachverantwortung.** Medizin, Recht, Sicherheit, riskante physische Arbeit — hier bereitet das System nur vor; entscheiden und haften Menschen.
- **Realistischer Reifegrad.** In Phase 0 ist vieles noch manuell. Der Wert entsteht über Monate durch das Aufbauen wiederverwendbarer Prozesse — nicht über Nacht.

Das Dokument ist ein **Bauplan, kein Versprechen**. Es zeigt, wie die Firma aussehen *kann*, wenn die einzelnen Bausteine diszipliniert gebaut werden.

---

## 2. Konzernmodell

"The Company" ist als **digitale Holding mit zehn Ebenen** aufgebaut. Jede Ebene hat eine klare Funktion, klare Schnittstellen zu den anderen Ebenen und eine klare Antwort auf die Frage "Wer haftet hier — Mensch oder System?". Wichtig: In Phase 0 existieren alle Ebenen, aber viele sind noch "dünn" — eine Ebene kann anfangs aus einem einzigen Agenten oder sogar nur einer Checkliste bestehen. Die Struktur ist von Anfang an da, damit Wachstum nur "Auffüllen" bedeutet, nicht "Umbauen".

### 2.1 Holding / Board Layer

**Funktion:** Die rechtliche und strategische Spitze. Hier sitzt die GmbH/UG selbst als Rechtsträger, der Gesellschafter (Gründer) und — sobald sinnvoll — ein kleines Advisory/Audit Board.

- **Rechtsträger:** Die deutsche UG (haftungsbeschränkt) oder GmbH ist Vertragspartner aller Kunden, Lieferanten und Mitarbeiter. Agenten sind *Werkzeuge der Gesellschaft*, keine eigenen Rechtssubjekte.
- **Aufgaben:** Gesellschafterbeschlüsse, Jahresabschluss-Verantwortung, strategische Richtung, Genehmigung neuer Business Units, Bestellung von Dienstleistern (Steuerberater, Anwalt).
- **Mensch oder System:** **Vollständig Mensch.** Das Board Layer trifft keine automatisierten Entscheidungen. Agenten dürfen hier nur *zuarbeiten* (Reports, Entscheidungsvorlagen).
- **Phase 0:** Besteht aus genau einer Person — dem Gründer als Gesellschafter und Geschäftsführer.

### 2.2 Executive Agent Council

**Funktion:** Die operative Führungsebene — die "C-Level-Agenten" (CEO-, COO-, CTO-, CFO-, CLO-, CISO-, CPO-, CHRO-Agent usw., siehe Kapitel 3).

- **Aufgaben:** Übersetzen die strategische Richtung des Boards in operative Pläne, koordinieren die Business Units, priorisieren Ressourcen, bereiten alle Entscheidungen vor, die ein Mensch freigeben muss.
- **Arbeitsweise:** Der Council "tagt" nicht im menschlichen Sinn — er ist ein orchestrierter Workflow. Der CEO-Agent fasst Inputs der anderen C-Agenten zusammen und erzeugt eine tägliche Entscheidungsvorlage für den Gründer.
- **Mensch oder System:** **System mit Mensch-an-der-Spitze.** Der Council entscheidet autonom über Routine; alles oberhalb definierter Schwellen geht als Vorlage an den Gründer.
- **Phase 0:** Wenige Agenten in Personalunion — ein Agent kann mehrere C-Rollen "tragen", solange das Volumen klein ist. Die Rollen werden später entkoppelt.

### 2.3 Business Units

**Funktion:** Die geschäftstreibenden Einheiten mit eigener P&L-Logik (siehe Kapitel 4: A–H). Jede Unit ist ein "Studio" im Activision-Sinn — halbautonom, mit eigenen KPIs.

- **Aufgaben:** Produkte und Services entwerfen, anbieten, liefern, betreiben. Jede Unit hat einen verantwortlichen Lead-Agenten, der an den Executive Council berichtet.
- **Mensch oder System:** **System, von Menschen geprüft.** Die Unit produziert; QA-/Audit-Layer und der Gründer geben frei.
- **Phase 0:** Nur **eine** Unit ist aktiv — das **AI Software Studio**. Alle anderen sind im Blueprint definiert, aber "geparkt".

### 2.4 Product Studios

**Funktion:** Innerhalb der Business Units sind **einzelne Projekte/Repos/Produktlinien** jeweils ein "Product Studio" — die kleinste Mini-Firma-Einheit. Ein Kunde, eine Website, ein Repo = ein Studio.

- **Aufgaben:** Trägt eine konkrete Produktlinie von der Idee bis zur Wartung (siehe Kapitel 14: "Ein neues Repo wird zur Mini-Firma").
- **Eigenständigkeit:** Eigenes Budget, eigene Kennzahlen, eigene Mini-Marke, eigener Eintrag in der Registry — aber gemeinsame Infrastruktur.
- **Mensch oder System:** **System, Mensch genehmigt Geld/Verträge.**
- **Phase 0:** Jeder Kundenauftrag (z. B. eine "Landingpage in 48 h") wird als eigenes Product Studio geführt — auch wenn es nur ein paar Tage lebt.

### 2.5 Shared Services

**Funktion:** Querschnittsfunktionen, die *alle* Units nutzen, damit nichts doppelt gebaut wird (Amazon-Plattformlogik).

- **Inhalte:** Komponenten-/Vorlagenbibliothek, Branding-Kit, Standard-Workflows, Tool-Zugänge, Wissensdatenbank, Vertragsvorlagen, Rechnungsvorlagen, Marketing-Bausteine.
- **Aufgaben:** Wiederverwendbarkeit sicherstellen, Qualitätsstandards einheitlich halten, Onboarding neuer Units beschleunigen.
- **Mensch oder System:** **System**, mit menschlicher Freigabe bei rechtlich relevanten Vorlagen (AGB, Verträge).
- **Phase 0:** Beginnt als eine einzige strukturierte Wissens-/Vorlagen-Ablage und wächst mit jedem Projekt.

### 2.6 Real-World Operations Network

**Funktion:** Die Schicht, über die die Firma physisch und rechtlich in die Welt wirkt — aber nur über kontrollierte Schnittstellen (Detail in Kapitel 6).

- **Inhalte:** E-Mail, Kalender, Banking (mit Freigabegrenzen), Einkauf, Versand, CRM, ERP, Lager, Werkstätten, lokale Dienstleister, Freelancer-Plattformen, IoT-Gateways.
- **Aufgaben:** Agentenentscheidungen in reale Aktionen übersetzen — gefiltert durch Approval-Gates.
- **Mensch oder System:** **Gemischt, streng nach Autonomiematrix.** Routine autonom, Geld/Verträge/Behörden immer Mensch.
- **Phase 0:** Minimaler Satz: E-Mail, Kalender, ein Buchhaltungstool, LinkedIn, GitHub, Hosting. Banking nur lesend + Freigabe-Workflow.

### 2.7 Human Expert Network

**Funktion:** Der Pool an Menschen, die beauftragt werden — Freelancer, Fachkräfte, Werkstätten, Anwälte, Steuerberater, lokale Operatoren (Detail in Kapitel 7).

- **Aufgaben:** Übernehmen physische Arbeit, Kreativität, Haftungsfunktionen, Vor-Ort-Arbeit, Spezialwissen. Agenten briefen, prüfen und bezahlen sie über definierte Prozesse.
- **Mensch oder System:** **Mensch leistet, System koordiniert.** Auswahl, Briefing, Qualitätsprüfung und Feedback-Speicherung laufen über den CHRO-Agenten — die Bezahlung selbst ist ein menschlich freigegebener Schritt.
- **Phase 0:** Sehr klein — vielleicht der Steuerberater plus 1–2 abrufbare Freelancer für Spezialfälle (z. B. anspruchsvolles Design).

### 2.8 Compliance & Audit Layer

**Funktion:** Die Kontrollschicht, die *quer* zu allen anderen liegt und Vetorecht hat.

- **Inhalte:** Audit-Agent, Safety-Agent, CISO-Agent, Audit Board (Mensch), Compliance-Regelwerk, vollständige Audit-Logs.
- **Aufgaben:** Jede Agentenentscheidung protokollieren, Regelverstöße erkennen, riskante Aktionen blockieren, Red-Team-Prüfungen, Incident Response.
- **Mensch oder System:** **System überwacht laufend, Mensch entscheidet im Ernstfall.** Diese Ebene kann andere Ebenen *stoppen* (Not-Aus, Quarantäne).
- **Phase 0:** Beginnt als striktes Logging + ein Satz harter Regeln (Budgetlimits, rote Linien) + wöchentliche manuelle Durchsicht durch den Gründer.

### 2.9 Data & Memory Layer

**Funktion:** Das Gedächtnis der Firma — alles, was die Organisation weiß, versioniert und auditierbar.

- **Inhalte:** Agent Registry, Memory-Datenbank, Projektarchiv, Nachkalkulationen, Kundendaten (DSGVO-konform), Lerndaten, Entscheidungshistorie.
- **Aufgaben:** Wissen persistent halten, Kontext für Agenten bereitstellen, Selbstverbesserung ermöglichen, Nachvollziehbarkeit garantieren.
- **Mensch oder System:** **System**, mit DSGVO-Verantwortung beim Menschen (Datenschutzverantwortlicher = Gründer in Phase 0).
- **Datenschutz-Hinweis:** Sensible Daten (Kundendaten, Verträge, PII) werden bevorzugt über **lokale Modelle (Ollama)** verarbeitet, damit sie das Haus nicht verlassen.

### 2.10 Finance & Treasury Layer

**Funktion:** Geldfluss, Liquidität, Kalkulation, Buchhaltungsvorbereitung.

- **Inhalte:** CFO-Agent, Buchhaltungstool, Bankkonto (mit Freigabegrenzen), Rechnungsläufe, Budget-Register, Nachkalkulations-Engine.
- **Aufgaben:** Angebote kalkulieren, Rechnungen vorbereiten, Cashflow überwachen, Budgets je Studio führen, Steuerberater zuarbeiten.
- **Mensch oder System:** **System bereitet vor, Mensch gibt jeden Geldabfluss frei** (harte rote Linie). Der Jahresabschluss bleibt beim Steuerberater.
- **Phase 0:** Buchhaltungstool (z. B. lexoffice/sevDesk) + Steuerberater nur für den Jahresabschluss; der CFO-Agent füllt das Tool vor.

### 2.11 Schichtdiagramm (Gesamtübersicht)

```
┌─────────────────────────────────────────────────────────────┐
│  1. HOLDING / BOARD LAYER          (100 % Mensch)            │
│     UG/GmbH · Gesellschafter · Advisory/Audit Board          │
├─────────────────────────────────────────────────────────────┤
│  2. EXECUTIVE AGENT COUNCIL        (System + Mensch a.d.Spitze)│
│     CEO/COO/CTO/CFO/CLO/CISO/CPO/CHRO-Agenten                │
├───────────────┬───────────────┬─────────────────────────────┤
│ 3. BUSINESS    │ 4. PRODUCT     │  5. SHARED SERVICES         │
│    UNITS       │    STUDIOS     │     Vorlagen · Komponenten  │
│  (A–H)         │  (Repos/Proj.) │     Wissensbasis · Branding │
├───────────────┴───────────────┴─────────────────────────────┤
│  ║  8. COMPLIANCE & AUDIT LAYER  (quer, mit Vetorecht)  ║    │
│  ║  9. DATA & MEMORY LAYER       (quer, Gedächtnis)     ║    │
│  ║ 10. FINANCE & TREASURY LAYER  (quer, Geldfluss)      ║    │
├─────────────────────────────────────────────────────────────┤
│  6. REAL-WORLD OPERATIONS NETWORK  (kontrollierte Interfaces) │
│     E-Mail · Banking · CRM/ERP · Einkauf · Versand · IoT     │
├─────────────────────────────────────────────────────────────┤
│  7. HUMAN EXPERT NETWORK           (Mensch leistet)          │
│     Freelancer · Fachkräfte · Werkstätten · Anwälte · StB    │
└─────────────────────────────────────────────────────────────┘

Lesehilfe: 1 steuert, 2 führt operativ, 3–5 produzieren,
8–10 kontrollieren/tragen/finanzieren quer, 6 verbindet mit
der realen Welt, 7 erbringt die menschliche/physische Leistung.
```

**Phase-0-Realität:** Der Gründer "ist" Ebene 1, prüft Ebene 8 manuell und gibt Ebene 10 frei. Die Ebenen 2–7 sind so dünn wie möglich gebaut, aber strukturell vorhanden — Wachstum heißt dann nur noch, jede Ebene aufzufüllen.

---

## 3. Organigramm

### 3.1 Organigramm-Diagramm

```
                    ┌──────────────────────────┐
                    │   HUMAN CEO / GRÜNDER     │  ← haftet, entscheidet,
                    │   (Gesellschafter, GF)    │    gibt Geld & Verträge frei
                    └────────────┬─────────────┘
                                 │ Steuerung & finale Freigabe
                    ┌────────────┴─────────────┐
                    │      CEO-AGENT           │  ← orchestriert, bündelt,
                    │  (Chief Orchestrator)    │    erzeugt Entscheidungsvorlagen
                    └────────────┬─────────────┘
        ┌──────────┬─────────────┼─────────────┬──────────┬──────────┐
        │          │             │             │          │          │
   ┌────┴───┐ ┌────┴───┐   ┌─────┴────┐  ┌─────┴───┐ ┌────┴────┐ ┌───┴────┐
   │ COO-A. │ │ CTO-A. │   │  CFO-A.  │  │ CLO-A.  │ │ CISO-A. │ │ CPO-A. │
   │Betrieb │ │Technik │   │ Finanzen │  │ Recht   │ │Sicherh. │ │Produkt │
   └────┬───┘ └────┬───┘   └─────┬────┘  └─────────┘ └─────────┘ └───┬────┘
        │          │             │                                   │
   ┌────┴─────────────────────────────────┐                    ┌─────┴──────┐
   │  OPERATIVE FACH-AGENTEN              │                    │ CHRO-AGENT │
   │  Brand · Sales · Procurement · QA ·  │                    │ Human-Ops  │
   │  Customer-Support · Field-Operations │                    └─────┬──────┘
   └──────────────────────────────────────┘                          │
                                                            ┌─────────┴────────┐
   ╔══════════════════════════════════════╗                 │ HUMAN EXPERT     │
   ║  KONTROLLE (quer, mit Vetorecht):    ║                 │ NETWORK          │
   ║  SAFETY-AGENT  ·  AUDIT-AGENT        ║                 │ (Freelancer etc.)│
   ╚══════════════════════════════════════╝                 └──────────────────┘
```

**Phase-0-Hinweis:** Anfangs werden mehrere Rollen von wenigen Agenten-Instanzen "in Personalunion" getragen (z. B. ein Agent als CEO+COO+CPO). Die Steckbriefe unten beschreiben den **Zielzustand**; die Trennung erfolgt schrittweise mit wachsendem Volumen.

### 3.2 Rollensteckbriefe

Jeder Steckbrief folgt demselben Raster: **Hauptaufgabe · Entscheidungsspielraum · Grenzen · Erlaubte Tools · Human-Approval · Optimierte KPIs**.

---

#### 3.2.1 Human CEO / Gründer

- **Hauptaufgabe:** Strategische Richtung, finale Verantwortung, Freigabe von Geld und Verträgen, Beziehungspflege zu Schlüsselkunden und Dienstleistern. Koordinator-Rolle: entscheiden, nicht selbst ausführen.
- **Entscheidungsspielraum:** Unbegrenzt — ist die letzte Instanz.
- **Grenzen:** Gesetz, Liquidität, eigene Zeit (~30–40 h/Woche). Sollte sich an die selbst gesetzten Prozesse halten, um das System nicht zu untergraben.
- **Erlaubte Tools:** Alle. Insbesondere das Approval-Dashboard, Banking, Vertragsunterschrift.
- **Human-Approval:** Entfällt — ist der Approver.
- **Optimierte KPIs:** Netto-Cashflow, Anzahl zufriedener Kunden, Anteil der Arbeit, der ohne ihn läuft (Automationsgrad).

#### 3.2.2 CEO-Agent (Chief Orchestrator)

- **Hauptaufgabe:** Orchestriert alle anderen Agenten, bündelt deren Inputs, erzeugt die tägliche Entscheidungsvorlage und priorisiert, woran das System arbeitet.
- **Entscheidungsspielraum:** Darf Aufgaben zwischen Agenten verteilen, Prioritäten setzen, Routine-Workflows starten.
- **Grenzen:** Darf keine externen Verpflichtungen eingehen, kein Geld bewegen, keine Kunden-/Lieferantenkommunikation final freigeben. Darf den Gründer nicht "übergehen".
- **Erlaubte Tools:** Task Router, Workflow Engine, Registry (lesend), Reporting/Dashboard.
- **Human-Approval:** Bei allem, was Schwellenwerte überschreitet (Budget, Risiko-Score, Außenwirkung) → Vorlage an Gründer.
- **Optimierte KPIs:** Durchlaufzeit pro Auftrag, Auslastung der Agenten, Quote der Vorlagen, die der Gründer ohne Korrektur freigibt.

#### 3.2.3 COO-Agent (Betrieb)

- **Hauptaufgabe:** Sorgt dafür, dass Aufträge sauber durch den Prozess laufen (Eingang → Lieferung → Support). Überwacht Termine, Engpässe, SLAs.
- **Entscheidungsspielraum:** Darf Ressourcen umplanen, Freelancer-Anfragen vorbereiten, Liefertermine intern setzen.
- **Grenzen:** Keine Beauftragung mit Zahlungsfolge ohne Freigabe; keine Terminzusage an Kunden ohne CEO-Agent/Gründer.
- **Erlaubte Tools:** Workflow Engine, Projektmanagement (z. B. Asana), Kalender, CRM (schreibend für interne Felder).
- **Human-Approval:** Externe Terminzusagen, Beauftragung von Menschen, Eskalationen an Kunden.
- **Optimierte KPIs:** Termintreue, Anteil Projekte ohne Eskalation, Rüstzeit pro Projekt.

#### 3.2.4 CTO-Agent (Technik)

- **Hauptaufgabe:** Verantwortet die technische Lieferqualität — Architektur, Code-Standards, Tech-Stack-Entscheidungen, Build-/Deploy-Pipelines.
- **Entscheidungsspielraum:** Wählt technische Lösungen im Rahmen der Standard-Bausteine, startet Builds, erstellt Code in Staging-Umgebungen.
- **Grenzen:** **Code-Deployment auf Kunden-/Produktivsysteme ist freigabepflichtig** (auch wenn der Gründer Deployment nicht als "rote Linie" markiert hat — der Blueprint setzt hier ein Sicherheits-Gate, das per Konfiguration gelockert werden kann).
- **Erlaubte Tools:** GitHub, CI/CD, Hosting (Vercel/Cloudflare), Supabase, Secrets Manager (nur Referenzen, nie Klartext), lokale & Cloud-Modelle.
- **Human-Approval:** Produktiv-Deployment, Architektur-Entscheidungen mit Kostenfolge, Einbindung neuer externer Dienste.
- **Optimierte KPIs:** Fehlerrate nach Auslieferung, Build-Erfolgsquote, Wiederverwendungsgrad von Bausteinen, technische Schuld.

#### 3.2.5 CFO-Agent (Finanzen)

- **Hauptaufgabe:** Kalkuliert Angebote, bereitet Rechnungen vor, überwacht Cashflow und Budgets je Studio, kalkuliert Projekte nach, arbeitet dem Steuerberater zu.
- **Entscheidungsspielraum:** Darf kalkulieren, Rechnungsentwürfe erzeugen, Budgetwarnungen auslösen, Reports erstellen.
- **Grenzen:** **Harte rote Linie — kein Geldabfluss ohne menschliche Freigabe.** Darf keine Zahlung auslösen, keine Rechnung *versenden* (nur vorbereiten), keine verbindlichen Preise zusagen.
- **Erlaubte Tools:** Buchhaltungstool (lexoffice/sevDesk) schreibend für Entwürfe, Banking **nur lesend**, Budget-Register, Nachkalkulations-Engine.
- **Human-Approval:** Jede Zahlung, jeder Rechnungsversand, jede verbindliche Preiszusage, Budgetfreigabe je Studio.
- **Optimierte KPIs:** Deckungsbeitrag pro Projekt, Prognosegenauigkeit (Kalkulation vs. Ist), Tage bis Zahlungseingang, Liquiditätsreichweite.

#### 3.2.6 CLO / Legal-Agent (Recht)

- **Hauptaufgabe:** Prüft Verträge, AGB, Angebote, Marketing-Texte und Akquise-Vorgehen auf rechtliche Risiken (DSGVO, UWG, Vertragsrecht, Urheberrecht).
- **Entscheidungsspielraum:** Darf Standardvorlagen anwenden, Risiken markieren, Formulierungen vorschlagen, Checklisten abarbeiten.
- **Grenzen:** **Ersetzt keinen Anwalt.** Darf keine verbindliche Rechtsauskunft geben, keinen Vertrag freigeben, nichts unterschreiben. Bei echtem Risiko → menschlicher Anwalt.
- **Erlaubte Tools:** Vertragsvorlagen-Bibliothek, Dokumentenmanagement, Wissensbasis Recht, Risk-Scoring.
- **Human-Approval:** Jeder Vertragsabschluss, jede AGB-Änderung, jede Behördenkommunikation, alles mit Rechtsrisiko-Score über Schwelle.
- **Optimierte KPIs:** Anteil Projekte mit sauberer Vertragsbasis, Zahl rechtlicher Beanstandungen (Ziel: 0), Reaktionszeit auf Risikoflags.

#### 3.2.7 CISO-Agent (Informationssicherheit)

- **Hauptaufgabe:** Schützt Daten, Zugänge, Secrets und Systeme. Überwacht Zugriffsrechte, erkennt Anomalien, verantwortet Secrets-Hygiene.
- **Entscheidungsspielraum:** Darf Zugriffe einschränken, verdächtige Sessions beenden, Sicherheitswarnungen auslösen, RBAC-Regeln vorschlagen.
- **Grenzen:** Darf keine Geschäftsentscheidungen treffen; bei Sicherheitsvorfall mit Außenwirkung → sofort Mensch.
- **Erlaubte Tools:** Secrets Manager, RBAC-System, Audit-Logs, Monitoring, Incident-Management.
- **Human-Approval:** Meldepflichtige Datenpannen (DSGVO Art. 33/34), Vergabe weitreichender Rechte, Reaktion auf schwere Vorfälle.
- **Optimierte KPIs:** Zahl der Sicherheitsvorfälle, Mean-Time-to-Detect/Respond, Anteil Secrets ohne Klartext-Exposure, Patch-Aktualität.

#### 3.2.8 CPO / Product-Agent (Produkt)

- **Hauptaufgabe:** Definiert die Produkte und Produktlinien — Scope, Roadmap, Pricing-Logik, Standardisierung des "Landingpage-in-48h"-Angebots und seiner Nachfolger.
- **Entscheidungsspielraum:** Darf Produktdefinitionen, Scopes und Roadmaps entwerfen, Standardpakete vorschlagen, Feedback in Verbesserungen übersetzen.
- **Grenzen:** Keine endgültige Preisfestsetzung (CFO + Gründer), keine Versprechen an Kunden.
- **Erlaubte Tools:** Produkt-/Roadmap-Tools, Wissensbasis, Analytics, Komponentenbibliothek.
- **Human-Approval:** Neue Produktlinien, Preisänderungen, strategische Scope-Entscheidungen.
- **Optimierte KPIs:** Wiederkaufrate, Marge pro Produktlinie, Standardisierungsgrad (Anteil Standard- vs. Sonderarbeit), Kundenzufriedenheit.

#### 3.2.9 CHRO / Human-Operations-Agent

- **Hauptaufgabe:** Verwaltet das Human Expert Network — findet, onboardet, briefed, bewertet und koordiniert Freelancer, Fachkräfte und Operatoren.
- **Entscheidungsspielraum:** Darf Kandidaten recherchieren, Briefings erstellen, Bewertungen pflegen, Anfragen vorbereiten.
- **Grenzen:** **Kein Vertragsabschluss, keine Bezahlung, keine Kündigung ohne Mensch.** Arbeitsrecht ist Sperrgebiet für autonome Aktionen.
- **Erlaubte Tools:** Freelancer-Plattformen (recherchierend/anfragend), CRM für Menschen, Briefing-Vorlagen, Bewertungssystem.
- **Human-Approval:** Jede Beauftragung, jede Vergütungszusage, jede Beendigung einer Zusammenarbeit, alles mit arbeitsrechtlicher Relevanz.
- **Optimierte KPIs:** Qualität der Freelancer-Ergebnisse (Bewertungsschnitt), Time-to-Fill (wie schnell ist jemand gefunden), Nacharbeitsquote.

#### 3.2.10 Brand-Agent

- **Hauptaufgabe:** Hält Marke und Tonalität konsistent — "Premium-Studio, AI im Hintergrund". Verantwortet visuelle Sprache, Wording, Markenrichtlinien über alle Studios.
- **Entscheidungsspielraum:** Darf Marken-Assets im Rahmen des Brand-Kits erstellen, Texte tonal prüfen, Vorlagen pflegen.
- **Grenzen:** Keine Aussagen, die Versprechen oder Rechtsfolgen erzeugen (→ CLO). Keine irreführende Werbung.
- **Erlaubte Tools:** Design-/Branding-Tools, Brand-Kit, Content-Bibliothek.
- **Human-Approval:** Markenrelevante Grundsatzentscheidungen, neue visuelle Identität, öffentliche Kampagnen-Claims.
- **Optimierte KPIs:** Markenkonsistenz-Score, Wiedererkennung, Conversion der Marken-Touchpoints.

#### 3.2.11 Sales-Agent

- **Hauptaufgabe:** Akquise über **LinkedIn/Social Selling** (Primärkanal): identifiziert passende Startups/Gründer, personalisiert Ansprache, qualifiziert Leads, bereitet Angebote vor.
- **Entscheidungsspielraum:** Darf recherchieren, Zielkunden listen, Nachrichtenentwürfe erstellen, Pipeline pflegen, Angebotsentwürfe vorbereiten.
- **Grenzen:** **Keine rechtswidrige Kaltakquise** (UWG-konform: kein Kalt-E-Mail-Massenversand ohne Einwilligung). Kein verbindliches Angebot ohne CFO/Gründer. Versand von Erstkontakten ist freigabe- oder regelgebunden (siehe Kapitel 6).
- **Erlaubte Tools:** LinkedIn (im Rahmen der Plattformregeln), CRM, Angebotsvorlagen, Recherche-Tools.
- **Human-Approval:** Verbindliche Angebote, untypische Konditionen, Akquise-Kampagnen, alles mit UWG-Risiko-Flag.
- **Optimierte KPIs:** Antwortrate, Lead-to-Deal-Conversion, Akquisekosten pro Kunde, Pipeline-Wert.

#### 3.2.12 Procurement-Agent (Einkauf)

- **Hauptaufgabe:** Beschafft Tools, Lizenzen, Material, Dienstleistungen — vergleicht Anbieter, prüft Konditionen, verwaltet Verträge mit Lieferanten.
- **Entscheidungsspielraum:** Darf Angebote einholen, Vergleiche erstellen, Bestellvorschläge machen, Mikro-Ausgaben bis zu einem sehr niedrigen Limit (siehe Kapitel 6) autonom auslösen, falls der Gründer das konfiguriert.
- **Grenzen:** Standardmäßig **kein Kauf ohne Freigabe**; rote Linie Zahlungen gilt. Keine Langzeitverträge.
- **Erlaubte Tools:** Einkaufsplattformen (recherchierend), Lieferantenregister, Budget-Register.
- **Human-Approval:** Jede Bestellung über dem Mikro-Limit, jeder Abo-/Langzeitvertrag, jeder neue Lieferant.
- **Optimierte KPIs:** Einkaufskosten vs. Budget, Lieferantenqualität, Vermeidung ungenutzter Abos.

#### 3.2.13 QA-Agent (Qualitätssicherung)

- **Hauptaufgabe:** Prüft jeden Output (Code, Text, Design, Konzept) vor Auslieferung gegen Qualitätsstandards und Akzeptanzkriterien. **Hat Vetorecht gegen Auslieferung.**
- **Entscheidungsspielraum:** Darf Outputs blockieren, Nacharbeit anfordern, Tests ausführen, Mängel dokumentieren.
- **Grenzen:** Entscheidet nicht über Geschäftsfragen; kann Auslieferung stoppen, aber nicht erzwingen.
- **Erlaubte Tools:** Test-Frameworks, Linter, Checklisten, Fehlerdatenbank, Evaluation-System.
- **Human-Approval:** Bei strittiger Qualität oder wenn ein Mangel trotz Veto ausgeliefert werden soll → Gründer entscheidet.
- **Optimierte KPIs:** Fehler, die nach Auslieferung beim Kunden auftreten (Ziel: 0), First-Pass-Quote, Nacharbeitsaufwand.

#### 3.2.14 Customer-Support-Agent

- **Hauptaufgabe:** Beantwortet Kundenanfragen, betreibt Self-Service-Hilfe, dokumentiert Tickets, eskaliert sauber.
- **Entscheidungsspielraum:** Darf Standardanfragen autonom beantworten, Tickets kategorisieren, Wissensbasis-Artikel vorschlagen.
- **Grenzen:** Keine Zusagen mit Kosten-/Rechtsfolge, keine Kulanz-Entscheidungen, keine Vertragsänderungen.
- **Erlaubte Tools:** Ticketsystem, Wissensbasis, CRM (lesend + Ticketfelder), E-Mail (im Rahmen der Autonomiematrix).
- **Human-Approval:** Beschwerden mit Eskalationspotenzial, Kulanz/Erstattung, alles mit Rechts- oder Reputationsrisiko.
- **Optimierte KPIs:** Erstlösungsquote, Antwortzeit, Kundenzufriedenheit (CSAT), Eskalationsquote.

#### 3.2.15 Field-Operations-Agent

- **Hauptaufgabe:** Koordiniert physische Arbeit über das Human Expert Network und das Local Operations Network — plant Einsätze, briefed Operatoren, verfolgt Status.
- **Entscheidungsspielraum:** Darf Einsätze planen, Operatoren vorschlagen, Briefings erstellen, Status verfolgen.
- **Grenzen:** **Keine Beauftragung, keine riskanten physischen Aktionen, keine Sicherheitsentscheidungen ohne Mensch.** In Phase 0 weitgehend inaktiv (Software Studio = digital).
- **Erlaubte Tools:** Operator-Register, Kalender, Briefing-Vorlagen, Karten-/Logistik-Tools.
- **Human-Approval:** Jede physische Beauftragung, alles mit Sicherheits- oder Haftungsrelevanz.
- **Optimierte KPIs:** Termintreue vor Ort, Operator-Bewertung, Vorfälle (Ziel: 0).

#### 3.2.16 Safety-Agent

- **Hauptaufgabe:** Bewertet jede geplante Aktion auf Sicherheits-, Schadens- und Missbrauchsrisiko *bevor* sie ausgeführt wird. Teil des Compliance & Audit Layers, **mit Vetorecht**.
- **Entscheidungsspielraum:** Darf Aktionen blockieren, Risk-Scores vergeben, Quarantäne auslösen, Not-Aus empfehlen.
- **Grenzen:** Entscheidet nicht über Geschäft oder Inhalt; nur Risiko-Gate. Kann nicht "freigeben", nur "stoppen lassen".
- **Erlaubte Tools:** Risk-Scoring, Simulation Layer, Audit-Logs, Incident-Management, Not-Aus-Mechanismen.
- **Human-Approval:** Jede Aufhebung eines Safety-Vetos, jeder Vorfall der Stufe "ernst".
- **Optimierte KPIs:** Verhinderte Vorfälle, False-Positive-Rate (zu Unrecht blockiert), Reaktionszeit auf Risikoflags.

#### 3.2.17 Audit-Agent

- **Hauptaufgabe:** Protokolliert lückenlos jede Agentenentscheidung, prüft Nachvollziehbarkeit und Regelkonformität, erstellt Audit-Reports für Mensch und (später) Audit Board.
- **Entscheidungsspielraum:** Darf prüfen, dokumentieren, Abweichungen melden, Audit-Reports erstellen.
- **Grenzen:** Greift nicht in den Betrieb ein (außer Meldung); ist Beobachter und Protokollant, nicht Akteur.
- **Erlaubte Tools:** Audit-Logs (vollständiger Lesezugriff), Reporting, Registry, Evaluation-System.
- **Human-Approval:** Keine eigenen Aktionen mit Außenwirkung — liefert nur an den Menschen.
- **Optimierte KPIs:** Lückenlosigkeit der Protokolle (100 %), Anteil erklärbarer Entscheidungen, Zeit bis Abweichungen gemeldet werden.

### 3.3 Eskalations- und Berichtswege

**Berichtsweg (nach oben, täglich verdichtet):**
Fach-Agenten → zuständiger C-Agent → CEO-Agent → **tägliche Entscheidungsvorlage** → Human CEO/Gründer.

**Eskalationsweg (sofort, ereignisgetrieben):**

| Auslöser | Eskaliert an | Reaktionszeit |
|---|---|---|
| Budget-/Geldgrenze überschritten | CFO-Agent → Gründer | Sofort, blockierend |
| Vertrag/Rechtsverbindlichkeit nötig | CLO-Agent → Gründer (ggf. Anwalt) | Vor jeder Zusage |
| Safety-Veto / hoher Risk-Score | Safety-Agent → Gründer | Sofort, blockierend |
| Sicherheitsvorfall / Datenpanne | CISO-Agent → Gründer | Sofort, ggf. Meldepflicht 72 h |
| Kundenbeschwerde mit Eskalationspotenzial | Support-Agent → COO-Agent → Gründer | Innerhalb des Geschäftstags |
| Qualitäts-Veto strittig | QA-Agent → Gründer | Vor Auslieferung |
| Agent verhält sich anomal | Audit-/Safety-Agent → Not-Aus → Gründer | Sofort, blockierend |

**Grundprinzip:** Nach **oben** wird *verdichtet und periodisch* berichtet (damit der Gründer nicht ertrinkt). Bei **roten Linien und Risiken** wird *sofort und blockierend* eskaliert (damit nichts Unumkehrbares passiert). Jede Eskalation erzeugt automatisch einen Audit-Log-Eintrag.

---

## 4. Business Units

> _Je Unit: Zweck, Produkte, Einnahmemodelle, benötigte Agenten, benötigte Menschen, Risiken, Qualitätskontrolle, Skalierungslogik._

- 4.A AI Software Studio
- 4.B Digital Product Factory
- 4.C Physical Services Marketplace
- 4.D Autonomous Marketing Agency
- 4.E Premium Engineering Lab
- 4.F Game / Media / Content Studio
- 4.G Local Operations Network
- 4.H Internal Tools & Automation Division

---

## 5. Agentenarchitektur

> _Technisches System + Auftragsdurchlauf._

- 5.1 Agent Registry
- 5.2 Memory System
- 5.3 Tool Permission System
- 5.4 Task Router
- 5.5 Workflow Engine
- 5.6 Approval Gates
- 5.7 Audit Logs
- 5.8 Simulation Layer
- 5.9 Digital Twin der Firma
- 5.10 Evaluation System
- 5.11 Incident Management
- 5.12 Secrets Management
- 5.13 Role-Based Access Control (RBAC)
- 5.14 Budget Limits
- 5.15 Risk Scoring
- 5.16 Auftragsdurchlauf End-to-End (Eingang → Analyse → Angebot → Freigabe → Planung → Ausführung → QS → Rechnung → Support → Nachkalkulation → Lernen)

---

## 6. Zugriff auf die reale Welt

> _Sichere Real-World-Interfaces + klare Autonomiestufen._

- 6.1 Interface-Katalog (E-Mail, Telefon via Operatoren, Kalender, Buchhaltung, Banking, Einkauf, Versand, CRM, ERP, Lager, Werkstätten, lokale Dienstleister, Freelancer-Plattformen, Behörden, Verträge, physische Einsätze)
- 6.2 Autonomiematrix: autonom erlaubt / nur Vorschlag / immer Mensch
- 6.3 Freigabegrenzen (Banking, Budget, Vertragswert)
- 6.4 Not-Aus-Mechanismen (Kill Switch, Circuit Breaker, Quarantäne)

---

## 7. Human Workforce Modell

> _Je Gruppe: wann gebraucht, wie gebrieft, Qualitätsprüfung, Bezahlung, Feedback-Speicherung, Missbrauchsschutz._

- 7.1 Festangestellte
- 7.2 Freelancer
- 7.3 Lokale Operatoren
- 7.4 Fachkräfte
- 7.5 Werkstätten
- 7.6 Fahrer / Logistik
- 7.7 Monteure
- 7.8 Designer
- 7.9 Entwickler
- 7.10 Rechtsanwälte / Steuerberater
- 7.11 Qualitätsprüfer
- 7.12 Onboarding-, Vergütungs- und Bewertungssystem

---

## 8. Geschäftsmodell

> _Einnahmequellen + Bewertung (schnelle vs. langfristige Einnahmen, Risiken, Kapitalbedarf, Margen, Skalierbarkeit)._

- 8.1 SaaS-Abos
- 8.2 Projektgeschäft
- 8.3 Agent-as-a-Service
- 8.4 Managed Operations
- 8.5 Marketplace-Provision
- 8.6 Premium-Support
- 8.7 Enterprise-Lizenzen
- 8.8 Daten-/Analyseprodukte (nur anonymisiert, rechtlich sauber)
- 8.9 White-Label-Agentenfirma
- 8.10 Beteiligungen an automatisiert aufgebauten Projekten
- 8.11 Bewertungsmatrix aller Einnahmequellen

---

## 9. Finanzmodell

> _Realistisches Phasenmodell. Je Phase: Team, Kosten, Umsatzquellen, kritische KPIs, Risiken, Infrastruktur, Meilensteine._

- 9.0 Phase 0 — Solo-Founder mit AI-Agenten
- 9.1 Phase 1 — 3–5 Menschen + Agentensystem
- 9.2 Phase 2 — 15–30 Menschen + spezialisierte Business Units
- 9.3 Phase 3 — 50–100 Menschen + internationales Operator-Netzwerk
- 9.4 Phase 4 — AI-native Holding mit vielen Tochterprojekten
- 9.5 Annahmen, Sensitivitäten, Break-even-Logik

---

## 10. Governance, Sicherheit und Recht

> _Governance-Modell + rechtlicher Rahmen._

- 10.1 Human-in-the-loop / Human-on-the-loop / Human-in-command
- 10.2 Audit Board
- 10.3 Compliance Board
- 10.4 Data Protection Officer
- 10.5 Incident Response
- 10.6 Red-Team-Prüfungen
- 10.7 Model Risk Management
- 10.8 Vendor Risk Management
- 10.9 Vertragsprüfung
- 10.10 Datenschutz
- 10.11 Arbeitsrecht
- 10.12 Haftung
- 10.13 Versicherungen

---

## 11. Marken- und Kulturmodell

> _Identität der Firma._

- 11.1 Markenphilosophie
- 11.2 Visuelle Sprache
- 11.3 Tonalität
- 11.4 Werte
- 11.5 Interne Rituale
- 11.6 Agenten-Ethik
- 11.7 Qualitätsversprechen
- 11.8 Premium-Faktor (Porsche/Mercedes-Logik)
- 11.9 Studio-/Franchise-Denken (Activision-Logik)
- 11.10 Plattformdenken (Amazon/Apple-Logik)

---

## 12. Beispieltag in dieser Firma

> _Konkreter Arbeitstag, Stunde für Stunde._

- 12.1 Morgens: automatische Abläufe
- 12.2 Agenten-Reports
- 12.3 Vorbereitete Entscheidungen
- 12.4 Human-Briefings
- 12.5 Kundenprojekte im Tagesverlauf
- 12.6 Eskalationen
- 12.7 Dashboard-Sicht
- 12.8 Sicht des Gründers/CEO

---

## 13. Dashboard und Betriebssystem

> _Das zentrale Firmen-Dashboard ("The Company OS")._

- 13.1 Kennzahlenpanel (Umsatz, Kosten, Cashflow, Qualitätsmetriken, Automationsgrad)
- 13.2 Projekt- & Pipeline-Ansicht
- 13.3 Agentenstatus
- 13.4 Risiken & Compliance-Warnungen
- 13.5 Offene Freigaben
- 13.6 Human-Operator-Status
- 13.7 Liefertermine & Repo-/Produktstatus
- 13.8 Marketing-Kanäle & Support-Tickets
- 13.9 Informationsarchitektur / Screen-Layout

---

## 14. Beispiel: Ein neues Repo wird gestartet

> _Vom GitHub-Repo zur Mini-Firma — Schritt für Schritt._

- 14.1 Namensfindung
- 14.2 Branding
- 14.3 Website & Landingpage
- 14.4 Dokumentation
- 14.5 Roadmap & Produktstrategie
- 14.6 Pricing
- 14.7 Support & Analytics
- 14.8 Marketing & Kundenakquise
- 14.9 Release-Prozess & Wartung
- 14.10 Buchhaltung & rechtliche Prüfung
- 14.11 Wachstum

---

## 15. Risiken und Gegenmaßnahmen

> _Mindestens 30 Risiken. Je Risiko: Ursache, Auswirkung, Frühwarnsignal, Gegenmaßnahme, zuständiger Agent/Mensch._

- 15.1 Technische Risiken
- 15.2 Rechtliche Risiken
- 15.3 Finanzielle Risiken
- 15.4 Reputationsrisiken
- 15.5 Sicherheitsrisiken
- 15.6 Menschliche Risiken
- 15.7 Agenten-Fehlentscheidungen
- 15.8 Tool-Missbrauch
- 15.9 Falsche Daten
- 15.10 Schlechte Dienstleister
- 15.11 Kundenbeschwerden
- 15.12 Haftung
- 15.13 Skalierungsprobleme
- 15.14 Gesamt-Risikoregister (Tabelle, ≥30 Einträge)

---

## 16. MVP-Plan

> _Erste realistische Version für einen einzelnen Gründer._

- 16.1 Erste Agenten
- 16.2 Erste Tools
- 16.3 Erste Prozesse
- 16.4 Erste Business Unit
- 16.5 Was bleibt manuell
- 16.6 Sichere Automationen
- 16.7 Erfolgsmetriken des MVP

---

## 17. 12-Monats-Roadmap

> _Monat 1–12. Je Monat: Ziel, Deliverables, Agenten, Menschen, Kosten, Risiken, Erfolgskriterien._

| Monat | Ziel | Status |
|---|---|---|
| 1 | offen | offen |
| 2 | offen | offen |
| 3 | offen | offen |
| 4 | offen | offen |
| 5 | offen | offen |
| 6 | offen | offen |
| 7 | offen | offen |
| 8 | offen | offen |
| 9 | offen | offen |
| 10 | offen | offen |
| 11 | offen | offen |
| 12 | offen | offen |

---

## 18. Finale Bewertung

> _Ehrliche Gesamteinschätzung._

- 18.1 Was wäre diese Firma wirklich?
- 18.2 Einordnung (Softwarefirma / Holding / Agentensystem / Plattform / Beratung / digitale Fabrik)
- 18.3 Alleinstellungsmerkmal
- 18.4 Wie wird sie defensible?
- 18.5 Was ist daran gefährlich?
- 18.6 Was ist daran extrem wertvoll?
- 18.7 Was muss zuerst gebaut werden?

---

_Ende Durchlauf 1 — Struktur. Nächster Schritt: Ausarbeitung Abschnitt für Abschnitt nach Freigabe._
