import mongoose from "./index.js";

  
// Video Model
const VideoSchema = new mongoose.Schema({
    fileName: { type: String, required: true }, // Store video file path or URL
    description: { type: String },
});

const Video = mongoose.model("Video", VideoSchema);

Video.createCollection()
.then(() => console.log("Video collection created"))
.catch((err) => console.error("Error creating collection:", err));

  


export default { Video };