export const setData = function(key, value) {
  localStorage.setItem(key, value);
}

export const getData = function(key) {
  return localStorage.getItem(key)
}
