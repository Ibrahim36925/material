


import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    sendEmailVerification
 } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 import { doc,
   setDoc,
   getDoc,
   getFirestore,
   getDocFromCache,
   collection, 
   getDocs,
   query,
    where
 } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 


const firebaseConfig = {
  apiKey: "AIzaSyBrxBARMnTsEcnmC6pGDklkHABW_K7jV3c",
  authDomain: "chatapp-eb43f.firebaseapp.com",
  projectId: "chatapp-eb43f",
  storageBucket: "chatapp-eb43f.appspot.com",
  messagingSenderId: "966199954793",
  appId: "1:966199954793:web:c4ce8f68e0f0e0a10201f8",
  measurementId: "G-JZS6VE0PTC"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// // codepen end
let register = document.getElementById("signupBtn")


var emailregix = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let registerEmail = document.getElementById("signup-email");
let registerPassword = document.getElementById("signup-password");




register.addEventListener("click", function(event){
  event.preventDefault()
if (firstName.value.trim() === "" ){

  Swal.fire(
    'Error',
    'Please Fill Up Your Form',
    'error'
  )
 
 }else if (lastName.value.trim() === "" ){

  Swal.fire(
    'Error',
    'Invalid Last Name',
    'error'
  )
  }
 else if (!registerEmail.value.match(emailregix) || registerEmail.value === ""){
  Swal.fire(
    'Error',
    'Invalid Email',
    'error'
  )
 }
 
 else if (registerPassword.value.trim() === "" ){
  Swal.fire(
    'Error',
    'Invalid Password (atleast 8 characters)',
    'error'
  )
 }
 else{
    let loader1= document.getElementById('loader1');
    let form2 = document.getElementById("form2")
    loader1.style.display = "block";
    register.style.display = "none"
  createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
    
    .then(async(userCredential) => {
  
    
      // Signed in 
      const user = userCredential.user;
      console.log("USER",user)
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
      await setDoc(doc(db, "users", user.uid), {
      
        firstname: firstName.value,
        lastname: lastName.value,
        email: registerEmail.value,
        password: registerPassword.value,
        uid: user.uid,
      

       


      });
      loader1.style.display = "block";
      register.style.display = "none"
          // ...
          Swal.fire(
            'Success',
            'Successfully Registered ',
            'success'
          )

          

       firstName.value = ""
      lastName.value = ""
      registerEmail.value = ""
    registerPassword.value = ""
    loader1.style.display = "none";
          register.style.display = "block"

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire(
        'Error',
        'Email already in use',
        'error'
      )

    });
  
 
 }

})

// firebase login

let loginBtn = document.getElementById("loginBtn");
 let loader2 = document.getElementById("loader2")


loginBtn.addEventListener('click', function(){
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");


 
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then(async(userCredential) => {
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid);
const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
  
          console.log("Document data:", docSnap.data());
          
      // console.log(userCredential);
      // console.log(user.uid);
      // window.location = "profile.html";

      }
    else{
      console.log("no such document");
    }
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})



// let login = document.getElementById("loginBtn")

// let loader2 = document.getElementById("loader2")

// login.addEventListener("click", function(){
//   let loginEmail = document.getElementById("loginEmail");
//   let loginPassword = document.getElementById("loginPassword");


//   signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//   .then(async (userCredential) => {
//     // Signed in 
    
//     const user = userCredential.user;
//     console.log("USER",user)

//     loader2.style.display = "block"
//     login.style.display = "none"

//     Swal.fire(
//       'success',
//       `login successfully`,
//       'success'
//     )
    
//     loginEmail.value = "" 
//     loginPassword.value = ""
//     const docRef = doc(db, "users", user.uid);
//     const docSnap = await getDoc(docRef);
    
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//  window.location="profile.html"
// }
    
//   })
    
//         Swal.fire(
//         'Error',
//         `(${splitmessage[1]}`,
//         'error'
//       )
//     // }
    
//   });

  
  
//  })
    // ...
//     const docRef = doc(db, "users", user.uid);
// const docSnap = await getDoc(docRef);


    

// window.localStorage.setItem("userobj", JSON.stringify(docSnap.data()))
// if (docSnap.exists()) {
  
//   console.log("Document data:", docSnap.data());
//   const querySnapshot = await getDocs(collection(db, "users")) ;
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, )//" => ", doc.data());
//     let  docsss =  doc.data()
//     console.log(docsss)
//      if( doc.id){
//     // let oi = document.getElementById("oi")
//     // console.log(oi)
//     // oi.innerHTML += `
//     // <table>
  
