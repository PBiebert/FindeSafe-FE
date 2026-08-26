import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { text } from "../../themes/text";
import { Logo } from "../../components/logo";
import { BackButton } from "../../components/back-button";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Logo />
        <Text style={[text.h1, styles.title]}>Datenschutzerklärung</Text>
        <Text style={[text.caption, styles.lastUpdated]}>
          Letzte Aktualisierung: 1. September 2026
        </Text>

        <Text style={[text.body, styles.paragraph]}>
          Diese Datenschutzerklärung von Philipp Alexander Biebert, tätig unter
          dem Namen FindSafe ("wir", "uns", "unser"), erklärt, wie und warum wir
          personenbezogene Daten erfassen, speichern, nutzen und weitergeben
          ("verarbeiten"), wenn Sie unsere Dienste nutzen ("die Dienste"). Das
          gilt insbesondere, wenn Sie unsere mobile Anwendung FindSafe
          herunterladen und verwenden.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          FindSafe ermöglicht es Ihnen, Ihren Standort aufzuzeichnen und mit von
          Ihnen ausgewählten Personen zu teilen. Dazu werden Geodaten über Ihr
          Mobilgerät erfasst und in einer Datenbank gespeichert. In
          Notsituationen kann die App außerdem Signaltöne abgeben oder die
          Taschenlampe Ihres Geräts steuern, um auf sich aufmerksam zu machen
          oder sich wertvolle Zeit zu verschaffen. Die von Ihnen festgelegten
          Kontaktpersonen können Sie so schnell finden. Zusätzlich bietet die
          App einen Bereich mit Hilfsorganisationen, über den Sie passende
          Unterstützung für Ihre persönliche Situation finden können.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Datenschutzerklärung soll Ihnen helfen, Ihre Datenschutzrechte
          und -möglichkeiten zu verstehen. Wir sind für die Entscheidungen über
          die Verarbeitung Ihrer personenbezogenen Daten verantwortlich. Wenn
          Sie mit unseren Richtlinien und Verfahren nicht einverstanden sind,
          nutzen Sie bitte unsere Dienste nicht.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Dienste richten sich an Nutzer ab 16 Jahren. Personen unter 16
          Jahren dürfen personenbezogene Daten nur mit vorheriger Einwilligung
          ihrer Eltern oder Erziehungsberechtigten übermitteln (Art. 8 DSGVO).
        </Text>

        {/* 1. Welche Informationen erfassen wir? */}
        <Text style={[text.h2, styles.sectionTitle]}>
          1. Welche Informationen erfassen wir?
        </Text>
        <Text style={[text.lable, styles.subTitle]}>
          Personenbezogene Daten, die Sie uns mitteilen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir erfassen personenbezogene Daten, die Sie uns freiwillig
          übermitteln, wenn Sie sich bei den Diensten anmelden, Interesse an
          Informationen über uns oder unsere Produkte äußern, an Aktivitäten im
          Rahmen der Dienste teilnehmen oder auf andere Weise mit uns Kontakt
          aufnehmen. Dazu können insbesondere gehören:
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Name, E-Mail-Adresse, Passwort sowie weitere Kontakt- oder
          Authentifizierungsdaten.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Zahlungsdaten: Wenn Sie Käufe tätigen, erfassen wir die zur
          Zahlungsabwicklung erforderlichen Daten. Zahlungen werden nicht von
          uns selbst gespeichert, sondern über RevenueCat, Apple (App Store /
          In-App-Käufe) und Google (Play Store / In-App-Käufe) abgewickelt. Die
          jeweiligen Datenschutzhinweise finden Sie unter
          revenuecat.com/privacy, apple.com/legal/privacy/de-ww und
          policies.google.com/privacy?hl=de.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Anwendungsdaten: Sofern Sie uns die entsprechende Berechtigung
          erteilen, erfassen wir zusätzlich:
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Standortinformationen – wir bitten um Zugriff auf die
          Standortinformationen Ihres Mobilgeräts, fortlaufend oder während der
          Nutzung der App, um standortbezogene Dienste bereitzustellen. Sie
          können den Zugriff jederzeit in den Geräteeinstellungen ändern.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Zugriff auf Mobilgerätefunktionen – etwa Sensoren sowie
          Taschenlampe/Blitzlicht, um die entsprechenden Notfallfunktionen der
          App bereitzustellen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Push-Benachrichtigungen – zu Ihrem Konto oder bestimmten
          App-Funktionen; Sie können diese jederzeit in den Geräteeinstellungen
          deaktivieren.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Informationen werden in erster Linie benötigt, um die Sicherheit
          und den Betrieb der App aufrechtzuerhalten, zur Fehlerbehebung sowie
          für interne Analyse- und Berichtszwecke. Alle uns übermittelten
          personenbezogenen Daten müssen wahrheitsgemäß, vollständig und korrekt
          sein; bitte informieren Sie uns über Änderungen dieser Daten.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Name und E-Mail-Adresse sind für die Registrierung und Nutzung der
          Dienste zwingend erforderlich; ohne diese Angaben können Sie kein
          Konto anlegen. Der Zugriff auf Standortdaten ist freiwillig und beruht
          auf Ihrer Einwilligung über die Berechtigungen Ihres Geräts (Art. 6
          Abs. 1 lit. a DSGVO); verweigern oder widerrufen Sie diese
          Einwilligung, können Sie die zentralen Sicherheitsfunktionen der App
          (Standortfreigabe, Benachrichtigung von Kontaktpersonen) jedoch nicht
          nutzen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir setzen keine automatisierte Entscheidungsfindung einschließlich
          Profiling im Sinne von Art. 22 DSGVO ein, die für Sie rechtliche
          Wirkung entfaltet oder Sie in ähnlicher Weise erheblich
          beeinträchtigt.
        </Text>
        <Text style={[text.lable, styles.subTitle]}>
          Automatisch erfasste Informationen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Beim Besuch oder der Nutzung unserer Dienste erfassen wir automatisch
          bestimmte Geräte- und Nutzungsdaten, etwa IP-Adresse, Browser- und
          Gerätemerkmale, Betriebssystem, Spracheinstellungen, Gerätename, Land,
          Standort sowie Informationen darüber, wie und wann Sie unsere Dienste
          nutzen. Diese Daten geben Ihre konkrete Identität nicht unmittelbar
          preis und dienen hauptsächlich der Sicherheit und dem Betrieb der
          Dienste sowie internen Analyse- und Berichtszwecken.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Dazu gehören insbesondere Protokoll- und Nutzungsdaten (z. B.
          IP-Adresse, Gerätetyp, Zeitpunkt und Umfang der Nutzung,
          Fehlerberichte), Gerätedaten (z. B. Geräte- und Anwendungskennungen,
          Hardwaremodell, Internet- bzw. Mobilfunkanbieter) sowie Standortdaten.
          Standortdaten erfassen wir z. B. über GPS, um Ihnen die
          standortbezogenen Kernfunktionen der App bereitzustellen; Sie können
          die Erfassung ablehnen, indem Sie den Zugriff verweigern oder die
          Standortbestimmung deaktivieren – bestimmte Funktionen der Dienste
          stehen dann jedoch nicht zur Verfügung.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sofern wir Google-APIs nutzen (z. B. Google Maps Platform), erfolgt
          dies im Einklang mit den Google API Services User Data Policy,
          einschließlich deren Anforderungen an eingeschränkte Nutzung.
        </Text>

        {/* 2. Wie verarbeiten wir Ihre Daten? */}
        <Text style={[text.h2, styles.sectionTitle]}>
          2. Wie verarbeiten wir Ihre Daten?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir verarbeiten Ihre personenbezogenen Daten unter anderem, um die
          Kontoerstellung und -authentifizierung zu ermöglichen und Ihr Konto
          funktionsfähig zu halten, um Ihnen die angeforderten Dienste
          bereitzustellen, um auf Ihre Anfragen zu antworten und Support zu
          leisten, um Ihnen administrative Informationen – etwa zu Änderungen
          dieser Datenschutzerklärung – zukommen zu lassen, um Ihre Bestellungen
          und Zahlungen abzuwickeln, um unsere Dienste durch Betrugsüberwachung
          und -prävention zu schützen sowie um lebenswichtige Interessen zu
          schützen oder zu wahren, etwa um Schaden abzuwenden. Zur Erkennung und
          Verhinderung des Missbrauchs von Sicherheitsfunktionen der App
          speichern wir entsprechende Daten für zwölf (12) Monate.
        </Text>

        {/* 3. Rechtsgrundlagen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          3. Auf welchen Rechtsgrundlagen verarbeiten wir Ihre Daten?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir verarbeiten Ihre personenbezogenen Daten nur, wenn wir dies für
          notwendig halten und eine gültige Rechtsgrundlage nach der DSGVO
          vorliegt:
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Einwilligung – wenn Sie uns Ihre Einwilligung zur Verarbeitung für
          einen bestimmten Zweck erteilt haben; Sie können diese jederzeit
          widerrufen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Vertragserfüllung – wenn die Verarbeitung erforderlich ist, um unsere
          vertraglichen Verpflichtungen Ihnen gegenüber zu erfüllen,
          einschließlich der Bereitstellung unserer Dienste.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Berechtigte Interessen – etwa um Probleme zu diagnostizieren und
          betrügerische Aktivitäten zu verhindern sowie die Zuverlässigkeit und
          Sicherheit der App für alle Nutzer zu gewährleisten, sofern unsere
          Interessen Ihre Grundrechte und -freiheiten nicht überwiegen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Rechtliche Verpflichtungen – etwa zur Zusammenarbeit mit
          Strafverfolgungs- oder Aufsichtsbehörden oder zur Ausübung und
          Verteidigung unserer Rechte.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Lebenswichtige Interessen – etwa in Situationen, die eine potenzielle
          Bedrohung für die Sicherheit einer Person darstellen.
        </Text>

        {/* 4. Weitergabe */}
        <Text style={[text.h2, styles.sectionTitle]}>
          4. Wann und mit wem geben wir Ihre personenbezogenen Daten weiter?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir können Ihre Daten an Dienstleister, Auftragnehmer oder Vertreter
          weitergeben, die für uns oder in unserem Auftrag Leistungen erbringen
          und dafür Zugriff auf diese Informationen benötigen, insbesondere
          Zahlungsabwickler, Dienste zur Kontoregistrierung und
          -authentifizierung sowie Webhosting-Dienstleister. Sollten wir künftig
          zusätzliche Dienstleister einsetzen, etwa zur Nutzungsanalyse oder
          Fehlerdiagnose, aktualisieren wir diese Datenschutzerklärung
          entsprechend, bevor diese Dienste zum Einsatz kommen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Darüber hinaus können wir Ihre Daten im Zusammenhang mit einer Fusion,
          dem Verkauf von Unternehmensvermögen, einer Finanzierung oder der
          Übernahme unseres Unternehmens durch ein anderes Unternehmen
          weitergeben.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sofern wir Google Maps Platform APIs einsetzen, um Ihnen
          Wegbeschreibungen oder Kartenansichten bereitzustellen, verarbeitet
          Google die dafür erforderlichen Standortdaten (u. a. über GPS, WLAN
          und Mobilfunkmasten) gemäß der eigenen Datenschutzerklärung von
          Google. Sie können den Standortzugriff hierfür jederzeit in den
          Geräteeinstellungen widerrufen.
        </Text>

        {/* 5. Cookies */}
        <Text style={[text.h2, styles.sectionTitle]}>
          5. Verwenden wir Cookies und andere Tracking-Technologien?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Soweit im Rahmen der Dienste technisch relevant, können wir Cookies
          und ähnliche Technologien einsetzen, um Informationen zu erfassen und
          zu speichern, etwa um die Sicherheit Ihres Kontos zu gewährleisten,
          Abstürze zu verhindern, Fehler zu beheben und Ihre Einstellungen zu
          speichern. Sofern wir Dritten die Nutzung solcher Technologien zu
          Analyse- oder Werbezwecken gestatten, informieren wir Sie hierüber
          gesondert.
        </Text>

        {/* 6. Internationale Übermittlung */}
        <Text style={[text.h2, styles.sectionTitle]}>
          6. Werden Ihre Daten international übermittelt?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Unsere Server befinden sich in Deutschland. Da wir Dienstleister wie
          RevenueCat, Apple und Google einsetzen, können Ihre Daten auch in
          Einrichtungen außerhalb der EU/des EWR, etwa in den USA, verarbeitet
          werden. In diesen Fällen stellen wir über geeignete Garantien –
          insbesondere die Standardvertragsklauseln der Europäischen Kommission
          – sicher, dass Ihre personenbezogenen Daten weiterhin ein angemessenes
          Schutzniveau genießen. Nähere Informationen erhalten Sie auf Anfrage.
        </Text>

        {/* 7. Speicherdauer */}
        <Text style={[text.h2, styles.sectionTitle]}>
          7. Wie lange bewahren wir Ihre Daten auf?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für
          die in dieser Datenschutzerklärung genannten Zwecke erforderlich ist,
          sofern nicht eine längere Aufbewahrung gesetzlich vorgeschrieben ist
          (z. B. aus steuer- oder handelsrechtlichen Gründen). Kein in dieser
          Datenschutzerklärung genannter Zweck erfordert, dass wir Ihre
          personenbezogenen Daten länger als drei (3) Monate nach Löschung Ihres
          Benutzerkontos aufbewahren.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Eine Ausnahme bilden Standortdaten: Diese speichern wir auf unseren
          Servern bis zu zwölf (12) Monate, auch über die aktive Nutzung hinaus.
          Grund dafür ist der Sicherheitszweck der App – im Fall eines Vorfalls
          soll der Standortverlauf auch dann noch verfügbar sein, wenn dies erst
          mit zeitlichem Abstand relevant wird. Ebenso bewahren wir Daten zur
          Missbrauchsprävention von Sicherheitsfunktionen bis zu zwölf (12)
          Monate auf.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Ist eine Löschung technisch nicht sofort möglich (z. B. bei
          Backup-Archiven), speichern wir die Daten sicher und schließen sie von
          weiterer Verarbeitung aus, bis die Löschung erfolgen kann.
        </Text>

        {/* 8. Datensicherheit */}
        <Text style={[text.h2, styles.sectionTitle]}>
          8. Wie schützen wir Ihre Daten?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir haben angemessene technische und organisatorische Maßnahmen
          getroffen, um die Sicherheit Ihrer personenbezogenen Daten zu
          gewährleisten. Trotz dieser Vorkehrungen kann die Sicherheit der
          Übertragung von Daten über das Internet oder von
          Datenspeichertechnologien nicht zu hundert Prozent garantiert werden.
          Die Übertragung personenbezogener Daten zu und von unseren Diensten
          erfolgt daher auf Ihr eigenes Risiko; bitte nutzen Sie die Dienste nur
          in einer sicheren Umgebung.
        </Text>

        {/* 9. Rechte */}
        <Text style={[text.h2, styles.sectionTitle]}>
          9. Welche Datenschutzrechte haben Sie?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Nach der DSGVO haben Sie insbesondere das Recht auf Auskunft und
          Erhalt einer Kopie Ihrer personenbezogenen Daten, auf Berichtigung
          oder Löschung, auf Einschränkung der Verarbeitung, gegebenenfalls auf
          Datenübertragbarkeit sowie darauf, nicht einer ausschließlich auf
          automatisierter Verarbeitung beruhenden Entscheidung unterworfen zu
          werden. Unter bestimmten Umständen haben Sie zudem das Recht, der
          Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Beruht unsere Verarbeitung auf Ihrer Einwilligung, können Sie diese
          jederzeit mit Wirkung für die Zukunft widerrufen, ohne dass die
          Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie können Ihre Kontoinformationen jederzeit einsehen, ändern oder Ihr
          Konto kündigen, indem Sie sich in Ihren Kontoeinstellungen anmelden
          oder uns über die unten genannten Kontaktdaten kontaktieren. Auf Ihren
          Wunsch hin löschen oder deaktivieren wir Ihr Konto und Ihre Daten aus
          unseren aktiven Datenbanken; wir behalten uns vor, bestimmte
          Informationen zu speichern, soweit dies zur Betrugsprävention,
          Fehlerbehebung, Durchsetzung unserer Nutzungsbedingungen oder
          Einhaltung gesetzlicher Pflichten erforderlich ist.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie haben außerdem das Recht, sich bei der für Sie zuständigen
          Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
          dass wir Ihre personenbezogenen Daten rechtswidrig verarbeiten – für
          Schleswig-Holstein ist dies das Unabhängige Landeszentrum für
          Datenschutz (ULD).
        </Text>

        {/* 10. Do-Not-Track */}
        <Text style={[text.h2, styles.sectionTitle]}>
          10. Reagieren wir auf "Do-Not-Track"-Signale?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Es gibt derzeit keinen einheitlichen technischen Standard zur
          Erkennung und Umsetzung von "Do-Not-Track"-Signalen. Wir reagieren
          daher aktuell nicht auf solche Browser- oder Systemsignale. Sollte
          sich künftig ein entsprechender Standard etablieren, informieren wir
          Sie darüber in einer aktualisierten Fassung dieser
          Datenschutzerklärung.
        </Text>

        {/* 11. Aktualisierungen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          11. Wird diese Datenschutzerklärung aktualisiert?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren;
          das Datum der letzten Aktualisierung finden Sie oben auf dieser Seite.
          Bei wesentlichen Änderungen informieren wir Sie durch einen deutlich
          sichtbaren Hinweis in der App oder durch eine direkte
          Benachrichtigung.
        </Text>

        {/* 12. Kontakt */}
        <Text style={[text.h2, styles.sectionTitle]}>
          12. Wie können Sie uns bezüglich dieser Erklärung kontaktieren?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Bei Fragen oder Anmerkungen zu dieser Datenschutzerklärung erreichen
          Sie uns unter:
        </Text>
        <View style={styles.contactBlock}>
          <Text style={text.body}>Philipp Alexander Biebert</Text>
          <Text style={text.body}>An der Logleine 7</Text>
          <Text style={text.body}>23570 Lübeck, Deutschland</Text>
          <Text style={text.body}>Telefon: 01737984314</Text>
          <Text style={text.body}>E-Mail: contact@philippbiebert.de</Text>
        </View>

        {/* 13. Einsicht, Aktualisierung, Löschung */}
        <Text style={[text.h2, styles.sectionTitle]}>
          13. Wie können Sie die von uns erfassten Daten einsehen, aktualisieren
          oder löschen lassen?
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie haben das Recht, Auskunft über die von uns über Sie erhobenen
          personenbezogenen Daten zu verlangen, Einzelheiten zu deren
          Verarbeitung zu erfahren, unrichtige Daten berichtigen oder Ihre
          personenbezogenen Daten löschen zu lassen. Sie können außerdem Ihre
          Einwilligung zur Verarbeitung jederzeit widerrufen. Diese Rechte
          können im Einzelfall gesetzlich eingeschränkt sein. Um Ihre
          personenbezogenen Daten einzusehen, zu aktualisieren oder löschen zu
          lassen, kontaktieren Sie uns bitte unter den oben genannten
          Kontaktdaten.
        </Text>
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
  subTitle: {
    marginTop: 12,
    marginBottom: 4,
  },
  paragraph: {
    marginBottom: 12,
    lineHeight: 22,
  },
  contactBlock: {
    marginBottom: 12,
  },
});
