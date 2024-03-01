const Basepoint = 100

export function calculategrade(score: number): string {
  if (score <= 45) {
    return 'D'
  } else if (score > 45 && score <= 59) {
    return 'C'
  } else if (score >= 60 && score <= 69) {
    return 'B'
  } else if (score >= 70 && score <= 99) {
    return 'A'
  } else {
    return 'Invalid grade'
  }
}

const grade = calculategrade(10)
console.log(grade)
