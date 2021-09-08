var canvas=new fabric.Canvas("myCanvas")
var player_x=10
var player_y=10
var block_width=30
var block_height=30
player_object=""
block_object=""
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img
        
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object)
    })

}
function get_image(image_URL)
{
    fabric.Image.fromURL(image_URL,function(Img){
      block_object=Img
      block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object)
    })
}
get_image("wall.jpg")
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keyPressed=e.keyCode
    console.log(keyPressed)
    if(keyPressed=='37')
    {
        left()
        console.log("left")
    }
    if(keyPressed=='38')
    {
        up()
        console.log("up")
    }
    if(keyPressed=='39')
    {
       right()
        console.log("right")
    }
    if(keyPressed=='40')
    {
        down()
        console.log("down")
    }
    if(keyPressed=='67')
    {
       get_image("cloud.jpg")
        console.log("c")
    }
    if(keyPressed=='68')
    {
       get_image("dark_green.png")
        console.log("d")
    }
    if(keyPressed=='71')
    {
       get_image("ground.png")
        console.log("g")
    }
    if(keyPressed=='76')
    {
       get_image("light_green.png")
        console.log("l")
    }
    if(keyPressed=='82')
    {
       get_image("roof.jpg")
        console.log("r")
    }
    if(keyPressed=='64')
    {
       get_image("trunk.jpg")
        console.log("t")
    }
    if(keyPressed=='85')
    {
       get_image("unique.png")
        console.log("u")
    }
    if(keyPressed=='87')
    {
       get_image("wall.jpg")
        console.log("w")
    }
    if(keyPressed=='89')
    {
       get_image("yellow_wall.png")
        console.log("y")
    }
    if(e.shiftKey == true && keyPressed == 80)
    {
        console.log("p and shift pressed together")
        block_height=block_height+10
        block_width=block_width+10
        document.getElementById("Current_width").innerHTML=block_width
        document.getElementById("Current_height").innerHTML=block_height
    }
    if(e.shiftKey == true && keyPressed == 77)
    {
        console.log("m and shift pressed together")
        block_height=block_height-10
        block_width=block_width-10
        document.getElementById("Current_width").innerHTML=block_width
        document.getElementById("Current_height").innerHTML=block_height
    }
}
function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_width
        canvas.remove(player_object);
        player_update()
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_width
        canvas.remove(player_object);
        player_update()
    }

}
function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_width
        canvas.remove(player_object);
        player_update()
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x = player_x+ block_width
        canvas.remove(player_object);
        player_update()
    }
}