export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getCookie = cname => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const deleteCookie = cname => {
  var d = new Date();
  d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + ';' + expires + ';path=/';
};

export const apiDispatch = (actionType = '', data) => {
  return {
    type: actionType,
    payload: data,
  };
};

export const apiError = type => error => {
  return {
    type: type,
    error,
  };
};

export const getFormattedDate = date => {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return day + '/' + month + '/' + year;
};
export const getFormattedDateTime = data => {
  if(!data) return
  var month = data.substring(5,7);
  var day = data.substring(8,10);
  var year = data.substring(0,4);
  return day + '/' + month + '/' + year;
};

export const getInitials = (name = '') =>
  name.split(' ').map(str => (str ? str[0].toUpperCase() : ''));
