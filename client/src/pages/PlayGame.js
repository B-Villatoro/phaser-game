import { Component } from "react";
import LoadScene from "../components/scenes/loading.js"
import Game from "../components/scenes/game.js";
import Menu from "../components/scenes/menu.js";
import Phaser from "phaser";
import { World } from "phaser/src/physics/matter-js/CustomMain";

class PlayGame extends Component {

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'matter',
        matter:{
          debug: true          
        }
        // default:'arcade',
        // arcade: {
        //   debug: true,
        //   gravity: { y: 200 }
        // }
      },
      scene: [
        LoadScene,Game,Menu
      ]

    };

    this.game = new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  preload() {

  }

  create() {
  new World(Game)
  }

  update() {}

  render() {
    return (null)
  }

}
export default PlayGame;