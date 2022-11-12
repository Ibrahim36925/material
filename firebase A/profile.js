// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   query,
//   where,
//   getDocs,
//   addDoc,
//   onSnapshot,
//   orderBy,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyBrxBARMnTsEcnmC6pGDklkHABW_K7jV3c",
//   authDomain: "chatapp-eb43f.firebaseapp.com",
//   projectId: "chatapp-eb43f",
//   storageBucket: "chatapp-eb43f.appspot.com",
//   messagingSenderId: "966199954793",
//   appId: "1:966199954793:web:c4ce8f68e0f0e0a10201f8",
//   measurementId: "G-JZS6VE0PTC"
// };
// const app = initializeApp(firebaseConfig)
// const  auth = getAuth()
// const  db = getFirestore();

// const curUser = document.getElementById("currentUser"),
//   friends = document.getElementById("friends"),
//   signout = document.getElementById("signout");
// let curUserDom = async (uid) => {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     curUser.innerHTML = `
//   <h1>Name: ${docSnap.data().name}</h1>
//   <h3>Email: ${docSnap.data().email}</h3>
//   `;
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

// let friendsDom = async (email, uid) => {
//   const q = query(collection(db, "users"), where("email", "!=", email));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     friends.innerHTML += `
//     <div>
//     <span>${doc.data().name}</span>
//     <button onclick="startChat('${doc.data().uid}','${uid}','${
//       doc.data().name
//     }')">Start Chat</button>
//     </div>
//     `;
//   });
// };

// window.onload = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(user);
//       curUserDom(user.uid);
//       friendsDom(user.email, user.uid);

//       console.log(user.email, "==> this user logged in");
//       // ...
//     } else {
//       // window.location = "index.html"
//       // User is signed out
//       // ...
//     }
//   });
// };

// let signoutFunc = () => {
//   signOut(auth)
//     .then(() => {
//       console.log("sign out successfully");
//       window.location = "index.html";
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log("error occured while signout");
//     });
// };
// console.log(signout);

// signout && signout.addEventListener("click", signoutFunc);
// if (signout) {
//   signout.addEventListener("click", signoutFunc);
// }

// let chatBox = document.getElementsByClassName("chatBox");
// let currentFriendChat;
// let uniqueUid;
// let messageList = document.getElementById("messageList");

// const startChat = (friendUid, currentUid, name) => {
//   currentFriendChat = friendUid;
//   messageList.innerHTML = "";
//   if (currentUid > friendUid) {
//     uniqueUid = currentUid + friendUid;
//   } else {
//     uniqueUid = currentFriendChat + auth.currentUser.uid;
//   }

//   const q = query(
//     collection(db, "messages"),
//     where("chatId", "==", uniqueUid),
//     orderBy("timestamp", "desc")
//   );
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     messageList.innerHTML = "";

//     querySnapshot.forEach((doc) => {
//       messageList.innerHTML += `
//       <li>${doc.data().message}</li>
//       `;
//     });
//   });

//   chatBox[0].children[0].innerHTML = name;
// };

// window.startChat = startChat;
// let messageValue = document.getElementById("messageValue");
// const sendMessages = async () => {
//   messageList.innerHTML = "";
//   const docRef = await addDoc(collection(db, "messages"), {
//     message: messageValue.value,
//     sender: auth.currentUser.uid,
//     getter: currentFriendChat,
//     chatId: uniqueUid,
//     timestamp: new Date(),
//   });
//   messageValue.value = "";
// };

// window.sendMessages = sendMessages;