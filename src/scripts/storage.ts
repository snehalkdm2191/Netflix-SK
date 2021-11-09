import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Create a root reference
const storage = getStorage();

// @ts-ignore
export default async function uploadFile(file, folder) {
  const myRef = ref(storage, `${folder}/${file.name}_${Date.now()}`);
  await uploadBytes(myRef, file);
  return getDownloadURL(myRef);
}
