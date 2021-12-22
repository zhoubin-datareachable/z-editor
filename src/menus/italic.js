/**
 * @description 斜体
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "../core/dom";

function Italic(editor) {
  this.editor = editor;
  this.$elem = $(
    `<div class="w-e-menu">
            <i class="w-e-icon-italic"><i/>
        </div>`
  );
  this.type = "click";

  // 当前是否 active 状态
  this._active = false;
}

Italic.prototype = {
  constructor: Italic,
  onClick: function () {
    document.execCommand("italic", false);
  },
};

export default Italic;
