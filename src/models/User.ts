import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "customer",
    },
    welcomeEmailSent: {
   type: Boolean,
   default: false
}
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);