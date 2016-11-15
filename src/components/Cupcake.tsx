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



export class Cupcake extends React.Component<any, any>{
   public refs:any;
   public displayName: 'Cupcake';
   public propTypes: {
      position: THREE.Vector3,
      quaternion: THREE.Quaternion
   };


   render() {
      return <Object3D quaternion={this.props.quaternion} position={this.props.position || new THREE.Vector3(0, 0, 0)}>
         <Mesh position={new THREE.Vector3(0, -100, 0)} geometry={boxgeometry} material={cupcakematerial} />
         <Mesh position={new THREE.Vector3(0, 100, 0)} geometry={boxgeometry} material={creammaterial} />
      </Object3D>;
   }
};