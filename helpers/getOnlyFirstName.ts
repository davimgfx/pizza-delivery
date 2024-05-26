export default function getOnlyFirstName(fullName: string): string {
    const parts = fullName.trim().split(' ')
  
    const firstName = parts[0]
  
    const normalizedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
  
    return normalizedFirstName
  }
  