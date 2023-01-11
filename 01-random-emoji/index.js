const btnEl=document.getElementById("btn");
const emojiNameEl=document.getElementById("emoji-name");

const emoji=[];

   async function getEmoji  (){

    let response=await fetch("https://emoji-api.com/emojis?access_key=0afb8183764a22c014979626d0f3498d197ffb00")
    data = await response.json();
    console.log(data)
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName
           
        }) 
    } 
   }
 
 getEmoji();
 console.log(emoji)

btnEl.addEventListener("click",()=>{
 const randomNum=Math.floor(Math.random()*emoji.length)
 btnEl.innerText=emoji[randomNum].emojiName;
 emojiNameEl.innerText=emoji[randomNum].emojiCode;
})

