export const getInitials = (name: string) => {
  return name
    .split(/[\s-]+/)             // Split on spaces or dashes
    .filter(Boolean)             // Remove any empty strings
    .map(word => word[0].toUpperCase()) // Take the first letter and capitalize
    .join('');
}