import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { text } from "../../themes/text";
import { spacing } from "../../themes/spacing";
import { Logo } from "../../components/logo";
import { BackButton } from "../../components/back-button";

export default function WithdrawalScreen() {
  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Logo />
        <Text style={[text.h1, styles.title]}>Widerrufsbelehrung</Text>
        <Text style={[text.caption, styles.lastUpdated]}>
          Letzte Aktualisierung: 1. September 2026
        </Text>

        <Text style={[text.h2, styles.sectionTitle]}>Widerrufsrecht</Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
          Vertragsabschlusses.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
        </Text>
        <View style={styles.contactBlock}>
          <Text style={text.body}>Philipp Alexander Biebert</Text>
          <Text style={text.body}>An der Logleine 7</Text>
          <Text style={text.body}>23570 Lübeck, Deutschland</Text>
          <Text style={text.body}>Telefon: 01737984314</Text>
          <Text style={text.body}>E-Mail: contact@philippbiebert.de</Text>
        </View>
        <Text style={[text.body, styles.paragraph]}>
          mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter
          Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu
          widerrufen, informieren. Sie können dafür das unten stehende
          Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben
          ist.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </Text>

        <Text style={[text.h2, styles.sectionTitle]}>Folgen des Widerrufs</Text>
        <Text style={[text.body, styles.paragraph]}>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
          vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
          Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
          Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
          ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
          wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
          Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Haben Sie verlangt, dass die Dienstleistungen während der
          Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen
          Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie
          uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags
          unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum
          Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Da Sie bereits mit der Registrierung Zugriff auf die Dienste erhalten,
          gilt dies als ausdrückliches Verlangen, dass wir mit der Ausführung
          vor Ablauf der Widerrufsfrist beginnen. Während der kostenlosen
          Testphase entstehen Ihnen dadurch keine Kosten. Nach Ablauf der
          vierzehntägigen Widerrufsfrist erlischt das Widerrufsrecht; eine
          spätere Kündigung des Abonnements richtet sich nach Abschnitt 6
          unserer Allgemeinen Geschäftsbedingungen.
        </Text>

        <Text style={[text.h2, styles.sectionTitle]}>
          Muster-Widerrufsformular
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
          Formular aus und senden Sie es an die oben genannte Adresse.
        </Text>
        <View style={styles.formBlock}>
          <Text style={[text.body, styles.formLine]}>
            An: Philipp Alexander Biebert, An der Logleine 7, 23570 Lübeck,
            E-Mail: contact@philippbiebert.de
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die
            Erbringung der folgenden Dienstleistung: FindSafe-Abonnement
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Bestellt am: ______________________
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Name des Verbrauchers: ______________________
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Anschrift des Verbrauchers: ______________________
          </Text>
          <Text style={[text.body, styles.formLine]}>
            In der App registrierte E-Mail-Adresse des Verbrauchers:
            ______________________
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Unterschrift des Verbrauchers (nur bei Mitteilung auf Papier):
            ______________________
          </Text>
          <Text style={[text.body, styles.formLine]}>
            Datum: ______________________
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  contentContainer: {
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.giant,
  },
  title: {
    marginTop: spacing.xxxl,
    marginBottom: spacing.xs,
  },
  lastUpdated: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginTop: spacing.xxl,
    marginBottom: spacing.s,
  },
  paragraph: {
    marginBottom: spacing.m,
    lineHeight: 22,
  },
  contactBlock: {
    marginBottom: spacing.m,
  },
  formBlock: {
    marginBottom: spacing.m,
  },
  formLine: {
    marginBottom: spacing.m,
    lineHeight: 22,
  },
});
