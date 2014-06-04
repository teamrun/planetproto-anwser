// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`
// -> Set the prototype of both robot and vehicle to machine
// -> Set the prototype of both robot and vehicle to machine

var machine = {
    parts: [],
    capabilities: {}
};
var robot = {};
var vehicle = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;


// -> Claim the result of robot.parts
claim(robot.parts, []);
// -> Claim the result of vehicle.parts
claim(vehicle.parts, []);
// -> Claim the result of robot.capabilities
claim(robot.capabilities, {});
// -> Claim the result of vehicle.capabilities
claim(vehicle.capabilities, {});

// -> Add a 'core' part to robot by doing `robot.parts.push('core')`
// -> Add an ability to vehicle by doing `vehicle.capabilities.fly = true`

robot.parts.push( 'core' );
vehicle.capabilities.fly = true;

// -> Claim the result of robot.parts
claim(robot.parts, [ 'core' ]);
// -> Claim the result of vehicle.parts
claim(vehicle.parts, ['core']);
// -> Claim the result of robot.capabilities
claim(robot.capabilities, {fly: true});
// -> Claim the result of vehicle.capabilities
claim(vehicle.capabilities, {fly: true});


module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
