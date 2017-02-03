1.
var firstName = "Matthew";
var lastName = "Gordon";
console.log(firstName + " " + lastName);

2.
function firstNameLastName(firstName, lastName) {
return firstName + " " + lastName;
};
firstNameLastName("Matthew", "Gordon");


3.
function lastNameFirstName(firstName, lastName) {
return lastName + ", " + firstName;
};
lastNameFirstName("Matthew", "Gordon");


4.
var firstName = "Matthew"
alert(firstName.length);


5.
var people = ["Jack", "John", "James"]
people[0] + "\n" + people[1] + "\n" + people[2];


6.
function firstLetter(name) {
return name.slice(1);
};
firstletter("jack")


7.
function firstJ(name) {
if (name.charAt(0) === "J" {
return name.slice(1);
}
else { alert("That name doesn't begin with a J!");
}
};
firstJ("Ted")


8.
function firstJr(name) {
if (name.charAt(0) === "J") {
return name.slice(1);
}
else if (name.charAt(0) === "R" {
return name = name.slice(0, name.length - 2);
}
else { alert("That name doesn't begin with a J or R!");
}
};
