// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// here is your component file, file name = MyComponent.js

cc.Class({
    extends: cc.Component,
    properties: {
        button: cc.Button
    },
    onLoad: function () {
        this.button.node.on('click', this.callback, this);
    },
    callback: function (button) {
        this.node.x += 10;
        // do whatever you want with button
        // In addition, attention to this way registered events, can not pass customEventData
    },

    update(dt) {
        // this.node.x = 20;
    },
});
