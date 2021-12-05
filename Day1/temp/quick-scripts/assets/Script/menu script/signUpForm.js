(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/menu script/signUpForm.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4f010F6byhKb7F2XlAX2BvQ', 'signUpForm', __filename);
// Script/menu script/signUpForm.js

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

var utilities = require('utils');

cc.Class({
    extends: cc.Component,

    properties: {
        userNameBox: cc.EditBox,
        passWordBox: cc.EditBox,
        confirmBox: cc.EditBox,
        signUpButton: cc.Button,
        accounListButton: cc.Button,
        userNameError: cc.Label,
        passWordError: cc.Label,
        signUpSuccess: cc.Sprite,
        layout: cc.Layout,
        _userNameChecking: null,
        _passWordChecking: null,
        _confirmChecking: null,
        _accountList: []
    },

    // LIFE-CYCLE CALLBACKS:

    onUserNameInputBegan: function onUserNameInputBegan() {
        this._userNameChecking = false;
        this.userNameError.node.active = false;
    },

    onUserNameInputEnded: function onUserNameInputEnded() {
        this._userNameChecking = true;
    },

    onPassWordInputBegan: function onPassWordInputBegan() {
        this._passWordChecking = false;
        this.passWordError.node.active = false;
    },

    onPassWordInputEnded: function onPassWordInputEnded() {
        this._passWordChecking = true;
    },

    onConfirmInputBegan: function onConfirmInputBegan() {
        this._confirmChecking = false;
        this.passWordError.node.active = false;
    },

    onConfirmInputEnded: function onConfirmInputEnded() {
        this._confirmChecking = true;
    },

    _checkUserName: function _checkUserName() {
        if (!this._userNameChecking) return;
        if (!this.userNameBox.string) return;
        if (this.userNameBox.string.length < 6) {
            this.userNameError.node.active = true;
            this.userNameError.string = '//username must have at least 8 characters';
            return false;
        }

        if (!utilities.userNameCheck(this.userNameBox.string)) {
            this.userNameError.node.active = true;
            this.userNameError.string = '//username must not contain special characters';
            return false;
        }

        return true;
    },

    _checkPassWord: function _checkPassWord() {
        if (!this._passWordChecking) return;
        if (!this.passWordBox.string) return;
        if (this.passWordBox.string.length < 8) {
            this.passWordError.node.active = true;
            this.passWordError.string = '//password must have at least 8 characters';
            return false;
        }

        if (!utilities.passWordCheck(this.passWordBox.string)) {
            this.passWordError.node.active = true;
            this.passWordError.string = '//password must have at least 1 capital letter and 1 normal letter';
            return false;
        }

        return true;
    },

    _checkConfirm: function _checkConfirm() {
        if (!this.passWordBox.string) {
            return;
        };
        if (!this._confirmChecking) return;
        if (!this.confirmBox.string) return;
        if (this.confirmBox.string !== this.passWordBox.string) {
            this.passWordError.node.active = true;
            this.passWordError.string = '//the 2 passwords don\'t match';
            return false;
        }

        return true;
    },

    onClickSignUp: function onClickSignUp() {
        this._accountList.push(this.userNameBox.string + ":" + this.passWordBox.string);
        this.userNameBox.string = '';
        this.passWordBox.string = '';
        this.confirmBox.string = '';
        this._userNameChecking = null;
        this._passWordChecking = null;
        this._confirmChecking = null;
        this.signUpSuccess.node.active = true;
        this.signUpButton.interactable = false;
        cc.log(this._accountList);
    },

    onClickSuccess: function onClickSuccess() {
        this.signUpSuccess.node.active = false;
    },

    onLoad: function onLoad() {
        var nodeString = new cc.Node('Label');
        nodeString.string = 'Hello World';
        nodeString.x = -200;
        this.layout.node.addChild(nodeString);
        cc.log(this);
        cc.log(this.layout);
        cc.log(nodeString);
    },
    start: function start() {},
    update: function update(dt) {
        if (!this._checkUserName() || !this._checkPassWord() || !this._checkConfirm()) {
            return;
        }
        this.signUpButton.interactable = true;
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
        //# sourceMappingURL=signUpForm.js.map
        