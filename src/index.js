import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path:'./.env'
})

connectDB()
.then(() => {
    // mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
      });
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTION FAILED!!!", err);
})

// connectDB()

// .then(() => {
//   app.listen(process.env.PORT || 8000, () => {
//     console.log(`Server is running at port : ${process.env.PORT}`)
//   })
// })
// .catch((err) => {
//   console.log("Mongo db connection Failded!!!!", err)
// })



// .then(() => {
//         app.listen(process.env.PORT || 8000, () => {
//           console.log(`App is listen on Port : ${process.env.PORT}`);
//         });
// })
// .catch((error) => {
//     console.log("Mongo db connection failed!!!", error)
// })



// import Express from "express";
// const app = Express()
// (async () => {
//   try {
    // await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // app.on("error", (error) => {
    //   console.log("Error: ", error);
    //   throw error;
    // });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
