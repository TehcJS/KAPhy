Draw.rect = function(x, y, w, h) {
  Canvas.context.beginPath();
  switch(Draw.currentRectMode) {
    case CENTER: Canvas.ellipse(x, y, w, h, 0, 0, 6.3) break;
    case CORNER: Canvas.ellipse(x - w/2, y - h/2, w, h, 0, 0, 6.3) break;
    case CORNERS: Canvas.ellipse(x - w/2, y - h/2, w, h, 0, 0, 6.3) break;
    case RADIUS: Canvas.ellipse(x, y, w * 2, h * 2, 0, 0, 6.3) break;
  }
  Canvas.context.fill();
  Canvas.context.stroke();
};
