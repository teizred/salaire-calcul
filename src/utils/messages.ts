/**
 * Génère un message humoristique basé sur le nombre d'heures de travail nécessaires.
 * param hours - Le nombre d'heures de travail (calculé à partir du prix et du taux horaire).
 * returns Un message sarcastique sur le coût de la vie en France.
 */
export function getHumorMessage(hours: number): string {
  // Conversion des heures en jours, semaines et mois (bases standard : 8h/jour, 40h/semaine, 160h/mois)
  const days = hours / 8
  const weeks = hours / 40
  const months = hours / 160

  // Moins d'une heure : c'est négligeable
  if (hours < 1) {
    return "Même pas 1h de ta vie, vas-y fonce ! 🎉"
  }
  
  // Moins d'une journée de travail (8h)
  if (hours < 8) {
    return "Une journée de boulot dans la France de Macron... 😅"
  }
  
  // Moins d'une semaine de travail (5 jours)
  if (days < 5) {
    return `${days.toFixed(1)} jours de travail pour ça ?! Welcome to France ! 😱`
  }
  
  // Moins d'une demi-mois (2 semaines)
  if (weeks < 2) {
    return "Plus d'une semaine de ta vie... Merci Macron ! 🤦‍♂️"
  }
  
  // Moins d'un mois (4 semaines)
  if (weeks < 4) {
    return `${weeks.toFixed(1)} semaines de ta vie dans la France de Macron ! 💀`
  }
  
  // Moins de deux mois
  if (months < 2) {
    return "UN MOIS DE TON SALAIRE DANS LA FRANCE DE MACRON ! 🤯"
  }
  
  // Moins de six mois
  if (months < 6) {
    return `${months.toFixed(1)} MOIS DE TA VIE ! Bienvenue en Macronie ! 😭`
  }
  
  // Six mois ou plus : c'est énorme
  return `${months.toFixed(1)} mois... Tu rigoles là ?! C'est la France de Macron ! 💸💀`
}