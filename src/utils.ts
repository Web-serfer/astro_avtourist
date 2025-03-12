// Создание даты в формате строки
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

// Преобразование первой буквы строки в верхний регистр
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// ==== Функция текущего года ==== //
function getCurrentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

export { formatDate, capitalize, getCurrentYear };
