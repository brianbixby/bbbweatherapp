export const renderIf = (condition, component) =>
  condition ? component : undefined;
export const classToggler = (options) =>
  Object.keys(options)
    .filter((key) => !!options[key])
    .join(" ");
export const log = (...args) => console.log(...args);
export const logError = (...args) => console.error(...args);
