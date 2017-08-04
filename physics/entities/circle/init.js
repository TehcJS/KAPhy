if (!Physics.Circle) {
  Physics.Circle = function(config) {
    /** Position and Velocity **/
    this.pos = config.pos || new Vector2(config.x || 0, config.y || 0);
    this.vel = config.vel || new Vector2(config.vx || 0, config.vy || 0);
    
    this.pos = new Vector2(Canvas.toPixels(this.pos.x), Canvas.toPixels(this.pos.y));
    this.vel = new Vector2(Canvas.toPixels(this.vel.x), Canvas.toPixels(this.vel.y));

    /** Bounciness **/
    this.bcf = config.bcf || 0.75;

    /** Radius **/
    this.rad = config.rad || 15;

    /** Array of Constraints **/
    this.constraints = [];

    /** Physical Sleep **/
    this.asleep = false;

    /** Array of Position Adjustments **/
    this.posAdjustments = [];

    /** Mass **/
    this.mass = config.mass || 1;

    /** Fixed or Not **/
    this.fixed = config.fixed || false;

    /** Variables Used When Submerged**/
    this.buoyancyForce = 0;
    this.waterDrag = 1;
  };
}