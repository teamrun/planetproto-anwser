// -> Create an object called 'machine'
// -> Use Object.create to create another object called 'robot' with 'machine' 
//    set as the prototype
// -> Use Object.create to create another object called 'robby' with 'robot' 
//    as the prototype
var machine = {};

var robot = Object.create( machine );
var robby = Object.create( robot );

// console.log( Object.getPrototypeOf( robby ) );

// -> Claim the result of `machine.isPrototypeOf(robby)` (use claim())
claim(machine.isPrototypeOf(robby), true );
// -> Claim the result of `robot.isPrototypeOf(robby)` (use claim())
claim(robot.isPrototypeOf(robby), true);
// -> Claim the results of `Object.getPrototypeOf(robby)` (use claim.same())
// claim.same checks that two variables are the same object, not just similar
claim.same(Object.getPrototypeOf(robby), robot);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
