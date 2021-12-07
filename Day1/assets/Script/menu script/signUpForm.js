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
        emailBox: cc.EditBox,
        signUpButton: cc.Button,
        accounListButton: cc.Button,
        userNameMessage: cc.Label,
        passWordMessage: cc.Label,
        emailMessage: cc.Label,
        signUpSuccess: cc.Sprite,
        congratulationLabel: cc.RichText,
        accountList: cc.Layout,
        accountListWindow: cc.Node,
        accountLabelPrefab: cc.Prefab,
        _userNameChecking: null,
        _emailChecking: null,
        _passWordChecking: null,
        _confirmChecking: null,
        _accountList: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onUserNameInputBegan: function () {
        this._userNameChecking = false;
        this.userNameMessage.node.active = false;
    },

    onUserNameInputEnded: function () {
        this._userNameChecking = true;
    },

    onPassWordInputBegan: function () {
        this._passWordChecking = false;
        this.passWordMessage.node.active = false;
    },

    onPassWordInputEnded: function () {
        this._passWordChecking = true;
    },

    onEmailInputBegan: function () {
        this._emailChecking = false;
        this.emailMessage.node.active = false;
    },

    onEmailInputEnded: function () {
        this._emailChecking = true;
        cc.log(this.emailBox.string);

    },

    onConfirmInputBegan: function () {
        this._confirmChecking = false;
        this.passWordMessage.node.active = false;
    },

    onConfirmInputEnded: function () {
        this._confirmChecking = true;
    },

    _checkUserName: function () {
        if (!this._userNameChecking) return;
        if (!this.userNameBox.string) return;
        if (!utilities.checkStringLength(this.userNameBox.string, 6)) {
            utilities.displayError(this.userNameMessage, '//username must have at least 6 characters')
            return false;
        }

        if (!utilities.userNameCheck(this.userNameBox.string)) {
            utilities.displayError(this.userNameMessage, '//username must not contain special characters')
            return false;
        }

        if (!this._checkAvailable(this.userNameBox.string)) {
            utilities.displayError(this.userNameMessage, '//username is not available, please choose another username');
            return false;
        };
        utilities.displayCorrect(this.userNameMessage, '//this username is available');
        return true;
    },

    _checkEmail: function () {
        if (!this._emailChecking) return;
        if (!this.emailBox.string) return;
        if (!utilities.emailCheck(this.emailBox.string)) {
            utilities.displayError(this.emailMessage, '//please input correct email format');
            return false;
        }

        utilities.displayCorrect(this.emailMessage, '//you can use this email address');
        return true;
    },

    _checkPassWord: function () {
        if (!this._passWordChecking) return;
        if (!this.passWordBox.string) return;
        if (!utilities.checkStringLength(this.passWordBox.string, 8)) {
            utilities.displayError(this.passWordMessage, '//password must have at least 8 characters');
            return false;
        }
        if (!utilities.passWordCheck(this.passWordBox.string)) {
            utilities.displayError(this.passWordMessage, '//password must have at least 1 capital letter and 1 normal letter');
            return false;
        }

        utilities.displayCorrect(this.passWordMessage, '//you can use this password');
        return true;
    },

    _checkConfirm: function () {
        if (!this.passWordBox.string) return;
        if (!this._confirmChecking) return;
        if (!this.confirmBox.string) return;
        if (this.confirmBox.string !== this.passWordBox.string) {
            utilities.displayError(this.passWordMessage, `//the 2 passwords don't match`);
            return false;
        }

        utilities.displayCorrect(this.passWordMessage, '//passwords matched !!!');
        return true;
    },

    _appendAccount: function (username, password, email) {
        let labelNode = cc.instantiate(this.accountLabelPrefab);
        this.accountList.node.addChild(labelNode);
        let label = labelNode.getComponent('cc.Label');
        label.string = username + ' : ' + password + ' : ' + email;
    },

    _checkAvailable: function (username, userNameList) {
        let available = true;
        userNameList.forEach(function (element) {
            let usernameCheck = element.split(':')[0];
            if (usernameCheck === username) available = false;
        });
        if (available) return true;
        return false;
    },

    _reset: function () {
        this.userNameBox.string = '';
        this.passWordBox.string = '';
        this.confirmBox.string = '';
        this.emailBox.string = '';
        this.passWordMessage.node.active = false;
        this.userNameMessage.node.active = false;
        this.emailMessage.node.active = false;
        this._userNameChecking = null;
        this._passWordChecking = null;
        this._emailChecking = null;
        this._confirmChecking = null;
        this.signUpSuccess.node.active = true;
        this.signUpButton.interactable = false;
    },

    onClickSignUp: function () {
        this._accountList.push(this.userNameBox.string + ":" + this.passWordBox.string + ':' + this.emailBox.string);
        this._appendAccount(this.userNameBox.string, this.passWordBox.string, this.emailBox.string);
        this.congratulationLabel.string = utilities.generateRainbowText(`Welcome ${this.userNameBox.string} ! You have successfully signed up your account`.split(''));
        this._reset();
        cc.log(this._accountList);
    },

    onClickSuccess: function () {
        this.signUpSuccess.node.active = false;
    },

    onClickAccountList: function () {
        if (!this.accountListWindow.active) {
            this.accountListWindow.active = true;
            return;
        }
        this.accountListWindow.active = false;
    },

    onLoad() {
        this._accountList.push('kakalak:123456');
        cc.log(this._accountList);
    },

    start() {

    },

    update(dt) {
        if (!this._checkUserName() || !this._checkEmail() || !this._checkPassWord() || !this._checkConfirm()) {
            return;
        }
        this.signUpButton.interactable = true;
    },
});

