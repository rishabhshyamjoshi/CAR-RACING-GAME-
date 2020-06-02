class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      //this.tilte1 = createElement('h2');
      this.try = createElement('h2');
      this.boost = createButton('boost');
      this.reset = createButton('Reset');

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.try.hide();


    }
  display(){
    
      this.title.html(" CAR RACING GAME");

      this.title.position(displayWidth/2.23 - 70, 100);
      this.try.html("enter name to start");
     this.try.position(displayWidth/2.2 - 70,170);
           
      this.input.position(displayWidth/2.2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2.6 + 40, displayHeight/2);
      this.reset.position(displayWidth-660,384);
      this.boost.position(displayWidth/2.3 + 40, displayHeight/2);
      text.visibibily = 0;

this.button.mousePressed(()=>{
  background(mouseX,mouseY,255);
     this.input.hide();
        this.button.hide();
        this.try.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello : " + player.name)
        this.greeting.position(displayWidth/2.2 - 70, displayHeight/20);
        this.reset.position(displayWidth-160,50);
        this.boost.position(1250,20);

      });

      this.boost.mousePressed(()=>{
        player.distance +=18;
        player.update();
          });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });

      if(player.distance > 3600){
        gameState = 2;
      
    
      
      }
    }

    
  }
  