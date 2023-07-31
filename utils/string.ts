export const descriptionSm = (description: string): string => {
  return description.length > 100
    ? description.substring(0, 100) + '...'
    : description
}
