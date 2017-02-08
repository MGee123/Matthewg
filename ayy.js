var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];

1.
_.map(gillFamily, "name");

2.


_.map(gillFamily, (el) => el.name + " Gill");

3.

_.sumBy(gillFamily, function(o) { return o.age; }); 
_.sumBy(gillFamily, "age");

4.
_(gillFamily).filter("age").reduce(function(a,m,i,p) {
return a + m.age/p.length;
},0);

5.
.map(_.filter(gillFamily, function (person) { return person.age < 50; }),
  function (person) { return person.name; });

6.
_.countBy(gillFamily, name);

7.
_.filter(gillFamily, function (person) {
  return person.age < 50;
}).length
8.
_.chain(gillFamily)
  .filter(function (person) { return person.age < 50; })
  .map(function (person) { return person.name + ' Gill'; })
  .join(', ')
  .value()

9.


10.
_.map(gillFamily, function(over) {
    return over.age > 26 ? _.omit(over, 'age') : over;
});

11.
_.sortBy(gillFamily, "age");

12.
_.filter(gillFamily, function(dee) {
return dee.name.charAt(0) === "d";
}); 


13.


14.
_.min(gillFamily, "age"); 


15.

_.filter(gillFamily, function(aIn) {
return aIn.name.includes("a");
});

16.
_.map(gillFamily, function(person) {
return person.name.charAt(0).toUpperCase() + person.name.slice(1);
});



















