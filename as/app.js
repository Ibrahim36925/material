// function on(){
// document.getElementById("bulb").src="img/on.gif";
// }
// function off(){
//     document.getElementById("bulb").src="img/off.gif";
//     }
//     alert("Hello World")
// var html = prompt("Do Yoy Know Html")
// var css = prompt("Do Yoy Know Html")
// var javascript = prompt("Do Yoy Know javascript")
// var city =+prompt()



// var cities = ["karachi","lahore","islamabad"];
// var cityName = prompt("Enter your city name");
// cityName = cityName.toLowerCase();
// var flag = "no";

// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === cityName){
//        flag = "yes";
//        break;
//     }
// }

// if(flag === "yes"){
//     alert("Yes")
// }else{
//     alert("No")
// }



// for(var i = 0; i < 10; i++){
//         console.log(i)
//      if(i === 5){
//              break
//          }
//      }
// console.log("Hello World");
// var firstName = "Ibrahim";
// console.log(firstName);

//  firstName = "Ahmed"
//  console.log(firstName);

// var value = 1
// console.log(value + 1 )

// var value = 2
// console.log(value ** 2 )

//   let value = 2
//  console.log(value ** 2 )







// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls",
// "great falls", "Honolulu", "honolulu"];
// var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
// }

// chapter 4

// var b = 10% 3
// undefined
// b
// 1   // this is remainder

// var x = 5;
// var y = x ++ + ++x + x + --x + x-- - x;
//  //     5       7    7     6   6    - 5     
// document.write(y);   // 26

// var a = +prompt ("Enter value")
// var b = a + 10
// console.log(b) // 35


// var age = + prompt("Enter your age")
// if(age >= 18){
//     alert ("You are hired")
// }
// else{
//     alert("You are not hired")
// }

//  var age = + prompt("Enter your age")
// var gender = prompt("Enter your gender")
// if(age > 18 && gender =="male"){
//     alert("You are ride a moorcycle")
// }
// else{
//     alert("Bachay ho tum")
// }

//  var age = + prompt("Enter your age")
// var gender = prompt("Enter your gender")
// if(age >= 18 || gender =="male"){
//     alert("You are ride a moorcycle")
// }
// else{
//     alert("Bachay ho tum")
// }

// var percent = +prompt("Enter your percentage")
// if(percent >= 80 && percent<=100){
//     alert("A+")
// }
// else if
//     (percent >= 70 && percent<=80){
//         alert("A")
// }
// else if
//     (percent >= 60 && percent<=70){
//         alert("B")
// }
// else if
//     (percent >= 50 && percent<=60){
//         alert("C")
// }
// else if
//     (percent >= 40 && percent<=50){
//         alert("D")
// }
// else if
//     (percent >= 30 && percent<=40){
//         alert("E")
// }
// else if
//     (percent >= 0 && percent<=30){
//         alert("F")
// }
// else{
//   alert ("You did not wite correct percentage")
// }


// var students = ["Ibrahim","Saad","Ali"]
// document.write(students[2]);


// var names=[];
// names[0]="Aman"
// names[1]="Akbar"

// console.log(names)

//  var students = ["Ibrahim","Saad","Ali","Hassan","Muneeb"]
// students.pop()  // last se ek element ko remove karta hai
// students.shift()  first say remove kardeta hai value ko
// students.unshift("Arif","Amir") first say add kardta hai
// students.push("Aslam")//last may add karta hai
// students.splice(0,2,"Ismail") first value index numer second is kitnay element delete karna hai or third kya chiz add karni hai
// var copyStudents= students.slice(1,4)//fist index number leta hai second may 1 say counting start hoti hai
//  console.log(students) 
//  console.log(copyStudents) ;  



// var num = 25;
// alert(num);
// alert(num + 10)
// var num = 25
// var inc = num + 10;
// alert(inc);
// var num1 = 10;
// var num2 = 30;
// alert(num1+num2)

// var a = 5

// --a - --a + ++a + a--;
// 4   -  1  +  1  - 1
// alert(a)

// var num = 10;
// num++
// alert(num) 11

// var num = 10;
//  num--
//  alert(num)  9

// var num = 10;
//  ++num
//  alert(num) 11

// var num = 10;
//  --num
//  alert(num)  9

