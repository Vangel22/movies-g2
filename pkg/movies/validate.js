// require - node-input-validator
// make two objects:
//  1. MoviePost - add properties inside (required)
//  2. MovieUpdate - add properties inside (not required)

const validate = async (data, schema) => {
  let v = new Validator(data, schema);
  let e = v.check();
  if (!e) {
    throw {
      code: 400,
      error: v.errors,
    };
  }
};

module.exports = {
  validate,
};
