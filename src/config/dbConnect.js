import mongoose from "mongoose";

mongoose.connect(
  //Your MongoDB atlas Cluster connection
  "mongodb+srv://Erick:123@livraria-alura.owfrh4i.mongodb.net/livrariaDB"
);
let db = mongoose.connection;

export default db;
