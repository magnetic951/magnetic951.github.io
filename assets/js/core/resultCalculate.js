
var inputT = GetURLParameter('inputT');
var type = GetURLParameter('type');

var yccArray = [];
var inputArray = Array.from(inputT);
var inputLength = inputArray.length;
var oldccArray = [];
var ccArray = [];
var qwArray = [];

    
var ageArray = ["13","18","23","28","33","38","43","48","53","58","63","68","73","78","83","88","93","98","103"];

var countArray = [
        {cc : "生气" , count: 0},
        {cc : "天医" , count: 0},
        {cc : "延年" , count: 0},
        {cc : "伏位" , count: 0},
        {cc : "绝命" , count: 0},
        {cc : "祸害" , count: 0},
        {cc : "六煞" , count: 0},
        {cc : "五鬼" , count: 0}
    ];

function runMain(){
    document.getElementById("userInput").innerHTML = inputArray;
    if( type == "ic"){
        calculateIC();
    }else{
        calculateOther();
    }
}
    
// other
function calculateOther(){
    document.getElementById("ccImage").setAttribute("src","./assets/img/CC/loop.gif");
    
// First / Last = 5
    if (inputArray[0] == 5){
        inputArray[0] = 0;
    }
    if (inputArray[inputLength-1] == 5){
        inputArray[inputLength-1] = 0;
    }
    // alphabet to number
    alphabet();
    
    check15951();// Function to check 159 951 = > 1919 / 9191
    var loop;
    for(loop = 0; loop < inputLength;loop++){
        yccArray[loop] = "";
    }
    
    getCCO();
    checkFW();
    writeTO();
    checkQW();
    countCC();
    writeST(); 
} 
    //alphabet to number
function alphabet(){
    var i;
    for(i=0;i<inputLength;i++){
        if(inputArray[i] == "a" || inputArray[i] == "A" ){
            inputArray.splice(i,1,0,1);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "b" || inputArray[i] == "B" ){
            inputArray.splice(i,1,0,2);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "c" || inputArray[i] == "C" ){
            inputArray.splice(i,1,0,3);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "d" || inputArray[i] == "D" ){
            inputArray.splice(i,1,0,4);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "e" || inputArray[i] == "E" ){
            inputArray.splice(i,1,0,5);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "f" || inputArray[i] == "F" ){
            inputArray.splice(i,1,0,6);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "g" || inputArray[i] == "G" ){
            inputArray.splice(i,1,0,7);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "h" || inputArray[i] == "H" ){
            inputArray.splice(i,1,0,8);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "i" || inputArray[i] == "I" ){
            inputArray.splice(i,1,0,9);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "j" || inputArray[i] == "J" ){
            inputArray.splice(i,1,1,0);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "k" || inputArray[i] == "K" ){
            inputArray.splice(i,1,1,1);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "l" || inputArray[i] == "L" ){
            inputArray.splice(i,1,1,2);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "m" || inputArray[i] == "M" ){
            inputArray.splice(i,1,1,3);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "n" || inputArray[i] == "N" ){
            inputArray.splice(i,1,1,4);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "o" || inputArray[i] == "O" ){
            inputArray.splice(i,1,1,5);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "p" || inputArray[i] == "P" ){
            inputArray.splice(i,1,1,6);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "q" || inputArray[i] == "Q" ){
            inputArray.splice(i,1,1,7);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "r" || inputArray[i] == "R" ){
            inputArray.splice(i,1,1,8);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "s" || inputArray[i] == "S" ){
            inputArray.splice(i,1,1,9);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "t" || inputArray[i] == "T" ){
            inputArray.splice(i,1,2,0);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "u" || inputArray[i] == "U" ){
            inputArray.splice(i,1,2,1);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "v" || inputArray[i] == "V" ){
            inputArray.splice(i,1,2,2);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "w" || inputArray[i] == "W" ){
            inputArray.splice(i,1,2,3);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "x" || inputArray[i] == "X" ){
            inputArray.splice(i,1,2,4);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "y" || inputArray[i] == "Y" ){
            inputArray.splice(i,1,2,5);
            inputLength += 1;
            alphabet();
        }
        if(inputArray[i] == "z" || inputArray[i] == "Z" ){
            inputArray.splice(i,1,2,6);
            inputLength += 1;
            alphabet();
        }
    }
}    

   // write for other 
