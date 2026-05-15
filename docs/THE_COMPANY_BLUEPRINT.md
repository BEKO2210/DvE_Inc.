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

Zehn Einnahmequellen, gestaffelt nach Reife. **In Phase 0 trägt 8.2 (Projektgeschäft) praktisch den gesamten Umsatz** — der Rest wird bewusst erst später aktiviert, damit sich der Solo-Founder nicht verzettelt.

### 8.1 SaaS-Abos
- **Was:** Wiederkehrende Gebühr für eigene digitale Produkte (Unit B) und später das OS (Unit H).
- **Wann aktiv:** Phase 1–2.
- **Geschwindigkeit:** langsam aufzubauen, dann stabil und planbar.
- **Marge:** hoch (geringe Grenzkosten), aber Betriebs-/Supportlast.

### 8.2 Projektgeschäft  *(Phase 0 — Kern)*
- **Was:** Fixpreis-Aufträge des AI Software Studios — Einstieg "Landingpage in 48 h" (750–1.500 €), dann größere Websites/MVPs/Tools.
- **Geschwindigkeit:** **schnellste Einnahmequelle** — Cash kommt mit jedem Auftrag.
- **Marge:** anfangs mittel (viel Hand-/Prüfarbeit), steigt mit dem Baustein-Wiederverwendungsgrad deutlich.
- **Schwäche:** nicht wiederkehrend — muss durch 8.6 (Wartung) ergänzt werden.

### 8.3 Agent-as-a-Service
- **Was:** Einzelne Agenten-Fähigkeiten als abrufbarer Dienst (z. B. "Akquise-Agent für deinen Vertrieb", "QA-Agent für dein Repo").
- **Wann aktiv:** Phase 2.
- **Geschwindigkeit:** mittel; braucht stabile, vorzeigbare Agenten.
- **Marge:** hoch, gut skalierbar — aber Support- und Erwartungsmanagement nötig.

### 8.4 Managed Operations
- **Was:** Die Firma betreibt einen ganzen Funktionsbereich für einen Kunden laufend (z. B. komplettes Web-/Marketing-Ops eines Startups).
- **Wann aktiv:** Phase 2–3.
- **Geschwindigkeit:** langsam (Vertrauen nötig), dann sehr stabil und hochwertig.
- **Marge:** hoch, lange Kundenbindung; Risiko: operative Abhängigkeit, Haftung.

### 8.5 Marketplace-Provision
- **Was:** Provision aus der Vermittlung physischer/digitaler Leistungen (Units C/G).
- **Wann aktiv:** Phase 3.
- **Geschwindigkeit:** langsam (Netz muss erst stehen).
- **Marge:** mittel; skaliert mit dem Netz, aber Plattformhaftung und Qualitätssteuerung sind anspruchsvoll.

### 8.6 Premium-Support / Wartung
- **Was:** Monatliche Wartungs-/Update-/Hosting-Retainer nach Projektabschluss (After-Sales-Logik aus Anhang 0).
- **Wann aktiv:** **schon Phase 0** — direkt nach dem ersten ausgelieferten Projekt anbietbar.
- **Geschwindigkeit:** schnell *nach* dem ersten Projekt; wichtigste Quelle wiederkehrender Einnahmen früh.
- **Marge:** sehr hoch (wenig Aufwand pro Monat), glättet den Cashflow.

### 8.7 Enterprise-Lizenzen
- **Was:** Größere Firmen lizenzieren Produkte/das OS mit eigenen Konditionen, SLAs, Datenschutz-Zusatz.
- **Wann aktiv:** Phase 3–4.
- **Geschwindigkeit:** langsam (lange Sales-Zyklen).
- **Marge:** sehr hoch, große Tickets — aber Compliance-/Vertrags-/Supportaufwand erheblich.

### 8.8 Daten-/Analyseprodukte (nur anonymisiert, rechtlich sauber)
- **Was:** Aggregierte, **anonymisierte** Branchen-/Benchmark-Insights aus der eigenen Projekterfahrung — niemals Kundendaten, niemals personenbezogen.
- **Wann aktiv:** Phase 3–4, und nur nach klarer Rechtsprüfung (CLO-Agent + Anwalt).
- **Geschwindigkeit:** langsam.
- **Marge:** hoch — aber **Reputations- und Rechtsrisiko**, deshalb strenge Leitplanken und im Zweifel: lieber nicht.

### 8.9 White-Label-Agentenfirma
- **Was:** "The Company OS" als Plattform, mit der andere Unternehmer ihre eigene AI-native Firma betreiben — gebrandet auf sich selbst.
- **Wann aktiv:** Phase 2 vorbereiten, Phase 3–4 skalieren. **Von Anfang an mitgedacht** (Gründer-Entscheidung): jede OS-Komponente wird so gebaut, dass sie später mandantenfähig und produktisierbar ist.
- **Geschwindigkeit:** langsam, aber höchstes Hebelpotenzial.
- **Marge:** sehr hoch; das ist der strategische Endzustand der Holding.

### 8.10 Beteiligungen an automatisiert aufgebauten Projekten
- **Was:** Statt nur Dienstleistung — die Firma baut Projekte mit auf und hält Anteile / Umsatzbeteiligung ("Venture-Studio-Logik").
- **Wann aktiv:** Phase 3–4.
- **Geschwindigkeit:** sehr langsam, hohes Risiko, illiquide.
- **Marge:** potenziell extrem hoch, aber spekulativ — nur mit Überschüssen, nie mit Betriebskapital.

### 8.11 Bewertungsmatrix aller Einnahmequellen

| # | Quelle | Schnelle Einnahmen | Langfristige Einnahmen | Kapitalbedarf | Marge | Skalierbarkeit | Hauptrisiko | Phase |
|---|---|---|---|---|---|---|---|---|
| 8.2 | Projektgeschäft | ●●● | ●○○ | sehr niedrig | mittel→hoch | mittel | nicht wiederkehrend | **0** |
| 8.6 | Premium-Support/Wartung | ●●○ | ●●● | sehr niedrig | sehr hoch | hoch | Kunde kündigt Abo | **0** |
| 8.1 | SaaS-Abos | ●○○ | ●●● | niedrig | hoch | sehr hoch | kein Product-Market-Fit | 1–2 |
| 8.3 | Agent-as-a-Service | ●○○ | ●●○ | niedrig | hoch | hoch | Erwartung > Realität | 2 |
| 8.4 | Managed Operations | ○○○ | ●●● | niedrig | hoch | mittel | operative Abhängigkeit | 2–3 |
| 8.9 | White-Label-OS | ○○○ | ●●● | mittel | sehr hoch | sehr hoch | Komplexität, Wettbewerb | 2→3–4 |
| 8.5 | Marketplace-Provision | ○○○ | ●●○ | mittel | mittel | hoch | Plattformhaftung | 3 |
| 8.7 | Enterprise-Lizenzen | ○○○ | ●●● | mittel | sehr hoch | mittel | lange Zyklen, Compliance | 3–4 |
| 8.8 | Daten-/Analyseprodukte | ○○○ | ●●○ | niedrig | hoch | hoch | **Recht & Reputation** | 3–4 |
| 8.10 | Beteiligungen | ○○○ | ●●● (spekulativ) | hoch | sehr hoch | niedrig | Totalverlust | 3–4 |

**Strategische Lesart:** In Phase 0 gibt es genau zwei "An"-Schalter: **Projektgeschäft (8.2)** für schnellen Cash und **Wartung (8.6)** für die ersten wiederkehrenden Einnahmen. Alles andere ist definiert, aber bewusst aus — Fokus schlägt Streuung, besonders beim Solo-Founder mit < 5.000 €. Der langfristige Wert der Holding liegt in 8.9 (White-Label-OS), deshalb wird das OS von Tag 1 produktisierbar gebaut, aber erst spät verkauft.

---

## 9. Finanzmodell

> **Wichtiger Hinweis:** Alle Zahlen sind **Modellannahmen für die Planung**, keine Prognosen und keine Garantie. Sie dienen dazu, Größenordnungen, Reihenfolgen und Risiken sichtbar zu machen. Reale Zahlen weichen ab — das Modell wird mit echten Daten aus der Nachkalkulation (Kapitel 5.16) laufend korrigiert.

### 9.0 Phase 0 — Solo-Founder mit AI-Agenten

- **Team:** 1 Mensch (Gründer als Koordinator, ~30–40 h/Woche) + Agentensystem. Externe nur punktuell (Steuerberater ab Tag 1; 0–2 Freelancer auf Abruf).
- **Kosten (monatlich, Modellannahme):**
  | Posten | ca. |
  |---|---|
  | Cloud-Modelle (API, Multi-Provider) | 50–200 € |
  | Infrastruktur (Supabase/Cloudflare/Vercel — überwiegend Gratis-Tarife) | 0–30 € |
  | Buchhaltungstool | 10–20 € |
  | Domains/Hosting/diverse Tools | 20–50 € |
  | LinkedIn (ggf. Premium) | 0–60 € |
  | Steuerberater (anteilig, v. a. Jahresabschluss) | 50–150 € |
  | Rücklage Recht/Versicherung | 50–100 € |
  | **Summe** | **~230–610 €/Monat** |
  - **Einmalig:** UG-Gründung (Notar, Regist, Stammkapital ab 1 €) — realistisch 300–800 € Setup. Lokale Hardware für Ollama: optional, nur falls vorhanden/sinnvoll.
