export const de = {
  language: {
    flag: "🇩🇪",
    name: "Deutsch",
  },
  errors: {
    needMoreParticipants: "Mindestens zwei Teilnehmer benötigt.",
    invalidPairs: "Konnte mit der Konfiguration keine Zuweisungen erzeugen. Bitte überprüfen und neu generieren.",
    multipleMustRules: "Mehrere MUSS Regeln gefunden.",
    conflictingRules: "Widersprüchliche MUSS und DARF NICHT Regel",
    emptyName: "Leere Name",
    duplicateName: "Doppelter Name: {{name}}",
    invalidRuleFormat: "Format ungültig: {{rule}}",
    unknownParticipant: "Unbekannter Teilnehmernahme in Regel: {{name}}",
    noValidReceivers: "Keine gültigen Empfänger für diesen Teilnehmer übrig",
    line: "Zeil {{number}}"
  },
  home: {
    vanity: "Code eigens von Mathis zugeschnitten",
    sponsor: "",
    title: "Wichtelhelfer",
    explanation: [
      "Herzlich Willkommen! Dieses Werkzeug hilft dabei, Wichteln zu losen. Einfach alle Teilnehmer eingeben, und das Tool weist Wichtelpartner anhand der Regeln zu.",
      "Das Tool gibt einen einzigartigen Link pro Teilnehmer, welcher geteilt werden kann. [<exampleLink>Beispiellink</exampleLink>]",
      "Keine Accounts, keine E-Mails, kein Stress. Kein Backend.",
    ].map(line => `<p>${line}</p>`).join(''),
    exampleLink: "Beispiellink",
  },
  pairing: {
    title: "Dein Wichtelpartner",
    assignment: "Herzlich Willkommen, <name/>! Du wurdest erwählt ein Geschenk für:",
    loading: "Lädt...",
    error: "Nachricht konnte nicht entschlüsselt werden. Link überprüfen.",
    startYourOwn: "Wichteln starten!"
  },
  participants: {
    title: "Teilnehmer",
    generationWarning: "Wichtig: Jede Änderung an der Teilnehmerliste oder den Einstellungen erfordert das Erzeugen neuer Zuweisungen.", 
    addPerson: "Person hinzufügen",
    generatePairs: "Zuweisungen erzeugen",
    enterName: "Teilnehmername eingeben",
    editRules: "Regeln bearbeiten",
    removeParticipant: "Teilnehmer entfernen",
    rulesCount_one: "{{count}} Regel gesetzt",
    rulesCount_other: "{{count}} Regeln gesetzt",
    switchToFormView: "Zu Formularansicht wechseln",
    switchToTextView: "Zu Textansicht wechseln"
  },
  rules: {
    title: "Regeln für {{name}}",
    mustBePairedWith: "Muss zugewiesen werden zu",
    mustNotBePairedWith: "Darf nicht zugewisen werden zu",
    selectParticipant: "Wähle einen anderen Teilnehmer",
    removeRule: "Regel entfernen",
    addMustRule: "Zuweisung erzwingen",
    addMustNotRule: "Zuweisung verhindern",
    cancel: "Abbrechen",
    saveRules: "Regeln speichern",
    hintLabel: 'Geschenkwunsch',
    hintPlaceholder: 'Hinweis zu Wünschen angeben (optional)',
  },
  links: {
    title: "Links zum Teilen",
    warningParticipantsChanged: "Achtung: Teilnehmer oder Regeln haben sich seit Generierung der Links geändert.",
    resetAssignments: "Zuweisung neu losen",
    shareInstructions: "Links nur mit dem jeweiligen Teilnehmer teilen",
    exportCSV: "Als CSV exportieren",
    copySecretLink: "Geheimen Link kopieren",
    linkCopied: "Kopiert!",
    for: "für"
  },
  settings: {
    title: "Einstellungen",
    instructions: "Weitere Hinweise",
    instructionsPlaceholder: "z.B.: Budget, Datum, Ort...",
    instructionsHelp: "Diese Hinweise werden allen Teilnehmern angezeigt. Halte dich kurz: Hinweise verlängern die URL."
  },
}; 
