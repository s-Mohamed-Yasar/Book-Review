import mongoose from "mongoose";

const connectDb = () => {
  mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);
};
export default connectDb;
