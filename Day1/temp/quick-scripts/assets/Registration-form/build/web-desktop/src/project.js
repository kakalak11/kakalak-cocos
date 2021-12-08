(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Registration-form/build/web-desktop/src/project.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5dc5ahk7QxFW4NEFEq/LDLc', 'project', __filename);
// Registration-form/build/web-desktop/src/project.js

"use strict";

window.__require = function t(e, s, i) {
  function n(o, a) {
    if (!s[o]) {
      if (!e[o]) {
        var r = o.split("/");if (r = r[r.length - 1], !e[r]) {
          var u = "function" == typeof __require && __require;if (!a && u) return u(r, !0);if (c) return c(r, !0);throw new Error("Cannot find module '" + o + "'");
        }
      }var h = s[o] = { exports: {} };e[o][0].call(h.exports, function (t) {
        return n(e[o][1][t] || t);
      }, h, h.exports, t, e, s, i);
    }return s[o].exports;
  }for (var c = "function" == typeof __require && __require, o = 0; o < i.length; o++) {
    n(i[o]);
  }return n;
}({ Day2: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "6d2330aUMFMUp5X9oVqB6Yo", "Day2", __filename), cc._RF.pop();
  }, {}], ScriptA: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "2386aMLPS9ALre/lLNyBJ2Y", "ScriptA", __filename), cc.Class({ extends: cc.Component, editor: { executionOrder: 2 }, onLoad: function onLoad() {
        cc.log("script a");
      }, start: function start() {} }), cc._RF.pop();
  }, {}], ScriptB: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "c595dOm16NBuop83s5Ahxwm", "ScriptB", __filename), cc.Class({ extends: cc.Component, editor: { executionOrder: 1 }, onLoad: function onLoad() {
        cc.log("script b");
      }, start: function start() {} }), cc._RF.pop();
  }, {}], ScriptC: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "64f4fI+ENhHpb8IuhN77Dst", "ScriptC", __filename), cc.Class({ extends: t("ScriptA"), properties: {}, start: function start() {} }), cc._RF.pop();
  }, { ScriptA: "ScriptA" }], item: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "f12808+xUtLM7JtuWQa/lJA", "item", __filename), cc.Class({ extends: cc.Component, properties: { itemName: { default: "" }, itemLevel: { default: 0 } }, start: function start() {} }), cc._RF.pop();
  }, {}], labelScript: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "0db7f+kXvdE+a0L7FQ7LY0Q", "labelScript", __filename), cc.Class({ extends: cc.Component, properties: {}, addLabel: function addLabel() {
        var t = this.addComponent("cc.Label");t.string = "Hello World", t.node.color = new cc.Color(0, 0, 0, 255);
      }, start: function start() {
        cc.log(this);
      } }), cc._RF.pop();
  }, {}], layoutScript: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "14d88THZt9AyprzqAZe4Nl6", "layoutScript", __filename), cc.Class({ extends: cc.Component, properties: { labelPrefab: { default: 0, type: cc.Prefab, _position: { x: 0, y: 0 } } }, onLoad: function onLoad() {}, start: function start() {
        cc.log(this), cc.log(this.labelPrefab);for (var t = 0; t < 5; t++) {
          var e = cc.instantiate(this.labelPrefab);this.node.addChild(e), e.position = { x: 0, y: 50 * t };
        }
      } }), cc._RF.pop();
  }, {}], left: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "1719fL4tpxHnLb1jXKB2rr0", "left", __filename), cc.Class({ extends: cc.Component, properties: { button: cc.Button }, onLoad: function onLoad() {
        this.button.node.on("click", this.callback, this);
      }, callback: function callback(t) {
        this.node.x += -10;
      }, update: function update(t) {} }), cc._RF.pop();
  }, {}], mainNode: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "87dcf2D2FZEUrf8WIlu5UYq", "mainNode", __filename);var i = t("utils");cc.Class({ extends: cc.Component, properties: { button: cc.Button, content: cc.Layout, editBox: cc.EditBox, itemPrefab: cc.Prefab }, onClick: function onClick() {
        var t = cc.instantiate(this.itemPrefab);t.itemName = this.editBox.string.split(",")[0], t.itemLevel = this.editBox.string.split(",")[1], cc.log(t.itemName, t.itemLevel), this.content.node.addChild(t), t.getComponent("cc.RichText").string = i.generateRainbowText(this.editBox.string);
      }, onLoad: function onLoad() {
        cc.log(this), this.button.node.on("click", this.onClick, this);
      }, start: function start() {} }), cc._RF.pop();
  }, { utils: "utils" }], main: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "32513bxTFhI+qq3ZcSK52Hy", "main", __filename);var i = t("utils");t("../../Script/utils").displayCorrect;cc.Class({ extends: cc.Component, properties: { userNameBox: cc.EditBox, userNameMessage: cc.Node, emailBox: cc.EditBox, emailMessage: cc.Node, passWordBox: cc.EditBox, passWordMessage: cc.Node, confirmBox: cc.EditBox, confirmMessage: cc.Node, signUpButton: cc.Button, congratulation: cc.Node, congratulationLabel: cc.RichText, list: cc.Node, listContent: cc.Node, listPrefab: cc.Prefab, _checkingUserName: null, _checkingEmail: null, _checkingPassWord: null, _checkingConfirm: null, _userNameList: [] }, onUserNameInputBegan: function onUserNameInputBegan() {
        this.userNameMessage.parent.active = !1, this._checkingUserName = !1;
      }, onUserNameInputEnded: function onUserNameInputEnded() {
        this._checkingUserName = !0;
      }, onEmailInputBegan: function onEmailInputBegan() {
        this.emailMessage.parent.active = !1, this._checkingEmail = !1;
      }, onEmailInputEnded: function onEmailInputEnded() {
        this._checkingEmail = !0;
      }, onPassWordInputBegan: function onPassWordInputBegan() {
        this.passWordMessage.parent.active = !1, this._checkingPassWord = !1;
      }, onPassWordInputEnded: function onPassWordInputEnded() {
        this._checkingPassWord = !0;
      }, onConfirmInputBegan: function onConfirmInputBegan() {
        this.confirmMessage.parent.active = !1, this._checkingConfirm = !1;
      }, onConfirmInputEnded: function onConfirmInputEnded() {
        this._checkingConfirm = !0;
      }, _checkUserName: function _checkUserName() {
        if (this._checkingUserName) return i.checkStringLength(this.userNameBox.string, 6) ? i.userNameCheck(this.userNameBox.string) ? i.checkUserNameAvailable(this.userNameBox.string, this._userNameList) ? (i.displayCorrect(this.userNameMessage, "//This username can be used"), !0) : (i.displayError(this.userNameMessage, "//This username is already taken"), !1) : (i.displayError(this.userNameMessage, "//Username must not contain special characters"), !1) : (i.displayError(this.userNameMessage, "//Username must have atleast 6 characters"), !1);
      }, _checkEmail: function _checkEmail() {
        if (this._checkingEmail) return i.emailCheck(this.emailBox.string) ? (i.displayCorrect(this.emailMessage, "//This email can be used"), !0) : (i.displayError(this.emailMessage, "//Please input correct email format"), !1);
      }, _checkPassWord: function _checkPassWord() {
        if (this._checkingPassWord) return i.checkStringLength(this.passWordBox.string, 8) ? i.passWordCheck(this.passWordBox.string) ? (i.displayCorrect(this.passWordMessage, "//This password can be used"), !0) : (i.displayError(this.passWordMessage, "//Password must have atleast 1 uppercase and 1 lowercase"), !1) : (i.displayError(this.passWordMessage, "//Password must have atleast 8 characters"), !1);
      }, _checkConfirm: function _checkConfirm() {
        if (this._checkingConfirm) return this.passWordBox.string !== this.confirmBox.string ? (i.displayError(this.confirmMessage, "//The passwords dont match"), !1) : (i.displayCorrect(this.confirmMessage, "//The passwords are matched !!!"), !0);
      }, _appendAccountDetails: function _appendAccountDetails() {
        var t = cc.instantiate(this.listPrefab);this.listContent.addChild(t), t.getComponent("cc.Label").string = this.userNameBox.string + ":" + this.emailBox.string + ":" + this.passWordBox.string;
      }, _reset: function _reset() {
        this.userNameBox.string = "", this.passWordBox.string = "", this.emailBox.string = "", this.confirmBox.string = "", this._checkingUserName = null, this._checkingEmail = null, this._checkingPassWord = null, this._checkingConfirm = null, this.userNameMessage.parent.active = !1, this.emailMessage.parent.active = !1, this.passWordMessage.parent.active = !1, this.confirmMessage.parent.active = !1;
      }, onClickSignUpButton: function onClickSignUpButton() {
        this._userNameList.push(this.userNameBox.string + ":" + this.emailBox.string + ":" + this.passWordBox.string), this.congratulation.active = !0, this.congratulationLabel.string = i.generateRainbowText(this.userNameBox.string), this._appendAccountDetails(), this._reset();
      }, onClickReturn: function onClickReturn() {
        this.congratulation.active = !1;
      }, onClickAccountDetails: function onClickAccountDetails() {
        this.list.active ? this.list.active = !1 : this.list.active = !0;
      }, onLoad: function onLoad() {
        this.signUpButton.node.on("click", this.onClickSignUpButton, this);
      }, start: function start() {}, update: function update(t) {
        this._checkUserName() && this._checkEmail() && this._checkPassWord() && this._checkConfirm() ? this.signUpButton.interactable = !0 : this.signUpButton.interactable = !1;
      } }), cc._RF.pop();
  }, { "../../Script/utils": "utils", utils: "utils" }], pageview: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "99b1dHoo2VOEr+BkL2yPf84", "pageview", __filename), cc.Class({ extends: cc.Component, properties: { label: cc.Label }, pageTurn: function pageTurn() {
        var t = this.node.getComponent("cc.PageView");this.label.node.getComponent("cc.Label").string = t.getCurrentPageIndex() + 1;
      }, onLoad: function onLoad() {
        this.node.on("page-turning", this.pageTurn, this);
      }, start: function start() {} }), cc._RF.pop();
  }, {}], "prefab button": [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "306c4XszbhOoLKQw7/v3a6m", "prefab button", __filename), cc.Class({ extends: cc.Component, properties: {}, start: function start() {} }), cc._RF.pop();
  }, {}], richTextScript: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "95d5eyFLQpCnLF9+bBUKy+L", "richTextScript", __filename);var i = t("utils");cc.Class({ extends: cc.Component, properties: {}, onLoad: function onLoad() {
        cc.log(this);var t = this.getComponent("cc.RichText");t.string = i.generateRainbowText("this is a very long and rainbowy text".split("")), cc.log(t.string);
      }, start: function start() {} }), cc._RF.pop();
  }, { utils: "utils" }], right: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "edfdarhRbFH4poy34EycdqJ", "right", __filename), cc.Class({ extends: cc.Component, properties: { button: cc.Button }, onLoad: function onLoad() {
        this.button.node.on("click", this.callback, this);
      }, callback: function callback(t) {
        this.node.x += 10;
      }, update: function update(t) {} }), cc._RF.pop();
  }, {}], signUpForm: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "4f010F6byhKb7F2XlAX2BvQ", "signUpForm", __filename);var i = t("utils");cc.Class({ extends: cc.Component, properties: { userNameBox: cc.EditBox, passWordBox: cc.EditBox, confirmBox: cc.EditBox, emailBox: cc.EditBox, signUpButton: cc.Button, accounListButton: cc.Button, userNameMessage: cc.Label, passWordMessage: cc.Label, emailMessage: cc.Label, signUpSuccess: cc.Sprite, congratulationLabel: cc.RichText, accountList: cc.Layout, accountListWindow: cc.Node, accountLabelPrefab: cc.Prefab, _userNameChecking: null, _emailChecking: null, _passWordChecking: null, _confirmChecking: null, _accountList: [] }, onUserNameInputBegan: function onUserNameInputBegan() {
        this._userNameChecking = !1, this.userNameMessage.node.active = !1;
      }, onUserNameInputEnded: function onUserNameInputEnded() {
        this._userNameChecking = !0;
      }, onPassWordInputBegan: function onPassWordInputBegan() {
        this._passWordChecking = !1, this.passWordMessage.node.active = !1;
      }, onPassWordInputEnded: function onPassWordInputEnded() {
        this._passWordChecking = !0;
      }, onEmailInputBegan: function onEmailInputBegan() {
        this._emailChecking = !1, this.emailMessage.node.active = !1;
      }, onEmailInputEnded: function onEmailInputEnded() {
        this._emailChecking = !0, cc.log(this.emailBox.string);
      }, onConfirmInputBegan: function onConfirmInputBegan() {
        this._confirmChecking = !1, this.passWordMessage.node.active = !1;
      }, onConfirmInputEnded: function onConfirmInputEnded() {
        this._confirmChecking = !0;
      }, _checkUserName: function _checkUserName() {
        if (this._userNameChecking && this.userNameBox.string) return i.checkStringLength(this.userNameBox.string, 6) ? i.userNameCheck(this.userNameBox.string) ? this._checkAvailable(this.userNameBox.string) ? (i.displayCorrect(this.userNameMessage, "//this username is available"), !0) : (i.displayError(this.userNameMessage, "//username is not available, please choose another username"), !1) : (i.displayError(this.userNameMessage, "//username must not contain special characters"), !1) : (i.displayError(this.userNameMessage, "//username must have at least 6 characters"), !1);
      }, _checkEmail: function _checkEmail() {
        if (this._emailChecking && this.emailBox.string) return i.emailCheck(this.emailBox.string) ? (i.displayCorrect(this.emailMessage, "//you can use this email address"), !0) : (i.displayError(this.emailMessage, "//please input correct email format"), !1);
      }, _checkPassWord: function _checkPassWord() {
        if (this._passWordChecking && this.passWordBox.string) return i.checkStringLength(this.passWordBox.string, 8) ? i.passWordCheck(this.passWordBox.string) ? (i.displayCorrect(this.passWordMessage, "//you can use this password"), !0) : (i.displayError(this.passWordMessage, "//password must have at least 1 capital letter and 1 normal letter"), !1) : (i.displayError(this.passWordMessage, "//password must have at least 8 characters"), !1);
      }, _checkConfirm: function _checkConfirm() {
        if (this.passWordBox.string && this._confirmChecking && this.confirmBox.string) return this.confirmBox.string !== this.passWordBox.string ? (i.displayError(this.passWordMessage, "//the 2 passwords don't match"), !1) : (i.displayCorrect(this.passWordMessage, "//passwords matched !!!"), !0);
      }, _appendAccount: function _appendAccount(t, e, s) {
        var i = cc.instantiate(this.accountLabelPrefab);this.accountList.node.addChild(i), i.getComponent("cc.Label").string = t + " : " + e + " : " + s;
      }, _checkAvailable: function _checkAvailable(t, e) {
        var s = !0;return e.forEach(function (e) {
          e.split(":")[0] === t && (s = !1);
        }), !!s;
      }, _reset: function _reset() {
        this.userNameBox.string = "", this.passWordBox.string = "", this.confirmBox.string = "", this.emailBox.string = "", this.passWordMessage.node.active = !1, this.userNameMessage.node.active = !1, this.emailMessage.node.active = !1, this._userNameChecking = null, this._passWordChecking = null, this._emailChecking = null, this._confirmChecking = null, this.signUpSuccess.node.active = !0, this.signUpButton.interactable = !1;
      }, onClickSignUp: function onClickSignUp() {
        this._accountList.push(this.userNameBox.string + ":" + this.passWordBox.string + ":" + this.emailBox.string), this._appendAccount(this.userNameBox.string, this.passWordBox.string, this.emailBox.string), this.congratulationLabel.string = i.generateRainbowText(("Welcome " + this.userNameBox.string + " ! You have successfully signed up your account").split("")), this._reset(), cc.log(this._accountList);
      }, onClickSuccess: function onClickSuccess() {
        this.signUpSuccess.node.active = !1;
      }, onClickAccountList: function onClickAccountList() {
        this.accountListWindow.active ? this.accountListWindow.active = !1 : this.accountListWindow.active = !0;
      }, onLoad: function onLoad() {
        this._accountList.push("kakalak:123456"), cc.log(this._accountList);
      }, start: function start() {}, update: function update(t) {
        this._checkUserName() && this._checkEmail() && this._checkPassWord() && this._checkConfirm() && (this.signUpButton.interactable = !0);
      } }), cc._RF.pop();
  }, { utils: "utils" }], slider: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "f3f08FOtaJA+5HIrLDSTNvB", "slider", __filename), cc.Class({ extends: cc.Component, properties: { label: cc.Label }, onSlide: function onSlide() {
        var t = this.label.getComponent("cc.Label"),
            e = this.getComponent("cc.Slider");t.string = parseFloat(e.progress).toFixed(2);
      }, onLoad: function onLoad() {
        this.node.on("slide", this.onSlide, this);
      }, start: function start() {} }), cc._RF.pop();
  }, {}], up: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "ffd38AgBsZLDZ3D5FcsYSe8", "up", __filename), cc.Class({ extends: cc.Component, properties: { button: cc.Button }, onLoad: function onLoad() {
        this.button.node.on("click", this.callback, this);
      }, callback: function callback(t) {
        this.node.y += 30, this.node.rotate = 360;
      }, update: function update(t) {
        this.node.y = -134.97;
      } }), cc._RF.pop();
  }, {}], utils: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "2e803qp/LtJy4tr7EeUToWy", "utils", __filename), console.log("Utilities");var i = { check: function check() {
        return console.log("utilities has run");
      }, passWordCheck: function passWordCheck(t) {
        var e = t.split(""),
            s = 0,
            i = 0;if (!function (t) {
          return t.forEach(function (t) {
            parseInt(t) || t === t.toUpperCase() && s++;
          }), !!s;
        }(e) || !function (t) {
          return t.forEach(function (t) {
            parseInt(t) || t === t.toLowerCase() && i++;
          }), !!i;
        }(e)) return !1;return !0;
      }, userNameCheck: function userNameCheck(t) {
        return !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(t);
      }, checkUserNameAvailable: function checkUserNameAvailable(t, e) {
        var s = !0;return e.forEach(function (e) {
          e.split(":")[0] === t && (s = !1);
        }), !!s;
      }, emailCheck: function emailCheck(t) {
        var e = t.slice(t.indexOf("@"));return ["@gmail.com", "@yahoo.com"].includes(e);
      }, checkStringLength: function checkStringLength(t, e) {
        return !(t.length < e);
      }, displayError: function displayError(t, e) {
        t.color = cc.Color.RED, t.parent.active = !0, t.getComponent("cc.Label").string = e;
      }, displayCorrect: function displayCorrect(t, e) {
        t.color = cc.Color.GREEN, t.parent.active = !0, t.getComponent("cc.Label").string = e;
      }, primeNumber: function primeNumber(t) {
        for (var e = Array(t).fill(!0), s = [], i = 2; i < t; i++) {
          if (!0 === e[i]) {
            s.push(i);for (var n = i * i; n < t; n += i) {
              e[n] = 0;
            }
          }
        }return s;
      }, factorial: function factorial(t) {
        return 0 === t || 1 === t ? 1 : t * this.factorial(t - 1);
      }, generateRainbowText: function generateRainbowText(t) {
        var e = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#ffff00", "#bfff00", "#80ff00", "#40ff00", "#00ff00", "#00ff40", "#00ff80", "#00ffbf", "#00ffff", "#00bfff", "#0080ff", "#0040ff", "\t#0000ff", "#4000ff", "#8000ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080", "#ff0040", "#ff0000"],
            s = "";return t.split("").forEach(function (t, i) {
          s += "<color=" + e[i % e.length] + ">" + t + "</c>";
        }), s;
      } };e.exports = i, cc._RF.pop();
  }, {}], walk: [function (t, e, s) {
    "use strict";
    cc._RF.push(e, "c587dSferpHzKtilYo+oqmf", "walk", __filename), cc.Class({ extends: cc.Component, properties: { leftButton: cc.Button, rightButton: cc.Button, jumpButton: cc.Button, speed: { default: 2, serializable: !1 }, moveLeft: { default: !1 }, moveRight: { default: !1 }, jump: { default: !1 }, rotateSpeed: { default: 6, type: cc.Float }, counter: { default: 0 }, fps: { default: 60 }, canClick: { default: !0 } }, onClickLeft: function onClickLeft() {
        cc.log("move left"), this.moveLeft = !0, this._disableButton();
      }, onClickRight: function onClickRight() {
        cc.log("move right"), this.moveRight = !0, this._disableButton();
      }, onClickJump: function onClickJump() {
        cc.log("jump"), this.jump = !0, this._disableButton();
      }, _disableButton: function _disableButton() {
        this.leftButton.interactable = !1, this.rightButton.interactable = !1, this.jumpButton.interactable = !1;
      }, _enableButton: function _enableButton() {
        this.leftButton.interactable = !0, this.rightButton.interactable = !0, this.jumpButton.interactable = !0;
      }, _moveLeft: function _moveLeft() {
        this.node.x -= this.speed, this.counter++, this.counter >= this.fps && (this.counter = 0, this.moveLeft = !1, this._enableButton());
      }, _jump: function _jump() {
        this.node.y += this.speed, this.counter++, this.counter >= this.fps / 4 && (this.node.y -= this.speed, this.node.angle += 12), this.counter >= this.fps / 4 * 3 && (this.node.y -= this.speed, this.node.angle -= 12), this.counter >= this.fps && (this.counter = 0, this.jump = !1, this._enableButton());
      }, _moveRight: function _moveRight() {
        this.node.x += this.speed, this.counter++, this.counter >= this.fps && (this.counter = 0, this.moveRight = !1, this._enableButton());
      }, onLoad: function onLoad() {
        cc.log("onload"), cc.log(this);
      }, start: function start() {}, update: function update(t) {
        this.jump && this._jump(), this.moveLeft && this._moveLeft(), this.moveRight && this._moveRight();
      } }), cc._RF.pop();
  }, {}] }, {}, ["main", "Day2", "pageview", "slider", "ScriptA", "ScriptB", "ScriptC", "left", "mainNode", "signUpForm", "item", "prefab button", "richTextScript", "right", "labelScript", "layoutScript", "up", "utils", "walk"]);

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
        //# sourceMappingURL=project.js.map
        