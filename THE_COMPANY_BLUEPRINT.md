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

Acht Business Units bilden den Geschäftsbaukasten von "The Company". **Nur Unit A ist in Phase 0 aktiv** — die übrigen sind vollständig definiert, aber "geparkt" und werden phasenweise aktiviert (Reihenfolge siehe Kapitel 9 und 17). Jede Unit folgt demselben Steckbrief-Raster.

**Aktivierungs-Fahrplan (Übersicht):**

| Unit | Name | Aktiviert ab | Abhängigkeit |
|---|---|---|---|
| A | AI Software Studio | **Phase 0 (sofort)** | — |
| H | Internal Tools & Automation Division | Phase 0–1 (intern) | wächst mit dem OS mit |
| D | Autonomous Marketing Agency | Phase 1 | Liefererfahrung aus A |
| B | Digital Product Factory | Phase 1–2 | wiederverwendbare Bausteine aus A |
| F | Game / Media / Content Studio | Phase 2 | Content-Pipelines aus D |
| E | Premium Engineering Lab | Phase 2–3 | Senior-Freelancer-Netz |
| C | Physical Services Marketplace | Phase 3 | Operator-Netz + Haftungsabsicherung |
| G | Local Operations Network | Phase 3–4 | Skalierung von C |

---

### 4.A AI Software Studio  *(Phase 0 — aktiv)*

- **Zweck:** Software-Ergebnisse für Startups und Gründer liefern — schnell, planbar, in Premium-Qualität. Dies ist die Cashflow-Maschine und das Lernfeld für das gesamte OS.
- **Produkte:**
  - *Einstieg:* "Landingpage in 48 h" (750–1.500 €) — Fixpreis, klarer Scope, schnelle Lieferung.
  - *Ausbau:* Mehrseitige Websites, MVP-Prototypen, interne Tools/Dashboards, Integrationen, kleine Web-Apps.
  - *Wiederkehrend:* Wartungs-/Hosting-/Update-Abos nach Launch (Live-Ops-Logik).
- **Einnahmemodelle:** Fixpreis-Projekte (Hauptquelle Phase 0), monatliche Wartungs-Retainer, Stundenkontingente für Erweiterungen, Hosting-Aufschlag.
- **Benötigte Agenten:** Sales (LinkedIn-Akquise), CPO (Scope), CTO (Bau), QA (Prüfung), CFO (Kalkulation/Rechnung), Support, Brand (Konsistenz), Audit/Safety (quer).
- **Benötigte Menschen:** Gründer (Prüfung, Freigabe, Kundengespräch). Bei Bedarf: 1 Design-Freelancer für anspruchsvolle Optik, 1 Senior-Dev-Freelancer für Review größerer Projekte.
- **Risiken:** Output-Qualität schwankt; Scope Creep; UWG-Risiko bei Akquise; Termin-Versprechen ("48 h") nicht haltbar; Kunde unzufrieden trotz erfüllter Spec.
- **Qualitätskontrolle:** QA-Agent mit Veto + Gründer-Review vor jeder Auslieferung; Akzeptanzkriterien im Angebot fixiert; Staging-Vorschau für den Kunden vor Live-Schaltung.
- **Skalierungslogik:** Jedes Projekt füllt die Komponenten-/Vorlagenbibliothek. Projekt #10 nutzt 70–80 % Standardbausteine → Stückkosten sinken, Marge steigt. Skalierung über mehr parallele Product Studios, nicht über mehr Stunden.

### 4.B Digital Product Factory  *(Phase 1–2)*

- **Zweck:** Eigene digitale Produkte statt Kundenauftrag — höhere Marge, wiederkehrender Umsatz, Asset-Aufbau.
- **Produkte:** Kleine SaaS-Tools, Templates/Themes, Komponenten-Pakete, Plugins, digitale Vorlagen, Mikro-Apps.
- **Einnahmemodelle:** SaaS-Abos, Einmalverkäufe (Templates), Lizenzgebühren, Freemium mit Upgrade.
- **Benötigte Agenten:** CPO (Produktdefinition), CTO (Bau & Betrieb), Brand, Sales/Marketing, Support, CFO.
- **Benötigte Menschen:** Gründer (Produktrichtung), gelegentlich Spezial-Freelancer (komplexe Features, Design).
- **Risiken:** Produkte ohne Nachfrage (gebaut, aber niemand kauft); Betriebs-/Wartungslast bindet Kapazität; Support-Aufwand bei vielen Kleinkunden.
- **Qualitätskontrolle:** QA-Agent, Beta-Phase mit echten Nutzern, Analytics-gestützte Iteration, harte "Kill"-Kriterien für erfolglose Produkte.
- **Skalierungslogik:** Erfolgreiche Produkte werden zu Franchises ausgebaut (Activision-Logik); erfolglose früh eingestellt. Baut auf den Bausteinen aus Unit A auf.

### 4.C Physical Services Marketplace  *(Phase 3)*

- **Zweck:** Vermittlung physischer Dienstleistungen — die Firma koordiniert, geprüfte lokale Anbieter führen aus.
- **Produkte:** Vermittelte Handwerks-/Montage-/Reinigungs-/Logistikleistungen mit standardisiertem Briefing, Qualitätsgarantie und einheitlicher Abwicklung.
- **Einnahmemodelle:** Vermittlungsprovision, Service-Aufschlag, Premium-Garantiepaket, Abo für wiederkehrende Leistungen.
- **Benötigte Agenten:** Field-Operations (Koordination), CHRO (Operator-Netz), QA, Support, CFO, CLO (Haftung!), Safety.
- **Benötigte Menschen:** Geprüfte Werkstätten/Handwerker/Dienstleister, lokale Operatoren, Gründer/Ops-Mensch für Haftungsfälle.
- **Risiken:** **Hohe Haftung** (Schäden vor Ort), Qualitätsschwankungen bei Partnern, Versicherungsbedarf, regulatorische Anforderungen je Gewerk, Plattformhaftung.
- **Qualitätskontrolle:** Strenges Operator-Onboarding (Nachweise, Versicherung, Probeauftrag), Bewertungssystem, Stichprobenkontrollen, Eskalations-Hotline mit Mensch.
- **Skalierungslogik:** Erst eine Region + ein Gewerk wasserdicht machen, dann Gewerk für Gewerk und Region für Region ausrollen. Nicht vor solider Haftungs-/Versicherungsbasis starten.

