var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];


var famRows = _.map(gillFamily, function(el) { return "<tr><td>" +  el.name + "</td><td>" + el.age + "</td></tr>" });

//1.
_.map(gillFamily, "name");

//2.


_.map(gillFamily, (el) => el.name + " Gill");

//3.

_.sumBy(gillFamily, function(o) { return o.age; }); 
_.sumBy(gillFamily, "age");

//4.
_.meanBy(gillFamily, "age");

//5.
_.map(_.filter(gillFamily, function (person) { return person.age < 50; }),
  function (person) { return person.name; });

//6.
_.size(gillFamily, name);

//7.
_.filter(gillFamily, function (person) {
  return person.age < 50;
}).length
//8.
_.chain(gillFamily)
  .filter(function (person) { return person.age < 50; })
  .map(function (person) { return person.name + ' Gill'; })
  .join(', ')
  .value()

//9. 
console.log("<table>\n <head>\n <title>The Gill family</title>\n <tr>\n <td>Name</td>\n <td>Age</td>\n </tr>\n" + famRows + "\n</table>")
//10.
_.map(gillFamily, function(over) {
    return over.age > 26 ? _.omit(over, 'age') : over;
});

//11.
_.sortBy(gillFamily, "age");

//12.
_.filter(gillFamily, function(dPerson) {
return dPerson.name.startsWith("d")
});


//13.
_.groupBy(gillFamily, function(firstLetter) {
return firstLetter.name.charAt(0) ; 
});

//14.
_.minBy(gillFamily, "age");


//15.

_.filter(gillFamily, function(aIn) {
return aIn.name.includes("a");
});

//16.
_.map(gillFamily, function(person) {
return person.name.charAt(0).toUpperCase() + person.name.slice(1);
});

//17.
_.chain(gillFamily)
.filter(function(aIn) {
return aIn.name.includes("a");
})
.sortBy("age")
.first()
.value();


















