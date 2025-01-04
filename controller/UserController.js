import bycript from "bcrypt";
import User from "../models/UserModels.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
};

export const createUser = async (req,res) => {
    const {name,email,password, confirmPassword} = req.body;
    if(password !== confirmPassword) return res.status(400).json({message: "Password not match"});
    const encrypt = await bycript.genSalt();
    const passwordHash = await bycript.hash(password, encrypt);
     try {
       const user = await User.create({name: name, email: email, password: passwordHash});
       res.json(user, {message: `User Created ${name}`});

    }catch (error) {
        res.json({ message: error });
    }
        

};