- **Umsatzquellen:** 8.2 Projektgeschäft ("Landingpage in 48 h", 750–1.500 €) + 8.6 Wartung (ab erstem Projekt).
- **Kritische KPIs:** erster zahlender Kunde (Tag X), Deckungsbeitrag pro Projekt, Liquiditätsreichweite (Monate), Anzahl ausgelieferter Projekte, Wiederbeauftragungs-/Wartungsquote.
- **Risiken:** kein Vertrieb (Akquise zündet nicht), Qualitätsschwankung, Gründer ist Engpass, UWG-Fehler, Zeit verzettelt sich im OS-Bau statt in Umsatz.
- **Infrastruktur:** OS-Minimalkern (Registry, ein Workflow, Approval-Dashboard, Audit-Log), E-Mail, Kalender, GitHub, Hosting, CRM-Light, Buchhaltungstool, LinkedIn.
- **Meilensteine:** UG gegründet · OS-Minimalkern läuft · erstes Angebot raus · **erster zahlender Kunde** · erstes Wartungs-Abo · 3–5 ausgelieferte Projekte mit Nachkalkulation.

### 9.1 Phase 1 — 3–5 Menschen + Agentensystem

- **Team:** Gründer + 2–4 Menschen (Mix aus 1–2 Festen/Kern-Freelancern: z. B. Senior-Dev, Designer, ggf. Vertriebs-/Ops-Unterstützung).
- **Kosten (monatlich, Modellannahme):** ~4.000–12.000 € — dominiert von Personal/Honoraren; Tool-/Modellkosten steigen moderat auf 300–800 €.
- **Umsatzquellen:** 8.2 + 8.6 skaliert; Start von 8.1 (erste SaaS-/Produkt-Experimente) und Unit D (Marketing-Retainer).
- **Kritische KPIs:** monatlich wiederkehrender Umsatz (MRR aus Wartung/Retainern), Deckungsbeitrag, Auslastung, Pipeline-Wert, Anteil Standardbausteine, Liquiditätsreichweite.
- **Risiken:** erste Fixkosten (Personal) bei noch volatilem Umsatz, Qualitätssteuerung über mehrere Menschen, Gründer wird vom Macher zum Manager.
- **Infrastruktur:** OS mit mehreren Workflows, RBAC, Evaluation-System, Lieferantenregister, sauberes Dashboard.
- **Meilensteine:** stabiler MRR deckt Fixkosten · zweite Unit (D) liefert · OS trägt parallele Projekte · erster Festangestellter oder fester Kern-Freelancer.

### 9.2 Phase 2 — 15–30 Menschen + spezialisierte Business Units

- **Team:** 15–30 Menschen, organisiert nach Units (A, B, D, H aktiv; E/F im Aufbau), mit Unit-Leads.
- **Kosten (monatlich, Modellannahme):** ~60.000–180.000 € — überwiegend Personal; Modell-/Infrakosten 2.000–8.000 €.
- **Umsatzquellen:** 8.1, 8.2, 8.3, 8.6 voll; 8.4 (Managed Operations) startet; 8.9 (White-Label-OS) wird vorbereitet.
- **Kritische KPIs:** Umsatz/Mitarbeiter, MRR-Anteil am Gesamtumsatz, Marge je Unit, Kundenbindung, Automationsgrad, Cash Conversion.
- **Risiken:** Organisations-Komplexität, Kulturverwässerung, Qualitäts-Konsistenz über Units, Abhängigkeit von Schlüsselpersonen, Cloud-Kosten-Skalierung.
- **Infrastruktur:** mandantenfähiges OS (Vorbereitung White-Label), Compliance-Layer ausgebaut, Audit Board (Menschen) eingerichtet, Incident-Management produktiv.
- **Meilensteine:** mehrere profitable Units · OS White-Label-fähig · erste externe OS-Pilotkunden · Audit/Compliance-Board aktiv.

### 9.3 Phase 3 — 50–100 Menschen + internationales Operator-Netzwerk

- **Team:** 50–100 Menschen + regionales Operator-Netz (Units C/G), internationale Erweiterung.
- **Kosten (monatlich, Modellannahme):** ~250.000–700.000 € — Personal, Operator-Netz, Infrastruktur, Compliance, Versicherungen.
- **Umsatzquellen:** voller Mix 8.1–8.9; 8.5 (Marketplace) und 8.7 (Enterprise) tragen relevant bei; 8.8/8.10 vorsichtig gestartet.
- **Kritische KPIs:** Konzern-EBIT-Marge, Umsatz je Region/Unit, Net Revenue Retention, Plattformkennzahlen (aktive White-Label-Mandanten), Incident-Rate.
- **Risiken:** Haftung/Plattformhaftung (Units C/G), internationales Recht/Steuern, Skalierungs-Qualität, Regulatorik für AI, Wettbewerb.
- **Infrastruktur:** voll ausgebautes OS, regionale Rechts-/Steuerstruktur, professionelles Risk-/Vendor-Management, Versicherungsportfolio.
- **Meilensteine:** profitables Operator-Netz in ≥1 Land · zahlende White-Label-Mandanten · Enterprise-Kunden · belastbare Konzern-Governance.

### 9.4 Phase 4 — AI-native Holding mit vielen Tochterprojekten

- **Team:** Holding-Kern (schlank) + viele halbautonome Studios/Töchter + großes Operator-/Partnernetz; Menschen vor allem in Führung, Recht, Haftung, Kreativität, Vor-Ort.
- **Kosten:** stark variabel/dezentral je Tochter; Holding trägt Plattform, Governance, Marke.
- **Umsatzquellen:** Plattform-/Lizenzumsatz (8.9, 8.7) und Beteiligungen (8.10) dominieren; die operativen Units sind teils verselbstständigt.
- **Kritische KPIs:** Plattform-Umsatz, Anzahl & Gesundheit der Töchter/Mandanten, Holding-Cashflow, Wert des Beteiligungsportfolios, Marken-/Vertrauensmetriken.
- **Risiken:** Klumpenrisiken, Governance über viele Einheiten, Regulatorik, Reputations-Ansteckung zwischen Töchtern, Modell-/Anbieterabhängigkeit.
- **Infrastruktur:** OS als Produkt + interne Plattform, Konzern-Governance, Audit/Compliance/Security als eigene Organisationen.
- **Meilensteine:** mehrere selbsttragende Töchter · Plattform-Umsatz > Dienstleistungsumsatz · Holding lebt von Plattform + Beteiligungen.

### 9.5 Annahmen, Sensitivitäten, Break-even-Logik

**Kernannahmen:**
- Variable Kostenstruktur in Phase 0/1 — wenig Fixkosten, fast alles pro Auftrag.
- Stückkosten je Projekt sinken mit dem Wiederverwendungsgrad der Bausteine (Lernkurve aus Kapitel 5.16).
- Wartungs-Abos (8.6) sind der Hebel von "Projekt-zu-Projekt-Überleben" zu "planbarem MRR".

**Break-even-Logik Phase 0:** Break-even ist erreicht, wenn der **monatliche Deckungsbeitrag** (Projektmargen + Wartungs-MRR) die **monatlichen Fixkosten** (~230–610 €) übersteigt. Bei einem Modell-Deckungsbeitrag von z. B. 500–1.000 € je Landingpage-Projekt genügen rechnerisch **1–2 Projekte pro Monat** plus erste Wartungs-Abos, um Phase 0 selbsttragend zu machen. Das ist die eigentliche Schwelle, ab der die Firma "lebt".

**Sensitivitäten (was das Modell am stärksten kippt):**
| Hebel | Wirkung |
|---|---|
| Akquise-Conversion (LinkedIn) | bestimmt, ob überhaupt Umsatz entsteht — **kritischster Faktor Phase 0** |
| Nacharbeitsquote / QA-Fehler | frisst Marge direkt; jeder Fehler = doppelte Stückkosten |
| Wiederverwendungsgrad Bausteine | hebt die Marge über die Zeit am stärksten |
| Wartungs-Abschlussquote | entscheidet über planbaren MRR |
| Cloud-Modellkosten vs. lokale Modelle | bei Massenarbeit relevant; Ollama-Anteil schützt die Marge |
| Zeitanteil Gründer: Umsatz vs. OS-Bau | zu viel OS-Bau verzögert Break-even |

**Finanzierungslogik:** Phase 0/1 strikt **bootstrapped** (aus Cashflow). Investoren/Fremdkapital erst sinnvoll, wenn ein wiederholbares, profitables Modell *nachgewiesen* ist (frühestens Phase 2) — vorher würde Kapital nur ein ungelöstes Vertriebs-/Qualitätsproblem kaschieren. Beteiligungen (8.10) und riskante Quellen nur aus echten Überschüssen, nie aus Betriebskapital.

---

## 10. Governance, Sicherheit und Recht

> **Hinweis:** Dieses Kapitel beschreibt ein Governance-*Modell*. Es ersetzt keine Rechtsberatung. Konkrete Umsetzung (UG-Gründung, Verträge, AGB, Versicherungen, DSGVO-Dokumentation) gehört in die Hände von Steuerberater und Anwalt — der CLO-Agent bereitet zu, Menschen entscheiden.

### 10.1 Drei Kontrollmodi: in-the-loop / on-the-loop / in-command

| Modus | Bedeutung | Wo angewendet |
|---|---|---|
| **Human-in-the-loop** | Mensch ist Teil des Ablaufs — ohne seine Freigabe geht es nicht weiter. | Zahlungen, Verträge, Rechnungsversand, Produktiv-Deployment, Beauftragung von Menschen, Behörden. |
| **Human-on-the-loop** | Agenten handeln autonom, Mensch beobachtet, kann jederzeit eingreifen/stoppen. | Routine-Ausführung, Recherche, Entwürfe, interne Workflows, Standard-Support. |
| **Human-in-command** | Der Mensch setzt Ziele, Regeln, Grenzen und Prioritäten — das System führt darunter aus. Übergeordnet zu beiden anderen. | Strategie, Regelwerk, Budgetrahmen, Aktivierung von Units, Konfiguration aller Limits. |

