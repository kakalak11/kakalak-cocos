"use strict";
cc._RF.push(module, 'c595dOm16NBuop83s5Ahxwm', 'ScriptB');
// Script/ScriptB.js

"use strict";

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

    editor: {
        executionOrder: 1
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log("script b");
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();