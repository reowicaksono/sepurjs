import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('user', {
    name : {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.STRING
    },
    refresh_token : {
        type: Sequelize.TEXT
    },
});

export default User;