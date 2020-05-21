(function () {
    'use strict';

    var global = window;

    var BasicElem = /** @class */ (function () {
        function BasicElem(canvasElementID) {
            this._canvas = document.getElementById(canvasElementID);
            this._engine = new BABYLON.Engine(this._canvas, true);
        }
        BasicElem.prototype.createScene = function () {
            this._scene = new BABYLON.Scene(this._engine);
            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 2, BABYLON.Vector3.Zero(), this._scene);
            this._camera.attachControl(this._canvas, true);
            this._light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, -1, 0), this._scene);
            // this._light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 2, -1), this._scene);
            var scene = this._scene;
            var mybox = BABYLON.MeshBuilder.CreateBox("myBox", { height: 5, width: 2, depth: 0.5 }, scene);
            var mySphere = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 2, diameterX: 3 }, scene);
            var myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", { width: 5, height: 2, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
            var sourcePlane = new BABYLON.Plane(0, -1, 1, 0); // a logic plane
            sourcePlane.normalize();
            var plane = BABYLON.MeshBuilder.CreatePlane("plane", { height: 2, width: 3, sourcePlane: sourcePlane, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
            var myGround = BABYLON.MeshBuilder.CreateGround("myGround", { width: 6, height: 4, subdivisions: 4 }, scene);
        };
        BasicElem.prototype.animate = function () {
            var _this = this;
            // run the render loop
            this._engine.runRenderLoop(function () {
                _this._scene.render();
            });
            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                _this._engine.resize();
            });
        };
        return BasicElem;
    }());

    // import CANNON from 'cannon';
    // import * as CANNON from 'cannon'
    window.addEventListener('DOMContentLoaded', function () {
        // Set global variable for cannonjs physics engine
        var game = new BasicElem('renderCanvas');
        game.createScene();
        game.animate();
    });

}());
//# sourceMappingURL=game.js.map
