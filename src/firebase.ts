import { firebaseConfig } from "@/config/firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";



const app = initializeApp(firebaseConfig);
const provisioningApp = initializeApp(firebaseConfig, "client-provisioning");

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const documentSharePdfUrl = `https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/downloadDocumentSharePdf`;
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