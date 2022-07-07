const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    height:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    weight:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    life_span:{
      type: DataTypes.STRING,
      defaultValue: 'Empty Param'
    },
    image:{
      type: DataTypes.JSON
    }
  },{
    createdAt: false,
    updatedAt: false,
  });
};
