for(var i=0;i<document.querySelectorAll(".value").length;i++){
   document.querySelectorAll(".value")[i].addEventListener("click",function(){
            var text=this.textContent;
            var previous_text=document.querySelector(".operation").textContent;
          
            if(previous_text==="Enter Operations"){
                document.querySelector(".operation").textContent=text;
                
            }
            else{
                document.querySelector(".operation").textContent=previous_text+text;
              
            }
            
            switch (text) {
                case "0":
                    document.getElementById("zero").classList.add("value-animation");
                    break;
                case "1":
                    document.getElementById("one").classList.add("value-animation");
                    break;
                case "2":
                    document.getElementById("two").classList.add("value-animation");
                    break;
                case "3":
                    document.getElementById("three").classList.add("value-animation");
                    break;
                case "4":
                    document.getElementById("four").classList.add("value-animation");
                    break;
                case "5":
                    document.getElementById("five").classList.add("value-animation");
                    break;
                case "6":
                    document.getElementById("six").classList.add("value-animation");
                    break;
                case "7":
                    document.getElementById("seven").classList.add("value-animation");
                    break;
                case "8":
                    document.getElementById("eight").classList.add("value-animation");
                    break;
                case "9":
                    document.getElementById("nine").classList.add("value-animation");
                    break;
                case ".":
                    document.getElementById("point").classList.add("value-animation");
                    break;
                case "e":
                    document.getElementById("e").classList.add("value-animation");
                    break;
                case "π":
                    document.getElementById("pi").classList.add("value-animation");
                    break;
            }

            var temp=null;
            for (var i=0;i<document.querySelectorAll(".value").length;i++){
                if(document.querySelectorAll(".value")[i].textContent===text){
                    temp=document.querySelectorAll(".value")[i];
                }
            }


             setTimeout(function() {
          
               temp.classList.remove("value-animation");
            }, 200);
    });
}
//Value arrayini doldurma
var valueArray=[];
function fillValueArray(valueArray){
for (var i=0;i<document.querySelectorAll(".value").length;i++){
        valueArray.push(document.querySelectorAll(".value")[i].innerHTML);
}
}
fillValueArray(valueArray);

