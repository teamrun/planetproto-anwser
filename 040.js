// -> Define three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine add a property 'motors' set to null.
// -> Make machine the prototype of robot and vehicle
var machine = {};
var vehicle = {};
var robot = {};

machine.motors = null;

robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> Claim machines.motors, robot.motors and vehicle.motors (in that order)
claim(machine.motors, null );
claim(robot.motors, null );
claim(vehicle.motors, null );

// -> Set robot.motors to 4 by direct assignment

robot.motors = 4;

// -> Claim again machines.motors, robot.motors and vehicle.motors 
//    (in that order)
claim(machine.motors, null );
claim(robot.motors, 4 );
claim(vehicle.motors, null );

module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
