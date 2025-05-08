export function generateRandomEmail() {
  const timestamp = Date.now().toString(36); // base-36 encoding
  return `udemy${timestamp}@yopmail.com`;
}
