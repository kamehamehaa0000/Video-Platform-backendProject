import { v2 as cloudinary } from "cloudinary";
import fs, { unlinkSync } from "fs"; //nodejs file system
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has uploaded successfully
    unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //removes the locally save temp file as the upload operation gets failed
    return null;
  }
};
const deleteFromCloudinary = async (url) => {
  try {
    const publicId = url.split("/").pop().split(".")[0]; //extracting publicId from Url
    cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error(`Error deleting image from Cloudinary: ${error.message}`);
  }
};
export { uploadOnCloudinary, deleteFromCloudinary };
