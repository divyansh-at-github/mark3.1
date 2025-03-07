document.querySelector('.li-wrapper').addEventListener('click',(e)=>{
    if(e.target.id==="checkbox"){
        document.querySelector('.li-wrapper span').classList.toggle('strike')
    }
})