**Grundsatz:** Der Gründer ist immer *in command*. Bei roten Linien zusätzlich *in the loop*. Bei allem anderen *on the loop* — gestützt durch Audit-Logs und Dashboard.

### 10.2 Audit Board
- **Was:** Gremium (Phase 0: der Gründer + ggf. ein externer Berater; ab Phase 2: 2–3 Personen, davon mind. eine extern/unabhängig), das regelmäßig die Audit-Logs, Incidents und Agentenentscheidungen stichprobenartig prüft.
- **Aufgabe:** Prüft, ob das System nach den eigenen Regeln handelt, ob Eskalationen korrekt liefen, ob rote Linien gehalten wurden.
- **Taktung:** Phase 0 wöchentliche Kurzdurchsicht durch den Gründer; ab Phase 2 monatliche formale Sitzung.

### 10.3 Compliance Board
- **Was:** Verantwortet das Regelwerk selbst — Datenschutz, UWG/Werberecht, Arbeitsrecht, Plattformregeln, AI-Regulatorik (z. B. EU-AI-Act-Pflichten, soweit einschlägig).
- **Aufgabe:** Hält Regeln aktuell, übersetzt neue Gesetze in OS-Konfiguration (Tool-Risikoklassen, Gates), gibt Compliance-Schulungen für Menschen.
- **Phase 0:** Gründer + CLO-Agent + Anwalt auf Abruf; eine lebende Compliance-Checkliste statt eines Gremiums.

### 10.4 Data Protection Officer (Datenschutzverantwortlicher)
- **Phase 0:** Der Gründer trägt die Datenschutzverantwortung selbst (eine formelle DSB-Pflicht besteht für kleine Unternehmen meist nicht — vom Anwalt prüfen lassen).
- **Aufgaben:** Verzeichnis von Verarbeitungstätigkeiten, Auftragsverarbeitungsverträge (AVV) mit allen Tool-/Modellanbietern, Lösch-/Aufbewahrungskonzept, Betroffenenrechte, Datenpannen-Prozess (72 h).
- **Technische Stütze:** sensible Daten bevorzugt über lokale Modelle (Ollama), RBAC, Audit-Logs für jeden Zugriff.
- **Ab Phase 2/3:** formelle DSB-Bestellung prüfen (intern oder extern).

### 10.5 Incident Response
- Folgt dem Prozess aus Kapitel 5.11 (Erkennen → Klassifizieren → Eindämmen → Beheben → Aufarbeiten).
- **Vier Schweregrade**, ab Grad 3 sofortige Gründer-Eskalation.
- **Spezialpfad Datenpanne:** DSGVO-Meldefrist 72 h an die Aufsichtsbehörde, ggf. Information Betroffener — CISO-Agent bereitet vor, Mensch entscheidet und meldet.
- **Post-Mortem-Pflicht** ab Grad 2: dokumentierte Ursache, Lehre, Regel-/Limit-Anpassung im Lerngedächtnis.

### 10.6 Red-Team-Prüfungen
- **Was:** Regelmäßige gezielte Angriffe auf das eigene System — kann ein Agent zu einer roten Linie verleitet werden? Greift Prompt Injection? Lässt sich ein Approval-Gate umgehen? Halten die Budgetlimits?
- **Wer:** Phase 0 der Gründer mit Checkliste/Testfällen; ab Phase 2 externe Sicherheitsprüfer.
- **Taktung:** mind. quartalsweise und nach jeder größeren OS-Änderung.
- **Ergebnis:** Findings fließen als harte Tests ins Evaluation-System (5.10).

### 10.7 Model Risk Management
- **Was:** Steuerung der Risiken aus den eingesetzten KI-Modellen — Halluzination, Bias, Inkonsistenz, Anbieterabhängigkeit, Preis-/Verfügbarkeitsänderungen.
- **Maßnahmen:** Multi-Provider-Strategie + lokale Modelle als Fallback, Regressionstests bei jedem Modellwechsel, Modell-Scorecards, klare Aufgaben-Modell-Zuordnung, kein "blindes" Vertrauen — kritische Outputs immer durch QA-Agent + Mensch.

### 10.8 Vendor Risk Management
- **Was:** Risiken aus Tool-, Infrastruktur- und Dienstleisteranbietern (Supabase, Cloudflare, Vercel, Modellanbieter, Plattformen, Freelancer).
- **Maßnahmen:** AVV/Verträge mit allen datenführenden Anbietern, Bewertung von Ausfall-/Lock-in-Risiko, möglichst exportierbare Daten, Lieferanten-/Vendor-Register mit Risikoklasse, kritische Funktionen nie nur an einem Anbieter.

### 10.9 Vertragsprüfung
- **Ablauf:** CLO-Agent prüft jeden Vertrag/Angebot/AGB-Text gegen Vorlagen und Checklisten, vergibt einen Rechtsrisiko-Score, markiert kritische Klauseln.
- **Rote Linie:** **Kein Vertrag wird ohne Mensch geschlossen.** Standardverträge unterhalb der Risikoschwelle gibt der Gründer frei; alles darüber → Anwalt.
- **Vorlagenpflege:** geprüfte Standardvorlagen (Werkvertrag, NDA, AGB, Auftragsbestätigung) in den Shared Services, anwaltlich erstellt/abgesegnet.

### 10.10 Datenschutz
- DSGVO gilt vollständig. Kern: Datenminimierung, Zweckbindung, Rechtsgrundlage je Verarbeitung, Betroffenenrechte, AVV, Löschkonzept, technische Schutzmaßnahmen.
- "Privacy by Design": sensible Daten lokal verarbeiten, RBAC, Audit-Logs, Verschlüsselung, keine Klartext-Secrets.
- **Akquise-spezifisch:** LinkedIn-/Outbound-Daten DSGVO- und UWG-konform verarbeiten — kein wahlloses Scraping, kein Massenversand ohne Rechtsgrundlage.

### 10.11 Arbeitsrecht
- Festangestellte: vollständig konform (Verträge, Lohnabrechnung, Sozialversicherung, Arbeitszeit) — über Steuerberater/Lohnbüro.
- Freelancer/Externe: **Scheinselbstständigkeit aktiv vermeiden** — keine Weisungsabhängigkeit, keine Eingliederung wie ein Angestellter, eigene Betriebsmittel, mehrere Auftraggeber. CLO-Agent prüft die Vertragsform, Mensch entscheidet.
- Kündigungen, Abmahnungen, arbeitsrechtliche Schritte: **immer Mensch, nie Agent.**

### 10.12 Haftung *(Empfehlung des Blueprints)*
Empfohlene Strategie für Phase 0 (Gründer-Entscheidung: "Du empfiehlst"):
1. **Rechtsform als erster Schutz:** UG/GmbH = Haftungsbeschränkung auf das Gesellschaftsvermögen. Deshalb von Anfang an Kapitalgesellschaft, nicht Einzelunternehmen.
2. **AGB mit Haftungsbegrenzung ab Tag 1:** anwaltlich erstellte AGB, die Haftung auf Vorsatz/grobe Fahrlässigkeit und auf typische, vorhersehbare Schäden begrenzen — soweit rechtlich zulässig.
3. **Klare Scopes & Akzeptanzkriterien:** jedes Angebot definiert exakt, was geliefert wird — reduziert Streit- und Haftungsfläche.
4. **Scope klein halten, bis Absicherung steht:** in Phase 0 bewusst Low-Risk-Projekte (Landingpages, unkritische Websites), **keine** kritische/sicherheitsrelevante Software.
5. **Menschliche Endkontrolle** vor jeder Auslieferung — der QA-Agent + Gründer-Review sind auch ein Haftungsschutz.
6. **Versicherung:** sobald erste Einnahmen fließen, eine **Berufs-/Vermögensschaden- und IT-Haftpflicht** abschließen (siehe 10.13) — nicht erst "irgendwann".

### 10.13 Versicherungen *(Empfehlung des Blueprints)*
| Versicherung | Wann | Zweck |
|---|---|---|
| **Betriebs-/Berufshaftpflicht (IT/Medien)** | ab erstem Umsatz | deckt Vermögensschäden beim Kunden durch fehlerhafte Leistung |
| **Vermögensschadenhaftpflicht** | ab erstem Umsatz | reine Vermögensschäden (typisch für Software-/Beratungsleistung) |
| **Cyber-Versicherung** | Phase 1 | Datenpannen, Hacks, Betriebsunterbrechung |
| **Rechtsschutz (gewerblich)** | Phase 1 | Vertrags-/Forderungsstreitigkeiten |
| **D&O / erweiterte Deckung** | Phase 2–3 | Organhaftung, mit wachsender Größe |
| **Branchenspezifisch (z. B. für Units C/G)** | vor Aktivierung der jeweiligen Unit | physische Risiken, Plattformhaftung |

**Faustregel:** Versicherungssumme und -umfang wachsen mit Umsatz und Projektrisiko. Keine Unit mit physischer/erhöhter Haftung (C, G) wird aktiviert, bevor die passende Deckung steht.

### 10.X Governance-Grundsatz in einem Satz
**Je schwerer eine Aktion rückgängig zu machen ist, desto mehr Mensch steckt in der Entscheidung** — und jede Entscheidung, ob Agent oder Mensch, ist protokolliert, erklärbar und rückverfolgbar.

---

## 11. Marken- und Kulturmodell

Positionierung (Gründer-Entscheidung): **Premium-Studio, bei dem AI im Hintergrund arbeitet.** AI ist das Werkzeug, nicht das Verkaufsargument — verkauft wird *Ergebnisqualität, Verlässlichkeit und Tempo*.

