export const formatDate = (date: Date | string): string => {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${parsedDate.getFullYear()}`;
};

export const capitalize = (str: string): string => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCurrentYear = (): number => {
  const date = new Date();
  return date.getFullYear();
};
