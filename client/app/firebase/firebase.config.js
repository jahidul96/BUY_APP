import { initializeApp } from "firebase/app";
import {
  Apikey,
  appId,
  authDomain,
  messagingSenderId,
  storageBucket,
  projectId,
} from "@env";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: Apikey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
