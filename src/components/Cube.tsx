/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom"

var Mesh = ReactTHREE.Mesh;
var Object3D = ReactTHREE.Object3D;

var geometry = new THREE.BoxGeometry(200, 200, 200);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });


export class Cube extends React.Component<any, any>{
   public refs: any;
   public displayName: 'Cube';

   public rotation = new THREE.Euler();
   public position = new THREE.Vector3(0, 0, 0)
   public quaternion = new THREE.Quaternion()
   public angle = 1;
   constructor() {
      super();
      setInterval(() => {
           this.rotation.x += 0.1;
           this.rotation.y += 0.1;
         
        // this.quaternion.setFromEuler(new THREE.Euler(this.angle, this.angle * 3, 0));
         //this.quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (this.angle/360)*(Math.PI));
      
         //this.position.x += 1;
         this.forceUpdate();
      }, 20)
   }

   public getMountImage():THREE.Object3D{
      return (this as any)._reactInternalInstance._mountImage;
   }

   public handleClick(){
      console.log('click');
   }

   public handleMouseMove(){
      console.log('mouse move');
   }

   render() {
      debugger;
      return <Object3D rotation={this.rotation} position={this.position}>
         <Mesh position={new THREE.Vector3(0, -100, 0)} geometry={geometry} material={material}
                onClick3D={this.handleClick} onMouseMove3D={this.handleMouseMove}/>
      </Object3D>;
   }
}; 