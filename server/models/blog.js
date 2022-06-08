const { Sequelize } = require("sequelize");
const sequelize = require ('../config/db.config');

const Register = sequelize.define("Blogs", {
    Blog_Id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:true,
        primaryKey:true
    },
    Title: {
        type:Sequelize.STRING,
        allowNull:false
    },
    Body:{
       type:Sequelize.STRING,
       allowNull: false 
    },
    Name:{
        type:Sequelize.STRING,
        allowNull: false 
     }
    },
    {
        timestamps: false,
        freezeTableName: true,
})

module.exports = Register;