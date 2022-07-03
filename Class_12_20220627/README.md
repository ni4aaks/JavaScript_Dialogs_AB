## SWICH piemēri 
x = 10;
10
switch(x) {
  case 10:  // if (x === 'value1')
}
undefined
switch(x) {
  case 10:  // if (x === 'value1')
        console.log("x ir precīzi 10");
}
VM276:3 x ir precīzi 10
undefined
switch(x) {
  case 10:  // if (x === 'value1')
        console.log("x ir precīzi 10");
    case 11:
        console.log("x ir precīzi 11");
        
}
VM372:3 x ir precīzi 10
VM372:5 x ir precīzi 11
undefined
switch(x) {
  case 10:  // if (x === 'value1')
        console.log("x ir precīzi 10");
        break;
    case 11:
        console.log("x ir precīzi 11");
}
        
VM414:3 x ir precīzi 10
undefined
switch(x) {
    case 9:
        console.log("vai nu x ir precīzi 9 vai x ir bijis vienāds ar 10);
  case 10:
        console.log("vai nu x ir precīzi 10 vai x ir bijis vienāds ar 10);
    case 11:
        console.log("vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10");
}
VM755:3 Uncaught SyntaxError: Invalid or unexpected token
switch(x) {
    case 9:
        console.log("vai nu x ir precīzi 9 vai x ir bijis vienāds ar 10");
  case 10:
        console.log("vai nu x ir precīzi 10 vai x ir bijis vienāds ar 10");
    case 11:
        console.log("vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10");
}
VM774:5 vai nu x ir precīzi 10 vai x ir bijis vienāds ar 10
VM774:7 vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10
undefined
switch(x) {
    case 9:
        console.log("vai nu x ir precīzi 9 vai x ir bijis vienāds ar 10");
  case 10:
        console.log("vai nu x ir precīzi 10 vai x ir bijis vienāds ar 10");
    case 11:
        console.log("vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10");
    default:
        console.log("vdefault gadījums");
}
VM940:5 vai nu x ir precīzi 10 vai x ir bijis vienāds ar 10
VM940:7 vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10
VM940:9 vdefault gadījums
undefined
