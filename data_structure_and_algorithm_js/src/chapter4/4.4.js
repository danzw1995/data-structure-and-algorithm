let Stack = require('./stack')


/**
 * 1．栈可以用来判断一个算术表达式中的括号是否匹配。
 * 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。
 * 下面是一个括号不匹配的算术表达式的例子：2.3+23/12+（3.14159×0.24。
 */

function getPos (expression) {
  let stack = new Stack();
  let rightParenList = [];
  expression.split('').forEach(w => {
    stack.push(w);
  });
  while (stack.length()) {
    let w = stack.pop();
    if (w == ')') {
      rightParenList.push(stack.length());
    } else if (w == '(') {
      if (!rightParenList.length) {
        return stack.length();
      } else {
        rightParenList.pop();
      }
    }
  }
  return rightParenList.pop();
}

console.log(getPos('2.3+23/12+(3.14159×0.24'));
console.log(getPos('2+3*6)'));
console.log(getPos('2*(3 + (4)'));


/**
 * 2．一个算术表达式的后缀表达式形式如下：
 * op1 op2 operator
 * 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，
 * 设计并实现一个JavaScript函数，
 * 该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
 */
 function evalute (expression) {
   let opStack = new Stack();
   let operatorStack = new Stack();
   let suffixExpression = '';
   expression.split('').forEach(w => {
     if (/\w/.test(w)) {
      opStack.push(w)
     } else {
      operatorStack.push(w)
     }
   });
   while (operatorStack.length()) {
     let operator = operatorStack.pop();
     let op2 = opStack.pop();
     let op1 = opStack.pop();
     suffixExpression += op1 + '' +  op2 + operator;
   }
   let [op1, op2, operator] = suffixExpression.split('');
   let result;
   switch (operator) {
     case '+':
       result = Number(op1) + Number(op2);
       break;
     case '-':
       result = op1 - op2;
       break;
     case '*':
       result = op1 * op2;
       break;
     case '-':
       result =  op1 / op2;
       break;
   }
   return result;
 }
 evalute('3+2');



 /**
  * 3．现实生活中栈的一个例子是佩兹糖果盒。
  * 想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，
  * 但是你不喜欢黄色的糖果。
  * 使用栈（有可能用到多个栈）写一段程序，
  * 在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。
  */

  function moveOut (sugars) {
    let stack = new Stack();
    let sugars1 = new Stack();
    let sugars2 = new Stack();
    while (sugars.length) {
      stack.push(sugars.shift());
    }

    while (stack.length()) {
      let temp = stack.pop();
      if (temp !== 'yellow') {
        sugars1.push(temp);
      }
    }

    while (sugars1.length()) {
      sugars2.push(sugars1.pop());
    }
    return sugars2.toString();
  }
  
  moveOut(['red', 'red', 'yellow', 'white', 'white', 'yellow', 'red'])