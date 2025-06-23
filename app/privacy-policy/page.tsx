import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Informativa sul trattamento dei dati personali - Rayo Consulting di Patriarchi Dylan
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            {/* Titolare */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Titolare del Trattamento</h2>
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg border border-purple-500/20">
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Denominazione:</strong> Rayo Consulting di Patriarchi Dylan</p>
                  <p><strong className="text-white">P.IVA:</strong> 03988190546</p>
                  <p><strong className="text-white">Sede legale:</strong> Città di Castello, Italia</p>
                  <p><strong className="text-white">Email:</strong> info@rayoconsulting.org</p>
                </div>
              </div>
            </section>

            {/* Tipologie di Dati */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Tipologie di Dati Raccolti</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Dati Forniti Volontariamente</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Nome e cognome</li>
                    <li>Indirizzo email</li>
                    <li>Numero di telefono (se fornito)</li>
                    <li>Nome azienda (se fornito)</li>
                    <li>Messaggi e comunicazioni via chat/email</li>
                    <li>Informazioni sui progetti richiesti</li>
                  </ul>
                </div>

                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Dati Raccolti Automaticamente</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Indirizzo IP</li>
                    <li>Tipo di browser e versione</li>
                    <li>Sistema operativo</li>
                    <li>Pagine visitate e tempo di permanenza</li>
                    <li>Data e ora di accesso</li>
                    <li>Paese di provenienza</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalità */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Finalità del Trattamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    💼 <span>Servizi Professionali</span>
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Fornitura di consulenze</li>
                    <li>• Sviluppo di progetti</li>
                    <li>• Supporto clienti</li>
                    <li>• Gestione contratti</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    📊 <span>Marketing e Comunicazione</span>
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Newsletter informative</li>
                    <li>• Offerte personalizzate</li>
                    <li>• Inviti a eventi</li>
                    <li>• Comunicazioni commerciali</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    ⚖️ <span>Obblighi Legali</span>
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Adempimenti fiscali</li>
                    <li>• Contabilità</li>
                    <li>• Normative settoriali</li>
                    <li>• Sicurezza informatica</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    📈 <span>Miglioramento Servizi</span>
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Analisi utilizzo sito</li>
                    <li>• Ottimizzazione UX</li>
                    <li>• Ricerca e sviluppo</li>
                    <li>• Feedback clienti</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Base Giuridica */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Base Giuridica del Trattamento</h2>
              <div className="space-y-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">✅ Consenso</h4>
                  <p className="text-gray-300 text-sm">Per comunicazioni marketing, newsletter e cookie non necessari</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">📋 Esecuzione Contratto</h4>
                  <p className="text-gray-300 text-sm">Per la fornitura dei servizi richiesti e la gestione della relazione commerciale</p>
                </div>
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-2">⚖️ Obblighi Legali</h4>
                  <p className="text-gray-300 text-sm">Per adempimenti fiscali, contabili e normativi</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-400 mb-2">🎯 Interesse Legittimo</h4>
                  <p className="text-gray-300 text-sm">Per migliorare i servizi, sicurezza informatica e prevenzione frodi</p>
                </div>
              </div>
            </section>

            {/* Conservazione */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Periodo di Conservazione</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-white">Tipologia Dati</th>
                      <th className="px-4 py-3 text-left text-white">Periodo</th>
                      <th className="px-4 py-3 text-left text-white">Motivazione</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Dati contrattuali</td>
                      <td className="px-4 py-3">10 anni</td>
                      <td className="px-4 py-3">Obblighi fiscali e contabili</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Dati marketing</td>
                      <td className="px-4 py-3">Fino a revoca consenso</td>
                      <td className="px-4 py-3">Base consenso</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Log di sistema</td>
                      <td className="px-4 py-3">12 mesi</td>
                      <td className="px-4 py-3">Sicurezza informatica</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Dati chat/email</td>
                      <td className="px-4 py-3">3 anni</td>
                      <td className="px-4 py-3">Supporto e assistenza</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Diritti */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. I Tuoi Diritti</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">🔍 Diritti di Informazione</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Accesso ai dati</li>
                    <li>• Portabilità dei dati</li>
                    <li>• Informazioni su trattamento</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/5 to-blue-500/5 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">✏️ Diritti di Controllo</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Rettifica dati inesatti</li>
                    <li>• Cancellazione dati</li>
                    <li>• Limitazione trattamento</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">🚫 Diritti di Opposizione</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Opposizione al trattamento</li>
                    <li>• Revoca consenso</li>
                    <li>• Opt-out marketing</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/5 to-green-500/5 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">⚖️ Diritti di Ricorso</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Reclamo al Garante</li>
                    <li>• Ricorso all&apos;autorità</li>
                    <li>• Azione legale</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sicurezza */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Misure di Sicurezza</h2>
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-lg font-semibold text-white mb-4">🛡️ Protezione dei Dati</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Sicurezza Tecnica</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Crittografia SSL/TLS</li>
                      <li>• Backup automatici</li>
                      <li>• Firewall avanzati</li>
                      <li>• Monitoraggio 24/7</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Sicurezza Organizzativa</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Accesso limitato</li>
                      <li>• Formazione staff</li>
                      <li>• Procedure di sicurezza</li>
                      <li>• Audit periodici</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contatti DPO */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Come Esercitare i Tuoi Diritti</h2>
              <div className="bg-gradient-to-r from-purple-500/5 to-cyan-500/5 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-4">
                  Per esercitare i tuoi diritti o per qualsiasi domanda riguardante il trattamento dei tuoi dati personali:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">📧</div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:info@rayoconsulting.org" className="text-purple-400 hover:text-purple-300">info@rayoconsulting.org</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">💬</div>
                    <div>
                      <p className="text-white font-semibold">Chat Live</p>
                      <p className="text-gray-400">Disponibile nella sezione contatti del sito</p>
                    </div>
                  </div>
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
            href="/cookie-policy"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Leggi la Cookie Policy →
          </Link>
        </div>
      </div>
    </div>
  );
} 