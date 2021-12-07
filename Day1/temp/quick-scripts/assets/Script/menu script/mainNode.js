(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/menu script/mainNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '87dcf2D2FZEUrf8WIlu5UYq', 'mainNode', __filename);
// Script/menu script/mainNode.js

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
        button: cc.Button,
        content: cc.Layout,
        editBox: cc.EditBox,
        itemPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onClick: function onClick() {
        var itemInstance = cc.instantiate(this.itemPrefab);
        itemInstance.itemName = this.editBox.string.split(',')[0];
        itemInstance.itemLevel = this.editBox.string.split(',')[1];
        cc.log(itemInstance.itemName, itemInstance.itemLevel);
        this.content.node.addChild(itemInstance);
        var label = itemInstance.getComponent('cc.RichText');
        label.string = utilities.generateRainbowText(this.editBox.string);
    },

    onLoad: function onLoad() {
        cc.log(this);
        this.button.node.on('click', this.onClick, this);
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=mainNode.js.map
        