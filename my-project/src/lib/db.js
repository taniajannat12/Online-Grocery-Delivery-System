// import mongoose from "mongoose";
// import dns from "dns";

// // Force Google DNS
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const MONGODB_URI = process.env.MONGODB_URI;

// async function dbConnect() {
//   if (!MONGODB_URI) {
//     throw new Error("MONGODB_URI is not defined");
//   }

//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   return mongoose.connect(MONGODB_URI, {
//     serverSelectionTimeoutMS: 10000,
//   });
// }

// export default dbConnect;




import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(MONGODB_URI);
}

export default dbConnect;