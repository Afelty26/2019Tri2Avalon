init();

function init(){
    for(var r=0; r<10; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    /*TweenMax.to("#car1",2,{x:520,ease:Sine.easeOut});
        TweenMax.to("#car1",.5,{rotation:-90,delay:1.2,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:490, y:-300,delay:1.7, ease:Sine.easeOut});
         TweenMax.to("#car1",.5,{rotation:-180,delay:2.2,ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-90, y:-300,delay:3, ease:Sine.easeOut});
        TweenMax.to("#car1",.5,{rotation:-270,delay:4.2,ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-90, y:-0,delay:5, ease:Sine.easeOut});
        TweenMax.to("#car1",.5,{rotation:-360,delay:6.2,ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:90,y: 0,delay:7,ease:Sine.easeOut});*/
    
    
    
    TweenMax.to("#car2",2,{x:490,ease:Sine.easeOut});
     TweenMax.to("#car2",.8,{rotation:-90,delay:1,ease:Sine.easeOut});
     TweenMax.to("#car2",.5,{x:500, y:-320,delay:1.6, ease:Sine.easeOut});
      TweenMax.to("#car2",1,{rotation:-180,delay:1.8,ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:-100, y:-280,delay:2.2, ease:Sine.easeOut});
    TweenMax.to("#car2",.5,{rotation:-270,delay:3,ease:Sine.easeOut});
     /*TweenMax.to("#car2",2,{x:-85, y:-0,delay:4.7, ease:Sine.easeOut});
     TweenMax.to("#car2",.5,{rotation:-360,delay:5.2,ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:90,y: 0,delay:6.5,ease:Sine.easeOut});*/

}
