import 'babylonjs-loaders';
// import { Game } from './game';
// import { First as Game} from './babylon101/first'
import { BasicElem as Game} from './babylon101/basicElem'
// import CANNON from 'cannon';
// import * as CANNON from 'cannon'

window.addEventListener('DOMContentLoaded', () => {
  // Set global variable for cannonjs physics engine
  let game = new Game('renderCanvas');
  game.createScene();
  game.animate();
});
