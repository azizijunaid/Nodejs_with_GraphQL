module.exports = (sequelize, DataTypes) => {
  let Todo = sequelize.define(
    'Todo',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );

  return Todo;
};
