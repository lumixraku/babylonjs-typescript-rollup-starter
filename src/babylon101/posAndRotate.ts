export { PosAndRotate as Game }


class PosAndRotate {

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
        this._camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this._scene);
        this._camera.attachControl(this._canvas, true);

        this._light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, -1, 0), this._scene);
        // this._light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 2, -1), this._scene);

        var sphere = BABYLON.MeshBuilder.CreateSphere(
            "sphere",
            { diameter: 2 },
            this._scene
        );
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