import Cookies from 'js-cookie'

// const TokenKey = 'token';
// 取token
export function getToken() {
  return Cookies.get('token')
}

export function setToken(token) {
  return Cookies.set('token', token)
}

export function removeToken() {
  return Cookies.remove('token');
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