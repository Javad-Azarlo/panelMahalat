const setCookie = (token) => {
  document.cookie = `token=${token} ; max-age=${30 * 24 * 60 * 60}`;
};
const getCookie = () => {
  const cookie_loc = document.cookie;
  if (cookie_loc) {
    const arry_cook = cookie_loc.split("=");
    return {
      [arry_cook[0]]: arry_cook[1],
    };
  }
};
export { setCookie, getCookie };
