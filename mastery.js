
 var get=document.getElementsByClassName("HeyListen")[0]

 function hear(){

   var tall = document.getElementsByClassName("treeHeight")[0].value
   var brick = document.getElementsByClassName("treeBuild")[0].value
   var rock = document.getElementsByClassName("treeBuild")[0].value

    tall=tall.trim()
    brick=brick.trim()
    console.log(tall)
    console.log(brick)




    if(isNaN(tall)!==NaN && brick.length === 1){
      for(r=1; r<=tall; r++){
        var onespace = " "
        var bump = rock+rock
        console.log((onespace.repeat(tall-r))+brick)
        brick= brick + bump

      }
    } else {
      alert("Sorry, it seems you've filled out the boxes wrong.  Try again.")
    }
  }


document.addEventListener("keyup", function (e) {
  if(e.code=="Enter"){

    console.log("I hear you")
    return hear
  }
})
 get.addEventListener("click", hear, false)
