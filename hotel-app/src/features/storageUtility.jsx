import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig"; 

export const uploadImagesToStorage = async (images) => {
  const imageUrls = [];

  for (const image of images) {
    // Create a storage reference
    const storageRef = ref(storage, `rooms/${image.name}`);

    // Upload the image to Firebase Storage
    await uploadBytes(storageRef, image);

    // Get the download URL and store it
    const url = await getDownloadURL(storageRef);
    imageUrls.push(url);
  }

  return imageUrls;
};