function writeTO(){
    var inputW = 100 / inputLength;
        var space = inputW/2;
        var tableW = 100 - inputW;
        
        // Input
        var a;
        for(a=0; a<inputLength;a++){
            var d = document.createElement("TH");
            
            if(inputArray[a] == 5){
                d.setAttribute("style","width:"+ inputW + "%; color: red;border: 1px solid #dddddd;");
            }else{
                d.setAttribute("style","width:"+ inputW + "%; border: 1px solid #dddddd;");
            }
            
            d.appendChild(document.createTextNode(inputArray[a]));
            document.getElementById("inputR").appendChild(d);  
        }
            
        // fuwei + cc
        var rowO = document.getElementById("oldccR");
        var rowC = document.getElementById("ccR");
        var cO = rowO.insertCell(0);
        var cC = rowC.insertCell(0);
        cO.innerHTML = ("");
        cC.innerHTML = ("");
    
        var b;
        for (b=0; b<inputLength-1;b++){
            
            var dO = document.createElement("TH");   
            var dC = document.createElement("TH");
                
            dO.setAttribute("style","width:"+ inputW + "%;")
            dC.setAttribute("style","width:"+ inputW + "%;")
                
            dO.appendChild(document.createTextNode(oldccArray[b])); 
            dC.appendChild(document.createTextNode(ccArray[b])); 
                
            document.getElementById("oldccR").appendChild(dO);
            document.getElementById("ccR").appendChild(dC);
        }
    
        var cbO = rowO.insertCell(inputLength);
        var cbC = rowC.insertCell(inputLength);
        cbO.innerHTML = ("");
        cbC.innerHTML = ("");
}
    
// Function to check 易经磁场
function getCCO(){
        var i;
        for(i=0; i<inputLength-1; i++){
            if(inputArray[i] !== 5 && inputArray[i+1] !==5){
                ccArray[i] = ccTable(inputArray[i],inputArray[i+1])
            }
            if(inputArray[i+1] == 5){
                ccArray[i] = "";
            }
            if(inputArray[i] == 5 && inputArray[i+1] !== 5){
                if(inputArray[i-1] ==5){
                        ccArray[i] = ccTable(inputArray[i-2],inputArray[i+1])
                }else{
                    ccArray[i] = ccTable(inputArray[i-1],inputArray[i+1])
                }
            }   
        }
} 
    
    
// If type == ic
function calculateIC(){
    // First / Last = 5
    if (inputArray[0] == 5){
        inputArray[0] = 0;
    }
    if (inputArray[inputLength-1] == 5){
        inputArray[inputLength-1] = 0;
    }
    
    check15951();// Function to check 159 951 = > 1919 / 9191
    
        
    var loop;
    for(loop = 0; loop < inputLength;loop++){
        yccArray[loop] = "";
    }
    
    getCC(); // Function to check 易经磁场
    checkYCC(); // 隐藏磁场
    checkFW();// Function to check 伏位
    writeT();
    checkQW();
    countCC();
    checkPicture();
    writeST(); 
    
}
    
