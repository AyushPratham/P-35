class food{
    constructor(){
        this.image = loadImage("images/Milk.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 600,220,70,70);
        var x = 80;
        var y = 100;
        if(foodS !== 0){
            for(var i = 0; i < foodS; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50; 
                }
                image(this.image, x, y, 50,50)
                x = x + 30;
            }
        }
        
        
    }
}