### 4.D Autonomous Marketing Agency  *(Phase 1)*

- **Zweck:** Marketing als Service — Content, Kampagnen, SEO, Social — für dieselbe Zielgruppe wie Unit A (Startups/Gründer).
- **Produkte:** Content-Pakete, Landingpage-Copy, SEO-Grundpakete, Social-Media-Betreuung, Kampagnen-Konzepte, Newsletter.
- **Einnahmemodelle:** Monats-Retainer (Hauptquelle), Projektpreise, Performance-Komponenten (vorsichtig, klar geregelt).
- **Benötigte Agenten:** Brand, Sales, CPO, mehrere Content-Agenten, QA, Support, CFO, CLO (Werberecht/UWG).
- **Benötigte Menschen:** Gründer (Freigabe veröffentlichter Inhalte), Freelance-Texter/Designer für Premium-Anspruch.
- **Risiken:** UWG/Werberecht, Marken-/Reputationsschaden durch schlechten Content, Performance-Versprechen, generischer "AI-Content" ohne Substanz.
- **Qualitätskontrolle:** QA-Agent + menschliche Freigabe vor Veröffentlichung, Brand-Konsistenzprüfung, Faktencheck-Schritt, CLO-Prüfung werblicher Aussagen.
- **Skalierungslogik:** Cross-Selling zu Unit-A-Kunden (Website + Marketing aus einer Hand). Content-Pipelines werden später von Unit F mitgenutzt.

### 4.E Premium Engineering Lab  *(Phase 2–3)*

- **Zweck:** Anspruchsvolle technische Projekte — die "Porsche-Linie": höchste Qualität, höchster Preis, ausgewählte Kunden.
- **Produkte:** Komplexe Web-Apps, individuelle Software, technische Beratung, Architektur-Reviews, anspruchsvolle Integrationen.
- **Einnahmemodelle:** Hochpreisige Festpreisprojekte, Tagessätze, langfristige Entwicklungs-Retainer, Beratungspakete.
- **Benötigte Agenten:** CTO (führend), CPO, QA (verschärft), CFO, Sales, CLO, Audit/Safety.
- **Benötigte Menschen:** **Senior-Entwickler-Freelancer als Kern** (Agenten unterstützen, Menschen verantworten), Gründer als Account-Lead.
- **Risiken:** Überforderung des Agentensystems bei echter Komplexität, Termin-/Budgetüberschreitung, Haftung bei kritischer Software, Abhängigkeit von einzelnen Senior-Freelancern.
- **Qualitätskontrolle:** Doppelte QS (Agent + Senior-Mensch), Code-Reviews durch Menschen verpflichtend, Architektur-Freigabe durch Mensch, Test-Abdeckungspflicht.
- **Skalierungslogik:** Bewusst *nicht* masse-skaliert — wächst über Reputation und Referenzen. Quelle für Premium-Marge und Markenprestige, das auf alle Units abstrahlt.

### 4.F Game / Media / Content Studio  *(Phase 2)*

- **Zweck:** Eigene Medien-/Content-/kleine Spiele-Projekte — Franchise- und Community-Denken (Activision-Logik im Kleinen).
- **Produkte:** Browser-/Mini-Games, interaktive Web-Erlebnisse, Content-Serien, Lernspiele, Media-Formate.
- **Einnahmemodelle:** In-Game-/In-Content-Käufe (fair, ohne ausbeuterische Mechaniken), Werbung, Sponsoring, Lizenzierung, Community-Abos.
- **Benötigte Agenten:** CPO, CTO, Brand, mehrere Content-/Asset-Agenten, Community-/Support-Agent, Analytics, CFO, CLO (Jugendschutz, Urheberrecht).
- **Benötigte Menschen:** Kreative Freelancer (Art, Sound, Game-Design), Gründer (kreative Richtung & Freigabe).
- **Risiken:** Content trifft Geschmack nicht, hohe Floprate, Urheberrechts-/Jugendschutzfragen, Monetarisierung wirkt ausbeuterisch, Community-Moderation.
- **Qualitätskontrolle:** QA-Agent, Community-Beta, Moderationsregeln, CLO-Prüfung (Jugendschutz/Recht), kreative Freigabe durch Mensch.
- **Skalierungslogik:** Wenige Treffer tragen viele Flops (Portfolio-Logik). Erfolgreiche Formate werden zu Franchises. Nutzt Content-Pipelines aus Unit D.

### 4.G Local Operations Network  *(Phase 3–4)*

- **Zweck:** Das skalierte, flächige Netz lokaler Operatoren — das "Händler-/Service-Netzwerk" als eigene Unit, Infrastruktur für Unit C und alle physischen Bedarfe.
- **Produkte:** Standardisierte lokale Präsenz "as a service" — Vor-Ort-Abwicklung, lokale Logistik, regionale Operatoren-Teams.
- **Einnahmemodelle:** Provision je vermittelten Einsatz, regionale Lizenzgebühren, Infrastruktur-Fee von anderen Units.
- **Benötigte Agenten:** Field-Operations, CHRO, COO, QA, Support, CFO, CLO, Safety.
- **Benötigte Menschen:** Regionale Operatoren/Koordinatoren, Fachkräfte-Pools, Gründer/Ops-Leitung.
- **Risiken:** Qualitäts- und Markenkonsistenz über viele Regionen, Arbeitsrecht/Scheinselbstständigkeit, Haftung, Steuerung aus der Distanz, Betrugsrisiko.
- **Qualitätskontrolle:** Einheitliche Operator-Standards, regelmäßige Audits, Bewertungssystem, regionale Mensch-Verantwortliche, Mystery-Checks.
- **Skalierungslogik:** Region für Region als wiederholbares "Playbook". Jede neue Region nutzt dasselbe Onboarding-, Briefing- und Kontrollsystem.

### 4.H Internal Tools & Automation Division  *(Phase 0–1 — intern)*