function checkQW(){
    var i;
    for(i = 0; i<inputLength; i++){
        if(inputArray[i] == 6 && inputArray[i+1] == 1){
            if(inputArray[i+2] == 0){
                qwArray.push("610");
            }
            if(inputArray[i+2] == 1){
                qwArray.push("611");
            }
            if(inputArray[i+2] == 5){
                qwArray.push("615");
            }
            if(inputArray[i+2] == 6){
                qwArray.push("616");
            }
        }
        if(inputArray[i] == 1 && inputArray[i+1] == 6){
            if(inputArray[i+2] == 0){
                qwArray.push("160");
            }
            if(inputArray[i+2] == 1){
                qwArray.push("161");
            }
            if(inputArray[i+2] == 5){
                qwArray.push("165");
            }
            if(inputArray[i+2] == 6){
                qwArray.push("166");
            }
        }
    }
    var widthH = 100/ qwArray.length;
    
    //write
    if(qwArray.length !== 0){
            document.getElementById("qwp").innerHTML = "千王系列";
            var rowQ = document.getElementById("qwR");
            var l;
            for(l=0; l< qwArray.length; l++){
                var a = document.createElement("TH");
                a.setAttribute("style","width: "+ widthH +"%;border: 1px solid #dddddd;");
                a.appendChild(document.createTextNode(qwArray[l]));
                rowQ.appendChild(a);
            } 
    }
}
  
//picture
function checkPicture(){
    var imgCC = "";
        if(countArray[0].cc== "生气"){
            imgCC = "SQ";
        }
        if(countArray[0].cc== "天医"){
            imgCC = "TY";
        }
        if(countArray[0].cc== "延年"){
            imgCC = "YN";
        }
        if(countArray[0].cc== "伏位"){
            imgCC = "FW";
        }
        if(countArray[0].cc== "绝命"){
            imgCC = "JM";
        }
        if(countArray[0].cc== "祸害"){
            imgCC = "HH";
        }
        if(countArray[0].cc== "六煞"){
            imgCC = "LS";
        }
        if(countArray[0].cc== "五鬼"){
            imgCC = "WG";
        }
    
    document.getElementById("ccImage").setAttribute("src","./assets/img/CC/"+ imgCC + ".jpg");
}

// Compare
function compare(a,b){
    if ( a.count < b.count ){
        return 1;
    } 
    if ( a.count > b.count ){
        return -1;
    }
    return 0;
}
    
// Function to count every cc
function countCC(){

    var i;
    for(i=0;i<inputLength-1;i++){
        if(ccArray[i] == "生"){
            
            countArray[searchCC("生气")].count +=1;
        }
        if(ccArray[i] == "天"){
            countArray[searchCC("天医")].count +=1;
        }
        if(ccArray[i] == "延"){
            countArray[searchCC("延年")].count +=1;
        }
        if(ccArray[i] == "伏"){
            countArray[searchCC("伏位")].count +=1;
        }
        if(ccArray[i] == "绝"){
            countArray[searchCC("绝命")].count +=1;
        }
        if(ccArray[i] == "害"){
            countArray[searchCC("祸害")].count +=1;
        }
        if(ccArray[i] == "六"){
            countArray[searchCC("六煞")].count +=1;
        }
        if(ccArray[i] == "五"){
            countArray[searchCC("五鬼")].count +=1;
        }
        countArray.sort(compare);
    }   
}
    
function searchCC(key){
    for (var i=0; i < countArray.length; i++) {
        if (countArray[i].cc == key) {
            return i;
        }
    }
    
    
}
    
