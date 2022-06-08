const {create} = require("../models/user");
const Register = require("../models/user");

const bcrypt = require('bcrypt');
const db = require('../config/db.config');

module.exports = {

createUser: (req,res) => {
const body = req.body;
const salt = bcrypt.genSaltSync(10);
body.password = bcrypt.hashSync(body.password, salt);
create(body, (err,results) => {
    if (err) {
        console.log(err);
        return res.status(500).json({
            success:0,
            message: "database connection error"
        });
    }
    return res.status(200).json({
        success:1,
        // data:results
    })
})
},
    //register a new client


    // async createUser(req,res){
    //     try {
    //         let userInfo = {
    //            Full_Name:req.body.full_name,
    //             Password:req.body.password,
    //             Email:req.body.email,
    //         };

    //         console.log(userInfo);
    //         const users = await Register.create(userInfo);
    //         res.status(200).send(users)
    //     } catch (error) {
    //         console.log("this is the error", error);
    //     }
    // },

//get all registered
async getUserAll (req,res){
    try {
        let users = await Register.findAll({})
        res.status(200).json(users)

    }catch(err){
        res.status(500).json("Something went wrong");
    }
},

    // get user byy id
    async getUserById  (req,res) {
        try {
            let id = req.params.User_Id
            let users = await Register.findOne({ where: {User_Id :id }})
            res.status(200).send('User  succefully by id ')
        
        } catch (error) {
            console.log(error);
        }
            },

 // update user
 async updateUser (req,res){
    try{
        let id = req.params.User_Id
        let users = await Register.update(req.body,{where:{User_Id :id }})
        res.status(200).send('User updated succefully')

    } catch (err){
        console.log(err)
    }
},
    // delete user by id
    async deleteUser (req,res){
        try{
            const id = req.params.User_Id
            await Register.destroy({where:{User_Id:id}})
            res.status(200).send("user is deleted")

        }catch (err){
            res.status(500).send("Something went wrong while deleting question",err)

           
        }
    }
}