- **Zweck:** Baut und betreibt "The Company OS" selbst — die Division, die alle anderen Units erst möglich macht. **In Phase 0 ist das faktisch der Gründer + Agenten, die nebenbei am OS arbeiten.**
- **Produkte (intern):** Agent Registry, Workflow Engine, Approval-Dashboard, Audit-Logs, Vorlagen, Memory-System. **Produkte (extern, ab Phase 2):** Das OS als White-Label-Plattform für andere Unternehmer.
- **Einnahmemodelle:** Intern: keine direkten Einnahmen, aber Kostsenkung über alle Units. Extern (später): SaaS-Lizenz, White-Label-Gebühr, Setup-/Beratungs-Fee.
- **Benötigte Agenten:** CTO (führend), CPO, CISO, Audit, QA.
- **Benötigte Menschen:** Gründer (Architektur-Richtung, Priorisierung), später Senior-Dev-Freelancer für Kernkomponenten.
- **Risiken:** Over-Engineering statt Kundenarbeit, das OS bindet zu viel Zeit, Sicherheitslücken im Kern, "Werkzeug-Verliebtheit" auf Kosten von Umsatz.
- **Qualitätskontrolle:** Striktes Priorisieren ("baut diese OS-Funktion gerade Umsatz oder spart sie echt Zeit?"), CISO-Review, QA, kein Feature ohne konkreten Bedarf aus einer anderen Unit.
- **Skalierungslogik:** Das OS wird aus realem Bedarf der Units heraus gebaut (nie spekulativ). Ab Phase 2 wird es so verallgemeinert, dass es als Produkt verkauft werden kann (siehe Kapitel 8.9) — dann wird H zur umsatztragenden Unit.

### 4.X Querschnittsregeln für alle Business Units

- Jede Unit hat **eigenes Budget, eigene KPIs, eigenen Registry-Eintrag** und einen verantwortlichen Lead-Agenten.
- Keine Unit darf eine **rote Linie** umgehen (Zahlungen, Verträge → immer Mensch).
- Eine neue Unit wird erst aktiviert, wenn die **Vorgänger-Unit stabil liefert** und ihre Abhängigkeit (siehe Fahrplan) erfüllt ist.
- Jede Unit speist Lerndaten in das **Data & Memory Layer** — Fehler in einer Unit verbessern alle.
- Eine Unit kann **eingestellt** werden ("Kill"-Kriterium), wenn sie über einen definierten Zeitraum die Mindest-KPIs verfehlt — ohne Drama, mit dokumentierter Lehre.

---

## 5. Agentenarchitektur

Dieses Kapitel beschreibt das technische Rückgrat — "The Company OS". Leitprinzipien:

- **Pragmatischer Stack (vom Architekten gewählt):** **Supabase** (Postgres + Auth + Edge Functions) als Daten-/Logik-Kern, **Cloudflare** (Workers, R2, KV) für günstige Always-on-Dienste und Speicher, **Vercel** für Frontends/Dashboards, **GitHub** als Code- und Audit-Anker, **Notion** als menschenlesbare Wissens-/Vorlagenoberfläche. Begründung: alle haben großzügige Gratis-/Billig-Tarife (passt zu < 5.000 €), sind über die im System verfügbaren MCP-Tools direkt steuerbar und decken zusammen Datenbank, Hosting, Speicher, Edge-Logik und Doku ab, ohne eigene Server.
- **Multi-Provider + lokale Modelle:** Cloud-Modelle (Claude als Primär, weitere als Fallback) für anspruchsvolle Arbeit; **lokale Modelle (Ollama)** für (a) datenschutzsensible Tasks, (b) günstige Routine-Massenarbeit, (c) Fallback bei Cloud-Ausfall. Ein **Model Router** entscheidet pro Task.
- **Alles ist Konfiguration, kein Code-Umbau:** Rollen, Limits, Rechte, Workflows liegen als Daten in der Registry — Organisationsänderungen sind Datenänderungen.
- **Sicher per Default:** Ein Agent kann nur, was ihm explizit erlaubt ist. Im Zweifel: blockieren und eskalieren.

### 5.1 Agent Registry

Das zentrale Verzeichnis aller Agenten — eine Postgres-Tabelle in Supabase. Jeder Agent-Eintrag enthält:

| Feld | Inhalt |
|---|---|
| `agent_id` | eindeutige ID |
| `rolle` | z. B. CFO-Agent, QA-Agent (siehe Kapitel 3) |
| `version` | versioniert — Änderungen sind nachvollziehbar |
| `system_prompt_ref` | Referenz auf die versionierte Rollen-/Verhaltensdefinition |
| `erlaubte_tools` | Liste von Tool-IDs (siehe 5.3) |
| `budget_limit` | autonomes Ausgabenlimit (meist 0 € — siehe 5.14) |
| `risk_ceiling` | max. Risk-Score, den der Agent ohne Eskalation ausführen darf |
| `model_policy` | welche Modelle/Provider erlaubt sind |
| `status` | aktiv / pausiert / quarantäne |
| `owner_human` | verantwortlicher Mensch (Phase 0: immer der Gründer) |

Die Registry ist die "Single Source of Truth" — Task Router, RBAC und Audit lesen alle aus ihr.

### 5.2 Memory System

Vier Gedächtnisarten, getrennt gespeichert:

1. **Kurzzeit-/Arbeitsgedächtnis** — Kontext eines laufenden Tasks (flüchtig, in der Workflow-Instanz).
2. **Projektgedächtnis** — alles zu einem Product Studio: Anforderungen, Entscheidungen, Outputs, Kundenkommunikation (Supabase, pro Projekt).
3. **Organisationsgedächtnis** — firmenweites Wissen: Vorlagen, Standards, gelöste Probleme, Lieferanten-Ratings (Supabase + Notion-Spiegel für Menschen).
4. **Lerngedächtnis** — strukturierte Nachkalkulationen und "Lessons Learned" aus abgeschlossenen Projekten (siehe 5.16, Schritt "Lernen").

**Datenschutz:** PII und Kundendaten werden markiert und bei Verarbeitung bevorzugt an **lokale Modelle** geroutet. Zugriff ist über RBAC eingeschränkt; jeder Lesezugriff auf sensible Daten erzeugt einen Audit-Eintrag. Löschkonzept und Aufbewahrungsfristen nach DSGVO sind Pflichtfelder.

### 5.3 Tool Permission System

Jedes "Tool" (E-Mail senden, GitHub-Push, Rechnung erstellen, Zahlung auslösen, LinkedIn-Nachricht …) ist registriert mit:

- **Tool-ID & Beschreibung**
- **Risikoklasse:** grün (frei) / gelb (mit Limit/Logging) / rot (immer Human-Approval)
- **erlaubte Rollen** (welche Agenten es überhaupt aufrufen dürfen)
- **Parametergrenzen** (z. B. E-Mail nur an verifizierte Domains, Zahlung max. 0 €)

