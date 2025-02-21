import mongoose from "mongoose";

// Registration Model
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const Users = mongoose.model("users", UserSchema);

// Profile Model
const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Registration", required: true },
  profileImage: { type: String }, // Store file path or URL
  name: { type: String, required: true },
  aboutUs: { type: String },
});

const Profile = mongoose.model("Profile", ProfileSchema);

// Video Model
const VideoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Registration", required: true },
  thumbnail: { type: String }, // Store image file path or URL
  video: { type: String, required: true }, // Store video file path or URL
  description: { type: String },
});

const Video = mongoose.model("Video", VideoSchema);

export { Users, Profile, Video };
