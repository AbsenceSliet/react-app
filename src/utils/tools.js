export const getUrlQueryStr = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query;
  //http://vclass.vipjr.com/?code=041Oq3Bi2V2yuF0N8jDi2C0MAi2Oq3BR#/detail/10004?teacher_directory=Jinrongsheng&product_directory=简奥数学&name=金荣生&phase_num=1

  if (/\?.+/g.exec(window.location.href)) {
    query = /\?.+/g.exec(window.location.href)[0].substr(1);
    if (query.indexOf("?") !== -1) {
      query = /\?.+/g.exec(query)[0].substr(1);
    }
  } else {
    return query_string;
  }

  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
};

export const DEFAULT_PLACEHOLDER = "任意";
export const globalName = "Netease_";
