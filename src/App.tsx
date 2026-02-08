import { useState, useEffect } from 'react'
import Calculator from './components/Calculator'
import { getInflationRate } from './services/inflationAPI'
import type { CalculationData } from './types'
import Result from './components/Results'
import './App.css'

function App() {
  const [result, setResult] = useState<CalculationData | null>(null)
  const [inflationRate, setInflationRate] = useState<number | null>(null)
  const [key, setKey] = useState(0)

  useEffect(() => {
    getInflationRate().then(rate => {
      setInflationRate(rate)
    })
  }, [])

  const handleCalculate = (data: CalculationData) => {
    setResult(data)
  }

  const handleReset = () => {
    setResult(null)
    setKey(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-deep-teal-950 via-medium-jungle-900 to-moss-green-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Calculator key={key} onCalculate={handleCalculate} />
          <div className="md:min-h-[400px] flex items-center justify-center">
            {result ? (
              <Result data={result} inflationRate={inflationRate} onReset={handleReset} />
            ) : (
              <div className="text-sea-green-200 text-center p-8 border-2 border-dashed border-deep-teal-700 rounded-2xl h-full w-full flex flex-col items-center justify-center">
                <span className="text-4xl mb-4">👈</span>
                <p className="text-lg">Remplis le formulaire pour voir la vérité...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App