Ein Agent kann ein Tool nur aufrufen, wenn (1) es in seiner Registry-`erlaubte_tools`-Liste steht **und** (2) die Risikoklasse + RBAC + Budgetlimit den konkreten Aufruf erlauben. Rote Tools (Zahlung, Vertragsunterschrift) sind technisch so verdrahtet, dass sie *ohne* signierte Human-Approval gar nicht ausführen.

### 5.4 Task Router

Nimmt eine Aufgabe (vom CEO-Agenten, von einem Workflow, von einem Trigger) und entscheidet:

- **Welcher Agent / welche Rolle** ist zuständig?
- **Welches Modell** (Cloud vs. lokal) — nach Sensibilität, Komplexität, Kosten, Verfügbarkeit?
- **Priorität & Reihenfolge** — Abhängigkeiten beachten.
- **Eskalieren statt routen**, wenn Risk-Score oder Budget die Schwelle reißt.

Implementierung: eine Supabase Edge Function + Warteschlange (Cloudflare Queue/KV). Jede Routing-Entscheidung wird geloggt.

### 5.5 Workflow Engine

Führt mehrstufige Prozesse als definierte Zustandsmaschinen aus (z. B. den kompletten Auftragsdurchlauf aus 5.16). Eigenschaften:

- **Deklarative Workflows** — als Daten/Config, nicht hartkodiert.
- **Jeder Schritt** hat: zuständige Rolle, erlaubte Tools, Erfolgskriterium, Timeout, Eskalationsregel.
- **Approval-Schritte** sind erste-Klasse-Bürger — der Workflow *pausiert* hart, bis ein Mensch freigibt.
- **Wiederaufnahme & Idempotenz** — ein abgebrochener Workflow kann sicher fortgesetzt werden.
- **Zustand** liegt in Supabase; lang laufende Watcher als Cloudflare Workers.

### 5.6 Approval Gates

Die Stellen, an denen ein Mensch entscheidet. Ein Gate definiert:

- **Auslöser** — z. B. "Geldabfluss > 0 €", "Vertrag", "externe Erstkommunikation", "Risk-Score ≥ X", "Produktiv-Deployment".
- **Approver** — Phase 0: immer der Gründer.
- **Entscheidungsvorlage** — der Agent liefert: Was, Warum, Kosten, Risiko, Alternativen, Empfehlung — kompakt, damit der Gründer in Sekunden entscheiden kann.
- **Ergebnis** — signiert (wer, wann, was), unveränderlich im Audit-Log.
- **Verfall** — Gates haben ein Timeout; ohne Freigabe wird *nicht* ausgeführt (Fail-Closed).

**Gebündelte Freigaben:** Routine-Gates werden zu festen Freigabe-Slots gebündelt (z. B. 2×/Tag), damit der Gründer nicht permanent unterbrochen wird. Echte rote Linien und Risiken eskalieren sofort.

### 5.7 Audit Logs

Ein **append-only**, unveränderliches Protokoll jeder relevanten Aktion: welcher Agent, welche Version, welches Tool, welche Eingabe/Ausgabe (sensible Daten referenziert, nicht im Klartext), welche Entscheidung, welcher Mensch hat freigegeben, welcher Risk-Score.

- Speicherung: Supabase (mit Row-Level-Security, kein Update/Delete) + regelmäßiger, schreibgeschützter Export nach Cloudflare R2.
- Zweck: Erklärbarkeit, Rückverfolgbarkeit, Nachweis gegenüber Kunden/Behörden/Versicherung, Grundlage für Audit-Agent und (später) Audit Board.
- **Jede** Agentenentscheidung muss im Log erklärbar sein — das ist eine Leitplanke aus dem Auftrag.

### 5.8 Simulation Layer

Bevor riskante oder teure Aktionen real ausgeführt werden, werden sie *simuliert*:

- **Dry-Run-Modus** — Tools haben einen Simulationspfad ("würde diese E-Mail senden", "würde dieses Budget belasten").
- **Was-wäre-wenn** — der CFO-Agent kann Kalkulationen, der COO-Agent Terminpläne durchrechnen, ohne etwas auszulösen.
- **Pflicht-Simulation** für alles ab Risk-Score-Schwelle, bevor das Approval-Gate dem Menschen vorgelegt wird (der Mensch sieht dann das simulierte Ergebnis).

### 5.9 Digital Twin der Firma

Ein lebendes Datenmodell des Gesamtzustands: alle Studios, Budgets, offene Tasks, Agentenstatus, Pipeline, Liquidität, offene Gates, Risiken. Der Digital Twin ist:

- die **Datengrundlage des Dashboards** (Kapitel 13),
- die **Planungsumgebung** — Szenarien ("Was, wenn wir 5 Projekte parallel annehmen?") werden gegen den Twin gerechnet,
- der **Konsistenzwächter** — Abweichungen zwischen Twin und Realität (z. B. Banksaldo) lösen Alarme aus.

### 5.10 Evaluation System

Misst kontinuierlich die Qualität der Agentenarbeit:

- **Output-Bewertung** — QA-Agent + Stichproben durch den Gründer, strukturiert in Scorecards.
- **Regressionstests** — Standardaufgaben werden regelmäßig durchlaufen; sinkt die Qualität nach einem Modell-/Prompt-Wechsel, schlägt das System an.
- **Agenten-Scorecards** — pro Rolle: Erfolgsquote, Nacharbeitsquote, Kosten, Eskalationsquote.
- **Modellvergleich** — welcher Provider/welches lokale Modell liefert pro Task-Typ das beste Preis-Leistungs-Verhältnis → speist den Model Router.

### 5.11 Incident Management

Wenn etwas schiefgeht (Agent-Fehlentscheidung, Tool-Fehler, Sicherheitsvorfall, Kundenbeschwerde, Lieferausfall):

1. **Erkennen** — durch Safety-/Audit-/CISO-Agent oder Mensch.
2. **Klassifizieren** — Schweregrad 1 (gering) bis 4 (kritisch).
3. **Eindämmen** — ggf. Agent pausieren, Workflow stoppen, Quarantäne, Not-Aus.
4. **Beheben** — zuständige Rolle + ggf. Mensch.
5. **Aufarbeiten** — Post-Mortem, Eintrag ins Lerngedächtnis, Regel-/Limit-Anpassung.

