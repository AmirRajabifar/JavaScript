var name = "Henry";  //global


function printName() {
	var name2 = "Sarah";	//local variable
}

printName();
document.write (name);	//will print - gloabal variable
document.write (name2);	//will not print - local variable from function printName



