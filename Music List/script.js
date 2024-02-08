let $=document
let players = $.querySelectorAll('.fa-play')
let audioElem = $.querySelectorAll('audio')
console.log(players);
let musicName
let audioname
players.forEach(function(playItems){
    
    playItems.addEventListener('click',function(event){
        
        musicName = event.target.dataset.name
        audioElem.forEach(function(audio){
         if(audio.dataset.name==musicName){
             audio.play()
         }else{
             audio.pause()
         }
        })
       
       
    })
})