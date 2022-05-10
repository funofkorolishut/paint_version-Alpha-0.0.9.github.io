kvadrats = ["Imgg/kvchr.png","Imgg/kvkr.png","Imgg/kvsin.png","Imgg/kvzel.png","Imgg/kvroz.png","Imgg/kvor.png","Imgg/kvfiol.png"]
var selColor;
var selKletka;
function putKv(){
    switch(selColor){
        case 3:
            selKletka.src=kvadrats[selColor];
            break;
        case 0:
            selKletka.src=kvadrats[selColor];
            break;
        case 1:
            selKletka.src=kvadrats[selColor];
            break;
        case 2:
            selKletka.src=kvadrats[selColor];
            break;
        case 4:
            selKletka.src=kvadrats[selColor];
            break;
        case 5:
            selKletka.src=kvadrats[selColor];
            break;    
    }
}