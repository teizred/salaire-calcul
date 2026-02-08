import React, { useState } from 'react'
import type { CalculatorProps } from '../types'

export default function Calculator({ onCalculate }: CalculatorProps) {
  const [productName, setProductName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [hourlyWage, setHourlyWage] = useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!productName || !price || !hourlyWage) {
      alert('Remplis tous les champs!')
      return
    }

    const priceNum = parseFloat(price)
    const wageNum = parseFloat(hourlyWage)
    const hours = priceNum / wageNum

    onCalculate({
      productName,
      price: priceNum,  
      hourlyWage: wageNum,
      hours
    })
  }

  return (
    <div className="bg-deep-teal-900/30 backdrop-blur-lg border border-deep-teal-700/30 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-sea-green-100 uppercase tracking-wider">
            Nom du produit
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Ex: iPhone 16 Pro"
            className="w-full bg-deep-teal-950/50 border border-deep-teal-700 rounded-xl px-4 py-3 text-white placeholder-deep-teal-600 focus:outline-none focus:ring-2 focus:ring-sea-green-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-sea-green-100 uppercase tracking-wider">
              Prix (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="1299"
              className="w-full bg-deep-teal-950/50 border border-deep-teal-700 rounded-xl px-4 py-3 text-white placeholder-deep-teal-600 focus:outline-none focus:ring-2 focus:ring-sea-green-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-sea-green-100 uppercase tracking-wider">
              Salaire/h (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              placeholder="15"
              className="w-full bg-deep-teal-950/50 border border-deep-teal-700 rounded-xl px-4 py-3 text-white placeholder-deep-teal-600 focus:outline-none focus:ring-2 focus:ring-sea-green-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-medium-jungle-500 to-sea-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-sea-green-500/30 transform hover:-translate-y-1 transition-all duration-300 text-lg uppercase tracking-wide border border-sea-green-400/20 cursor-pointer"
        >
          Calculer 🧮
        </button>
      </form>
    </div>
  )
}