// var a = 5
// --a - --a
// alert(a)
// function myAlert(){
//     alert("Hello World")
// }
// document.getElementById('alert-btn').onclick = function myAlert(){
// //     alert("Hello Ibrahim Ahmed")
// // }
// // document.getElementById('add-btn').onclick = function myAdd(){
// //     alert("Welcome Ibrahim Ahmed")
// // }


// document.getElementById('result').innerHTML= "Hello Ibrahim"
// }
//

// function lowerUpper(){
//     var cleanestCities = ("hassan");
//      var city= prompt("Enter your city");

//      city = city.toLowerCase();

//      if(city=== cleanestCities){
//          alert("Found")
//      }
//      else{
//         alert("Not Found")

//      }
// }


// var round = Math.round(25.593)  // is ka matlab yeh hai ka .4 tak wohai value data hai .5 ka bad next number ajata hai example 25 change with 26
// alert(round)

// var floor = Math.floor(0.999)  // is ki range 0 say 1 tak hoti hai
// alert(floor)
// 
// var floor = Math.floor(-0.0001) // floor .5 ko nahi dektha hai
// alert(floor)
// var ceil = Math.ceil(0.11111)  // ceil .5 say chota number ko ek number agai bar deta hai
// alert(ceil)

// var randomNumber = Math.random()
// randomNumber = (randomNumber * 6)+1
// var dice =Math.floor(randomNumber)
// console.log(dice)

// var a = ["Iraq","Iran","India","China","Africa"] // concat milla dena
// var b = a.concat("Pakistan","Bangladesh")
// document.write(b)

// var a = ["Ibrahim","Ismail","ali","Hassan"]
// var b = ["Hashir","Sohaib","Aman","Usman"]
// var c = a.concat(b)
// document.write(c)

// var a = ["Ibrahim","Ismail","ali","Hassan"]
// var b = ["Hashir","Sohaib","Aman","Usman"]
// var c = a.concat(b)
// var d = c.join(",")   // JOIN KA MATLAB HAI KA IN KA bech bay gap de dena ya phir in ka beich may koma laga dena or many oter thing
// document.write(d)

// var a = ["Ibrahim","Ismail","ali","Hassan"]  // array ko reverse kar deta hai
// a.reverse()
// document.write(a)


//  var a = ["Ibrahim","Ismail","ali","Hassan"]   // indexof ka method find kata hai example array ka ander ka name ko
//  var b = a.indexOf("Hassan")
//  alert(b)

//   var a = ["Ibrahim","Ismail","ali","Ismail","Hassan"]   // indexof ka method find kata hai example array ka ander ka name ko
//   var b = a.indexOf("Ismail",2)
//    alert(b)

//    var a = ["Ibrahim","Ismail","ali","Ismail","Hassan"]   // lastindex of last say array may index number laita hai
//    var b = a.lastIndexOf("Ismail",2)
//    alert(b)

// var text = "To be or not to be.";
//  var segIndex = text.lastIndexOf("be",4);
// alert(segIndex)

// var str = "the quick";

// console.log(str.slice(4,9));
//  console.log(str.split("the").join("ghous")); 
//  var count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {   if(str.slice(i, i + 3) === "the"){
//     count++   }
// }

//  console.log(count)


// var identy = "Ibrahim"
// var search = identy.charAt(4)  // 1 say counting start karta hai or ibrahim may say jaisy is nay h return kia hai 
// alert(search) 

// var identy = "99"              // string ko number may convert karta hai
// var num = Number(identy)
// document.write(num)

// var floatingNumString = "24.9876";
//  var num = Number/+(floatingNumString);
//  document.write(num)


// var gum=(123323).toString()

// console.log(gum)//number ko string may convert karta hai

// var num = parseInt("1231121.232232") //string ko number bana ta hai or decimal ko hata deta hai example point ka bad ki value ko khatam kar deta hai

// console.log(num)       


// var num = parseFloat("1231121.232232")   // string ko number bana tha hai lakin decimal ka bad point ko khtam nahi karta hai

//  console.log(num)


// var a = 1232.23556
// var b = a.toFixed(1)       // to fixed method point ka bad ki value ko khatam kar deta hai
// document.write(b)


// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullname = fname + "" + lname
// document.write("Welcome " + fullname)

// var mobile = prompt("Enter your favourite mobile phone");
// var length = mobile.length;
// document.write("My favourite phone is:"+mobile+"<br>"+"Length of string:"+length)


// var country = "Pakistani";
// var word = country.indexOf("n")
// document.write("String:"+ country + "<br> Index of 'n':" + word) 


//  var str = "Hello World";
//  var LastIndexOf = str.lastIndexOf("l")
//  document.write("String:" + str + "<br> Last index of 'l':" + LastIndexOf)


// var str = "Pakistani";
// var character = str.charAt("3")
// document.write("String:" + str + "<br> Character at index 3:" + character)

// var fname = "Ibrahim";
// var lname = "Ahmed"
// var fullname = fname.concat(lname);
// document.write("Welcome "+ fullname);

// var str = "Hyderabad";
// var afterReplace = str.replace("Hyderabad","Islamabad")
// document.write("City:" + str + "<br> After replacement:" + afterReplace)

// var str = "472"
// var stringNumber = +str
// document.write("Value:" + str +"<br> Type:" + typeof(str) + "<br>")
// document.write("Value:" + stringNumber + "<br>Type:" + typeof(stringNumber))

// var input = prompt("Enter a letter or word")
// var upperCase = input.toUpperCase();
// document.write("User input:" + input + "<br>Upper case:" + upperCase)

// var userInput = prompt("Enter a word or Letter");

// document.write("User Input : " + userInput + "<br>")

// document.write("Title case : ")

// var userInput = userInput.split(' ');
// for (i = 0; i < userInput.length; i++) {
//     userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//     document.write(userInput[i])
// }


// var userInput = prompt("Enter your word");
// document.write("User input:" + userInput + "<br>");
// document.write("Title case:");

// var userInput = userInput.split(" ");
// for(var i=0; i<userInput.length; i++){
//     userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) 
//     document.write(userInput[i]) 
// }

// var num = 35.36;
// document.write("Number:" + num + "<br>")

// var str = "" +num
// var removedDot = str.replace(".","")
// document.write("Result:" + removedDot)

// var userName = prompt("Enter a name: ");
// var flag = false;
// var splitPass = userName.split('')
// for (i = 0; i < splitPass.length; i++) {
//     if ((splitPass[i] === ",") || (splitPass[i] === "!") || (splitPass[i] === "@") || (splitPass[i] === ".")) {
//         flag = true
//         alert("Enter a valid password")
//     }
// }
// if (flag === false) {
//     alert("Valid password")
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var snackInput = prompt("Enter your snacks name").toLowerCase();
// if(A.indexOf(snackInput) !== -1){
//     document.write(snackInput + "are avaible at index" + A.indexOf(snackInput))
// }
// else{
//     document.write("we are sorry" + snackInput + " is not availble in your bakery")
// }

// var university = "University of karachi"
// var afterstr = university.split('').join("<br>")
// document.write(afterstr)

// var character = "Pakistan";

// var LastChar = (character.length) - 1;

// document.write(character[LastChar])

// var num = +prompt("Enter your positive integer");
// document.write("number:" + num + "<br>");
// document.write("round of value" + Math.round(num) + "<br>");
// document.write("floor value:" + Math.floor(num) + "<br>")
// document.write("ceil value:" + Math.ceil(num))

// var num = +prompt("Enter your negative float number");
// document.write("number:" + num + "<br>");
// document.write("round of value" + Math.round(num) + "<br>");
// document.write("floor value:" + Math.floor(num) + "<br>")
// document.write("ceil value:" + Math.ceil(num))

// var number = +prompt("Enter your number")
// if(number < 0){
//      var absNumber = number * -1;
//      document.write("The absolute value of " + number + " is " + absNumber )
// }
//      else{
//      document.write("The absolute value of " + number + " is " + number )

//      }

// var randomvalues = + prompt("How many random value do you want to after roll the dice?")
//     for (i = 1; i < randomvalues; i++) {
//         var randomeNumber = Math.floor((Math.random() * 6)) + 1;
//         document.write("Randome dice value : " + randomeNumber + "<br>")
//     }

