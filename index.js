  /* 1 Print in JS */

  //console.log("Hello");
  //alert("me");
  //document.write("jdhdecdecec");

  /* 2. JS console API */

  //console.log("Hello",(4+6),"haha");
  //console.error("jdhdecdecec");
  //console.warn("jdhdecdecec");

  /* 3. JS variables */

  // Number
  var no1=34;
  var no2=56;
  // console.log(no1+no2);

  // string
  var str="String";
  var str2='Stringg';

  //objects
  var marks={
    ravi : 34, shiva:66
  }
  //console.log(marks);

  /* Two types of data Types
  1. Primitive: undefined: null, number, string, boolean,symbol
  2. Reference data types: Arrays and objects
  */

  var arr=[1,2,"hah",3,4,5]
  //console.log(arr);

  /* 4. Operators  (Like C, C++ .... so on) */

  var a=2;
  var b=3;
  var c;
  c=a+b;
  // console.log(c);


  /* 5. Function */

  function avg(a,b)
  {
     c=(a+b)/2
    return c;
  }
  c1=avg(8,6);
  // console.log(c1);

  /* 6. Conditionals in JS   (Like C, C++ .... soon) */

  age=20;
  if(age>18)
  {
    // console.log("Over");
  }
  else{
    // console.log("under");
  }

  /* 7. Loop in JS  (Same as in C, C++ */
    for(i=0;i<arr.length;i++)
    {
       // console.log(arr[i]);
    }

    let j=0;
   while(j<arr.length)
    {
      //  console.log(arr[j]);
        j++;
    }

/* 8. Array Methods  */ 
    let myArr =["haha",true,null,20]
    myArr.pop();
    myArr.push("hah");
   myArr.shift();
   myArr.unshift("hehe");
  //  console.log(myArr); 
    //myArr.sort()  (sort alphabetically)

    /* 9.  String Methods */

let string= "haha heheh haaa heheh";
//console.log(string.length);
//console.log(string.indexOf("heheh"));
//console.log(string.lastIndexOf("heheh"));
//console.log(string.slice(5,7));
//string=string.replace("haaa","hihi");
//console.log(string);

/* 10. Dates */

let myDate= new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

/* 11. DOM  */

document.getElementById('click').style.border="2px solid red";
let byid=document.getElementById('click');
//console.log(byid);
let byclass=document.getElementsByClassName('container');
//console.log(byclass);
byclass[0].classList.add("color");
let byTag=document.getElementsByTagName("div");
//console.log(byTag);
let createElement=document.createElement('p');
createElement.innerText="hahha";
byTag[0].appendChild(createElement);

//Selecting Using Query
let selector=document.querySelector(".container")
console.log(selector);

/* 12. Events in JS */

function clicked()
{
    console.log("button cliicked");
}


 


