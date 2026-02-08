const INSEE_API_URL = 'https://api.insee.fr/series/BDM/v1/data/SERIES_BDM'
const INFLATION_SERIES_ID = '001769682' // IPC - Indice des prix à la consommation

interface INSEEObservation {
  OBS_VALUE: string
  TIME_PERIOD: string
}

interface INSEEResponse {
  Obs: INSEEObservation[]
}

export async function getInflationRate(): Promise<number | null> {
  try {
    const response = await fetch(`${INSEE_API_URL}/${INFLATION_SERIES_ID}`, {
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Erreur API INSEE: ${response.status}`)
    }
    
    const data: INSEEResponse = await response.json()
    return parseInflationData(data)
    
  } catch (error) {
    console.error('Erreur API inflation:', error)
    // Fallback sur données mockées en cas d'erreur
    return 2.5
  }
}

function parseInflationData(data: INSEEResponse): number {
  try {
    const observations = data.Obs
    const latestObs = observations[observations.length - 1]
    return parseFloat(parseFloat(latestObs.OBS_VALUE).toFixed(1))
  } catch (error) {
    console.error('Erreur parsing données INSEE:', error)
    return 0
  }
}