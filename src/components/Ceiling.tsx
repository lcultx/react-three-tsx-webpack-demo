/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";


var Renderer = ReactTHREE.Renderer;
var Scene = ReactTHREE.Scene;
var Mesh = ReactTHREE.Mesh;
var Object3D = ReactTHREE.Object3D;
var PerspectiveCamera = ReactTHREE.PerspectiveCamera;

var assetpath = function (filename) { return '../assets/' + filename; };
var boxgeometry = new THREE.BoxGeometry(200, 200, 200);


var cupcaketexture = THREE.ImageUtils.loadTexture(assetpath('cupCake.png'));
var cupcakematerial = new THREE.MeshBasicMaterial({ map: cupcaketexture });

var creamtexture = THREE.ImageUtils.loadTexture(assetpath('creamPink.png'));
var creammaterial = new THREE.MeshBasicMaterial({ map: creamtexture });

export class Lamp extends React.Component<any,any>{
   public refs:any;
   public displayName: 'Lamp';
   render(){
      return <div></div>;
   }
}

export class Ceiling extends React.Component<any, any>{
   public refs: any;
   public displayName: 'Ceiling';
   public propTypes: {
      position: THREE.Vector3,
      quaternion: THREE.Quaternion
   };

   render() {
      return <Lamp />;
   }
};
