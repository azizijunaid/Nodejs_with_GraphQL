const todoModel = require("../../../models").Todo;

const getAll = async () => {
  try {
    const result = await todoModel.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

const add = async (todo) => {
  try {
    const result = await todoModel.create(todo);
    return result;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const result = await todoModel.findOne({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const updateById = async (id, data) => {
  try {
    const result = await todoModel.update(data, { where: { id } });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  add,
  getAll,
  getById,
  updateById,
};