// Function to write into table
function writeT(){
        var inputW = 100 / inputLength;
        var space = inputW/2;
        var tableW = 100 - inputW;
        

        // ycc
        // Input
        var a;
        for(a=0; a<inputLength;a++){
            var y = document.createElement("TH");
            var d = document.createElement("TH");
            
            y.setAttribute("style","width:"+ inputW + "%;");
            
            if(inputArray[a] == 5){
                d.setAttribute("style","width:"+ inputW + "%; color: red;border: 1px solid #dddddd;");
            }else{
                d.setAttribute("style","width:"+ inputW + "%; border: 1px solid #dddddd;");
            }
            
            y.appendChild(document.createTextNode(yccArray[a]));
            d.appendChild(document.createTextNode(inputArray[a]));
            
            document.getElementById("yccR").appendChild(y); 
            document.getElementById("inputR").appendChild(d);  
        }
            
        // fuwei + cc + age
        var rowO = document.getElementById("oldccR");
        var rowC = document.getElementById("ccR");
        var rowA = document.getElementById("ageR");
        var cO = rowO.insertCell(0);
        var cC = rowC.insertCell(0);
        var cA = rowA.insertCell(0);
        cO.innerHTML = ("");
        cC.innerHTML = ("");
        cA.innerHTML = ("");
    
        var b;
        for (b=0; b<inputLength-1;b++){
            
            var dO = document.createElement("TH");   
            var dC = document.createElement("TH");
            var dA = document.createElement("TD");
                
            dO.setAttribute("style","width:"+ inputW + "%;")
            dC.setAttribute("style","width:"+ inputW + "%;")
            dA.setAttribute("style","width:"+ inputW + "%;")
                
            dO.appendChild(document.createTextNode(oldccArray[b])); 
            dC.appendChild(document.createTextNode(ccArray[b])); 
            dA.appendChild(document.createTextNode(ageArray[b])); 
                
            document.getElementById("oldccR").appendChild(dO);
            document.getElementById("ccR").appendChild(dC);
            document.getElementById("ageR").appendChild(dA);
        }
    
        var cbO = rowO.insertCell(inputLength);
        var cbC = rowC.insertCell(inputLength);
        var cbA = rowA.insertCell(inputLength);
        cbO.innerHTML = ("");
        cbC.innerHTML = ("");
        cbA.innerHTML = ("");
}

//Summary table
function writeST(){
    var rowN = document.getElementById("ccName");
    var rowC = document.getElementById("count");
    
    var z;
        for (z=0; z<8;z++){
            
            var name = document.createElement("TH");   
            var count = document.createElement("TD");
                
            name.setAttribute("style","width: 10%; border: 1px solid #dddddd; background-color: #dddddd;")
            count.setAttribute("style","width: 10%; border: 1px solid #dddddd;")
                
            name.appendChild(document.createTextNode(countArray[z].cc)); 
            count.appendChild(document.createTextNode(countArray[z].count)); 
                
            rowN.appendChild(name);
            rowC.appendChild(count);
        }
}
    
// Function to check 159 951 = > 1919 / 9191
function check15951(){
        var i;
        for(i=0; i<inputLength; i++){
            // ========== 1 + 5 + 9 ========== 
            if (inputArray[i] == 1) {
                if(inputArray[i+1]==5) {
                    if(inputArray[i+2]==5){
                        if(inputArray[i+3]==9){
                        inputArray.splice(i,4,"1","9","1","9");
                        check15951();
                        }
                    }
                    if(inputArray[i+2]==9){
                        inputArray.splice(i,3,"1","9","1","9");
                        inputLength += 1;
                        ageArray.splice(i+1,0,"--");
                        check15951();
                    }
                }      
            }
            // ========== 9 + 5 + 1 ========== 
            if (inputArray[i] == 9) {
                if(inputArray[i+1]==5) {
                    if(inputArray[i+2]==5){
                        if(inputArray[i+3]==1){
                        inputArray.splice(i,4,"9","1","9","1");
                        check15951();
                        }
                    }
                    if(inputArray[i+2]==1){
                        inputArray.splice(i,3,"9","1","9","1");
                        inputLength += 1;
                        ageArray.splice(i+1,0,"--");
                        check15951();
                    }
                }      
            }   
        }
    }

// Function to check 易经磁场
function getCC(){
        var i;
        for(i=0; i<inputLength-1; i++){
            if(inputArray[i] !== 5 && inputArray[i+1] !==5){
                ccArray[i] = ccTable(inputArray[i],inputArray[i+1])
            }
            if(inputArray[i+1] == 5){
                ccArray[i] = "Δ";
            }
            if(inputArray[i] == 5 && inputArray[i+1] !== 5){
                if(inputArray[i-1] ==5){
                        ccArray[i] = ccTable(inputArray[i-2],inputArray[i+1])
                }else{
                    ccArray[i] = ccTable(inputArray[i-1],inputArray[i+1])
                }
            }   
        }
}
    
