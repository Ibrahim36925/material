// chapter 1 alert
// alert("Ismail");  //string
// alert(12345)     // numbers
// alert(true)     // boolean

//chapter 2  variables for Strings
// var name = "Ibrahim"
// var email = "mohammadibrahimahmed135@gmail.com"
// var phone = 9283670

// document.write(name)
// document.write("<br>")

// document.write(email)
// document.write("<br>")

// document.write(phone)
  
// chapter 3 Variables for Numbers
// var twentyThree = 23;
//  var seven = 7;
//  var newNum = twentyThree + seven;
//  document.write(newNum)

// chapter 4 Variable Names Legal and Illegal
// var $name = "ibrahim"
// document.write($name)
// document.write("<br>")
// var father_name = "maqsood"
// document.write(father_name)

// chapter 5 Math expressions Familiar operators:

// var whatsLeftOver = 15 % 2;
// document.write(whatsLeftOver)

// var num1 = 52;
// var num2 = 45;
// var subNumbers = num1 - num2;
// var mulNumbers = num1 * num2;
// var divNumbers = num1 / num2;
// var Module = num1 % num2;

// document.write("<br>");
// document.write("<br>");
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
// document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
// document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");

// chapter 6  Math expressions Unfamiliar operators:

// var a = 7, b = 12;
// var result = --a - --b + ++b + b--;  // 6-11+12+12
// document.write(result);

// var a = 2, b = 1;
// var result = --b - --a + ++b + a--;  //0-1+1+1
// document.write(result);

//chapter 7 Math expressions Eliminating ambiguity:

// var totalCost = (1 + 3) * 4;
// document.write(totalCost)     // 16

// var totalCost = 1 + 3 * 4;
// document.write(totalCost)   //13

// var resultOfComputation = (2 * 4) * 4 + 2;
// document.write(resultOfComputation)   // 34

// chapter 8 Concatenating text strings

// alert(33+"33")    //33
// alert("33"+"33")  //33

// var name = "Ibrahim"
// document.write("My name is " + name)

// chapter 9 prompts
// var numberOfCats = +prompt("How many cats?");
//  var tooManyCats = numberOfCats + 1;
//  document.write(tooManyCats)

// chapter 10 if statements
// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }

// cahpter 11 comparison operator
// console.log("2"==2) //true
// console.log("2"===2) //false
// console.log("2"!=2)  //false
// console.log("2"!==2) //true
// console.log(4>=2) // true
// console.log(4<=2) //false

//chapter 12 if else/else if statement
// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }
//  else if(x==="Rome"){
//     alert("Incorect but close")
//  }
//  else{
//     alert("Incorrect answer")
//  }

// chapter 13 Testing sets of conditions

// var city = prompt("Enter your city")
// if(city === "Karachi"|| city === "karachi"){
//    alert("WElcome to city of lights")
// }
// else{
//    alert("Invalid city")
// }

// var gender = prompt("Enter your gender")
// if(gender==="male"||gender==="Male"){
//    alert("Good Morning Sir")
// }
// else if(gender==="female"||gender==="Femmale"){
//    alert("Good Morning Madam")
// }
// else{
//    alert("Invalid gender")
// }

// var color = prompt("Enter your signal color")
// if(color === "red" || color === "Red"){
//    document.write(`<table class="my-table">
//    <tr>
//    <th>Signal color</th>
//    <th>Message</th>
//    </tr>
//    <tbody>
//    <tr>
//    <td>$color</td>
//    <td>Stop</td>
//    </tr>
//    </tbody>
//    </table>`)
// }
// else if(color === "yellow" || color === "Yellow"){
//    document.write(`<table class="my-table">
//    <tr>
//    <th>Signal color</th>
//    <th>Message</th>
//    </tr>
//    <tbody>
//    <tr>
//    <td>$color</td>
//    <td>Get Ready</td>
//    </tr>
//    </tbody>
//    </table>`)
// }
// else if(color === "green" || color === "Green"){
//    document.write(`<table class="my-table">
//    <tr>
//    <th>Signal color</th>
//    <th>Message</th>
//    </tr>
//    <tbody>
//    <tr>
//    <td>$color</td>
//    <td>Lets Go</td>
//    </tr>
//    </tbody>
//    </table>`)
// }
// else{
//    alert("Invalid Color")
// }

