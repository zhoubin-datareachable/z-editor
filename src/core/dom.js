/**
 * @description DOM操作
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */

function createElementByHTML(selector) {
  const div = document.createElement("div");
  div.innerHTML = selector;
  return div.children;
}

/**
 * 构造函数
 * @param {*} selector 选中的id
 */
function DOMElement(selector) {
  // 如果为空
  if (!selector) {
    return;
  }
  this.selector = selector;
  let selectorResult = [];

  // <div>
  if (selector.indexOf("<") === 0) {
    selectorResult = createElementByHTML(selector);
  } else {
    // #id .class
    selectorResult = document.querySelectorAll(selector);
  }

  // 节点数量
  const length = selectorResult.length;
  for (let i = 0; i < length; i++) {
    // 节点对象 0:div 1:div
    this[i] = selectorResult[i];
  }
  this.length = length;
}

DOMElement.prototype = {
  /**
   * 遍历节点
   * @param {func} fn
   */
  forEach: function (fn) {
    for (let i = 0; i < this.length; i++) {
      // 节点
      const elem = this[i];
      fn.call(elem, elem, i);
    }
    return this;
  },
  append: function ($children) {
    this.forEach((item) => {
      $children.forEach((child) => {
        item.appendChild(child);
      });
    });
    return this;
  },
  css: function (key, value) {
    const currentStyle = `${key}:${value};`;
    this.forEach((item) => {
      let style = (item.getAttribute("style") || "").trim();
      console.log(style);
      style += currentStyle;
      console.log(style);
      item.setAttribute("style", style);
    });
    return this;
  },
  // 添加属性
  attr: function (key, value) {
    this.forEach((item) => {
      item.setAttribute(key, value);
    });
  },
  // 添加 class
  addClass: function (className) {
    if (!className) {
      return this;
    }
    return this.forEach((elem) => {
      let arr;
      if (elem.className) {
        // 解析当前 className 转换为数组
        console.log(elem.className);
        arr = elem.className.split(/\s/);
        arr = arr.filter((item) => {
          return !!item.trim();
        });
        // 添加 class
        if (arr.indexOf(className) < 0) {
          arr.push(className);
        }
        // 修改 elem.class
        elem.className = arr.join(" ");
      } else {
        elem.className = className;
      }
    });
  },
};

function $(selector) {
  return new DOMElement(selector);
}

export default $;
