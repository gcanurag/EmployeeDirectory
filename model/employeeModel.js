module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define("record", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Record;
};
