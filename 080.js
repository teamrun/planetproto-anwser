// -> Define a 'Robot' function
// -> Inside the Robot constructor assign a property 'motors' on 'this', set 
//    this to 2
// -> Create an instance of Robot called 'robby'

function Robot(){
    this.motors = 2;
    return this;
}

var robby = new Robot();

// -> Claim the result of `(robby instanceof Robot)`
claim((robby instanceof Robot), true );
// -> Claim the result of robby.motors
claim(robby.motors, 2 );


module.exports = {
	Robot:  Robot,
	robby:  robby
}
