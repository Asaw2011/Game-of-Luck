
let lucky = 0;
let unlucky = 0 ;

let goldScoreElement = document.getElementById("goldscore")
let rustScoreElement = document.getElementById("rustscore")

function openbox(boxid){
    console.log("here")
    
    let box = document.getElementById(boxid)
    if ( box.src !== "https://gameofluck.netlify.app/chest.png"){
        return
    }
    let luck = Math.random();
    if ( luck < 0.5 ){
        box.src = "https://gameofluck.netlify.app/unlucky.png"
        unlucky++;
        rustScoreElement.innerText = unlucky;
        if (unlucky > 3 ){
            location.href = "youlose.html"
        }
    }
    else{
        box.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/wooden-chest-5206799-4361540.png"
        lucky++;
        goldScoreElement.innerText = lucky;
        if (lucky > 3 ){
            location.href = "youwin.html"
        }
    }

    console.log(boxid)
}