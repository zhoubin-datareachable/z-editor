/**
 * @description 命令
 * @date 2021-12-22
 * @author tudou
 * @lastModify tudou 2021-12-22
 */
import $ from "../core/dom";

function Command(editor) {
  this.editor = editor;
}

Command.prototype = {
  do: function (name) {},
  // 加粗
  bold: function () {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);

    const container = range.commonAncestorContainer;
    // if(range.commonAncestorContainer)
    console.log(range);
    console.log(container.nodeType);

    if (container.nodeType === 3) {
      const node = range.commonAncestorContainer.parentElement;
      const data = range.startContainer.data;
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;
      const boldText = data.slice(startOffset, endOffset);
      const beforeData = data.split("").splice(0, startOffset).join("");
      const endData = data.split("").splice(endOffset, data.length).join("");
      console.log(beforeData);
      console.log({ data });
      console.log({ boldText });

      //   console.log("@", node.children);
      if (node.children.length > 0) {
        for (let i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i] === container) {
            endNode = node.childNodes.splice(i, node.childNodes.length);

            // const currentNode = node.childNodes[i];
            // const bNode = $(`<b>${boldText}</b>`);
            // currentNode.innerHTML = beforeData;
            // currentNode.appendChild(bNode[0]);
            // const endText = document.createTextNode(endData);
            // currentNode.appendChild(endText);
            // range.selectNode(bNode[0]);
          }
        }
        // node.children.forEach((item) => {
        //   console.log("@", item === container);
        // });
        return;
      }

      const bNode = $(`<b>${boldText}</b>`);
      node.innerHTML = beforeData;
      node.appendChild(bNode[0]);
      const endText = document.createTextNode(endData);
      node.appendChild(endText);

      range.selectNode(bNode[0]);
    }
  },
};

export default Command;
