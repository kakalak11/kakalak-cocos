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
        _userNameChecking: null,
        _passWordChecking: null,
        _confirmChecking: null,
        _accountList: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onUserNameInputBegan: function () {
        this._userNameChecking = false;
        this.userNameError.node.active = false;
    },

    onUserNameInputEnded: function () {
        this._userNameChecking = true;
    },

    onPassWordInputBegan: function () {
        this._passWordChecking = false;
        this.passWordError.node.active = false;
    },

    onPassWordInputEnded: function () {
        this._passWordChecking = true;
    },

    onConfirmInputBegan: function () {
        this._confirmChecking = false;
        this.passWordError.node.active = false;
    },

    onConfirmInputEnded: function () {
        this._confirmChecking = true;
    },

    _checkUserName: function () {
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

    _checkPassWord: function () {
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

    _checkConfirm: function () {
        if (!this.passWordBox.string) {
            return;
        };
        if (!this._confirmChecking) return;
        if (!this.confirmBox.string) return;
        if (this.confirmBox.string !== this.passWordBox.string) {
            this.passWordError.node.active = true;
            this.passWordError.string = `//the 2 passwords don't match`;
            return false;
        }

        return true;
    },

    onClickSignUp: function() {
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

    onClickSuccess: function() {
        this.signUpSuccess.node.active = false;
    },

    onLoad() {
    },

    start() {
    },

    update(dt) {
        if (!this._checkUserName() || !this._checkPassWord() || !this._checkConfirm()) {
            return;
        }
        this.signUpButton.interactable = true;
    },
});

