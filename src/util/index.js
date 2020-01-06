export function saveData(key, data) {
  sessionStorage.setItem('indexData', JSON.stringify(data));
}
export function getSessionData(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
