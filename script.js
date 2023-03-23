var buttons=document.getElementsByClassName('small-box');
var display=document.getElementById('display');
display.innerHTML='0';
handleButton = (i) =>{
    console.log(i)
    if (i==0){
        display.innerHTML='0';
        expression=0;
    }
    else if(i==3){
        display.innerHTML+='/';
    }
    else if(i==4){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='7';
        }
        else{
            display.innerHTML+='7'
        }
        
    }
    else if(i==5){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='8';
        }
        else{
            display.innerHTML+='8'
        }
    }
    else if(i==6){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='9';
        }
        else{
            display.innerHTML+='9'
        }
    }
    else if(i==7){
        display.innerHTML+='*';
    }
    else if(i==8){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='4';
        }
        else{
            display.innerHTML+='4'
        }
    }
    else if(i==9){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='5';
        }
        else{
            display.innerHTML+='5'
        }
    }
    else if(i==10){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='6';
        }
        else{
            display.innerHTML+='6'
        }
    }
    else if(i==11){
        display.innerHTML+='-';
    }
    else if(i==12){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='1';
        }
        else{
            display.innerHTML+='1'
        }
    }
    else if(i==13){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='2';
        }
        else{
            display.innerHTML+='2'
        }
    }
    else if(i==14){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='3';
        }
        else{
            display.innerHTML+='3'
        }
    }
    else if(i==15){
        display.innerHTML+='+';
    }
    else if(i==16){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='0';
        }
        else{
            display.innerHTML+='0'
        }
    }
    else if(i==17){
        var temp=parseInt(display.innerHTML)
        if (temp<=0){
            display.innerHTML='.';
        }
        else{
            display.innerHTML+='.'
        }
    }
    else if(i==18){
        var temp=display.innerHTML.length
        if (temp<=1){
            display.innerHTML='0';
        }
        else{
            display.innerHTML=display.innerHTML.slice(0,temp-1)
        }
    }
    else if(i==19){
        try{
            display.innerHTML=eval(display.innerHTML);
        }
        catch(err){
            display.innerHTML='Error';
            setTimeout(()=>{
                display.innerHTML='0';
            },2000);
        }

    }

}
for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        handleButton(i);
    });
}
