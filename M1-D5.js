/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
let test = "I'm a string";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
const sum = 10 + 20;
/* Ex.C  
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
let random= Math.floor(Math.random()*21);
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
const personal_info={
      name: "Vanessa",
      surname: "Cattabiani",
      birthday: "1999/08/11",
      age: 21
}
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
delete personal_info.age;
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
personal_info.skills= ["C++", "JS", "HTML", "css"];
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
personal_info.skills.pop();
// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
const dice = () => Math.floor(Math.random()*6)+1;
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
const WhoIsBigger = (n1,n2) => (n1 > n2) ? n1: n2;
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const SplitMe = (S) => S.split(" ");
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
const DeleteOne = (S,B) => (B === true)? S.substring(1) : S.substring(0, S.length-2);
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
const OnlyLettersWithRegular = (S) => S.replace(/[0-9]/g, '') //Use of regular Expression
const OnlyLettersWithNormal = (S) => {
  let result="";
  
    for(let i = 0; i<S.length ; i++){
      if( parseInt(S.charCodeAt(i))-48 >= '0' &&  parseInt(S.charCodeAt(i))-48 <= '9'){
  
      } else result+=(S.charAt(i));

    }
    return result;
}

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const IsThisAnEmail = (S) => {
  let index_found_at, index_found_dot;
  //check if the string exists
  if (S !== "undefined"){
    index_found_at= S.search("@");
    
    // Find the "@"
    if (index_found_at >-1){
      //Check if there is only one "@" and if there is a "." after 3 char after "@"
      if (S.includes('@', index_found_at+1) !== true && S.includes(".", S.indexOf('@')+3) ===true )
      {
       index_found_dot= S.indexOf(".",index_found_at);
       //Check if there is only 1 "." after "@" and if the given string doesn't start or end with "@" and/or "."
       if(S.includes('.', index_found_dot+1) !== true && (S.startsWith(".") || S.startsWith("@") || S.endsWith(".") || S.endsWith("@")) !== true)
       return true;
      }
    }
 
  } return false;
}

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const WhatDayIsIt = () => {
  let today= new Date();
  return day_of_the_week[today.getDay()];
}

const day_of_the_week = {
  "0": "SUNDAY",
  "1": "MONDAY",
  "2": "TUESDAY",
  "3": "WEDNSDAY",
  "4": "THURSDAY",
  "5": "FRIDAY",
  "6": "SATURDAY",
}

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const RollTheDices= (times) => {
const roll = {
  values: [],
  sum: 0
  }; 
  for(i=0; i<times; i++){
    temp = dice();
    roll.values.push(temp);
    roll.sum+=temp;
  }

  return roll;
}
console.log(RollTheDices(2));
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
const HowManyDays = (Data) =>{

  let today= new Date();
  Data= Date.parse(Data);
  Data=(Math.abs(Date.parse(today)-Data));
 
  return( Math.floor((Data/(1000*3600*24))));
}
//console.log(HowManyDays("1999/08/30"))
/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
// gets Bday from EX.D
const IsTodayMyBDay = () =>{
  
  let today= new Date();
  let birthday= new Date(personal_info.birthday);
  let birth_daymonth= [birthday.getMonth(), birthday.getMonth()];
  let today_daymonth= [today.getMonth(), today.getMonth()];
  if(birth_daymonth[0] === today_daymonth[0] && birth_daymonth[1] === today_daymonth[1] ){
    
    return "Congrats!!!!Today is your Birthday";
  } else 
  return "SORRY !!!! Today is not your Birthday";
 
  
}

// JS Arrays // Objs

// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
const DeleteProp = ( Obj, strg) => {
  delete Obj[strg];
  return Obj;
}

//console.log(DeleteProp(personal_info, 'birthday' ))
/* Ex.12 TODO 
    Write the function OlderMovie that finds the older movie in the array
*/
const OlderMovie= (arr) => {
  let temp=0;
  for(let i = 0; i < arr.length-1; i++){
        if (Number(arr[i].Year) <= Number(arr[i+1].Year)){ 
         temp=i; 
      }
      else temp=i+1;
    console.log()
    }
    return arr[temp].Title;
}

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */

console.log("Ex. 1 Dice", dice());
console.log("Ex. 2 Who is bigger", WhoIsBigger(15,16));
console.log("Ex. 3 Split me", SplitMe("I Love what ever"));
console.log("Ex. 4 Delete a letter", DeleteOne("I Love what ever" , true));
console.log("Ex. 5A Only letters", OnlyLettersWithNormal("I Love 123 what ever"));
console.log("Ex. 5B Only letters rejex", OnlyLettersWithRegular("I Love 123 what ever"));
console.log("Ex. 6 check if it an email ", IsThisAnEmail("vanebrunocattabini@gmail.com"));
console.log("Ex. 7 what day is it?", WhatDayIsIt());
console.log("Ex. 8 Roll the dice", RollTheDices(5));
console.log("Ex. 9 How many days since", HowManyDays('1999/04/12'));
console.log("Ex. 10 Is today my Birthday", IsTodayMyBDay());
console.log("Ex. 11 Delete a property", DeleteProp(personal_info,"birthday"));
console.log("Ex.12 What is the Oldest movie?",(OlderMovie(movies)));