### 11.1 Markenphilosophie
"The Company" steht für **planbare Exzellenz**: Der Kunde bekommt das versprochene Ergebnis, in versprochener Qualität, zum versprochenen Termin — ohne Drama. Die Marke verkauft nicht "billige AI-Arbeit" und nicht "Hype", sondern das ruhige Vertrauen, dass geliefert wird. Intern gilt: Die Organisation ist aus Prozessen gebaut, nicht aus Heldentum — gute Arbeit ist das Ergebnis guter Systeme, nicht von Überstunden.

### 11.2 Visuelle Sprache
- Reduziert, präzise, hochwertig — viel Weißraum, klare Typografie, ruhige Farbpalette, keine Effekthascherei (Porsche-Logik: Qualität zeigt sich in Zurückhaltung).
- Konsistenz über alle Touchpoints (Website, Angebot, Rechnung, LinkedIn) — gepflegt vom Brand-Agent über ein zentrales Brand-Kit in den Shared Services.
- Jedes Product Studio darf eine eigene Mini-Identität haben, aber innerhalb des Marken-Rahmens der Holding.

### 11.3 Tonalität
- **Klar, ehrlich, kompetent, ohne Buzzwords.** Keine Übertreibung, keine leeren Superlative.
- Selbstbewusst, aber nicht arrogant; freundlich, aber nicht anbiedernd.
- Ehrlich über Grenzen — wenn etwas nicht geht oder nicht sinnvoll ist, wird es gesagt. Das ist Teil des Premium-Versprechens.
- Gilt für Agenten-Kommunikation *und* menschliche Kommunikation gleichermaßen — der CLO-Agent prüft zusätzlich auf rechtlich heikle Aussagen.

### 11.4 Werte
1. **Engineering Discipline** — nichts geht ungeprüft raus.
2. **Erklärbarkeit** — jede Entscheidung ist nachvollziehbar.
3. **Ehrlichkeit** — über Können, Grenzen, Preise, Fehler.
4. **Verantwortung bleibt menschlich** — bei Geld, Recht, Sicherheit, Haftung.
5. **Respektvolle Zusammenarbeit** — faire Briefings und Bezahlung für alle Menschen, auch Externe; kein Crunch.
6. **Lernen statt Schuld** — Fehler werden aufgearbeitet, nicht bestraft.

### 11.5 Interne Rituale
- **Täglicher Stand-up-Report:** Der CEO-Agent erzeugt morgens eine Lage + Entscheidungsvorlage (siehe Kapitel 12).
- **Wöchentliche Audit-Durchsicht:** Der Gründer prüft Logs, Incidents, KPIs.
- **Projekt-Retro nach jedem Auftrag:** Schritt 12 des Auftragsdurchlaufs — "Lessons Learned" ins Lerngedächtnis.
- **Monatlicher "Kill-or-Grow"-Review:** Welche Produkte/Units/Studios wachsen, welche werden eingestellt?
- **Quartals-Red-Team:** geplanter Angriff aufs eigene System.

### 11.6 Agenten-Ethik
- Agenten **täuschen nicht** — gegenüber Kunden wird nie der Eindruck erweckt, ein Mensch habe geschrieben, wo ein Agent schrieb, wenn danach gefragt wird; und nie umgekehrt.
- Agenten **überschreiten keine roten Linien** — technisch verdrahtet, nicht nur "gebeten".
- Agenten **eskalieren im Zweifel**, statt zu raten (Fail-Closed).
- Agenten **manipulieren nicht** — keine Dark Patterns, keine irreführende Werbung, keine ausbeuterische Monetarisierung.
- Agenten **respektieren Plattformregeln und Gesetze** — auch wenn ein Verstoß kurzfristig effizienter wäre.

### 11.7 Qualitätsversprechen
Gegenüber dem Kunden, konkret und überprüfbar:
- **Geprüfte Auslieferung:** Jeder Output ist von QA-Agent *und* einem Menschen geprüft, bevor er den Kunden erreicht.
- **Fixe Scopes & Termine:** Was im Angebot steht, gilt — inklusive Termin.
- **Vorschau vor Live:** Der Kunde sieht das Ergebnis (Staging) vor der Live-Schaltung.
- **Nacharbeit inklusive:** definierte Korrekturschleifen sind Teil des Preises.
- **Nachvollziehbarkeit:** auf Wunsch kann erklärt werden, *wie* ein Ergebnis entstanden ist.

### 11.8 Premium-Faktor (Porsche/Mercedes-Logik)
Premium heißt hier nicht "teuer", sondern **konsistent verlässlich**. Der Aufpreis gegenüber einer Billig-Agentur rechtfertigt sich durch: geprüfte Qualität, gehaltene Termine, saubere Verträge, ehrliche Kommunikation, After-Sales (Wartung). Lieber **wenige Produktlinien exzellent** als viele mittelmäßig (Apple-Fokus).

### 11.9 Studio-/Franchise-Denken (Activision-Logik)
Jedes Projekt/Repo ist ein **Studio** mit eigener Mini-Identität, eigenem Budget, eigenen KPIs. Erfolgreiche Studios werden zu **Franchises** ausgebaut (wiederkehrende Produktlinien), erfolglose ohne Drama eingestellt. Das schafft Portfolio-Denken: wenige Treffer tragen viele Versuche.

### 11.10 Plattformdenken (Amazon/Apple-Logik)
Das "The Company OS" ist von Anfang an so gebaut, dass es **erst die eigene Firma trägt und später anderen Unternehmern als White-Label-Plattform dient** (siehe 8.9). Jede interne Funktion wird gefragt: "Könnte das später ein Produkt sein?" Standardisierte, dokumentierte Prozesse (Siemens-Logik) machen die Organisation unabhängig von einzelnen Personen — das ist die Voraussetzung dafür, dass sie sich überhaupt als Plattform vervielfältigen lässt.

### 11.X Kultur in einem Satz
**"Wir bauen eine Firma, der man vertrauen kann — weil sie nichts verspricht, was sie nicht geprüft hat, und nichts verbirgt, was sie getan hat."**

---

## 12. Beispieltag in dieser Firma

Ein konkreter Tag in **Phase 0** — Solo-Founder, AI Software Studio, zwei laufende Landingpage-Projekte, eine warme Anfrage. Der Gründer arbeitet als Koordinator, ~6–8 h an diesem Tag.

### 12.1 Morgens: automatische Abläufe (vor 08:00, ohne Mensch)
- Während der Nacht haben Always-on-Worker (Cloudflare) gelaufen: Posteingang gesichtet, neue LinkedIn-Antworten erfasst, Hosting-/Build-Status geprüft, Cloud-Modellkosten gegen Budget abgeglichen, Audit-Logs des Vortags verdichtet.
- Der CEO-Agent hat aus allen C-Agenten-Inputs **eine Tageslage + Entscheidungsvorlage** gebaut.
- Der CFO-Agent hat den Banksaldo (lesend) mit dem Digital Twin abgeglichen — keine Abweichung.
- Der Safety-/Audit-Agent hat über Nacht keine Anomalie gemeldet → kein Sofort-Alarm.

### 12.2 Agenten-Reports (08:00, der "Stand-up")
Der Gründer öffnet das Dashboard und sieht den verdichteten Tagesreport:
- **Sales-Agent:** 3 neue LinkedIn-Antworten, 1 davon qualifizierter Lead (Startup, will Landingpage). 2 Entwürfe für Folgenachrichten liegen bereit.
- **COO-Agent:** Projekt "Studio Aurora" ist in QA, Projekt "Studio Bridge" wartet auf Kundenfeedback zur Staging-Vorschau.
- **CTO-Agent:** Aurora-Build grün, ein Standardbaustein wurde wiederverwendet (Stückkosten-Schätzung gesunken).
- **QA-Agent:** Aurora hat 2 kleine Mängel (Kontrast, Mobile-Abstand) — Nacharbeit angefordert, Veto bleibt bis behoben.
- **CFO-Agent:** Liquiditätsreichweite 7 Monate; 1 Rechnungsentwurf (Bridge) wartet auf Freigabe.

### 12.3 Vorbereitete Entscheidungen (08:00–08:30, Freigabe-Slot 1)
Der Gründer arbeitet die gebündelten Approval-Gates ab — jede Vorlage kompakt (Was/Warum/Kosten/Risiko/Empfehlung):
- ✅ **Angebot "Studio Cedar"** (neuer Lead, 1.200 € Landingpage) — geprüft, freigegeben → wird verbindlich versendet.
- ✅ **Rechnungsentwurf "Studio Bridge"** — geprüft, freigegeben → CFO-Agent darf versenden.
- ⏸️ **Freelancer-Anfrage Design** für ein größeres Folgeprojekt — Gründer will erst Portfolio sehen, zurückgestellt.
- ✅ Drei LinkedIn-Folgenachrichten — gegen Vorlagen geprüft, freigegeben.

### 12.4 Human-Briefings (08:30–09:00)
- Der CHRO-Agent hat ein Briefing-Paket für einen Design-Freelancer vorbereitet (Scope, Brand-Kit, Deadline). Der Gründer prüft, ergänzt zwei Sätze, gibt frei — **die Beauftragung selbst** macht er später persönlich (rote Linie).
- Kurzer Kalendercheck: 11:00 Kundengespräch "Studio Bridge" (Mensch-zu-Mensch, vom Agenten vorbereitet mit Gesprächsleitfaden).