// var html = prompt("Do you know html")
// var css = prompt("Do you know css")
// var js = prompt("Do you know js")


// var address = prompt("Enter your address")
// if ((html === "yes" || css === "yes") && js === "yes") {
//   alert("Next Question")
// }

// else{
//    alert("You are not hired")
// }
     
//chapter 14 Nested if
//  var html = prompt("Do you know html")
//  var css = prompt("Do you know css")
//  var js = prompt("Do you know js")


//  if ((html === "yes" || css === "yes") && js === "yes") {
//     var address = prompt("Enter your address")
//     if (address==="karachi"){
   
//     }
//     var age = +prompt("Enter your age")
//     if (age>=17){
   
//     }
//     var exp = +prompt("Enter your experience")
//     if (exp>=2){
//        alert("You are hired")
//     }
//  }

//  else{
//     alert("You are not hired")
//  }

//chapter 15 Array
// var city = ["Islamabad","Karachi","Lahore","Peshawar"]
// document.write(`Welcome to ${city[1]}`)     // karachi

//chapter16 Arrays Adding and removing elements
// var a = ["Ibrahim","Ismail","Ali","Umer"]
// a.push("Ahmed")
// document.write(a)     // Ahmed last may add hogaye ga

// var a = ["Ibrahim","Ismail","Umer","Ali"]
// a.pop()
// document.write(a)   // ali end say remove hogaye ga

// var acc = ["Keyboard","mouse","printer","monitor"];            
// document.write("<h2>Devices: </h2>");
// document.write(`<h2>${acc}</h2><br>`);

// var firstDevice = acc.pop();
// document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

// var secDevice = acc.pop();
// document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

// var thirdDevice = acc.pop();
// document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

// var fourthDevice = acc.pop();
// document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

// var pets = []
// pets[0]="dog"
// pets[1]="cat"
// pets[3]="hen"
// document.write(pets)

// chapter 17 Arrays Removing, inserting,and extracting elements
//  var a = ["Ibrahim","Ismail","Ali","Umer"]
//  a.shift()
//  document.write(a)  // start say remove karta hai

// var a = ["Ibrahim","Ismail","Ali","Umer"]
// a.unshift("Ahmed")
// document.write(a)   // start may add kardeta hai

// var a = ["Ibrahim","Ismail","Ali","Umer"]
// a.splice(1,0,"hassan")
// document.write(a)       // Ibrahim,Hassan,ismail.........

// var colors = ["red", "green", "blue"];
// var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
// var indexNumber = +prompt("which color do you want to add on that index? ");
// colors.splice(indexNumber, 0, colorInput);
// document.write(colors);

//  var a = ["Ibrahim","Ismail","Ali","Umer"]
// var b = a.slice(1,4)
//  document.write(b)   // ismail,ali,umer  

// var a = ["Ibrahim","Ismail","Ali","Umer"]
// var b = a.slice(1)
//  document.write(b)   // ismail,ali,umer

// chapter 18 loops
// for (i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }
// var table = +prompt("Enter your table")
// var length = +prompt("Enter your length")
// for(var i=1; i<=length; i++){
//   document.write(table + "x" + i + "=" + table*1 + "<br>")
// }
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }

// document.write("<h1> Counting</h1>")
// for (i = 1; i <= 15; i++) {

//     document.write(i + " ")
// }




// document.write("<h1>Reverse Counting</h1>")

// for (i = 10; i >= 0; i--) {
//     document.write(i + " ")
// }


// document.write("<h1>Even Number</h1>")
// for (i = 0; i <= 20; i++) {

//     if (i % 2 === 0) {
//         document.write(i)
//     }
// }


// document.write("<h1>ODD Number</h1>")
// for (i = 0; i <= 20; i++) {

//     if (i % 3 === 0) {
//         document.write(i)
//     }
// }


// document.write("<h1>Series</h1>")
// for (i = 2; i <= 20; i++) {

//     if (i % 2 == 0) {
//         document.write(i + "k" + "  ")
//     }
// }

