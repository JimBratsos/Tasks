Change=(boxNum)=>{
    colorChangeSelect(boxNum);
    buttonChoose(boxNum);
    closeButtons(boxNum);
}

colorChangeSelect=(boxNum)=>{

    if((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)==="white"){
        document.getElementById(`ButtonBig${boxNum}`).style.background="lightgray";
    }else{
        document.getElementById(`ButtonBig${boxNum}`).style.background="white";
    }       
}

buttonChoose=(boxNum)=>{
    if ( ((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)==="") || ((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)==="white") ){
        var btn = document.createElement("box");
        btn.setAttribute('style', 'text-align:center; display:block;');
        btn.id = `Button${boxNum}`;

        var txt = document.getElementById(`text${boxNum}`).textContent;
        btn.innerHTML = txt;

        document.getElementById(`ButtonCBX${boxNum}`).checked = true;

        var wrapper = document.getElementById("wrapper");
        wrapper.prepend(btn);
    }else{
        var btnDel = document.getElementById(`Button${boxNum}`);
        
        document.getElementById(`ButtonCBX${boxNum}`).checked = false;
        
        btnDel.remove();
    }
}

closeButtons=(boxNum)=>{
    if ( ((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)==="") || ((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)==="white") ){
        var close = document.createElement("a");
        close.className = "buttonClose";
        close.id = `xbutton${boxNum}`;

        var button = document.getElementById(`Button${boxNum}`);
        button.append(close);

        close.onmouseover = function(){
            document.getElementById(`xbutton${boxNum}`).style.background="white"
            document.getElementById(`xbutton${boxNum}`).style.color="#605F61"
        }

        close.onmouseout = function(){
            document.getElementById(`xbutton${boxNum}`).style.background="#605F61"
            document.getElementById(`xbutton${boxNum}`).style.color="white"
        }

        document.getElementById(`ButtonCBX${boxNum}`).checked = true;
    }

    if(document.getElementById(`xbutton${boxNum}`)){
        document.getElementById(`xbutton${boxNum}`).onclick = function() {
            var btnDel = document.getElementById(`Button${boxNum}`);
            document.getElementById(`ButtonBig${boxNum}`).style.background="#ECECEC";

            document.getElementById(`ButtonCBX${boxNum}`).checked = false;

            btnDel.remove();
        };
    }   
}

colorOnHover=(boxNum)=>{
    if((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)!="white"){
        document.getElementById(`ButtonBig${boxNum}`).style.background="lightgray";
    }
}

colorOutHover=(boxNum)=>{
    if((document.getElementById(`ButtonBig${boxNum}`).style.backgroundColor)!="white"){
        document.getElementById(`ButtonBig${boxNum}`).style.background="#ECECEC";
    }
}