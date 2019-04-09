"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Jose Felix
   Date:   4.5.19

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/
// global variables for these nodes
var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

// starts the makeTree function when the code starts
window.onload =  makeTree;
function makeTree() {
      // creates an aside
      var aside = document.createElement("aside");
      // sets the id
      aside.setAttribute("id", "treeBox");
      // creates the h1
      var h1 = document.createElement("h1");
      // sets the text content
      h1.textContent = "Node Tree";
      // combines the two
            aside.appendChild(h1);
      document.getElementById("main").appendChild(aside);
      var nodeList = document.createElement("ol");
      aside.appendChild(nodeList);
      //decorates the code and gets the CSS for it to have some color
      var sourceArticle = document.querySelectorAll("#main article");
      // calls the function using these parameters
      makeBranches(sourceArticle, nodeList);
}

function makeBranches(treeNode, nestedList) {
      nodeCount += 1;
      var liElem = document.createElement("li");
      var spanElem = document.createElement("span");
      var extra = document.createTextNode("+--");
      liElem.appendChild(spanElem);
      liElem.innerHTML += "+--";
      nestedList.appendChild(liElem);


      if (treeNode.nodeType === 1){
            elemCount++;
            spanElem.class = "elementNode";
            spanElem.textContent = "<" + treeNode.nodeName + ">";
      } else if (treeNode.nodeType === 3) {
            textCount++;
            var textString = treeNode.nodeValue;
            if (isWhiteSpaceNode(textString) === true) {
                  wsCount++;
                  spanElem.setAttribute("class", "whiteSpaceNode");
                  spanElem.textContent = "#text";
            } else if (isWhiteSpaceNode(textString) === false) {
                  spanElem.setAttribute("class", "textNode");
                  spanElem.textContent = textString;
            }

      }
}
for (var n = 0; n !== null; n++) {

}
if (treeNode.childNodes[i] > 0) {

}

// dont touch
function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
