import * as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";
import Constants from "expo-constants";

/* types */
import { Shop } from "../types/shop";
import { initialUser, User } from "../types/user";

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async() => {
  try{
    const snapshot = await firebase
      .firestore()
      .collection("shops")
      .orderBy("score", "desc")
      .get();
    const shops = snapshot.docs.map(doc => doc.data() as Shop);
    return shops;
  } catch (err) {
    console.log(err);
  }
};

export const signin = async () => {
  const userCredintial = await firebase.auth().signInAnonymously();
  const { uid } = userCredintial.user;
  const userDoc = await firebase.firestore().collection("users").doc(uid).get();
  if(!userDoc.exists){
    await firebase.firestore().collection("users").doc(uid).set(initialUser);
    return {
      ...initialUser,
      id: uid
    } as User;
  }else {
    return {
      id: uid,
      ...userDoc.data()
    } as User;
  }
};