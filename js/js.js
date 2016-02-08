var myThumbDiv = document.getElementById("divone");

var imageListDog = [];
  imageListDog[0] = "images/dogs-1.jpg";
  imageListDog[1] = "images/dogs-2.jpg";
  imageListDog[2] = "images/dogs-3.jpg";
  imageListDog[3] = "images/dogs-4.jpg";
  imageListDog[4] = "images/dogs-5.jpg";
  imageListDog[5] = "images/dogs-6.jpg";
  imageListDog[6] = "images/dogs-7.jpg";
  imageListDog[7] = "images/dogs-8.jpg";
  imageListDog[8] = "images/dogs-9.jpg";
  imageListDog[9] = "images/dogs-10.jpg";
  imageListDog[10] = "images/dogs-11.jpg";
  imageListDog[11] = "images/dogs-12.jpg";
  imageListDog[12] = "images/dogs-13.jpg";
  imageListDog[13] = "images/dogs-14.jpg";
  imageListDog[14] = "images/dogs-15.jpg";
  imageListDog[15] = "images/dogs-16.jpg";
  imageListDog[16] = "images/dogs-17.jpg";
  imageListDog[17] = "images/dogs-18.jpg";
  imageListDog[18] = "images/dogs-19.jpg";
  imageListDog[19] = "images/dogs-20.jpg";
  imageListDog[20] = "images/dogs-21.jpg";
  imageListDog[21] = "images/dogs-22.jpg";
  imageListDog[22] = "images/dogs-23.jpg";
  imageListDog[23] = "images/dogs-24.jpg";

function buildThumbnails()
{
  var thumbsDiv = document.getElementById("divone");
  
  var output = "";

  output += '<div class="thumbs_block"> ';
  
  for(var i=0; i < imageListDog.length; i++)
  {
    output += '<img src="' + imageListDog[i] + '"  />';
  }
  
  output += '</div>';
  
  thumbsDiv.innerHTML = output;
}

window.onload = function()
{
  buildThumbnails();
}


var purchasedImages = [];

myThumbDiv.addEventListener("click", onImageClick, false);

function onImageClick(evt)
{
  var onlyPath = evt.target.getAttribute("src");
  console.log(onlyPath);
  var imageIndex = imageListDog.indexOf(onlyPath);
  var selectedImage = imageListDog.splice(imageIndex, 1);
  console.log(selectedImage);
  purchasedImages.push(selectedImage);
  update_shopping_cart();
  buildThumbnails();
  
  function update_shopping_cart()
  {
    var cart = document.getElementById("divtwo");
    var output = "";
    for(var i=0; i <= purchasedImages.length -1; i++ )
      {
        output += '<img src="' + purchasedImages[i] + '" />';
      }
    cart.innerHTML = output;
  }
  
}

