import { Component } from "react";
import LoadScene from "../scenes/LoadScene"
import Game from "../scenes/Game";
import Menu from "../scenes/Menu";
import Pause from "../scenes/Pause";
import Hud from "../scenes/Hud";
import Phaser from "phaser";
import { World } from "phaser/src/physics/matter-js/CustomMain";

class SpaceGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      physics: {
        default: 'matter',
        matter:{
          debug: true          
        }
      },
      scale: {
        // mode: Phaser.Scale.CENTER_BOTH,
        // parent: "display-region",
        width: 800,
        height: 600
    },
      scene: [
        LoadScene,Game,Menu,Pause,Hud
      ]

    };

    this.game = new Phaser.Game(config);
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  componentWillUnmount() {
    let score = 50
    console.log(this.fired);
    let data = { score: score, fired: this.fired }
    this.props.updateScores(data);
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
export default SpaceGame;