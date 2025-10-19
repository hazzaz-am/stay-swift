export const toReadableName = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/\s+/g, " ")
    .trim();
};
