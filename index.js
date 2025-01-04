import express from 'express';
import db from './config/Database.js';

const app = express();

try{
    await db.authenticate();
    console.log('Connection has been established successfully.');
}catch (error){
    console.log('Unable to connect to the database:', error);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});