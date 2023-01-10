function add(){
    let x = document.getElementById("inp").value
    let y = Math.floor(Math.random()*5)+1;

    if(x==y){
        var z = "YOU HAVE WON THE GAME"
    }else{
        var z= "SORRY, TRY AGAIN"
    }
    document.getElementById("para2").textContent = z;
     document.getElementById("spa").textContent = y;

};