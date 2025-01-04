import express from 'express';
import db from './config/Database.js';
import appRouter from './routes/app_routes.js';

const app = express();

try{
    await db.authenticate();
    console.log('Connection has been established successfully.');
    // create
    // await User.sync();
    // console.log('User table created successfully.');
}catch (error){
    console.log('Unable to connect to the database:', error);
}

app.use(express.json());
app.use(appRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});