// var table = +prompt("Enter a table");
// var length = +prompt("Enter a length");
// for (var i=1; i<=length; i++){
//     document.write(table + "x" + i + "=" + table*i + "<br>")

// }

// var sname = prompt("enter your name");
// for(var i=0; i<=sname.length; i++){
//     console.log(sname)
// }

// Array Methods

// slice

// var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
// var b = a.slice(2,5)
// document.write(b)      // umer ali hashir

// var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
// var b = a.slice(2,4)
// document.write(b)    // umer ali

// var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
// var b = a.slice(-2)
// document.write(b)  // ali hasir

// var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
// var b = a.slice(2)
// document.write(b)  //umer hashir

// splice

// var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
//  a.splice(1,0,"Usman")  //Ibrahim,Usman,Ismail,Umer,Ali,Hashir
// document.write(a)  

//  var a = ["Ibrahim","Ismail","Umer","Ali","Hashir"];
//    a.splice(1,1,"Usman")  //Ibrahim,Usman,Umer,Ali,Hashir  ismail deleted
//  document.write(a)  

// var a = ["Ibrahim","Ismail","Umer","Ali"];
//  a.splice(2,2)  //Ibrahim,ismail
//  document.write(a)  

// var a = ["Ibrahim","Ismail","Umer","Ali"];
//   a.splice(-2,1,"Usman","hassan")  //Ibrahim,Ismail,Usman,Hassan,Ali
//  document.write(a)  

// concat

// var a = ["Ibrahim","Ismail","Umer","Usman"]
// var b = a.concat("Hassan","Hashir")
// document.write(b)                 // ibrahim,ismail,umer,usman.hassan,hashir

// var a = ["Ibrahim","Ismail","Umer","Usman"]
//  var b = ["Hassan","Hashir"]
//  var c = a.concat(b)
//  document.write(c)             // ibrahim,ismail,umer,usman.hassan,hashir

// var a = ["Ibrahim","Ismail","Umer","Usman"]
// var b = ["Hassan","Hashir"]
// var c = ["Salman","Ali"]
//   var d = a.concat(b,c)
//   document.write(d)      // ibrahim,ismail,umer,usman.hassan,hashir,salman,ali

// join

// var a = ["Ibrahim","Ismail","Usman","Umer"]
// var b = a.join("")
// document.write(b)     // IbrahimIsmailUsmanUmer

// var a = ["Ibrahim","Ismail","Usman","Umer"]
//  var b = a.join(" ")
//  document.write(b)     // Ibrahim Ismail Usman Umer

// var a = ["Ibrahim","Ismail","Usman","Umer"]
//  var b = a.join(",")
//  document.write(b)  // Ibrahim,Ismail,Usman,Umer
// Ibrahim
// Ismail  bakhe name bhi asai hai aye gai
// var a = ["Ibrahim","Ismail","Usman","Umer"]
//  var b = a.join("<br>")
//  document.write(b) 

// sort

// var studentScores = [67,87,98,97,67,80,90];
//     document.write("Scores of Students :  " + studentScores);

//     document.write("<br>")                                     // Scores of Students : 67,87,98,97,67,80,90
//                                                                // Ordered Scores of Students : 67,67,80,87,90,97,98
//      var sortedScores = studentScores.sort()
//     document.write("Ordered Scores of Students :  " + studentScores); 

// var arr = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//  var b = arr.sort()
// document.write(b)                         // Ali,Hasir,Ibrahim,Salman,Usman

// var arr = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//   arr.sort()
//  document.write(arr)

// reverse

// var a = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//   var b = a.reverse()
//  document.write(b)      // Ali,Ibrahim,Usman,Hasir,Salman

// var a = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//  a.reverse()
//   document.write(a)  

// pop

// var a = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//  a.pop()
//   document.write(a)  // Salman,Hasir,Usman,Ibrahim

// push

// var a = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//   a.push("Ismail")
//    document.write(a)      // Salman,Hasir,Usman,Ibrahim,Ali,Ismail

// shift

// var a = ["Salman","Hasir","Usman","Ibrahim","Ali"]
//    a.shift()
//     document.write(a)              // Hasir,Usman,Ibrahim,Ali

// unshift

