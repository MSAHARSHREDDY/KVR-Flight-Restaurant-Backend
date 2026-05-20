// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);

//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log(error);

//     process.exit(1);
//   }
// };

// export default connectDB;





import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    //const mongoUri ="mongodb+srv://KVR-Flight-Restaurant:kvr123@cluster0.6ghcbs5.mongodb.net/?appName=Cluster0";

    if (!mongoUri) {
      throw new Error(
        "MONGO_URI missing in .env"
      );
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(
      "Mongo Connection Error:",
      error
    );

    process.exit(1);
  }
};

export default connectDB;