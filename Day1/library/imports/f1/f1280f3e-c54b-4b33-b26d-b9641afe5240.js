"use strict";
cc._RF.push(module, 'f12808+xUtLM7JtuWQa/lJA', 'item');
// Script/prefab learning/item.js

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

cc.Class({
    extends: cc.Component,

    properties: {
        itemName: {
            default: ''
        },
        itemLevel: {
            default: 0
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad() {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();