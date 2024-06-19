// let todo=[];

// let req=prompt("please enter your request");

// while(true){
//     if(req=="quit"){
//         console.log("quiting app");
//         break;
//     }


//     if(req=="add"){
//         console.log("-------------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("-------------");
//     }
//     else if(req=="add"){
//         let task=prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added")
//     }

//     let req=prompt("please enter your request");

// }
        

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,);
//     }
// }
// console.log(arr)

// const post = {
//     username: "@ritikdubey",
//     content: "this is my first post",
//     likes:150,
//     repost:50,
//     tags:["ritik", "amod", "rahul"]
// };

// const student={
//     name:"ritik dubey",
//     age:20,
//     marks:68.9,
//     city:"haryana"
// };

// const classInfo ={
//     aman:{
//         grade:"A++",
//         city:"Delhi"
//     },
//     ritik:{
//         grade:"A+",
//         city:"Ambala"
//     },
//     ritika:{
//         grade:"B++",
//         city:"Siwan"
//     }

// //     };

// const classInfo=[
//     {
//         name:"AMAN",
//         grade:"A++",
//         city:"Delhi"
//     },
//     {
//         name:"Ritik",
//         grade:"A+",
//         city:"Bihar"
//     },
//     {
//         name:"Ritika",
//         grade:"B+",
//         city:"Punjab"
//     }

// ];



const max= prompt("Enter the max number");

const random= Math.floor(Math.random() * max)+1;
console.log(random);

 let guess=prompt("guess the number");
 while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are Right!! congrates!!random nuber was!", random);
        break;
    } else if(guess < random){
        guess =prompt(" hint: your guess was to small.. please tyr again");
    }else {
        guess =prompt(" hint: your guess was to large... please tyr again");
    }
    

 }