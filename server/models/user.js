const { Sequelize } = require("sequelize");
const sequelize = require ('../config/db.config');

const Users = sequelize.define("users", {
    User_Id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:true,
        primaryKey:true
    },
    Full_Name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
       type:Sequelize.STRING,
       allowNull: false 
    },
    Password:{
        type:Sequelize.STRING,
        allowNull: false 
     }
    },
    {
        timestamps: false,
        freezeTableName: true,
})

module.exports = Users;

// module.exports = {
//     create: (data,callback)=> {
//         sequelize.query(
//             `insert into users (Full_Name,Password,Email)
//             values(?,?,?);
//             `,
//             [
//                 data.Full_Name,
//                 data.Password,
//                 data.Email
//             ],
//             (error, results, fields)=> {
//                 if (error){
//                     callback(error);
//                 }
//                 return callback(null, results)
//             }
//         )
//     }
// }