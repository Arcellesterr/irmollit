function checkAndProcess(num2?: number): number | undefined {
  // If num2 is provided, return its value
  if (num2 !== undefined) {
    return num2;
  }
  // If num2 is not provided, return undefined
  return undefined;
}
