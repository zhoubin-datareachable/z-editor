/**
 * @description 工具栏
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import MenuConstructors from "../menus";

/**
 * 构造函数
 * @param {editor对象}} editor
 */
function Menus(editor) {
  this.editor = editor;
  this.menus = {};
}

Menus.prototype = {
  constructor: Menus,
  // 初始化工具栏
  init: function () {
    const configMenus = ["bold", "italic", "underLine", "strikeThrough"];
    configMenus.forEach((menuKey) => {
      const MenuConstructor = MenuConstructors[menuKey];
      this.menus[menuKey] = new MenuConstructor();
    });

    // 添加到菜单栏
    this._addToToolbar();
    // 添加事件
    this._addListener();
  },

  // 添加到菜单栏
  _addToToolbar: function () {
    const editor = this.editor;
    const $toolbarSelector = editor.$toolbarSelector;
    const menus = this.menus;
    for (const key in menus) {
      const $elem = menus[key].$elem;
      //   console.log(menus[key]);
      $toolbarSelector.append($elem);
    }
  },
  // 添加事件
  _addListener: function () {
    for (const key in this.menus) {
      const $elem = this.menus[key].$elem;
      console.log({ $elem });
      $elem[0].addEventListener(
        "click",
        () => {
          this.menus[key].onClick();
        },
        false
      );
    }
  },
};

export default Menus;
