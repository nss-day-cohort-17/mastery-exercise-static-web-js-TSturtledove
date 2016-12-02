

// tall.trim()
// brick.trim()


 var get=document.getElementsByClassName("HeyListen")[0]

 function hear(){
  // alert("I can hear you")

   var tall = document.getElementsByClassName("treeHeight")[0].value
   var brick = document.getElementsByClassName("treeBuild")[0].value
  //
  // console.log(tall.trim())
  // console.log(brick.trim())
    tall=tall.trim()
    brick=brick.trim()
    console.log(tall)
    console.log(brick)




    if(isNaN(tall)!==NaN && brick.length === 1){
      tall=parseInt(tall,10)
      // tall=tall.value
      for(r=1; r<=tall; r++){
        // var onespace = " "
        console.log((" ")*(tall-r)+brick)
      }
    } else {
      alert("Sorry, it seems you've filled out the boxes wrong.  Try again.")
    }


  }


document.addEventListener("keyup", function (e) {
  if(e.code=="Enter"){
    // console.log("I hear you")

    // return hear
  }
})
 get.addEventListener("click", hear, false)
