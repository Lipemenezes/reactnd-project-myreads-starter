export const set = (state) =>
  localStorage.setItem('myReadsApplicationState', JSON.stringify(state))

export const get = () =>
  JSON.parse(localStorage.getItem('myReadsApplicationState'))