import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  updatePassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import config from "../config/config";

const Firebase = initializeApp(config.firebase);

export const Providers = {
  google: new GoogleAuthProvider(),
  reset: updatePassword,
  sendPasswordResetEmail: sendPasswordResetEmail,
  signInWithEmailAndPassword: signInWithEmailAndPassword,
  signInWithPopup: signInWithPopup,
  createUserWithEmailAndPassword: createUserWithEmailAndPassword,
  verifyPasswordResetCode: verifyPasswordResetCode,
  confirmPasswordReset: confirmPasswordReset,
};

export const auth = getAuth();
export const fireStoreReference = getFirestore(Firebase);
export const cloudStorageReference = getStorage(Firebase);
