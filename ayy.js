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
.chain(gillFamily)
  .filter(function (person) { return person.age < 50; })
  .map(function (person) { return person.name + ' Gill'; })
  .join(', ')
  .value()

9.


10.
.chain(gillFamily)
_.dropWhile(gillFamily, function(over) { return over.age > 26; })
.map(function (over) { return over.name; })
.value()

11.

12.
13.
14.
_.min(gillFamily, "age");

15.

