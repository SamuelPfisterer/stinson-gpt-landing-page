import Link from 'next/link'

export default function Impressum() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Drainbee GmbH</p>
              <p>Oberforstbacher Str. 301</p>
              <p>52076 Aachen</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Vertretung</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Vertretungsberechtigter Geschäftsführer: Jonas Derissen</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                E-Mail:{" "}
                <a href="mailto:support@drainbee.com" className="text-primary hover:underline">
                  support@drainbee.com
                </a>
              </p>
              <p>Telefon: + 49 (0) 163 3683588</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Registergericht: Amtsgericht Aachen</p>
              <p>Registernummer: HRB 27014</p>
              <p>Umsatzsteuer-ID: DE363232310</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Nach § 18 Abs. 2 MStV: Jonas Derissen</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Haftungshinweis</h2>
            <p className="text-muted-foreground">
              Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der allgemeinen Gesetze, insbesondere nach § 7 Abs. 1 des Telemediengesetzes, verantwortlich. Alle Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf unseren Internetseiten mittels Hyperlinks auf Internetseiten Dritter verweisen, können wir keine Gewähr für die fortwährende Aktualität, Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein, teilen Sie uns dies bitte mit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Online-Streitbeilegung</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Die Europäische Kommission hat eine Europäische Plattform zur Online-Streitbeilegung (&ldquo;OS-Plattform&rdquo;) bereitzustellen. Die OS-Plattform ist im Internet unter der Internet-Adresse:{' '}
                <Link
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </Link>
                {" "}abrufbar.
              </p>
              <p>
                Wir sind weder bereit noch verpflichtet, an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 