// Function to check 伏位
function checkFW(){
        var i;
        oldccArray[0] = "";
        for(i=1; i< inputLength-1; i++){
            oldccArray[i] = "";
            if(ccArray[i] == "伏"){
                if(ccArray[i-1] !== "伏" && ccArray[i-1] !== "Δ" ){
                    if(ccArray[i-1] == ""){
                            if(i-2 > 0){
                                if(ccArray[i-2] !== ""){
                                oldccArray[i] = "伏";
                                ccArray[i] = ccArray[i-2];
                                }else{
                                    if(ccArray[i-3] !== ""){
                                        oldccArray[i] = "伏";
                                        ccArray[i] = ccArray[i-3]
                                    }else{
                                        if(ccArray[i-4] !== "伏"){
                                            oldccArray[i] = "伏";
                                            ccArray[i] = ccArray[i-4];
                                        }
                                    }
                                }
                            }
                    }else{
                    oldccArray[i] = "伏";
                    ccArray[i] = ccArray[i-1];
                    }
                }else{
                	if(ccArray[i-1] == "Δ" ){
                    	if( i > 1){
                          if(ccArray[i-2] == "Δ" ){
                              if(ccArray[i-3] !== "伏"){
                                ccArray[i] = ccArray[i-3];
                                oldccArray[i] = "伏";
                              }
                         
                          }	
                          else{
                              if(ccArray[i-2] !== "伏"){
                                ccArray[i] = ccArray[i-2];
                                oldccArray[i] = "伏";
                              }
                          }
                        }
                    	
                	}  
                }
            }
        }
    }

//隐藏CC  
function checkYCC(){
var fLimit = 0;

var i;
    for(i=1; i < inputLength-1; i++){
        var fInput;
        var bInput;
        var skip = 0;
        
        if(inputArray[i] == 0){
        //=========START============
        
            if(inputArray[i-1] == 0 || inputArray[i+1] == 0){
                fInput = 0;
                bInput = 0;
            }else{
//==================Check front==================
            
            if(inputArray[i-1] == 5){
                if(fLimit < i-1){
                    if(inputArray[i-2]==0){
                    fInput = 0;
                    }else if (inputArray[i-2]==5){
                        if(fLimit < i-2){
                            if(inputArray[i-3] == 0 || fLimit >= i-3){
                                fInput = 0;
                            }else{
                                fInput = inputArray[i-3];
                            }
                        }
                    } else{
                        fInput = inputArray[i-2];
                    }
                }
                 
            }else{
                fInput = inputArray[i-1];  
            }
            
//==================Check Back===================
            
            if(inputArray[i+1] == 5){

                if(inputArray[i+2]==0){
                bInput = 0;
                }else if (inputArray[i+2]==5){
                    if(inputArray[i+3] == 0){
                        bInput = 0;
                    }else{
                        bInput = inputArray[i+3];
                        fLimit = i+2;
                        skip = 3;
                    } 
                } else{
                    bInput = inputArray[i+2];
                    fLimit = i+1;
                    skip = 2;
                } 
            }else{
                bInput = inputArray[i+1]; 
                fLimit = i;
                skip = 1;
            }
        
        //==========END=============
        }
        if(fInput !== 0 && bInput !== 0){
            if(fInput !== bInput){
                yccArray[i] = ccTable(fInput,bInput);
            }
        }
        i += skip;
    }
} 
}
    
