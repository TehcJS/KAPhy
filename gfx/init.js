if(!loaded) {
  var loaded = true
  
  var gfxLoaded = {};
  var gfxToLoad = {};
  
  gfxToLoad.testImage = new Image();
  
  gfxToLoad.testImage.src = "https://github.com/TemporalFuzz/KAPhy/gfx/testimage.png";
  
  var loadEvent = new Event("imageLoad");
  
  testImage.onload = function() {
    console.log("Image loaded!");
    gfxLoaded.testImage = testImage;
    document.dispatchEvent("imageLoad");
  };
}
