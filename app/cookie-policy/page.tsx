import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Informativa sull'uso dei cookie - Rayo Consulting di Patriarchi Dylan
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduzione */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Cosa sono i Cookie</h2>
              <p className="text-gray-300 leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Ci aiutano a migliorare la tua esperienza di navigazione, ricordare le tue preferenze e fornire contenuti personalizzati.
              </p>
            </section>

            {/* Tipi di Cookie */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Tipi di Cookie Utilizzati</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Cookie Tecnici (Necessari)</h3>
                  <p className="text-gray-300 mb-3">
                    Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disabilitati.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Gestione della sessione utente</li>
                    <li>Preferenze delle impostazioni</li>
                    <li>Sicurezza e autenticazione</li>
                  </ul>
                </div>

                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Cookie di Preferenze</h3>
                  <p className="text-gray-300 mb-3">
                    Memorizzano le tue scelte e preferenze per migliorare la tua esperienza.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Consenso ai cookie</li>
                    <li>Impostazioni di visualizzazione</li>
                    <li>Lingua preferita</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Cookie Analitici</h3>
                  <p className="text-gray-300 mb-3">
                    Ci aiutano a capire come i visitatori interagiscono con il nostro sito web.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Google Analytics (anonimizzato)</li>
                    <li>Statistiche di utilizzo</li>
                    <li>Performance del sito</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalità */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Finalità del Trattamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">🔧 Funzionalità Tecniche</h4>
                  <p className="text-gray-300 text-sm">Garantire il corretto funzionamento del sito web</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">📊 Analisi Statistiche</h4>
                  <p className="text-gray-300 text-sm">Migliorare i nostri servizi basandoci sui dati di utilizzo</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">🎯 Personalizzazione</h4>
                  <p className="text-gray-300 text-sm">Fornire contenuti rilevanti per le tue esigenze</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">🛡️ Sicurezza</h4>
                  <p className="text-gray-300 text-sm">Proteggere il sito da accessi non autorizzati</p>
                </div>
              </div>
            </section>

            {/* Gestione Cookie */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Come Gestire i Cookie</h2>
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Controllo dei Cookie</h3>
                <p className="text-gray-300 mb-4">
                  Puoi gestire le tue preferenze sui cookie in qualsiasi momento attraverso:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Il banner dei cookie presente sul nostro sito</li>
                  <li>Le impostazioni del tuo browser web</li>
                  <li>Gli strumenti di opt-out dei provider di terze parti</li>
                </ul>
              </div>
            </section>

            {/* Durata */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Durata dei Cookie</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-white">Tipo Cookie</th>
                      <th className="px-4 py-3 text-left text-white">Durata</th>
                      <th className="px-4 py-3 text-left text-white">Scopo</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Sessione</td>
                      <td className="px-4 py-3">Fino alla chiusura del browser</td>
                      <td className="px-4 py-3">Funzionalità di base</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Persistenti</td>
                      <td className="px-4 py-3">Da 30 giorni a 2 anni</td>
                      <td className="px-4 py-3">Preferenze utente</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Consenso</td>
                      <td className="px-4 py-3">12 mesi</td>
                      <td className="px-4 py-3">Memorizzazione consenso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Contatti */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contatti</h2>
              <div className="bg-gradient-to-r from-purple-500/5 to-cyan-500/5 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-4">
                  Per qualsiasi domanda riguardante la nostra Cookie Policy, contattaci:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Titolare:</strong> Rayo Consulting di Patriarchi Dylan</p>
                  <p><strong className="text-white">Email:</strong> info@rayoconsulting.org</p>
                  <p><strong className="text-white">P.IVA:</strong> 03988190546</p>
                  <p><strong className="text-white">Sede:</strong> Città di Castello, Italia</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/"
            className="button-primary text-white py-2 px-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            ← Torna alla Home
          </Link>
          <Link 
            href="/privacy-policy"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Leggi la Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
} 