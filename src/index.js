/**
 * @description 入口文件
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */

import Editor from "./core/editor";
import "../assets/style/common.less";
import "../assets/style/droplist.less";
import "../assets/style/icon.less";
import "../assets/style/menus.less";
import "../assets/style/panel.less";
import "../assets/style/text.less";
import "../assets/font/w-e-icon.woff";

const editor2 = new Editor("#div3");
editor2.init();