### 12.5 Kundenprojekte im Tagesverlauf
- **09:00–11:00:** CTO-Agent behebt die Aurora-Mängel, QA-Agent prüft erneut → Veto fällt. Der Gründer macht den finalen Review (10 Min), gibt das Produktiv-Deployment frei → Aurora geht live, Kunde bekommt den Link.
- **11:00:** Gründer führt das Bridge-Kundengespräch, klärt das Feedback zur Vorschau. Der Support-Agent protokolliert die Punkte als Aufgaben.
- **11:30–13:00:** Workflow für "Studio Cedar" startet automatisch, sobald der Kunde das Angebot annimmt — CPO-Agent zerlegt den Scope, CTO-Agent beginnt den Bau in Staging.
- **Nachmittags:** Gründer arbeitet am OS (Unit H) — heute: eine Workflow-Verbesserung, die der letzte Projekt-Retro nahegelegt hat. Begrenzt auf 2 h, damit OS-Bau nicht den Umsatz verdrängt.

### 12.6 Eskalationen (ereignisgetrieben, jederzeit)
- **14:20:** Der CISO-Agent meldet einen fehlgeschlagenen Login-Versuch auf einem Tool-Account → Schweregrad 1, automatisch geblockt, nur Info. Keine Aktion nötig.
- **15:40:** Der Sales-Agent stößt bei einem Lead auf eine Anfrage, die nach kritischer Software klingt (Zahlungsabwicklung) → Risk-Score hoch, Workflow pausiert, Vorlage an Gründer: "außerhalb des Phase-0-Scopes, Empfehlung: ablehnen oder als Premium-Engineering-Projekt mit Senior-Freelancer einplanen". Gründer entscheidet: höflich vertagen.

### 12.7 Dashboard-Sicht (jederzeit, Detail in Kapitel 13)
Eine Bildschirmseite zeigt durchgehend: Liquidität & Reichweite, offene Projekte mit Status-Ampel, offene Freigaben (heute: 0 nach Slot 1, Slot 2 um 17:00), Agentenstatus (alle grün), Risiken/Compliance-Warnungen (1 erledigt), Pipeline (4 Leads), Support-Tickets (2 offen, im SLA).

### 12.8 Abschluss: Sicht des Gründers/CEO (17:00, Freigabe-Slot 2)
- Zweiter, kurzer Freigabe-Slot: Tagesergebnisse, ein Rechnungsentwurf, die Cedar-Bau-Zwischenstände.
- Der CEO-Agent erzeugt den **Tagesabschluss**: 1 Projekt live (Aurora), 1 Angebot raus (Cedar), 1 Rechnung versendet (Bridge), 1 Lead vertagt, 0 offene Risiken.
- Der Audit-Agent hat den ganzen Tag lückenlos protokolliert — der Gründer sieht: 41 Agentenaktionen, 9 Freigaben, 0 rote Linien berührt ohne Mensch.
- **Was der Gründer an diesem Tag *nicht* tun musste:** selbst Code schreiben, selbst Texte verfassen, selbst Leads suchen, selbst kalkulieren, selbst Logs durchwühlen. **Was nur er konnte:** das Kundengespräch führen, die roten Linien freigeben, die strittige Anfrage entscheiden, die Richtung halten.

> **Das ist der Kern:** Der Tag des Gründers besteht aus *Entscheiden, Prüfen, Beziehung* — nicht aus Ausführen. Das System bereitet vor, führt aus, dokumentiert. Der Mensch bleibt in command und bei den roten Linien in the loop.

---

## 13. Dashboard und Betriebssystem

Das **"The Company OS"** ist die Software, die diese Firma zur Firma macht: Orchestrator, Gedächtnis, Audit-Log, Regelwerk und Steuerpult in einem. Das **Dashboard** ist die menschliche Oberfläche darauf — die *eine Bildschirmseite*, über die der Gründer die ganze Firma sieht und steuert. Designprinzip: **Eine Seite, keine Suche** — was der Gründer für seine Entscheidungen braucht, ist ohne Klicken sichtbar; Details sind einen Klick tief.

### 13.1 Kennzahlenpanel
Oben, immer sichtbar — die Vitalwerte:
- **Liquidität:** Banksaldo (Digital Twin), Liquiditätsreichweite in Monaten, Burn pro Monat.
- **Umsatz:** laufender Monat, Vormonat, offene Rechnungen, überfällige Rechnungen.
- **Kosten:** fixe Tool-/Infrakosten, variable Modellkosten (gegen Budget), Freelancer-Kosten.
- **Qualität:** QA-Veto-Quote, Nacharbeitsquote, Kundenzufriedenheit, Reklamationen.
- **Automationsgrad:** Anteil Agentenaktionen ohne Mensch vs. mit Freigabe — die zentrale Fortschrittskennzahl der ganzen Firma.

### 13.2 Projekt- & Pipeline-Ansicht
- **Projekte:** jedes laufende Studio/Repo mit Status-Ampel (Briefing / Bau / QA / Kundenfreigabe / live / Wartung), Termin, verantwortlichem Agenten-Team.
- **Pipeline:** Leads nach Phase (neu / qualifiziert / Angebot raus / gewonnen / verloren), gewichteter Pipeline-Wert.
- Klick auf ein Projekt → Detailansicht mit Auftragsdurchlauf-Schritt (Kapitel 2.7), Logs, Artefakten.

### 13.3 Agentenstatus
- Jeder aktive Agent mit Ampel: läuft / wartet auf Input / wartet auf Freigabe / Fehler / pausiert.
- Aktuelle Aufgabe je Agent, Laufzeit, Modell-/Kostenverbrauch heute.
- Auffällige Agenten (Fehler, ungewöhnlich teuer, oft eskalierend) werden hochgereiht.

### 13.4 Risiken & Compliance-Warnungen
- Offene Incidents nach Schweregrad, Compliance-Flags des CLO-Agenten, ablaufende Fristen (Rechnungen, Verträge, Datenschutz, Versicherungen).
- Budgetwarnungen (Modellkosten nähern sich Limit), Vendor-Warnungen (Anbieterausfall).

### 13.5 Offene Freigaben
- Die **Approval-Queue** — alle wartenden Gates, gebündelt, jedes mit kompakter Vorlage (Was / Warum / Kosten / Risiko / Empfehlung).
- Sortiert nach Dringlichkeit; rote Linien hervorgehoben. Ziel: in zwei kurzen Slots pro Tag abzuarbeiten (siehe Kapitel 12).

### 13.6 Human-Operator-Status
- Welche Menschen (Gründer, Festangestellte, Freelancer) sind gerade womit beauftragt, mit welchem Stand, welcher Deadline.
- Offene Human-Briefings, die noch Gründer-Freigabe brauchen.

### 13.7 Liefertermine & Repo-/Produktstatus
- Kalendersicht der zugesagten Liefertermine mit Ampel (im Plan / gefährdet / überfällig).
- Pro Produkt/Repo: Live-Status, letzte Deployment, offene Bugs, Wartungsvertrag-Status.

### 13.8 Marketing-Kanäle & Support-Tickets
- Kanal-Performance (LinkedIn-Outbound-Antwortquote, Website-Anfragen, Empfehlungen).
- Support-Tickets: offen / in Bearbeitung / im SLA / SLA verletzt, mit Eskalationen.

### 13.9 Informationsarchitektur / Screen-Layout
- **Zeile 1:** Kennzahlenpanel (Vitalwerte) — immer sichtbar.
- **Zeile 2 links:** Offene Freigaben (der wichtigste Handlungsblock). **Zeile 2 rechts:** Risiken & Compliance-Warnungen.
- **Zeile 3:** Projekte & Pipeline.
- **Zeile 4:** Agentenstatus | Human-Operator-Status | Liefertermine.
- **Zeile 5:** Marketing & Support.
- **Querschnitt:** globale Suche, Zeitfilter, und ein **roter Not-Aus** (Kill-Switch, Kapitel 5/6), der von jeder Ansicht erreichbar ist.
- **Mobil:** reduzierte Sicht — Vitalwerte, offene Freigaben, kritische Alarme. Genug, um unterwegs in command zu bleiben.

> Das OS ist zugleich das **erste Produkt** der Firma (Unit H) und der Kern der späteren White-Label-Plattform (Kapitel 8.9). Es wird deshalb von Anfang an sauber gebaut — nicht als Wegwerf-Skript.

---

## 14. Beispiel: Ein neues Repo wird gestartet

Konkretes Durchspielen: Ein Kunde hat "Studio Cedar" beauftragt — eine Landingpage für ein Startup. Aus einem leeren GitHub-Repo wird eine kleine, vollständige "Mini-Firma" mit eigener Identität, eigenem Budget und eigenen KPIs (Studio-Logik, Kapitel 11.9). Jeder Schritt zeigt: **welcher Agent, welches Tool, wo der Mensch.**

### 14.1 Namensfindung
- **Agent:** Brand-Agent. **Tool:** Modell + Domain-Check. **Output:** 3–5 Namensvorschläge mit freier `.de`/`.com`-Domain und Begründung.
- **Mensch:** Gründer (oder Kunde) wählt — Namenswahl ist eine Identitätsentscheidung, keine Maschinenentscheidung.

### 14.2 Branding
- **Agent:** Brand-Agent + Design-Agent. **Tool:** Design-Generierung, Brand-Kit-Vorlage aus den Shared Services.
- **Output:** Logo-Varianten, Farbpalette, Typografie, Mini-Styleguide — innerhalb des Holding-Markenrahmens (Kapitel 11.2).
- **Mensch:** Gründer-Freigabe des finalen Brand-Kits.

### 14.3 Website & Landingpage
- **Agent:** CPO-Agent zerlegt den Scope → CTO-Agent baut in **Staging**. **Tool:** GitHub-Repo, Build-Pipeline, Hosting (Cloudflare/Vercel/Netlify), wiederverwendete Standardbausteine.
- **Output:** funktionierende Landingpage auf einer Staging-URL.
- **Mensch:** keiner — bis hierher autonom; der Mensch kommt bei QA und Go-live.

