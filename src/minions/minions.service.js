const Minion = require("./minions.model");

module.exports = {
  getMinions: async (page = 1, perPage = 10) => {
    const skip = perPage * (page - 1);
    return Minion.find({})
      .sort({ createdAt: "DESC" })
      .skip(skip)
      .limit(perPage);
  },

  createMinion: async (minion) => {
    return Minion.create(minion);
  },

  getMinion: async (id) => {
    return Minion.findOne({ id: id });
  },

  updateMinion: async (id, ...args) => {
    return Minion.findByIdAndUpdate(id, { args });
  },

  removeMinion: async (id) => {
    return Minion.findOneAndDelete({ id });
  },
};
