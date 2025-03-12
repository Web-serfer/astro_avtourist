export const formatDate = (date: Date | string): string => {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${parsedDate.getFullYear()}`;
};

// Преобразование первой буквы строки в верхний регистр
const capitalize = (str: string): string => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Функция текущего года
const getCurrentYear = (): number => {
  const date = new Date();
  return date.getFullYear();
};

export default { capitalize, getCurrentYear };
