import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()



// import Express from "express";
// const app = Express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
