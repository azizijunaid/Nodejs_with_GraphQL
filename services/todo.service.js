const todoModel = require('../models').Todo;

const getTodos = async (req, res) => {
  try {
    const result = await todoModel.findAll();
    if (result) {
      res.status(200).send({
        status: 'success',
        message: 'Get All todos Successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(403).send({ status: false, message: `${error.message}` });
  }
};

const addTodo = async (req, res) => {
  const { body } = req;
  try {
    const result = await todoModel.create(body);
    if (result) {
      res
        .status(200)
        .send({ status: 'success', message: 'Todo Added Successfully!' });
    }
  } catch (error) {
    res.status(403).send({ status: false, message: `${error.message}` });
  }
};

const getTodoById = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await todoModel.findAll({
      where: {
        id,
      },
    });
    if (result) {
      res.status(200).send({
        status: 'success',
        message: `Get todos by id ${id} Successfully!`,
        data: result,
      });
    }
  } catch (error) {
    res.status(403).send({ status: false, message: `${error.message}` });
  }
};

const updateTodo = async (req, res) => {
  const { body } = req;
  try {
    const result = await todoModel.findAll({
      where: {
        id: body.id,
      },
    });
    if (result) {
      result.name = body.name;
      res.status(200).send({
        status: 'success',
        message: `Todo updated Successfully!`,
      });
    }
  } catch (error) {
    res.status(403).send({ status: false, message: `${error.message}` });
  }
};

const deleteTodo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await todoModel.destroy({
      where: {
        id,
      },
    });

    console.log(result);
    res.status(200).send({status: true, message: 'Todo Deleted Successfully'})
    // if (result) {
    //   res.status(200).send({
    //     status: 'success',
    //     message: `Get todos by id ${id} Successfully!`,
    //     data: result,
    //   });
    // }
  } catch (error) {
    res.status(403).send({ status: false, message: `${error.message}` });
  }
};

updateTodo;

module.exports = {
  getTodos,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
