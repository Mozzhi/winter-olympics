export function saveData(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}
export function getSessionData(key) {
  let data = sessionStorage.getItem(key) || [];
  if(data !== 'undefined')
  return JSON.parse(sessionStorage.getItem(key));
}

export function details(id) {
  let routeData = this.$router.resolve({path:'/details',query: {id:id}});
  window.open(routeData.href, '_blank');
}
