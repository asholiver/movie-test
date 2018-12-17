const objectMap = (obj, func) => {
  Object.keys(obj).map((k, index) => func(k, obj[k], index));
};

export default objectMap;
