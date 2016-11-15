/// <reference path="../typings/index.d.ts" />


import * as React from "react";
import * as ReactDOM from "react-dom";

import { Cupcake } from './components/Cupcake';
import { Cube } from "./components/Cube";

var Renderer = ReactTHREE.Renderer;
var Scene = ReactTHREE.Scene;
var PerspectiveCamera = ReactTHREE.PerspectiveCamera;



class CeilingScene extends React.Component<any, any>{
   public refs: {
      [key: string]: any;
   };
   public displayName: 'CeilingScene';
   public controls = (THREE as any).OrbitControls
   render() {

      var cameraProps = { 
         fov: 75, 
         aspect: this.props.width / this.props.height, 
         near: 1, 
         far: 5000, 
         position: new THREE.Vector3(0, 0, 600), 
         lookat: new THREE.Vector3(0, 0, 0) 
      };

      return <Renderer width={this.props.width} height={this.props.height}>
         <Scene 
            width={this.props.width} 
            height={this.props.height} 
            camera="maincamera" 
            orbitControls={this.controls}
            pointerEvents= {['onClick', 'onMouseMove']}
            >
            <PerspectiveCamera name="maincamera" {...cameraProps} />
            <Cube></Cube>
         </Scene>
      </Renderer>;
   }
}


function main() { // eslint-disable-line no-unused-vars
   var renderElement = document.getElementById("three-box");

   var w = window.innerWidth - 6;
   var h = window.innerHeight - 6;

   var ceilingSceneProps = {
      width: w, height: h,
      data: {
         position: new THREE.Vector3(0, 0, 0),
         quaternion: new THREE.Quaternion()
      }
   };

   var data = ceilingSceneProps.data;
   var rot = 0;




   ReactTHREE.render(<CeilingScene {...ceilingSceneProps} />, renderElement);

}

window.onload = main;