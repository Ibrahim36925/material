// sort

// var num = [2,5,4,3,6,9,8]
// num.sort()
// document.write(num)     2,3,4,5,6,8,9

// var letters = ["V","P","Z","O","T","A"]
// letters.sort()
// document.write(letters) A,O,P,T,V,Z

//  var names = ["Ibrahim","Ahmed","Khan","Umer","Hassan","Sohaib","Ali","Ismail"]
//  names.sort()
//  document.write(names) Ahmed,Ali,Hassan,Ibrahim,Ismail,Khan,Sohaib,Umer

// Reverse

// var hinduNames = ["Rahul","Varun","Ishan","Deepak","Pandya"]
// hinduNames.reverse()
// document.write(hinduNames) Pandya,Deepak,Ishan,Varun,Rahul

// pop

// var christians = ["Henry","George","Bill","Marsh"]
// christians.pop()
// document.write(christians)  Henry,George,Bill

// push

// var pakistanSinger = ["Atif","Ali","Bilal","Fawad"]
// pakistanSinger.push("Rahat")
// document.write(pakistanSinger)  Atif,Ali,Bilal,Fawad,Rahat 

// shift

// var coldDrinks = ["Pepsi","Marinda","String","7-up"]
// coldDrinks.shift()
// document.write(coldDrinks) Marinda,String,7-up

// unshift

//  var dishes = ["Biryani","Korma","Nihari","Karhai"]
//  dishes.unshift("Pillaw")
//  document.write(dishes)  Pillaw,Biryani,Korma,Nihari,Karhai

// concat

// var sweetDishes = ["Rabri","Barfi","Custard"]
// var sweetDishes2 = sweetDishes.concat("Halwa","GulabJamun")
// document.write(sweetDishes2) Rabri,Barfi,Custard,Halwa,GulabJamun

// var sweetDishes = ["Rabri","Barfi","Custard"]
// var sweetDishes2 = ["Halwa","GulabJamun"]
// var sweetDishes3 = sweetDishes.concat(sweetDishes2)
// document.write(sweetDishes3) Rabri,Barfi,Custard,Halwa,GulabJamun

// join

// var fastFood = ["Burger","ClubSandwich","Pizza","Broast"]
// var join = fastFood.join(" ")
// document.write(join)  Burger ClubSandwich Pizza Broast

// var fastFood = ["Burger","ClubSandwich","Pizza","Broast"]
// var join = fastFood.join("/")
// document.write(join)  Burger/ClubSandwich/Pizza/Broast

// slice

// var fruitsNames = ["Apple","Banana","Grapes","Strawbery","Watermillon","Orange"]
// var fruitsNames2 = fruitsNames.splice(2,6)
// document.write(fruitsNames2)  Grapes,Strawbery,Watermillon,Orange

// var fruitsNames = ["Apple","Banana","Grapes","Strawbery","Watermillon","Orange"]
// var fruitsNames2 = fruitsNames.splice(-4,6)
// document.write(fruitsNames2) Grapes,Strawbery,Watermillon,Orange

// var fruitsNames = ["Apple","Banana","Grapes","Strawbery","Watermillon","Orange"]
// var fruitsNames2 = fruitsNames.splice(2)
// document.write(fruitsNames2) Grapes,Strawbery,Watermillon,Orange

//splice

// var vegetables = ["Potato","Tomato","Onion","Peas","Carrot","Garlic"]
// vegetables.splice(2,1,"LadyFinger")
// document.write(vegetables) Potato,Tomato,LadyFinger,Peas,Carrot,Garlic

// var vegetables = ["Potato","Tomato","Onion","Peas","Carrot","Garlic"]
// vegetables.splice(-4,1,"LadyFinger")
// document.write(vegetables) Potato,Tomato,LadyFinger,Peas,Carrot,Garlic

// is Array
//  var vegetables = ["Potato","Tomato","Onion","Peas","Carrot","Garlic"]
//  var vegetables2 = Array.isArray(vegetables)
//  document.write(vegetables2) true

// indexof

// var pakistanCricketer = ["Babar","Rizwan","Shaheen","Hassan","Rauf"]
// var pakistanCricketer2 = pakistanCricketer.indexOf("Hassan")
// document.write(pakistanCricketer2)    3

//  var pakistanCricketer = ["Babar","Shaheen","Rizwan","Hassan","Rauf","Rizwan"]
//  var pakistanCricketer2 = pakistanCricketer.indexOf("Rizwan")
//  document.write(pakistanCricketer2)  //2

// var pakistanCricketer = ["Babar","Shaheen","Rizwan","Hassan","Rauf","Rizwan"]
//  var pakistanCricketer2 = pakistanCricketer.indexOf("Rizwan",3)
//  document.write(pakistanCricketer2)     // 5

//last index of

// var biscuits = ["Oreo","Rite","Chocolato","Rite","Bravo"]
// var biscuits2 = biscuits.lastIndexOf("Rite")
// document.write(biscuits2)     // 3

// var biscuits = ["Oreo","Rite","Chocolato","Rite","Bravo"]
// var biscuits2 = biscuits.lastIndexOf("Rite",2)
// document.write(biscuits2)  //1

