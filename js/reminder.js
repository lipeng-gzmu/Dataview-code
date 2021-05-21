 var index=0;
    var word="请点击信封"
    function type(){
        document.getElementById("aa").innerText = word.substring(0,index++);
        if(index == 6)index=0;
    }
    setInterval(type, 200);