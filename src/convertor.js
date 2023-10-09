/**
 * Parse header field.
 */

function parseField(s) {
  return s.split(/:(.+)/).map((element) => element.trim());
}

function parseFieldWithEqual(s) {
  return s.split(/=(.+)/);
}

function pareString(s, pareCallBack = parseField) {
  let result = {};
  var field = pareCallBack(s);
  result[field[0]] = field[1];
  return result;
}

function parseParamsField(s) {
  if (s === "") return null;
  let object = {};
  const allParamsArr = s.split(/&/);
  allParamsArr.forEach((element) => {
    const field = element.split(/=/);
    object[field[0]] = field[1];
  });

  return object;
}

module.exports = {
  header: (data) => {
    let ouput = {};
    if (typeof data === "string") {
      ouput = pareString(data);
    } else {
      data.forEach((element) => {
        ouput = {
          ...ouput,
          ...pareString(element, parseField),
        };
      });
      return ouput;
    }
    return ouput;
  },
  body: (data) => {
    console.log(data);
    if (typeof data === "string") {
      // return string, instead of JSON Object because it's easier to set to URLRequest body
      return data;
    } else if (Array.isArray(data)) {
      // if it's a Form data, just combine it as a string
      return data.join("&");
    }

    // raw
    return data;
  },
  parseParamsField: parseParamsField,
};
