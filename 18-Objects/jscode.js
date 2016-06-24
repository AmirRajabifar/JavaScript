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

//we can change the data type of an object property
orc.hair = 1;
// we can also add a new property as long as the property does not exist
orc.hair2 = " red";
document.write(newAge);

if (orc.stomachFull == true)
{
	orc.eat();	
}
else 
{
	document.write(" Not eating! ");
}

document.write(orc.hair);
document.write(orc.hair2);
//we can delete an object property by using the delete key word
delete orc.hair2;
document.write(orc.hair2); // the property does not exist >> undefined
