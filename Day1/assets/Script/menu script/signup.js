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
        confirm: cc.EditBox,
        accountList: cc.Layout,
        signupButton: cc.Button,
        information: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onUserNameInputEnded: function (usernameBox) {
        cc.log('username input end');
    },

    onPasswordInputEnded: function (passwordBox) {
        let countUpper = 0;
        let countLower = 0;
        let passwordArray = passwordBox.string.split('');
        cc.log('password input end');

        if (passwordBox.string.length < 8) {
            cc.log('password has to have at least 8 character');
            return false;
        }

        cc.log(passwordArray);

        if (!isUpperCase(passwordArray, countUpper) || !isLowerCase(passwordArray, countLower)) {
            cc.log('password has to have atleast 1 uppercase and 1 lowercase letter');
            return false;
        }

        function isUpperCase(passwordArray, countUpper) {

            passwordArray.forEach(function (element) {
                if (check(element)) countUpper++;
            });

            if (countUpper > 0) {
                cc.log(countUpper);
                return true;
            } else {
                cc.log(countUpper);
                return false;
            }

            function check(element) {
                if (Number.isInteger(parseInt(element))) return false;
                return (element === element.toUpperCase());
            }
        }

        function isLowerCase(passwordArray, countLower) {

            passwordArray.forEach(function (element) {
                if (check(element)) countLower++;
            });

            if (countLower > 0) {
                cc.log(countLower);
                return true;
            } else {
                cc.log(countLower);
                return false;
            }

            function check(element) {
                if (Number.isInteger(parseInt(element))) return false;
                return (element === element.toLowerCase());
            }
        }

        return true;
    },

    onConfirmInputEnded: function (confirmBox) {
        cc.log(confirmBox.string);
        if (confirmBox.string === this.password.string) {
            return true;
        } else {
            cc.log(`password didn't match, please try again`);
            return false;
        }
    },

    onClickSignup: function () {
        cc.log('click');
        this.information.push(this.username.string + ':' + this.password.string);
        cc.log(this.information);
        // cc.log(this.information[0].split(':'));
    },

    onClickAccountList: function () {
        cc.log('account list clicked');
    },

    onLoad() {
        // cc.log(this.username.string);
        // cc.log(this.password.string);
        // this.signupButton.interactable = false;
        this.username.node.on('editing-did-ended', this.onUserNameInputEnded, this);
        this.password.node.on('editing-did-ended', this.onPasswordInputEnded, this);
        this.confirm.node.on('editing-did-ended', this.onConfirmInputEnded, this);
    },

    start() {

    },

    // update (dt) {},
});