// var a = ["Salman","Hashir","Usman","Ibrahim","Ali"]
//     a.unshift("Ismail")
//      document.write(a)      // Ismail,Salman,Hashir,Usman,Ibrahim,Ali

// indexof

// var a = ["Ismail","Ibrahim","Umer","Ibrahim","Usman"]
// var b = a.indexOf("Umer")
// document.write(b)     // 2

// var a = ["Ismail","Ibrahim","Umer","Ibrahim","Usman"]
//  var b = a.indexOf("Ibrahim",2)
//  document.write(b)    // 3

// lastindexof

// var a = ["Ismail","Ibrahim","Umer","Ibrahim","Usman"]
//   var b = a.lastIndexOf("Ibrahim")
//   document.write(b)        // 3


// var LastIndexString = "Hello World";

// var lastIndex = LastIndexString.lastIndexOf('l');

// document.write("String : " + LastIndexString + "<br> Last Index of 'l' : " + lastIndex); // 9

// string method

// length

// var str = "Javascript"
// var b = str.length
// document.write(b)      //10

// lowercase and uppercase

// var str = "Javascript Is a Great Language"   // lower case
// var b = str.toLowerCase()
//  document.write(b) 

//  var str = "Javascript Is a Great Language"   // Upper case
// var b = str.toUpperCase()
//  document.write(b) 

// indexof,lastindexof,concat,slice

// replace

// var str = "My name is Ahmed"
// var change = str.replace("Ahmed","Ibrahim")     // My name is Ibrahim
// document.write(change)    

// var para = "This is an example , This is an example"
// var para1 = para.replace(/example/g,"text")
// document.write(para1)
// charat

// var str = "My name is Ahmed"
//  var change = str.charAt(11)     // A
//  document.write(change) 

// split

// var str = "My name is Ahmed"
//  var change = str.split(" ")     // My,name,is,Ahmed  // matlb word ko tor dena
//  document.write(change) 

// repeat

// var str = "My name is Ahmed"
//   var change = str.repeat(2)     // My name is AhmedMy name is Ahmed
//   document.write(change) 

// tostring

//  var str = 50;
//    var change = str.toString()     
//    document.write(change + 50)    // 5050

// Number Methods
// Number

// var a = "99"
// var b = Number/+(a)
// document.write(b)       // 99

// parseInt

// var a = 85.985
// var b = parseInt(a)
// document.write(b)          // 85   

// parseFloat

// var a = 75.23
//  var b = parseFloat(a)
//  document.write(b)             // 75.23

// .toFixed

// var a = 77.532
// var b = a.toFixed(1)
// document.write(b)                 // 77.5

// var a = 77.532
// var b = a.toFixed(0)
// document.write(b)                 // 78

// Math Methods
// Math.ceil

// var a = Math.ceil(5.2);
// console.log(a);               // 6

// var a = Math.ceil(1.45);
// console.log(a);                // 2

// var a = Math.ceil(-1.45);
// console.log(a);                 // -1

// var a = Math.ceil(0.001);          // 1
// console.log(a);

// Math.floor

// var a = Math.floor(2.35);
// console.log(a);                  // 2

// var a = Math.floor(-5.45);
// console.log(a);                     // -6

// var a = Math.floor(0.60);
// console.log(a);                       //0

// Math.round

// var a = Math.round(2.5)
// console.log(a)                        // 3

// var a = Math.round(2.3)
// console.log(a)                          // 2

// Math.random

// var a = Math.floor(Math.random() * 10) + 1
// console.log(a)                                // 1 to 10

// Date methods
// pori date lena ka tariqa

// var a = new Date ();
// document.write(a)                // Fri Jul 15 2022 01:15:49 GMT-0700 (Pacific Daylight Time)

// .todateString()

// var a = new Date ();
//  document.write(a.toDateString())     // Fri Jul 15 2022

// .get Date()

// var a = new Date()
// document.write(a.getDate())          // 15

// .get full year

// var a = new Date ()
// document.write(a.getFullYear())          // 2022

// .get month

// var a = new Date()
// document.write(a.getMonth())        // 6

// .get Day()


// var a = new Date()
// document.write(a.getDay())         // 5

// .get hours ()

// var a = new Date()
// document.write(a.getHours())        //  1

// .get minutes

// var a = new Date()
//  document.write(a.getMinutes())         // 31

