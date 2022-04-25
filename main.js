let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/3.jpg') {
      myImage.setAttribute('src','images/bumhead.jpg');
    } else {
      myImage.setAttribute('src','images/3.jpg');
    }
}