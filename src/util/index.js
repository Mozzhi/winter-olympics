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

export function dateInitLeft(arr = [], date) {
  let dateArr = [];
  for(let item of arr){
    let dateStr = `${item.year ? item.year: '2020'}-${addZero(item.month)}-${addZero(item.date)}`;
    dateArr.push(dateStr);
  }
  return dateArr.indexOf(date);
}

export function addZero(num) {
  return num = num < 10 ? '0' + (num - 0) : num;
}
