"use strict";
cc._RF.push(module, '8b8d8QwatVMTq224/O60ORe', 'layout');
// Script/menu script/layout.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var Item = cc.Class({
    name: 'Item',
    properties: {
        id: 0,
        itemName: '',
        itemPrice: 0,
        iconSF: cc.SpriteFrame
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: [],
            type: Item
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();