Ab Schweregrad 3 sofortige Eskalation an den Gründer. DSGVO-Datenpannen: 72-Stunden-Meldeprozess.

### 5.12 Secrets Management

- Zugangsdaten/API-Keys liegen **niemals** in Prompts, Code oder Logs — nur als **Referenzen**.
- Speicherung in einem dedizierten Secret Store (Supabase Vault / Cloudflare-Secrets), Zugriff nur über vermittelte, geloggte Tool-Aufrufe.
- Agenten sehen Secrets nie im Klartext; sie rufen ein Tool auf, das Tool nutzt das Secret serverseitig.
- Rotation, Ablaufdaten, Least-Privilege; CISO-Agent überwacht.

### 5.13 Role-Based Access Control (RBAC)

Jede Rolle hat ein minimales Rechteprofil (Least Privilege). RBAC entscheidet bei jedem Zugriff: Darf *diese Rolle* *dieses Tool* mit *diesen Parametern* auf *diesen Daten* — jetzt? Umsetzung über Supabase Row-Level-Security + Tool-Permission-System (5.3). Rechteänderungen sind selbst auditiert und teils approval-pflichtig (CISO-Vorschlag → Gründer-Freigabe).

### 5.14 Budget Limits

- **Standard-Budgetlimit jedes Agenten: 0 €** — kein Agent bewegt Geld ohne Mensch (rote Linie).
- **Optional konfigurierbares Mikro-Limit** (z. B. ≤ 20–50 € für Procurement, falls der Gründer es freischaltet) — selbst dann mit Logging und Tageskappung.
- **Budget je Studio/Unit** — der CFO-Agent überwacht Verbrauch gegen Plan, warnt bei 70 %/90 %, blockiert bei 100 %.
- **Cloud-Modell-Kosten** sind ebenfalls budgetiert — reißt ein Task das Kostenbudget, routet der Router auf lokale Modelle oder eskaliert.

### 5.15 Risk Scoring

Jede geplante Aktion bekommt vor Ausführung einen **Risk-Score** aus Faktoren wie: Geldhöhe, Außenwirkung, Rechtsrelevanz, Reversibilität, Datensensibilität, Neuheit/Unsicherheit, betroffene Dritte.

| Score | Bedeutung | Konsequenz |
|---|---|---|
| niedrig | Routine, reversibel, intern | Agent führt autonom aus, Logging |
| mittel | spürbare Wirkung / Außenkontakt | Simulation + gebündelte Human-Approval |
| hoch | Geld, Vertrag, Recht, schwer reversibel | sofortiges Approval-Gate, blockierend |
| kritisch | rote Linie / Sicherheitsrisiko | Safety-Veto, Not-Aus möglich, nur Mensch |

Der Safety-Agent besitzt das Scoring-Modell; der Audit-Agent prüft, ob Scores konsistent vergeben werden.

### 5.16 Auftragsdurchlauf End-to-End

Beispiel: **Ein Startup-Gründer will eine Landingpage.** So läuft der Auftrag durch das System (Workflow in der Workflow Engine):

| # | Schritt | Wer | Was passiert | Human-Approval? |
|---|---|---|---|---|
| 1 | **Eingang** | Sales-Agent | Anfrage trifft ein (LinkedIn/Formular/E-Mail), wird als neues Product Studio in der Registry angelegt. | nein |
| 2 | **Analyse** | CPO- + CTO-Agent | Bedarf klären, Scope umreißen, Machbarkeit + Aufwand schätzen, offene Fragen sammeln. | nein |
| 3 | **Angebot** | CFO- + Sales-Agent | Kalkulation (Stückkosten + Marge), Angebotsentwurf mit Fixpreis (750–1.500 €), Scope, Akzeptanzkriterien, Termin. | **JA** — verbindliches Angebot = rote Linie. Gründer prüft & gibt frei. |
| 4 | **Freigabe (Kunde)** | Sales-Agent | Kunde nimmt an; CLO-Agent prüft Vertragsbasis, Gründer schließt verbindlich ab. | **JA** — Vertragsabschluss = rote Linie. |
| 5 | **Planung** | COO- + CPO-Agent | Workflow instanziiert, Aufgaben zerlegt, Bausteine aus Shared Services zugewiesen, ggf. Freelancer-Bedarf markiert. | nur falls Freelancer beauftragt wird |
| 6 | **Ausführung** | CTO-Agent (+ Content-/Design-Agenten) | Landingpage wird gebaut — bevorzugt aus Standardbausteinen; Arbeit in Staging-Umgebung. | nein (Bau in Staging) |
| 7 | **Qualitätssicherung** | QA-Agent | Prüfung gegen Akzeptanzkriterien, Tests, Linting, Marken-/Tonalitätscheck. QA-Agent hat Veto. | Gründer-Review vor Auslieferung |
| 8 | **Auslieferung / Deployment** | CTO-Agent | Nach Gründer-Review: Live-Schaltung. Kunde bekommt Vorschau-Link zur Abnahme. | **JA** — Produktiv-Deployment-Gate. |
| 9 | **Rechnung** | CFO-Agent | Rechnung wird im Buchhaltungstool *vorbereitet*. | **JA** — Rechnungsversand = Geldbezug, Mensch gibt frei. |
| 10 | **Support** | Support-Agent | Nachfragen, kleine Korrekturen, Self-Service-Hilfe; Wartungs-Abo wird angeboten. | bei Kulanz/Eskalation |
| 11 | **Nachkalkulation** | CFO- + COO-Agent | Plan vs. Ist: echte Stückkosten, Modell-/Toolkosten, Zeitaufwand, Deckungsbeitrag. | nein |
| 12 | **Lernen** | Audit-Agent + Evaluation | "Lessons Learned" ins Lerngedächtnis: Welche Bausteine wiederverwendbar? Wo Reibung? Welcher Schätzfehler? Vorlagenbibliothek wird aktualisiert. | nein |

**Kernidee:** Zwischen den Schritten 6 und 12 wird das System mit *jedem* Auftrag besser kalibriert — Schritt 12 füttert Schritt 2 und 3 des *nächsten* Projekts. Die roten Linien (Geld in Schritt 3/9, Vertrag in Schritt 4, Deployment in Schritt 8) sind die festen menschlichen Kontrollpunkte; alles dazwischen läuft so autonom wie möglich.

---

## 6. Zugriff auf die reale Welt

