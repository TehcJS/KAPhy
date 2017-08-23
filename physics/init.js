if(!KAPhy.Physics) {
  KAPhy.Physics = {
    airResistance: 0.99,//The velocity of everything is multiplied by this number each frame.
    airResistanceSleeping: 0.9,//The air resistance of something that is "asleep".
  
    gravityForce: 0.7,//The magnitude of gravity
    
    constraintAdjustment: 0.3,//How much rigid constraints adjust their nodes' positions.
  
    sleepThreshold: 2,//Maximum velocity at which any circle can be "asleep".
  
    circleAdjustment: 0.3//The intensity of the position adjustment when circles collide
  };
}