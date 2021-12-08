(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Run/script/walk.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '783f2U4w5JEkYqcXvzqoJo0', 'walk', __filename);
// Run/script/walk.js

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

        leftButton: cc.Button,
        rightButton: cc.Button,
        jumpButton: cc.Button,

        speed: {
            default: 2,
            serializable: false
        },
        moveLeft: {
            default: false
        },
        moveRight: {
            default: false
        },
        jump: {
            default: false
        },
        rotateSpeed: {
            default: 6,
            type: cc.Float
        },
        counter: {
            default: 0
        },
        fps: {
            default: 60
        },
        canClick: {
            default: true
        }
    },

    onClickLeft: function onClickLeft() {
        cc.log('move left');
        this.moveLeft = true;
        this._disableButton();
    },

    onClickRight: function onClickRight() {
        cc.log('move right');
        this.moveRight = true;
        this._disableButton();
    },

    onClickJump: function onClickJump() {
        cc.log('jump');
        this.jump = true;
        this._disableButton();
    },

    _disableButton: function _disableButton() {
        this.leftButton.interactable = false;
        this.rightButton.interactable = false;
        this.jumpButton.interactable = false;
    },

    _enableButton: function _enableButton() {
        this.leftButton.interactable = true;
        this.rightButton.interactable = true;
        this.jumpButton.interactable = true;
    },

    _moveLeft: function _moveLeft() {
        this.node.x -= this.speed;
        this.counter++;
        if (this.counter >= this.fps) {
            this.counter = 0;
            this.moveLeft = false;
            this._enableButton();
        }
    },

    _jump: function _jump() {
        this.node.y += this.speed;
        this.counter++;
        if (this.counter >= this.fps / 4) {
            this.node.y -= this.speed;
            this.node.angle += 12;
        }
        if (this.counter >= this.fps / 4 * 3) {
            this.node.y -= this.speed;
            this.node.angle -= 12;
        }
        if (this.counter >= this.fps) {
            this.counter = 0;
            this.jump = false;
            this._enableButton();
        }
    },

    _moveRight: function _moveRight() {
        this.node.x += this.speed;
        this.counter++;
        if (this.counter >= this.fps) {
            this.counter = 0;
            this.moveRight = false;
            this._enableButton();
        }
    },

    onLoad: function onLoad() {
        cc.log('onload');
        cc.log(this);
    },

    start: function start() {},
    update: function update(dt) {
        if (this.jump) {
            this._jump();
        }
        if (this.moveLeft) {
            this._moveLeft();
        }
        if (this.moveRight) {
            this._moveRight();
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=walk.js.map
        