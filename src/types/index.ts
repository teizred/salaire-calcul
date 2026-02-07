export interface CalculationData {
  productName: string
  price: number
  hourlyWage: number
  hours: number
}

export interface CalculatorProps {
  onCalculate: (data: CalculationData) => void
}

export interface ResultProps {
  data: CalculationData
  inflationRate: number | null
}