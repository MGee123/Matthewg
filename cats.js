function randomCat() {
var catPics = [{
src: "BritishShrthair.jpg"
}, {
src: "Siamese.jpg"
}, {
src: "Persian.jpg"
}];

var buffer = []
for (var i = 0, j = catPics.length; i < j; i++) {
        buffer[i] = new Image();
        buffer[i].src = catPics[i].src;
        
    }

function getRandomInt(min,max) { 
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return buffer[imn];
    }  

var newImage = getRandomInt(0, buffer.length - 1);

var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
var title = $('img').attr('title');
$('img').before(title);

document.body.appendChild(newImage);
}
