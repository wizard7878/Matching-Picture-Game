var storge = {}

const starGame = () =>{

        document.querySelector('.T').style.display = "block"
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

    
        var seconds = document.querySelector(".timer").textContent;

        var countdown = setInterval(function() {
        seconds--;
        document.querySelector(".timer").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            document.querySelector('.T').style.display = "none"
        }
        
       
    }, 1000);
}


function newGame(){
    document.querySelector('#start_game').addEventListener('click',starGame)
}




 const random_Number = (img) => {
    let randomNums = []
    let random
    let i = 0
    while(i < 16){
        random = ((Math.random(1) * 7 ) + 1 ).toFixed(0)
        if(randomNums.filter(x => x === random).length !== 2){
            randomNums.push(random)
            img[i].src = `images/${random}.jpg`
            storge[i] = random
            // console.log(random)
            i+=1
        }
   }
}




 function Selecting_Images (element){
    let comparisonPhotos = []
    let counter = 0
    let image_name
    let image_address = []
    Array.from(element).forEach(element => {
        element.addEventListener('click', (e) => {
            let n = e.target.getAttribute('photo')
            e.target.src = `images/${Number(storge[n])}.jpg`
            image_name = String(e.target.src).split('/')
            console.log(e.target)
            comparisonPhotos.push(image_name[image_name.length - 1])
            image_address.push(e.target)

            if(comparisonPhotos.length > 2 || image_address[0] === image_address[1]){
                comparisonPhotos = []
                image_address = []
                comparisonPhotos.push(image_name[image_name.length - 1])
                image_address.push(e.target)
            }

            console.log(comparisonPhotos)
            console.log(image_address)

            
            setTimeout(() =>{
                if(comparisonPhotos.length > 1){
                    console.log('COMPARISON  =',comparisonPhotos[0] === comparisonPhotos [1])
                    if(comparisonPhotos[0] !== comparisonPhotos [1] && image_address.length > 1){
                        image_address[0].src = `images/un.jpg`
                        image_address[1].src = `images/un.jpg`
                        
                    }
                    else if(comparisonPhotos[0] === comparisonPhotos [1] && image_address[0].src === image_address[1].src ){
                     
                        counter += 1
                       image_address = []
                       
                        console.log(counter)
                    }

                    if (counter === 8){
                        document.querySelector('.table').style.display = "none"
                        document.querySelector('#start_game').style.display = 'block'
                        document.querySelector('.playagain').style.display = 'block'
                      
                    
                        let head = document.getElementsByTagName('head')
                        head[0].insertAdjacentHTML('beforeend',`<link rel="stylesheet" href="css/firework.css">`)
                    }
                }
            },1000)
              

        });

       
      });
    
}

function startAgain(){
    document.querySelector('#play_again').addEventListener('click',()=>{
        location.reload()
        
    })

    
}



(function Controller(){
    

    newGame()
    let dd = document.getElementsByTagName('img')
    random_Number(dd)
    console.log(storge)
    Selecting_Images(dd)
    startAgain()

    
})()
