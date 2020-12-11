class Game {

    private menu: Menu;
    private gameController: GameController;
    private isGameRunning: Boolean;

    constructor(){
        this.menu = new Menu();
        this.gameController = new GameController();
        this.isGameRunning = false;
    }
    public update(){}
    public draw(){}
}

class Menu {

    constructor(){}
    public update(){
        if(this.isGameRunning) {
            this.gameController.draw();
        } else {
            this.menu.draw();
        }
    }
    public draw(){}
}

class GameController {

    constructor(){}
    public update(){}
    public draw(){}
}