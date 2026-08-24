import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "../../components/text";
import { colors } from "../../themes/colors";
import { Logo } from "../../components/logo";

export default function WithdrawalScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Logo />
      <Text variant="h1" style={styles.title}>
        Widerrufsbelehrung
      </Text>
      <Text variant="caption" style={styles.lastUpdated}>
        Letzte Aktualisierung: 1. September 2026
      </Text>

      <Text variant="h2" style={styles.sectionTitle}>
        Widerrufsrecht
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen.
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
        Vertragsabschlusses.
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
      </Text>
      <View style={styles.contactBlock}>
        <Text variant="body">Philipp Alexander Biebert</Text>
        <Text variant="body">An der Logleine 7</Text>
        <Text variant="body">23570 Lübeck, Deutschland</Text>
        <Text variant="body">Telefon: 01737984314</Text>
        <Text variant="body">E-Mail: contact@philippbiebert.de</Text>
      </View>
      <Text variant="body" style={styles.paragraph}>
        mittels einer eindeutigen Erklärung (z. B. ein mit der Post
        versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen
        Vertrag zu widerrufen, informieren. Sie können dafür das unten
        stehende Muster-Widerrufsformular verwenden, das jedoch nicht
        vorgeschrieben ist.
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.
      </Text>

      <Text variant="h2" style={styles.sectionTitle}>
        Folgen des Widerrufs
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
        die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
        Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
        ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
        wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
        Ihnen wegen dieser Rückzahlung Entgelte berechnet.
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Haben Sie verlangt, dass die Dienstleistungen während der
        Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen
        Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie
        uns von der Ausübung des Widerrufsrechts hinsichtlich dieses
        Vertrags unterrichten, bereits erbrachten Dienstleistungen im
        Vergleich zum Gesamtumfang der im Vertrag vorgesehenen
        Dienstleistungen entspricht.
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Da Sie bereits mit der Registrierung Zugriff auf die Dienste
        erhalten, gilt dies als ausdrückliches Verlangen, dass wir mit der
        Ausführung vor Ablauf der Widerrufsfrist beginnen. Während der
        kostenlosen Testphase entstehen Ihnen dadurch keine Kosten. Nach
        Ablauf der vierzehntägigen Widerrufsfrist erlischt das Widerrufsrecht;
        eine spätere Kündigung des Abonnements richtet sich nach Abschnitt 6
        unserer Allgemeinen Geschäftsbedingungen.
      </Text>

      <Text variant="h2" style={styles.sectionTitle}>
        Muster-Widerrufsformular
      </Text>
      <Text variant="body" style={styles.paragraph}>
        Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
        Formular aus und senden Sie es an die oben genannte Adresse.
      </Text>
      <View style={styles.formBlock}>
        <Text variant="body" style={styles.formLine}>
          An: Philipp Alexander Biebert, An der Logleine 7, 23570 Lübeck,
          E-Mail: contact@philippbiebert.de
        </Text>
        <Text variant="body" style={styles.formLine}>
          Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die
          Erbringung der folgenden Dienstleistung: FindSafe-Abonnement
        </Text>
        <Text variant="body" style={styles.formLine}>
          Bestellt am: ______________________
        </Text>
        <Text variant="body" style={styles.formLine}>
          Name des Verbrauchers: ______________________
        </Text>
        <Text variant="body" style={styles.formLine}>
          Anschrift des Verbrauchers: ______________________
        </Text>
        <Text variant="body" style={styles.formLine}>
          In der App registrierte E-Mail-Adresse des Verbrauchers:
          ______________________
        </Text>
        <Text variant="body" style={styles.formLine}>
          Unterschrift des Verbrauchers (nur bei Mitteilung auf Papier):
          ______________________
        </Text>
        <Text variant="body" style={styles.formLine}>
          Datum: ______________________
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 48,
  },
  title: {
    marginTop: 12,
    marginBottom: 4,
  },
  lastUpdated: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 12,
    lineHeight: 22,
  },
  contactBlock: {
    marginBottom: 12,
  },
  formBlock: {
    marginBottom: 12,
  },
  formLine: {
    marginBottom: 10,
    lineHeight: 22,
  },
});
