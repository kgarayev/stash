export const storeState = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getState = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
