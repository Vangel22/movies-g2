const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  //   director: {
  //      Optional, later to update the accounts model with a property director: true/false
  //   },
  account_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "accounts",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

//Add methods here - don't forget multitenancy i.e account_id
const getAll = async (account_id) => {
  return await Movie.find({ account_id });
};

const getSingle = async (account_id, id) => {
  return await Movie.findOne({ account_id, _id: id });
};

const create = async (data) => {
  const movie = new Movie(data);
  return await movie.save();
};

const update = async (id, data) => {
  return await Movie.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Movie.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  remove,
};
