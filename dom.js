var screenButton = "";

function start(){
    var output = "Web browser name: " + navigator.appName + "\r\n Web browser version: " + 
    navigator.appVersion + "\r\n Operating platform: " + navigator.platform + "\r\n User agent: " +
    navigator.userAgent + "\r\n Cookies Enabled: " + (navigator.cookieEnabled? "True" : "False");

        document.getElementById("navDetails").value = output;
        
        screenButton = document.getElementById("screenButton");

        screenButton.addEventListener("click", screenInfo, false);
        document.getElementById("intervalSetButton").addEventListener("click",intervalSet,false);
        document.getElementById("intervalClearButton").addEventListener("click",intervalClear,false);
        document.getElementById("historyButton").addEventListener("click",browserHistory,false);
}

function screenInfo(){
    var output = "\r\n Screen Height " + screen.availHeight + "px \r\n Screen width: " + screen.availWidth + "px \r\n Color Depth " + 
    screen.colorDepth + "bits per px \r\n Pixel Depth" + screen.pixelDepth + "bits per px"

            document.getElementById("screenTextarea").value = output;
}

function browserHistory(){
    document.getElementById("historyLabel").innerHTML = "Your Browser has " + history.length + " URL(s) worth of history"
}

function intervalSet(){
    intervalSetter = window.setInterval(function(){
        var today = new Date;
        document.getElementById("timeLabel").innerHTML = today.toLocaleTimeString();

        if(document.getElementById("timeLabel").style.color == "red"){
            document.getElementById("timeLabel").style.color = "blue";
            document.getElementById("timeLabel").style.fontFamily = "Monospace";            
        } else {
            (document.getElementById("timeLabel").style.color = "red");
            document.getElementById("timeLabel").style.fontFamily = "Serif"; 
        }
    },1000);
    }
   function intervalClear(){
       window.clearInterval(intervalSetter);
   }
window.addEventListener("load",start,false);