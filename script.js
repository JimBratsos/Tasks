addButtons=()=>{
    let currencies = ["EUR","PLN","GEL","DKK","CZK","GBP","SEK","USD","RUB"]; // Contains currencies. Putting let so that the values/currencies will not be changed.
    for(let i=0; i<=8; i++){ // for 9 buttons
        
        var btn = document.createElement("div");
        btn.id = `ButtonBig${i}`;
        btn.className = 'ButtonBig';

        btn.addEventListener("click",function(){Change(i)});
        btn.addEventListener("mouseover",function(){colorOnHover(i)});
        btn.addEventListener("mouseout",function(){colorOutHover(i)}); //adding functions/properties to the button

        var wrapper = document.getElementById("wrapper");
        wrapper.append(btn);    //creating a custom button i and appending it to the grid

        var inputcbx = document.createElement("div");
        inputcbx.id = `ButtonCheckbox${i}`;
        inputcbx.className = 'ButtonCheckbox';
        btn.append(inputcbx);   //creating a custom checkbox i and appending it to the button

        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = `ButtonCBX${i}`;
        checkbox.className = 'ButtonCBX';
        inputcbx.append(checkbox);  //creating an input for the checkbox i and appending it to it

        var checkmark = document.createElement("SPAN");
        checkmark.id = `checkmark${i}`;
        checkmark.className = 'checkmark';
        inputcbx.append(checkmark); //creating a custom checkmark for the checkbox i and appending it to it

        var txt = document.createElement("div");
        txt.innerHTML = currencies[i]
        txt.id = `text${i}`;
        txt.className = 'text';
        btn.append(txt);    //creating a text i div and appending it to the button i
        
    }
}

colorOnHover=(boxNum)=>{
    var bigButton = document.getElementById(`ButtonBig${boxNum}`);
    if((bigButton.style.backgroundColor)!="white"){
        bigButton.style.background="lightgray";
    }
} //when user hovers on, change color to the button i

colorOutHover=(boxNum)=>{
    var bigButton = document.getElementById(`ButtonBig${boxNum}`);
    if((bigButton.style.backgroundColor)!="white"){
        bigButton.style.background="#ECECEC";
    }
} //when user hovers out, change color to the button i

Change=(boxNum)=>{
    colorChangeSelect(boxNum);
    buttonChoose(boxNum);
    xButtons(boxNum);
} //function that activates the button's properties on click

colorChangeSelect=(boxNum)=>{
    
    var bigButton = document.getElementById(`ButtonBig${boxNum}`);

    if((bigButton.style.backgroundColor)==="white"){
        bigButton.style.background="#ECECEC";
    }else{
        bigButton.style.background="white";
    }       
} //when button is clicked, it changes its color

buttonChoose=(boxNum)=>{
    
    var checkbox = document.getElementById(`ButtonCBX${boxNum}`);
    var bigButton = document.getElementById(`ButtonBig${boxNum}`);

    if ( (bigButton.style.backgroundColor)==="white" ){
       
        var btn = document.createElement("box");
        btn.setAttribute('style', 'text-align:center; display:block;');
        btn.id = `Button${boxNum}`;
        btn.className = 'Button';

        var txt = document.getElementById(`text${boxNum}`).textContent;
        btn.innerHTML = txt;

        checkbox.checked = true;

        var wrapper = document.getElementById("wrapper");
        wrapper.prepend(btn);

    }else{
        btn = document.getElementById(`Button${boxNum}`);
        checkbox.checked = false;
        btn.remove();
    }
} //when button is clicked, it creates a pseudo-button (unclickable) with the currency of the big button

xButtons=(boxNum)=>{
    
    var bigButton = document.getElementById(`ButtonBig${boxNum}`);
    var checkbox = document.getElementById(`ButtonCBX${boxNum}`);

    if ((bigButton.style.backgroundColor)==="white"){

        var close = document.createElement("a");
        close.className = "buttonClose";
        close.id = `xbutton${boxNum}`;

        var newButton = document.getElementById(`Button${boxNum}`);
        newButton.append(close);

        close.onmouseover = function(){
            close.style.background="white"
            close.style.color="#605F61"
        }

        close.onmouseout = function(){
            close.style.background="#605F61"
            close.style.color="white"
        }

        checkbox.checked = true;
    }

    if(close){
        close.onclick = function() {
            bigButton.style.background="#ECECEC";

            checkbox.checked = false;

            newButton.remove();
        };
    }   
} //when button is clicked, it creates small custom x buttons, which change color on/out hover 
//and when clicked they delete the new buttons that were created before
