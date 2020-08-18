import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD23of5crh0kK7OqzddXCEi6hnzlKTbOHs",
  authDomain: "e-clothing-699d2.firebaseapp.com",
  databaseURL: "https://e-clothing-699d2.firebaseio.com",
  projectId: "e-clothing-699d2",
  storageBucket: "e-clothing-699d2.appspot.com",
  messagingSenderId: "65288086798",
  appId: "1:65288086798:web:af70e6ec36b0b3869e635f",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((ac, collection) => {
    ac[collection.title.toLowerCase()] = collection;
    return ac;
  }, {});
};

// export const addCollectionsAndDocuments = async (key, objectsToAdd) => {
//   const collectionRef = firestore.collection(key);

//   const batch = firestore.batch();

//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
