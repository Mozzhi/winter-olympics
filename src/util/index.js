export function saveData(key, data) {
  sessionStorage.setItem('indexData', JSON.stringify(data));
}
export function getSessionData(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export function details(id) {
  let routeData = this.$router.resolve({path:'/details',query: {id:id}});
  console.log(routeData)
  window.open(routeData.href, '_blank');
}