// .get seconds

// var a = new Date()
// document.write(a.getSeconds())       // 34

// .get milli seconds

// var a = new Date()
// document.write(a.getMilliseconds())    // 199  

//

// return

//  function fullName(fname,lname){     // fname,lname are the parameter
//    var a = "Hello " + fname + lname;

//    return a
//  }

//  var b = fullName("Ibrahim ","Ahmed")  // ibrahim,ahmed are the arrgument
//  document.write(b)

// document.write("Total Subjects - 5 <br> Total Mraks - 500 <br><br>")
// function sumMarks(urdu,english,chemistry,physics,math){
//   var a = urdu+english+chemistry+physics+math;

//   return a;
// }

// var b = sumMarks(65,85,80,70,60)
// document.write("Marks Obtained: " +b)

// function percentage(tm){
//   var c = tm/500*100;

//   return c;
// }

// var d = percentage(b);
// document.write("<br>Percentage:" + d + "%") 

// break

// for(var i=1; i<=10; i++){
//   if(i===5){
//     break

//   }
//   document.write(i + "<br>")
// }

// nested for

// for(var i = 0; i < 5; i++){
// for(var j = 0; j < 3; j++){
//   document.write("Pakistan Zindabad" + "<br>")
// }
// }

// var firstName = ["Ghous","Fahad","Basid"]
// var lastNames = ["Ahmed","Khan"]

// for(var x = 0; x < firstName.length; x++ ){
//   for(var y = 0; y < lastNames.length; y++){
//     document.write(firstName[x] + " " + lastNames[y] + "<br>")
//   }
// }

// switch of

// var programming = prompt("Enter your programming");
// switch (programming) {
//   case "html":
//     alert("your hack nasa");
//     break
//   case "css":
//     alert("your hack styling website");
//     break
//   case "javascript":
//     alert("your hack the facebook")
//     break
//   default:
//     alert("tum abhi bachay ho")
// }

// var a = "Ibrahim"
// function foo(){
//    a = "Ahmed"  
// }
// foo()
// console.log(a)   // Ahmed

// var a = "Ibrahim"
// function foo (){
//   a = "Ahmed"
// }
// console.log(a)   // Ibrahim

// var a = 5
// var b = 12
// function foo (x,y){
//     return(a+b-x)

// }
// var num = foo (b)
// document.write(num)

// function foo(){
//     alert("Hello Ibrahim")
// }

// function foo(greet){
//    alert("Hello Ahmed")
// }

// function myClick(){
//     alert("Click")
// }

// function getName(){
//     var name = document.getElementById('name')
//      alert(name.value)

   
// }

// function getName(){
//     var name = document.getElementById('name')
//      console.log(name.value)

//    name.value = ""
// }

// function setName(){
//     var name = document.getElementById('name')
//      name.value = "Ibrahim"
//      var para = document.getElementById("para")
//     para.innerHTML = "This is the value of paragraph"  
// }
// setName()

// function setValue(){
//     var para = document.getElementById("para")

//     para.innerText = "Hy"
// }

// function smallImage(){
//     var image = document.getElementById("car-image")
//     image.className = "big"
// }
// function bigImage(){
//     var image = document.getElementById("car-image")
//     image.className = "small"
// }

// function addClass(){
//     var para = document.getElementById("para")
//     para.className += " bold blue"
// }

// function myPara(){
//     var para = document.querySelector = "bold"
// }
// function myHeading(){
//     var heading = document.getElementsByClassName('head');
//     heading[0].style.color = "red"
//     var head2 = document.getElementById("head2")
//     head2.style.fontSize = "50px"
   
//   }
// function myHeading(){
//     var heading = document.querySelector("#head2")
//     // console.log(heading)
//     heading.style.color = "red"
// }

// function myHeading(){
//     var heading = document.querySelectorAll(".head")
//     // console.log(heading)
//     heading[1].style.color = "red"
// }

// function myHeading(){
//     var heading = document.getElementsByTagName("h1")
//     heading[0].style.color = "red"
//     heading[1].style.color = "blue"
    
// }

// function result(p1, p2){
//     var get = document.getElementById("demo")
//     return p1 * p2
    
