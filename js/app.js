



document.querySelector('#start_game').addEventListener('click',()=>{
    document.querySelector('.Welcome').style.display = "none";
    document.querySelector('.table').style.display = "inline-table";
    setTimeout(()=>{
        console.log("Start...")
        var images = document.getElementsByTagName('img'); 
        for(var i = 0; i < images.length ; i++) {
            images[i].src = `images/un.jpg`
        }
    
        console.log("End..")
    },5000)
})