//chapter19 for loops Flags, Booleans, array length,and loopus interruptus

// var cleanestCity = ["Karachi","Peshawar","Multan","Quetta"]
// var city = prompt("Enter your city")
// var flags = "no"
// for(var i=0; i<cleanestCity.length; i++)
// if(cleanestCity[i]===city){
//     flags = "yes"
//     alert("This city are the cleanest city")
// }
// if(flags === "no"){
//     alert("Not cleanest city")
// }
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("Enter a snack :")
// flag = false;
// for (i = 0; i <= A.length; i++) {
//     if (userInput == A[i]) {

//         flag = true;

       
//         index = i;
//     }
// }
// if (flag == true) {
//     document.write(userInput + " is available at index " + index + " in our bakery")
// }
// else {
//     document.write(userInput + " is not available")
// }

// chapter 20 for nested loop
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//  for(var i = 0; i < arr.length; i++){
//      for(var j = 0; j < arr[i].length; j++){
//          document.write(arr[i][j])
//      }
//      document.write("<br />")
//  }
//  for(var i = 0; i < 5; i++){
//      for(var j = 0; j < 3; j++){
//        document.write("Pakistan Zindabad" + "<br>")
//      }
//      }
//      var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//  for(var i = 0; i < arr.length; i++){
//      for(var j = 0; j < arr[i].length; j++){
//          document.write(arr[i][j])
//      }
//      document.write("<br />")
//     }

// chapter 21 Changing case
// var city = prompt("Enter your city")
// var cleanestCity = ["karachi","lahore","multan","islamabad"]
// city=city.toLowerCase()
// for(var i=0; i<=3; i++){
// if(cleanestCity[i]===city){
//     alert("Cleanest city")
// }

// }

// chapter 22 Strings:Measuring length and extracting parts
// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }
// }


// var a = ["Ibrahim","Ismail","Umer","Ali"]
// a.splice(1,1,"Hassan")
// document.write(a) 
// document.write("<br>")
// var a = ["Ibrahim","Ismail","Umer","Ali"]
// var b = a.splice(1,4)
// document.write(b) 
// document.write("<br>")

// var a = "My name is Ibrahim"
// var b = a.indexOf("Ibrahim")
// document.write(b)
// document.write("<br>")

// var a = "to be or not be"
// var b = a.lastIndexOf("be")
// document.write(b)
// document.write("<br>")

// var a = "ibrahim"
// var b = a.charAt(1)
// document.write(b)
// document.write("<br>")

// // var fname = prompt("Enter your first Name : ");
// // var lname = prompt("Enter your last Name : ");


// // var fullName = fname+" ".concat(lname);

// // document.write("Welcome " + fullName);

// document.write("<br>")
// var city="Karachi is the international city of Pakistan"
// var change =  city.replace("Karachi","Islamabad")
// document.write(change)
// document.write("<br>")

// var message = "Ali and Sami are best friends. They play cricket and football together.";

//     var replaceWords = message.replace(/and/g, "&");


//     document.write("Current Message  : " + message + "<br>" + "After replacement: " + replaceWords);




    // var i=0;
    // while(i<=5){
    //     document.write(i+"<br>")
    //     i++
    // }

    // var i=0
    // do{
    //     document.write(i)
    //     i++
    // }
    // while(i<=5)
// document.write("<br>")
//     for(var i=1; i<=10; i++){
//         if(i%2==0)

//         document.write(i)
//     }


//     function number(a,b){
//         var num = a+b
//         return num
//     }
//     var num2 = number("ibrahim ","akmed")
//     document.write(num2)

//     function num(x,y){
//     document.write(x+y)
//     }
//     num(2,5)

// for(var i=1; i<=10; i++){
//     for(var j=1; j<=i; j++){
//         document.write(i+"<br>")
//     }
// }

// for(var i=0; i<5; i++){
//     for(var j=0; j<3; j++){
//         document.write("Ibrahim"+"<br>")
//     }
// }

