const num1 = parseFloat(prompt('Enter no1: '));
const num2 = parseFloat(prompt('Enter no2: '));

const operator = prompt('Enter operator(+,-,*,/');

let result;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Refresh page and try again')
}else{

    if(operator== '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    alert(num1+ operator + num2 + '=' + result);
}