

// tall.trim()
// brick.trim()


 var get=document.getElementsByClassName("HeyListen")[0]

 function hear(){
  // alert("I can hear you")

   var tall = document.getElementsByClassName("treeHeight")[0].value
   var brick = document.getElementsByClassName("treeBuild")[0].value

  console.log(tall.trim())
  console.log(brick.trim())
}

function slimDown(){
  tall=tall.trim()
  brick=brick.trim()
}

 get.addEventListener("click", hear, false)

 document.addEventListener("keyup", function (e) {
   if(e.code==="Enter"){
     return hear
   }
 })
