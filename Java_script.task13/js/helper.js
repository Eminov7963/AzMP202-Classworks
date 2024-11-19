export function setDatalocalstorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getDatalocalstorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