Die Firma darf reale Wirkung nur über **definierte, begrenzte, protokollierte Schnittstellen** entfalten. Jedes Interface hat eine Risikoklasse (grün/gelb/rot, siehe 5.3) und einen klaren Autonomie-Status.

### 6.1 Interface-Katalog

| Interface | Risikoklasse | Zweck | Phase-0-Status |
|---|---|---|---|
| **E-Mail** | gelb | Kunden-/Lieferanten-/Support-Kommunikation | aktiv, mit Regeln (6.2) |
| **Telefon (über menschliche Operatoren)** | gelb/rot | Gespräche, die ein Mensch führt; Agent liefert Skript/Recherche | inaktiv in Phase 0 |
| **Kalender** | grün | Termine, Fristen, Slots planen | aktiv, weitgehend autonom |
| **Buchhaltung (lexoffice/sevDesk)** | gelb | Belege/Rechnungen *vorbereiten*, Daten erfassen | aktiv, nur Entwürfe |
| **Banking** | **rot** | Kontostand/Umsätze lesen; Zahlungen NUR mit Freigabe | aktiv: nur lesend + Freigabe-Workflow |
| **Einkauf** | gelb/rot | Tools/Lizenzen/Material beschaffen | aktiv: nur Vorschläge |
| **Versand / Logistik** | gelb | Sendungen erstellen, Tracking | inaktiv in Phase 0 |
| **CRM** | grün/gelb | Kunden-/Leaddaten, Pipeline | aktiv |
| **ERP / Warenwirtschaft** | gelb | Bestände, Aufträge (für spätere Units) | inaktiv in Phase 0 |
| **Lager** | gelb | Bestandsführung | inaktiv in Phase 0 |
| **Werkstätten / lokale Dienstleister** | rot | physische Leistungserbringung | inaktiv in Phase 0 |
| **Freelancer-Plattformen** | gelb/rot | Menschen recherchieren/anfragen; Beauftragung = rot | aktiv: nur recherchieren/anfragen |
| **Behördenkommunikation** | **rot** | Ämter, Finanzamt, Registergericht | nur mit Human-Approval, immer |
| **Verträge / rechtsverbindliche Erklärungen** | **rot** | Angebote, AGB, Verträge, Kündigungen | nur mit Human-Approval, immer |
| **Physische Einsätze** | **rot** | alles vor Ort, alles mit Sicherheitsbezug | nur über geprüfte Menschen |
| **GitHub** | gelb | Code, Repos, Audit-Anker | aktiv |
| **Hosting (Vercel/Cloudflare)** | gelb/rot | Staging frei; Produktiv-Deploy = Gate | aktiv mit Deploy-Gate |
| **LinkedIn / Social** | gelb | Akquise im Rahmen der Plattformregeln | aktiv, mit UWG-/Plattform-Regeln |
| **IoT-Gateways** | rot | Steuerung realer Geräte | inaktiv in Phase 0 |
| **Dokumentenmanagement** | grün/gelb | Verträge, Belege, Projektdateien ablegen | aktiv |

### 6.2 Autonomiematrix: autonom / nur Vorschlag / immer Mensch

| Was Agenten **autonom** dürfen | Was Agenten **nur vorschlagen** dürfen | Was **immer ein Mensch** entscheidet |
|---|---|---|
| Interne Recherche, Analyse, Planung | Verbindliche Angebote & Preise | **Jede Zahlung / jeder Geldabfluss** (rote Linie) |
| Entwürfe aller Art (Code in Staging, Texte, Designs, Kalkulationen) | Rechnungsversand | **Vertragsabschluss / Unterschrift** (rote Linie) |
| Kalendereinträge, interne Terminplanung | Beauftragung von Freelancern/Dienstleistern | Kündigungen, arbeitsrechtliche Schritte |
| CRM-Pflege, Lead-Recherche, Pipeline-Updates | Einkäufe über dem Mikro-Limit | Behördenkommunikation |
| Standard-Supportantworten (bekannte Fälle) | Produktiv-Deployments | Kulanz, Erstattungen, Vertragsänderungen |
| Ticket-Triage, interne Reports | Akquise-Kampagnen / Erstkontakt-Wellen | Aufhebung eines Safety-Vetos |
| Buchhaltungs-Entwürfe, Belegerfassung | Neue Lieferanten/Tools | Meldepflichtige Datenpannen, schwere Incidents |
| Simulationen, Was-wäre-wenn-Rechnungen | Strategische Scope-/Produktentscheidungen | Physische/sicherheitsrelevante Einsätze |
| Lesen von Banking-/Kontodaten | Reaktionen auf Beschwerden mit Eskalationspotenzial | Neue Business Units aktivieren |

**Hinweis zur "aggressiven" Autonomie:** Der Gründer hat aggressive Autonomie gewählt — das wirkt in der **linken Spalte** (Routine läuft maximal selbstständig) und teils in der mittleren (Vorschläge werden gebündelt, nicht einzeln nachgefragt). Die **rechte Spalte** bleibt unangetastet; Zahlungen und Verträge sind harte rote Linien. Erstkontakt-Kommunikation (E-Mail/LinkedIn) hat der Gründer *nicht* als rote Linie markiert — der Blueprint setzt hier dennoch ein **gelbes Gate**: Erstkontakt läuft gegen geprüfte Vorlagen + UWG-Regelwerk und in gebündelter Freigabe, weil ein Fehler hier (Spam-Vorwurf, Abmahnung) teuer und schwer reversibel ist. Dieses Gate kann der Gründer bewusst lockern.

### 6.3 Freigabegrenzen

| Bereich | Autonom | Gebündelte Freigabe | Sofort-Gate (blockierend) |
|---|---|---|---|
| **Banking / Zahlungen** | 0 € (nur lesen) | — | **jeder Betrag > 0 €** |
| **Einkauf / Tools** | optional ≤ 20–50 €, Tageskappung, falls freigeschaltet | bis ~250 € | > 250 € oder Abo/Laufzeitvertrag |
| **Vertragswert (Kundenangebot)** | — | — | **jedes verbindliche Angebot** |
| **Freelancer-Beauftragung** | — | bis definiertes Projektbudget | über Budget oder neuer Partner |
| **Cloud-Modell-Kosten** | innerhalb Task-Budget | Tagesbudget-Schwelle | Monatsbudget gerissen |
| **Produktiv-Deployment** | — | Standard-Landingpage nach QA+Review | kritische Systeme, Kundenproduktiv-Infra |

