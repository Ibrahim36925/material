//  function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//     }
//     tellTime()

//  function palindrome() {
// var word = prompt("Enter your pallindrome word");
//      var check = word.split(" ").reverse().join(" ");
//      if(word === check){
//          alert("This is pallindrome word")
//      }
//      else{
//          alert("No it is not a pallindrome word")
//      }
//  }
//  palindrome()

//parameters % arguments

// function fullName (firstName,LatName){
//     document.write(`${firstName} ${LatName}`)
// }
// fullName("Ibrahim","Ismail")

// function sum (sum1,sum2){
//     document.write(sum1+sum2)
// }
// sum(2,3)

// return

// function fullNames (firstName,LatName){
//     var a = firstName + " " + LatName
//     return a
// }
//   var b = fullNames("Mohammad","Ibrahim")
//   document.write(b)

// document.write("Total Subjects-5 <br> Total Marks-500 <br> <br>")
// function sumMarks (English,Math,Physics,Chemistry,Computer){
//    var a = English+Math+Physics+Chemistry+Computer
//    return a
// }
// var b = sumMarks(50,60,70,80,90)
// document.write("Marks Obtained-"+ b + "<br>")

// function percentage (tm){
//   var c = tm/500*100
//   return c
// }
// var d = percentage(b)
// document.write("Percentage-"+ d + "%")

// local and Global

// var a = "Muhammad Ibrahim";
// function abc() {
//   var b = "Umer Ahmed";
// }
// document.write(a)   // M.Ibrahim

// var a = "Muhammad Ibrahim";
// function abc() {
//   var b = "Umer Ahmed";
//   document.write(a)
// }
// abc()   // M.Ibrahim

// var a = "Muhammad Ibrahim";
// function abc() {
//   var b = "Umer Ahmed";
// }
// document.write(b) " "

// var a = "Ibrahim"
// function abc(){
//     a = "Ismail"
// }
// abc()
// document.write(a)