// var firstNames = ["Ibrahim","Sohaib","Amna","Iman"]
// var lastNames = ["Ahmed","Khan","Hermain","Fatima"]
// for(var i=0; i<firstNames.length; i++){
//     for(var j=0; j<lastNames.length; j++){
//         document.write(firstNames[i]+ " " + lastNames[j]+"<br>")
//     }
// }
// for(var i=0; i<5; i++){
//   for(var j=0; j<i; j++){
//     document.write(i)
//   }
// }

// var number = +prompt("Enter your number")
// if(number % 2 === 0){
//    alert("Even Number")
// }
// else{
//     alert("Odd number")
// }

// var a = "   Ibrahim   "   // 13
// document.write(a.length)
// var b= a.trim()             //7
// document.write("<br>"+b)
// document.write(b.length)

// var age = "95"
// age.toString()
// console.log(age)    // num to string 1st method

// console.log(typeof(age))

// console.log(age+2)

// var age = "95"      // 2nd method
// age = age + ""
// console.log(typeof(age))

// var arr1 = ["banana","apple","mango"]
// var arr2 = ["watermillion","papaya","strawberry"]
// console.log(arr1.concat(arr2))

// var arr1 = ["banana","apple","mango"]

// console.log(arr1.join(" "))


// var arr1 = ["banana","apple","mango"]

// console.log(arr1.split(""))



// var arr = [5,9,2,4,1,3,2,1,7,9]
// console.log(arr.sort())


// var arr = ["tomato","potato","onion","peas","garlic","ginger","carrot","ladyfinger","cucumber"]
// console.log(arr.sort())



// var programming = prompt("Enter your programming")
// switch(programming){
//     case "html":
//   alert("h")
//   break;
//   case "css":
//     alert("c")
//     break;
//     case "js":
//         alert("j")
//         break;
//   default:
//     alert("C++")
    
// }

// var div = document.createElement("div")
// var p = document.createElement("p")
// var textNode = document.createTextNode("Hy")
// var textNode1 = document.createTextNode("By")
// div.appendChild(textNode)
// p.appendChild(textNode1)
// div.appendChild(p)
// console.log(div)


// var text = document.getElementById("text4")
// console.log(text.parentElement.nodeName)

// var text = document.getElementById("text4")
// console.log(text.parentElement.childNodes[1])

// var arr = ["Karachi","Islamabad","Pesawar","Multan"]
// localStorage.setItem("Name","Ibrahim")
// localStorage.setItem("cities",JSON.stringify(arr))
// arr=JSON.parse(localStorage.getItem("cities"))
// localStorage.clear()
// console.log(arr)

// for each
// const fruits = ["apple","mango","pear","banana"]
// fruits.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })  //[45,30,25,15]

// const fruits = [45,30,25,15]
// const fmap = fruits.forEach((value,index,arr)=>{
//     return value+22
// })
// console.log(fmap)  // undefined return nahi karta yeh

//map
// const fruits = [45,30,25,15]
// const fmap = fruits.map((value,index,arr)=>{
//     return value+22
// })
// console.log(fmap)  //[ 67, 52, 47, 37 ]

// const fruits = [45,30,25,15]
// const fmap = fruits.filter((value,index,arr)=>{
//     return value>15
// })
// console.log(fmap)  //[ 40,35,25 ]

//Promise

// let compelete = true
// let prom = new Promise((resolve, reject) => {
//     if(compelete){
//         resolve("I am a successful")
//     }
//     else{
//         reject("I am a failed")
//     }
// })
// console.log(prom)   Promise { 'I am a successful' }

// let compelete = false
// let prom = new Promise((resolve, reject) => {
//     if(compelete){
//         resolve("I am a successful")
//     }
//     else{
//         reject("I am a failed")
//     }
// })
// console.log(prom) Promise { <rejected> 'I am a failed' }

// function prom(compelete){
//    return new Promise((resolve, reject) => {
//              if(compelete){
//                  resolve("I am a successful")
//              }
//              else{
//                  reject("I am a failed")
//              }
//          })
// }
// console.log(prom(true)) //Promise { 'I am a successful' }

//  function prom(compelete){
//     return new Promise((resolve, reject) => {
//               if(compelete){
//                   resolve("I am a successful")
//               }
//               else{
//                   reject("I am a failed")
//               }
//           })
//  }
//  let onfullfilment = (result)=>{
//     console.log(result);
//  }
//  let onrejection = (error)=>{
//     console.log(error);
//  }

