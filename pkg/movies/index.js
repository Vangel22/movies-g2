const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    // type
    // required
    // trim
  },
  genre: {
    // type
    // required
    // trim
  },
  releaseYear: {
    // type
    // required
    // min
    // max
  },
  //   director: {
  //      Optional, later to update the accounts model with a property director: true/false
  //   },
  account_id: {
    // type
    // ref
  },
});

const Movie = mongoose.model("Movie", movieSchema);

//Add methods here - don't forget multitenancy i.e account_id
const create = () => {};
const update = () => {};
const remove = () => {};
const getAll = () => {};
const getSingle = () => {};

module.exports = Movie;
