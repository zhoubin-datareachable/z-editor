/**
 * @description 加粗
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "../core/dom";
import Command from "../core/command";

// 构造函数
function Bold(editor) {
  this.editor = editor;
  this.$elem = $(
    `<div class="w-e-menu">
            <i class="w-e-icon-bold"><i/>
     </div>`
  );
  this.type = "click";

  // 当前是否 active 状态
  this._active = false;
}

Bold.prototype = {
  constructor: Bold,
  // 点击事件
  onClick: function () {
    // console.log("88");
    // const bool = document.execCommand("bold", false);
    // console.log(bool);
    const command = new Command();
    command.bold();
  },
};

export default Bold;
