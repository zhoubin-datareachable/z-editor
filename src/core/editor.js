/**
 * @description 编辑器
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "./dom";
import Menus from "./menus";

function Editor(selector) {
  this.selector = selector;
}

Editor.prototype = {
  constructor: Editor,

  // 初始化DOM
  _initDom: function () {
    const selector = this.selector;
    // 创建编辑器容器
    const $selector = $(selector);
    // 创建toolBar容器
    const $toolbarSelector = $("<div></div>");
    // 编辑区容器
    const $textSelector = $("<div></div>");
    // 编辑区
    const $textElem = $("<div></div>");

    // 将工具栏和文本编辑加入到容器
    $selector.append($toolbarSelector).append($textSelector);
    $textSelector.append($textElem);
    $toolbarSelector
      .css("background-color", "#f1f1f1")
      .css("border", "1px solid #ccc");
    $textSelector
      .css("border", "1px solid #ccc")
      .css("border-top", "none")
      .css("height", "300px");
    $textElem
      .css("width", "100%")
      .css("height", "100%")
      .attr("contenteditable", "true");

    $textElem.append($("<p><br></p>"));

    $toolbarSelector[0].addEventListener("mousedown", (e) => {
      e.preventDefault();
    });
    // 设置通用的 class
    $toolbarSelector.addClass("w-e-toolbar");
    $textSelector.addClass("w-e-text-container");
    $textElem.addClass("w-e-text");

    this.$selector = $selector;
    this.$toolbarSelector = $toolbarSelector;
    this.$textSelector = $textSelector;
  },

  // 初始化菜单
  _initMenu: function () {
    this.menus = new Menus(this);
    this.menus.init();
  },
  // 初始化
  init: function () {
    // 初始化DOM
    this._initDom();
    // 初始化菜单
    this._initMenu();
  },
};

export default Editor;
