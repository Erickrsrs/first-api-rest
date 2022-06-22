import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Erick:11335599@cluster-biblioteca.5srcm5w.mongodb.net/alura-node"
);
let db = mongoose.connection;

export default db;
