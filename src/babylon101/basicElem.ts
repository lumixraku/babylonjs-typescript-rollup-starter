export { BasicElem }


class BasicElem {

    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.ArcRotateCamera;
    private _light1: BABYLON.Light;
    private _light2: BABYLON.Light;
    private _sphere: BABYLON.Mesh

    constructor(canvasElementID: string) {
        this._canvas = <HTMLCanvasElement>document.getElementById(canvasElementID);
        this._engine = new BABYLON.Engine(this._canvas, true);

    }

    createScene(): void {
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 2, BABYLON.Vector3.Zero(), this._scene);
        this._camera.attachControl(this._canvas, true);

        this._light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, -1, 0), this._scene);
        // this._light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 2, -1), this._scene);
        let scene = this._scene
        let mybox = BABYLON.MeshBuilder.CreateBox("myBox", { height: 5, width: 2, depth: 0.5 }, scene);
        let mySphere = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 2, diameterX: 3 }, scene);
        
        let myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", { width: 5, height: 2, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
        let sourcePlane = new BABYLON.Plane(0, -1, 1, 0);  // a logic plane
        sourcePlane.normalize();
        var plane = BABYLON.MeshBuilder.CreatePlane("plane", { height: 2, width: 3, sourcePlane: sourcePlane, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);

        let myGround = BABYLON.MeshBuilder.CreateGround("myGround", { width: 6, height: 4, subdivisions: 4 }, scene);
    }

    animate(): void {
        // run the render loop
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }
}