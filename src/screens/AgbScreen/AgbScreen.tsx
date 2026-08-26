import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../themes/colors";
import { text } from "../../themes/text";
import { spacing } from "../../themes/spacing";
import { Logo } from "../../components/logo";
import { BackButton } from "../../components/back-button";

export default function AgbScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Logo />
        <Text style={[text.h1, styles.title]}>
          Allgemeine Geschäftsbedingungen
        </Text>
        <Text style={[text.caption, styles.lastUpdated]}>
          Letzte Aktualisierung: 1. September 2026
        </Text>

        <Text style={[text.body, styles.paragraph]}>
          Anbieter ist Philipp Alexander Biebert, tätig unter dem Namen FindSafe
          ("wir", "uns", "unser"), ansässig in Deutschland, An der Logleine 7,
          23570 Lübeck.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir betreiben die mobile Anwendung FindSafe (die "App") sowie alle
          damit verbundenen Produkte und Dienstleistungen, auf die diese
          Geschäftsbedingungen verweisen (gemeinsam die "Dienste").
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          FindSafe ermöglicht es Ihnen, Ihren Standort aufzuzeichnen und mit von
          Ihnen ausgewählten Personen zu teilen. Dazu werden Geodaten über Ihr
          Mobilgerät erfasst und in einer Datenbank gespeichert. In
          Notsituationen kann die App außerdem Signaltöne abgeben oder die
          Taschenlampe Ihres Geräts steuern, um auf sich aufmerksam zu machen
          oder sich wertvolle Zeit zu verschaffen. Die von Ihnen festgelegten
          Kontaktpersonen können Sie über die Standortfreigabe schnell finden.
          Zusätzlich bietet die App einen Bereich mit Hilfsorganisationen, über
          den Sie passende Unterstützung für Ihre persönliche Situation finden
          können.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie erreichen uns telefonisch unter 01737984314, per E-Mail an
          contact@philippbiebert.de oder postalisch unter An der Logleine 7,
          23570 Lübeck.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Geschäftsbedingungen bilden eine rechtsverbindliche Vereinbarung
          zwischen Ihnen und Philipp Alexander Biebert und regeln Ihren Zugriff
          auf und Ihre Nutzung der Dienste. Mit der Nutzung der Dienste
          bestätigen Sie, dass Sie diese Bedingungen gelesen, verstanden und
          akzeptiert haben. Stimmen Sie ihnen nicht zu, ist Ihnen die Nutzung
          der Dienste untersagt.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Über geplante Änderungen an den Diensten informieren wir Sie vorab per
          E-Mail an die von Ihnen hinterlegte Adresse. Geänderte Bedingungen
          treten mit ihrer Veröffentlichung oder Benachrichtigung in Kraft.
          Nutzen Sie die Dienste danach weiter, gelten die geänderten
          Bedingungen als akzeptiert.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Dienste richten sich an Nutzer ab 16 Jahren. Personen unter 16
          Jahren dürfen die Dienste nur mit vorheriger Einwilligung ihrer Eltern
          oder Erziehungsberechtigten nutzen; diese müssen die
          Geschäftsbedingungen gelesen und akzeptiert haben, bevor die Dienste
          genutzt werden. Dieses Mindestalter ergibt sich aus den
          datenschutzrechtlichen Vorgaben zur Einwilligungsfähigkeit (Art. 8
          DSGVO) und ist unabhängig von etwaigen Altersangaben in den
          Store-Richtlinien von Apple oder Google zu beachten.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir empfehlen, eine Kopie dieser Geschäftsbedingungen für Ihre
          Unterlagen aufzubewahren.
        </Text>

        {/* 1. Unsere Dienstleistungen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          1. Unsere Dienstleistungen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die über die Dienste bereitgestellten Informationen sind nicht für
          Personen oder Organisationen in Ländern bestimmt, in denen ihre
          Nutzung gegen geltendes Recht verstößt oder eine Registrierung
          erfordern würde. Wer von einem anderen Standort aus zugreift, tut dies
          eigenverantwortlich und ist selbst für die Einhaltung der dort
          geltenden Gesetze zuständig.
        </Text>

        {/* 2. Geistiges Eigentum */}
        <Text style={[text.h2, styles.sectionTitle]}>
          2. Geistiges Eigentum
        </Text>
        <Text style={[text.lable, styles.subTitle]}>
          Unser geistiges Eigentum
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir sind Inhaber oder Lizenznehmer sämtlicher Rechte an den Diensten,
          einschließlich Quellcode, Datenbanken, Funktionen, Software, Design,
          sowie Audio-, Video-, Text-, Foto- und Grafikdateien ("Inhalte") und
          der darin enthaltenen Marken und Logos ("Marken").
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Inhalte und Marken sind urheber- und markenrechtlich geschützt und
          werden ausschließlich für Ihre persönliche, nichtkommerzielle Nutzung
          bereitgestellt.
        </Text>
        <Text style={[text.lable, styles.subTitle]}>
          Ihre Nutzung unserer Dienste
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Solange Sie diese Geschäftsbedingungen einhalten, insbesondere den
          Abschnitt "Verbotene Aktivitäten", gewähren wir Ihnen eine nicht
          ausschließliche, nicht übertragbare und widerrufliche Lizenz, um auf
          die Dienste zuzugreifen und Inhalte, zu denen Sie berechtigten Zugriff
          haben, für Ihre persönliche, nichtkommerzielle Nutzung herunterzuladen
          oder auszudrucken.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Ohne unsere vorherige schriftliche Genehmigung dürfen die Dienste,
          Inhalte oder Marken nicht kopiert, reproduziert, veröffentlicht,
          verbreitet, verkauft, lizenziert oder anderweitig kommerziell genutzt
          werden.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Für eine darüberhinausgehende Nutzung wenden Sie sich bitte an
          contact@philippbiebert.de. Erteilen wir eine Erlaubnis zur
          Veröffentlichung oder Vervielfältigung, müssen Sie uns als Eigentümer
          bzw. Lizenzgeber kennzeichnen und alle Urheberrechts- und
          Eigentumshinweise sichtbar lassen.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Alle nicht ausdrücklich gewährten Rechte behalten wir uns vor. Ein
          Verstoß gegen diese Rechte stellt einen wesentlichen Verstoß gegen
          diese Geschäftsbedingungen dar und führt zur sofortigen Beendigung
          Ihres Nutzungsrechts.
        </Text>
        <Text style={[text.lable, styles.subTitle]}>Ihre Einsendungen</Text>
        <Text style={[text.body, styles.paragraph]}>
          Bitte lesen Sie diesen Abschnitt und "Verbotene Aktivitäten"
          sorgfältig, um zu verstehen, welche Rechte Sie uns einräumen und
          welche Pflichten Sie beim Veröffentlichen oder Hochladen von Inhalten
          haben.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Einsendungen: Senden Sie uns direkt Fragen, Kommentare, Vorschläge
          oder sonstiges Feedback ("Einsendungen"), räumen Sie uns daran ein
          einfaches, zeitlich und räumlich unbeschränktes Nutzungsrecht ein. Wir
          dürfen Einsendungen ohne Anerkennung oder Entschädigung für jeden
          rechtmäßigen Zweck nutzen und verbreiten. Ihr Urheberrecht als solches
          bleibt hiervon unberührt.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie sind für Ihre Beiträge verantwortlich: Mit jeder Einsendung
          bestätigen Sie, diese Geschäftsbedingungen gelesen zu haben und
          zuzustimmen, und dass Ihre Inhalte nicht rechtswidrig, hasserfüllt,
          schädlich, verleumderisch, obszön, missbräuchlich, diskriminierend,
          bedrohlich, sexuell explizit, falsch oder irreführend sind.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Soweit gesetzlich zulässig, verzichten Sie auf die Geltendmachung
          Ihrer Urheberpersönlichkeitsrechte an solchen Einsendungen, soweit
          dies für die vorgenannte Nutzung erforderlich ist. Sie versichern
          außerdem, dass die Einsendung von Ihnen selbst stammt oder Sie über
          die notwendigen Rechte verfügen, sie zu übermitteln, dass Sie
          berechtigt sind, uns die genannten Rechte einzuräumen, und dass die
          Einsendung keine vertraulichen Informationen enthält.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie tragen die alleinige Verantwortung für Ihre Einsendungen und
          erklären sich bereit, uns Verluste zu erstatten, die aus einem Verstoß
          gegen diesen Abschnitt, gegen Rechte Dritter oder gegen geltendes
          Recht entstehen.
        </Text>

        {/* 3. Benutzerdarstellungen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          3. Benutzerdarstellungen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Mit der Nutzung der Dienste bestätigen Sie, dass Ihre
          Registrierungsangaben wahr, aktuell und vollständig sind, dass Sie
          geschäftsfähig und mindestens 16 Jahre alt sind, dass Sie – falls
          jünger als 16 Jahre – die Einwilligung Ihrer Eltern oder
          Erziehungsberechtigten haben, dass Sie nicht automatisiert auf die
          Dienste zugreifen, und dass Ihre Nutzung weder gegen diese
          Geschäftsbedingungen noch gegen geltendes Recht verstößt.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Machen Sie falsche oder unvollständige Angaben, können wir Ihr Konto
          sperren oder kündigen und Ihnen die weitere Nutzung verweigern.
        </Text>

        {/* 4. Benutzerregistrierung */}
        <Text style={[text.h2, styles.sectionTitle]}>
          4. Benutzerregistrierung
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Für die Nutzung der Dienste kann eine Registrierung erforderlich sein.
          Sie sind verpflichtet, Ihr Passwort vertraulich zu behandeln, und
          haften für sämtliche Aktivitäten unter Ihrem Konto. Wir können einen
          von Ihnen gewählten Benutzernamen entfernen oder ändern, wenn wir ihn
          als unangemessen oder anstößig einstufen.
        </Text>

        {/* 5. Käufe und Zahlung */}
        <Text style={[text.h2, styles.sectionTitle]}>5. Käufe und Zahlung</Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir akzeptieren PayPal als Zahlungsmethode. Sie verpflichten sich,
          aktuelle und korrekte Kauf- und Kontoinformationen anzugeben und diese
          – etwa E-Mail-Adresse und Zahlungsmethode – umgehend zu aktualisieren.
          Alle in den Diensten angezeigten Preise sind Endpreise. Da wir die
          Kleinunternehmerregelung nach § 19 UStG in Anspruch nehmen, weisen wir
          derzeit keine Umsatzsteuer gesondert aus. Zahlungen erfolgen in Euro;
          wir behalten uns vor, Preise für zukünftige Abrechnungszeiträume zu
          ändern und Sie darüber vorab zu informieren.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Mit Ihrer Bestellung autorisieren Sie uns, den fälligen Betrag über
          Ihre gewählte Zahlungsmethode einzuziehen. Preisfehler können wir auch
          dann noch korrigieren, wenn die Zahlung bereits eingegangen ist.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir behalten uns vor, Bestellungen abzulehnen sowie Mengen pro Person,
          Haushalt oder Bestellung zu begrenzen – auch über mehrere Bestellungen
          mit demselben Konto oder derselben Zahlungsmethode hinweg.
        </Text>

        {/* 6. Abonnements */}
        <Text style={[text.h2, styles.sectionTitle]}>6. Abonnements</Text>
        <Text style={[text.body, styles.paragraph]}>
          Abrechnung und Verlängerung: Ihr Abonnement verlängert sich
          automatisch, bis Sie es kündigen. Sie stimmen zu, dass wir Ihre
          Zahlungsmethode regelmäßig belasten, ohne dass eine erneute Zustimmung
          für jede einzelne Abbuchung erforderlich ist. Der Abrechnungszyklus
          ist monatlich.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Kostenlose Testversion: Neue Nutzer erhalten eine 30-tägige kostenlose
          Testphase. Nach deren Ende wird das gewählte Abonnement abgerechnet.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Kündigung: Sie können Ihr Abonnement jederzeit über die
          Kündigungsfunktion in Ihrem Profil unter "Abo" kündigen. Die Kündigung
          wird zum Ende des laufenden Zahlungszeitraums wirksam. Bei Fragen
          erreichen Sie uns unter contact@philippbiebert.de.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Gebührenänderungen: Wir können die Abonnementgebühr ändern und
          informieren Sie über Preisänderungen gemäß geltendem Recht.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Widerrufsrecht: Als Verbraucher steht Ihnen bei Abschluss dieses
          Vertrags ein gesetzliches Widerrufsrecht zu. Einzelheiten entnehmen
          Sie bitte unserer{" "}
          <Text
            style={text.link}
            onPress={() => navigation.navigate("Withdrawal")}
          >
            Widerrufsbelehrung
          </Text>
          .
        </Text>

        {/* 7. Software */}
        <Text style={[text.h2, styles.sectionTitle]}>7. Software</Text>
        <Text style={[text.body, styles.paragraph]}>
          Stellen wir Software im Zusammenhang mit den Diensten bereit und liegt
          ihr eine Endbenutzer-Lizenzvereinbarung ("EULA") bei, regelt diese die
          Nutzung. Andernfalls gewähren wir eine nicht ausschließliche,
          widerrufliche, persönliche und nicht übertragbare Lizenz zur Nutzung
          im Rahmen der Dienste. Die Software wird ohne Gewährleistung "wie
          besehen" bereitgestellt; das Nutzungsrisiko tragen Sie.
        </Text>

        {/* 8. Verbotene Aktivitäten */}
        <Text style={[text.h2, styles.sectionTitle]}>
          8. Verbotene Aktivitäten
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie dürfen die Dienste nur zu dem vorgesehenen Zweck nutzen, nicht
          kommerziell ohne unsere Genehmigung. Insbesondere untersagt ist:
          systematisches Abrufen von Daten zum Aufbau eigener Sammlungen oder
          Datenbanken; Täuschung oder Betrug, etwa um an Passwörter zu gelangen;
          das Umgehen oder Deaktivieren von Sicherheitsfunktionen; Rufschädigung
          gegenüber uns oder den Diensten; die missbräuchliche Nutzung
          erhaltener Informationen zur Belästigung anderer; missbräuchliche
          Nutzung unseres Supports oder falsche Missbrauchsmeldungen; jede
          Nutzung, die gegen geltendes Recht verstößt; unbefugtes Einbetten oder
          Verlinken der Dienste; das Hochladen von Viren oder anderer
          Schadsoftware; automatisierte Nutzung über Skripte, Bots oder
          Data-Mining-Tools; das Entfernen von Urheberrechtshinweisen; das
          Vortäuschen einer fremden Identität; das Hochladen von Materialien zur
          unbefugten Datensammlung (z. B. Spyware); das Stören oder übermäßige
          Belasten der Dienste oder verbundener Netzwerke; die Belästigung oder
          Einschüchterung unserer Mitarbeiter; das Umgehen von
          Zugriffsbeschränkungen; das Dekompilieren, Zurückentwickeln oder
          Anpassen der Software, soweit gesetzlich nicht gestattet; die Nutzung
          von Scrapern oder Bots zum Zugriff auf die Dienste; die Nutzung eines
          Einkaufsagenten für Käufe; das Sammeln von E-Mail-Adressen zu
          Werbezwecken; sowie die Nutzung der Dienste, um mit uns in Wettbewerb
          zu treten oder für eigene Waren und Dienstleistungen zu werben.
        </Text>

        {/* 9. Von Benutzern generierte Beiträge */}
        <Text style={[text.h2, styles.sectionTitle]}>
          9. Von Benutzern generierte Beiträge
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Derzeit bietet der Dienst keine Möglichkeit, eigene Inhalte
          einzureichen oder zu veröffentlichen. Sollten wir diese Möglichkeit
          künftig anbieten ("Beiträge"), versichern Sie mit deren Erstellung,
          dass diese keine Rechte Dritter verletzen, nicht rechtswidrig,
          irreführend, obszön oder diskriminierend sind, dass Sie über alle
          notwendigen Rechte an den Beiträgen und den darin abgebildeten
          Personen verfügen, und dass die Beiträge insbesondere den Schutz von
          Minderjährigen nicht verletzen. Verstöße können zur Kündigung oder
          Sperrung Ihres Nutzungsrechts führen.
        </Text>

        {/* 10. Beitragslizenz */}
        <Text style={[text.h2, styles.sectionTitle]}>10. Beitragslizenz</Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie stimmen zu, dass wir auf die von Ihnen bereitgestellten
          Informationen, personenbezogenen Daten und Einstellungen zugreifen,
          sie speichern, verarbeiten und nutzen dürfen. Übermitteln Sie
          Vorschläge oder Feedback, dürfen wir dieses ohne Entschädigung für
          jeden Zweck verwenden.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir erheben keinen Eigentumsanspruch an Ihren Beiträgen – Sie behalten
          das volle Eigentum daran. Wir haften nicht für Aussagen in Ihren
          Beiträgen; die Verantwortung dafür liegt allein bei Ihnen.
        </Text>

        {/* 11. Mobile Anwendungslizenz */}
        <Text style={[text.h2, styles.sectionTitle]}>
          11. Mobile Anwendungslizenz
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Beim Zugriff über die App gewähren wir Ihnen ein widerrufliches, nicht
          ausschließliches und nicht übertragbares Recht, die App auf Geräten in
          Ihrem Besitz zu installieren und zu nutzen. Untersagt sind
          insbesondere: Dekompilieren, Zurückentwickeln oder Erstellen
          abgeleiteter Werke; das Entfernen von Eigentumshinweisen; kommerzielle
          oder anderweitig nicht vorgesehene Nutzung; die gleichzeitige Nutzung
          auf mehreren Geräten oder durch mehrere Nutzer; sowie die Nutzung zur
          Entwicklung eines konkurrierenden Produkts.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Beim Bezug über den Apple App Store oder Google Play gelten zusätzlich
          deren eigene Nutzungsbedingungen. Für Wartung und Support der App ist
          der App-Vertreiber nicht verantwortlich; bei Gewährleistungsmängeln
          kann er Ihnen den gezahlten Kaufpreis erstatten. Sie versichern, sich
          nicht in einem Land zu befinden, das einem US-Embargo unterliegt oder
          auf einer Sanktionsliste steht. Die App-Vertreiber sind
          Drittbegünstigte dieser Lizenz und können ihre Bestimmungen Ihnen
          gegenüber durchsetzen.
        </Text>

        {/* 12. Websites und Inhalte Dritter */}
        <Text style={[text.h2, styles.sectionTitle]}>
          12. Websites und Inhalte Dritter
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Dienste können Links zu Websites Dritter sowie Inhalte Dritter
          enthalten. Wir prüfen diese nicht und übernehmen keine Verantwortung
          dafür. Verlassen Sie unsere Dienste über solche Links, geschieht dies
          auf eigenes Risiko und diese Geschäftsbedingungen gelten dann nicht
          mehr. Käufe über Websites Dritter erfolgen ausschließlich zwischen
          Ihnen und dem jeweiligen Anbieter.
        </Text>

        {/* 13. Dienstleistungsmanagement */}
        <Text style={[text.h2, styles.sectionTitle]}>
          13. Dienstleistungsmanagement
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir behalten uns vor, die Dienste auf Verstöße gegen diese
          Geschäftsbedingungen zu überwachen, rechtliche Schritte gegen Verstöße
          einzuleiten, Beiträge nach eigenem Ermessen abzulehnen oder
          einzuschränken, übermäßig belastende Inhalte zu entfernen und die
          Dienste so zu verwalten, dass ihr ordnungsgemäßes Funktionieren
          gewährleistet bleibt.
        </Text>

        {/* 14. Datenschutzrichtlinie */}
        <Text style={[text.h2, styles.sectionTitle]}>
          14. Datenschutzrichtlinie
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Uns ist Datenschutz wichtig. Mit der Nutzung der Dienste stimmen Sie
          unserer{" "}
          <Text
            style={text.link}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            Datenschutzerklärung
          </Text>{" "}
          zu, die Bestandteil dieser Geschäftsbedingungen ist. Die Dienste
          werden in Deutschland gehostet; greifen Sie aus einer Region mit
          abweichenden Datenschutzgesetzen zu, willigen Sie mit der weiteren
          Nutzung in die Übertragung und Verarbeitung Ihrer Daten in Deutschland
          ein.
        </Text>

        {/* 15. Laufzeit und Kündigung */}
        <Text style={[text.h2, styles.sectionTitle]}>
          15. Laufzeit und Kündigung
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Geschäftsbedingungen gelten für die gesamte Dauer Ihrer Nutzung
          der Dienste. Wir können den Zugriff jederzeit und ohne Vorankündigung
          verweigern, insbesondere bei Verstößen gegen diese Bedingungen oder
          geltendes Recht, Ihr Konto löschen und veröffentlichte Inhalte
          entfernen. Nach einer Sperrung oder Kündigung ist es Ihnen untersagt,
          ein neues Konto unter Ihrem eigenen, einem falschen oder einem fremden
          Namen zu registrieren.
        </Text>

        {/* 16. Änderungen und Unterbrechungen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          16. Änderungen und Unterbrechungen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir können die Inhalte der Dienste jederzeit ändern oder entfernen,
          ohne dafür zu haften. Eine ständige Verfügbarkeit können wir nicht
          garantieren; Wartung oder technische Probleme können zu
          Unterbrechungen führen. Aus diesen Geschäftsbedingungen ergibt sich
          keine Verpflichtung zu Wartung, Support oder Updates.
        </Text>

        {/* 17. Anwendbares Recht */}
        <Text style={[text.h2, styles.sectionTitle]}>
          17. Anwendbares Recht
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Geschäftsbedingungen unterliegen deutschem Recht; das
          UN-Kaufrecht (CISG) ist ausgeschlossen. Verbraucher mit gewöhnlichem
          Aufenthalt in der EU genießen zusätzlich den Schutz der zwingenden
          Vorschriften ihres Wohnsitzlandes. Sie und wir unterwerfen uns der
          nicht ausschließlichen Zuständigkeit der Gerichte in Lübeck;
          Verbraucherschutzansprüche können Sie zudem in Ihrem EU-Wohnsitzland
          geltend machen.
        </Text>

        {/* 18. Streitbeilegung */}
        <Text style={[text.h2, styles.sectionTitle]}>18. Streitbeilegung</Text>
        <Text style={[text.body, styles.paragraph]}>
          Bei Streitigkeiten aus diesen Geschäftsbedingungen sind ausschließlich
          die ordentlichen Gerichte gemäß Abschnitt 17 zuständig; ein
          Schiedsverfahren findet nicht statt. Wir sind nicht verpflichtet und
          grundsätzlich nicht bereit, an einem Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle im Sinne des
          Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen.
        </Text>

        {/* 19. Korrekturen */}
        <Text style={[text.h2, styles.sectionTitle]}>19. Korrekturen</Text>
        <Text style={[text.body, styles.paragraph]}>
          Informationen in den Diensten können Tippfehler oder Ungenauigkeiten
          enthalten, etwa bei Beschreibungen oder Preisen. Wir behalten uns vor,
          diese jederzeit ohne Vorankündigung zu korrigieren.
        </Text>

        {/* 20. Haftungsausschluss */}
        <Text style={[text.h2, styles.sectionTitle]}>
          20. Haftungsausschluss
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Dienste werden im Ist-Zustand und nach Verfügbarkeit
          bereitgestellt. Soweit gesetzlich zulässig, schließen wir
          Gewährleistungsansprüche aus, insbesondere im Hinblick auf ständige
          Verfügbarkeit, Fehlerfreiheit oder Eignung für einen bestimmten Zweck.
          Dieser Ausschluss gilt nicht für Schäden aus der Verletzung des
          Lebens, des Körpers oder der Gesundheit, für Schäden, die auf einer
          vorsätzlichen oder grob fahrlässigen Pflichtverletzung von uns
          beruhen, sowie nicht für Ansprüche nach dem Produkthaftungsgesetz.
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Die Dienste dienen dazu, Ihren Standort mit von Ihnen ausgewählten
          Personen zu teilen und diese zu benachrichtigen, wenn Sie sich unwohl
          fühlen. Sie sind kein Ersatz für einen Notruf und garantieren nicht,
          dass Ihr Standort korrekt übermittelt wird oder eine Kontaktperson
          rechtzeitig reagiert. Wenden Sie sich in einer akuten Notlage immer an
          die zuständigen Rettungs- oder Notfalldienste (110/112).
        </Text>

        {/* 21. Haftungsbeschränkungen */}
        <Text style={[text.h2, styles.sectionTitle]}>
          21. Haftungsbeschränkungen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie
          für Schäden aus der Verletzung des Lebens, des Körpers oder der
          Gesundheit und nach dem Produkthaftungsgesetz. Bei leicht fahrlässiger
          Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren
          Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst
          ermöglicht und auf deren Einhaltung Sie regelmäßig vertrauen dürfen,
          ist unsere Haftung auf den vorhersehbaren, vertragstypischen Schaden
          begrenzt. Im Übrigen ist unsere Haftung für leicht fahrlässige
          Pflichtverletzungen ausgeschlossen. Die vorstehenden
          Haftungsbeschränkungen gelten auch zugunsten unserer Mitarbeiter und
          Vertreter.
        </Text>

        {/* 22. Entschädigung */}
        <Text style={[text.h2, styles.sectionTitle]}>22. Entschädigung</Text>
        <Text style={[text.body, styles.paragraph]}>
          Sie stellen uns sowie unsere Vertreter und Mitarbeiter von Verlusten,
          Schäden und Ansprüchen Dritter frei – einschließlich angemessener
          Anwaltskosten –, die aus Ihrer Nutzung der Dienste, einem Verstoß
          gegen diese Geschäftsbedingungen, einer Rechtsverletzung Dritter oder
          einer schädlichen Handlung gegenüber anderen Nutzern entstehen.
        </Text>

        {/* 23. Benutzerdaten */}
        <Text style={[text.h2, styles.sectionTitle]}>23. Benutzerdaten</Text>
        <Text style={[text.body, styles.paragraph]}>
          Wir speichern die von Ihnen übermittelten Daten sowie Daten zu Ihrer
          Nutzung der Dienste. Trotz regelmäßiger Datensicherungen tragen Sie
          die Verantwortung für Ihre übermittelten Daten; für deren Verlust oder
          Beschädigung haften wir nicht.
        </Text>

        {/* 24. Elektronische Kommunikation */}
        <Text style={[text.h2, styles.sectionTitle]}>
          24. Elektronische Kommunikation, Transaktionen und Signaturen
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Der Besuch der Dienste, E-Mails an uns und das Ausfüllen von
          Online-Formularen gelten als elektronische Kommunikation. Sie erklären
          sich mit dem Empfang elektronischer Mitteilungen einverstanden und
          akzeptieren elektronische Signaturen, Verträge und Dokumente im
          Zusammenhang mit über die Dienste initiierten Transaktionen.
        </Text>

        {/* 25. Verschiedenes */}
        <Text style={[text.h2, styles.sectionTitle]}>25. Verschiedenes</Text>
        <Text style={[text.body, styles.paragraph]}>
          Diese Geschäftsbedingungen und alle von uns veröffentlichten
          Richtlinien bilden die gesamte Vereinbarung zwischen Ihnen und uns.
          Die Nichtausübung eines Rechts gilt nicht als Verzicht. Wir können
          unsere Rechte und Pflichten jederzeit an Dritte abtreten. Ist eine
          Bestimmung unwirksam, bleibt die Gültigkeit der übrigen unberührt.
          Diese Geschäftsbedingungen begründen weder ein Joint Venture noch eine
          Partnerschaft, ein Arbeits- oder ein Vertretungsverhältnis zwischen
          Ihnen und uns.
        </Text>

        {/* 26. Kontaktieren Sie uns */}
        <Text style={[text.h2, styles.sectionTitle]}>
          26. Kontaktieren Sie uns
        </Text>
        <Text style={[text.body, styles.paragraph]}>
          Bei Fragen oder Beschwerden zu den Diensten erreichen Sie uns unter:
        </Text>
        <View style={styles.contactBlock}>
          <Text style={text.body}>Philipp Alexander Biebert</Text>
          <Text style={text.body}>An der Logleine 7</Text>
          <Text style={text.body}>23570 Lübeck, Deutschland</Text>
          <Text style={text.body}>Telefon: 01737984314</Text>
          <Text style={text.body}>E-Mail: contact@philippbiebert.de</Text>
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
    marginTop: spacing.m,
    marginBottom: spacing.xs,
  },
  lastUpdated: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginTop: spacing.xxl,
    marginBottom: spacing.s,
  },
  subTitle: {
    marginTop: spacing.m,
    marginBottom: spacing.xs,
  },
  paragraph: {
    marginBottom: spacing.m,
    lineHeight: 22,
  },
  contactBlock: {
    marginBottom: spacing.m,
  },
  footer: {
    marginTop: spacing.xxxl,
    textAlign: "center",
  },
});