addValueKeyboardInput();
//Classı Value olan değerlere keyboard ile oluşturma
function addValueKeyboardInput() {
    document.addEventListener("keydown", function(event) {
        var pressedKey = event.key;
        if (valueArray.includes(pressedKey)) {
            var previous_text = document.querySelector(".operation").innerHTML;
            if (previous_text === "Enter Operations") {
                document.querySelector(".operation").innerHTML = pressedKey;
            } else {
                document.querySelector(".operation").innerHTML += pressedKey;
            }

            var temp = null;
            for (var i = 0; i < document.querySelectorAll(".value").length; i++) {
                if (document.querySelectorAll(".value")[i].innerHTML === pressedKey) {
                    temp = document.querySelectorAll(".value")[i];
                }
            }
    
            switch (pressedKey) {
                case "0":
                    document.getElementById("zero").classList.add("value-animation");
                    break;
                case "1":
                    document.getElementById("one").classList.add("value-animation");
                    break;
                case "2":
                    document.getElementById("two").classList.add("value-animation");
                    break;
                case "3":
                    document.getElementById("three").classList.add("value-animation");
                    break;
                case "4":
                    document.getElementById("four").classList.add("value-animation");
                    break;
                case "5":
                    document.getElementById("five").classList.add("value-animation");
                    break;
                case "6":
                    document.getElementById("six").classList.add("value-animation");
                    break;
                case "7":
                    document.getElementById("seven").classList.add("value-animation");
                    break;
                case "8":
                    document.getElementById("eight").classList.add("value-animation");
                    break;
                case "9":
                    document.getElementById("nine").classList.add("value-animation");
                    break;
                case ".":
                    document.getElementById("point").classList.add("value-animation");
                    break;
                case "e":
                    document.getElementById("e").classList.add("value-animation");
                    break;
                case "π":
                    document.getElementById("pi").classList.add("value-animation");
                    break;
            }
    
            setTimeout(function() {
              
                   temp.classList.remove("value-animation");
                
            }, 200);
        }
        else if (opArray.includes(pressedKey)){
            displayOperationOnScreen(pressedKey);
            var element=opArray.find(op => op===pressedKey);
            var temp=null;

            for(var i=0;i<document.querySelectorAll(".op").length;i++){
                if(document.querySelectorAll(".op")[i].textContent===element && element!=="="){
                   temp= document.querySelectorAll(".op")[i];
                }
            }
            if(temp!==null){
                temp.classList.add("op-animation");
                setTimeout(function(){
                    temp.classList.remove("op-animation");
                },200);
            }
        }
        else if (pressedKey==="Enter"){
            displayOperationOnScreen("Enter");
        }
        else if (pressedKey==="Backspace"){
            displayOperationOnScreen("Backspace");
        }


       
    });
}
for (var i=0;i<document.querySelectorAll(".op").length;i++){
    document.querySelectorAll(".op")[i].addEventListener("click",function(){
        this.classList.add("op-animation");
        var symbol=this.textContent;
        var temp=null;
        displayOperationOnScreen(symbol);
        for (var i=0;i<document.querySelectorAll(".op").length;i++){
            if(document.querySelectorAll(".op")[i].textContent===symbol){
                temp=document.querySelectorAll(".op")[i];
            }
        }
        setTimeout(function(){
            temp.classList.remove("op-animation");
        },200);
    });

}

 var opArray=["^"];
 function fillOpArray(OpArray){
    for(var i=0;i<document.querySelectorAll(".op").length;i++){
        OpArray.push(document.querySelectorAll(".op")[i].textContent);
    }
 }
 fillOpArray(opArray);
 function displayOperationOnScreen(char){
    if(opArray.includes(char) || char ==="Enter" || char==="Backspace"){
        if(char!=="=" && char !=="CE" && char!=="⌫" && char!=="Enter" && char!=="Backspace"){
            switch(char){
                case "n!":
                    char="!";
                    break;
                case "x^3":
                    char="^3";
                    break;
                case "1/x":
                    char="1/";
                    break;
                case "mod":
                    char ="%";
                    break;
                case  "e^x":
                    char ="e^";
                    break;
                
                case  "exp":
                    char ="e^";
                    break;
                case "√x":
                    char ="√";
                    break;
                case "x^y":
                    char ="^";
                    break;
                case "10^x":
                    char ="10^";
                    break;
                case "|x|":
                    var numeric=document.querySelector(".operation").textContent.slice(0,document.querySelector(".operation").textContent.length);
                    if(numeric==="Enter Operations"){
                      char ="|"+0+"|";
                    }
                    else{
                    char ="|"+numeric+"|";
                    }
                    document.querySelector(".operation").textContent=document.querySelector(".operation").textContent.slice(numeric.length);
                    break;
                case "⌈x⌉":
                    var numeric=document.querySelector(".operation").textContent.slice(0,document.querySelector(".operation").textContent.length);
                    if(numeric==="Enter Operations"){
                        char ="⌈"+0+"⌉";
                    }
                    else{
                    char ="⌈"+numeric+"⌉";
                    }
                    document.querySelector(".operation").textContent=document.querySelector(".operation").textContent.slice(numeric.length);
                    break;
                case "⌊x⌋":
                    var numeric=document.querySelector(".operation").textContent.slice(0,document.querySelector(".operation").textContent.length);
                    if(numeric==="Enter Operations"){
                        char ="⌊"+0+"⌋";
                    }
                    else{
                    char ="⌊"+numeric+"⌋";
                    }
                    document.querySelector(".operation").textContent=document.querySelector(".operation").textContent.slice(numeric.length);
                    break;
                    
               
            }
            if(document.querySelector(".operation").textContent==="Enter Operations"){
                document.querySelector(".operation").textContent=char;
            }
            else{
                document.querySelector(".operation").textContent+=char;
            }
        }
        else{
            if (char ==="CE") {
                document.querySelector(".operation").textContent="Enter Operations";
                document.querySelector(".result").textContent="Result Section";
            }
            else if(char ==="⌫" || char ==="Backspace"){
                if(document.querySelector(".operation").textContent!=="Enter Operations"){
                    document.querySelector(".operation").textContent=document.querySelector(".operation").textContent.slice(0,document.querySelector(".operation").textContent.length-1);
                    if(document.querySelector(".operation").textContent.length===0){
                        document.querySelector(".operation").textContent="Enter Operations";
                    }
                }
                
            }
            else{
                calculate();
            }
        }
    }
 }
 
 function calculate(){
    if(document.querySelector(".operation").textContent!=="Enter Operations"){
        var operand1="";
        var operator="";
        var operand2="";
        for(var i=0;i<document.querySelector(".operation").textContent.length;i++){
                if(isValue(document.querySelector(".operation").textContent[i])){
                    if(operator.length===0){
                        operand1+=document.querySelector(".operation").textContent[i];
                    }
                    else{
                        operand2+=document.querySelector(".operation").textContent[i];
                    }
                }
                else{
                    operator+=document.querySelector(".operation").textContent[i];
                }

               
        }
        console.log(valueArray);
        switch(operand1){
            case "e":
                operand1=2.71;
                break;
            case "π":
                operand1=3.14;
                break;

        }
        switch(operand2){
            case "e":
                operand2=2.71;
                break;
            case "π":
                operand2=3.14;
                break;
        }
        switch(operator){       
            case "+":
                var result=parseFloat(operand1)+parseFloat(operand2);
                document.querySelector(".result").textContent=result;
                break;
            case "-":
                var result=parseFloat(operand1)-parseFloat(operand2);
                document.querySelector(".result").textContent=result;
                break;
            case "*":
                var result=parseFloat(operand1)*parseFloat(operand2);
                document.querySelector(".result").textContent=result;
                break;
            case "/":     
                var result=parseFloat(operand1)/parseFloat(operand2);
                document.querySelector(".result").textContent=result;
                break;
            case "!":
                if (Number.isInteger(parseInt(operand1))){
                    var result=1;
                    for(var i=1;i<=operand1;i++){
                            result*=i;
                    }
                    document.querySelector(".result").textContent=result;
                }
                else{document.querySelector(".result").textContent="Invalid Input"}
                break;
            case "^":
                var result=Math.pow(parseFloat(operand1),parseFloat(operand2));
                document.querySelector(".result").textContent=result;
                break;
            case "%":
                var result=parseFloat(operand1)%parseFloat(operand2);
                document.querySelector(".result").textContent=result;
                break;

            case "√":
                var result=Math.pow(parseFloat(operand2),0.5);
                document.querySelector(".result").textContent=result;
                break;
            
            case "∑":
                if(parseFloat(operand1)>parseFloat(operand2)){
                    document.querySelector(".result").textContent="Invalid Bound";
                }
                else{
                   
                    var sum=0;
                    for  (var i=parseInt(operand1);i<=parseInt(operand2);i++){
                            sum+=i;
                    }
                    document.querySelector(".result").textContent=sum;
                }
                break;
            case "log":
                var result=Math.log10(parseFloat(operand2));
                document.querySelector(".result").textContent=result;
                break;
            case "ln":
                var result=Math.log(parseFloat(operand2));
                document.querySelector(".result").textContent=result;
                break;
            case "||":
                var start=document.querySelector(".operation").textContent.indexOf("|")+1;
                var finish=document.querySelector(".operation").textContent.lastIndexOf("|");
                
                
                if(start>finish || start===finish){
                    document.querySelector(".result").textContent="Enter Valid Number";
                }
                else{
                    switch(document.querySelector(".operation").textContent.slice(start,finish)){
                        case "e":
                            document.querySelector(".result").textContent=2.71;
                            break;
                        case "π":
                            document.querySelector(".result").textContent=3.14;
                            break;
                        default:
                            document.querySelector(".result").textContent=parseFloat(document.querySelector(".operation").textContent.slice(start,finish));
                            break;
                        }
                }
                break;
            case "|-|":
                var start=document.querySelector(".operation").textContent.indexOf("-")+1;
                var finish=document.querySelector(".operation").textContent.lastIndexOf("|");
                if(start>finish || start===finish){
                    document.querySelector(".result").textContent="Enter Valid Number";
                }
                else{
                    switch(document.querySelector(".operation").textContent.slice(start,finish)){
                        case "e":
                            document.querySelector(".result").textContent=2.71;
                            break;
                        case "π":
                            document.querySelector(".result").textContent=3.14;
                            break;
                        default:
                            document.querySelector(".result").textContent=parseFloat(document.querySelector(".operation").textContent.slice(start,finish));
                            break;
                        }
                    
                }
                break;
                case "⌈⌉":
                    var start=document.querySelector(".operation").textContent.indexOf("⌈")+1;
                    var finish=document.querySelector(".operation").textContent.lastIndexOf("⌉");
                    if(start>finish || start===finish){
                        document.querySelector(".result").textContent="Enter Valid Number";
                    }
                    else{
                        if(document.querySelector(".operation").textContent.slice(start,finish)==="e"){
                            document.querySelector(".result").textContent=Math.ceil(2.71);
                        }
                        else if(document.querySelector(".operation").textContent.slice(start,finish)==="π"){
                            document.querySelector(".result").textContent=Math.ceil(3.14);
                        }
                        else{
                        var result=Math.ceil(parseFloat(document.querySelector(".operation").textContent.slice(start,finish)));
                        document.querySelector(".result").textContent=result;
                        }
                    }
                    break;
            
                case "⌈-⌉":
                    var start=document.querySelector(".operation").textContent.indexOf("⌈")+1;
                    var finish=document.querySelector(".operation").textContent.lastIndexOf("⌉");
                    if(start>finish || start===finish){
                         document.querySelector(".result").textContent="Enter Valid Number";
                    }
                    else{
                     
                        if(document.querySelector(".operation").textContent.slice(start,finish)==="-e"){
                            document.querySelector(".result").textContent=Math.ceil(-1*2.71);
                        }
                        else if(document.querySelector(".operation").textContent.slice(start,finish)==="-π"){
                            document.querySelector(".result").textContent=Math.ceil(-1*3.14);
                        }
                        else{
                        var result=Math.ceil(parseFloat(document.querySelector(".operation").textContent.slice(start,finish)));
                        document.querySelector(".result").textContent=result;
                        }
                        
                    }   
                    break;

                case "⌊⌋":
                    var start=document.querySelector(".operation").textContent.indexOf("⌊")+1;
                    var finish=document.querySelector(".operation").textContent.lastIndexOf("⌋");
                    if(start>finish || start===finish){
                        document.querySelector(".result").textContent="Enter Valid Number";
                    }
                    else{
                        if(document.querySelector(".operation").textContent.slice(start,finish)==="e"){
                            document.querySelector(".result").textContent=Math.floor(2.71);
                        }
                        else if(document.querySelector(".operation").textContent.slice(start,finish)==="π"){
                            document.querySelector(".result").textContent=Math.floor(3.14);
                        }
                        else{
                        var result=Math.floor(parseFloat(document.querySelector(".operation").textContent.slice(start,finish)));
                        document.querySelector(".result").textContent=result;
                        }
                    
                    }
                    break;
                case "⌊-⌋":
                    var start=document.querySelector(".operation").textContent.indexOf("⌊")+1;
                    var finish=document.querySelector(".operation").textContent.lastIndexOf("⌋");
                    if(start>finish || start===finish){
                       document.querySelector(".result").textContent="Enter Valid Number";
                    }
                    else{
                        if(document.querySelector(".operation").textContent.slice(start,finish)==="-e"){
                            document.querySelector(".result").textContent=Math.floor(-1*2.71);
                        }
                        else if(document.querySelector(".operation").textContent.slice(start,finish)==="-π"){
                            document.querySelector(".result").textContent=Math.floor(-1*3.14);
                        }
                        else{
                        var result=Math.floor(parseFloat(document.querySelector(".operation").textContent.slice(start,finish)));
                        document.querySelector(".result").textContent=result;
                        }
                        
                    }
                    break;
            
                } 
    }
 }
 function isValue(char){
    for (var i=0;i<valueArray.length;i++){
        if(valueArray.includes(char)) return true;
        return false;
    }
 }
 


    
// işlem önceliğine bak.




    
        
        