//Function to check 磁场 
function ccTable(fNo,bNo){
    //伏位
            if(fNo== 0){
               if(bNo== 1){
                    return "伏";
                }
                if(bNo== 2){
                    return "伏";
                }
                if(bNo== 3){
                    return "伏";
                }
                if(bNo== 4){
                    return "伏";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "伏";
                }
                if(bNo== 7){
                    return "伏";
                }
                if(bNo== 8){
                    return "伏";
                }
                if(bNo== 9){
                    return "伏";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            // 1 + ?
            if(fNo== 1){
                if(bNo== 1){
                    return "伏";
                }
                
                if(bNo== 2){
                    return "绝";
                }
                if(bNo== 3){
                    return "天";
                }
                if(bNo== 4){
                    return "生";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "六";
                }
                if(bNo== 7){
                    return "害";
                }
                if(bNo== 8){
                    return "五";
                }
                if(bNo== 9){
                    return "延";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 2 + ?
            if(fNo== 2){
                if(bNo== 1){
                    return "绝";
                }
                if(bNo== 2){
                    return "伏";
                }
                if(bNo== 3){
                    return "害";
                }
                if(bNo== 4){
                    return "五";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "延";
                }
                if(bNo== 7){
                    return "天";
                }
                if(bNo== 8){
                    return "生";
                }
                if(bNo== 9){
                    return "六";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 3 + ?
            if(fNo== 3){
                if(bNo== 1){
                    return "天";
                }
                if(bNo== 2){
                    return "害";
                }
                if(bNo== 3){
                    return "伏";
                }
                if(bNo== 4){
                    return "延";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "五";
                }
                if(bNo== 7){
                    return "绝";
                }
                if(bNo== 8){
                    return "六";
                }
                if(bNo== 9){
                    return "生";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 4 + ?
            if(fNo== 4){
                if(bNo== 1){
                    return "生";
                }
                if(bNo== 2){
                    return "五";
                }
                if(bNo== 3){
                    return "延";
                }
                if(bNo== 4){
                    return "伏";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "害";
                }
                if(bNo== 7){
                    return "六";
                }
                if(bNo== 8){
                    return "绝";
                }
                if(bNo== 9){
                    return "天";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 6 + ?
            if(fNo== 6){
                if(bNo== 1){
                    return "六";
                }
                if(bNo== 2){
                    return "延";
                }
                if(bNo== 3){
                    return "五";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 4){
                    return "害";
                }
                if(bNo== 6){
                    return "伏";
                }
                if(bNo== 7){
                    return "生";
                }
                if(bNo== 8){
                    return "天";
                }
                if(bNo== 9){
                    return "绝";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 7 + ?
            if(fNo== 7){
                if(bNo== 1){
                    return "害";
                }
                if(bNo== 2){
                    return "天";
                }
                if(bNo== 3){
                    return "绝";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "生";
                }
                if(bNo== 7){
                    return "伏";
                }
                if(bNo== 4){
                    return "六";
                }
                if(bNo== 8){
                    return "延";
                }
                if(bNo== 9){
                    return "五";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 8 + ?
            if(fNo== 8){
                if(bNo== 1){
                    return "五";
                }
                if(bNo== 2){
                    return "生";
                }
                if(bNo== 3){
                    return "六";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "天";
                }
                if(bNo== 7){
                    return "延";
                }
                if(bNo== 4){
                    return "绝";
                }
                if(bNo== 8){
                    return "伏";
                }
                if(bNo== 9){
                    return "害";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
            // 9 + ?
            if(fNo== 9){
                if(bNo== 1){
                    return "延";
                }
                if(bNo== 2){
                    return "六";
                }
                if(bNo== 3){
                    return "生";
                }
                if(bNo== 5){
                    return "Δ";
                }
                if(bNo== 6){
                    return "绝";
                }
                if(bNo== 7){
                    return "五";
                }
                if(bNo== 8){
                    return "害";
                }
                if(bNo== 4){
                    return "天";
                }
                if(bNo== 9){
                    return "伏";
                }
                if(bNo== 0){
                    return "伏";
                }
            }
            
}
    
// Get parameter from url
function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
