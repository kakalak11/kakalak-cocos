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
        username: cc.EditBox,
        password: cc.EditBox,
        accountList: cc.Layout,
        signupButton: cc.Button,
        information: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onClickSignup: function() {
        cc.log('click');
        this.information.push(this.username.string + ':' + this.password.string);
        cc.log(this.information);
    },

    onClickAccountList: function() {
        cc.log('account list clicked');
    },

    onLoad () {
        cc.log(this.username.string);
        cc.log(this.password.string);
    },

    start () {

    },

    // update (dt) {},
});
