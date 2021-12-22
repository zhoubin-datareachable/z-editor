/**
 * @description 菜单
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import Bold from "./bold";
import Italic from "./italic";
import UnderLine from "./underline";
import StrikeThrough from "./strikeThrough";

const MenuConstructors = {
  bold: Bold,
  italic: Italic,
  underLine: UnderLine,
  strikeThrough: StrikeThrough,
};

export default MenuConstructors;
