const Parse = require('@bany/curl-to-json');

const onMain = (curl) => {
  if (curl === undefined) {
    return undefined;
  }
  const obj = Parse(curl);
  if (obj === undefined || obj === null) {
    return undefined;
  }

  // return as a string to maintain all value types
  return JSON.stringify(obj);
};

// Export to JavascriptCore
global.onMain = onMain;