### 14.4 Dokumentation
- **Agent:** Doc-Agent. **Tool:** Repo-`README`, Projektakte im Lerngedächtnis.
- **Output:** technische Doku (wie gebaut, wie deployt), Kundendoku (wie pflege ich das), interne Projektakte.

### 14.5 Roadmap & Produktstrategie
- **Agent:** CPO-Agent. **Output:** falls der Kunde Ausbau will — eine kleine Roadmap (Phase 2: Blog, Phase 3: Shop). Bei einem einfachen Auftrag bleibt es bei "Landingpage, fertig".
- **Mensch:** Gründer entscheidet, ob aus dem Studio eine **Franchise** (wiederkehrende Produktlinie) werden soll.

### 14.6 Pricing
- **Agent:** Pricing-Agent berechnet aus Stückkosten (Modell + ggf. Freelancer + Overhead) einen Vorschlag mit Marge. **Tool:** Kalkulationsvorlage.
- **Mensch:** **Rote Linie** — der Gründer gibt jeden Preis/jedes Angebot frei, bevor es verbindlich raus geht (Kapitel 5.7, 10.9).

### 14.7 Support & Analytics
- **Agent:** Support-Agent (Ticket-Annahme, Standardantworten), Analytics-Agent (Besucherzahlen, Conversion).
- **Tool:** Support-Postfach, Analytics-Tool, Dashboard-Anbindung.
- **Output:** der Kunde bekommt nach Go-live einen Support-Kanal; die KPIs landen im Dashboard (13.7/13.8).

### 14.8 Marketing & Kundenakquise
- **Agent:** Marketing-Agent (Content für das Studio), Sales-Agent (falls die Produktlinie weitervermarktet wird).
- **Tool:** LinkedIn-Outbound, Website-Referenz, Empfehlungs-Flow.
- **Mensch:** Gründer gibt Außenkommunikation frei; DSGVO/UWG-Konformität prüft der CLO-Agent.

### 14.9 Release-Prozess & Wartung
- **Agent:** CTO-Agent + QA-Agent. **Ablauf:** QA-Veto muss fallen → Gründer-Review → **Mensch gibt Produktiv-Deployment frei** (rote Linie) → live.
- **Wartung:** optionaler Wartungsvertrag (wiederkehrender Umsatz, Kapitel 8) — Monitoring-Agent überwacht, meldet, kleinere Fixes laufen als Routine.

### 14.10 Buchhaltung & rechtliche Prüfung
- **Agent:** CFO-Agent erstellt Rechnungsentwurf, CLO-Agent prüft Vertrag/AGB gegen Vorlagen.
- **Mensch:** **Rote Linien** — Rechnungsversand und Vertragsabschluss gibt der Gründer frei; alles über der Risikoschwelle → Anwalt/Steuerberater.

### 14.11 Wachstum
- **Monatlicher Kill-or-Grow-Review** (Kapitel 11.5): Trägt das Studio? Lohnt Ausbau zur Franchise? Oder ohne Drama einstellen?
- Erfolgreiche Muster (wiederverwendbare Bausteine, Briefing-Vorlagen, Pricing-Logik) fließen zurück in die Shared Services — das nächste Repo startet dadurch schneller und günstiger.

> **Das Muster:** Ein Repo durchläuft *denselben* Auftragsdurchlauf wie jede Arbeit (Kapitel 2.7), nur sichtbar gemacht. Die Agenten führen aus, die Tools liefern den Weltzugriff, und der Mensch sitzt an genau vier Stellen: **Name, Brand-Kit, Preis/Angebot, Go-live + Rechnung/Vertrag.**

---

## 15. Risiken und Gegenmaßnahmen

Eine ehrliche Firma kennt ihre Bruchstellen. Dieses Kapitel listet die Risikofelder und mündet in ein **Risikoregister mit 32 Einträgen**. Grundprinzip: Jedes Risiko hat eine *zuständige Instanz* (Agent oder Mensch) und ein *Frühwarnsignal*, das im Dashboard sichtbar ist.

### 15.1 Technische Risiken
Modell-/Toolausfall, fehlerhafter Code in Produktion, Datenverlust, Build-Pipeline kaputt, Lock-in bei einem Anbieter. Gegenmaßnahmen: Multi-Provider + lokale Fallbacks, QA-Veto, Backups, Staging-Pflicht, Vendor-Register.

### 15.2 Rechtliche Risiken
Fehlerhafter Vertrag, DSGVO-Verstoß, UWG-Verstoß bei Akquise, Scheinselbstständigkeit, AI-Regulatorik. Gegenmaßnahmen: CLO-Agent prüft, Anwalt entscheidet ab Risikoschwelle, geprüfte Vorlagen, kein Massen-Scraping.

### 15.3 Finanzielle Risiken
Liquiditätsengpass, Modellkosten laufen aus dem Ruder, Kunde zahlt nicht, Fehlkalkulation, zu hoher OS-Bau-Aufwand ohne Umsatz. Gegenmaßnahmen: harte Budgetlimits, Liquiditätsreichweite im Dashboard, Anzahlungen, Pricing-Agent + Gründer-Freigabe.

### 15.4 Reputationsrisiken
Schlechte Auslieferung, gebrochene Termine, peinlicher AI-Fehler nach außen, negative Bewertung. Gegenmaßnahmen: doppelte Prüfung (QA + Mensch), Premium-Qualitätsversprechen, ehrliche Kommunikation, kleine Scopes in Phase 0.

### 15.5 Sicherheitsrisiken
Prompt Injection, Credential-Diebstahl, kompromittierter Tool-Account, Datenabfluss. Gegenmaßnahmen: RBAC, Secrets-Management, Tool-Risikoklassen + Gates, Red-Teaming, Audit-Logs, Kill-Switch.

### 15.6 Menschliche Risiken
Gründer als Single Point of Failure (Krankheit, Überlastung, Urlaub), Freelancer liefert schlecht, Schlüsselwissen nur im Kopf. Gegenmaßnahmen: alles dokumentiert im OS, Vertretungsregelung, mehrere Freelancer-Optionen, bewusste Lastbegrenzung (zwei Freigabe-Slots statt Dauerbetrieb).

### 15.7 Agenten-Fehlentscheidungen
Halluzination, falsche Schlussfolgerung, übersehene Eskalation, Agent dreht sich im Kreis. Gegenmaßnahmen: Fail-Closed, Eskalation im Zweifel, QA-Agent, Mensch bei roten Linien, Evaluation-System mit harten Tests, Loop-/Kosten-Limits.

### 15.8 Tool-Missbrauch
Agent nutzt ein Tool außerhalb des vorgesehenen Zwecks, irreversible Aktion ohne Gate, Massenversand. Gegenmaßnahmen: Tool-Risikoklassen, technisch verdrahtete Gates (nicht nur "gebeten"), Rate-Limits, Audit-Log je Tool-Aufruf.

### 15.9 Falsche Daten
Veraltete Info im Lerngedächtnis, falscher Banksaldo im Digital Twin, fehlerhafte Kundendaten. Gegenmaßnahmen: Quellenkennzeichnung, Digital-Twin-Abgleich (lesend) mit Realität, Verfallsdaten auf Fakten, Plausibilitätsprüfungen.

### 15.10 Schlechte Dienstleister
Freelancer/Anbieter liefert verspätet, mangelhaft oder fällt aus. Gegenmaßnahmen: Vendor-Register mit Risikoklasse, klare Briefings + Akzeptanzkriterien, Bewertung nach jedem Auftrag, nie kritische Funktion an nur einem Anbieter.

### 15.11 Kundenbeschwerden
Erwartung verfehlt, Scope-Streit, Unzufriedenheit mit Qualität oder Tempo. Gegenmaßnahmen: fixe Scopes + Akzeptanzkriterien im Angebot, Staging-Vorschau vor Live, definierte Korrekturschleifen inklusive, Support-SLA, Eskalation an Gründer.

### 15.12 Haftung
Schaden beim Kunden durch fehlerhafte Leistung, Regressforderung. Gegenmaßnahmen: UG/GmbH-Haftungsschutz, AGB mit Haftungsbegrenzung, Versicherungen (Kapitel 10.13), menschliche Endkontrolle, Low-Risk-Scope in Phase 0.

### 15.13 Skalierungsprobleme
Zu schnelles Wachstum überfordert den Gründer, Qualität sinkt mit Menge, OS skaliert nicht, zu viele Units zu früh. Gegenmaßnahmen: phasenweises Aktivieren (Kapitel 4), Automationsgrad als Wachstumsbremse/-gas, Kill-or-Grow-Review, erst System stabil dann Menge.

### 15.14 Gesamt-Risikoregister

