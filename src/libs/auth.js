import Cookies from 'js-cookie'

// const TokenKey = 'token';
// 取token
export function getToken() {
  return Cookies.get('tokens')
}

export function setToken(token) {
  return Cookies.set('tokens', token)
}

export function removeToken() {
  return Cookies.remove('tokens');
}

export function getDay() {
  return Cookies.get('day')
}

export function setDay(day) {
  return Cookies.set('day', day)
}

export function removeDay() {
  return Cookies.remove('day');
}