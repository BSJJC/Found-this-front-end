/**
 * @param str the character that needs to be checked for spaces
 */
function disableInputSpace(str: string): string {
  if (str[str.length - 1] === " ") {
    str = str.slice(0, str.length - 1);
  }

  return str;
}

export default disableInputSpace;
