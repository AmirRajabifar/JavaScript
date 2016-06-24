/*
define:
	var orc = {
		color: "green",
		height: 5,
		weight: 180,
		yell: function(){
			document.write("Orcs are the best!");
		}
	};

call:
	orc.height;
	orc.yell();

note:
	1. Variables inside an object are called properties.
	2. Real life obgects have multiple properties.
	3. Use the '.' to access an object 
	4. Functions inside objects are called methods
*/

var orc = {
	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function () {
		document.write(" YUM YUM!!!");
	}
};

var newAge = orc.age + 2;
orc.stomachFull = false;
document.write(newAge);
if (orc.stomachFull == true)
{
	orc.eat();	
}
else 
{
	document.write(" Not eating!");
}
