
document.getElementById('display').value = 0;
let ans=0;
let currentOperator='';
let displayValue=''
function calcdisp(e) {
    const value =e.target.innerText

    if(value ==='C'){
        ans=0
        displayValue='';
        currentOperator='';
        document.getElementById('opedisplay').value = currentOperator;
    }
    else if (['+','-','*','/','%'].includes(value)) {
        if(displayValue!==''){
            ans=parseFloat(displayValue);
            displayValue='';
            currentOperator=value;
            document.getElementById('opedisplay').value = currentOperator;
        }
    }
    else if (value==='=') {
        if(currentOperator && displayValue!==''){
            switch(currentOperator) {
                case '+':
                    ans+=parseFloat(displayValue);
                    break;
                case '-':
                    ans-=parseFloat(displayValue);
                    break;
                case '*':
                    ans*=parseFloat(displayValue);
                    break;
                case '/':
                    ans/=parseFloat(displayValue);
                    break;
                case '%':
                    ans%=parseFloat(displayValue);
                    break;
        }
        displayValue=ans.toString();
        currentOperator='';
        document.getElementById('opedisplay').value = currentOperator;
    }
}
    else{
        displayValue+=value
    }
    

    document.getElementById('display').value = displayValue || ans;
}


document.querySelectorAll('.key').forEach(button =>{
    button.addEventListener('click',calcdisp);
});
