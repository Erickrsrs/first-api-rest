import mongoose from "mongoose";

mongoose.connect(
  //Your MongoDB atlas Cluster connection
  "mongodb+srv://Erick:123@cluster-biblioteca.5srcm5w.mongodb.net/alura-node"
);
let db = mongoose.connection;

export default db;
