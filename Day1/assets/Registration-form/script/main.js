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
const { displayCorrect } = require('../../Script/utils');

cc.Class({
    extends: cc.Component,

    properties: {
        userNameBox: cc.EditBox,
        userNameMessage: cc.Node,
        emailBox: cc.EditBox,
        emailMessage: cc.Node,
        passWordBox: cc.EditBox,
        passWordMessage: cc.Node,
        confirmBox: cc.EditBox,
        confirmMessage: cc.Node,
        signUpButton: cc.Button,
        congratulation: cc.Node,
        _checkingUserName: null,
        _checkingEmail: null,
        _checkingPassWord: null,
        _checkingConfirm: null,
        _userNameList: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onUserNameInputBegan: function () {
        this.userNameMessage.parent.active = false;
        this._checkingUserName = false;
    },

    onUserNameInputEnded: function () {
        this._checkingUserName = true;
    },

    onEmailInputBegan: function () {
        this.emailMessage.parent.active = false;
        this._checkingEmail = false;
    },

    onEmailInputEnded: function () {
        this._checkingEmail = true;
    },

    onPassWordInputBegan: function () {
        this.passWordMessage.parent.active = false;
        this._checkingPassWord = false;
    },

    onPassWordInputEnded: function () {
        this._checkingPassWord = true;
    },

    onConfirmInputBegan: function () {
        this.confirmMessage.parent.active = false;
        this._checkingConfirm = false;
    },

    onConfirmInputEnded: function () {
        this._checkingConfirm = true;
    },

    _checkUserName: function () {
        if (!this._checkingUserName) return;
        if (!utilities.checkStringLength(this.userNameBox.string, 6)) {
            utilities.displayError(this.userNameMessage, '//Username must have atleast 6 characters');
            return false;
        }

        if (!utilities.userNameCheck(this.userNameBox.string)) {
            utilities.displayError(this.userNameMessage, '//Username must not contain special characters');
            return false;
        }

        if (!utilities.checkUserNameAvailable(this.userNameBox.string, this._userNameList)) {
            utilities.displayError(this.userNameMessage, '//This username is already taken');
            return false;
        }

        utilities.displayCorrect(this.userNameMessage, '//This username can be used');
        return true;
    },

    _checkEmail: function () {
        if (!this._checkingEmail) return;
        if (!utilities.emailCheck(this.emailBox.string)) {
            utilities.displayError(this.emailMessage, '//Please input correct email format');
        }

        utilities.displayCorrect(this.emailMessage, '//This email can be used');
        return true;
    },

    _checkPassWord: function () {
        if (!this._checkingPassWord) return;
        if (!utilities.checkStringLength(this.passWordBox.string, 8)) {
            utilities.displayError(this.passWordMessage, '//Password must have atleast 8 characters');
            return false;
        }

        if (!utilities.passWordCheck(this.passWordBox.string)) {
            utilities.displayError(this.passWordMessage, '//Password must have atleast 1 uppercase and 1 lowercase');
            return false;
        }

        utilities.displayCorrect(this.passWordMessage, '//This password can be used');
        return true;
    },

    _checkConfirm: function () {
        if (!this._checkingConfirm) return;
        if (this.passWordBox.string !== this.confirmBox.string) {
            utilities.displayError(this.confirmMessage, '//The passwords dont match');
            return false;
        }

        utilities.displayCorrect(this.confirmMessage, '//The passwords are matched !!!');
        return true;
    },

    _reset: function () {
        this.userNameBox.string = '';
        this.passWordBox.string = '';
        this.emailBox.string = '';
        this.confirmBox.string = '';
        this._checkingUserName = null;
        this._checkingEmail = null;
        this._checkingPassWord = null;
        this._checkingConfirm = null;
        this.userNameMessage.parent.active = false;
        this.emailMessage.parent.active = false;
        this.passWordMessage.parent.active = false;
        this.confirmMessage.parent.active = false;
    },

    onClickSignUpButton: function () {
        this._userNameList.push(this.userNameBox.string + ':' + this.emailBox.string + ':' + this.passWordBox.string);
        this._reset();
    },

    onLoad() {
        this.signUpButton.node.on('click', this.onClickSignUpButton, this);
    },

    start() {

    },

    update(dt) {
        if (!this._checkUserName() || !this._checkEmail() || !this._checkPassWord() || !this._checkConfirm()) {
            this.signUpButton.interactable = false;
            return;
        }
        this.signUpButton.interactable = true;
    },
});
