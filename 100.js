// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

var Robot = function(){
    // 直接付给this的属性 每个实例都会新建一个
    this.parts = []
    return this;
}

Robot.prototype.parts = []
Robot.prototype.capabilities = []


var robby = new Robot();
var cranky = new Robot();

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared

robby.parts.push( 'core' );

// console.log( cranky.parts );

// 引用类型(Array/Object)的原型属性  变更会同步到Constructor!!
robby.capabilities.push( 'fly' );
// robby.__proto__.capabilities.push( 'fly' );
// Robot.prototype.capabilities.push( 'fly' );

// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);

module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
