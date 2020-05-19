(function () {
    'use strict';

    var global = window;

    !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-loaders",["babylonjs"],t):"object"==typeof exports?exports["babylonjs-loaders"]=t(require("babylonjs")):e.LOADERS=t(e.BABYLON);}("undefined"!=typeof self?self:"undefined"!=typeof global?global:undefined,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(t,n){t.exports=e;},function(e,t,n){n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(0),o=n(2),a=function(){function e(){}return e.Get=function(e,t,n){if(!t||null==n||!t[n])throw new Error(e+": Failed to find index ("+n+")");return t[n]},e.Assign=function(e){if(e)for(var t=0;t<e.length;t++)e[t].index=t;},e}(),i=function(){function e(e){this._completePromises=new Array,this._forAssetContainer=!1,this._babylonLights=[],this._disposed=!1,this._state=null,this._extensions=new Array,this._defaultBabylonMaterialData={},this._requests=new Array,this._parent=e;}return e.RegisterExtension=function(t,n){e.UnregisterExtension(t)&&r.Logger.Warn("Extension with the name '"+t+"' already exists"),e._RegisteredExtensions[t]={factory:n};},e.UnregisterExtension=function(t){return !!e._RegisteredExtensions[t]&&(delete e._RegisteredExtensions[t],!0)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gltf",{get:function(){return this._gltf},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bin",{get:function(){return this._bin},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"babylonScene",{get:function(){return this._babylonScene},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootBabylonMesh",{get:function(){return this._rootBabylonMesh},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(!this._disposed){this._disposed=!0;for(var e=0,t=this._requests;e<t.length;e++){t[e].abort();}for(var n in this._requests.length=0,this._completePromises.length=0,this._extensions){var r=this._extensions[n];r.dispose&&r.dispose(),delete this._extensions[n];}delete this._gltf,delete this._babylonScene,delete this._rootBabylonMesh,delete this._progressCallback,this._parent._clear();}},e.prototype.importMeshAsync=function(e,t,n,r,o,a,i){var s=this;return Promise.resolve().then(function(){s._babylonScene=t,s._rootUrl=o,s._fileName=i||"scene",s._progressCallback=a,s._forAssetContainer=n,s._loadData(r);var l=null;if(e){var u={};if(s._gltf.nodes)for(var c=0,f=s._gltf.nodes;c<f.length;c++){var d=f[c];d.name&&(u[d.name]=d.index);}l=(e instanceof Array?e:[e]).map(function(e){var t=u[e];if(void 0===t)throw new Error("Failed to find node '"+e+"'");return t});}return s._loadAsync(l,function(){return {meshes:s._getMeshes(),particleSystems:[],skeletons:s._getSkeletons(),animationGroups:s._getAnimationGroups(),lights:s._babylonLights,transformNodes:s._getTransformNodes()}})})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a._babylonScene=e,a._rootUrl=n,a._fileName=o||"scene",a._progressCallback=r,a._loadData(t),a._loadAsync(null,function(){})})},e.prototype._loadAsync=function(e,t){var n=this;return Promise.resolve().then(function(){n._uniqueRootUrl=-1===n._rootUrl.indexOf("file:")&&n._fileName?n._rootUrl:""+n._rootUrl+Date.now()+"/",n._loadExtensions(),n._checkExtensions();var i=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.READY],s=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.COMPLETE];n._parent._startPerformanceCounter(i),n._parent._startPerformanceCounter(s),n._setState(o.GLTFLoaderState.LOADING),n._extensionsOnLoading();var l=new Array,u=n._babylonScene.blockMaterialDirtyMechanism;if(n._babylonScene.blockMaterialDirtyMechanism=!0,e)l.push(n.loadSceneAsync("/nodes",{nodes:e,index:-1}));else if(null!=n._gltf.scene||n._gltf.scenes&&n._gltf.scenes[0]){var c=a.Get("/scene",n._gltf.scenes,n._gltf.scene||0);l.push(n.loadSceneAsync("/scenes/"+c.index,c));}n._babylonScene.blockMaterialDirtyMechanism=u,n._parent.compileMaterials&&l.push(n._compileMaterialsAsync()),n._parent.compileShadowGenerators&&l.push(n._compileShadowGeneratorsAsync());var f=Promise.all(l).then(function(){return n._rootBabylonMesh&&n._rootBabylonMesh.setEnabled(!0),n._setState(o.GLTFLoaderState.READY),n._extensionsOnReady(),n._startAnimations(),t()});return f.then(function(){n._parent._endPerformanceCounter(i),r.Tools.SetImmediate(function(){n._disposed||Promise.all(n._completePromises).then(function(){n._parent._endPerformanceCounter(s),n._setState(o.GLTFLoaderState.COMPLETE),n._parent.onCompleteObservable.notifyObservers(void 0),n._parent.onCompleteObservable.clear(),n.dispose();},function(e){n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose();});});}),f},function(e){throw n._disposed||(n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()),e})},e.prototype._loadData=function(e){if(this._gltf=e.json,this._setupData(),e.bin){var t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){var n=t[0];(n.byteLength<e.bin.byteLength-3||n.byteLength>e.bin.byteLength)&&r.Logger.Warn("Binary buffer length ("+n.byteLength+") from JSON does not match chunk length ("+e.bin.byteLength+")"),this._bin=e.bin;}else r.Logger.Warn("Unexpected BIN chunk");}},e.prototype._setupData=function(){if(a.Assign(this._gltf.accessors),a.Assign(this._gltf.animations),a.Assign(this._gltf.buffers),a.Assign(this._gltf.bufferViews),a.Assign(this._gltf.cameras),a.Assign(this._gltf.images),a.Assign(this._gltf.materials),a.Assign(this._gltf.meshes),a.Assign(this._gltf.nodes),a.Assign(this._gltf.samplers),a.Assign(this._gltf.scenes),a.Assign(this._gltf.skins),a.Assign(this._gltf.textures),this._gltf.nodes){for(var e={},t=0,n=this._gltf.nodes;t<n.length;t++){if((u=n[t]).children)for(var r=0,o=u.children;r<o.length;r++){e[o[r]]=u.index;}}for(var i=this._createRootNode(),s=0,l=this._gltf.nodes;s<l.length;s++){var u,c=e[(u=l[s]).index];u.parent=void 0===c?i:this._gltf.nodes[c];}}},e.prototype._loadExtensions=function(){for(var t in e._RegisteredExtensions){var n=e._RegisteredExtensions[t].factory(this);n.name!==t&&r.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: "+n.name+" !== "+t),this._extensions.push(n),this._parent.onExtensionLoadedObservable.notifyObservers(n);}this._extensions.sort(function(e,t){return (e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)}),this._parent.onExtensionLoadedObservable.clear();},e.prototype._checkExtensions=function(){if(this._gltf.extensionsRequired)for(var e=function(e){if(!t._extensions.some(function(t){return t.name===e&&t.enabled}))throw new Error("Require extension "+e+" is not available")},t=this,n=0,r=this._gltf.extensionsRequired;n<r.length;n++){e(r[n]);}},e.prototype._setState=function(e){this._state=e,this.log(o.GLTFLoaderState[this._state]);},e.prototype._createRootNode=function(){this._babylonScene._blockEntityCollection=this._forAssetContainer,this._rootBabylonMesh=new r.Mesh("__root__",this._babylonScene),this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);var t={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case o.GLTFLoaderCoordinateSystemMode.AUTO:this._babylonScene.useRightHandedSystem||(t.rotation=[0,1,0,0],t.scale=[1,1,-1],e._LoadTransform(t,this._rootBabylonMesh));break;case o.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED:this._babylonScene.useRightHandedSystem=!0;break;default:throw new Error("Invalid coordinate system mode ("+this._parent.coordinateSystemMode+")")}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),t},e.prototype.loadSceneAsync=function(e,t){var n=this,r=this._extensionsLoadSceneAsync(e,t);if(r)return r;var o=new Array;if(this.logOpen(e+" "+(t.name||"")),t.nodes)for(var i=0,s=t.nodes;i<s.length;i++){var l=s[i],u=a.Get(e+"/nodes/"+l,this._gltf.nodes,l);o.push(this.loadNodeAsync("/nodes/"+u.index,u,function(e){e.parent=n._rootBabylonMesh;}));}if(this._gltf.nodes)for(var c=0,f=this._gltf.nodes;c<f.length;c++){if((u=f[c])._babylonTransformNode&&u._babylonBones)for(var d=0,h=u._babylonBones;d<h.length;d++){h[d].linkTransformNode(u._babylonTransformNode);}}return o.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(o).then(function(){})},e.prototype._forEachPrimitive=function(e,t){if(e._primitiveBabylonMeshes)for(var n=0,r=e._primitiveBabylonMeshes;n<r.length;n++){t(r[n]);}},e.prototype._getMeshes=function(){var e=new Array;e.push(this._rootBabylonMesh);var t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];this._forEachPrimitive(o,function(t){e.push(t);});}return e},e.prototype._getTransformNodes=function(){var e=new Array,t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonTransformNode&&"TransformNode"===o._babylonTransformNode.getClassName()&&e.push(o._babylonTransformNode);}return e},e.prototype._getSkeletons=function(){var e=new Array,t=this._gltf.skins;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._data&&e.push(o._data.babylonSkeleton);}return e},e.prototype._getAnimationGroups=function(){var e=new Array,t=this._gltf.animations;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonAnimationGroup&&e.push(o._babylonAnimationGroup);}return e},e.prototype._startAnimations=function(){switch(this._parent.animationStartMode){case o.GLTFLoaderAnimationStartMode.NONE:break;case o.GLTFLoaderAnimationStartMode.FIRST:0!==(e=this._getAnimationGroups()).length&&e[0].start(!0);break;case o.GLTFLoaderAnimationStartMode.ALL:for(var e,t=0,n=e=this._getAnimationGroups();t<n.length;t++){n[t].start(!0);}break;default:return void r.Logger.Error("Invalid animation start mode ("+this._parent.animationStartMode+")")}},e.prototype.loadNodeAsync=function(t,n,o){var i=this;void 0===o&&(o=function(){});var s=this._extensionsLoadNodeAsync(t,n,o);if(s)return s;if(n._babylonTransformNode)throw new Error(t+": Invalid recursive node hierarchy");var l=new Array;this.logOpen(t+" "+(n.name||""));var u=function(r){if(e.AddPointerMetadata(r,t),e._LoadTransform(n,r),null!=n.camera){var s=a.Get(t+"/camera",i._gltf.cameras,n.camera);l.push(i.loadCameraAsync("/cameras/"+s.index,s,function(e){e.parent=r;}));}if(n.children)for(var u=0,c=n.children;u<c.length;u++){var f=c[u],d=a.Get(t+"/children/"+f,i._gltf.nodes,f);l.push(i.loadNodeAsync("/nodes/"+d.index,d,function(e){e.parent=r;}));}o(r);};if(null==n.mesh){var c=n.name||"node"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer,n._babylonTransformNode=new r.TransformNode(c,this._babylonScene),this._babylonScene._blockEntityCollection=!1,u(n._babylonTransformNode);}else {var f=a.Get(t+"/mesh",this._gltf.meshes,n.mesh);l.push(this._loadMeshAsync("/meshes/"+f.index,n,f,u));}return this.logClose(),Promise.all(l).then(function(){return i._forEachPrimitive(n,function(e){e.refreshBoundingInfo(!0);}),n._babylonTransformNode})},e.prototype._loadMeshAsync=function(e,t,n,o){var i=n.primitives;if(!i||!i.length)throw new Error(e+": Primitives are missing");null==i[0].index&&a.Assign(i);var s=new Array;this.logOpen(e+" "+(n.name||""));var l=t.name||"node"+t.index;if(1===i.length){var u=n.primitives[0];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l,t,n,u,function(e){t._babylonTransformNode=e,t._primitiveBabylonMeshes=[e];}));}else {t._babylonTransformNode=new r.TransformNode(l,this._babylonScene),t._primitiveBabylonMeshes=[];for(var c=0,f=i;c<f.length;c++){u=f[c];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l+"_primitive"+u.index,t,n,u,function(e){e.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(e);}));}}if(null!=t.skin){var d=a.Get(e+"/skin",this._gltf.skins,t.skin);s.push(this._loadSkinAsync("/skins/"+d.index,t,d));}return o(t._babylonTransformNode),this.logClose(),Promise.all(s).then(function(){return t._babylonTransformNode})},e.prototype._loadMeshPrimitiveAsync=function(t,n,o,i,s,l){var u=this,c=this._extensionsLoadMeshPrimitiveAsync(t,n,o,i,s,l);if(c)return c;this.logOpen(""+t);var f,d,h=this._parent.createInstances&&null==o.skin&&!i.primitives[0].targets;if(h&&s._instanceData)f=s._instanceData.babylonSourceMesh.createInstance(n),d=s._instanceData.promise;else {var p=new Array;this._babylonScene._blockEntityCollection=this._forAssetContainer;var m=new r.Mesh(n,this._babylonScene);this._babylonScene._blockEntityCollection=!1,m.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?r.Material.CounterClockWiseSideOrientation:r.Material.ClockWiseSideOrientation,this._createMorphTargets(t,o,i,s,m),p.push(this._loadVertexDataAsync(t,s,m).then(function(e){return u._loadMorphTargetsAsync(t,s,m,e).then(function(){e.applyToMesh(m);})}));var _=e._GetDrawMode(t,s.mode);if(null==s.material){var y=this._defaultBabylonMaterialData[_];y||(y=this._createDefaultMaterial("__GLTFLoader._default",_),this._parent.onMaterialLoadedObservable.notifyObservers(y),this._defaultBabylonMaterialData[_]=y),m.material=y;}else {var b=a.Get(t+"/material",this._gltf.materials,s.material);p.push(this._loadMaterialAsync("/materials/"+b.index,b,m,_,function(e){m.material=e;}));}d=Promise.all(p),h&&(s._instanceData={babylonSourceMesh:m,promise:d}),f=m;}return e.AddPointerMetadata(f,t),this._parent.onMeshLoadedObservable.notifyObservers(f),l(f),this.logClose(),d.then(function(){return f})},e.prototype._loadVertexDataAsync=function(e,t,n){var o=this,i=this._extensionsLoadVertexDataAsync(e,t,n);if(i)return i;var s=t.attributes;if(!s)throw new Error(e+": Attributes are missing");var l=new Array,u=new r.Geometry(n.name,this._babylonScene);if(null==t.indices)n.isUnIndexed=!0;else {var c=a.Get(e+"/indices",this._gltf.accessors,t.indices);l.push(this._loadIndicesAccessorAsync("/accessors/"+c.index,c).then(function(e){u.setIndices(e);}));}var f=function(t,i,c){if(null!=s[t]){n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(i)&&n._delayInfo.push(i);var f=a.Get(e+"/attributes/"+t,o._gltf.accessors,s[t]);l.push(o._loadVertexAccessorAsync("/accessors/"+f.index,f,i).then(function(e){u.setVerticesBuffer(e,f.count);})),i==r.VertexBuffer.MatricesIndicesExtraKind&&(n.numBoneInfluencers=8),c&&c(f);}};return f("POSITION",r.VertexBuffer.PositionKind),f("NORMAL",r.VertexBuffer.NormalKind),f("TANGENT",r.VertexBuffer.TangentKind),f("TEXCOORD_0",r.VertexBuffer.UVKind),f("TEXCOORD_1",r.VertexBuffer.UV2Kind),f("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),f("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),f("JOINTS_1",r.VertexBuffer.MatricesIndicesExtraKind),f("WEIGHTS_1",r.VertexBuffer.MatricesWeightsExtraKind),f("COLOR_0",r.VertexBuffer.ColorKind,function(e){"VEC4"===e.type&&(n.hasVertexAlpha=!0);}),Promise.all(l).then(function(){return u})},e.prototype._createMorphTargets=function(e,t,n,o,a){if(o.targets){if(null==t._numMorphTargets)t._numMorphTargets=o.targets.length;else if(o.targets.length!==t._numMorphTargets)throw new Error(e+": Primitives do not have the same number of targets");var i=n.extras?n.extras.targetNames:null;a.morphTargetManager=new r.MorphTargetManager(a.getScene());for(var s=0;s<o.targets.length;s++){var l=t.weights?t.weights[s]:n.weights?n.weights[s]:0,u=i?i[s]:"morphTarget"+s;a.morphTargetManager.addTarget(new r.MorphTarget(u,l,a.getScene()));}}},e.prototype._loadMorphTargetsAsync=function(e,t,n,r){if(!t.targets)return Promise.resolve();for(var o=new Array,a=n.morphTargetManager,i=0;i<a.numTargets;i++){var s=a.getTarget(i);o.push(this._loadMorphTargetVertexDataAsync(e+"/targets/"+i,r,t.targets[i],s));}return Promise.all(o).then(function(){})},e.prototype._loadMorphTargetVertexDataAsync=function(e,t,n,o){var i=this,s=new Array,l=function(r,o,l){if(null!=n[r]){var u=t.getVertexBuffer(o);if(u){var c=a.Get(e+"/"+r,i._gltf.accessors,n[r]);s.push(i._loadFloatAccessorAsync("/accessors/"+c.index,c).then(function(e){l(u,e);}));}}};return l("POSITION",r.VertexBuffer.PositionKind,function(e,t){var n=new Float32Array(t.length);e.forEach(t.length,function(e,r){n[r]=t[r]+e;}),o.setPositions(n);}),l("NORMAL",r.VertexBuffer.NormalKind,function(e,t){var n=new Float32Array(t.length);e.forEach(n.length,function(e,r){n[r]=t[r]+e;}),o.setNormals(n);}),l("TANGENT",r.VertexBuffer.TangentKind,function(e,t){var n=new Float32Array(t.length/3*4),r=0;e.forEach(t.length/3*4,function(e,o){(o+1)%4!=0&&(n[r]=t[r]+e,r++);}),o.setTangents(n);}),Promise.all(s).then(function(){})},e._LoadTransform=function(e,t){if(null==e.skin){var n=r.Vector3.Zero(),o=r.Quaternion.Identity(),a=r.Vector3.One();if(e.matrix)r.Matrix.FromArray(e.matrix).decompose(a,o,n);else e.translation&&(n=r.Vector3.FromArray(e.translation)),e.rotation&&(o=r.Quaternion.FromArray(e.rotation)),e.scale&&(a=r.Vector3.FromArray(e.scale));t.position=n,t.rotationQuaternion=o,t.scaling=a;}},e.prototype._loadSkinAsync=function(e,t,n){var o=this,a=this._extensionsLoadSkinAsync(e,t,n);if(a)return a;var i=function(e){o._forEachPrimitive(t,function(t){t.skeleton=e;});};if(n._data)return i(n._data.babylonSkeleton),n._data.promise;var s="skeleton"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer;var l=new r.Skeleton(n.name||s,s,this._babylonScene);this._babylonScene._blockEntityCollection=!1,l.overrideMesh=this._rootBabylonMesh,this._loadBones(e,n,l),i(l);var u=this._loadSkinInverseBindMatricesDataAsync(e,n).then(function(e){o._updateBoneMatrices(l,e);});return n._data={babylonSkeleton:l,promise:u},u},e.prototype._loadBones=function(e,t,n){for(var r={},o=0,i=t.joints;o<i.length;o++){var s=i[o],l=a.Get(e+"/joints/"+s,this._gltf.nodes,s);this._loadBone(l,t,n,r);}},e.prototype._loadBone=function(e,t,n,o){var a=o[e.index];if(a)return a;var i=null;e.parent&&e.parent._babylonTransformNode!==this._rootBabylonMesh&&(i=this._loadBone(e.parent,t,n,o));var s=t.joints.indexOf(e.index);return a=new r.Bone(e.name||"joint"+e.index,n,i,this._getNodeMatrix(e),null,null,s),o[e.index]=a,e._babylonBones=e._babylonBones||[],e._babylonBones.push(a),a},e.prototype._loadSkinInverseBindMatricesDataAsync=function(e,t){if(null==t.inverseBindMatrices)return Promise.resolve(null);var n=a.Get(e+"/inverseBindMatrices",this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync("/accessors/"+n.index,n)},e.prototype._updateBoneMatrices=function(e,t){for(var n=0,o=e.bones;n<o.length;n++){var a=o[n],i=r.Matrix.Identity(),s=a._index;t&&-1!==s&&(r.Matrix.FromArrayToRef(t,16*s,i),i.invertToRef(i));var l=a.getParent();l&&i.multiplyToRef(l.getInvertedAbsoluteTransform(),i),a.updateMatrix(i,!1,!1),a._updateDifferenceMatrix(void 0,!1);}},e.prototype._getNodeMatrix=function(e){return e.matrix?r.Matrix.FromArray(e.matrix):r.Matrix.Compose(e.scale?r.Vector3.FromArray(e.scale):r.Vector3.One(),e.rotation?r.Quaternion.FromArray(e.rotation):r.Quaternion.Identity(),e.translation?r.Vector3.FromArray(e.translation):r.Vector3.Zero())},e.prototype.loadCameraAsync=function(t,n,o){void 0===o&&(o=function(){});var a=this._extensionsLoadCameraAsync(t,n,o);if(a)return a;var i=new Array;this.logOpen(t+" "+(n.name||"")),this._babylonScene._blockEntityCollection=this._forAssetContainer;var s=new r.FreeCamera(n.name||"camera"+n.index,r.Vector3.Zero(),this._babylonScene,!1);switch(this._babylonScene._blockEntityCollection=!1,s.rotation=new r.Vector3(0,Math.PI,0),n.type){case"perspective":var l=n.perspective;if(!l)throw new Error(t+": Camera perspective properties are missing");s.fov=l.yfov,s.minZ=l.znear,s.maxZ=l.zfar||Number.MAX_VALUE;break;case"orthographic":if(!n.orthographic)throw new Error(t+": Camera orthographic properties are missing");s.mode=r.Camera.ORTHOGRAPHIC_CAMERA,s.orthoLeft=-n.orthographic.xmag,s.orthoRight=n.orthographic.xmag,s.orthoBottom=-n.orthographic.ymag,s.orthoTop=n.orthographic.ymag,s.minZ=n.orthographic.znear,s.maxZ=n.orthographic.zfar;break;default:throw new Error(t+": Invalid camera type ("+n.type+")")}return e.AddPointerMetadata(s,t),this._parent.onCameraLoadedObservable.notifyObservers(s),o(s),Promise.all(i).then(function(){return s})},e.prototype._loadAnimationsAsync=function(){var e=this._gltf.animations;if(!e)return Promise.resolve();for(var t=new Array,n=0;n<e.length;n++){var r=e[n];t.push(this.loadAnimationAsync("/animations/"+r.index,r));}return Promise.all(t).then(function(){})},e.prototype.loadAnimationAsync=function(e,t){var n=this._extensionsLoadAnimationAsync(e,t);if(n)return n;this._babylonScene._blockEntityCollection=this._forAssetContainer;var o=new r.AnimationGroup(t.name||"animation"+t.index,this._babylonScene);this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=o;var i=new Array;a.Assign(t.channels),a.Assign(t.samplers);for(var s=0,l=t.channels;s<l.length;s++){var u=l[s];i.push(this._loadAnimationChannelAsync(e+"/channels/"+u.index,e,t,u,o));}return Promise.all(i).then(function(){return o.normalize(0),o})},e.prototype._loadAnimationChannelAsync=function(e,t,n,o,i,s){var l=this;if(void 0===s&&(s=null),null==o.target.node)return Promise.resolve();var u=a.Get(e+"/target/node",this._gltf.nodes,o.target.node);if("weights"===o.target.path&&!u._numMorphTargets||"weights"!==o.target.path&&!u._babylonTransformNode)return Promise.resolve();var c=a.Get(e+"/sampler",n.samplers,o.sampler);return this._loadAnimationSamplerAsync(t+"/samplers/"+o.sampler,c).then(function(t){var n,a;switch(o.target.path){case"translation":n="position",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"rotation":n="rotationQuaternion",a=r.Animation.ANIMATIONTYPE_QUATERNION;break;case"scale":n="scaling",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"weights":n="influence",a=r.Animation.ANIMATIONTYPE_FLOAT;break;default:throw new Error(e+"/target/path: Invalid value ("+o.target.path+")")}var c,f,d=0;switch(n){case"position":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"rotationQuaternion":c=function(){var e=r.Quaternion.FromArray(t.output,d);return d+=4,e};break;case"scaling":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"influence":c=function(){for(var e=new Array(u._numMorphTargets),n=0;n<u._numMorphTargets;n++)e[n]=t.output[d++];return e};}switch(t.interpolation){case"STEP":f=function(e){return {frame:t.input[e],value:c(),interpolation:r.AnimationKeyInterpolation.STEP}};break;case"LINEAR":f=function(e){return {frame:t.input[e],value:c()}};break;case"CUBICSPLINE":f=function(e){return {frame:t.input[e],inTangent:c(),value:c(),outTangent:c()}};}for(var h=new Array(t.input.length),p=0;p<t.input.length;p++)h[p]=f(p);if("influence"===n)for(var m=function(e){var t=i.name+"_channel"+i.targetedAnimations.length,o=new r.Animation(t,n,1,a);o.setKeys(h.map(function(t){return {frame:t.frame,inTangent:t.inTangent?t.inTangent[e]:void 0,value:t.value[e],outTangent:t.outTangent?t.outTangent[e]:void 0}})),l._forEachPrimitive(u,function(t){var n=t.morphTargetManager.getTarget(e),r=o.clone();n.animations.push(r),i.addTargetedAnimation(r,n);});},_=0;_<u._numMorphTargets;_++)m(_);else {var y=i.name+"_channel"+i.targetedAnimations.length,b=new r.Animation(y,n,1,a);b.setKeys(h),null!=s&&null!=s.animations?(s.animations.push(b),i.addTargetedAnimation(b,s)):(u._babylonTransformNode.animations.push(b),i.addTargetedAnimation(b,u._babylonTransformNode));}})},e.prototype._loadAnimationSamplerAsync=function(e,t){if(t._data)return t._data;var n=t.interpolation||"LINEAR";switch(n){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(e+"/interpolation: Invalid value ("+t.interpolation+")")}var r=a.Get(e+"/input",this._gltf.accessors,t.input),o=a.Get(e+"/output",this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync("/accessors/"+r.index,r),this._loadFloatAccessorAsync("/accessors/"+o.index,o)]).then(function(e){var t=e[0],r=e[1];return {input:t,interpolation:n,output:r}}),t._data},e.prototype._loadBufferAsync=function(e,t,n,r){var o=this._extensionsLoadBufferAsync(e,t,n,r);if(o)return o;if(!t._data)if(t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else {if(!this._bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");t._data=this._bin.readAsync(0,t.byteLength);}return t._data.then(function(t){try{return new Uint8Array(t.buffer,t.byteOffset+n,r)}catch(t){throw new Error(e+": "+t.message)}})},e.prototype.loadBufferViewAsync=function(e,t){var n=this._extensionsLoadBufferViewAsync(e,t);if(n)return n;if(t._data)return t._data;var r=a.Get(e+"/buffer",this._gltf.buffers,t.buffer);return t._data=this._loadBufferAsync("/buffers/"+r.index,r,t.byteOffset||0,t.byteLength),t._data},e.prototype._loadAccessorAsync=function(t,n,o){var i=this;if(n._data)return n._data;var s=e._GetNumComponents(t,n.type),l=s*r.VertexBuffer.GetTypeByteLength(n.componentType),u=s*n.count;if(null==n.bufferView)n._data=Promise.resolve(new o(u));else {var c=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+c.index,c).then(function(a){if(5126!==n.componentType||n.normalized){var i=new o(u);return r.VertexBuffer.ForEach(a,n.byteOffset||0,c.byteStride||l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e;}),i}return e._GetTypedArray(t,n.componentType,a,n.byteOffset,u)});}if(n.sparse){var f=n.sparse;n._data=n._data.then(function(u){var c=u,d=a.Get(t+"/sparse/indices/bufferView",i._gltf.bufferViews,f.indices.bufferView),h=a.Get(t+"/sparse/values/bufferView",i._gltf.bufferViews,f.values.bufferView);return Promise.all([i.loadBufferViewAsync("/bufferViews/"+d.index,d),i.loadBufferViewAsync("/bufferViews/"+h.index,h)]).then(function(a){var i,u=a[0],d=a[1],h=e._GetTypedArray(t+"/sparse/indices",f.indices.componentType,u,f.indices.byteOffset,f.count),p=s*f.count;if(5126!==n.componentType||n.normalized){var m=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);i=new o(p),r.VertexBuffer.ForEach(m,0,l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e;});}else i=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);for(var _=0,y=0;y<h.length;y++)for(var b=h[y]*s,v=0;v<s;v++)c[b++]=i[_++];return c})});}return n._data},e.prototype._loadFloatAccessorAsync=function(e,t){return this._loadAccessorAsync(e,t,Float32Array)},e.prototype._loadIndicesAccessorAsync=function(t,n){if("SCALAR"!==n.type)throw new Error(t+"/type: Invalid value "+n.type);if(5121!==n.componentType&&5123!==n.componentType&&5125!==n.componentType)throw new Error(t+"/componentType: Invalid value "+n.componentType);if(n._data)return n._data;if(n.sparse){var r=e._GetTypedArrayConstructor(t+"/componentType",n.componentType);n._data=this._loadAccessorAsync(t,n,r);}else {var o=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+o.index,o).then(function(r){return e._GetTypedArray(t,n.componentType,r,n.byteOffset,n.count)});}return n._data},e.prototype._loadVertexBufferViewAsync=function(e,t){var n=this;return e._babylonBuffer?e._babylonBuffer:(e._babylonBuffer=this.loadBufferViewAsync("/bufferViews/"+e.index,e).then(function(e){return new r.Buffer(n._babylonScene.getEngine(),e,!1)}),e._babylonBuffer)},e.prototype._loadVertexAccessorAsync=function(t,n,o){var i=this;if(n._babylonVertexBuffer)return n._babylonVertexBuffer;if(n.sparse)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(n.byteOffset&&n.byteOffset%r.VertexBuffer.GetTypeByteLength(n.componentType)!=0)r.Logger.Warn("Accessor byte offset is not a multiple of component type byte length"),n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(o===r.VertexBuffer.MatricesIndicesKind||o===r.VertexBuffer.MatricesIndicesExtraKind)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else {var s=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._babylonVertexBuffer=this._loadVertexBufferViewAsync(s,o).then(function(a){var l=e._GetNumComponents(t,n.type);return new r.VertexBuffer(i._babylonScene.getEngine(),a,o,!1,!1,s.byteStride,!1,n.byteOffset,l,n.componentType,n.normalized,!0)});}return n._babylonVertexBuffer},e.prototype._loadMaterialMetallicRoughnessPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return t&&(t.baseColorFactor?(n.albedoColor=r.Color3.FromArray(t.baseColorFactor),n.alpha=t.baseColorFactor[3]):n.albedoColor=r.Color3.White(),n.metallic=null==t.metallicFactor?1:t.metallicFactor,n.roughness=null==t.roughnessFactor?1:t.roughnessFactor,t.baseColorTexture&&o.push(this.loadTextureInfoAsync(e+"/baseColorTexture",t.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e;})),t.metallicRoughnessTexture&&(o.push(this.loadTextureInfoAsync(e+"/metallicRoughnessTexture",t.metallicRoughnessTexture,function(e){e.name=n.name+" (Metallic Roughness)",n.metallicTexture=e;})),n.useMetallnessFromMetallicTextureBlue=!0,n.useRoughnessFromMetallicTextureGreen=!0,n.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(o).then(function(){})},e.prototype._loadMaterialAsync=function(t,n,r,o,a){void 0===a&&(a=function(){});var i=this._extensionsLoadMaterialAsync(t,n,r,o,a);if(i)return i;n._data=n._data||{};var s=n._data[o];if(!s){this.logOpen(t+" "+(n.name||""));var l=this.createMaterial(t,n,o);s={babylonMaterial:l,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(t,n,l)},n._data[o]=s,e.AddPointerMetadata(l,t),this._parent.onMaterialLoadedObservable.notifyObservers(l),this.logClose();}return s.babylonMeshes.push(r),r.onDisposeObservable.addOnce(function(){var e=s.babylonMeshes.indexOf(r);-1!==e&&s.babylonMeshes.splice(e,1);}),a(s.babylonMaterial),s.promise.then(function(){return s.babylonMaterial})},e.prototype._createDefaultMaterial=function(e,t){this._babylonScene._blockEntityCollection=this._forAssetContainer;var n=new r.PBRMaterial(e,this._babylonScene);return this._babylonScene._blockEntityCollection=!1,n.fillMode=t,n.enableSpecularAntiAliasing=!0,n.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,n.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE,n.metallic=1,n.roughness=1,n},e.prototype.createMaterial=function(e,t,n){var r=this._extensionsCreateMaterial(e,t,n);if(r)return r;var o=t.name||"material"+t.index;return this._createDefaultMaterial(o,n)},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this._extensionsLoadMaterialPropertiesAsync(e,t,n);if(r)return r;var o=new Array;return o.push(this.loadMaterialBasePropertiesAsync(e,t,n)),t.pbrMetallicRoughness&&o.push(this._loadMaterialMetallicRoughnessPropertiesAsync(e+"/pbrMetallicRoughness",t.pbrMetallicRoughness,n)),this.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e.prototype.loadMaterialBasePropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.emissiveColor=t.emissiveFactor?r.Color3.FromArray(t.emissiveFactor):new r.Color3(0,0,0),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),t.normalTexture&&(o.push(this.loadTextureInfoAsync(e+"/normalTexture",t.normalTexture,function(e){e.name=n.name+" (Normal)",n.bumpTexture=e;})),n.invertNormalMapX=!this._babylonScene.useRightHandedSystem,n.invertNormalMapY=this._babylonScene.useRightHandedSystem,null!=t.normalTexture.scale&&(n.bumpTexture.level=t.normalTexture.scale),n.forceIrradianceInFragment=!0),t.occlusionTexture&&(o.push(this.loadTextureInfoAsync(e+"/occlusionTexture",t.occlusionTexture,function(e){e.name=n.name+" (Occlusion)",n.ambientTexture=e;})),n.useAmbientInGrayScale=!0,null!=t.occlusionTexture.strength&&(n.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&o.push(this.loadTextureInfoAsync(e+"/emissiveTexture",t.emissiveTexture,function(e){e.name=n.name+" (Emissive)",n.emissiveTexture=e;})),Promise.all(o).then(function(){})},e.prototype.loadMaterialAlphaProperties=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");switch(t.alphaMode||"OPAQUE"){case"OPAQUE":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE;break;case"MASK":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHATEST,n.alphaCutOff=null==t.alphaCutoff?.5:t.alphaCutoff,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0);break;case"BLEND":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHABLEND,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0,n.useAlphaFromAlbedoTexture=!0);break;default:throw new Error(e+"/alphaMode: Invalid value ("+t.alphaMode+")")}},e.prototype.loadTextureInfoAsync=function(t,n,r){var o=this;void 0===r&&(r=function(){});var i=this._extensionsLoadTextureInfoAsync(t,n,r);if(i)return i;if(this.logOpen(""+t),n.texCoord>=2)throw new Error(t+"/texCoord: Invalid value ("+n.texCoord+")");var s=a.Get(t+"/index",this._gltf.textures,n.index),l=this._loadTextureAsync("/textures/"+n.index,s,function(a){a.coordinatesIndex=n.texCoord||0,e.AddPointerMetadata(a,t),o._parent.onTextureLoadedObservable.notifyObservers(a),r(a);});return this.logClose(),l},e.prototype._loadTextureAsync=function(t,n,r){void 0===r&&(r=function(){});var o=this._extensionsLoadTextureAsync(t,n,r);if(o)return o;this.logOpen(t+" "+(n.name||""));var i=null==n.sampler?e.DefaultSampler:a.Get(t+"/sampler",this._gltf.samplers,n.sampler),s=a.Get(t+"/source",this._gltf.images,n.source),l=this._createTextureAsync(t,i,s,r);return this.logClose(),l},e.prototype._createTextureAsync=function(e,t,n,o){var a=this;void 0===o&&(o=function(){});var i=this._loadSampler("/samplers/"+t.index,t),s=new Array,l=new r.Deferred;this._babylonScene._blockEntityCollection=this._forAssetContainer;var u=new r.Texture(null,this._babylonScene,i.noMipMaps,!1,i.samplingMode,function(){a._disposed||l.resolve();},function(t,n){a._disposed||l.reject(new Error(e+": "+(n&&n.message?n.message:t||"Failed to load texture")));},void 0,void 0,void 0,n.mimeType);return this._babylonScene._blockEntityCollection=!1,s.push(l.promise),s.push(this.loadImageAsync("/images/"+n.index,n).then(function(e){var t=n.uri||a._fileName+"#image"+n.index,r="data:"+a._uniqueRootUrl+t;u.updateURL(r,e);})),u.wrapU=i.wrapU,u.wrapV=i.wrapV,o(u),Promise.all(s).then(function(){return u})},e.prototype._loadSampler=function(t,n){return n._data||(n._data={noMipMaps:9728===n.minFilter||9729===n.minFilter,samplingMode:e._GetTextureSamplingMode(t,n),wrapU:e._GetTextureWrapMode(t+"/wrapS",n.wrapS),wrapV:e._GetTextureWrapMode(t+"/wrapT",n.wrapT)}),n._data},e.prototype.loadImageAsync=function(e,t){if(!t._data){if(this.logOpen(e+" "+(t.name||"")),t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else {var n=a.Get(e+"/bufferView",this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync("/bufferViews/"+n.index,n);}this.logClose();}return t._data},e.prototype.loadUriAsync=function(t,n,a){var i=this,s=this._extensionsLoadUriAsync(t,n,a);if(s)return s;if(!e._ValidateUri(a))throw new Error(t+": '"+a+"' is invalid");if(r.Tools.IsBase64(a)){var l=new Uint8Array(r.Tools.DecodeBase64(a));return this.log("Decoded "+a.substr(0,64)+"... ("+l.length+" bytes)"),Promise.resolve(l)}return this.log("Loading "+a),this._parent.preprocessUrlAsync(this._rootUrl+a).then(function(e){return new Promise(function(n,s){if(!i._disposed){var l=r.Tools.LoadFile(e,function(e){if(!i._disposed){var t=new Uint8Array(e);i.log("Loaded "+a+" ("+t.length+" bytes)"),n(t);}},function(e){if(!i._disposed&&(l&&(l._lengthComputable=e.lengthComputable,l._loaded=e.loaded,l._total=e.total),i._state===o.GLTFLoaderState.LOADING))try{i._onProgress();}catch(e){s(e);}},i._babylonScene.offlineProvider,!0,function(e,n){i._disposed||s(new r.LoadFileError(t+": Failed to load '"+a+"'"+(e?": "+e.status+" "+e.statusText:""),e));});i._requests.push(l);}})})},e.prototype._onProgress=function(){if(this._progressCallback){for(var e=!0,t=0,n=0,o=0,a=this._requests;o<a.length;o++){var i=a[o];if(void 0===i._lengthComputable||void 0===i._loaded||void 0===i._total)return;e=e&&i._lengthComputable,t+=i._loaded,n+=i._total;}this._progressCallback(new r.SceneLoaderProgressEvent(e,t,e?n:0));}},e.AddPointerMetadata=function(e,t){var n=e.metadata=e.metadata||{},r=n.gltf=n.gltf||{};(r.pointers=r.pointers||[]).push(t);},e._GetTextureWrapMode=function(e,t){switch(t=null==t?10497:t){case 33071:return r.Texture.CLAMP_ADDRESSMODE;case 33648:return r.Texture.MIRROR_ADDRESSMODE;case 10497:return r.Texture.WRAP_ADDRESSMODE;default:return r.Logger.Warn(e+": Invalid value ("+t+")"),r.Texture.WRAP_ADDRESSMODE}},e._GetTextureSamplingMode=function(e,t){var n=null==t.magFilter?9729:t.magFilter,o=null==t.minFilter?9987:t.minFilter;if(9729===n)switch(o){case 9728:return r.Texture.LINEAR_NEAREST;case 9729:return r.Texture.LINEAR_LINEAR;case 9984:return r.Texture.LINEAR_NEAREST_MIPNEAREST;case 9985:return r.Texture.LINEAR_LINEAR_MIPNEAREST;case 9986:return r.Texture.LINEAR_NEAREST_MIPLINEAR;case 9987:return r.Texture.LINEAR_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.LINEAR_LINEAR_MIPLINEAR}else switch(9728!==n&&r.Logger.Warn(e+"/magFilter: Invalid value ("+n+")"),o){case 9728:return r.Texture.NEAREST_NEAREST;case 9729:return r.Texture.NEAREST_LINEAR;case 9984:return r.Texture.NEAREST_NEAREST_MIPNEAREST;case 9985:return r.Texture.NEAREST_LINEAR_MIPNEAREST;case 9986:return r.Texture.NEAREST_NEAREST_MIPLINEAR;case 9987:return r.Texture.NEAREST_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.NEAREST_NEAREST_MIPNEAREST}},e._GetTypedArrayConstructor=function(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(e+": Invalid component type "+t)}},e._GetTypedArray=function(t,n,r,o,a){var i=r.buffer;o=r.byteOffset+(o||0);var s=e._GetTypedArrayConstructor(t+"/componentType",n);try{return new s(i,o,a)}catch(e){throw new Error(t+": "+e)}},e._GetNumComponents=function(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(e+": Invalid type ("+t+")")},e._ValidateUri=function(e){return r.Tools.IsBase64(e)||-1===e.indexOf("..")},e._GetDrawMode=function(e,t){switch(null==t&&(t=4),t){case 0:return r.Material.PointListDrawMode;case 1:return r.Material.LineListDrawMode;case 2:return r.Material.LineLoopDrawMode;case 3:return r.Material.LineStripDrawMode;case 4:return r.Material.TriangleFillMode;case 5:return r.Material.TriangleStripDrawMode;case 6:return r.Material.TriangleFanDrawMode}throw new Error(e+": Invalid mesh primitive mode ("+t+")")},e.prototype._compileMaterialsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile materials");var t=new Array;if(this._gltf.materials)for(var n=0,r=this._gltf.materials;n<r.length;n++){var o=r[n];if(o._data)for(var a in o._data)for(var i=o._data[a],s=0,l=i.babylonMeshes;s<l.length;s++){var u=l[s];u.computeWorldMatrix(!0);var c=i.babylonMaterial;t.push(c.forceCompilationAsync(u)),t.push(c.forceCompilationAsync(u,{useInstances:!0})),this._parent.useClipPlane&&(t.push(c.forceCompilationAsync(u,{clipPlane:!0})),t.push(c.forceCompilationAsync(u,{clipPlane:!0,useInstances:!0})));}}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile materials");})},e.prototype._compileShadowGeneratorsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile shadow generators");for(var t=new Array,n=0,r=this._babylonScene.lights;n<r.length;n++){var o=r[n].getShadowGenerator();o&&t.push(o.forceCompilationAsync());}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile shadow generators");})},e.prototype._forEachExtensions=function(e){for(var t=0,n=this._extensions;t<n.length;t++){var r=n[t];r.enabled&&e(r);}},e.prototype._applyExtensions=function(e,t,n){for(var r=0,o=this._extensions;r<o.length;r++){var a=o[r];if(a.enabled){var i=a.name+"."+t,s=e;s._activeLoaderExtensionFunctions=s._activeLoaderExtensionFunctions||{};var l=s._activeLoaderExtensionFunctions;if(!l[i]){l[i]=!0;try{var u=n(a);if(u)return u}finally{delete l[i];}}}}return null},e.prototype._extensionsOnLoading=function(){this._forEachExtensions(function(e){return e.onLoading&&e.onLoading()});},e.prototype._extensionsOnReady=function(){this._forEachExtensions(function(e){return e.onReady&&e.onReady()});},e.prototype._extensionsLoadSceneAsync=function(e,t){return this._applyExtensions(t,"loadScene",function(n){return n.loadSceneAsync&&n.loadSceneAsync(e,t)})},e.prototype._extensionsLoadNodeAsync=function(e,t,n){return this._applyExtensions(t,"loadNode",function(r){return r.loadNodeAsync&&r.loadNodeAsync(e,t,n)})},e.prototype._extensionsLoadCameraAsync=function(e,t,n){return this._applyExtensions(t,"loadCamera",function(r){return r.loadCameraAsync&&r.loadCameraAsync(e,t,n)})},e.prototype._extensionsLoadVertexDataAsync=function(e,t,n){return this._applyExtensions(t,"loadVertexData",function(r){return r._loadVertexDataAsync&&r._loadVertexDataAsync(e,t,n)})},e.prototype._extensionsLoadMeshPrimitiveAsync=function(e,t,n,r,o,a){return this._applyExtensions(o,"loadMeshPrimitive",function(i){return i._loadMeshPrimitiveAsync&&i._loadMeshPrimitiveAsync(e,t,n,r,o,a)})},e.prototype._extensionsLoadMaterialAsync=function(e,t,n,r,o){return this._applyExtensions(t,"loadMaterial",function(a){return a._loadMaterialAsync&&a._loadMaterialAsync(e,t,n,r,o)})},e.prototype._extensionsCreateMaterial=function(e,t,n){return this._applyExtensions(t,"createMaterial",function(r){return r.createMaterial&&r.createMaterial(e,t,n)})},e.prototype._extensionsLoadMaterialPropertiesAsync=function(e,t,n){return this._applyExtensions(t,"loadMaterialProperties",function(r){return r.loadMaterialPropertiesAsync&&r.loadMaterialPropertiesAsync(e,t,n)})},e.prototype._extensionsLoadTextureInfoAsync=function(e,t,n){return this._applyExtensions(t,"loadTextureInfo",function(r){return r.loadTextureInfoAsync&&r.loadTextureInfoAsync(e,t,n)})},e.prototype._extensionsLoadTextureAsync=function(e,t,n){return this._applyExtensions(t,"loadTexture",function(r){return r._loadTextureAsync&&r._loadTextureAsync(e,t,n)})},e.prototype._extensionsLoadAnimationAsync=function(e,t){return this._applyExtensions(t,"loadAnimation",function(n){return n.loadAnimationAsync&&n.loadAnimationAsync(e,t)})},e.prototype._extensionsLoadSkinAsync=function(e,t,n){return this._applyExtensions(n,"loadSkin",function(r){return r._loadSkinAsync&&r._loadSkinAsync(e,t,n)})},e.prototype._extensionsLoadUriAsync=function(e,t,n){return this._applyExtensions(t,"loadUri",function(r){return r._loadUriAsync&&r._loadUriAsync(e,t,n)})},e.prototype._extensionsLoadBufferViewAsync=function(e,t){return this._applyExtensions(t,"loadBufferView",function(n){return n.loadBufferViewAsync&&n.loadBufferViewAsync(e,t)})},e.prototype._extensionsLoadBufferAsync=function(e,t,n,r){return this._applyExtensions(t,"loadBuffer",function(o){return o.loadBufferAsync&&o.loadBufferAsync(e,t,n,r)})},e.LoadExtensionAsync=function(e,t,n,r){if(!t.extensions)return null;var o=t.extensions[n];return o?r(e+"/extensions/"+n,o):null},e.LoadExtraAsync=function(e,t,n,r){if(!t.extras)return null;var o=t.extras[n];return o?r(e+"/extras/"+n,o):null},e.prototype.isExtensionUsed=function(e){return !!this._gltf.extensionsUsed&&-1!==this._gltf.extensionsUsed.indexOf(e)},e.prototype.logOpen=function(e){this._parent._logOpen(e);},e.prototype.logClose=function(){this._parent._logClose();},e.prototype.log=function(e){this._parent._log(e);},e.prototype.startPerformanceCounter=function(e){this._parent._startPerformanceCounter(e);},e.prototype.endPerformanceCounter=function(e){this._parent._endPerformanceCounter(e);},e._RegisteredExtensions={},e.DefaultSampler={index:-1},e}();o.GLTFFileLoader._CreateGLTF2Loader=function(e){return new i(e)};},function(e,t,n){n.r(t),n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return o}),n.d(t,"GLTFLoaderState",function(){return a}),n.d(t,"GLTFFileLoader",function(){return l});var r,o,a,i=n(0),s=n(3);!function(e){e[e.AUTO=0]="AUTO",e[e.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED";}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.FIRST=1]="FIRST",e[e.ALL=2]="ALL";}(o||(o={})),function(e){e[e.LOADING=0]="LOADING",e[e.READY=1]="READY",e[e.COMPLETE=2]="COMPLETE";}(a||(a={}));var l=function(){function e(){this.onParsedObservable=new i.Observable,this.coordinateSystemMode=r.AUTO,this.animationStartMode=o.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable=new i.Observable,this.onTextureLoadedObservable=new i.Observable,this.onMaterialLoadedObservable=new i.Observable,this.onCameraLoadedObservable=new i.Observable,this.onCompleteObservable=new i.Observable,this.onErrorObservable=new i.Observable,this.onDisposeObservable=new i.Observable,this.onExtensionLoadedObservable=new i.Observable,this.validate=!1,this.onValidatedObservable=new i.Observable,this._loader=null,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled;}return Object.defineProperty(e.prototype,"onParsed",{set:function(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMeshLoaded",{set:function(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTextureLoaded",{set:function(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMaterialLoaded",{set:function(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCameraLoaded",{set:function(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{set:function(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onError",{set:function(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onExtensionLoaded",{set:function(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loggingEnabled",{get:function(){return this._loggingEnabled},set:function(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"capturePerformanceCounters",{get:function(){return this._capturePerformanceCounters},set:function(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled));},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onValidated",{set:function(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e);},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._loader&&(this._loader.dispose(),this._loader=null),this._clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear();},e.prototype._clear=function(){this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear();},e.prototype.requestFile=function(e,t,n,r,o,a){var s=this;if(o){if(this.useRangeRequests){this.validate&&i.Logger.Warn("glTF validation is not supported when range requests are enabled");var l=new Array,u={abort:function(){return l.forEach(function(e){return e.abort()})},onCompleteObservable:new i.Observable},c={readAsync:function(n,o){return new Promise(function(a,i){l.push(e._requestFile(t,function(e,t){var n=t.getResponseHeader("Content-Range");n&&(c.byteLength=Number(n.split("/")[1])),a(new Uint8Array(e));},r,!0,!0,function(e){i(e);},function(e){e.setRequestHeader("Range","bytes="+n+"-"+(n+o-1));}));})},byteLength:0};return this._unpackBinaryAsync(new i.DataReader(c)).then(function(e){u.onCompleteObservable.notifyObservers(u),n(e);},a),u}return e._requestFile(t,function(e,t){var r=e;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(r,e,t))},byteLength:r.byteLength})).then(function(e){n(e,t);},a);},r,!0,!0,a)}return e._requestFile(t,function(r,o){s._validate(e,r,i.Tools.GetFolderPath(t),i.Tools.GetFilename(t)),n({json:s._parseJson(r)},o);},r,!0,!1,a)},e.prototype.readFile=function(e,t,n,r,o,a){var s=this;return e._readFile(t,function(r){if(s._validate(e,r,"file:",t.name),o){var l=r;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(l,e,t))},byteLength:l.byteLength})).then(n,a);}else n({json:s._parseJson(r)});},r,o,a)},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return Promise.resolve().then(function(){return i.onParsedObservable.notifyObservers(n),i.onParsedObservable.clear(),i._log("Loading "+(a||"")),i._loader=i._getLoader(n),i._loader.importMeshAsync(e,t,!1,n,r,o,a)})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t),a._loader.loadAsync(e,t,n,r,o)})},e.prototype.loadAssetContainerAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t);var s=[];a.onMaterialLoadedObservable.add(function(e){s.push(e);});var l=[];return a.onTextureLoadedObservable.add(function(e){l.push(e);}),a._loader.importMeshAsync(null,e,!0,t,n,r,o).then(function(t){var n=new i.AssetContainer(e);return Array.prototype.push.apply(n.meshes,t.meshes),Array.prototype.push.apply(n.particleSystems,t.particleSystems),Array.prototype.push.apply(n.skeletons,t.skeletons),Array.prototype.push.apply(n.animationGroups,t.animationGroups),Array.prototype.push.apply(n.materials,s),Array.prototype.push.apply(n.textures,l),Array.prototype.push.apply(n.lights,t.lights),Array.prototype.push.apply(n.transformNodes,t.transformNodes),n})})},e.prototype.canDirectLoad=function(e){return -1!==e.indexOf("asset")&&-1!==e.indexOf("version")},e.prototype.directLoad=function(e,t){return this._validate(e,t),{json:this._parseJson(t)}},e.prototype.createPlugin=function(){return new e},Object.defineProperty(e.prototype,"loaderState",{get:function(){return this._loader?this._loader.state:null},enumerable:!0,configurable:!0}),e.prototype.whenCompleteAsync=function(){var e=this;return new Promise(function(t,n){e.onCompleteObservable.addOnce(function(){t();}),e.onErrorObservable.addOnce(function(e){n(e);});})},e.prototype._validate=function(e,t,n,r){var o=this;void 0===n&&(n=""),void 0===r&&(r=""),this.validate&&(this._startPerformanceCounter("Validate JSON"),s.GLTFValidation.ValidateAsync(t,n,r,function(t){return o.preprocessUrlAsync(n+t).then(function(t){return e._loadFileAsync(t,void 0,!0,!0)})}).then(function(e){o._endPerformanceCounter("Validate JSON"),o.onValidatedObservable.notifyObservers(e),o.onValidatedObservable.clear();},function(e){o._endPerformanceCounter("Validate JSON"),i.Tools.Warn("Failed to validate: "+e.message),o.onValidatedObservable.clear();}));},e.prototype._getLoader=function(t){var n=t.json.asset||{};this._log("Asset version: "+n.version),n.minVersion&&this._log("Asset minimum version: "+n.minVersion),n.generator&&this._log("Asset generator: "+n.generator);var r=e._parseVersion(n.version);if(!r)throw new Error("Invalid version: "+n.version);if(void 0!==n.minVersion){var o=e._parseVersion(n.minVersion);if(!o)throw new Error("Invalid minimum version: "+n.minVersion);if(e._compareVersion(o,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+n.minVersion)}var a={1:e._CreateGLTF1Loader,2:e._CreateGLTF2Loader}[r.major];if(!a)throw new Error("Unsupported version: "+n.version);return a(this)},e.prototype._parseJson=function(e){this._startPerformanceCounter("Parse JSON"),this._log("JSON length: "+e.length);var t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t},e.prototype._unpackBinaryAsync=function(e){var t=this;return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then(function(){var n=e.readUint32();if(1179937895!==n)throw new Error("Unexpected magic: "+n);var r=e.readUint32();t.loggingEnabled&&t._log("Binary version: "+r);var o,a=e.readUint32();if(0!=e.buffer.byteLength&&a!==e.buffer.byteLength)throw new Error("Length in header does not match actual data length: "+a+" != "+e.buffer.byteLength);switch(r){case 1:o=t._unpackBinaryV1Async(e,a);break;case 2:o=t._unpackBinaryV2Async(e,a);break;default:throw new Error("Unsupported version: "+r)}return t._endPerformanceCounter("Unpack Binary"),o})},e.prototype._unpackBinaryV1Async=function(e,t){var n=e.readUint32(),r=e.readUint32();if(0!==r)throw new Error("Unexpected content format: "+r);var o=t-e.byteOffset,a={json:this._parseJson(e.readString(n)),bin:null};if(0!==o){var i=e.byteOffset;a.bin={readAsync:function(t,n){return e.buffer.readAsync(i+t,n)},byteLength:o};}return Promise.resolve(a)},e.prototype._unpackBinaryV2Async=function(e,t){var n=this,r=1313821514,o=5130562,a=e.readUint32();if(e.readUint32()!==r)throw new Error("First chunk format is not JSON");return e.byteOffset+a===t?e.loadAsync(a).then(function(){return {json:n._parseJson(e.readString(a)),bin:null}}):e.loadAsync(a+8).then(function(){var i={json:n._parseJson(e.readString(a)),bin:null},s=function(){var n=e.readUint32();switch(e.readUint32()){case r:throw new Error("Unexpected JSON chunk");case o:var a=e.byteOffset;i.bin={readAsync:function(t,n){return e.buffer.readAsync(a+t,n)},byteLength:n},e.skipBytes(n);break;default:e.skipBytes(n);}return e.byteOffset!==t?e.loadAsync(8).then(s):Promise.resolve(i)};return s()})},e._parseVersion=function(e){if("1.0"===e||"1.0.1"===e)return {major:1,minor:0};var t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null},e._compareVersion=function(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0},e.prototype._logOpen=function(e){this._log(e),this._logIndentLevel++;},e.prototype._logClose=function(){--this._logIndentLevel;},e.prototype._logEnabled=function(t){var n=e._logSpaces.substr(0,2*this._logIndentLevel);i.Logger.Log(""+n+t);},e.prototype._logDisabled=function(e){},e.prototype._startPerformanceCounterEnabled=function(e){i.Tools.StartPerformanceCounter(e);},e.prototype._startPerformanceCounterDisabled=function(e){},e.prototype._endPerformanceCounterEnabled=function(e){i.Tools.EndPerformanceCounter(e);},e.prototype._endPerformanceCounterDisabled=function(e){},e.IncrementalLoading=!0,e.HomogeneousCoordinates=!1,e._logSpaces="                                ",e}();i.SceneLoader&&i.SceneLoader.RegisterPlugin(new l);},function(e,t,n){n.r(t),n.d(t,"GLTFValidation",function(){return a});var r=n(0);function o(e,t,n,r){var o={externalResourceFunction:function(e){return r(e).then(function(e){return new Uint8Array(e)})}};return n&&(o.uri="file:"===t?n:t+n),e instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(e),o):GLTFValidator.validateString(e,o)}var a=function(){function e(){}return e.ValidateAsync=function(e,t,n,a){var i=this;return "function"==typeof Worker?new Promise(function(s,l){var u=o+"("+function(){var e=[];onmessage=function(t){var n=t.data;switch(n.id){case"init":importScripts(n.url);break;case"validate":o(n.data,n.rootUrl,n.fileName,function(t){return new Promise(function(n,r){var o=e.length;e.push({resolve:n,reject:r}),postMessage({id:"getExternalResource",index:o,uri:t});})}).then(function(e){postMessage({id:"validate.resolve",value:e});},function(e){postMessage({id:"validate.reject",reason:e});});break;case"getExternalResource.resolve":e[n.index].resolve(n.value);break;case"getExternalResource.reject":e[n.index].reject(n.reason);}};}+")()",c=URL.createObjectURL(new Blob([u],{type:"application/javascript"})),f=new Worker(c),d=function(e){f.removeEventListener("error",d),f.removeEventListener("message",h),l(e);},h=function(e){var t=e.data;switch(t.id){case"getExternalResource":a(t.uri).then(function(e){f.postMessage({id:"getExternalResource.resolve",index:t.index,value:e},[e]);},function(e){f.postMessage({id:"getExternalResource.reject",index:t.index,reason:e});});break;case"validate.resolve":f.removeEventListener("error",d),f.removeEventListener("message",h),s(t.value);break;case"validate.reject":f.removeEventListener("error",d),f.removeEventListener("message",h),l(t.reason);}};f.addEventListener("error",d),f.addEventListener("message",h),f.postMessage({id:"init",url:r.Tools.GetAbsoluteUrl(i.Configuration.url)}),f.postMessage({id:"validate",data:e,rootUrl:t,fileName:n});}):(this._LoadScriptPromise||(this._LoadScriptPromise=r.Tools.LoadScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then(function(){return o(e,t,n,a)}))},e.Configuration={url:"https://preview.babylonjs.com/gltf_validator.js"},e}();},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")();}catch(e){"object"==typeof window&&(n=window);}e.exports=n;},function(e,t,n){n.r(t);var r=n(0),o=n(1),a="EXT_lights_image_based",i=function(){function e(e){this.name=a,this._loader=e,this.enabled=this._loader.isExtensionUsed(a);}return e.prototype.dispose=function(){delete this._loader,delete this._lights;},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights;}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t)),n._loader.logOpen(""+r);var s=o.a.Get(r+"/light",n._lights,a.light);return i.push(n._loadLightAsync("#/extensions/"+n.name+"/lights/"+a.light,s).then(function(e){n._loader.babylonScene.environmentTexture=e;})),n._loader.logClose(),Promise.all(i).then(function(){})})},e.prototype._loadLightAsync=function(e,t){var n=this;if(!t._loaded){var a=new Array;this._loader.logOpen(""+e);for(var i=new Array(t.specularImages.length),s=function(n){var r=t.specularImages[n];i[n]=new Array(r.length);for(var s=function(t){var s=e+"/specularImages/"+n+"/"+t;l._loader.logOpen(""+s);var u=r[t],c=o.a.Get(s,l._loader.gltf.images,u);a.push(l._loader.loadImageAsync("#/images/"+u,c).then(function(e){i[n][t]=e;})),l._loader.logClose();},u=0;u<r.length;u++)s(u);},l=this,u=0;u<t.specularImages.length;u++)s(u);this._loader.logClose(),t._loaded=Promise.all(a).then(function(){var e=new r.RawCubeTexture(n._loader.babylonScene,null,t.specularImageSize);if(t._babylonTexture=e,null!=t.intensity&&(e.level=t.intensity),t.rotation){var o=r.Quaternion.FromArray(t.rotation);n._loader.babylonScene.useRightHandedSystem||(o=r.Quaternion.Inverse(o)),r.Matrix.FromQuaternionToRef(o,e.getReflectionTextureMatrix());}var a=r.SphericalHarmonics.FromArray(t.irradianceCoefficients);a.scaleInPlace(t.intensity),a.convertIrradianceToLambertianRadiance();var s=r.SphericalPolynomial.FromHarmonics(a),l=(i.length-1)/r.Scalar.Log2(t.specularImageSize);return e.updateRGBDAsync(i,s,l)});}return t._loaded.then(function(){return t._babylonTexture})},e}();o.b.RegisterExtension(a,function(e){return new i(e)});var s="KHR_draco_mesh_compression",l=function(){function e(e){this.name=s,this._loader=e,this.enabled=r.DracoCompression.DecoderAvailable&&this._loader.isExtensionUsed(s);}return e.prototype.dispose=function(){delete this.dracoCompression,delete this._loader;},e.prototype._loadVertexDataAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){if(null!=t.mode){if(5!==t.mode&&4!==t.mode)throw new Error(e+": Unsupported mode "+t.mode);if(5===t.mode)throw new Error(e+": Mode "+t.mode+" is not currently supported")}var l={},u=function(e,t){var r=s.attributes[e];null!=r&&(n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(t)&&n._delayInfo.push(t),l[t]=r);};u("POSITION",r.VertexBuffer.PositionKind),u("NORMAL",r.VertexBuffer.NormalKind),u("TANGENT",r.VertexBuffer.TangentKind),u("TEXCOORD_0",r.VertexBuffer.UVKind),u("TEXCOORD_1",r.VertexBuffer.UV2Kind),u("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),u("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),u("COLOR_0",r.VertexBuffer.ColorKind);var c=o.a.Get(i,a._loader.gltf.bufferViews,s.bufferView);return c._dracoBabylonGeometry||(c._dracoBabylonGeometry=a._loader.loadBufferViewAsync("#/bufferViews/"+c.index,c).then(function(t){return (a.dracoCompression||r.DracoCompression.Default).decodeMeshAsync(t,l).then(function(e){var t=new r.Geometry(n.name,a._loader.babylonScene);return e.applyToGeometry(t),t}).catch(function(t){throw new Error(e+": "+t.message)})})),c._dracoBabylonGeometry})},e}();o.b.RegisterExtension(s,function(e){return new l(e)});var u,c="KHR_lights_punctual";!function(e){e.DIRECTIONAL="directional",e.POINT="point",e.SPOT="spot";}(u||(u={}));var f=function(){function e(e){this.name=c,this._loader=e,this.enabled=this._loader.isExtensionUsed(c);}return e.prototype.dispose=function(){delete this._loader,delete this._lights;},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights;}},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){return a._loader.loadNodeAsync(e,t,function(e){var t,l=o.a.Get(i,a._lights,s.light),c=l.name||e.name;switch(a._loader.babylonScene._blockEntityCollection=a._loader._forAssetContainer,l.type){case u.DIRECTIONAL:t=new r.DirectionalLight(c,r.Vector3.Backward(),a._loader.babylonScene);break;case u.POINT:t=new r.PointLight(c,r.Vector3.Zero(),a._loader.babylonScene);break;case u.SPOT:var f=new r.SpotLight(c,r.Vector3.Zero(),r.Vector3.Backward(),0,1,a._loader.babylonScene);f.angle=2*(l.spot&&l.spot.outerConeAngle||Math.PI/4),f.innerAngle=2*(l.spot&&l.spot.innerConeAngle||0),t=f;break;default:throw a._loader.babylonScene._blockEntityCollection=!1,new Error(i+": Invalid light type ("+l.type+")")}a._loader.babylonScene._blockEntityCollection=!1,t.falloffType=r.Light.FALLOFF_GLTF,t.diffuse=l.color?r.Color3.FromArray(l.color):r.Color3.White(),t.intensity=null==l.intensity?1:l.intensity,t.range=null==l.range?Number.MAX_VALUE:l.range,t.parent=e,a._loader._babylonLights.push(t),o.b.AddPointerMetadata(t,i),n(e);})})},e}();o.b.RegisterExtension(c,function(e){return new f(e)});var d="KHR_materials_pbrSpecularGlossiness",h=function(){function e(e){this.name=d,this.order=200,this._loader=e,this.enabled=this._loader.isExtensionUsed(d);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loadSpecularGlossinessPropertiesAsync(o,t,a,n)),r._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(i).then(function(){})})},e.prototype._loadSpecularGlossinessPropertiesAsync=function(e,t,n,o){if(!(o instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=new Array;return o.metallic=null,o.roughness=null,n.diffuseFactor?(o.albedoColor=r.Color3.FromArray(n.diffuseFactor),o.alpha=n.diffuseFactor[3]):o.albedoColor=r.Color3.White(),o.reflectivityColor=n.specularFactor?r.Color3.FromArray(n.specularFactor):r.Color3.White(),o.microSurface=null==n.glossinessFactor?1:n.glossinessFactor,n.diffuseTexture&&a.push(this._loader.loadTextureInfoAsync(e+"/diffuseTexture",n.diffuseTexture,function(e){e.name=o.name+" (Diffuse)",o.albedoTexture=e;})),n.specularGlossinessTexture&&(a.push(this._loader.loadTextureInfoAsync(e+"/specularGlossinessTexture",n.specularGlossinessTexture,function(e){e.name=o.name+" (Specular Glossiness)",o.reflectivityTexture=e;})),o.reflectivityTexture.hasAlpha=!0,o.useMicroSurfaceFromReflectivityMapAlpha=!0),Promise.all(a).then(function(){})},e}();o.b.RegisterExtension(d,function(e){return new h(e)});var p="KHR_materials_unlit",m=function(){function e(e){this.name=p,this.order=210,this._loader=e,this.enabled=this._loader.isExtensionUsed(p);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(){return r._loadUnlitPropertiesAsync(e,t,n)})},e.prototype._loadUnlitPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;n.unlit=!0;var a=t.pbrMetallicRoughness;return a&&(a.baseColorFactor?(n.albedoColor=r.Color3.FromArray(a.baseColorFactor),n.alpha=a.baseColorFactor[3]):n.albedoColor=r.Color3.White(),a.baseColorTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/baseColorTexture",a.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e;}))),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),this._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(p,function(e){return new m(e)});var _="KHR_materials_clearcoat",y=function(){function e(e){this.name=_,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(_);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadClearCoatPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadClearCoatPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.clearCoat.isEnabled=!0,null!=t.clearcoatFactor?n.clearCoat.intensity=t.clearcoatFactor:n.clearCoat.intensity=0,t.clearcoatTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatTexture",t.clearcoatTexture,function(e){e.name=n.name+" (ClearCoat Intensity)",n.clearCoat.texture=e;})),null!=t.clearcoatRoughnessFactor?n.clearCoat.roughness=t.clearcoatRoughnessFactor:n.clearCoat.roughness=0,t.clearcoatRoughnessTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatRoughnessTexture",t.clearcoatRoughnessTexture,function(e){e.name=n.name+" (ClearCoat Roughness)",n.clearCoat.texture=e;})),t.clearcoatNormalTexture&&(o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatNormalTexture",t.clearcoatNormalTexture,function(e){e.name=n.name+" (ClearCoat Normal)",n.clearCoat.bumpTexture=e;})),n.invertNormalMapX=!n.getScene().useRightHandedSystem,n.invertNormalMapY=n.getScene().useRightHandedSystem,null!=t.clearcoatNormalTexture.scale&&(n.clearCoat.bumpTexture.level=t.clearcoatNormalTexture.scale)),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(_,function(e){return new y(e)});var b="KHR_materials_sheen",v=function(){function e(e){this.name=b,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(b);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSheenPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSheenPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.sheen.isEnabled=!0,null!=t.intensityFactor?n.sheen.intensity=t.intensityFactor:n.sheen.intensity=0,null!=t.colorFactor&&(n.sheen.color=r.Color3.FromArray(t.colorFactor)),t.colorIntensityTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/sheenTexture",t.colorIntensityTexture,function(e){e.name=n.name+" (Sheen Intensity)",n.sheen.texture=e;})),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(b,function(e){return new v(e)});var A="KHR_materials_specular",g=function(){function e(e){this.name=A,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(A);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSpecularPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSpecularPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");return void 0!==t.specularFactor&&(n.metallicF0Factor=t.specularFactor),t.specularTexture&&(n.useMetallicF0FactorFromMetallicTexture=!0),Promise.resolve()},e}();o.b.RegisterExtension(A,function(e){return new g(e)});var T="KHR_mesh_quantization",x=function(){function e(e){this.name=T,this.enabled=e.isExtensionUsed(T);}return e.prototype.dispose=function(){},e}();o.b.RegisterExtension(T,function(e){return new x(e)});var E="KHR_texture_basisu",L=function(){function e(e){this.name=E,this._loader=e,this.enabled=e.isExtensionUsed(E);}return e.prototype.dispose=function(){delete this._loader;},e.prototype._loadTextureAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(a,i){var s=null==t.sampler?o.b.DefaultSampler:o.a.Get(e+"/sampler",r._loader.gltf.samplers,t.sampler),l=o.a.Get(a+"/source",r._loader.gltf.images,i.source);return r._loader._createTextureAsync(e,s,l,function(e){e.gammaSpace=!1,n(e);})})},e}();o.b.RegisterExtension(E,function(e){return new L(e)});var O="KHR_texture_transform",M=function(){function e(e){this.name=O,this._loader=e,this.enabled=this._loader.isExtensionUsed(O);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadTextureInfoAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,i){return a._loader.loadTextureInfoAsync(e,t,function(e){if(!(e instanceof r.Texture))throw new Error(o+": Texture type not supported");i.offset&&(e.uOffset=i.offset[0],e.vOffset=i.offset[1]),e.uRotationCenter=0,e.vRotationCenter=0,i.rotation&&(e.wAng=-i.rotation),i.scale&&(e.uScale=i.scale[0],e.vScale=i.scale[1]),null!=i.texCoord&&(e.coordinatesIndex=i.texCoord),n(e);})})},e}();o.b.RegisterExtension(O,function(e){return new M(e)});var S="MSFT_audio_emitter",w=function(){function e(e){this.name=S,this._loader=e,this.enabled=this._loader.isExtensionUsed(S);}return e.prototype.dispose=function(){delete this._loader,delete this._clips,delete this._emitters;},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._clips=t.clips,this._emitters=t.emitters,o.a.Assign(this._clips),o.a.Assign(this._emitters);}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t));for(var s=0,l=a.emitters;s<l.length;s++){var u=l[s],c=o.a.Get(r+"/emitters",n._emitters,u);if(null!=c.refDistance||null!=c.maxDistance||null!=c.rolloffFactor||null!=c.distanceModel||null!=c.innerAngle||null!=c.outerAngle)throw new Error(r+": Direction or Distance properties are not allowed on emitters attached to a scene");i.push(n._loadEmitterAsync(r+"/emitters/"+c.index,c));}return Promise.all(i).then(function(){})})},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,i){var s=new Array;return a._loader.loadNodeAsync(e,t,function(t){for(var l=function(n){var i=o.a.Get(e+"/emitters",a._emitters,n);s.push(a._loadEmitterAsync(e+"/emitters/"+i.index,i).then(function(){for(var e=0,n=i._babylonSounds;e<n.length;e++){var o=n[e];o.attachToMesh(t),null==i.innerAngle&&null==i.outerAngle||(o.setLocalDirectionToMesh(r.Vector3.Forward()),o.setDirectionalCone(2*r.Tools.ToDegrees(null==i.innerAngle?Math.PI:i.innerAngle),2*r.Tools.ToDegrees(null==i.outerAngle?Math.PI:i.outerAngle),0));}}));},u=0,c=i.emitters;u<c.length;u++){l(c[u]);}n(t);}).then(function(e){return Promise.all(s).then(function(){return e})})})},e.prototype.loadAnimationAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){return n._loader.loadAnimationAsync(e,t).then(function(i){var s=new Array;o.a.Assign(a.events);for(var l=0,u=a.events;l<u.length;l++){var c=u[l];s.push(n._loadAnimationEventAsync(r+"/events/"+c.index,e,t,c,i));}return Promise.all(s).then(function(){return i})})})},e.prototype._loadClipAsync=function(e,t){if(t._objectURL)return t._objectURL;var n;if(t.uri)n=this._loader.loadUriAsync(e,t,t.uri);else {var r=o.a.Get(e+"/bufferView",this._loader.gltf.bufferViews,t.bufferView);n=this._loader.loadBufferViewAsync("#/bufferViews/"+r.index,r);}return t._objectURL=n.then(function(e){return URL.createObjectURL(new Blob([e],{type:t.mimeType}))}),t._objectURL},e.prototype._loadEmitterAsync=function(e,t){var n=this;if(t._babylonSounds=t._babylonSounds||[],!t._babylonData){for(var a=new Array,i=t.name||"emitter"+t.index,s={loop:!1,autoplay:!1,volume:null==t.volume?1:t.volume},l=function(e){var l="#/extensions/"+u.name+"/clips",c=o.a.Get(l,u._clips,t.clips[e].clip);a.push(u._loadClipAsync(l+"/"+t.clips[e].clip,c).then(function(o){var a=t._babylonSounds[e]=new r.Sound(i,o,n._loader.babylonScene,null,s);a.refDistance=t.refDistance||1,a.maxDistance=t.maxDistance||256,a.rolloffFactor=t.rolloffFactor||1,a.distanceModel=t.distanceModel||"exponential",a._positionInEmitterSpace=!0;}));},u=this,c=0;c<t.clips.length;c++)l(c);var f=Promise.all(a).then(function(){var e=t.clips.map(function(e){return e.weight||1}),n=new r.WeightedSound(t.loop||!1,t._babylonSounds,e);t.innerAngle&&(n.directionalConeInnerAngle=2*r.Tools.ToDegrees(t.innerAngle)),t.outerAngle&&(n.directionalConeOuterAngle=2*r.Tools.ToDegrees(t.outerAngle)),t.volume&&(n.volume=t.volume),t._babylonData.sound=n;});t._babylonData={loaded:f};}return t._babylonData.loaded},e.prototype._getEventAction=function(e,t,n,r,o){switch(n){case"play":return function(e){var n=(o||0)+(e-r);t.play(n);};case"stop":return function(e){t.stop();};case"pause":return function(e){t.pause();};default:throw new Error(e+": Unsupported action "+n)}},e.prototype._loadAnimationEventAsync=function(e,t,n,a,i){var s=this;if(0==i.targetedAnimations.length)return Promise.resolve();var l=i.targetedAnimations[0],u=a.emitter,c=o.a.Get("#/extensions/"+this.name+"/emitters",this._emitters,u);return this._loadEmitterAsync(e,c).then(function(){var t=c._babylonData.sound;if(t){var n=new r.AnimationEvent(a.time,s._getEventAction(e,t,a.action,a.time,a.startOffset));l.animation.addEvent(n),i.onAnimationGroupEndObservable.add(function(){t.stop();}),i.onAnimationGroupPauseObservable.add(function(){t.pause();});}})},e}();o.b.RegisterExtension(S,function(e){return new w(e)});var C="MSFT_lod",N=function(){function e(e){this.name=C,this.order=100,this.maxLODsToLoad=10,this.onNodeLODsLoadedObservable=new r.Observable,this.onMaterialLODsLoadedObservable=new r.Observable,this._nodeIndexLOD=null,this._nodeSignalLODs=new Array,this._nodePromiseLODs=new Array,this._materialIndexLOD=null,this._materialSignalLODs=new Array,this._materialPromiseLODs=new Array,this._indexLOD=null,this._bufferLODs=new Array,this._loader=e,this.enabled=this._loader.isExtensionUsed(C);}return e.prototype.dispose=function(){delete this._loader,this._nodeIndexLOD=null,this._nodeSignalLODs.length=0,this._nodePromiseLODs.length=0,this._materialIndexLOD=null,this._materialSignalLODs.length=0,this._materialPromiseLODs.length=0,this._indexLOD=null,this._bufferLODs.length=0,this.onMaterialLODsLoadedObservable.clear(),this.onNodeLODsLoadedObservable.clear();},e.prototype.onReady=function(){for(var e=this,t=function(t){var r=Promise.all(n._nodePromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Node LOD "+t),e._loader.log("Loaded node LOD "+t),e.onNodeLODsLoadedObservable.notifyObservers(t),t!==e._nodePromiseLODs.length-1&&(e._loader.startPerformanceCounter("Node LOD "+(t+1)),e._nodeSignalLODs[t]&&e._nodeSignalLODs[t].resolve());});n._loader._completePromises.push(r);},n=this,r=0;r<this._nodePromiseLODs.length;r++)t(r);var o=function(t){var n=Promise.all(a._materialPromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Material LOD "+t),e._loader.log("Loaded material LOD "+t),e.onMaterialLODsLoadedObservable.notifyObservers(t),t!==e._materialPromiseLODs.length-1&&(e._loader.startPerformanceCounter("Material LOD "+(t+1)),e._materialSignalLODs[t]&&e._materialSignalLODs[t].resolve());});a._loader._completePromises.push(n);},a=this;for(r=0;r<this._materialPromiseLODs.length;r++)o(r);for(r=1;r<this._bufferLODs.length;r++)this._loadBufferLOD(r);},e.prototype.loadSceneAsync=function(e,t){var n=this._loader.loadSceneAsync(e,t);return 0!==this._bufferLODs.length&&this._loadBufferLOD(0),n},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,n){var o,i=a._getLODs(e,t,a._loader.gltf.nodes,n.ids);a._loader.logOpen(""+e);for(var s=function(e){var t=i[e];a._indexLOD=e,0!==e&&(a._nodeIndexLOD=e,a._nodeSignalLODs[e]=a._nodeSignalLODs[e]||new r.Deferred);var n=a._loader.loadNodeAsync("#/nodes/"+t.index,t,function(e){e.setEnabled(!1);}).then(function(t){if(0!==e){var n=i[e-1];n._babylonTransformNode&&(a._disposeTransformNode(n._babylonTransformNode),delete n._babylonTransformNode);}return t.setEnabled(!0),t});0===e?o=n:a._nodeIndexLOD=null,a._indexLOD=null,a._nodePromiseLODs[e]=a._nodePromiseLODs[e]||[],a._nodePromiseLODs[e].push(n);},l=0;l<i.length;l++)s(l);return a._loader.logClose(),o})},e.prototype._loadMaterialAsync=function(e,t,n,r,a){var i=this;return this._indexLOD?null:o.b.LoadExtensionAsync(e,t,this.name,function(e,o){var s,l=i._getLODs(e,t,i._loader.gltf.materials,o.ids);i._loader.logOpen(""+e);for(var u=function(e){var t=l[e];i._indexLOD=e,0!==e&&(i._materialIndexLOD=e);var o=i._loader._loadMaterialAsync("#/materials/"+t.index,t,n,r,function(t){0===e&&a(t);}).then(function(t){if(0!==e){a(t);var n=l[e-1]._data;n[r]&&(i._disposeMaterials([n[r].babylonMaterial]),delete n[r]);}return t});0===e?s=o:i._materialIndexLOD=null,i._indexLOD=null,i._materialPromiseLODs[e]=i._materialPromiseLODs[e]||[],i._materialPromiseLODs[e].push(o);},c=0;c<l.length;c++)u(c);return i._loader.logClose(),s})},e.prototype._loadUriAsync=function(e,t,n){var o=this;if(null!==this._materialIndexLOD){this._loader.log("deferred");var a=this._materialIndexLOD-1;return this._materialSignalLODs[a]=this._materialSignalLODs[a]||new r.Deferred,this._materialSignalLODs[a].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}if(null!==this._nodeIndexLOD){this._loader.log("deferred");a=this._nodeIndexLOD-1;return this._nodeSignalLODs[a]=this._nodeSignalLODs[a]||new r.Deferred,this._nodeSignalLODs[this._nodeIndexLOD-1].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}return null},e.prototype.loadBufferAsync=function(e,t,n,o){if(this._loader.parent.useRangeRequests&&!t.uri){if(!this._loader.bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");var a=this._indexLOD||0,i=n,s=i+o-1,l=this._bufferLODs[a];return l?(l.start=Math.min(l.start,i),l.end=Math.max(l.end,s)):(l={start:i,end:s,loaded:new r.Deferred},this._bufferLODs[a]=l),l.loaded.promise.then(function(e){return new Uint8Array(e.buffer,e.byteOffset+n-l.start,o)})}return null},e.prototype._loadBufferLOD=function(e){var t=this._bufferLODs[e];this._loader.bin.readAsync(t.start,t.end-t.start+1).then(function(e){t.loaded.resolve(e);},function(e){t.loaded.reject(e);});},e.prototype._getLODs=function(e,t,n,r){if(this.maxLODsToLoad<=0)throw new Error("maxLODsToLoad must be greater than zero");for(var a=new Array,i=r.length-1;i>=0;i--)if(a.push(o.a.Get(e+"/ids/"+r[i],n,r[i])),a.length===this.maxLODsToLoad)return a;return a.push(t),a},e.prototype._disposeTransformNode=function(e){var t=this,n=new Array,r=e.material;r&&n.push(r);for(var o=0,a=e.getChildMeshes();o<a.length;o++){var i=a[o];i.material&&n.push(i.material);}e.dispose();var s=n.filter(function(e){return t._loader.babylonScene.meshes.every(function(t){return t.material!=e})});this._disposeMaterials(s);},e.prototype._disposeMaterials=function(e){for(var t={},n=0,r=e;n<r.length;n++){for(var o=0,a=(c=r[n]).getActiveTextures();o<a.length;o++){var i=a[o];t[i.uniqueId]=i;}c.dispose();}for(var s in t)for(var l=0,u=this._loader.babylonScene.materials;l<u.length;l++){var c;(c=u[l]).hasTexture(t[s])&&delete t[s];}for(var s in t)t[s].dispose();},e}();o.b.RegisterExtension(C,function(e){return new N(e)});var P="MSFT_minecraftMesh",R=function(){function e(e){this.name=P,this._loader=e,this.enabled=this._loader.isExtensionUsed(P);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.needAlphaBlending()&&(n.forceDepthWrite=!0,n.separateCullingPass=!0),n.backFaceCulling=n.forceDepthWrite,n.twoSidedLighting=!0,s}return null})},e}();o.b.RegisterExtension(P,function(e){return new R(e)});var I="MSFT_sRGBFactors",F=function(){function e(e){this.name=I,this._loader=e,this.enabled=this._loader.isExtensionUsed(I);}return e.prototype.dispose=function(){delete this._loader;},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.albedoTexture||n.albedoColor.toLinearSpaceToRef(n.albedoColor),n.reflectivityTexture||n.reflectivityColor.toLinearSpaceToRef(n.reflectivityColor),s}return null})},e}();o.b.RegisterExtension(I,function(e){return new F(e)});var V="ExtrasAsMetadata",B=function(){function e(e){this.name=V,this.enabled=!0,this._loader=e;}return e.prototype._assignExtras=function(e,t){if(t.extras&&Object.keys(t.extras).length>0){var n=e.metadata=e.metadata||{};(n.gltf=n.gltf||{}).extras=t.extras;}},e.prototype.dispose=function(){delete this._loader;},e.prototype.loadNodeAsync=function(e,t,n){var r=this;return this._loader.loadNodeAsync(e,t,function(e){r._assignExtras(e,t),n(e);})},e.prototype.loadCameraAsync=function(e,t,n){var r=this;return this._loader.loadCameraAsync(e,t,function(e){r._assignExtras(e,t),n(e);})},e.prototype.createMaterial=function(e,t,n){var r=this._loader.createMaterial(e,t,n);return this._assignExtras(r,t),r},e}();o.b.RegisterExtension(V,function(e){return new B(e)}),n.d(t,"EXT_lights_image_based",function(){return i}),n.d(t,"KHR_draco_mesh_compression",function(){return l}),n.d(t,"KHR_lights",function(){return f}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return h}),n.d(t,"KHR_materials_unlit",function(){return m}),n.d(t,"KHR_materials_clearcoat",function(){return y}),n.d(t,"KHR_materials_sheen",function(){return v}),n.d(t,"KHR_materials_specular",function(){return g}),n.d(t,"KHR_mesh_quantization",function(){return x}),n.d(t,"KHR_texture_basisu",function(){return L}),n.d(t,"KHR_texture_transform",function(){return M}),n.d(t,"MSFT_audio_emitter",function(){return w}),n.d(t,"MSFT_lod",function(){return N}),n.d(t,"MSFT_minecraftMesh",function(){return R}),n.d(t,"MSFT_sRGBFactors",function(){return F}),n.d(t,"ExtrasAsMetadata",function(){return B});},function(e,t,n){n.r(t);var r=n(1);n.d(t,"ArrayItem",function(){return r.a}),n.d(t,"GLTFLoader",function(){return r.b});var o=n(5);n.d(t,"EXT_lights_image_based",function(){return o.EXT_lights_image_based}),n.d(t,"KHR_draco_mesh_compression",function(){return o.KHR_draco_mesh_compression}),n.d(t,"KHR_lights",function(){return o.KHR_lights}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return o.KHR_materials_pbrSpecularGlossiness}),n.d(t,"KHR_materials_unlit",function(){return o.KHR_materials_unlit}),n.d(t,"KHR_materials_clearcoat",function(){return o.KHR_materials_clearcoat}),n.d(t,"KHR_materials_sheen",function(){return o.KHR_materials_sheen}),n.d(t,"KHR_materials_specular",function(){return o.KHR_materials_specular}),n.d(t,"KHR_mesh_quantization",function(){return o.KHR_mesh_quantization}),n.d(t,"KHR_texture_basisu",function(){return o.KHR_texture_basisu}),n.d(t,"KHR_texture_transform",function(){return o.KHR_texture_transform}),n.d(t,"MSFT_audio_emitter",function(){return o.MSFT_audio_emitter}),n.d(t,"MSFT_lod",function(){return o.MSFT_lod}),n.d(t,"MSFT_minecraftMesh",function(){return o.MSFT_minecraftMesh}),n.d(t,"MSFT_sRGBFactors",function(){return o.MSFT_sRGBFactors}),n.d(t,"ExtrasAsMetadata",function(){return o.ExtrasAsMetadata});},function(e,t,n){n.r(t);
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var r=function(e,t){return (r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);})(e,t)};function o(e,t){function n(){this.constructor=e;}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}var a,i,s,l,u,c,f,d;!function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.FLOAT=5126]="FLOAT";}(a||(a={})),function(e){e[e.FRAGMENT=35632]="FRAGMENT",e[e.VERTEX=35633]="VERTEX";}(i||(i={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D";}(s||(s={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.REPEAT=10497]="REPEAT";}(l||(l={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9728]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR";}(u||(u={})),function(e){e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA";}(c||(c={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK";}(f||(f={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE";}(d||(d={}));var h,p=n(0),m=function(){function e(){}return e.SetMatrix=function(e,t,n,r,o){var a=null;if("MODEL"===n.semantic?a=t.getWorldMatrix():"PROJECTION"===n.semantic?a=e.getProjectionMatrix():"VIEW"===n.semantic?a=e.getViewMatrix():"MODELVIEWINVERSETRANSPOSE"===n.semantic?a=p.Matrix.Transpose(t.getWorldMatrix().multiply(e.getViewMatrix()).invert()):"MODELVIEW"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()):"MODELVIEWPROJECTION"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()):"MODELINVERSE"===n.semantic?a=t.getWorldMatrix().invert():"VIEWINVERSE"===n.semantic?a=e.getViewMatrix().invert():"PROJECTIONINVERSE"===n.semantic?a=e.getProjectionMatrix().invert():"MODELVIEWINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()).invert():"MODELVIEWPROJECTIONINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()).invert():"MODELINVERSETRANSPOSE"===n.semantic&&(a=p.Matrix.Transpose(t.getWorldMatrix().invert())),a)switch(n.type){case s.FLOAT_MAT2:o.setMatrix2x2(r,p.Matrix.GetAsMatrix2x2(a));break;case s.FLOAT_MAT3:o.setMatrix3x3(r,p.Matrix.GetAsMatrix3x3(a));break;case s.FLOAT_MAT4:o.setMatrix(r,a);}},e.SetUniform=function(e,t,n,r){switch(r){case s.FLOAT:return e.setFloat(t,n),!0;case s.FLOAT_VEC2:return e.setVector2(t,p.Vector2.FromArray(n)),!0;case s.FLOAT_VEC3:return e.setVector3(t,p.Vector3.FromArray(n)),!0;case s.FLOAT_VEC4:return e.setVector4(t,p.Vector4.FromArray(n)),!0;default:return !1}},e.GetWrapMode=function(e){switch(e){case l.CLAMP_TO_EDGE:return p.Texture.CLAMP_ADDRESSMODE;case l.MIRRORED_REPEAT:return p.Texture.MIRROR_ADDRESSMODE;case l.REPEAT:default:return p.Texture.WRAP_ADDRESSMODE}},e.GetByteStrideFromType=function(e){switch(e.type){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:return 1}},e.GetTextureFilterMode=function(e){switch(e){case u.LINEAR:case u.LINEAR_MIPMAP_NEAREST:case u.LINEAR_MIPMAP_LINEAR:return p.Texture.TRILINEAR_SAMPLINGMODE;case u.NEAREST:case u.NEAREST_MIPMAP_NEAREST:return p.Texture.NEAREST_SAMPLINGMODE;default:return p.Texture.BILINEAR_SAMPLINGMODE}},e.GetBufferFromBufferView=function(e,t,n,r,o){n=t.byteOffset+n;var i=e.loadedBufferViews[t.buffer];if(n+r>i.byteLength)throw new Error("Buffer access is out of range");var s=i.buffer;switch(n+=i.byteOffset,o){case a.BYTE:return new Int8Array(s,n,r);case a.UNSIGNED_BYTE:return new Uint8Array(s,n,r);case a.SHORT:return new Int16Array(s,n,r);case a.UNSIGNED_SHORT:return new Uint16Array(s,n,r);default:return new Float32Array(s,n,r)}},e.GetBufferFromAccessor=function(t,n){var r=t.bufferViews[n.bufferView],o=n.count*e.GetByteStrideFromType(n);return e.GetBufferFromBufferView(t,r,n.byteOffset,o,n.componentType)},e.DecodeBufferToText=function(e){for(var t="",n=e.byteLength,r=0;r<n;++r)t+=String.fromCharCode(e[r]);return t},e.GetDefaultMaterial=function(t){if(!e._DefaultMaterial){p.Effect.ShadersStore.GLTFDefaultMaterialVertexShader=["precision highp float;","","uniform mat4 worldView;","uniform mat4 projection;","","attribute vec3 position;","","void main(void)","{","    gl_Position = projection * worldView * vec4(position, 1.0);","}"].join("\n"),p.Effect.ShadersStore.GLTFDefaultMaterialPixelShader=["precision highp float;","","uniform vec4 u_emission;","","void main(void)","{","    gl_FragColor = u_emission;","}"].join("\n");var n={attributes:["position"],uniforms:["worldView","projection","u_emission"],samplers:new Array,needAlphaBlending:!1};e._DefaultMaterial=new p.ShaderMaterial("GLTFDefaultMaterial",t,{vertex:"GLTFDefaultMaterial",fragment:"GLTFDefaultMaterial"},n),e._DefaultMaterial.setColor4("u_emission",new p.Color4(.5,.5,.5,1));}return e._DefaultMaterial},e._DefaultMaterial=null,e}(),_=n(2);!function(e){e[e.IDENTIFIER=1]="IDENTIFIER",e[e.UNKNOWN=2]="UNKNOWN",e[e.END_OF_INPUT=3]="END_OF_INPUT";}(h||(h={}));var y=function(){function e(e){this._pos=0,this.currentToken=h.UNKNOWN,this.currentIdentifier="",this.currentString="",this.isLetterOrDigitPattern=/^[a-zA-Z0-9]+$/,this._toParse=e,this._maxPos=e.length;}return e.prototype.getNextToken=function(){if(this.isEnd())return h.END_OF_INPUT;if(this.currentString=this.read(),this.currentToken=h.UNKNOWN,"_"===this.currentString||this.isLetterOrDigitPattern.test(this.currentString))for(this.currentToken=h.IDENTIFIER,this.currentIdentifier=this.currentString;!this.isEnd()&&(this.isLetterOrDigitPattern.test(this.currentString=this.peek())||"_"===this.currentString);)this.currentIdentifier+=this.currentString,this.forward();return this.currentToken},e.prototype.peek=function(){return this._toParse[this._pos]},e.prototype.read=function(){return this._toParse[this._pos++]},e.prototype.forward=function(){this._pos++;},e.prototype.isEnd=function(){return this._pos>=this._maxPos},e}(),b=["MODEL","VIEW","PROJECTION","MODELVIEW","MODELVIEWPROJECTION","JOINTMATRIX"],v=["world","view","projection","worldView","worldViewProjection","mBones"],A=["translation","rotation","scale"],g=["position","rotationQuaternion","scaling"],T=function(e,t,n){for(var r in e){var o=e[r];n[t][r]=o;}},x=function(e){if(e)for(var t=0;t<e.length/2;t++)e[2*t+1]=1-e[2*t+1];},E=function(e){if("NORMAL"===e.semantic)return "normal";if("POSITION"===e.semantic)return "position";if("JOINT"===e.semantic)return "matricesIndices";if("WEIGHT"===e.semantic)return "matricesWeights";if("COLOR"===e.semantic)return "color";if(e.semantic&&-1!==e.semantic.indexOf("TEXCOORD_")){var t=Number(e.semantic.split("_")[1]);return "uv"+(0===t?"":t+1)}return null},L=function(e){var t=null;if(e.translation||e.rotation||e.scale){var n=p.Vector3.FromArray(e.scale||[1,1,1]),r=p.Quaternion.FromArray(e.rotation||[0,0,0,1]),o=p.Vector3.FromArray(e.translation||[0,0,0]);t=p.Matrix.Compose(n,r,o);}else t=p.Matrix.FromArray(e.matrix);return t},O=function(e,t,n,r){for(var o=0;o<r.bones.length;o++)if(r.bones[o].name===n)return r.bones[o];var a=e.nodes;for(var i in a){var s=a[i];if(s.jointName){var l=s.children;for(o=0;o<l.length;o++){var u=e.nodes[l[o]];if(u.jointName&&u.jointName===n){var c=L(s),f=new p.Bone(s.name||"",r,O(e,t,s.jointName,r),c);return f.id=i,f}}}}return null},M=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.node.children.length;o++){if(r.node.children[o]===t)return r.bone}return null},S=function(e,t){var n=e.nodes,r=n[t];if(r)return {node:r,id:t};for(var o in n)if((r=n[o]).jointName===t)return {node:r,id:o};return null},w=function(e,t){for(var n=0;n<e.jointNames.length;n++)if(e.jointNames[n]===t)return !0;return !1},C=function(e,t,n,r,o){if(r||(r=new p.Skeleton(t.name||"","",e.scene)),!t.babylonSkeleton)return r;var a=[],i=[];!function(e,t,n,r){for(var o in e.nodes){var a=e.nodes[o],i=o;if(a.jointName&&!w(n,a.jointName)){var s=L(a),l=new p.Bone(a.name||"",t,null,s);l.id=i,r.push({bone:l,node:a,id:i});}}for(var u=0;u<r.length;u++)for(var c=r[u],f=c.node.children,d=0;d<f.length;d++){for(var h=null,m=0;m<r.length;m++)if(r[m].id===f[d]){h=r[m];break}h&&(h.bone._parent=c.bone,c.bone.children.push(h.bone));}}(e,r,t,a),r.bones=[];for(var s=0;s<t.jointNames.length;s++){if(A=S(e,t.jointNames[s])){var l=A.node;if(l){o=A.id;var u=e.scene.getBoneByID(o);if(u)r.bones.push(u);else {for(var c=!1,f=null,d=0;d<s;d++){var h=S(e,t.jointNames[d]);if(h){var m=h.node;if(m){var _=m.children;if(_){c=!1;for(var y=0;y<_.length;y++)if(_[y]===o){f=O(e,t,t.jointNames[d],r),c=!0;break}if(c)break}}else p.Tools.Warn("Joint named "+t.jointNames[d]+" does not exist when looking for parent");}}var b=L(l);!f&&a.length>0&&(f=M(a,o))&&-1===i.indexOf(f)&&i.push(f),new p.Bone(l.jointName||"",r,f,b).id=o;}}else p.Tools.Warn("Joint named "+t.jointNames[s]+" does not exist");}}var v=r.bones;r.bones=[];for(s=0;s<t.jointNames.length;s++){var A;if(A=S(e,t.jointNames[s]))for(d=0;d<v.length;d++)if(v[d].id===A.id){r.bones.push(v[d]);break}}r.prepare();for(s=0;s<i.length;s++)r.bones.push(i[s]);return r},N=function(e,t,n,r,o){if(o||(e.scene._blockEntityCollection=e.forAssetContainer,o=new p.Mesh(t.name||"",e.scene),e.scene._blockEntityCollection=!1,o.id=r),!t.babylonNode)return o;for(var a,i=[],s=null,l=new Array,u=new Array,c=new Array,f=new Array,d=0;d<n.length;d++){var h=n[d];if(P=e.meshes[h])for(var y=0;y<P.primitives.length;y++){var b=new p.VertexData,v=P.primitives[y];v.mode;var A=v.attributes,g=null,T=null;for(var E in A)if(g=e.accessors[A[E]],T=m.GetBufferFromAccessor(e,g),"NORMAL"===E)b.normals=new Float32Array(T.length),b.normals.set(T);else if("POSITION"===E){if(_.GLTFFileLoader.HomogeneousCoordinates){b.positions=new Float32Array(T.length-T.length/4);for(var L=0;L<T.length;L+=4)b.positions[L]=T[L],b.positions[L+1]=T[L+1],b.positions[L+2]=T[L+2];}else b.positions=new Float32Array(T.length),b.positions.set(T);u.push(b.positions.length);}else if(-1!==E.indexOf("TEXCOORD_")){var O=Number(E.split("_")[1]),M=p.VertexBuffer.UVKind+(0===O?"":O+1),S=new Float32Array(T.length);S.set(T),x(S),b.set(S,M);}else "JOINT"===E?(b.matricesIndices=new Float32Array(T.length),b.matricesIndices.set(T)):"WEIGHT"===E?(b.matricesWeights=new Float32Array(T.length),b.matricesWeights.set(T)):"COLOR"===E&&(b.colors=new Float32Array(T.length),b.colors.set(T));if(g=e.accessors[v.indices])T=m.GetBufferFromAccessor(e,g),b.indices=new Int32Array(T.length),b.indices.set(T),f.push(b.indices.length);else {var w=[];for(L=0;L<b.positions.length/3;L++)w.push(L);b.indices=new Int32Array(w),f.push(b.indices.length);}s?s.merge(b):s=b;var C=e.scene.getMaterialByID(v.material);i.push(null===C?m.GetDefaultMaterial(e.scene):C),l.push(0===l.length?0:l[l.length-1]+u[u.length-2]),c.push(0===c.length?0:c[c.length-1]+f[f.length-2]);}}e.scene._blockEntityCollection=e.forAssetContainer,i.length>1?(a=new p.MultiMaterial("multimat"+r,e.scene)).subMaterials=i:a=new p.StandardMaterial("multimat"+r,e.scene),1===i.length&&(a=i[0]),o.material||(o.material=a),new p.Geometry(r,e.scene,s,!1,o),o.computeWorldMatrix(!0),e.scene._blockEntityCollection=!1,o.subMeshes=[];var N=0;for(d=0;d<n.length;d++){var P;h=n[d];if(P=e.meshes[h])for(y=0;y<P.primitives.length;y++)P.primitives[y].mode,p.SubMesh.AddToMesh(N,l[N],u[N],c[N],f[N],o,o,!0),N++;}return o},P=function(e,t,n,r){e.position&&(e.position=t),(e.rotationQuaternion||e.rotation)&&(e.rotationQuaternion=n),e.scaling&&(e.scaling=r);},R=function(e,t,n,r){var o=null;if(e.importOnlyMeshes&&(t.skin||t.meshes)&&e.importMeshesNames&&e.importMeshesNames.length>0&&-1===e.importMeshesNames.indexOf(t.name||""))return null;if(t.skin){if(t.meshes){var a=e.skins[t.skin];(i=N(e,t,t.meshes,n,t.babylonNode)).skeleton=e.scene.getLastSkeletonByID(t.skin),null===i.skeleton&&(i.skeleton=C(e,a,0,a.babylonSkeleton,t.skin),a.babylonSkeleton||(a.babylonSkeleton=i.skeleton)),o=i;}}else if(t.meshes){var i;o=i=N(e,t,t.mesh?[t.mesh]:t.meshes,n,t.babylonNode);}else if(!t.light||t.babylonNode||e.importOnlyMeshes){if(t.camera&&!t.babylonNode&&!e.importOnlyMeshes){var s=e.cameras[t.camera];if(s){if(e.scene._blockEntityCollection=e.forAssetContainer,"orthographic"===s.type){var l=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);l.name=t.name||"",l.mode=p.Camera.ORTHOGRAPHIC_CAMERA,l.attachControl(e.scene.getEngine().getInputElement()),o=l;}else if("perspective"===s.type){var u=s[s.type],c=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);c.name=t.name||"",c.attachControl(e.scene.getEngine().getInputElement()),u.aspectRatio||(u.aspectRatio=e.scene.getEngine().getRenderWidth()/e.scene.getEngine().getRenderHeight()),u.znear&&u.zfar&&(c.maxZ=u.zfar,c.minZ=u.znear),o=c;}e.scene._blockEntityCollection=!1;}}}else {var f=e.lights[t.light];if(f)if("ambient"===f.type){var d=f[f.type],h=new p.HemisphericLight(t.light,p.Vector3.Zero(),e.scene);h.name=t.name||"",d.color&&(h.diffuse=p.Color3.FromArray(d.color)),o=h;}else if("directional"===f.type){var m=f[f.type],_=new p.DirectionalLight(t.light,p.Vector3.Zero(),e.scene);_.name=t.name||"",m.color&&(_.diffuse=p.Color3.FromArray(m.color)),o=_;}else if("point"===f.type){var y=f[f.type],b=new p.PointLight(t.light,p.Vector3.Zero(),e.scene);b.name=t.name||"",y.color&&(b.diffuse=p.Color3.FromArray(y.color)),o=b;}else if("spot"===f.type){var v=f[f.type],A=new p.SpotLight(t.light,p.Vector3.Zero(),p.Vector3.Zero(),0,0,e.scene);A.name=t.name||"",v.color&&(A.diffuse=p.Color3.FromArray(v.color)),v.fallOfAngle&&(A.angle=v.fallOfAngle),v.fallOffExponent&&(A.exponent=v.fallOffExponent),o=A;}}if(!t.jointName){if(t.babylonNode)return t.babylonNode;if(null===o){e.scene._blockEntityCollection=e.forAssetContainer;var g=new p.Mesh(t.name||"",e.scene);e.scene._blockEntityCollection=!1,t.babylonNode=g,o=g;}}if(null!==o){if(t.matrix&&o instanceof p.Mesh)!function(e,t,n){if(t.matrix){var r=new p.Vector3(0,0,0),o=new p.Quaternion,a=new p.Vector3(0,0,0);p.Matrix.FromArray(t.matrix).decompose(a,o,r),P(e,r,o,a);}else t.translation&&t.rotation&&t.scale&&P(e,p.Vector3.FromArray(t.translation),p.Quaternion.FromArray(t.rotation),p.Vector3.FromArray(t.scale));e.computeWorldMatrix(!0);}(o,t);else {var T=t.translation||[0,0,0],x=t.rotation||[0,0,0,1],E=t.scale||[1,1,1];P(o,p.Vector3.FromArray(T),p.Quaternion.FromArray(x),p.Vector3.FromArray(E));}o.updateCache(!0),t.babylonNode=o;}return o},I=function(e,t,n,r){void 0===r&&(r=!1);var o=e.nodes[t],a=null;if(r=!(e.importOnlyMeshes&&!r&&e.importMeshesNames)||(-1!==e.importMeshesNames.indexOf(o.name||"")||0===e.importMeshesNames.length),!o.jointName&&r&&null!==(a=R(e,o,t))&&(a.id=t,a.parent=n),o.children)for(var i=0;i<o.children.length;i++)I(e,o.children[i],a,r);},F=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);}!function(e){for(var t in e.animations){var n=e.animations[t];if(n.channels&&n.samplers)for(var r=null,o=0;o<n.channels.length;o++){var a=n.channels[o],i=n.samplers[a.sampler];if(i){var s=null,l=null;n.parameters?(s=n.parameters[i.input],l=n.parameters[i.output]):(s=i.input,l=i.output);var u=m.GetBufferFromAccessor(e,e.accessors[s]),c=m.GetBufferFromAccessor(e,e.accessors[l]),f=a.target.id,d=e.scene.getNodeByID(f);if(null===d&&(d=e.scene.getNodeByName(f)),null!==d){var h=d instanceof p.Bone,_=a.target.path,y=A.indexOf(_);-1!==y&&(_=g[y]);var b=p.Animation.ANIMATIONTYPE_MATRIX;h||("rotationQuaternion"===_?(b=p.Animation.ANIMATIONTYPE_QUATERNION,d.rotationQuaternion=new p.Quaternion):b=p.Animation.ANIMATIONTYPE_VECTOR3);var v=null,T=[],x=0,E=!1;h&&r&&r.getKeys().length===u.length&&(v=r,E=!0),E||(e.scene._blockEntityCollection=e.forAssetContainer,v=new p.Animation(t,h?"_matrix":_,1,b,p.Animation.ANIMATIONLOOPMODE_CYCLE),e.scene._blockEntityCollection=!1);for(var L=0;L<u.length;L++){var O=null;if("rotationQuaternion"===_?(O=p.Quaternion.FromArray([c[x],c[x+1],c[x+2],c[x+3]]),x+=4):(O=p.Vector3.FromArray([c[x],c[x+1],c[x+2]]),x+=3),h){var M=d,S=p.Vector3.Zero(),w=new p.Quaternion,C=p.Vector3.Zero(),N=M.getBaseMatrix();E&&r&&(N=r.getKeys()[L].value),N.decompose(C,w,S),"position"===_?S=O:"rotationQuaternion"===_?w=O:C=O,O=p.Matrix.Compose(C,w,S);}E?r&&(r.getKeys()[L].value=O):T.push({frame:u[L],value:O});}!E&&v&&(v.setKeys(T),d.animations.push(v)),r=v,e.scene.stopAnimation(d),e.scene.beginAnimation(d,0,u[u.length-1],!0,1);}else p.Tools.Warn("Creating animation named "+t+". But cannot find node named "+f+" to attach to");}}}}(e);for(n=0;n<e.scene.skeletons.length;n++){var o=e.scene.skeletons[n];e.scene.beginAnimation(o,0,Number.MAX_VALUE,!0,1);}},V=function(e,t,n,r,o,a){return function(i){!function(e,t,n,r,o){var a=r.values||n.parameters,i=n.uniforms;for(var l in o){var u=o[l],c=u.type,f=a[i[l]];if(void 0===f&&(f=u.value),f){var d=function(e){return function(n){u.value&&e&&(t.setTexture(e,n),delete o[e]);}};c===s.SAMPLER_2D?k.LoadTextureAsync(e,r.values?f:u.value,d(l),function(){return d(null)}):u.value&&m.SetUniform(t,l,r.values?f:u.value,c)&&delete o[l];}}}(e,t,n,r,o),t.onBind=function(i){!function(e,t,n,r,o,a,i){var l=a.values||o.parameters;for(var u in n){var c=n[u],f=c.type;if(f===s.FLOAT_MAT2||f===s.FLOAT_MAT3||f===s.FLOAT_MAT4)if(!c.semantic||c.source||c.node){if(c.semantic&&(c.source||c.node)){var d=t.scene.getNodeByName(c.source||c.node||"");if(null===d&&(d=t.scene.getNodeByID(c.source||c.node||"")),null===d)continue;m.SetMatrix(t.scene,d,c,u,r.getEffect());}}else m.SetMatrix(t.scene,e,c,u,r.getEffect());else {var h=l[o.uniforms[u]];if(!h)continue;if(f===s.SAMPLER_2D){var p=t.textures[a.values?h:c.value].babylonTexture;if(null==p)continue;r.getEffect().setTexture(u,p);}else m.SetUniform(r.getEffect(),u,h,f);}}i(r);}(i,e,o,t,n,r,a);};}},B=function(e,t,n){for(var r in t.uniforms){var o=t.uniforms[r],a=t.parameters[o];if(e.currentIdentifier===r&&a.semantic&&!a.source&&!a.node){var i=b.indexOf(a.semantic);if(-1!==i)return delete n[r],v[i]}}return e.currentIdentifier},D=function(e){for(var t in e.materials)k.LoadMaterialAsync(e,t,function(e){},function(){});},G=function(){function e(){}return e.CreateRuntime=function(e,t,n){var r={extensions:{},accessors:{},buffers:{},bufferViews:{},meshes:{},lights:{},cameras:{},nodes:{},images:{},textures:{},shaders:{},programs:{},samplers:{},techniques:{},materials:{},animations:{},skins:{},extensionsUsed:[],scenes:{},buffersCount:0,shaderscount:0,scene:t,rootUrl:n,loadedBufferCount:0,loadedBufferViews:{},loadedShaderCount:0,importOnlyMeshes:!1,dummyNodes:[],forAssetContainer:!1};return e.extensions&&T(e.extensions,"extensions",r),e.extensionsUsed&&T(e.extensionsUsed,"extensionsUsed",r),e.buffers&&function(e,t){for(var n in e){var r=e[n];t.buffers[n]=r,t.buffersCount++;}}(e.buffers,r),e.bufferViews&&T(e.bufferViews,"bufferViews",r),e.accessors&&T(e.accessors,"accessors",r),e.meshes&&T(e.meshes,"meshes",r),e.lights&&T(e.lights,"lights",r),e.cameras&&T(e.cameras,"cameras",r),e.nodes&&T(e.nodes,"nodes",r),e.images&&T(e.images,"images",r),e.textures&&T(e.textures,"textures",r),e.shaders&&function(e,t){for(var n in e){var r=e[n];t.shaders[n]=r,t.shaderscount++;}}(e.shaders,r),e.programs&&T(e.programs,"programs",r),e.samplers&&T(e.samplers,"samplers",r),e.techniques&&T(e.techniques,"techniques",r),e.materials&&T(e.materials,"materials",r),e.animations&&T(e.animations,"animations",r),e.skins&&T(e.skins,"skins",r),e.scenes&&(r.scenes=e.scenes),e.scene&&e.scenes&&(r.currentScene=e.scenes[e.scene]),r},e.LoadBufferAsync=function(e,t,n,r,o){var a=e.buffers[t];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},o,void 0,!0,function(e){e&&r(e.status+" "+e.statusText);});},e.LoadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t];if(o&&o.source)if(o.babylonTexture)n(null);else {var a=e.images[o.source];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},void 0,void 0,!0,function(e){e&&r(e.status+" "+e.statusText);});}else r("");},e.CreateTextureAsync=function(e,t,n,r,o){var a=e.textures[t];if(a.babylonTexture)r(a.babylonTexture);else {var i=e.samplers[a.sampler],s=i.minFilter===u.NEAREST_MIPMAP_NEAREST||i.minFilter===u.NEAREST_MIPMAP_LINEAR||i.minFilter===u.LINEAR_MIPMAP_NEAREST||i.minFilter===u.LINEAR_MIPMAP_LINEAR,l=p.Texture.BILINEAR_SAMPLINGMODE,c=null==n?new Blob:new Blob([n]),f=URL.createObjectURL(c),d=function(){return URL.revokeObjectURL(f)},h=new p.Texture(f,e.scene,!s,!0,l,d,d);void 0!==i.wrapS&&(h.wrapU=m.GetWrapMode(i.wrapS)),void 0!==i.wrapT&&(h.wrapV=m.GetWrapMode(i.wrapT)),h.name=t,a.babylonTexture=h,r(h);}},e.LoadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(p.Tools.IsBase64(o.uri)){var a=atob(o.uri.split(",")[1]);n&&n(a);}else p.Tools.LoadFile(e.rootUrl+o.uri,n,void 0,void 0,!1,function(e){e&&r&&r(e.status+" "+e.statusText);});},e.LoadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(o.technique){var a=e.techniques[o.technique];if(!a){e.scene._blockEntityCollection=e.forAssetContainer;var i=new p.StandardMaterial(t,e.scene);return e.scene._blockEntityCollection=!1,i.diffuseColor=new p.Color3(.5,.5,.5),i.sideOrientation=p.Material.CounterClockWiseSideOrientation,void n(i)}var l=e.programs[a.program],u=a.states,c=p.Effect.ShadersStore[l.vertexShader+"VertexShader"],m=p.Effect.ShadersStore[l.fragmentShader+"PixelShader"],_="",A="",g=new y(c),T=new y(m),x={},L=[],O=[],M=[];for(var S in a.uniforms){var w=a.uniforms[S],C=a.parameters[w];if(x[S]=C,!C.semantic||C.node||C.source)C.type===s.SAMPLER_2D?M.push(S):L.push(S);else {var N=b.indexOf(C.semantic);-1!==N?(L.push(v[N]),delete x[S]):L.push(S);}}for(var P in a.attributes){var R=a.attributes[P];if((D=a.parameters[R]).semantic){var I=E(D);I&&O.push(I);}}for(;!g.isEnd()&&g.getNextToken();){if(g.currentToken===h.IDENTIFIER){var F=!1;for(var P in a.attributes){R=a.attributes[P];var D=a.parameters[R];if(g.currentIdentifier===P&&D.semantic){_+=E(D),F=!0;break}}F||(_+=B(g,a,x));}else _+=g.currentString;}for(;!T.isEnd()&&T.getNextToken();){T.currentToken===h.IDENTIFIER?A+=B(T,a,x):A+=T.currentString;}var G={vertex:l.vertexShader+t,fragment:l.fragmentShader+t},U={attributes:O,uniforms:L,samplers:M,needAlphaBlending:u&&u.enable&&-1!==u.enable.indexOf(3042)};p.Effect.ShadersStore[l.vertexShader+t+"VertexShader"]=_,p.Effect.ShadersStore[l.fragmentShader+t+"PixelShader"]=A;var k=new p.ShaderMaterial(t,e.scene,G,U);if(k.onError=function(e,t,n){return function(r,o){t.dispose(!0),n("Cannot compile program named "+e.name+". Error: "+o+". Default material will be applied");}}(l,k,r),k.onCompiled=V(e,k,a,o,x,n),k.sideOrientation=p.Material.CounterClockWiseSideOrientation,u&&u.functions){var H=u.functions;H.cullFace&&H.cullFace[0]!==f.BACK&&(k.backFaceCulling=!1);var j=H.blendFuncSeparate;j&&(j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_ALPHA&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_COMBINE:j[0]===d.ONE&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ONEONE:j[0]===d.SRC_ALPHA&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ADD:j[0]===d.ZERO&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_SUBTRACT:j[0]===d.DST_COLOR&&j[1]===d.ZERO&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_MULTIPLY:j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE&&(k.alphaMode=p.Constants.ALPHA_MAXIMIZED));}}else r&&r("No technique found.");},e}(),U=function(){function e(){this.state=null;}return e.RegisterExtension=function(t){e.Extensions[t.name]?p.Tools.Error('Tool with the same name "'+t.name+'" already exists'):e.Extensions[t.name]=t;},e.prototype.dispose=function(){},e.prototype._importMeshAsync=function(e,t,n,r,o,a,i,s){var l=this;return t.useRightHandedSystem=!0,k.LoadRuntimeAsync(t,n,r,function(t){t.forAssetContainer=o,t.importOnlyMeshes=!0,""===e?t.importMeshesNames=[]:"string"==typeof e?t.importMeshesNames=[e]:!e||e instanceof Array?(t.importMeshesNames=[],p.Tools.Warn("Argument meshesNames must be of type string or string[]")):t.importMeshesNames=[e],l._createNodes(t);var n=new Array,r=new Array;for(var s in t.nodes){var u=t.nodes[s];u.babylonNode instanceof p.AbstractMesh&&n.push(u.babylonNode);}for(var c in t.skins){var f=t.skins[c];f.babylonSkeleton instanceof p.Skeleton&&r.push(f.babylonSkeleton);}l._loadBuffersAsync(t,function(){l._loadShadersAsync(t,function(){D(t),F(t),!_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r);});},i),_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r);},s),!0},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return new Promise(function(s,l){i._importMeshAsync(e,t,r,o,n,function(e,t){s({meshes:e,particleSystems:[],skeletons:t,animationGroups:[],lights:[],transformNodes:[]});},a,function(e){l(new Error(e));});})},e.prototype._loadAsync=function(e,t,n,r,o,a,i){var s=this;e.useRightHandedSystem=!0,k.LoadRuntimeAsync(e,t,n,function(e){k.LoadRuntimeExtensionsAsync(e,function(){s._createNodes(e),s._loadBuffersAsync(e,function(){s._loadShadersAsync(e,function(){D(e),F(e),_.GLTFFileLoader.IncrementalLoading||o();});}),_.GLTFFileLoader.IncrementalLoading&&o();},i);},i);},e.prototype.loadAsync=function(e,t,n,r){var o=this;return new Promise(function(a,i){o._loadAsync(e,t,n,!1,function(){a();},r,function(e){i(new Error(e));});})},e.prototype._loadShadersAsync=function(e,t){var n=!1,r=function(n,r){k.LoadShaderStringAsync(e,n,function(o){o instanceof ArrayBuffer||(e.loadedShaderCount++,o&&(p.Effect.ShadersStore[n+(r.type===i.VERTEX?"VertexShader":"PixelShader")]=o),e.loadedShaderCount===e.shaderscount&&t());},function(){p.Tools.Error("Error when loading shader program named "+n+" located at "+r.uri);});};for(var o in e.shaders){n=!0;var a=e.shaders[o];a?r.bind(this,o,a)():p.Tools.Error("No shader named: "+o);}n||t();},e.prototype._loadBuffersAsync=function(e,t,n){var r=!1,o=function(n,r){k.LoadBufferAsync(e,n,function(o){e.loadedBufferCount++,o&&(o.byteLength!=e.buffers[n].byteLength&&p.Tools.Error("Buffer named "+n+" is length "+o.byteLength+". Expected: "+r.byteLength),e.loadedBufferViews[n]=o),e.loadedBufferCount===e.buffersCount&&t();},function(){p.Tools.Error("Error when loading buffer named "+n+" located at "+r.uri);});};for(var a in e.buffers){r=!0;var i=e.buffers[a];i?o.bind(this,a,i)():p.Tools.Error("No buffer named: "+a);}r||t();},e.prototype._createNodes=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);}},e.Extensions={},e}(),k=function(){function e(e){this._name=e;}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e.prototype.loadRuntimeAsync=function(e,t,n,r,o){return !1},e.prototype.loadRuntimeExtensionsAsync=function(e,t,n){return !1},e.prototype.loadBufferAsync=function(e,t,n,r,o){return !1},e.prototype.loadTextureBufferAsync=function(e,t,n,r){return !1},e.prototype.createTextureAsync=function(e,t,n,r,o){return !1},e.prototype.loadShaderStringAsync=function(e,t,n,r){return !1},e.prototype.loadMaterialAsync=function(e,t,n,r){return !1},e.LoadRuntimeAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadRuntimeAsync(t,n,r,o,a)},function(){setTimeout(function(){o&&o(G.CreateRuntime(n.json,t,r));});});},e.LoadRuntimeExtensionsAsync=function(t,n,r){e.ApplyExtensions(function(e){return e.loadRuntimeExtensionsAsync(t,n,r)},function(){setTimeout(function(){n();});});},e.LoadBufferAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadBufferAsync(t,n,r,o,a)},function(){G.LoadBufferAsync(t,n,r,o,a);});},e.LoadTextureAsync=function(t,n,r,o){e.LoadTextureBufferAsync(t,n,function(a){a&&e.CreateTextureAsync(t,n,a,r,o);},o);},e.LoadShaderStringAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadShaderStringAsync(t,n,r,o)},function(){G.LoadShaderStringAsync(t,n,r,o);});},e.LoadMaterialAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadMaterialAsync(t,n,r,o)},function(){G.LoadMaterialAsync(t,n,r,o);});},e.LoadTextureBufferAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadTextureBufferAsync(t,n,r,o)},function(){G.LoadTextureBufferAsync(t,n,r,o);});},e.CreateTextureAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.createTextureAsync(t,n,r,o,a)},function(){G.CreateTextureAsync(t,n,r,o,a);});},e.ApplyExtensions=function(e,t){for(var n in U.Extensions){if(e(U.Extensions[n]))return}t();},e}();_.GLTFFileLoader._CreateGLTF1Loader=function(){return new U};var H=function(e){function t(){return e.call(this,"KHR_binary_glTF")||this}return o(t,e),t.prototype.loadRuntimeAsync=function(e,t,n,r,o){var a=t.json.extensionsUsed;return !(!a||-1===a.indexOf(this.name)||!t.bin)&&(this._bin=t.bin,r(G.CreateRuntime(t.json,e,n)),!0)},t.prototype.loadBufferAsync=function(e,t,n,r){return -1!==e.extensionsUsed.indexOf(this.name)&&("binary_glTF"===t&&(this._bin.readAsync(0,this._bin.byteLength).then(n,function(e){return r(e.message)}),!0))},t.prototype.loadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t],i=e.images[o.source];if(!(i.extensions&&this.name in i.extensions))return !1;var s=i.extensions[this.name],l=e.bufferViews[s.bufferView];return n(m.GetBufferFromBufferView(e,l,0,l.byteLength,a.UNSIGNED_BYTE)),!0},t.prototype.loadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(!(o.extensions&&this.name in o.extensions))return !1;var i=o.extensions[this.name],s=e.bufferViews[i.bufferView],l=m.GetBufferFromBufferView(e,s,0,s.byteLength,a.UNSIGNED_BYTE);return setTimeout(function(){var e=m.DecodeBufferToText(l);n(e);}),!0},t}(k);U.RegisterExtension(new H);var j=function(e){function t(){return e.call(this,"KHR_materials_common")||this}return o(t,e),t.prototype.loadRuntimeExtensionsAsync=function(e,t,n){if(!e.extensions)return !1;var r=e.extensions[this.name];if(!r)return !1;var o=r.lights;if(o)for(var a in o){var i=o[a];switch(i.type){case"ambient":var s=new p.HemisphericLight(i.name,new p.Vector3(0,1,0),e.scene),l=i.ambient;l&&(s.diffuse=p.Color3.FromArray(l.color||[1,1,1]));break;case"point":var u=new p.PointLight(i.name,new p.Vector3(10,10,10),e.scene),c=i.point;c&&(u.diffuse=p.Color3.FromArray(c.color||[1,1,1]));break;case"directional":var f=new p.DirectionalLight(i.name,new p.Vector3(0,-1,0),e.scene),d=i.directional;d&&(f.diffuse=p.Color3.FromArray(d.color||[1,1,1]));break;case"spot":var h=i.spot;if(h)new p.SpotLight(i.name,new p.Vector3(0,10,0),new p.Vector3(0,-1,0),h.fallOffAngle||Math.PI,h.fallOffExponent||0,e.scene).diffuse=p.Color3.FromArray(h.color||[1,1,1]);break;default:p.Tools.Warn('GLTF Material Common extension: light type "'+i.type+"” not supported");}}return !1},t.prototype.loadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(!o||!o.extensions)return !1;var a=o.extensions[this.name];if(!a)return !1;var i=new p.StandardMaterial(t,e.scene);return i.sideOrientation=p.Material.CounterClockWiseSideOrientation,"CONSTANT"===a.technique&&(i.disableLighting=!0),i.backFaceCulling=void 0!==a.doubleSided&&!a.doubleSided,i.alpha=void 0===a.values.transparency?1:a.values.transparency,i.specularPower=void 0===a.values.shininess?0:a.values.shininess,"string"==typeof a.values.ambient?this._loadTexture(e,a.values.ambient,i,"ambientTexture",r):i.ambientColor=p.Color3.FromArray(a.values.ambient||[0,0,0]),"string"==typeof a.values.diffuse?this._loadTexture(e,a.values.diffuse,i,"diffuseTexture",r):i.diffuseColor=p.Color3.FromArray(a.values.diffuse||[0,0,0]),"string"==typeof a.values.emission?this._loadTexture(e,a.values.emission,i,"emissiveTexture",r):i.emissiveColor=p.Color3.FromArray(a.values.emission||[0,0,0]),"string"==typeof a.values.specular?this._loadTexture(e,a.values.specular,i,"specularTexture",r):i.specularColor=p.Color3.FromArray(a.values.specular||[0,0,0]),!0},t.prototype._loadTexture=function(e,t,n,r,o){G.LoadTextureBufferAsync(e,t,function(a){G.CreateTextureAsync(e,t,a,function(e){return n[r]=e},o);},o);},t}(k);U.RegisterExtension(new j),n.d(t,"GLTFBinaryExtension",function(){return H}),n.d(t,"GLTFLoaderBase",function(){return G}),n.d(t,"GLTFLoader",function(){return U}),n.d(t,"GLTFLoaderExtension",function(){return k}),n.d(t,"EComponentType",function(){return a}),n.d(t,"EShaderType",function(){return i}),n.d(t,"EParameterType",function(){return s}),n.d(t,"ETextureWrapMode",function(){return l}),n.d(t,"ETextureFilterType",function(){return u}),n.d(t,"ETextureFormat",function(){return c}),n.d(t,"ECullingType",function(){return f}),n.d(t,"EBlendingFunction",function(){return d}),n.d(t,"GLTFUtils",function(){return m}),n.d(t,"GLTFMaterialsCommonExtension",function(){return j});},function(e,t,n){n.r(t);var r=n(0),o=function(){function e(){this.materials=[];}return e.prototype.parseMTL=function(t,n,o,a){if(!(n instanceof ArrayBuffer)){for(var i,s=n.split("\n"),l=/\s+/,u=null,c=0;c<s.length;c++){var f=s[c].trim();if(0!==f.length&&"#"!==f.charAt(0)){var d=f.indexOf(" "),h=d>=0?f.substring(0,d):f;h=h.toLowerCase();var p=d>=0?f.substring(d+1).trim():"";"newmtl"===h?(u&&this.materials.push(u),t._blockEntityCollection=a,u=new r.StandardMaterial(p,t),t._blockEntityCollection=!1):"kd"===h&&u?(i=p.split(l,3).map(parseFloat),u.diffuseColor=r.Color3.FromArray(i)):"ka"===h&&u?(i=p.split(l,3).map(parseFloat),u.ambientColor=r.Color3.FromArray(i)):"ks"===h&&u?(i=p.split(l,3).map(parseFloat),u.specularColor=r.Color3.FromArray(i)):"ke"===h&&u?(i=p.split(l,3).map(parseFloat),u.emissiveColor=r.Color3.FromArray(i)):"ns"===h&&u?u.specularPower=parseFloat(p):"d"===h&&u?u.alpha=parseFloat(p):"map_ka"===h&&u?u.ambientTexture=e._getTexture(o,p,t):"map_kd"===h&&u?u.diffuseTexture=e._getTexture(o,p,t):"map_ks"===h&&u?u.specularTexture=e._getTexture(o,p,t):"map_ns"===h||("map_bump"===h&&u?u.bumpTexture=e._getTexture(o,p,t):"map_d"===h&&u&&(u.opacityTexture=e._getTexture(o,p,t)));}}u&&this.materials.push(u);}},e._getTexture=function(t,n,o){if(!n)return null;var a=t;if("file:"===t){var i=n.lastIndexOf("\\");-1===i&&(i=n.lastIndexOf("/")),a+=i>-1?n.substr(i+1):n;}else a+=n;return new r.Texture(a,o,!1,e.INVERT_TEXTURE_Y)},e.INVERT_TEXTURE_Y=!0,e}(),a=function(){function e(t){this.name="obj",this.extensions=".obj",this.obj=/^o/,this.group=/^g/,this.mtllib=/^mtllib /,this.usemtl=/^usemtl /,this.smooth=/^s /,this.vertexPattern=/v( +[\d|\.|\+|\-|e|E]+){3,7}/,this.normalPattern=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.uvPattern=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.facePattern1=/f\s+(([\d]{1,}[\s]?){3,})+/,this.facePattern2=/f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern3=/f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern4=/f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/,this.facePattern5=/f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/,this._forAssetContainer=!1,this._meshLoadOptions=t||e.currentMeshLoadOptions;}return Object.defineProperty(e,"INVERT_TEXTURE_Y",{get:function(){return o.INVERT_TEXTURE_Y},set:function(e){o.INVERT_TEXTURE_Y=e;},enumerable:!0,configurable:!0}),Object.defineProperty(e,"currentMeshLoadOptions",{get:function(){return {ComputeNormals:e.COMPUTE_NORMALS,ImportVertexColors:e.IMPORT_VERTEX_COLORS,InvertY:e.INVERT_Y,InvertTextureY:e.INVERT_TEXTURE_Y,UVScaling:e.UV_SCALING,MaterialLoadingFailsSilently:e.MATERIAL_LOADING_FAILS_SILENTLY,OptimizeWithUV:e.OPTIMIZE_WITH_UV,SkipMaterials:e.SKIP_MATERIALS}},enumerable:!0,configurable:!0}),e.prototype._loadMTL=function(e,t,n,o){var a=r.Tools.BaseUrl+t+e;r.Tools.LoadFile(a,n,void 0,void 0,!1,function(e,t){o(a,t);});},e.prototype.createPlugin=function(){return new e(e.currentMeshLoadOptions)},e.prototype.canDirectLoad=function(e){return !1},e.prototype.importMeshAsync=function(e,t,n,r,o,a){return this._parseSolid(e,t,n,r).then(function(e){return {meshes:e,particleSystems:[],skeletons:[],animationGroups:[]}})},e.prototype.loadAsync=function(e,t,n,r,o){return this.importMeshAsync(null,e,t,n,r).then(function(){})},e.prototype.loadAssetContainerAsync=function(e,t,n,o,a){var i=this;return this._forAssetContainer=!0,this.importMeshAsync(null,e,t,n).then(function(t){var n=new r.AssetContainer(e);return t.meshes.forEach(function(e){return n.meshes.push(e)}),t.meshes.forEach(function(e){var t=e.material;t&&(-1==n.materials.indexOf(t)&&(n.materials.push(t),t.getActiveTextures().forEach(function(e){-1==n.textures.indexOf(e)&&n.textures.push(e);})));}),i._forAssetContainer=!1,n}).catch(function(e){throw i._forAssetContainer=!1,e})},e.prototype._parseSolid=function(t,n,a,i){for(var s,l=this,u=[],c=[],f=[],d=[],h=[],p=[],m=[],_=[],y=[],b=[],v=[],A=0,g=!1,T=[],x=[],E=[],L=[],O=[],M="",S="",w=new o,C=1,N=!0,P=new r.Color4(.5,.5,.5,1),R=function(e,t,n,r,o,a,i){var s;-1===(s=l._meshLoadOptions.OptimizeWithUV?function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[],uv:[]});var n=e[t[0]].normals.indexOf(t[1]);return 1!=n&&t[2]===e[t[0]].uv[n]?e[t[0]].idx[n]:-1}(v,[e,n,t]):function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[]});var n=e[t[0]].normals.indexOf(t[1]);return -1===n?-1:e[t[0]].idx[n]}(v,[e,n]))?(p.push(m.length),m.push(r),_.push(o),b.push(a),void 0!==i&&y.push(i),v[e].normals.push(n),v[e].idx.push(A++),l._meshLoadOptions.OptimizeWithUV&&v[e].uv.push(t)):p.push(s);},I=function(){for(var e=0;e<m.length;e++)T.push(m[e].x,m[e].y,m[e].z),E.push(b[e].x,b[e].y,b[e].z),L.push(_[e].x,_[e].y);!0===l._meshLoadOptions.ImportVertexColors&&x.push(y[e].r,y[e].g,y[e].b,y[e].a),m=[],b=[],_=[],y=[],v=[],A=0;},F=function(e,t){for(var n=t;n<e.length-1;n++)O.push(e[0],e[n],e[n+1]);},V=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=parseInt(O[n])-1;R(o,0,0,u[o],r.Vector2.Zero(),r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0);}O=[];},B=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("/"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,i,0,u[a],f[i],r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0);}O=[];},D=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=parseInt(r[0])-1,a=parseInt(r[1])-1,i=parseInt(r[2])-1;R(o,a,i,u[o],f[a],c[i]);}O=[];},G=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("//"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,1,i,u[a],r.Vector2.Zero(),c[i],!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0);}O=[];},U=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=u.length+parseInt(r[0]),a=f.length+parseInt(r[1]),i=c.length+parseInt(r[2]);R(o,a,i,u[o],f[a],c[i],!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0);}O=[];},k=function(){h.length>0&&(s=h[h.length-1],I(),p.reverse(),s.indices=p.slice(),s.positions=T.slice(),s.normals=E.slice(),s.uvs=L.slice(),!0===l._meshLoadOptions.ImportVertexColors&&(s.colors=x.slice()),p=[],T=[],x=[],E=[],L=[]);},H=a.split("\n"),j=0;j<H.length;j++){var K,W=H[j].trim().replace(/\s\s/g," ");if(0!==W.length&&"#"!==W.charAt(0))if(this.vertexPattern.test(W))K=W.match(/[^ ]+/g),u.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3]))),!0===this._meshLoadOptions.ImportVertexColors&&(K.length>=7?d.push(new r.Color4(parseFloat(K[4]),parseFloat(K[5]),parseFloat(K[6]),7===K.length||void 0===K[7]?1:parseFloat(K[7]))):d.push(P));else if(null!==(K=this.normalPattern.exec(W)))c.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3])));else if(null!==(K=this.uvPattern.exec(W)))f.push(new r.Vector2(parseFloat(K[1])*e.UV_SCALING.x,parseFloat(K[2])*e.UV_SCALING.y));else if(null!==(K=this.facePattern3.exec(W)))D(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern4.exec(W)))G(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern5.exec(W)))U(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern2.exec(W)))B(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern1.exec(W)))V(K[1].trim().split(" "),1);else if(this.group.test(W)||this.obj.test(W)){var Y={name:W.substring(2).trim(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:""};k(),h.push(Y),g=!0,N=!0,C=1;}else if(this.usemtl.test(W)){if(M=W.substring(7).trim(),!N||!g){k();Y={name:"mesh_mm"+C.toString(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:M};C++,h.push(Y),g=!0;}g&&N&&(h[h.length-1].materialName=M,N=!1);}else this.mtllib.test(W)?S=W.substring(7).trim():this.smooth.test(W)||console.log("Unhandled expression at line : "+W);}g&&(s=h[h.length-1],p.reverse(),I(),s.indices=p,s.positions=T,s.normals=E,s.uvs=L,!0===this._meshLoadOptions.ImportVertexColors&&(s.colors=x)),g||(p.reverse(),I(),h.push({name:r.Geometry.RandomId(),indices:p,positions:T,colors:x,normals:E,uvs:L,materialName:M}));for(var J=[],q=new Array,Z=0;Z<h.length;Z++){if(t&&h[Z].name)if(t instanceof Array){if(-1===t.indexOf(h[Z].name))continue}else if(h[Z].name!==t)continue;s=h[Z],n._blockEntityCollection=this._forAssetContainer;var Q=new r.Mesh(h[Z].name,n);n._blockEntityCollection=!1,q.push(h[Z].materialName);var X=new r.VertexData;if(X.uvs=s.uvs,X.indices=s.indices,X.positions=s.positions,!0===this._meshLoadOptions.ComputeNormals){var z=new Array;r.VertexData.ComputeNormals(s.positions,s.indices,z),X.normals=z;}else X.normals=s.normals;!0===this._meshLoadOptions.ImportVertexColors&&(X.colors=s.colors),X.applyToMesh(Q),this._meshLoadOptions.InvertY&&(Q.scaling.y*=-1),J.push(Q);}var $=[];return ""!==S&&!1===this._meshLoadOptions.SkipMaterials&&$.push(new Promise(function(e,t){l._loadMTL(S,i,function(o){try{w.parseMTL(n,o,i,l._forAssetContainer);for(var a=0;a<w.materials.length;a++){for(var s,u=0,c=[];(s=q.indexOf(w.materials[a].name,u))>-1;)c.push(s),u=s+1;if(-1===s&&0===c.length)w.materials[a].dispose();else for(var f=0;f<c.length;f++)J[c[f]].material=w.materials[a];}e();}catch(n){r.Tools.Warn("Error processing MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(n);}},function(n,o){r.Tools.Warn("Error downloading MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(o);});})),Promise.all($).then(function(){return J})},e.OPTIMIZE_WITH_UV=!0,e.INVERT_Y=!1,e.IMPORT_VERTEX_COLORS=!1,e.COMPUTE_NORMALS=!1,e.UV_SCALING=new r.Vector2(1,1),e.SKIP_MATERIALS=!1,e.MATERIAL_LOADING_FAILS_SILENTLY=!0,e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new a),n.d(t,"MTLFileLoader",function(){return o}),n.d(t,"OBJFileLoader",function(){return a});},function(e,t,n){n.r(t);var r=n(0),o=function(){function e(){this.solidPattern=/solid (\S*)([\S\s]*)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}};}return e.prototype.importMesh=function(e,t,n,o,a,i,s){var l;if("string"!=typeof n){if(this._isBinary(n)){var u=new r.Mesh("stlmesh",t);return this._parseBinary(u,n),a&&a.push(u),!0}for(var c=new Uint8Array(n),f="",d=0;d<n.byteLength;d++)f+=String.fromCharCode(c[d]);n=f;}for(;l=this.solidPattern.exec(n);){var h=l[1];if(h!=l[3])return r.Tools.Error("Error in STL, solid name != endsolid name"),!1;if(e&&h)if(e instanceof Array){if(!e.indexOf(h))continue}else if(h!==e)continue;h=h||"stlmesh";u=new r.Mesh(h,t);this._parseASCII(u,l[2]),a&&a.push(u);}return !0},e.prototype.load=function(e,t,n){return this.importMesh(null,e,t,n,null,null,null)},e.prototype.loadAssetContainer=function(e,t,n,o){var a=new r.AssetContainer(e);return e._blockEntityCollection=!0,this.importMesh(null,e,t,n,a.meshes,null,null),e._blockEntityCollection=!1,a},e.prototype._isBinary=function(e){var t;if(84+50*(t=new DataView(e)).getUint32(80,!0)===t.byteLength)return !0;for(var n=t.byteLength,r=0;r<n;r++)if(t.getUint8(r)>127)return !0;return !1},e.prototype._parseBinary=function(e,t){for(var n=new DataView(t),o=n.getUint32(80,!0),a=0,i=new Float32Array(3*o*3),s=new Float32Array(3*o*3),l=new Uint32Array(3*o),u=0,c=0;c<o;c++){for(var f=84+50*c,d=n.getFloat32(f,!0),h=n.getFloat32(f+4,!0),p=n.getFloat32(f+8,!0),m=1;m<=3;m++){var _=f+12*m;i[a]=n.getFloat32(_,!0),i[a+2]=n.getFloat32(_+4,!0),i[a+1]=n.getFloat32(_+8,!0),s[a]=d,s[a+2]=h,s[a+1]=p,a+=3;}l[u]=u++,l[u]=u++,l[u]=u++;}e.setVerticesData(r.VertexBuffer.PositionKind,i),e.setVerticesData(r.VertexBuffer.NormalKind,s),e.setIndices(l),e.computeWorldMatrix(!0);},e.prototype._parseASCII=function(e,t){for(var n,o=[],a=[],i=[],s=0;n=this.facetsPattern.exec(t);){var l=n[1],u=this.normalPattern.exec(l);if(this.normalPattern.lastIndex=0,u){for(var c,f=[Number(u[1]),Number(u[5]),Number(u[3])];c=this.vertexPattern.exec(l);)o.push(Number(c[1]),Number(c[5]),Number(c[3])),a.push(f[0],f[1],f[2]);i.push(s++,s++,s++),this.vertexPattern.lastIndex=0;}}this.facetsPattern.lastIndex=0,e.setVerticesData(r.VertexBuffer.PositionKind,o),e.setVerticesData(r.VertexBuffer.NormalKind,a),e.setIndices(i),e.computeWorldMatrix(!0);},e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new o),n.d(t,"STLFileLoader",function(){return o});},function(e,t,n){(function(e){var r=n(2),o=n(3);n.d(t,"a",function(){return r.GLTFFileLoader}),n.d(t,"b",function(){return r.GLTFLoaderAnimationStartMode}),n.d(t,"c",function(){return r.GLTFLoaderCoordinateSystemMode}),n.d(t,"d",function(){return r.GLTFLoaderState}),n.d(t,"e",function(){return o.GLTFValidation});var a=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==a){for(var i in a.BABYLON=a.BABYLON||{},r)a.BABYLON[i]=r[i];for(var i in o)a.BABYLON[i]=o[i];}}).call(this,n(4));},function(e,t){},function(e,t,n){(function(e){var r=n(7);n.d(t,"a",function(){return r});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in o.BABYLON=o.BABYLON||{},o.BABYLON.GLTF1=o.BABYLON.GLTF1||{},r)o.BABYLON.GLTF1[a]=r[a];}).call(this,n(4));},function(e,t,n){(function(e){var r=n(5),o=n(11),a=n(6);n.d(t,"a",function(){return a});var i=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==i){i.BABYLON=i.BABYLON||{};var s=i.BABYLON;s.GLTF2=s.GLTF2||{},s.GLTF2.Loader=s.GLTF2.Loader||{},s.GLTF2.Loader.Extensions=s.GLTF2.Loader.Extensions||{};var l=[];for(var u in r)s.GLTF2.Loader.Extensions[u]=r[u],l.push(u);for(var u in o)s.GLTF2.Loader[u]=o[u],l.push(u);for(var u in a)l.indexOf(u)>-1||(s.GLTF2[u]=a[u]);}}).call(this,n(4));},function(e,t,n){n.r(t),function(e){var r=n(8);n.d(t,"MTLFileLoader",function(){return r.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return r.OBJFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a];}.call(this,n(4));},function(e,t,n){n.r(t),function(e){var r=n(9);n.d(t,"STLFileLoader",function(){return r.STLFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a];}.call(this,n(4));},,,,function(e,t,n){n.r(t);n(2),n(3),n(7),n(6),n(8),n(9);var r=n(10),o=n(12),a=n(13),i=n(14),s=n(15);n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r.c}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return r.b}),n.d(t,"GLTFLoaderState",function(){return r.d}),n.d(t,"GLTFFileLoader",function(){return r.a}),n.d(t,"GLTFValidation",function(){return r.e}),n.d(t,"GLTF1",function(){return o.a}),n.d(t,"GLTF2",function(){return a.a}),n.d(t,"MTLFileLoader",function(){return i.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return i.OBJFileLoader}),n.d(t,"STLFileLoader",function(){return s.STLFileLoader});}])});

    !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("babylonjs",[],t):"object"==typeof exports?exports.babylonjs=t():e.BABYLON=t();}("undefined"!=typeof self?self:"undefined"!=typeof global?global:undefined,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=151)}([function(e,t,i){i.d(t,"d",function(){return s}),i.d(t,"e",function(){return c}),i.d(t,"f",function(){return l}),i.d(t,"b",function(){return u}),i.d(t,"a",function(){return h}),i.d(t,"c",function(){return f});var n=i(14),r=i(28),o=i(42),a=i(12),s=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t;}return e.prototype.toString=function(){return "{X: "+this.x+" Y:"+this.y+"}"},e.prototype.getClassName=function(){return "Vector2"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*e^(0|this.y)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();return 0===e?this:(this.x/=e,this.y/=e,this)},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1];},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o;},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,a=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,s=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return a>0&&s>0&&a+s<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),a=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),s=i.add(o.multiplyByFloats(a,a));return e.Distance(t,s)},e}(),c=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.x=e,this.y=t,this.z=i;}return e.prototype.toString=function(){return "{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}"},e.prototype.getClassName=function(){return "Vector3"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*e^(0|this.y))^(0|this.z)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,this},e.prototype.toQuaternion=function(){return u.RotationYawPitchRoll(this.y,this.x,this.z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this.x+e.x,this.y+e.y,this.z+e.z)},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e.x,e.y,e.z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this.x-t,this.y-i,this.z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this.x-e,this.y-t,this.z-i)},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)},e.prototype.equalsToFloats=function(e,t,i){return this.x===e&&this.y===t&&this.z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e.x,e.y,e.z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this.x*e.x,this.y*e.y,this.z*e.z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this.x*t,this.y*i,this.z*n)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this.x/e.x,this.y/e.y,this.z/e.z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this.x&&(this.x=e),t<this.y&&(this.y=t),i<this.z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this.x&&(this.x=e),t>this.y&&(this.y=t),i>this.z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this.x),i=Math.abs(this.y);if(!n.a.WithinEpsilon(t,i,e))return !0;var r=Math.abs(this.z);return !n.a.WithinEpsilon(t,r,e)||!n.a.WithinEpsilon(i,r,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this.x),t=Math.abs(this.y);if(e!==t)return !0;var i=Math.abs(this.z);return e!==i||t!==i},enumerable:!0,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return "xyz"===(e=e.toLowerCase())?this:(d.Vector3[0].copyFrom(this),["x","y","z"].forEach(function(i,n){t[i]=d.Vector3[0][e[n]];}),this)},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(d.Matrix[0]),e.TransformCoordinatesToRef(this,d.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,d.Vector3[0]),d.Vector3[0].rotateByQuaternionToRef(e,d.Vector3[0]),t.addToRef(d.Vector3[0],i),i},e.prototype.cross=function(t){return e.Cross(this,t)},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e.x,e.y,e.z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(d.Vector3[1]),o=i.normalizeToRef(d.Vector3[2]),a=e.Dot(r,o),s=d.Vector3[3];return e.CrossToRef(r,o,s),e.Dot(s,n)>0?Math.acos(a):-Math.acos(a)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2];},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i);},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!0,configurable:!0}),Object.defineProperty(e,"ZeroReadOnly",{get:function(){return e._ZeroReadOnly},enumerable:!0,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(){return new e(0,0,1)},e.Backward=function(){return new e(0,0,-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t.x,t.y,t.z,i,n);},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,a=e*o[0]+t*o[4]+i*o[8]+o[12],s=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=a*l,r.y=s*l,r.z=c*l;},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e.x,e.y,e.z,t,i);},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10];},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s),.5*(2*i.z+(-t.z+n.z)*o+(2*t.z-5*i.z+4*n.z-r.z)*a+(-t.z+3*i.z-3*n.z+r.z)*s))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e.x;r=(r=r>i.x?i.x:r)<t.x?t.x:r;var o=e.y;o=(o=o>i.y?i.y:o)<t.y?t.y:o;var a=e.z;a=(a=a>i.z?i.z:a)<t.z?t.z:a,n.copyFromFloats(r,o,a);},e.CheckExtends=function(e,t,i){t.minimizeInPlace(e),i.maximizeInPlace(e);},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e.x+(t.x-e.x)*i,n.y=e.y+(t.y-e.y)*i,n.z=e.z+(t.z-e.z)*i;},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e.y*t.z-e.z*t.y,r=e.z*t.x-e.x*t.z,o=e.x*t.y-e.y*t.x;i.copyFromFloats(n,r,o);},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t);},e.Project=function(t,i,n,r){var o=r.width,a=r.height,s=r.x,c=r.y,l=d.Matrix[1];h.FromValuesToRef(o/2,0,0,0,0,-a/2,0,0,0,0,.5,0,s+o/2,a/2+c,.5,1,l);var u=d.Matrix[0];return i.multiplyToRef(n,u),u.multiplyToRef(l,u),e.TransformCoordinates(t,u)},e._UnprojectFromInvertedMatrixToRef=function(t,i,r){e.TransformCoordinatesToRef(t,i,r);var o=i.m,a=t.x*o[3]+t.y*o[7]+t.z*o[11]+o[15];n.a.WithinEpsilon(a,1)&&r.scaleInPlace(1/a);},e.UnprojectFromTransform=function(t,i,n,r,o){var a=d.Matrix[0];r.multiplyToRef(o,a),a.invert(),t.x=t.x/i*2-1,t.y=-(t.y/n*2-1);var s=new e;return e._UnprojectFromInvertedMatrixToRef(t,a,s),s},e.Unproject=function(t,i,n,r,o,a){var s=e.Zero();return e.UnprojectToRef(t,i,n,r,o,a,s),s},e.UnprojectToRef=function(t,i,n,r,o,a,s){e.UnprojectFloatsToRef(t.x,t.y,t.z,i,n,r,o,a,s);},e.UnprojectFloatsToRef=function(t,i,n,r,o,a,s,c,l){var u=d.Matrix[0];a.multiplyToRef(s,u),u.multiplyToRef(c,u),u.invert();var h=d.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l);},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=d.Quaternion[0];u.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n);},e._UpReadOnly=e.Up(),e._ZeroReadOnly=e.Zero(),e}(),l=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n;}return e.prototype.toString=function(){return "{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return "Vector4"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.w*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z,-1*this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new c(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3];},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n);},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n;},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize();},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],a=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=a,i.w=e.w;},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var a=r.m;o.x=e*a[0]+t*a[4]+i*a[8],o.y=e*a[1]+t*a[5]+i*a[9],o.z=e*a[2]+t*a[6]+i*a[10],o.w=n;},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t.x,t.y,t.z,i)},e}(),u=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n;}return e.prototype.toString=function(){return "{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return "Quaternion"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){return [this.x,this.y,this.z,this.w]},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this.x*e.w+this.y*e.z-this.z*e.y+this.w*e.x,n=-this.x*e.z+this.y*e.w+this.z*e.x+this.w*e.y,r=this.x*e.y-this.y*e.x+this.z*e.w+this.w*e.z,o=-this.x*e.x-this.y*e.y-this.z*e.z+this.w*e.w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this.x,-this.y,-this.z,this.w)},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){var t=c.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this.z,i=this.x,n=this.y,r=this.w,o=r*r,a=t*t,s=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-a-s+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),a-s-c+o)),this},e.prototype.toRotationMatrix=function(e){return h.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],a=n[8],s=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(a-u)*i,t.z=(s-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+s)/i,t.z=(a+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(a-u)/i,t.x=(o+s)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(s-o)/i,t.x=(a+u)/i,t.y=(l+h)/i,t.z=.25*i);},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t.x,-t.y,-t.z,t.w)},e.InverseToRef=function(e,t){return t.set(-e.x,-e.y,-e.z,e.w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e.x&&0===e.y&&0===e.z&&1===e.w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e.x*n,i.y=e.y*n,i.z=e.z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,a=.5*e,s=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(a),d=Math.cos(a);n.x=d*l*c+h*u*s,n.y=h*u*c-d*l*s,n.z=d*u*s-h*l*c,n.w=d*u*c+h*l*s;},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),a=.5*t;n.x=Math.cos(o)*Math.sin(a),n.y=Math.sin(o)*Math.sin(a),n.z=Math.sin(r)*Math.cos(a),n.w=Math.cos(r)*Math.cos(a);},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=d.Matrix[0];h.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r);},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,a=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,s=!1;if(a<0&&(s=!0,a=-a),a>.999999)o=1-i,r=s?-i:i;else {var c=Math.acos(a),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=s?-Math.sin(i*c)*l:Math.sin(i*c)*l;}n.x=o*e.x+r*t.x,n.y=o*e.y+r*t.y,n.z=o*e.z+r*t.z,n.w=o*e.w+r*t.w;},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h,t.w*c+n.w*l+i.w*u+r.w*h)},e}(),h=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,this._m=new Float32Array(16),this._updateIdentityStatus(!1);}return Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0;},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r;},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15];}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],m=e[15],g=h*m-_*d,v=u*m-p*d,y=u*_-p*h,b=l*m-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(a*g-s*v+c*y)+i*-(o*g-s*b+c*T)+n*+(o*v-a*b+c*E)+r*-(o*y-a*T+s*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],a=i[3],s=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],m=i[13],g=i[14],v=i[15],y=f*v-g*p,b=d*v-m*p,T=d*g-m*f,E=h*v-_*p,x=h*g-f*_,P=h*m-_*d,A=+(c*y-l*b+u*T),S=-(s*y-l*E+u*x),C=+(s*b-c*E+u*P),R=-(s*T-c*x+l*P),O=n*A+r*S+o*C+a*R;if(0===O)return t.copyFrom(this),this;var M=1/O,I=l*v-g*u,D=c*v-m*u,w=c*g-m*l,L=s*v-_*u,N=s*g-_*l,F=s*m-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,k=s*p-h*u,z=s*f-h*l,G=s*d-h*c,j=-(r*y-o*b+a*T),W=+(n*y-o*E+a*x),X=-(n*b-r*E+a*P),H=+(n*T-r*x+o*P),Y=+(r*I-o*D+a*w),K=-(n*I-o*L+a*N),Q=+(n*D-r*L+a*F),q=-(n*w-r*N+o*F),Z=-(r*B-o*U+a*V),J=+(n*B-o*k+a*z),$=-(n*U-r*k+a*G),ee=+(n*V-r*z+o*G);return e.FromValuesToRef(A*M,j*M,Y*M,Z*M,S*M,W*M,K*M,J*M,C*M,X*M,Q*M,$*M,R*M,H*M,q*M,ee*M,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e.x,e.y,e.z)},e.prototype.getTranslation=function(){return new c(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);var i=this._m;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],a=n[1],s=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],v=n[13],y=n[14],b=n[15],T=r[0],E=r[1],x=r[2],P=r[3],A=r[4],S=r[5],C=r[6],R=r[7],O=r[8],M=r[9],I=r[10],D=r[11],w=r[12],L=r[13],N=r[14],F=r[15];return t[i]=o*T+a*A+s*O+c*w,t[i+1]=o*E+a*S+s*M+c*L,t[i+2]=o*x+a*C+s*I+c*N,t[i+3]=o*P+a*R+s*D+c*F,t[i+4]=l*T+u*A+h*O+d*w,t[i+5]=l*E+u*S+h*M+d*L,t[i+6]=l*x+u*C+h*I+d*N,t[i+7]=l*P+u*R+h*D+d*F,t[i+8]=f*T+p*A+_*O+m*w,t[i+9]=f*E+p*S+_*M+m*L,t[i+10]=f*x+p*C+_*I+m*N,t[i+11]=f*P+p*R+_*D+m*F,t[i+12]=g*T+v*A+y*O+b*w,t[i+13]=g*E+v*S+y*M+b*L,t[i+14]=g*x+v*C+y*I+b*N,t[i+15]=g*P+v*R+y*D+b*F,this},e.prototype.equals=function(e){var t=e;if(!t)return !1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return "Matrix"},e.prototype.getHashCode=function(){for(var e=0|this._m[0],t=1;t<16;t++)e=397*e^(0|this._m[t]);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||d.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t.x||0===t.y||0===t.z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t.x,a=1/t.y,s=1/t.z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*a,r[5]*a,r[6]*a,0,r[8]*s,r[9]*s,r[10]*s,0,0,0,0,1,d.Matrix[0]),u.FromRotationMatrixToRef(d.Matrix[0],i);}return !0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new l(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=d.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t);},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=d.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i.x,o=1/i.y,a=1/i.z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*a,n[9]*a,n[10]*a,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated();},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated();},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated();},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated();},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!0,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=m._m;g[0]=e,g[1]=t,g[2]=i,g[3]=n,g[4]=r,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=h,g[12]=d,g[13]=f,g[14]=p,g[15]=_,m._markAsUpdated();},e.FromValues=function(t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=new e,v=g._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=a,v[6]=s,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=m,g._markAsUpdated(),g},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t.x,a=t.y,s=t.z,c=t.w,l=o+o,u=a+a,h=s+s,d=o*l,f=o*u,p=o*h,_=a*u,m=a*h,g=s*h,v=c*l,y=c*u,b=c*h,T=e.x,E=e.y,x=e.z;r[0]=(1-(_+g))*T,r[1]=(f+b)*T,r[2]=(p-y)*T,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(d+g))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(p+y)*x,r[9]=(m-v)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=i.x,r[13]=i.y,r[14]=i.z,r[15]=1,n._markAsUpdated();},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0);},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n);},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n);},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n);},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var a=i._m;a[0]=e.x*e.x*o+r,a[1]=e.x*e.y*o-e.z*n,a[2]=e.x*e.z*o+e.y*n,a[3]=0,a[4]=e.y*e.x*o+e.z*n,a[5]=e.y*e.y*o+r,a[6]=e.y*e.z*o-e.x*n,a[7]=0,a[8]=e.z*e.x*o-e.y*n,a[9]=e.z*e.y*o+e.x*n,a[10]=e.z*e.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated();},e.RotationAlignToRef=function(e,t,i){var n=c.Cross(t,e),r=c.Dot(t,e),o=1/(1+r),a=i._m;a[0]=n.x*n.x*o+r,a[1]=n.y*n.x*o-n.z,a[2]=n.z*n.x*o+n.y,a[3]=0,a[4]=n.x*n.y*o+n.z,a[5]=n.y*n.y*o+r,a[6]=n.z*n.y*o-n.x,a[7]=0,a[8]=n.x*n.z*o-n.y,a[9]=n.y*n.z*o+n.x,a[10]=n.z*n.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated();},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){u.RotationYawPitchRollToRef(e,t,i,d.Quaternion[0]),d.Quaternion[0].toRotationMatrix(n);},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n);},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n);},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,a=t.m,s=0;s<16;s++)r[s]=o[s]*(1-i)+a[s]*i;n._markAsUpdated();},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Quaternion[0],s=d.Vector3[1];t.decompose(o,a,s);var l=d.Vector3[2],h=d.Quaternion[1],f=d.Vector3[3];i.decompose(l,h,f);var p=d.Vector3[4];c.LerpToRef(o,l,n,p);var _=d.Quaternion[2];u.SlerpToRef(a,h,n,_);var m=d.Vector3[5];c.LerpToRef(s,f,n,m),e.ComposeToRef(p,_,m,r);},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];i.subtractToRef(t,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r);},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];t.subtractToRef(i,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r);},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var a=2/t,s=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===a&&1===s&&1===c&&0===l);},e.OrthoOffCenterLH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,a,s){var c=2/(i-t),l=2/(r-n),u=2/(a-o),h=-(a+o)/(a-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,s),s._markAsUpdated();},e.OrthoOffCenterRH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,a,s){e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s._m[10]*=-1;},e.PerspectiveLH=function(t,i,n,r){var o=new e,a=2*n/t,s=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1);},e.PerspectiveFovReverseLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,1,0,0,1,0,o),o._updateIdentityStatus(!1);},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=-(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1);},e.PerspectiveFovReverseRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,-1,0,0,-1,0,o),o._updateIdentityStatus(!1);},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,a=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(a+s),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(a-s)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated();},e.GetFinalMatrix=function(t,i,n,r,o,a){var s=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(s/2,0,0,0,0,-c/2,0,0,0,0,a-o,0,l+s/2,c/2+u,o,1),f=d.Matrix[0];return i.multiplyToRef(n,f),f.multiplyToRef(r,f),f.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[4],t[5]])},e.GetAsMatrix3x3=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]])},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty);},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,a=-2*n,s=-2*r,c=-2*o;e.FromValuesToRef(a*n+1,s*n,c*n,0,a*r,s*r+1,c*r,0,a*o,s*o,c*o+1,0,a*t.d,s*t.d,c*t.d,1,i);},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t.x,t.y,t.z,0,i.x,i.y,i.z,0,n.x,n.y,n.z,0,0,0,0,1,r);},e.FromQuaternionToRef=function(e,t){var i=e.x*e.x,n=e.y*e.y,r=e.z*e.z,o=e.x*e.y,a=e.z*e.w,s=e.z*e.x,c=e.y*e.w,l=e.y*e.z,u=e.x*e.w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+a),t._m[2]=2*(s-c),t._m[3]=0,t._m[4]=2*(o-a),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(s+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated();},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),d=function(){function e(){}return e.Vector3=o.a.BuildArray(6,c.Zero),e.Matrix=o.a.BuildArray(2,h.Identity),e.Quaternion=o.a.BuildArray(3,u.Zero),e}(),f=function(){function e(){}return e.Vector2=o.a.BuildArray(3,s.Zero),e.Vector3=o.a.BuildArray(13,c.Zero),e.Vector4=o.a.BuildArray(3,l.Zero),e.Quaternion=o.a.BuildArray(2,u.Zero),e.Matrix=o.a.BuildArray(8,h.Identity),e}();a.a.RegisteredTypes["BABYLON.Vector2"]=s,a.a.RegisteredTypes["BABYLON.Vector3"]=c,a.a.RegisteredTypes["BABYLON.Vector4"]=l,a.a.RegisteredTypes["BABYLON.Matrix"]=h;},function(e,t,i){i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return a}),i.d(t,"b",function(){return s}),i.d(t,"e",function(){return c});
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var BABYLON$1 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-materials",["babylonjs"],t):"object"==typeof exports?exports["babylonjs-materials"]=t(require("babylonjs")):e.MATERIALS=t(e.BABYLON);}("undefined"!=typeof self?self:"undefined"!=typeof global?global:undefined,function(e){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=19)}([function(t,i){t.exports=e;},function(e,t,i){i.d(t,"b",function(){return r}),i.d(t,"a",function(){return o});
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-gui",["babylonjs"],e):"object"==typeof exports?exports["babylonjs-gui"]=e(require("babylonjs")):(t.BABYLON=t.BABYLON||{},t.BABYLON.GUI=e(t.BABYLON));}("undefined"!=typeof self?self:"undefined"!=typeof global?global:undefined,function(t){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(e,i){e.exports=t;},function(t,e,i){i.r(e);
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var GUI = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isFunction(x) {
        return typeof x === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = /*@__PURE__*/ new Error();
                /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function hostReportError(err) {
        setTimeout(function () { throw err; }, 0);
    }

    /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        },
        complete: function () { }
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isObject(x) {
        return x !== null && typeof x === 'object';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
        function UnsubscriptionErrorImpl(errors) {
            Error.call(this);
            this.message = errors ?
                errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
            this.name = 'UnsubscriptionError';
            this.errors = errors;
            return this;
        }
        UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
    })();
    var UnsubscriptionError = UnsubscriptionErrorImpl;

    /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
    var Subscription = /*@__PURE__*/ (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (_parentOrParents instanceof Subscription) {
                _parentOrParents.remove(this);
            }
            else if (_parentOrParents !== null) {
                for (var index = 0; index < _parentOrParents.length; ++index) {
                    var parent_1 = _parentOrParents[index];
                    parent_1.remove(this);
                }
            }
            if (isFunction(_unsubscribe)) {
                try {
                    _unsubscribe.call(this);
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                }
            }
            if (isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        try {
                            sub.unsubscribe();
                        }
                        catch (e) {
                            errors = errors || [];
                            if (e instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                            }
                            else {
                                errors.push(e);
                            }
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            var subscription = teardown;
            if (!teardown) {
                return Subscription.EMPTY;
            }
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (!(subscription instanceof Subscription)) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default: {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }
            var _parentOrParents = subscription._parentOrParents;
            if (_parentOrParents === null) {
                subscription._parentOrParents = this;
            }
            else if (_parentOrParents instanceof Subscription) {
                if (_parentOrParents === this) {
                    return subscription;
                }
                subscription._parentOrParents = [_parentOrParents, this];
            }
            else if (_parentOrParents.indexOf(this) === -1) {
                _parentOrParents.push(this);
            }
            else {
                return subscription;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions === null) {
                this._subscriptions = [subscription];
            }
            else {
                subscriptions.push(subscription);
            }
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var rxSubscriber = /*@__PURE__*/ (function () {
        return typeof Symbol === 'function'
            ? /*@__PURE__*/ Symbol('rxSubscriber')
            : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
    })();

    /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
    var Subscriber = /*@__PURE__*/ (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }

    /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function identity(x) {
        return x;
    }

    /** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
    function pipeFromArray(fns) {
        if (fns.length === 0) {
            return identity;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }

    /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
    var Observable = /*@__PURE__*/ (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                sink.add(operator.call(sink, this.source));
            }
            else {
                sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor =  Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var MapOperator = /*@__PURE__*/ (function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    var MapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));

    var GameUtils = /** @class */ (function () {
        function GameUtils() {
        }
        /**
         * Creates a basic ground
         * @param scene
         */
        GameUtils.createGround = function (scene) {
            // Ground
            var groundMaterial = new undefined("groundMaterial", scene);
            groundMaterial.diffuseTexture = new undefined("./assets/texture/ground.jpg", scene);
            //groundMaterial.diffuseTexture.uScale = groundMaterial.diffuseTexture.vScale = 4;
            var ground = undefined("ground", 512, 512, 32, scene, false);
            ground.position.y = -1;
            ground.material = groundMaterial;
            return ground;
        };
        /**
         * Creates a second ground and adds a watermaterial to it
         * @param scene
         */
        GameUtils.createWater = function (scene) {
            // Water
            var waterMesh = undefined("waterMesh", 512, 512, 32, scene, false);
            var waterMaterial = GameUtils.createWaterMaterial("water", "./assets/texture/waterbump.png", scene);
            waterMesh.material = waterMaterial;
            waterMesh.position.y = 4;
            return waterMaterial;
        };
        /**
         * Creates a Gui Texture
         */
        GameUtils.createGUI = function () {
            return undefined("UI");
        };
        /**
         * Creates a Button that tells the Shark to swim or not
         * @param guiTexture
         * @param btnText
         * @param btnClicked
         */
        GameUtils.createButtonSwim = function (guiTexture, btnText, btnClicked) {
            var btnTest = undefined("but1", btnText);
            btnTest.width = "150px";
            btnTest.height = "40px";
            btnTest.color = "white";
            btnTest.background = "grey";
            btnTest.onPointerUpObservable.add(function () {
                if (btnClicked) {
                    btnClicked(btnTest);
                }
            });
            btnTest.horizontalAlignment = undefined;
            btnTest.verticalAlignment = undefined;
            btnTest.left = 12;
            btnTest.top = 12;
            guiTexture.addControl(btnTest);
        };
        GameUtils.createVerticalLine = function (scene, position) {
            //Array of points to construct lines
            var myPoints = [
                new undefined(position.x, 0, position.y),
                new undefined(position.x, 100, position.y),
            ];
            //Create lines 
            var lines = undefined("lines", { points: myPoints }, scene);
        };
        /**
         *
         * @param guiTexture
         */
        GameUtils.createCoordinatesText = function (guiTexture) {
            var txtX = new undefined();
            txtX.height = "20px";
            txtX.width = "500px";
            txtX.fontSize = 20;
            txtX.text = "X: ";
            txtX.textHorizontalAlignment = undefined;
            txtX.textVerticalAlignment = undefined;
            txtX.horizontalAlignment = undefined;
            txtX.verticalAlignment = undefined;
            txtX.left = 20;
            txtX.top = 60;
            var txtY = new undefined();
            txtY.height = "20px";
            txtY.width = "500px";
            txtY.fontSize = 20;
            txtY.text = "Y: ";
            txtY.textHorizontalAlignment = undefined;
            txtY.textVerticalAlignment = undefined;
            txtY.horizontalAlignment = undefined;
            txtY.verticalAlignment = undefined;
            txtY.left = 20;
            txtY.top = 90;
            var txtZ = new undefined();
            txtZ.height = "20px";
            txtZ.width = "500px";
            txtZ.fontSize = 20;
            txtZ.text = "Z: ";
            txtZ.textHorizontalAlignment = undefined;
            txtZ.textVerticalAlignment = undefined;
            txtZ.horizontalAlignment = undefined;
            txtZ.verticalAlignment = undefined;
            txtZ.left = 20;
            txtZ.top = 120;
            guiTexture.addControl(txtX);
            guiTexture.addControl(txtY);
            guiTexture.addControl(txtZ);
            return {
                txtX: txtX,
                txtY: txtY,
                txtZ: txtZ
            };
        };
        /**
         * Returns Observable of mesh array, which are loaded from a file.
         * After mesh importing all meshes become given scaling, position and rotation.
         * @param fileName
         * @param scene
         * @param scaling
         * @param position
         * @param rotationQuaternion
         */
        GameUtils.createMeshFromObjFile = function (folderName, fileName, scene, scaling, position, rotationQuaternion) {
            if (!fileName) {
                return Observable["throw"]("GameUtils.createMeshFromObjFile: parameter fileName is empty");
            }
            if (!scene) {
                return Observable["throw"]("GameUtils.createMeshFromObjFile: parameter scene is empty");
            }
            if (!folderName)
                folderName = "";
            if (!scaling)
                scaling = undefined();
            if (!position)
                position = undefined();
            if (!rotationQuaternion)
                rotationQuaternion = undefined(0, 0, 0);
            var assetsFolder = './assets/' + folderName;
            return Observable.create(function (observer) {
                undefined(null, assetsFolder, fileName, scene, function (meshes, particleSystems, skeletons) {
                    meshes.forEach(function (mesh) {
                        mesh.position = position;
                        mesh.rotationQuaternion = rotationQuaternion;
                        mesh.scaling = scaling;
                    });
                    console.log("Imported Mesh: " + fileName);
                    observer.next(meshes);
                    observer.complete();
                });
            });
        };
        /**
         * Creates a new skybox with the picttures under fileName.
         * @param name
         * @param fileName
         * @param scene
         */
        GameUtils.createSkybox = function (name, fileName, scene) {
            if (!name) {
                console.error("GameUtils.createSkyBox: name is not defined");
                return;
            }
            if (!fileName) {
                console.error("GameUtils.createSkyBox: fileName is not defined");
                return;
            }
            if (!scene) {
                console.error("GameUtils.createSkyBox: scene is not defined");
                return;
            }
            // Skybox
            var skybox = undefined(name, 1000.0, scene);
            var skyboxMaterial = new undefined(name, scene);
            skyboxMaterial.backFaceCulling = false;
            skyboxMaterial.reflectionTexture = new undefined("./assets/texture/skybox/TropicalSunnyDay", scene);
            skyboxMaterial.reflectionTexture.coordinatesMode = undefined;
            skyboxMaterial.diffuseColor = new undefined(0, 0, 0);
            skyboxMaterial.specularColor = new undefined(0, 0, 0);
            skyboxMaterial.disableLighting = true;
            skybox.material = skyboxMaterial;
        };
        /**
         * Creates a new WaterMaterial Object with a given name. The noiseFile descrips the noise in the water,
         * @param name
         * @param noiseFile
         * @param scene
         */
        GameUtils.createWaterMaterial = function (name, noiseFile, scene) {
            if (!name) {
                console.error("GameUtils.createWaterMaterial: name is not defined");
                return;
            }
            if (!noiseFile) {
                console.error("GameUtils.createWaterMaterial: noiseFile is not defined");
                return;
            }
            if (!scene) {
                console.error("GameUtils.createWaterMaterial: scene is not defined");
                return;
            }
            // Water material
            var water = new undefined(name, scene);
            water.bumpTexture = new undefined(noiseFile, scene);
            // Water properties
            water.windForce = -15;
            water.waveHeight = 0;
            water.windDirection = new undefined(1, 1);
            water.waterColor = new undefined(0.25, 0.88, 0.82);
            water.colorBlendFactor = 0.3;
            water.bumpHeight = 0.1;
            water.waveLength = 0.1;
            return water;
        };
        /**
         * Loads a shark model from .obj file and adds it scene.
         * @param scene
         */
        GameUtils.createShark = function (scene) {
            // create a mesh object with loaded from file
            var rootMesh = undefined("rootMesh", { size: 1 }, scene);
            rootMesh.isVisible = false;
            rootMesh.position = new undefined(0, 0.4, 0);
            rootMesh.rotation.y = -3 * Math.PI / 4;
            return GameUtils.createMeshFromObjFile("mesh/", "mesh.obj", scene, new undefined(1, 1, 1))
                .pipe(map(function (meshes) {
                meshes.forEach(function (mesh) {
                    mesh.parent = rootMesh;
                });
                return rootMesh;
            }));
        };
        return GameUtils;
    }());

    var Game = /** @class */ (function () {
        function Game(canvasElement) {
            this._sharkAnimationTime = 0;
            this._swim = false;
            this._txtCoordinates = null;
            // Create canvas and engine
            this._canvas = document.getElementById(canvasElement);
            // console.log("BABY", BABYLON.Engine)
            this._engine = new undefined(this._canvas, true);
        }
        /**
         * Creates the BABYLONJS Scene
         */
        Game.prototype.createScene = function () {
            var _this = this;
            // create a basic BJS Scene object
            this._scene = new undefined(this._engine);
            // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
            this._camera = new undefined("Camera", 3 * Math.PI / 2, Math.PI / 4, 30, undefined(), this._scene);
            this._camera.attachControl(this._canvas, true);
            // create a basic light, aiming 0,1,0 - meaning, to the sky
            this._light = new undefined("light", new undefined(0, 1, 0), this._scene);
            // create the skybox
            var skybox = GameUtils.createSkybox("skybox", "./assets/texture/skybox/TropicalSunnyDay", this._scene);
            // creates the sandy ground
            var ground = GameUtils.createGround(this._scene);
            // creates the watermaterial and adds the relevant nodes to the renderlist
            var waterMaterial = GameUtils.createWater(this._scene);
            waterMaterial.addToRenderList(skybox);
            waterMaterial.addToRenderList(ground);
            // create a shark mesh from a .obj file
            GameUtils.createShark(this._scene)
                .subscribe(function (sharkMesh) {
                _this._sharkMesh = sharkMesh;
                _this._sharkMesh.getChildren().forEach(function (mesh) {
                    waterMaterial.addToRenderList(mesh);
                });
            });
            // finally the new ui
            var guiTexture = GameUtils.createGUI();
            // Button to start shark animation
            GameUtils.createButtonSwim(guiTexture, "Start Swimming", function (btn) {
                var textControl = btn.children[0];
                _this._swim = !_this._swim;
                if (_this._swim) {
                    textControl.text = "Stop Swimming";
                }
                else {
                    _this._sharkAnimationTime = 0;
                    textControl.text = "Start Swimming";
                }
            });
            // Debug Text for Shark coordinates
            this._txtCoordinates = GameUtils.createCoordinatesText(guiTexture);
            // Physics engine also works
            var gravity = new undefined(0, -0.9, 0);
            this._scene.enablePhysics(gravity, new undefined());
        };
        /**
         * Starts the animation loop.
         */
        Game.prototype.animate = function () {
            var _this = this;
            this._scene.registerBeforeRender(function () {
                var deltaTime = (1 / _this._engine.getFps());
                _this.animateShark(deltaTime);
            });
            // run the render loop
            this._engine.runRenderLoop(function () {
                _this._scene.render();
            });
            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                _this._engine.resize();
            });
        };
        Game.prototype.animateShark = function (deltaTime) {
            var _this = this;
            this.debugFirstMeshCoordinate(this._sharkMesh);
            if (this._sharkMesh && this._swim) {
                this._sharkAnimationTime += deltaTime;
                this._sharkMesh.getChildren().forEach(function (mesh) {
                    var realMesh = mesh;
                    var vertexData = undefined(realMesh);
                    var positions = vertexData.positions;
                    var numberOfPoints = positions.length / 3;
                    for (var i = 0; i < numberOfPoints; i++) {
                        var vertex = new undefined(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                        vertex.x += (Math.sin(0.15 * vertex.z + _this._sharkAnimationTime * 4 - 1.6) * 0.05);
                        positions[i * 3] = vertex.x;
                    }
                    vertexData.applyToMesh(mesh);
                });
            }
        };
        /**
         * Prints the coordinates of the first vertex of a mesh
         */
        Game.prototype.debugFirstMeshCoordinate = function (mesh) {
            if (!mesh || !mesh.getChildren()) {
                return;
            }
            var firstMesh = mesh.getChildren()[0];
            var vertexData = undefined(firstMesh);
            var positions = vertexData.positions;
            var firstVertex = new undefined(positions[0], positions[1], positions[3]);
            this.updateCoordinateTexture(firstVertex);
        };
        /**
         * Prints the given Vector3
         * @param coordinates
         */
        Game.prototype.updateCoordinateTexture = function (coordinates) {
            if (!coordinates) {
                return;
            }
            this._txtCoordinates.txtX.text = "X: " + coordinates.x;
            this._txtCoordinates.txtY.text = "Y: " + coordinates.y;
            this._txtCoordinates.txtZ.text = "Z: " + coordinates.z;
        };
        return Game;
    }());

    /*
     * Copyright (c) 2015 cannon.js Authors
     *
     * Permission is hereby granted, free of charge, to any person
     * obtaining a copy of this software and associated documentation
     * files (the "Software"), to deal in the Software without
     * restriction, including without limitation the rights to use, copy,
     * modify, merge, publish, distribute, sublicense, and/or sell copies
     * of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */

    !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&false)define([],e);else {var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.CANNON=e();}}(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
    module.exports={
      "name": "cannon",
      "version": "0.6.2",
      "description": "A lightweight 3D physics engine written in JavaScript.",
      "homepage": "https://github.com/schteppe/cannon.js",
      "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
      "keywords": [
        "cannon.js",
        "cannon",
        "physics",
        "engine",
        "3d"
      ],
      "main": "./build/cannon.js",
      "engines": {
        "node": "*"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/schteppe/cannon.js.git"
      },
      "bugs": {
        "url": "https://github.com/schteppe/cannon.js/issues"
      },
      "licenses": [
        {
          "type": "MIT"
        }
      ],
      "devDependencies": {
        "jshint": "latest",
        "uglify-js": "latest",
        "nodeunit": "^0.9.0",
        "grunt": "~0.4.0",
        "grunt-contrib-jshint": "~0.1.1",
        "grunt-contrib-nodeunit": "^0.4.1",
        "grunt-contrib-concat": "~0.1.3",
        "grunt-contrib-uglify": "^0.5.1",
        "grunt-browserify": "^2.1.4",
        "grunt-contrib-yuidoc": "^0.5.2",
        "browserify": "*"
      },
      "dependencies": {}
    };

    },{}],2:[function(_dereq_,module,exports){
    // Export classes
    module.exports = {
        version :                       _dereq_('../package.json').version,

        AABB :                          _dereq_('./collision/AABB'),
        ArrayCollisionMatrix :          _dereq_('./collision/ArrayCollisionMatrix'),
        Body :                          _dereq_('./objects/Body'),
        Box :                           _dereq_('./shapes/Box'),
        Broadphase :                    _dereq_('./collision/Broadphase'),
        Constraint :                    _dereq_('./constraints/Constraint'),
        ContactEquation :               _dereq_('./equations/ContactEquation'),
        Narrowphase :                   _dereq_('./world/Narrowphase'),
        ConeTwistConstraint :           _dereq_('./constraints/ConeTwistConstraint'),
        ContactMaterial :               _dereq_('./material/ContactMaterial'),
        ConvexPolyhedron :              _dereq_('./shapes/ConvexPolyhedron'),
        Cylinder :                      _dereq_('./shapes/Cylinder'),
        DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),
        Equation :                      _dereq_('./equations/Equation'),
        EventTarget :                   _dereq_('./utils/EventTarget'),
        FrictionEquation :              _dereq_('./equations/FrictionEquation'),
        GSSolver :                      _dereq_('./solver/GSSolver'),
        GridBroadphase :                _dereq_('./collision/GridBroadphase'),
        Heightfield :                   _dereq_('./shapes/Heightfield'),
        HingeConstraint :               _dereq_('./constraints/HingeConstraint'),
        LockConstraint :                _dereq_('./constraints/LockConstraint'),
        Mat3 :                          _dereq_('./math/Mat3'),
        Material :                      _dereq_('./material/Material'),
        NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),
        ObjectCollisionMatrix :         _dereq_('./collision/ObjectCollisionMatrix'),
        Pool :                          _dereq_('./utils/Pool'),
        Particle :                      _dereq_('./shapes/Particle'),
        Plane :                         _dereq_('./shapes/Plane'),
        PointToPointConstraint :        _dereq_('./constraints/PointToPointConstraint'),
        Quaternion :                    _dereq_('./math/Quaternion'),
        Ray :                           _dereq_('./collision/Ray'),
        RaycastVehicle :                _dereq_('./objects/RaycastVehicle'),
        RaycastResult :                 _dereq_('./collision/RaycastResult'),
        RigidVehicle :                  _dereq_('./objects/RigidVehicle'),
        RotationalEquation :            _dereq_('./equations/RotationalEquation'),
        RotationalMotorEquation :       _dereq_('./equations/RotationalMotorEquation'),
        SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),
        SPHSystem :                     _dereq_('./objects/SPHSystem'),
        Shape :                         _dereq_('./shapes/Shape'),
        Solver :                        _dereq_('./solver/Solver'),
        Sphere :                        _dereq_('./shapes/Sphere'),
        SplitSolver :                   _dereq_('./solver/SplitSolver'),
        Spring :                        _dereq_('./objects/Spring'),
        Trimesh :                       _dereq_('./shapes/Trimesh'),
        Vec3 :                          _dereq_('./math/Vec3'),
        Vec3Pool :                      _dereq_('./utils/Vec3Pool'),
        World :                         _dereq_('./world/World'),
    };

    },{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(_dereq_,module,exports){
    var Vec3 = _dereq_('../math/Vec3');
    var Utils = _dereq_('../utils/Utils');

    module.exports = AABB;

    /**
     * Axis aligned bounding box class.
     * @class AABB
     * @constructor
     * @param {Object} [options]
     * @param {Vec3}   [options.upperBound]
     * @param {Vec3}   [options.lowerBound]
     */
    function AABB(options){
        options = options || {};

        /**
         * The lower bound of the bounding box.
         * @property lowerBound
         * @type {Vec3}
         */
        this.lowerBound = new Vec3();
        if(options.lowerBound){
            this.lowerBound.copy(options.lowerBound);
        }

        /**
         * The upper bound of the bounding box.
         * @property upperBound
         * @type {Vec3}
         */
        this.upperBound = new Vec3();
        if(options.upperBound){
            this.upperBound.copy(options.upperBound);
        }
    }

    var tmp = new Vec3();

    /**
     * Set the AABB bounds from a set of points.
     * @method setFromPoints
     * @param {Array} points An array of Vec3's.
     * @param {Vec3} position
     * @param {Quaternion} quaternion
     * @param {number} skinSize
     * @return {AABB} The self object
     */
    AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
        var l = this.lowerBound,
            u = this.upperBound,
            q = quaternion;

        // Set to the first point
        l.copy(points[0]);
        if(q){
            q.vmult(l, l);
        }
        u.copy(l);

        for(var i = 1; i<points.length; i++){
            var p = points[i];

            if(q){
                q.vmult(p, tmp);
                p = tmp;
            }

            if(p.x > u.x){ u.x = p.x; }
            if(p.x < l.x){ l.x = p.x; }
            if(p.y > u.y){ u.y = p.y; }
            if(p.y < l.y){ l.y = p.y; }
            if(p.z > u.z){ u.z = p.z; }
            if(p.z < l.z){ l.z = p.z; }
        }

        // Add offset
        if (position) {
            position.vadd(l, l);
            position.vadd(u, u);
        }

        if(skinSize){
            l.x -= skinSize;
            l.y -= skinSize;
            l.z -= skinSize;
            u.x += skinSize;
            u.y += skinSize;
            u.z += skinSize;
        }

        return this;
    };

    /**
     * Copy bounds from an AABB to this AABB
     * @method copy
     * @param  {AABB} aabb Source to copy from
     * @return {AABB} The this object, for chainability
     */
    AABB.prototype.copy = function(aabb){
        this.lowerBound.copy(aabb.lowerBound);
        this.upperBound.copy(aabb.upperBound);
        return this;
    };

    /**
     * Clone an AABB
     * @method clone
     */
    AABB.prototype.clone = function(){
        return new AABB().copy(this);
    };

    /**
     * Extend this AABB so that it covers the given AABB too.
     * @method extend
     * @param  {AABB} aabb
     */
    AABB.prototype.extend = function(aabb){
        // Extend lower bound
        var l = aabb.lowerBound.x;
        if(this.lowerBound.x > l){
            this.lowerBound.x = l;
        }

        // Upper
        var u = aabb.upperBound.x;
        if(this.upperBound.x < u){
            this.upperBound.x = u;
        }

        // Extend lower bound
        var l = aabb.lowerBound.y;
        if(this.lowerBound.y > l){
            this.lowerBound.y = l;
        }

        // Upper
        var u = aabb.upperBound.y;
        if(this.upperBound.y < u){
            this.upperBound.y = u;
        }

        // Extend lower bound
        var l = aabb.lowerBound.z;
        if(this.lowerBound.z > l){
            this.lowerBound.z = l;
        }

        // Upper
        var u = aabb.upperBound.z;
        if(this.upperBound.z < u){
            this.upperBound.z = u;
        }
    };

    /**
     * Returns true if the given AABB overlaps this AABB.
     * @method overlaps
     * @param  {AABB} aabb
     * @return {Boolean}
     */
    AABB.prototype.overlaps = function(aabb){
        var l1 = this.lowerBound,
            u1 = this.upperBound,
            l2 = aabb.lowerBound,
            u2 = aabb.upperBound;

        //      l2        u2
        //      |---------|
        // |--------|
        // l1       u1

        return ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x)) &&
               ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y)) &&
               ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));
    };

    /**
     * Returns true if the given AABB is fully contained in this AABB.
     * @method contains
     * @param {AABB} aabb
     * @return {Boolean}
     */
    AABB.prototype.contains = function(aabb){
        var l1 = this.lowerBound,
            u1 = this.upperBound,
            l2 = aabb.lowerBound,
            u2 = aabb.upperBound;

        //      l2        u2
        //      |---------|
        // |---------------|
        // l1              u1

        return (
            (l1.x <= l2.x && u1.x >= u2.x) &&
            (l1.y <= l2.y && u1.y >= u2.y) &&
            (l1.z <= l2.z && u1.z >= u2.z)
        );
    };

    /**
     * @method getCorners
     * @param {Vec3} a
     * @param {Vec3} b
     * @param {Vec3} c
     * @param {Vec3} d
     * @param {Vec3} e
     * @param {Vec3} f
     * @param {Vec3} g
     * @param {Vec3} h
     */
    AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
        var l = this.lowerBound,
            u = this.upperBound;

        a.copy(l);
        b.set( u.x, l.y, l.z );
        c.set( u.x, u.y, l.z );
        d.set( l.x, u.y, u.z );
        e.set( u.x, l.y, l.z );
        f.set( l.x, u.y, l.z );
        g.set( l.x, l.y, u.z );
        h.copy(u);
    };

    var transformIntoFrame_corners = [
        new Vec3(),
        new Vec3(),
        new Vec3(),
        new Vec3(),
        new Vec3(),
        new Vec3(),
        new Vec3(),
        new Vec3()
    ];

    /**
     * Get the representation of an AABB in another frame.
     * @method toLocalFrame
     * @param  {Transform} frame
     * @param  {AABB} target
     * @return {AABB} The "target" AABB object.
     */
    AABB.prototype.toLocalFrame = function(frame, target){

        var corners = transformIntoFrame_corners;
        var a = corners[0];
        var b = corners[1];
        var c = corners[2];
        var d = corners[3];
        var e = corners[4];
        var f = corners[5];
        var g = corners[6];
        var h = corners[7];

        // Get corners in current frame
        this.getCorners(a, b, c, d, e, f, g, h);

        // Transform them to new local frame
        for(var i=0; i !== 8; i++){
            var corner = corners[i];
            frame.pointToLocal(corner, corner);
        }

        return target.setFromPoints(corners);
    };

    /**
     * Get the representation of an AABB in the global frame.
     * @method toWorldFrame
     * @param  {Transform} frame
     * @param  {AABB} target
     * @return {AABB} The "target" AABB object.
     */
    AABB.prototype.toWorldFrame = function(frame, target){

        var corners = transformIntoFrame_corners;
        var a = corners[0];
        var b = corners[1];
        var c = corners[2];
        var d = corners[3];
        var e = corners[4];
        var f = corners[5];
        var g = corners[6];
        var h = corners[7];

        // Get corners in current frame
        this.getCorners(a, b, c, d, e, f, g, h);

        // Transform them to new local frame
        for(var i=0; i !== 8; i++){
            var corner = corners[i];
            frame.pointToWorld(corner, corner);
        }

        return target.setFromPoints(corners);
    };

    },{"../math/Vec3":30,"../utils/Utils":53}],4:[function(_dereq_,module,exports){
    module.exports = ArrayCollisionMatrix;

    /**
     * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
     * @class ArrayCollisionMatrix
     * @constructor
     */
    function ArrayCollisionMatrix() {

        /**
         * The matrix storage
         * @property matrix
         * @type {Array}
         */
    	this.matrix = [];
    }

    /**
     * Get an element
     * @method get
     * @param  {Number} i
     * @param  {Number} j
     * @return {Number}
     */
    ArrayCollisionMatrix.prototype.get = function(i, j) {
    	i = i.index;
    	j = j.index;
        if (j > i) {
            var temp = j;
            j = i;
            i = temp;
        }
    	return this.matrix[(i*(i + 1)>>1) + j-1];
    };

    /**
     * Set an element
     * @method set
     * @param {Number} i
     * @param {Number} j
     * @param {Number} value
     */
    ArrayCollisionMatrix.prototype.set = function(i, j, value) {
    	i = i.index;
    	j = j.index;
        if (j > i) {
            var temp = j;
            j = i;
            i = temp;
        }
    	this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
    };

    /**
     * Sets all elements to zero
     * @method reset
     */
    ArrayCollisionMatrix.prototype.reset = function() {
    	for (var i=0, l=this.matrix.length; i!==l; i++) {
    		this.matrix[i]=0;
    	}
    };

    /**
     * Sets the max number of objects
     * @method setNumObjects
     * @param {Number} n
     */
    ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
    	this.matrix.length = n*(n-1)>>1;
    };

    },{}],5:[function(_dereq_,module,exports){
    var Body = _dereq_('../objects/Body');
    var Vec3 = _dereq_('../math/Vec3');
    var Quaternion = _dereq_('../math/Quaternion');
    var Shape = _dereq_('../shapes/Shape');
    var Plane = _dereq_('../shapes/Plane');

    module.exports = Broadphase;

    /**
     * Base class for broadphase implementations
     * @class Broadphase
     * @constructor
     * @author schteppe
     */
    function Broadphase(){
        /**
        * The world to search for collisions in.
        * @property world
        * @type {World}
        */
        this.world = null;

        /**
         * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
         * @property useBoundingBoxes
         * @type {Boolean}
         */
        this.useBoundingBoxes = false;

        /**
         * Set to true if the objects in the world moved.
         * @property {Boolean} dirty
         */
        this.dirty = true;
    }

    /**
     * Get the collision pairs from the world
     * @method collisionPairs
     * @param {World} world The world to search in
     * @param {Array} p1 Empty array to be filled with body objects
     * @param {Array} p2 Empty array to be filled with body objects
     */
    Broadphase.prototype.collisionPairs = function(world,p1,p2){
        throw new Error("collisionPairs not implemented for this BroadPhase class!");
    };

    /**
     * Check if a body pair needs to be intersection tested at all.
     * @method needBroadphaseCollision
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @return {bool}
     */
    var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
    Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

        // Check collision filter masks
        if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
            return false;
        }

        // Check types
        if(((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyA.sleepState === Body.SLEEPING) &&
           ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyB.sleepState === Body.SLEEPING)) {
            // Both bodies are static, kinematic or sleeping. Skip.
            return false;
        }

        return true;
    };

    /**
     * Check if the bounding volumes of two bodies intersect.
     * @method intersectionTest
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {array} pairs1
     * @param {array} pairs2
      */
    Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
        if(this.useBoundingBoxes){
            this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
        } else {
            this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
        }
    };

    /**
     * Check if the bounding spheres of two bodies are intersecting.
     * @method doBoundingSphereBroadphase
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Array} pairs1 bodyA is appended to this array if intersection
     * @param {Array} pairs2 bodyB is appended to this array if intersection
     */
    var Broadphase_collisionPairs_r = new Vec3(), // Temp objects
        Broadphase_collisionPairs_normal =  new Vec3(),
        Broadphase_collisionPairs_quat =  new Quaternion(),
        Broadphase_collisionPairs_relpos  =  new Vec3();
    Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
        var r = Broadphase_collisionPairs_r;
        bodyB.position.vsub(bodyA.position,r);
        var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
        var norm2 = r.norm2();
        if(norm2 < boundingRadiusSum2){
            pairs1.push(bodyA);
            pairs2.push(bodyB);
        }
    };

    /**
     * Check if the bounding boxes of two bodies are intersecting.
     * @method doBoundingBoxBroadphase
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Array} pairs1
     * @param {Array} pairs2
     */
    Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
        if(bodyA.aabbNeedsUpdate){
            bodyA.computeAABB();
        }
        if(bodyB.aabbNeedsUpdate){
            bodyB.computeAABB();
        }

        // Check AABB / AABB
        if(bodyA.aabb.overlaps(bodyB.aabb)){
            pairs1.push(bodyA);
            pairs2.push(bodyB);
        }
    };

    /**
     * Removes duplicate pairs from the pair arrays.
     * @method makePairsUnique
     * @param {Array} pairs1
     * @param {Array} pairs2
     */
    var Broadphase_makePairsUnique_temp = { keys:[] },
        Broadphase_makePairsUnique_p1 = [],
        Broadphase_makePairsUnique_p2 = [];
    Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
        var t = Broadphase_makePairsUnique_temp,
            p1 = Broadphase_makePairsUnique_p1,
            p2 = Broadphase_makePairsUnique_p2,
            N = pairs1.length;

        for(var i=0; i!==N; i++){
            p1[i] = pairs1[i];
            p2[i] = pairs2[i];
        }

        pairs1.length = 0;
        pairs2.length = 0;

        for(var i=0; i!==N; i++){
            var id1 = p1[i].id,
                id2 = p2[i].id;
            var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
            t[key] = i;
            t.keys.push(key);
        }

        for(var i=0; i!==t.keys.length; i++){
            var key = t.keys.pop(),
                pairIndex = t[key];
            pairs1.push(p1[pairIndex]);
            pairs2.push(p2[pairIndex]);
            delete t[key];
        }
    };

    /**
     * To be implemented by subcasses
     * @method setWorld
     * @param {World} world
     */
    Broadphase.prototype.setWorld = function(world){
    };

    /**
     * Check if the bounding spheres of two bodies overlap.
     * @method boundingSphereCheck
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @return {boolean}
     */
    var bsc_dist = new Vec3();
    Broadphase.boundingSphereCheck = function(bodyA,bodyB){
        var dist = bsc_dist;
        bodyA.position.vsub(bodyB.position,dist);
        return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
    };

    /**
     * Returns all the bodies within the AABB.
     * @method aabbQuery
     * @param  {World} world
     * @param  {AABB} aabb
     * @param  {array} result An array to store resulting bodies in.
     * @return {array}
     */
    Broadphase.prototype.aabbQuery = function(world, aabb, result){
        console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
        return [];
    };
    },{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(_dereq_,module,exports){
    module.exports = GridBroadphase;

    var Broadphase = _dereq_('./Broadphase');
    var Vec3 = _dereq_('../math/Vec3');
    var Shape = _dereq_('../shapes/Shape');

    /**
     * Axis aligned uniform grid broadphase.
     * @class GridBroadphase
     * @constructor
     * @extends Broadphase
     * @todo Needs support for more than just planes and spheres.
     * @param {Vec3} aabbMin
     * @param {Vec3} aabbMax
     * @param {Number} nx Number of boxes along x
     * @param {Number} ny Number of boxes along y
     * @param {Number} nz Number of boxes along z
     */
    function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
        Broadphase.apply(this);
        this.nx = nx || 10;
        this.ny = ny || 10;
        this.nz = nz || 10;
        this.aabbMin = aabbMin || new Vec3(100,100,100);
        this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
    	var nbins = this.nx * this.ny * this.nz;
    	if (nbins <= 0) {
    		throw "GridBroadphase: Each dimension's n must be >0";
    	}
        this.bins = [];
    	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
    	this.bins.length = nbins;
    	this.binLengths.length = nbins;
    	for (var i=0;i<nbins;i++) {
    		this.bins[i]=[];
    		this.binLengths[i]=0;
    	}
    }
    GridBroadphase.prototype = new Broadphase();
    GridBroadphase.prototype.constructor = GridBroadphase;

    /**
     * Get all the collision pairs in the physics world
     * @method collisionPairs
     * @param {World} world
     * @param {Array} pairs1
     * @param {Array} pairs2
     */
    var GridBroadphase_collisionPairs_d = new Vec3();
    var GridBroadphase_collisionPairs_binPos = new Vec3();
    GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
        var N = world.numObjects(),
            bodies = world.bodies;

        var max = this.aabbMax,
            min = this.aabbMin,
            nx = this.nx,
            ny = this.ny,
            nz = this.nz;

    	var xstep = ny*nz;
    	var ystep = nz;
    	var zstep = 1;

        var xmax = max.x,
            ymax = max.y,
            zmax = max.z,
            xmin = min.x,
            ymin = min.y,
            zmin = min.z;

        var xmult = nx / (xmax-xmin),
            ymult = ny / (ymax-ymin),
            zmult = nz / (zmax-zmin);

        var binsizeX = (xmax - xmin) / nx,
            binsizeY = (ymax - ymin) / ny,
            binsizeZ = (zmax - zmin) / nz;

    	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

        var types = Shape.types;
        var SPHERE =            types.SPHERE,
            PLANE =             types.PLANE,
            BOX =               types.BOX,
            COMPOUND =          types.COMPOUND,
            CONVEXPOLYHEDRON =  types.CONVEXPOLYHEDRON;

        var bins=this.bins,
    		binLengths=this.binLengths,
            Nbins=this.bins.length;

        // Reset bins
        for(var i=0; i!==Nbins; i++){
            binLengths[i] = 0;
        }

        var ceil = Math.ceil;
    	var min = Math.min;
    	var max = Math.max;

    	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
    		var xoff0 = ((x0 - xmin) * xmult)|0,
    			yoff0 = ((y0 - ymin) * ymult)|0,
    			zoff0 = ((z0 - zmin) * zmult)|0,
    			xoff1 = ceil((x1 - xmin) * xmult),
    			yoff1 = ceil((y1 - ymin) * ymult),
    			zoff1 = ceil((z1 - zmin) * zmult);

    		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
    		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
    		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
    		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
    		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
    		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

    		xoff0 *= xstep;
    		yoff0 *= ystep;
    		zoff0 *= zstep;
    		xoff1 *= xstep;
    		yoff1 *= ystep;
    		zoff1 *= zstep;

    		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
    			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
    				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
    					var idx = xoff+yoff+zoff;
    					bins[idx][binLengths[idx]++] = bi;
    				}
    			}
    		}
    	}

        // Put all bodies into the bins
        for(var i=0; i!==N; i++){
            var bi = bodies[i];
            var si = bi.shape;

            switch(si.type){
            case SPHERE:
                // Put in bin
                // check if overlap with other bins
                var x = bi.position.x,
                    y = bi.position.y,
                    z = bi.position.z;
                var r = si.radius;

    			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
                break;

            case PLANE:
                if(si.worldNormalNeedsUpdate){
                    si.computeWorldNormal(bi.quaternion);
                }
                var planeNormal = si.worldNormal;

    			//Relative position from origin of plane object to the first bin
    			//Incremented as we iterate through the bins
    			var xreset = xmin + binsizeX*0.5 - bi.position.x,
    				yreset = ymin + binsizeY*0.5 - bi.position.y,
    				zreset = zmin + binsizeZ*0.5 - bi.position.z;

                var d = GridBroadphase_collisionPairs_d;
    			d.set(xreset, yreset, zreset);

    			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
    				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
    					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
    						if (d.dot(planeNormal) < binRadius) {
    							var idx = xoff + yoff + zoff;
    							bins[idx][binLengths[idx]++] = bi;
    						}
    					}
    				}
    			}
                break;

            default:
    			if (bi.aabbNeedsUpdate) {
    				bi.computeAABB();
    			}

    			addBoxToBins(
    				bi.aabb.lowerBound.x,
    				bi.aabb.lowerBound.y,
    				bi.aabb.lowerBound.z,
    				bi.aabb.upperBound.x,
    				bi.aabb.upperBound.y,
    				bi.aabb.upperBound.z,
    				bi);
                break;
            }
        }

        // Check each bin
        for(var i=0; i!==Nbins; i++){
    		var binLength = binLengths[i];
    		//Skip bins with no potential collisions
    		if (binLength > 1) {
    			var bin = bins[i];

    			// Do N^2 broadphase inside
    			for(var xi=0; xi!==binLength; xi++){
    				var bi = bin[xi];
    				for(var yi=0; yi!==xi; yi++){
    					var bj = bin[yi];
    					if(this.needBroadphaseCollision(bi,bj)){
    						this.intersectionTest(bi,bj,pairs1,pairs2);
    					}
    				}
    			}
    		}
        }

    //	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
    //		console.log("layer "+zi);
    //		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
    //			var row = '';
    //			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
    //				var idx = xoff + yoff + zoff;
    //				row += ' ' + binLengths[idx];
    //			}
    //			console.log(row);
    //		}
    //	}

        this.makePairsUnique(pairs1,pairs2);
    };

    },{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(_dereq_,module,exports){
    module.exports = NaiveBroadphase;

    var Broadphase = _dereq_('./Broadphase');
    var AABB = _dereq_('./AABB');

    /**
     * Naive broadphase implementation, used in lack of better ones.
     * @class NaiveBroadphase
     * @constructor
     * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
     * @extends Broadphase
     */
    function NaiveBroadphase(){
        Broadphase.apply(this);
    }
    NaiveBroadphase.prototype = new Broadphase();
    NaiveBroadphase.prototype.constructor = NaiveBroadphase;

    /**
     * Get all the collision pairs in the physics world
     * @method collisionPairs
     * @param {World} world
     * @param {Array} pairs1
     * @param {Array} pairs2
     */
    NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
        var bodies = world.bodies,
            n = bodies.length,
            i,j,bi,bj;

        // Naive N^2 ftw!
        for(i=0; i!==n; i++){
            for(j=0; j!==i; j++){

                bi = bodies[i];
                bj = bodies[j];

                if(!this.needBroadphaseCollision(bi,bj)){
                    continue;
                }

                this.intersectionTest(bi,bj,pairs1,pairs2);
            }
        }
    };

    var tmpAABB = new AABB();

    /**
     * Returns all the bodies within an AABB.
     * @method aabbQuery
     * @param  {World} world
     * @param  {AABB} aabb
     * @param {array} result An array to store resulting bodies in.
     * @return {array}
     */
    NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
        result = result || [];

        for(var i = 0; i < world.bodies.length; i++){
            var b = world.bodies[i];

            if(b.aabbNeedsUpdate){
                b.computeAABB();
            }

            // Ugly hack until Body gets aabb
            if(b.aabb.overlaps(aabb)){
                result.push(b);
            }
        }

        return result;
    };
    },{"./AABB":3,"./Broadphase":5}],8:[function(_dereq_,module,exports){
    module.exports = ObjectCollisionMatrix;

    /**
     * Records what objects are colliding with each other
     * @class ObjectCollisionMatrix
     * @constructor
     */
    function ObjectCollisionMatrix() {

        /**
         * The matrix storage
         * @property matrix
         * @type {Object}
         */
    	this.matrix = {};
    }

    /**
     * @method get
     * @param  {Number} i
     * @param  {Number} j
     * @return {Number}
     */
    ObjectCollisionMatrix.prototype.get = function(i, j) {
    	i = i.id;
    	j = j.id;
        if (j > i) {
            var temp = j;
            j = i;
            i = temp;
        }
    	return i+'-'+j in this.matrix;
    };

    /**
     * @method set
     * @param  {Number} i
     * @param  {Number} j
     * @param {Number} value
     */
    ObjectCollisionMatrix.prototype.set = function(i, j, value) {
    	i = i.id;
    	j = j.id;
        if (j > i) {
            var temp = j;
            j = i;
            i = temp;
    	}
    	if (value) {
    		this.matrix[i+'-'+j] = true;
    	}
    	else {
    		delete this.matrix[i+'-'+j];
    	}
    };

    /**
     * Empty the matrix
     * @method reset
     */
    ObjectCollisionMatrix.prototype.reset = function() {
    	this.matrix = {};
    };

    /**
     * Set max number of objects
     * @method setNumObjects
     * @param {Number} n
     */
    ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
    };

    },{}],9:[function(_dereq_,module,exports){
    module.exports = Ray;

    var Vec3 = _dereq_('../math/Vec3');
    var Quaternion = _dereq_('../math/Quaternion');
    var Transform = _dereq_('../math/Transform');
    var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
    var Box = _dereq_('../shapes/Box');
    var RaycastResult = _dereq_('../collision/RaycastResult');
    var Shape = _dereq_('../shapes/Shape');
    var AABB = _dereq_('../collision/AABB');

    /**
     * A line in 3D space that intersects bodies and return points.
     * @class Ray
     * @constructor
     * @param {Vec3} from
     * @param {Vec3} to
     */
    function Ray(from, to){
        /**
         * @property {Vec3} from
         */
        this.from = from ? from.clone() : new Vec3();

        /**


