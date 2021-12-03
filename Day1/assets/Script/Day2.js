// // Learn cc.Class:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
// //  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// // Learn Attribute:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         point1: {
//             default: 1,
//             displayName: "Player's point",
//             serializable: true,
//             type: cc.Integer,
//             visible: true,

//             set: function (value) {
//                 this._point1 = value;
//             },

//             get: function () {
//                 return this._point1;
//             }
//         },

//         point2: {
//             default: 2,
//             displayName: "Oppenent's point",
//             serializable: false,
//             type: cc.Integer,
//             visible: true,

//             set: function (value) {
//                 this._point2 = value;
//             },

//             get: function () {
//                 return this._point2;
//             },
//         }
//     },



//     // LIFE-CYCLE CALLBACKS:

//     onLoad() {
//         cc.log(`property with serialization true ${this.point1}`);
//         cc.log(`property with serialization false ${this.point2}`);

//         var myObject = cc.Class({
//             name: 'booker',

//             ctor() {
//                 this.name = 'booker';
//             }
//         });

//         var myObj = new myObject();

//         cc.log(myObj.name);
//         cc.log(this.children);

//     },

//     start() {

//     },

//     update(dt) {
//         // this.point1++;
//         // this.point2++;
//         // cc.log(this.point1);
//         // cc.log(this.point2);
//     },
// });
