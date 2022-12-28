// // JavaScript Object
// // Array Example
// const userArray = ["Adrita", "Adhikary", 2017, "One"];
// console.log(userArray);
// console.log(userArray[0]);
// console.log(userArray[1]);
// console.log(userArray[2]);
// console.log(userArray[3]);

// // Object Example
// const userObject = {
//   firstName: "Adrita",
//   lastName: "Adhikary",
//   birthYear: 2017,
//   className: "One",
// };
// console.log(userObject);
// console.log(userObject["firstName"]);
// console.log(userObject.firstName);
// console.log(userObject.lastName);
// console.log(userObject.birthYear);
// console.log(userObject.className);

// // Add new item
// // Example One
// userObject.hobby = "Drawing";
// console.log(userObject);
// console.log(userObject.hobby);

// // Example Two
// userObject["birthPlace"] = "Khulna";
// console.log(userObject["birthPlace"]);
// console.log(userObject);

// // Another Object Example
// const userObjectTwo = {
//   firstName: "Shuvankor",
//   lastName: "Hazra",
//   isJob: true,
//   calculateAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// console.log(userObjectTwo.isJob);
// console.log(userObjectTwo.calculateAge(1992));
// console.log(userObjectTwo["calculateAge"](1994));

// // This keyword
// const userObjectTwo = {
//   firstName: "Shuvankor",
//   lastName: "Hazra",
//   birthYear: 1992,
//   isJob: true,
//   calculateAge: function () {
//     return 2022 - this.birthYear;
//   },
//   userDetails: function () {
//     return `This is user ${this.firstName} ${this.lastName},   born is ${this.birthYear}!`;
//   },
// };
// // This is user Shuvankor Hazra, born in 1992!
// console.log(userObjectTwo.calculateAge());
// console.log(userObjectTwo.userDetails());

// JavaScript Loop
// For Loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for (let task = 1; task <= 8; task++) {
//   console.log(`Task ${task}`);
// }

// for (let i = 1; i <= 8; i++) {
//   console.log(`Task ${i}`);
// }

// While Loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// let i = 1;
// while (i <= 10) {
//   console.log(`Task ${i}`);
//   i++;
// }

// // Array
// const newArray = [
//   "Data 1",
//   "Data 2",
//   "Data 3",
//   "Data 4",
//   "Data 5",
//   "Data 6",
//   "Data 7",
//   "Data 8",
//   "Data 9",
//   "Data 10",
// ];
// console.log(newArray);
// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);
// // console.log(newArray[3]);
// // console.log(newArray[4]);
// // console.log(newArray[5]);
// console.log(newArray.length);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// for (let i = newArray.length - 1; i >= 0; i--) {
//   console.log(newArray[i]);
// }

// // Loop break
// for (let i = 0; i <= newArray.length; i++) {
//   if (i == 5) break;
//   console.log(newArray[i]);
// }

// // Loop Continue
// for (let i = 0; i < newArray.length; i++) {
//   if (i == 4) continue;
//   console.log(newArray[i]);
// }

// // Array
// const newArray = [
//   "Data 1",
//   "Data 2",
//   "Data 3",
//   "Data 4",
//   "Data 5",
//   "Data 6",
//   "Data 7",
//   "Data 8",
//   "Data 9",
//   "Data 10",
// ];
// console.log(newArray);

// // IndexOf
// console.log(newArray.indexOf("Data 5"));
// console.log(newArray.indexOf("Data 1"));
// console.log(newArray.indexOf("Data 10"));
// console.log(newArray.indexOf("Data 11"));
// console.log(newArray.indexOf("Data 12"));

// // Includes
// console.log(newArray.includes("Data 10"));
// console.log(newArray.includes("Data 11"));
