/**
 * @description 删除线
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "../core/dom";

function StrikeThrough(editor) {
  this.editor = editor;
  this.$elem = $(`<div class="w-e-menu">
    <i class="w-e-icon-strikethrough"></i>
  </div>`);
  this.type = "click";
}

StrikeThrough.prototype = {
  constructor: StrikeThrough,
  onClick: function () {
    document.execCommand("strikeThrough", false);
  },
};

export default StrikeThrough;
