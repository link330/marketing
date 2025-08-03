let wordOne=document.querySelector("#word1")
let wordTwo=document.querySelector("#word2")
let showmsg=document.querySelector(".result span")
let btnAnagram=document.querySelector(".Anagram")
let btnClear=document.querySelector(".Clear")

btnAnagram.addEventListener("click",()=>{
    check()

})

function check(){
let newa = wordOne.value.toLocaleLowerCase().trim().split("").sort().join("")
let newb = wordTwo.value.toLocaleLowerCase().trim().split("").sort().join("")
try {  
if (newa===""&&newb==="") {
    throw new Error("Your inputs is empty...");   
}
else if(newa===newb){
    showmsg.innerText=true
}else{
     showmsg.innerText=false
}
} catch (error) {
    console.log(error)
}
}

btnClear.addEventListener("click",()=>{
    wordOne.value=""
    wordTwo.value=""
    showmsg.innerText=""
})














// for (let i = 0; i < newa.length; i++) {
//         if (newa[i] === newb[i]) {
//             // console.log(true)
//             count++
//         }

// }
// if (newb.length!=count) {
//     console.log(false);
    
// }
// else{
//     console.log(true)
// }

// console.log(count);