// }
//   var x = result(4, 3)
//   document.write(x)
// document.getElementById("name").innerHTML = "Ibrahim"
// var cname = document.getElementById("name")
// cname.style.color = "red"

// var child = document.body.children
// console.log(child)
// var para = document.createElement("p")
// var textNode = document.createTextNode("This is a new paragraph")
// para.appendChild(textNode)
// console.log(para)
// document.body.appendChild(para)


// var list = document.querySelector("ul")
// console.log(list.firstChild)
// console.log(list.lastChild)


// var firstSiblings = ibrahim.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(firstSiblings)
// console.log(list.parentNode)


// var createElement = document.createElement("div")
// var para1 = document.createElement("p")
// var para2 = document.createElement("p")
// var para3 = document.createElement("p")
// createElement.className = "main"
// createElement.id = "sub-main"
// var textNode = document.createTextNode("My name is Ibrahim")
// var textNode1 = document.createTextNode("My name is Ahmed")
// var textNode2 = document.createTextNode("My name is Ali")
// var textNode3 = document.createTextNode("My name is Ismail")
// createElement.appendChild(textNode)
// createElement.appendChild(textNode1)
// para2.appendChild(textNode2)
// para3.appendChild(textNode3)
// console.log(createElement)
// console.log(para1)
// console.log(para2)
// console.log(para3)


// function generateHtml() {
//   var div = document.createElement("div");
//   var h2 = document.createElement("h2");
//   var h2Text = document.createTextNode("Heading1");
//   h2.appendChild(h2Text);
//   var h4 = document.createElement("h4");
//   var h4Text = document.createTextNode("Heading2");
//   h4.appendChild(h4Text);
//   var h6 = document.createElement("h6");
//   var h6Text = document.createTextNode("Heading3");
//   h6.appendChild(h6Text);
//   var span = document.createElement("span");
//   var spanText = document.createTextNode("My name is Ibrahim");
//   span.appendChild(spanText);
//   div.appendChild(h2);
//   div.appendChild(h4);
//   div.appendChild(h6);
//   div.appendChild(span);

//   return div;
// }

// var html = generateHtml();
// console.log(html)

// function getElements(){
//     // var p = document.getElementsByTagName("p")
//     // document.write(p)
//     console.log(document.childNodes[1].childNodes[2])
// }

// var main = document.getElementById("main");

// var div = document.createElement("div");
// var h1 = document.createElement("h1");
// var text = document.createTextNode("Hello World");
// h1.appendChild(text);
// div.appendChild(h1);


//function addTodo() {
 //  var inputValue = document.getElementById("todo-value");
 // var list = document.getElementById("list");
  // var li = document.createElement("li");
   //var text = document.createTextNode(inputValue.value);
// // //   var deleteBtn = document.createElement("button");
// // //   deleteBtn.setAttribute("onclick", "deleteTodo()");
// // //   var deleteText = document.createTextNode("Delete");
// // //   deleteBtn.appendChild(deleteText);
   //li.appendChild(text);
// // //   li.appendChild(deleteBtn);
   //list.appendChild(li);

// //   inputValue.value = "";
 //}

// function deleteAll() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// function deleteTodo() {
//   event.target.parentNode.remove();
//  }

// function foo() {
//   console.log("test");
// }

// function abc() {
//   foo();
//   console.log(event.target);
// }

// parent element
// var targetNode = document.getElementById("first")
// var targetNode1 = first.parentElement
// console.log(targetNode1)

// parent node
// var targetNode = document.getElementById("first")
// var targetNode1 = first.parentNode
// console.log(targetNode1)

// childNodes
// var targetNode = document.getElementById("first")
// var targetNode1 = first.childNodes[1]
// console.log(targetNode1)

// first child
// var targetNode = document.getElementById("second")
// var targetNode1 = second.firstChild
// console.log(targetNode1)

// last child
// var targetNode = document.getElementById("second")
// var targetNode1 = second.lastChild
// console.log(targetNode1)

//next siblings
// var targetNode = document.getElementById("list1")
// var targetNode1 = list1.nextSibling
//  console.log(targetNode1)

//previous siblings
// var targetNode = document.getElementById("list1")
// var targetNode1 = list1.nextSibling.nextSibling.previousSibling.previousSibling
//  console.log(targetNode1)

