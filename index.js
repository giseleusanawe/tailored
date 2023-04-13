// const myParagraph = document.getElementById("myParagraph");

// myParagraph.addEventListener("mouseenter", function() {
//   this.style.textDecoration = "none";
// });

// myParagraph.addEventListener("mouseleave", function() {
//   this.style.textDecoration = "underline";
// });


var element = document.getElementById("myText");

element.addEventListener("mouseover", function() {
  element.style.textDecoration = "none";
});

myText.addEventListener("mouseleave", function() {
    myText.style.textDecoration = "underline" ;
    
  });

myText.addEventListener("mouseleave", function(){
    myText.style.textDecorationColor = "rgb(39, 172, 94)";
} ) 

myText.addEventListener("mouseleave", function(){
    myText.style.textDecorationThickness = "3px";
});





  const button = document.getElementById('myButton');
  button.addEventListener('mouseover', function() {
  
    button.style.backgroundColor = 'white';
  });

  myButton.addEventListener('mouseleave', function(){
    button.style.backgroundColor = 'rgb(39, 172, 94)';
  });







  document.getElementById("myButton").addEventListener("click", function() 
  {
    document.getElementById("myElement").style.display = "flex";
  });



  function changeImage(x,image){
    if (x == 1)
    {
        image.src = '/images/image2.png';
    }
    if(x == 2){
        image.src = '/images/image1.png'
    }
  }






//   let cd = document.getElementById('myImage');
//   function visibleCard(){
//     cd.style.display = 'block';
//   }

//   function imageTwo(){
//     this.setAttribute("src", "/images/image2.png")
//   }

//   function visibleCard(){
//     cd.style.display = 'block';
//   }





// var cd = document.getElementById('myImage');

// function imageTwo(){
//   var img = document.getElementById('myImage');
//   img.setAttribute("src", "/images/image2.png");
// }
// function imageTwo(){
//     var img = document.getElementById('myImage');
    
// }






//   function changeImage() {
//   document.getElementById("myImage").src = "image1.png";
// }

// function changeImageBack() {
//   document.getElementById("myImage").src = "chfk.png";
// }








// const myText = document.querySelector('#myText');

// myText.addEventListener('mouseover', function() {
//   this.style.textDecoration = 'none';
// });

// myText.addEventListener('mouseout', function() {
//   this.style.textDecoration = 'underline';
//    myText.style.color = "black";
// });