// NPM packages
import { Firestore, DocumentData, getDoc } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";

import { fireStoreReference } from "../config/firebase";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(fireStoreReference, path);
  await addDoc(collectionReference, data);
}

export async function createDocumentWithId(
  path: string,
  id: string,
  data: object
) {
  const documentReference = doc(fireStoreReference, path, id);
  await setDoc(documentReference, data);

  return id;
}

// Read files
export async function getCollection(db: Firestore, path: string) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

export async function getDocument(path: string, id: string) {
  const documentReference = doc(fireStoreReference, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}

// Update file
export async function updateDocument(path: string, id: string, data: object) {
  const docReference = doc(fireStoreReference, path, id);
  await updateDoc(docReference, data as DocumentData);
}

// Delete file
export async function deleteDocument(path: string, id: string) {
  const docReference = doc(fireStoreReference, path, id);
  await deleteDoc(docReference);
}
