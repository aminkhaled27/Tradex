// /*
// var a = 1_00;
// var b = 2_00.5;
// var c = 1e2;
// var d = 2.4;

// let smallestNumber = Math.min(a, b, c, d);
// let smallestInteger = Math.min(Math.floor(a), Math.floor(b), Math.floor(c), Math.floor(d));

// console.log("Smallest number:", smallestNumber);
// console.log("Smallest integer:", smallestInteger);

// let result = Math.pow(a,Math.floor(d));
// console.log("a + d result:", result);

// let method1 = Math.floor(d);
// let method2 = Math.round(d)
// let method3 = Math.trunc(d);
// let method4 = parseInt(d);

// console.log("Integer from d (Math.floor):", method1);
// console.log("Integer from d (Math.trunc):", method2);
// console.log("Integer from d (parseInt):", method3);
// console.log("Integer from d (bitwise):", method4);

// let stringResult = (Math.floor(b) / Math.ceil(d)).toFixed(2);
// let numberResult = Math.round(Math.floor(b) / Math.ceil(d));

// console.log("String result (66.67):", stringResult);
// console.log("Number result (67):", numberResult);
// */
// //task 1
// let a = 10;
// //<10    10:40    >40   make it in ternery operator
// /*
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 to 40");
// } else if (a > 40) {
//   console.log(">40");
// } else {
//   console.log("unknown");
// }
// */
// console.log(a < 10 ? "10" 
//     : a <= 40 ? "10 to 40" 
//     : a > 40 ? ">40" 
//     : "unknown")
 
// let text = "Your JavaScript";
// //task 2
// if ((text.length*2).toString() === "30") {
//   console.log("30");
// }
// //task3
// if (text[5] === "J") {
//   console.log("J");
// }
// //task 4
// if (typeof(text) == "string") {
//   console.log("string");
// }
// //task 5
// if ( typeof(text.length) === "number") {
//   console.log("number");
// }
// //task 6
// if (text.slice(0,4).repeat(2) === "YourYour") {
//   console.log("your your");
// }

// //task7
// var degree=65
// // degree>50 -->fail , 50<degree>70 -> good  degree > 70 ->excellent
// if(degree < 50)
// {
//     console.log("Fail")
// }
// else if(degree >- 50 && degree <=70)
// {
//     console.log("Good")
// }
// else{
//     console.log("Excellent")
// }



// //task #1
// let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// // ['Sara', 'Soha', 'Ahmed']

// myFriends.pop()
// console.log(myFriends)
 
// //task #2
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// // Write One Single Line Of Code
// // ["Z", "X", "D", "C", "B", "A"]
 
// finalArr = [arrTwo.pop(),arrOne.pop(),arrOne.pop(),arrOne.pop(),arrTwo.pop(),arrTwo.pop()]
// console.log(finalArr)

// //task 3
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = [arr2[2].toLowerCase() + arr1.pop().toLowerCase() + arr2.pop().toLowerCase()]
// console.log(allArrs); // fxy
 
// //----------------------// ++ --
// let Zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
 
// //task #1
// // ["Osama", "Elham", "Maryan", "Ahmed"];

// counter++
// my1 = my.slice(Zero,counter).reverse()
// console.log(my1)

// //task #2
// // ["Elham", "Maryan"]

// Zero++
// counter--
// my2 = my1.slice(Zero,counter)
// console.log(my2)

// //task #3
// // "Elryan"

// Zero--
// counter--
// my3 = my2[Zero].slice(Zero,counter)
// Zero++
// my3 = my3 + my2[Zero].slice(counter)
// console.log(my3)
 
// //task #4
// // "aN"

// counter++
// counter++
// my4 = my3.slice(counter)
// console.log(my4)
 


// // swicth challange
// let job = "Manager";
// let salary = 0;

// // if (job === "Manager") {
// //   salary = 8000;
// // } else if (job === "IT" || job === "Support") {
// //   salary = 6000;
// // } else if (job === "Developer" || job === "Designer") {
// //   salary = 7000;
// // } else {
// //   salary = 4000;
// // }

// switch(job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT" || "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer" || "Designer":
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
//     salary = 4000;
//     console.log(salary);
// }

// //if challange
// let holidays = 0;
// let money = 0;

// // switch (holidays) {
// //   case 0:
// //     money = 5000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 1:
// //   case 2:
// //     money = 3000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 3:
// //     money = 2000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 4:
// //     money = 1000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 5:
// //     money = 0;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   default:
// //     money = 0;
// //     console.log(`My Money is ${money}`);
// // }

// if(holidays == 0)
// {
//   money = 5000;
//   console.log(money);
// }
// else if(holidays == 1 || holidays == 2)
// {
//   money = 3000;
//   console.log(money);
// }
// else if(holidays == 3)
// {
//   money = 2000;
//   console.log(money);
// }
// else if(holidays == 4)
// {
//   money = 1000;
//   console.log(money);
// }
// else if(holidays == 5)
// {
//   money = 0;
//   console.log(money);
// }
// else{
//   money = 0;
//   console.log(money);
// }


 
// var arr=['ahmed','cairo',1253,true ,'id','age']
// //escape 'cairo'  //stop 'id'
 
// for(i=0;i<5;i++)
// {
//   if(i != 1)
//     console.log(arr[i])
// }

// var friends=['ali',2,'ahmed',3,5,'sara']
// var names=[]//strings from friends

// for(i=0;i<6;i++)
// {
//   names[i] = friends.shift();
// }
// console.log(friends)
// console.log(names)

let products = ["Product A", "Product B", "Product C", "Product D"]
let colors =   ["Red", "Green", "Blue"]
let model =    ["2020", "2022"]

for(i=0;i<products.length;i++)
{
  document.write( <h2 class="text-primary bg-dark w-50 py-1"> Type ${products[i]}</h2>)
  document.write( <h5 class="text-danger"> - Colors -</h5>)

  for(j=0;j<colors.length;j++)
  {
    document.write( <span>${colors[i]}</span> )
  }

  document.write( <h5 class="text-warning"> - Models - </h5> )

  for(j=0;j<model.length;j++)
  {
    document.write( <span>${model[i]}</span> )
  }
}