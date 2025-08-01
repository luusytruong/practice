/**
 *
 * @param {string} selector
 * @param {Element} root
 * @returns {Element | null}
 */
export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
export const formatPrice = (str) => new Intl.NumberFormat("vi-VN").format(str) + "đ";
export const formatTime = (str) => {
  if (!str) return "";
  const date = new Date(str);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};