Alle Grenzen liegen als Config in der Registry und können vom Gründer angepasst werden — jede Änderung ist auditiert.

### 6.4 Not-Aus-Mechanismen

Vier Stufen, vom Feinen zum Groben:

1. **Circuit Breaker (automatisch, fein):** Reißt ein Agent wiederholt Fehler, Timeouts oder Risk-Limits, wird *seine* Aktion automatisch gestoppt und eskaliert — der Rest läuft weiter.
2. **Agent-Quarantäne (gezielt):** Ein einzelner Agent wird auf `quarantäne` gesetzt (Registry-Status) — er kann nichts mehr ausführen, nur noch der Mensch oder ein Audit kann ihn reaktivieren. Auslöser: Anomalie, Safety-Veto-Häufung, Verdacht auf Fehlkonfiguration.
3. **Workflow-Stopp (bereichsweise):** Ein ganzer Auftrags-Workflow oder eine Unit wird pausiert — laufende Schritte werden sauber eingefroren, kein Datenverlust.
4. **Globaler Not-Aus / Kill Switch (grob):** Ein einziger Schalter (im Dashboard + als CLI-Befehl + als physisch einfacher Weg) friert **alle** Agentenaktivität ein. Lesende Funktionen und das Dashboard bleiben verfügbar, aber kein Agent ruft mehr ein Tool auf. Nur der Gründer kann wieder freigeben.

**Eigenschaften aller Stufen:** Fail-Closed (im Zweifel stoppen, nicht weiterlaufen), jede Auslösung wird geloggt, Wiederanlauf erfordert menschliche Freigabe + kurzes Post-Mortem ab Stufe 2. Der Kill Switch wird regelmäßig getestet (er nützt nur, wenn er nachweislich funktioniert).

---

## 7. Human Workforce Modell

Menschen sind bei "The Company" keine "Lückenfüller", sondern die **Träger von Haftung, Kreativität, physischer Arbeit und gesetzlich vorgeschriebener Verantwortung**. Der CHRO-Agent koordiniert sie — beauftragt, bezahlt und kündigt aber nie autonom (rote Linie / Arbeitsrecht).

**Grundprinzip pro Gruppe** (gilt für 7.1–7.11): _Wann gebraucht · Wie gebrieft · Qualitätsprüfung · Bezahlung · Feedback-Speicherung · Missbrauchsschutz._

### 7.1 Festangestellte
- **Wann:** Erst ab Phase 2–3, wenn wiederkehrende Kernarbeit ein Dauer-Commitment rechtfertigt. In Phase 0/1 bewusst **keine** Festanstellung (Fixkosten-Risiko bei < 5.000 €).
- **Briefing:** Vollständiges Onboarding ins OS, Rollenbeschreibung, Zugriff per RBAC.
- **Qualität:** Reguläre Mitarbeitergespräche (Mensch), KPI-Bezug, Probezeit.
- **Bezahlung:** Gehalt über Lohnabrechnung (Steuerberater/Lohnbüro) — voll arbeitsrechtskonform.
- **Feedback:** Personalakte (DSGVO-konform, getrennt vom operativen Memory).
- **Missbrauchsschutz:** Least-Privilege-Zugänge, Vier-Augen bei kritischen Aktionen, Offboarding-Prozess.

### 7.2 Freelancer
- **Wann:** Der Standardfall in Phase 0/1 — projektbezogen, wenn Agenten an Grenzen stoßen (Premium-Design, Senior-Code-Review, Spezialthemen).
- **Briefing:** Agent erstellt ein **standardisiertes Briefing-Paket** (Scope, Akzeptanzkriterien, Assets, Deadline, Kontext) — Mensch gibt es vor Versand frei.
- **Qualität:** Probeauftrag vor erster echter Beauftragung; QA-Agent + Gründer prüfen Ergebnis gegen Akzeptanzkriterien.
- **Bezahlung:** Werkvertrag/Dienstvertrag, Rechnung, **Zahlung nur mit Human-Approval**. Auf Scheinselbstständigkeit achten (keine Weisungsabhängigkeit, eigene Betriebsmittel, mehrere Auftraggeber).
- **Feedback:** Bewertung im Lieferantenregister (Qualität, Termintreue, Kommunikation).
- **Missbrauchsschutz:** Kein Vollzugriff aufs OS, nur projektbezogene Asset-Übergabe; NDA bei sensiblen Projekten.

### 7.3 Lokale Operatoren
- **Wann:** Ab Phase 3 (Units C/G) — Menschen, die regional vor Ort koordinieren oder ausführen.
- **Briefing:** Field-Operations-Agent erstellt Einsatz-Briefing; lokaler Mensch bestätigt Machbarkeit.
- **Qualität:** Onboarding mit Nachweisen, Probeeinsätze, Bewertungssystem, Stichproben/Mystery-Checks.
- **Bezahlung:** Vertraglich geregelt, leistungsbezogen, mit Freigabe.
- **Feedback:** Operator-Register mit Verlaufshistorie.
- **Missbrauchsschutz:** Identitätsprüfung, Versicherungsnachweis, Eskalations-Hotline mit Mensch, regionale Mensch-Verantwortliche.

### 7.4 Fachkräfte
- **Wann:** Spezialwissen, das weder Agent noch Generalist-Freelancer abdeckt (z. B. Branchenexperten, Ingenieure).
- **Briefing:** Präzises fachliches Briefing, oft mit direkter Gründer-Beteiligung.
- **Qualität:** Referenzprüfung, fachliche Abnahme durch Mensch.
- **Bezahlung:** Honorar/Tagessatz, mit Freigabe.
- **Feedback:** Register, mit Fachgebiets-Tags.
- **Missbrauchsschutz:** Klare Auftragsgrenzen, NDA, kein OS-Zugang.

### 7.5 Werkstätten
- **Wann:** Unit C — physische Fertigung/Reparatur/Montage.
- **Briefing:** Standardisiertes Auftragsdokument, Spezifikation, Fotos.
- **Qualität:** Onboarding-Audit, Versicherungs-/Gewerbenachweis, Abnahmeprotokolle, Bewertungssystem.
- **Bezahlung:** Werkvertrag, nach Abnahme, mit Freigabe.
- **Feedback:** Lieferantenregister mit Gewerk-Tags.
- **Missbrauchsschutz:** Haftungs-/Versicherungsklauseln, Probeaufträge, Eskalationsweg.

