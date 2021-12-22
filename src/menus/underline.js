/**
 * @description 下划线
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "../core/dom";

function UnderLine(editor) {
  this.editor = editor;
  this.type = "click";
  this.$elem = $(
    `<div class="w-e-menu">
            <i class="w-e-icon-underline"><i/>
     </div>`
  );
  this._active = false; // 当前是否 active 状态
}
UnderLine.prototype = {
  constructor: UnderLine,
  onClick: () => {
    document.execCommand("underline", false);
  },
};

export default UnderLine;
