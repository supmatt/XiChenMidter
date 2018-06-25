// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    // let helloLable:createjs.Text;
    var helloLable;
    // let clickMeButton: createjs.Bitmap;
    var clickMeButton;
    function Init() {
        console.log("Initialization Started");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on the button
        createjs.Ticker.framerate = 60; //60FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        // helloLable.rotation += 3;  //second
        stage.update(); //redraws the stage
    }
    // function clickMeButtonMouseOver():void{
    //     clickMeButton.alpha = 0.7;
    // }
    // function clickMeButtonMouseOut():void{
    //     clickMeButton.alpha = 1.0;
    // }
    function clickMeButtonClick() {
        helloLable.text = "Clicked!";
        helloLable.regX = helloLable.getMeasuredWidth() * 0.5;
        helloLable.regY = helloLable.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        // helloLable = new createjs.Text("WHeo0, World", 
        // "40px Consolas", "#000000" );
        helloLable = new objects.Lable("Hello0, World", "40px", "Consolas", "#000000", 320, 240, true);
        // helloLable.regX = helloLable.getMeasuredWidth()  *0.5;
        // helloLable.regY = helloLable.getMeasuredHeight()  *0.5;
        // helloLable.x = 320;
        // helloLable.y = 200;
        stage.addChild(helloLable);
        // clickMeButton = new createjs.Bitmap(
        //     "./Assets/images/clickMeButton.png");
        clickMeButton = new objects.Button("./Assets/images/clickMeButton.png", 320, 340);
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        // clickMeButton.x =320;
        // clickMeButton.y =340;
        stage.addChild(clickMeButton);
        // clickMeButton.on("mouseover", clickMeButtonMouseOver);
        // clickMeButton.on("mouseout", clickMeButtonMouseOut);
        clickMeButton.on("click", clickMeButtonClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map