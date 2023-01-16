const todoModel = require("../../../models").Todo;
const todoRepository = require("../repository/todo.repository");
const { GraphQLError } = require("graphql");
const { ERROR_CODES } = require("../../../errors/error-codes");

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

const deleteById = async (id) => {
  try {
    const todo = await todoRepository.getById(id);
    if (!todo) {
      throw new GraphQLError(ERROR_CODES.NOT_FOUND, {
        extensions: {
          code: ERROR_CODES.NOT_FOUND,
        },
      });
    }
    await todoModel.updateById({ isDeleted: true }, id);
    return "Deleted Successfully";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  add,
  getAll,
  getById,
  deleteById,
};