//     // <tr ><td class="pup">${docsss.name}</td></tr>
//     // </table
//     // `
    
//   }
//   arrfriend.push(docsss.name)
//     window.localStorage.setItem("namearr",JSON.stringify(arrfriend))
//     console.log(arrfriend)
//   });


  
//   // window.localStorage.setItem("userobj", JSON.stringify(docSnap.data()))
  
  
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }


// window.location = "profile.html";

//   })

//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message
//    let splitmessage = errorMessage.split("/")
   
//   console.log("Error",errorMessage)
  
 
//       Swal.fire(
//         'Error',
//         `(${splitmessage[1]}`,
//         'error'
//       )
//     // }
    
//   });

  
  
// })

// let loginBtn = document.getElementById("loginBtn")

// let loginAccount = () => {
//   let loginEmail = document.getElementById("loginEmail");
//   let loginPassword = document.getElementById("loginPassword");
//     signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(userCredential);
//         console.log(user.uid);
//         window.location = "profile.html";
  
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
//   };
  
//   console.log(loginBtn.addEventListener("click", loginAccount));
  

// // const forgotPassword = document.getElementById("forgot-password")
// // forgotPassword.addEventListener("click",function() {
// //   let submitForm = document.getElementById("submit-form")
// //   let mainForm = document.getElementById("main-form")
// //   submitForm.style.display="block"
// //   mainForm.style.display="none"
// // })
// // const submitEmail = document.getElementById("submit-email")
// // const submitBtn = document.getElementById("submit-btn")
// // submitBtn.addEventListener("click",function(){


// //  sendPasswordResetEmail(auth,loginEmail.value)
// //  .then(() => {
// // alert("Reset link send to your email id")
// //  })
// //  .catch(() => {
// // alert("next time")
//  //   // ..
// //  });
// // })

// const forgotPassword = document.getElementById("forgot-password")
// forgotPassword.addEventListener("click",function() {
//   sendPasswordResetEmail(auth,loginEmail.value)
//   .then(() => {
// alert("reset link send to your email id")
//   })
//   .catch(() => {
//  alert("next time")
//     // ..
//   });
// })



// // const sendVerificationEmail = ()=>{

// //}





// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   onAuthStateChanged,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// import {
//   getFirestore,
//   doc,
//   setDoc,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBrxBARMnTsEcnmC6pGDklkHABW_K7jV3c",
//   authDomain: "chatapp-eb43f.firebaseapp.com",
//   projectId: "chatapp-eb43f",
//   storageBucket: "chatapp-eb43f.appspot.com",
//   messagingSenderId: "966199954793",
//   appId: "1:966199954793:web:c4ce8f68e0f0e0a10201f8",
//   measurementId: "G-JZS6VE0PTC"
// };

// const app = initializeApp(firebaseConfig)
//   auth = getAuth(app)
//   db = getFirestore(app);


// const signupEmail = document.getElementById("signup-email"),
//   signupPassword = document.getElementById("signup-password"),
//   signupBtn = document.getElementById("signupBtn"),
//   signout = document.getElementById("signout"),
//   loginEmail = document.getElementById("loginEmail"),
//   loginPassword = document.getElementById("loginPassword"),
//   loginBtn = document.getElementById("loginBtn");
// let createAccount = () => {
//   createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
//     .then(async (userCredential) => {
//       const user = userCredential.user;
//       sendEmailVerification(auth.currentuser)
//       console.log(userCredential);
//       console.log(user.uid);
//       await setDoc(doc(db, "users", user.uid), {
//         email: signupEmail.value,
//         password: signupPassword.value,
//         uid: user.uid,
//       });
//       console.log()

//       window.location = "profile.html";
//     })

//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

// signupBtn.addEventListener("click", createAccount);
// let loginAccount = () => {
//   signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(userCredential);
//       console.log(user.uid);
//       window.location = "profile.html";

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

// console.log(loginBtn.addEventListener("click", loginAccount));