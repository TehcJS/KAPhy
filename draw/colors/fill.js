if(!Draw.fill) {
  Draw.fill = function(r, g, b, a) {
    if(!Canvas.configured) {
      console.warn("KAPhy Warning - You must use Canvas.configure(); before you can draw!");
      return;
    }
    
    switch(arguments.length) {
      case 0: Canvas.context.fillStyle = "rgba(255, 255, 255, 1)"; break;
      case 1: Canvas.context.fillStyle = "rgba(" + arguments[0] + ", " + arguments[0] + ", " + arguments[0] + ", 1.0)"; break;
      case 2: Canvas.context.fillStyle = "rgba(" + arguments[0] + ", " + arguments[0] + ", " + arguments[0] + ", " + arguments[1]/255 + ")"; break;
      case 3: Canvas.context.fillStyle = "rgba(" + arguments[0] + ", " + arguments[1] + ", " + arguments[2] + ", 1.0)"; break;
      case 4: Canvas.context.fillStyle = "rgba(" + arguments[0] + ", " + arguments[1] + ", " + arguments[2] + ", " + arguments[3]/255 + ")";
    }
  };
}
