// Import from utils, from the functions, uploadPhoto and createUser
import { uploadPhoto, createUser } from './utils';

// Defining the asynchronous function to upload user and photo
// Using promise.all to to run both the uploadPhoto and createUser
export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
