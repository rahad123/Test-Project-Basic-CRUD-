const {
  createMinion,
  getMinions,
  getMinion,
  updateMinion,
  removeMinion,
} = require("./minions.service");

const { INTERNAL_SERVER_ERROR } = require("../../utils/errors");

module.exports = {
  getMinions: async (req, res) => {
    try {
      const { page, perPage } = req.body;
      const minion = await getMinions(page, perPage);
      return res.json({
        data: minion,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  getMinion: async (req, res) => {
    try {
      const { minionId } = req.params;
      const minion = await getMinion(minionId);
      return res.json({
        data: minion,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  createMinion: async (req, res) => {
    try {
      const createMinionsInput = req.body;
      const minion = await createMinion(createMinionsInput);
      return res.json({
        data: minion,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  updateMinion: async (req, res) => {
    try {
      const { minionId } = req.params;
      const minion = await updateMinion(minionId, req.body);
      return res.json({
        data: minion,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  deleteMinion: async (req, res) => {
    try {
      const { minionId } = req.params;
      const minion = await removeMinion(minionId);
      return res.json({
        data: true,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },
};
