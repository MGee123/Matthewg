// 1.

[1, 2, 3, 4 + 5].length

1
// => 1
2
// => 2
3
// => 3
4
// => 4
5
// => 5
4 + 5 
// => 9 
[1, 2 , 3 , 9].length
// => 4

// 2.

"hello".subString(0, 3).length

"hello"
// => hello
0
// => 0
3
// => 3
"hello".substring(0, 3)
// => "hell"
"hell".length
// => 4

// 3.

"hello".subString(0, 3 - 1).length + "world"

"hello"
// => hello
0
// => 0
(3-1)
// => 2
"hello".subString(0, 2)
// => "hel"
"hel".length 
// => 3
3 + "world"
// => 3world

// 4. 

{ hello: "wor" + "ld" }
// property => hello
"wor" + "ld"
// => world
{ hello: "world"}

