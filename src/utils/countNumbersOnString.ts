export function countNumbersOnString(str: string): number {
    const numbersFound = str.match(/\d/g);
  
    if (!numbersFound) {
      return 0;
    }
  
    return numbersFound.length;
  }