//  prom(true).then(onfullfilment)
//  prom(true).catch(onrejection)  I am a successful

// function prom(compelete){
//     return new Promise((resolve, reject) => {
//               if(compelete){
//                   resolve("I am a successful")
//               }
//               else{
//                   reject("I am a failed")
//               }
//           })
//  }
//  let onfullfilment = (result)=>{
//     console.log(result);
//  }
//  let onrejection = (error)=>{
//     console.log(error);
//  }

//  prom(false).then(onfullfilment)
//  prom(false).catch(onrejection) I am a failed

//  function prom(compelete){
//      return new Promise((resolve, reject) => {
//                if(compelete){
//                    resolve("I am a successful")
//                }
//                else{
//                    reject("I am a failed")
//                }
//            })
//   }
//   let onfullfilment = (result)=>{
//      console.log(result);
//   }
//   let onrejection = (error)=>{
//      console.log(error);
//   }
//   prom(false).then(onfullfilment).catch(onrejection) I am a failed
  
// function prom(compelete){
//     return new Promise((resolve, reject) => {
//               if(compelete){
//                   resolve("I am a successful")
//               }
//               else{
//                   reject("I am a failed")
//               }
//           })
//  }

 
//  prom(true).then((result)=>{
//     console.log(result);
//  }).catch((error)=>{
//   console.log(error);  I am a successful
//  })

// function prom(a,b){
//     return new Promise((resolve, reject) => {
//         var c = a / b
//               if(a,b){
//                   resolve(`Your answer is ${c} `)
//               }
//               else{
//                   reject("Failed to calculate")
//               }
//           })
//  }

 
//  prom(9,2).then((result)=>{
//     console.log(result);
//  }).catch((error)=>{
//   console.log(error);   Your answer is 4.5 
//  })

// function prom(a,b){
//     return new Promise((resolve, reject) => {
//         var c = a / b
//               if(a,b){
//                   resolve(`Your answer is ${c} `)
//               }
//               else{
//                   reject("Failed to calculate")
//               }
//           })
//  }

 
//  prom(5,0).then((result)=>{
//     console.log(result);
//  }).catch((error)=>{
//   console.log(error);   Failed to calculate
//  })

// async and await

// async function test (){
//   return "hello"
// }
// test().then((result)=>{
//  console.log(result);
// }) hello

// let test = async function (){
//     return "hello"
//   }
//   test().then((result)=>{
//    console.log(result);
//   })  hello

//  let test = async ()=> "hello"
    
  
//   test().then((result)=>{
//    console.log(result);
//   })    hello

// async function test(){
//     console.log("2 : Message");
//    await console.log("3 : Message");
//     console.log("4 : Message");
// }
// console.log("1 : Message");
// test()
// console.log("5 : Message"); 1,2,3,5,4

// async function test(){
//     const response = await fetch("json/student_data.json")
//     const student = await response.json()
//     return student
// }
// test()
// .then((res)=>{
//   console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
//   })     file agai ki object ki pori ki pori

// async function test(){
//     try{
//     const response = await fetch("json/student_data.json")
//     const student = await response.json()
//     return student
// }

// catch(error){
//     console.log(error)
//   }
// }
// test()
// .then((res)=>{
//     console.log(res)
// })

// fetch

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=> response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data)
//     for(let x in data){
//         let a =`${data[x].name}-${data[x].email}-${data[x].address.city}<br>`
//         document.write(a)
//     }
// })
// .catch((error)=>console.log(error))


// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');


// button.addEventListener('click', function(){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })

// .catch(err => alert("Wrong city name!"));
// })

// var a =5
// function abc (){
//   document.write(a)
// }
// abc()

//callback
// function func(callback){
// setTimeout(()=>{
// console.log("Ibrahim")
// callback("Ahmed")
// },3000)
// }
// func(function(data){
//     console.log(data)
// })

// function hello(){
//     console.log("hello")
// }
// function hi(){
//     console.log("hi")
// }
// function num(num1,num2,callback){
//     console.log(num1+num2) 
//     callback()
// }
// num(7,9,hello)
// num(6,2,hi)
