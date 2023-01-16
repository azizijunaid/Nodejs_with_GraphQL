module.exports = (sequelize, DataTypes) => {
  let Todo = sequelize.define(
    "Todo",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {}
  );

  return Todo;
};
