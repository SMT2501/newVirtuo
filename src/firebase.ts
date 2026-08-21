import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCno6NZH9szwgG9LRX663COQznL9fBbX_M",
  authDomain: "newvirtuo.firebaseapp.com",
  projectId: "newvirtuo",
  storageBucket: "newvirtuo.firebasestorage.app",
  messagingSenderId: "948875716154",
  appId: "1:948875716154:web:05d0e376671ccdfef7f703",
  measurementId: "G-RKMWS7YT11",
};

const app = initializeApp(firebaseConfig);
const provisioningApp = initializeApp(firebaseConfig, "client-provisioning");

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
const provisioningAuth = getAuth(provisioningApp);
export const analytics = analyticsIsSupported().then((supported) => (
  supported ? getAnalytics(app) : null
));

export async function createClientAuthAccount(email: string) {
  const generatedPassword = `${crypto.randomUUID()}!aA1`;
  const credential = await createUserWithEmailAndPassword(provisioningAuth, email, generatedPassword);
  await provisioningAuth.signOut();
  return credential.user;
}

export default app;