| # | Risiko | Ursache | Auswirkung | Frühwarnsignal | Gegenmaßnahme | Zuständig |
|---|---|---|---|---|---|---|
| 1 | Modellanbieter-Ausfall | Anbieterstörung | Produktion steht | Health-Check rot | Multi-Provider + lokale Fallbacks | CTO-Agent |
| 2 | Modellkosten explodieren | Loop, teures Modell für Trivialaufgabe | Liquidität sinkt | Kostenkurve nähert sich Limit | Budgetlimit, Modell-Aufgaben-Zuordnung | CFO-Agent |
| 3 | Fehlerhafter Code in Produktion | QA übersehen, Edge-Case | Kunde betroffen, Reputationsschaden | Bug-Report, Monitoring-Alarm | QA-Veto, Staging-Pflicht, Mensch-Review | QA-Agent / Gründer |
| 4 | Datenverlust | kein Backup, Fehlbedienung | unwiederbringlicher Schaden | Backup-Job fehlgeschlagen | automatische Backups, Restore-Tests | CTO-Agent |
| 5 | Anbieter-Lock-in | Abhängigkeit von einem Stack | Erpressbarkeit, Migrationskosten | Vendor-Konzentration im Register | exportierbare Daten, Alternativen vorhalten | Gründer |
| 6 | DSGVO-Verstoß | fehlender AVV, Massen-Scraping | Bußgeld, Abmahnung | CLO-Flag, fehlender AVV | Datenschutzprozess, lokale Modelle für Sensibles | CLO-Agent / Gründer |
| 7 | Fehlerhafter Vertrag | ungeprüfte Klausel | rechtlicher Nachteil, Haftung | hoher Rechtsrisiko-Score | CLO-Prüfung, Anwalt ab Schwelle | CLO-Agent / Anwalt |
| 8 | Scheinselbstständigkeit | Freelancer wie Angestellter geführt | Nachzahlung, Strafe | Weisungsabhängigkeit erkennbar | Vertragsform-Prüfung, klare Abgrenzung | CLO-Agent / Gründer |
| 9 | UWG-Verstoß bei Akquise | unaufgeforderter Massenversand | Abmahnung | Outbound ohne Rechtsgrundlage | konforme Akquise, CLO prüft | CLO-Agent |
| 10 | Liquiditätsengpass | zu hoher Burn, späte Zahlungen | Zahlungsunfähigkeit | Reichweite < 3 Monate | Anzahlungen, Kostenbremse, Dashboard | CFO-Agent / Gründer |
| 11 | Kunde zahlt nicht | Insolvenz, Streit | Umsatzausfall | überfällige Rechnung | Anzahlung, Bonität, Mahnprozess | CFO-Agent / Gründer |
| 12 | Fehlkalkulation | Stückkosten unterschätzt | Projekt defizitär | Marge unter Schwelle | Pricing-Agent + Gründer-Freigabe, Nachkalkulation | Pricing-Agent |
| 13 | OS-Bau verdrängt Umsatz | zu viel Zeit in Unit H | kein Cashflow | OS-Stunden > Budget | Zeitbudget für OS-Bau begrenzen | Gründer |
| 14 | Gebrochener Liefertermin | Fehlplanung, Engpass | Reputationsschaden | Termin-Ampel gelb/rot | Puffer, Frühwarnung, ehrliche Kommunikation | COO-Agent |
| 15 | Peinlicher AI-Fehler nach außen | ungeprüfter Output | Reputationsschaden | — | doppelte Prüfung vor jedem Außenkontakt | QA-Agent / Gründer |
| 16 | Negative Bewertung | verfehlte Erwartung | Akquise erschwert | Kundenzufriedenheit sinkt | Erwartungsmanagement, Nacharbeit inklusive | Support-Agent / Gründer |
| 17 | Prompt Injection | manipulierte Eingabe/Webinhalt | Agent handelt falsch | Anomalie im Audit-Log | Input-Härtung, Fail-Closed, Red-Teaming | CISO-Agent |
| 18 | Credential-Diebstahl | Leck, Phishing | fremder Zugriff | fehlgeschlagene Logins | Secrets-Management, RBAC, 2FA | CISO-Agent |
| 19 | Kompromittierter Tool-Account | gestohlene Credentials | Missbrauch, Datenabfluss | ungewöhnliche Tool-Aktivität | Audit-Logs, Kill-Switch, Rotation | CISO-Agent / Gründer |
| 20 | Datenabfluss | Fehlkonfiguration, Angriff | DSGVO-Meldepflicht | DLP-/Audit-Alarm | Verschlüsselung, RBAC, Incident-Prozess | CISO-Agent |
| 21 | Gründer fällt aus | Krankheit, Überlastung | Firma steht | Überlastsignale, Slot-Stau | Dokumentation im OS, Vertretungsregelung, Lastlimit | Gründer |
| 22 | Schlüsselwissen nur im Kopf | nicht dokumentiert | nicht reproduzierbar | undokumentierte Prozesse | Doc-Agent, OS als Single Source of Truth | Doc-Agent |
| 23 | Agenten-Halluzination | Modellgrenze | falsches Ergebnis | QA-Veto, Plausibilitätsfehler | QA-Agent, Mensch bei roten Linien, Evals | QA-Agent |
| 24 | Übersehene Eskalation | fehlende Regel | rote Linie berührt | Audit-Stichprobe | Fail-Closed, Eskalation im Zweifel, Audit Board | Safety-Agent |
| 25 | Agent dreht sich im Kreis | Loop ohne Abbruch | Kosten, Stillstand | Loop-Counter, Kostenanstieg | Loop-/Kosten-Limits, Timeout | CTO-Agent |
| 26 | Tool-Missbrauch | Tool außerhalb Zweck genutzt | irreversible Aktion | Audit-Log-Anomalie | Risikoklassen, verdrahtete Gates, Rate-Limits | CISO-Agent |
| 27 | Falsche Daten im Gedächtnis | veraltet, fehlerhaft | falsche Entscheidung | Plausibilitätsabweichung | Quellenkennzeichnung, Verfallsdaten, Abgleich | Knowledge-Agent |
| 28 | Digital Twin weicht ab | Sync-Fehler | falsches Finanzbild | Twin ≠ Banksaldo | regelmäßiger lesender Abgleich, Alarm bei Abweichung | CFO-Agent |
| 29 | Schlechter Dienstleister | mangelhafte Leistung | Projektverzug | schlechte Vendor-Bewertung | Vendor-Register, Akzeptanzkriterien, Alternativen | COO-Agent |
| 30 | Kundenbeschwerde / Scope-Streit | Erwartung verfehlt | Konflikt, Reputationsrisiko | Beschwerde, Ticket-Eskalation | fixe Scopes, Staging-Vorschau, Korrekturschleifen | Support-Agent / Gründer |
| 31 | Haftungsfall | Schaden beim Kunden | Regressforderung | Reklamation mit Schadensbezug | UG-Schutz, AGB, Versicherung, Endkontrolle | Gründer / Anwalt |
| 32 | Zu schnelles Wachstum | zu viele Aufträge/Units zu früh | Qualität bricht ein | Nacharbeitsquote steigt | phasenweises Aktivieren, Automationsgrad als Bremse | Gründer |

---

## 16. MVP-Plan

Die kleinste Version dieser Firma, die ein **einzelner Gründer** real betreiben kann — Phase 0. Leitsatz: **So wenig wie möglich, aber vollständig genug, um echten Umsatz mit echter Qualität zu liefern.**

### 16.1 Erste Agenten
Nicht das ganze Organigramm — nur der tragende Kern:
- **CEO-Agent** — Tageslage, Entscheidungsvorlagen, Orchestrierung.
- **Sales-Agent** — Leads, Outbound-Entwürfe, Angebotsvorbereitung.
- **CPO-/CTO-Agent** — Scope zerlegen, Landingpages/Websites bauen.
- **QA-Agent** — Veto-Recht vor jeder Auslieferung.
- **CFO-Agent** — Rechnungsentwürfe, Kosten-/Liquiditätssicht.
- **CLO-Agent** — Vertrags-/AGB-/DSGVO-Prüfung gegen Vorlagen.
- **Safety-/Audit-Agent** — Audit-Log, Eskalation, rote Linien.

### 16.2 Erste Tools
- GitHub (Repos), eine Build-/Hosting-Pipeline (Cloudflare/Vercel/Netlify).
- Ein Modellzugang (Cloud) + ein lokales Modell (Ollama) als Fallback/für Sensibles.
- Postfach, LinkedIn-Zugang, Kalender.
- Supabase (OS-Datenhaltung, Audit-Log, Lerngedächtnis).
- Secrets-Management, RBAC — von Tag 1, nicht nachgerüstet.

### 16.3 Erste Prozesse
- Der **Auftragsdurchlauf** (Kapitel 2.7) als einziger, durchgehender Prozess.
- **Zwei Freigabe-Slots pro Tag** (Kapitel 12) statt Dauerbetrieb.
- **Projekt-Retro** nach jedem Auftrag → Lerngedächtnis.
- Ein lebendes **Compliance-/Red-Team-Checklisten**-Dokument statt Gremien.

### 16.4 Erste Business Unit
**Nur Unit A — AI Software Studio**, und darin bewusst nur **Low-Risk-Arbeit**: Landingpages, einfache Websites, kleine Web-Tools. Keine kritische/sicherheitsrelevante Software, bis Haftung und Versicherung stehen (Kapitel 10.12/10.13).

### 16.5 Was bleibt manuell
Die roten Linien (Kapitel 5.7) — unverhandelbar:
- Zahlungen, Rechnungsversand, Vertragsabschluss.
- Preis-/Angebotsfreigabe.
- Produktiv-Deployment.
- Beauftragung von Menschen, Behördenkontakt.
- Außenkommunikation in Reputationsfragen, strittige/Out-of-Scope-Anfragen.

### 16.6 Sichere Automationen
Was von Anfang an autonom laufen darf (Human-on-the-loop):
- Recherche, Lead-Sichtung, Entwürfe (Texte, Code, Angebote, Nachrichten).
- Bau in **Staging**, Builds, Tests, QA-Prüfung.
- Monitoring, Log-Verdichtung, Kostenabgleich, Reporting.
- Interne Aufgabenverwaltung, Doku-Erstellung.

