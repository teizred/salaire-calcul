import type { ResultProps } from '../types'
import { getHumorMessage } from '../utils/messages'

export default function Result({ data, inflationRate, onReset }: ResultProps) {
  const { productName, hours } = data

  return (
    <div className="bg-deep-teal-900/30 backdrop-blur-lg border border-deep-teal-700/30 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          {productName}
        </h2>
        
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-linear-to-r from-sea-green-500 to-medium-jungle-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-lemon-lime-400 to-moss-green-300">
            {hours.toFixed(1)}h
          </div>
        </div>

        <div className="text-xl md:text-2xl font-medium text-sea-green-100 italic">
          "{getHumorMessage(hours)}"
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="bg-deep-teal-950/50 p-4 rounded-xl border border-deep-teal-800 hover:border-lemon-lime-500/50 transition-colors">
            <div className="text-2xl md:text-3xl font-bold text-lemon-lime-400">
              {(hours / 8).toFixed(1)}
            </div>
            <div className="text-xs uppercase tracking-wider text-deep-teal-400 mt-1">jours</div>
          </div>
          <div className="bg-deep-teal-950/50 p-4 rounded-xl border border-deep-teal-800 hover:border-sea-green-500/50 transition-colors">
            <div className="text-2xl md:text-3xl font-bold text-sea-green-400">
              {(hours / 40).toFixed(1)}
            </div>
            <div className="text-xs uppercase tracking-wider text-deep-teal-400 mt-1">semaines</div>
          </div>
          <div className="bg-deep-teal-950/50 p-4 rounded-xl border border-deep-teal-800 hover:border-medium-jungle-500/50 transition-colors">
            <div className="text-2xl md:text-3xl font-bold text-medium-jungle-400">
              {(hours / 160).toFixed(1)}
            </div>
            <div className="text-xs uppercase tracking-wider text-deep-teal-400 mt-1">mois</div>
          </div>
        </div>

        {inflationRate && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-6 animate-pulse mb-6">
            <p className="text-red-200 font-medium">
              📈 Inflation : <span className="font-bold text-red-100">{inflationRate}%</span>
            </p>
            <p className="text-red-300 text-sm mt-1 opacity-80">
              Dans la France de Macron, ça pique ! 🤯
            </p>
          </div>
        )}
        
        <button
          onClick={onReset}
          className="w-full bg-deep-teal-800 hover:bg-deep-teal-700 text-sea-green-100 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-deep-teal-600/50 hover:border-sea-green-500/50 group cursor-pointer"
        >
          <span>🔄</span>
          <span className="group-hover:text-white transition-colors">Relancer un calcul</span>
        </button>
      </div>
    </div>
  )
}