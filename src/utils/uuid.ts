/**
 *  generate UUID
 * @returns uuid
 */
function generateUUID(): string {
  let uuid = "";
  const possibleChars = "abcdef0123456789";

  for (let i = 0; i < 32; i++) {
    const randomInt = Math.floor(Math.random() * 16);
    const randomChar = possibleChars.charAt(randomInt);
    uuid += randomChar;

    if (i === 7 || i === 11 || i === 15 || i === 19) {
      uuid += "-";
    }
  }

  return uuid;
}

export default generateUUID;