### 16.7 Erfolgsmetriken des MVP
Der MVP gilt als gelungen, wenn nach Phase 0:
- **Liquidität:** mehrere zahlende Kunden, Liquiditätsreichweite stabil > 4 Monate.
- **Qualität:** keine peinlichen Außenfehler, Nacharbeitsquote sinkt, positive Kundenrückmeldungen.
- **Automationsgrad:** messbar steigend — derselbe Auftrag braucht weniger Gründer-Minuten als beim ersten Mal.
- **Sicherheit:** 0 rote Linien ohne Mensch berührt, lückenloses Audit-Log.
- **Reproduzierbarkeit:** ein zweiter Auftrag desselben Typs läuft spürbar schneller (Bausteine + Vorlagen greifen).

---

## 17. 12-Monats-Roadmap

Realistischer Pfad für einen Solo-Gründer, Monat für Monat. Kosten sind grobe Größenordnungen (vgl. Kapitel 9), keine Zusagen. Querschnittsrisiko über alle Monate: **OS-Bau verdrängt Umsatz** — Gegenmittel ist das feste Zeitbudget aus Kapitel 16.

| Monat | Ziel | Deliverables | Agenten | Menschen | Kosten (grob) | Hauptrisiko | Erfolgskriterium |
|---|---|---|---|---|---|---|---|
| 1 | Fundament | UG-Gründung angestoßen, Konten, Tool-Stack, OS-Grundgerüst (Audit-Log, RBAC, Secrets) | CTO, Safety | Gründer, Steuerberater, Anwalt | Gründungs- + Fixkosten | Gründung verzögert sich | OS protokolliert, rote Linien verdrahtet |
| 2 | Erster Auftragsdurchlauf | Auftragsdurchlauf end-to-end lauffähig, 1. Landingpage (Test/Bekanntenkreis) | CPO, CTO, QA | Gründer | Fixkosten + Modell | Prozess hakt | 1 Projekt sauber durch alle 12 Schritte |
| 3 | Erster zahlender Kunde | Akquise-Flow live, 1. bezahlter Auftrag, 1. Rechnung | Sales, CPO, CTO, QA, CFO, CLO | Gründer | Fixkosten + Modell | kein Lead konvertiert | 1. echter Umsatz, Kunde zufrieden |
| 4 | Wiederholbarkeit | Standardbausteine + Vorlagen, 2–3 Aufträge parallel | alle Kern-Agenten | Gründer, ggf. 1 Freelancer | Fix + Modell + Freelancer | Qualität bricht bei Menge | 2. Auftrag schneller als 1. |
| 5 | Stabilität | Wartungsverträge eingeführt, Versicherungen abgeschlossen, Red-Team #1 | CISO, QA, CFO | Gründer, Versicherer | Fix + Versicherung | Liquiditätsdelle | wiederkehrender Umsatz beginnt |
| 6 | Halbjahres-Review | Kill-or-Grow über alle Studios, KPI-Bilanz, OS-Härtung | CEO, Audit | Gründer | Fix + Modell | falsche Selbsteinschätzung | Reichweite > 4 Monate, Automationsgrad messbar gestiegen |
| 7 | Automationsgrad heben | mehr Schritte Human-on-the-loop statt -in-the-loop, Eval-System ausgebaut | CTO, QA, Safety | Gründer | Fix + Modell | Übergabe zu früh | gleicher Auftrag = weniger Gründer-Minuten |
| 8 | Skalierung der Akquise | Outbound + Referenzen + Empfehlungs-Flow systematisiert | Sales, Marketing | Gründer | Fix + Modell | Pipeline dünn | volle Pipeline, planbarer Eingang |
| 9 | Unit-Vorbereitung | zweite Unit evaluieren (z. B. Content/Automation), Scope-Test | CEO, CPO | Gründer | Fix + Modell | Verzettelung | belastbare Go/No-Go-Entscheidung |
| 10 | Zweite Unit oder Vertiefung | zweite Unit aktivieren *oder* Unit A vertiefen (Franchises) | je nach Entscheidung | Gründer, Freelancer | steigend | zu früh verbreitert | neue Einnahmequelle *oder* stärkere Marge |
| 11 | OS als Produkt prüfen | White-Label-Potenzial des OS bewerten, erster Pilot-Interessent | CPO, CTO | Gründer | Fix + Modell | OS noch nicht reif | belastbares Urteil zur Plattform-Option |
| 12 | Jahresabschluss & Plan | Jahresbilanz, Lessons Learned, Roadmap Jahr 2, Audit-Board formalisieren | CEO, CFO, Audit | Gründer, Steuerberater | Fix + Abschlusskosten | Stagnation unbemerkt | profitabel *oder* klarer, finanzierter Pfad dahin |

---

## 18. Finale Bewertung

Ehrliche Gesamteinschätzung — ohne Hype, ohne Schönfärberei.

### 18.1 Was wäre diese Firma wirklich?
Eine **von einem Menschen geführte, von Agenten betriebene Softwarefirma.** Der Mensch ist nicht der Ausführende, sondern der Eigentümer, Richtungsgeber und letzte Kontrollinstanz; die Agenten sind nicht "Mitarbeiter mit Persönlichkeit", sondern ein orchestriertes System aus spezialisierten Ausführungseinheiten. In Phase 0 ist es konkret: ein Solo-Gründer plus ein OS, das die Arbeit eines kleinen Teams leistet. Es ist kein "autonomes Unternehmen" — es ist ein **Hebel**, der einen einzelnen Menschen befähigt, wie eine Organisation zu liefern.

### 18.2 Einordnung
Sie ist von allem etwas, aber der Reihe nach:
1. **zuerst eine Softwarefirma** (sie liefert Software gegen Geld),
2. **gebaut als Agentensystem** (so produziert sie),
3. **strukturiert wie eine Holding** (Units/Studios als Portfolio),
4. **mit dem Bauplan einer Plattform** (das OS als späteres White-Label-Produkt),
5. **mit Anteilen von Beratung und digitaler Fabrik** (Prozess statt Heldentum).
Die ehrlichste Kurzform: eine **digitale Fabrik für Softwareprodukte**, deren Fließband aus Agenten besteht.

### 18.3 Alleinstellungsmerkmal
Nicht "wir benutzen AI" — das tun bald alle. Das USP ist die **Kombination aus Tempo und verdrahteter Verlässlichkeit**: geprüfte Auslieferung, gehaltene Termine, lückenlose Nachvollziehbarkeit, Mensch an genau den Stellen, an denen Verantwortung menschlich sein muss. Premium-Qualität zu einem Tempo und einer Kostenstruktur, die ein klassisches Team nicht erreicht — und Governance, die ein typisches "AI-Startup" nicht hat.

### 18.4 Wie wird sie defensible?
Nicht durch ein einzelnes Modell (austauschbar) oder ein einzelnes Tool (austauschbar). Verteidigungsfähig wird sie durch:
- das **Lerngedächtnis** — jeder Auftrag macht das System besser, das ist kumulativ und nicht kopierbar;
- die **eingespielten Prozesse und Bausteine** — Stückkosten sinken mit jedem Repo;
- die **Marke** — Vertrauen, das man nicht kaufen kann;
- das **OS selbst** — wenn es zur Plattform wird, entsteht ein zweiter, schwer angreifbarer Burggraben.

### 18.5 Was ist daran gefährlich?
Ehrlich benannt:
- **Single Point of Failure Gründer** — fällt er aus, steht alles (Kapitel 15.6).
- **Übermäßiges Vertrauen in Agenten** — der Tag, an dem eine ungeprüfte Ausgabe durchrutscht, ist ein Reputations- oder Haftungsereignis.
- **OS-Bau frisst Umsatz** — das Lieblingsrisiko technischer Gründer.
- **Regulatorik** — AI-Recht ist in Bewegung; was heute erlaubt ist, ist es morgen vielleicht anders.
- **Selbsttäuschung** — ein System, das beeindruckende Reports erzeugt, kann den Blick darauf verstellen, ob es *wirtschaftlich* trägt.

### 18.6 Was ist daran extrem wertvoll?
- **Hebel:** ein Mensch liefert wie ein Team — bei niedrigen Fixkosten.
- **Kumulatives Lernen:** das System wird mit Gebrauch besser, nicht müder.
- **Optionalität:** dieselbe Maschine kann Software liefern *und* sich selbst als Plattform verkaufen *und* in weitere Units expandieren.
- **Governance als Asset:** verdrahtete rote Linien und lückenlose Audits sind in einer AI-Welt, die das meist nicht hat, ein echter Marktvorteil.

### 18.7 Was muss zuerst gebaut werden?
In dieser Reihenfolge, nichts überspringen:
1. **Das Sicherheitsfundament** — Audit-Log, RBAC, Secrets, verdrahtete rote Linien. Vor dem ersten Agenten, der etwas Reales anfasst.
2. **Der eine Auftragsdurchlauf** — end-to-end, an einem echten kleinen Projekt.
3. **Der erste zahlende Kunde** — alles davor ist Theorie.
4. **Wiederholbarkeit** — Bausteine, Vorlagen, Lerngedächtnis, damit der zweite Auftrag billiger ist als der erste.
Erst danach: weitere Units, mehr Automationsgrad, die Plattform-Option.

---

### Schlusswort
Dieser Blueprint beschreibt kein Wunder und keinen Hype. Er beschreibt eine **disziplinierte Bauanleitung**: ein Mensch, der in command bleibt, ein System, das ausführt, dokumentiert und lernt, und eine harte Grenze — Geld, Recht, Sicherheit und Haftung bleiben menschlich. Wenn diese Firma gelingt, dann nicht, weil sie "autonom" war, sondern weil sie **ehrlich gebaut** war: Sie verspricht nichts, was sie nicht geprüft hat, und sie verbirgt nichts, was sie getan hat.

---

_Ende des Blueprints — Durchlauf 2 abgeschlossen: alle 18 Kapitel und Anhänge ausgearbeitet._