### 7.6 Fahrer / Logistik
- **Wann:** Versand/Transport ab Unit C/G.
- **Briefing:** Routen-/Sendungsbriefing über Field-Operations-Agent.
- **Qualität:** Tracking, Zustellnachweis, Bewertungssystem.
- **Bezahlung:** Pro Auftrag/Strecke, mit Freigabe.
- **Feedback:** Register.
- **Missbrauchsschutz:** Identitäts-/Führerschein-/Versicherungsprüfung, Sendungsversicherung.

### 7.7 Monteure
- **Wann:** Vor-Ort-Installation/Montage (Unit C).
- **Briefing:** Detailliertes Montagebriefing + Sicherheitshinweise; Mensch bestätigt.
- **Qualität:** Qualifikationsnachweis, Abnahmeprotokoll mit Fotos, Kundenbestätigung.
- **Bezahlung:** Nach Abnahme, mit Freigabe.
- **Feedback:** Operator-/Lieferantenregister.
- **Missbrauchsschutz:** **Sicherheits-Gate** — riskante physische Arbeit immer mit Mensch-Freigabe, Versicherungspflicht, Safety-Agent prüft Einsatzrisiko.

### 7.8 Designer
- **Wann:** Phase 0 schon relevant — wenn der Premium-Anspruch (Marke!) über das hinausgeht, was Agenten visuell liefern.
- **Briefing:** Brand-Agent liefert Brand-Kit + Design-Briefing; Gründer gibt frei.
- **Qualität:** Portfolio-Prüfung, Probeauftrag, Brand-Konsistenz-Check durch Brand-Agent + Gründer.
- **Bezahlung:** Pro Projekt/Asset, mit Freigabe.
- **Feedback:** Register mit Stil-Tags.
- **Missbrauchsschutz:** Nutzungsrechte/Urheberrecht vertraglich klären, NDA, Asset-Übergabe kontrolliert.

### 7.9 Entwickler
- **Wann:** Senior-Review größerer Projekte (Unit A/E) und für Komplexität jenseits der Agenten-Zuverlässigkeit.
- **Briefing:** CTO-Agent liefert technisches Briefing, Repo-Zugang (scoped), Architektur-Kontext.
- **Qualität:** Code-Review-Standards, Tests, QA-Agent + menschlicher Senior-Review.
- **Bezahlung:** Tagessatz/Projekt, mit Freigabe.
- **Feedback:** Register mit Tech-Stack-Tags.
- **Missbrauchsschutz:** Scoped Repo-Zugriff, keine Produktiv-Secrets, NDA, Offboarding entzieht Zugänge sofort.

### 7.10 Rechtsanwälte / Steuerberater
- **Wann:** **Ab Tag 1** — Pflichtbereich Mensch. Steuerberater für Jahresabschluss/steuerliche Fragen, Anwalt für Verträge/AGB/echte Rechtsrisiken.
- **Briefing:** CLO-/CFO-Agent bereitet Unterlagen strukturiert auf; Mensch entscheidet.
- **Qualität:** Berufsträger — Qualität durch Zulassung/Haftung gesichert; Gründer bewertet Zusammenarbeit.
- **Bezahlung:** Nach Honorarordnung/Vereinbarung, mit Freigabe.
- **Feedback:** Register.
- **Missbrauchsschutz:** Mandatsvertrag, klare Beauftragung — hier schützt die Berufsordnung.

### 7.11 Qualitätsprüfer
- **Wann:** Wenn der QA-Agent + Gründer-Review nicht ausreichen (kritische/komplexe Lieferungen, Unit E).
- **Briefing:** QA-Agent liefert Prüfkriterien und Testfälle.
- **Qualität:** Selbst Fachkräfte — geprüft über Referenzen und Stichprobenvergleich mit QA-Agent-Ergebnis.
- **Bezahlung:** Pro Prüfauftrag, mit Freigabe.
- **Feedback:** Register.
- **Missbrauchsschutz:** Unabhängigkeit von der ausführenden Stelle (keine Selbstprüfung), NDA.

### 7.12 Onboarding-, Vergütungs- und Bewertungssystem

**Onboarding-Trichter (für alle externen Menschen):**
1. **Bedarf** — Agent meldet konkreten Bedarf mit Anforderungsprofil.
2. **Recherche** — CHRO-Agent findet Kandidaten (Plattformen, Netzwerk).
3. **Prüfung** — Nachweise, Referenzen, ggf. Versicherung/Gewerbe; CLO-Agent prüft Vertragsform (inkl. Scheinselbstständigkeits-Check).
4. **Probeauftrag** — kleiner, bezahlter Testauftrag vor erster echter Beauftragung.
5. **Freigabe** — **Mensch** entscheidet über Aufnahme ins Netzwerk.
6. **Registereintrag** — Aufnahme ins Lieferanten-/Operator-Register.

**Vergütungsprozess:** Leistung → Abnahme (QA-Agent/Gründer) → Rechnung/Abrechnung wird vom CFO-Agent *vorbereitet* → **Human-Approval** → Zahlung. Keine Ausnahme — Bezahlung ist rote Linie.

**Bewertungssystem:** Nach jedem Auftrag bewertet das System (und der Gründer) entlang fixer Achsen — **Qualität, Termintreue, Kommunikation, Preis-Leistung, Wiederbeauftragung ja/nein**. Bewertungen sind im Register gespeichert und fließen in die Kandidatenauswahl beim nächsten Bedarf ein. Gute Partner werden bevorzugt und gebunden (Lieferketten-Logik aus Anhang 0).

**Missbrauchsschutz – systemweit:**
- Least-Privilege-Zugänge, scoped pro Projekt; sofortiger Entzug beim Offboarding.
- Vier-Augen bei kritischen Schritten; keine Selbstprüfung.
- NDA/Verträge je nach Sensibilität; Urheber-/Nutzungsrechte immer geklärt.
- Auffälligkeiten (Qualitätseinbruch, Fristverstöße, Beschwerden) erzeugen Register-Flags und können zur Sperre führen — Entscheidung beim Menschen.
- Schutz **der Menschen**: faire Briefings, faire Bezahlung, klare Scopes, kein Crunch — der Kulturwert "respektvolle Zusammenarbeit" gilt auch für Externe (siehe Kapitel 11).

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
