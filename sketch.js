var obj1, obj2
function setup(){

    createCanvas(500,500);

    obj1 = createSprite(250,200,130,70);
    obj1.shapeColor = "green"
    obj2 = createSprite(100,100,70,150);
    obj2.shapeColor = "blue"

    obj1.debug = true
    obj2.debug = true

}

function draw(){
    background(0)

    obj2.x = mouseX
    obj2.y = mouseY

    if(obj1.x-obj2.x <= obj1.width/2 + obj2.width/2){
        obj1.shapeColor = "red"
    }else{
        obj1.shapeColor = "green"
    }

    drawSprites();

}