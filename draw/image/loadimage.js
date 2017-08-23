if(!KAPhy.Draw.loadImage) {
  KAPhy.Draw.loadImage = function(imageName, onLoad) {
    if(arguments.length === 0 || arguments.length > 2) {
      console.warn("KAPhy Warning - KAPhy.Draw.loadImage() takes 1 or 2 arguments.");
      return;
    }
    
    if(!Images[imageName]) {
      console.warn("KAPhy Warning - Tried to load invalid image.");
      return;
    }
    
    var imageToLoad = new Image();
    imageToLoad.onload = onLoad;
    imageToLoad.src = Images[imageName];
  };
}
