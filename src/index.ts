import 'babylonjs-loaders';
import { Game } from './game';
// import CANNON from 'cannon';
// import * as CANNON from 'cannon'

window.addEventListener('DOMContentLoaded', () => {
  // Set global variable for cannonjs physics engine
  let game = new Game('renderCanvas');
  game.createScene();
  game.animate();
});
