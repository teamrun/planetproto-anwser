// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot(){
    // return this;
}

function Vehicle(){
    return {};
}


module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
