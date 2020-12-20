# First Step: use React Native and Firebase

<a id = "contents">

# Contents
* [Flow](#flow)
* [introduction](#intro)
* [console](#console)
* [expo](#expo)
* [firebase](#firebase)
* [firebase2](#firebase2)
* [firebase3](#firebase3)
* [refactoring](#refactoring)

### Pickup
* [firebase.firestore() is not a function when trying to initialize Cloud Firestore](https://stackoverflow.com/questions/46636255/firebase-firestore-is-not-a-function-when-trying-to-initialize-cloud-firestore)

<a id = "flow">

## Flow
* ![Image](../src/Section02/images/init001.png)

### [Return to Contents](#contents)


<a id = "intro">

## introduction
* ![Image](../src/Section02/images/intro001.png)
* ![Image](../src/Section02/images/intro002.png)
* ![Image](../src/Section02/images/intro003.png)
* ![Image](../src/Section02/images/intro004.png)
* ![Image](../src/Section02/images/intro005.png)
* ![Image](../src/Section02/images/intro006.png)
* ![Image](../src/Section02/images/intro007.png)

### [Return to Contents](#contents)


<a id = "console">

## console
* ![Image](../src/Section02/images/cons001.png)
* ![Image](../src/Section02/images/cons002.png)
* ![Image](../src/Section02/images/cons003.png)
* ![Image](../src/Section02/images/cons004.png)
* ![Image](../src/Section02/images/cons005.png)
* ![Image](../src/Section02/images/cons006.png)
* ![Image](../src/Section02/images/cons007.png)
* ![Image](../src/Section02/images/cons008.png)
* ![Image](../src/Section02/images/cons009.png)

### [Return to Contents](#contents)


<a id = "expo">

## expo
* ![Image](../src/Section02/images/expo001.png)
* ![Image](../src/Section02/images/expo002.png)
* ![Image](../src/Section02/images/expo003.png)
* ![Image](../src/Section02/images/expo004.png)
* ![Image](../src/Section02/images/expo005.png)
* ![Image](../src/Section02/images/expo006.png)
* ![Image](../src/Section02/images/expo007.png)

## commands
  ```
  mkdir shop-review
  cd shop-review
  ```
  ```
  npm install expo
  npm install expo-cli
  expo init shop-review-app (expo-template-blank-typescript)
  ```
  ```
  npm install expo-cli
  cd shop-review-app
  expo start
  ```

### [Return to Contents](#contents)


<a id = "firebase">

## firebase
* ![Image](../src/Section02/images/fire001.png)
* ![Image](../src/Section02/images/fire002.png)
* ![Image](../src/Section02/images/fire003.png)
* ![Image](../src/Section02/images/fire004.png)
* ![Image](../src/Section02/images/fire005.png)

* commands
  * work at shop-review-app
  ```
  expo install firebase (or npm install firebase-tools)
  ```

### [Return to Contents](#contents)


<a id = "firebase2">

## firebase2
* ![Image](../src/Section02/images/fire2001.png)
* ![Image](../src/Section02/images/fire2002.png)
* ![Image](../src/Section02/images/fire2003.png)

* commands

* Pickup
  * [リストと key](https://ja.reactjs.org/docs/lists-and-keys.html)
  * [フック API リファレンス](https://ja.reactjs.org/docs/hooks-reference.html)
  * [Source Code](https://github.com/takahi5/shop-review/tree/sec2/connect_firetore/shop-review-app)

### [Return to Contents](#contents)


<a id = "firebase3">

## firebase3
* ![Image](../src/Section02/images/fire3001.png)

* commands

* Pickup
  * [firestoreのreferenceとかsnapshotで混乱したので整理してみた](https://qiita.com/takahi5/items/a07cc77f6f11c1bd973c)

### [Return to Contents](#contents)


<a id = "refactoring">

## refactoring
* ![Image](../src/Section02/images/refac01.png)

* commands
  ```
  yarn add expo-constants ( or npm install expo-constants)
  ```

* Pickup
  * [firestoreのreferenceとかsnapshotで混乱したので整理してみた](https://qiita.com/takahi5/items/a07cc77f6f11c1bd973c)

### [Return to Contents](#contents)

