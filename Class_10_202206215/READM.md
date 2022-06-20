const cars = [["BMW","Audi"],[["X3","5"],["Q1","Q2"]]];
undefined
i = 0;
0
cars[0][i] + " markas mašīnas ir: " + cars[1][i];
'BMW markas mašīnas ir: X3,5'
i = 1;
1
cars[0][i] + " markas mašīnas ir: " + cars[1][i];
'Audi markas mašīnas ir: Q1,Q2'
document.getElementById("client").innerHTML = cars;
(2) [Array(2), Array(2)]
document.getElementById("client").innerHTML = cars[0][i];
'Audi'
document.getElementById("client").innerHTML = cars[0][i] + "markas mašinas ir " + cars[1][i];
'Audimarkas mašinas ir Q1,Q2'