// node name
// var targetNode = document.getElementById("first")
// var targetNode1 = first.firstChild
// nName = targetNode1.nodeName
// console.log(nName)

// getAttribute
// var targetNode = document.getElementById("first")
//  var targetNode1 = first.getAttribute("class")
//  console.log(targetNode1)

// hasAttribute
// var targetNode = document.getElementById("first")
//  var targetNode1 = first.hasAttribute("class")
//  console.log(targetNode1)

// getAttribute node
// var targetNode = document.getElementById("first")
//  var targetNode1 = first.getAttributeNode("class")
//  console.log(targetNode1)

// attributes
// var targetNode = document.getElementById("first")
//  var targetNode1 = first.attributes
//  console.log(targetNode1)

// setAttribute
// var targetNode = document.getElementById("first")
//  var targetNode1 = first.setAttribute("class","xyz")
//  var targetNode2 = first.getAttribute("class")
//  console.log(targetNode2)

//removeAttribute
// var targetNode = document.getElementById("list1")
//  var targetNode1 = list1.removeAttribute("class")
//  console.log(targetNode1)

// object

// var person = {
//     firstName:'Ibrahim',
//     lastName:'Ahmed',
//     age:17
// };
// console.log(person);


// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17
// };
// person.firstName = "Ismail";
// console.log(person);

// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17
// };
// person.email ="mohammadibrahimahmed135@gmail.com"
// console.log(person.email);

// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17
// };
// delete person.lastName
// console.log(person);

// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17
// };

// console.log('age' in person);

// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17
// };
// for(var key in person){
// console.log(key + ': ' + person[key]);
   
// };

//  var person = {
//    firstName:'Ibrahim',
//    lastName:'Ahmed',
//    age:17,
//    hobbies:["cricket","footaball","carrom"]
//  };

//  console.log(person.hobbies[2]);

//  var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17,
//   living:{
//     'country': 'pakistan',
//     'city' : 'karachi',
//   }
// };

// console.log(person.living.city);

//  var person = {
//    firstName:'Ibrahim',
//    lastName:'Ahmed',
//    age:17,
//    salary:function(){
//     return 2000;
//    }
//  };

//  console.log(person.salary());

// var person = {
//   firstName:'Ibrahim',
//   lastName:'Ahmed',
//   age:17,
//   fullName:function(){
//    return this.firstName+ " " + this.lastName;
//   }
// };

// console.log(person.fullName());


var promptValue = prompt("Enter prop name");

console.log(student[promptValue]);

console.log(student.email);
console.log(student.firstName);

console.log("email" in student);

for (var prop in student) {
  console.log(student[prop]);
}

function generateHtml(name, colors, price, camera) {
  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  var h2Text = document.createTextNode(name);
  h2.appendChild(h2Text);
  var h4 = document.createElement("h4");
  var h4Text = document.createTextNode(colors);
  h4.appendChild(h4Text);
  var h6 = document.createElement("h6");
  var h6Text = document.createTextNode(price);
  h6.appendChild(h6Text);
  var span = document.createElement("span");
  var spanText = document.createTextNode(camera);
  span.appendChild(spanText);
  div.appendChild(h2);
  div.appendChild(h4);
  div.appendChild(h6);
  div.appendChild(span);

  return div;
}

generateHtml();

var mobiles = {
  iphone: {
    iphonex: {
      name: "Iphone x",
      colors: ["red", "white", "silver"],
      price: 213232,
      camera: 12,
    },
  },
};

var result = mobiles["iphone"]["iphonex"];

var main = document.getElementById("main");

main.appendChild(
  generateHtml(result.name, result.colors, result.price, result.camera)
);

var getFullName = function () {
  alert("Hello");
};

getFullName();

var obj = {
  first_name: "Ghous",
  last_name: "Ahmed",
  getFullName: function () {
    return this.first_name + " " + this.last_name;
  },
};

var fullName = obj.getFullName();

console.log(fullName)

function StudentObject(a, b, c) {
  this.name = a;
  this.email = b;
  this.roll = c;
  this.institute = "SMIT";
  this.getFullName = function () {
    return this.name;
  };
}

var students = [
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
  new StudentObject("Ghous", "ghous@gmail.com", 12313),
];

console.log(students);

