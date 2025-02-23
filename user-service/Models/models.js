import mongoose from "./index.js";

// Registration Model
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accessToken: { type: String, required: false},
    refreshToken: { type: String, required: false}
});
  
const Users = mongoose.model("users", UserSchema);



  
  // Profile Model
const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Registration", required: true, unique: true },
    profileImage: { type: String }, // Store file path or URL
    name: { type: String, required: true },
    aboutUs: { type: String },
});

const Profile = mongoose.model("Profile", ProfileSchema);


Users.createCollection()
.then(() => console.log("User collection created"))
.catch((err) => console.error("Error creating collection:", err));

Profile.createCollection()
.then(() => console.log("Profile collection created"))
.catch((err) => console.error("Error creating collection:", err));



export default { Users, Profile };