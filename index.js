
function SyntaxHighlighter(text)
{
console.log("asdasd")
var code = document.getElementsByClassName("code")[0]


var hcode = text;
var hcode = hcode.replace(/"(.+)"/g , span('"$1"','string'));
var hcode = hcode.replace("=", span('=','white'));  
var hcode = hcode.replace(";", span(';','white'));  
var hcode = hcode.replace(/'(.+)'/g , span("'$1'",'string'));
var hcode = hcode.replace(/\$\{([\d\w]+)\}/g , span('${$1}','fstring'));
var hcode = hcode.replace(/([\(\)])/g , span('$1','fBrac'));
var hcode = hcode.replace(/([\{\}])/g , span('$1','sBrac'));
var hcode = hcode.replace(/var (\w+)/g , span('var $1','variable'));
var hcode = hcode.replace(/const (\w+)/g , span('const $1','variable'));
var hcode = hcode.replace(/let (\w+)/g , span('let $1','variable'));
var hcode = hcode.replace(/(var) /g , span('$1 ','inbuilt'));
var hcode = hcode.replace(/(const) /g , span('$1 ','inbuilt'));
var hcode = hcode.replace(/(let) /g , span('$1 ','inbuilt'));
var hcode = hcode.replace(/(?<=\.)([a-zA-Z0-9]+)/g , span('$1','ChainChild'));
var hcode = hcode.replace(/(?<![\.\w])([a-zA-Z0-9\[\]]+)\./g , span('$1.','ChainStart'));
console.log(hcode)
code.innerHTML = hcode;
}

const span = (child,classname) => {

    return `<span class="${classname}">${child}</span>`;
}

var input = document.getElementById('inputText').addEventListener('input',(e)=>{

    SyntaxHighlighter(e.currentTarget.value)
})


window.addEventListener("load",()=>SyntaxHighlighter(document.getElementById('inputText').innerHTML));

document.getElementById('inputText').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener('click',(e)=>{
        var code = document.getElementsByClassName("code")[0];
        code.style.fontFamily = e.target.getAttribute("value");
        console.log( e.target.getAttribute("value"))
    })
});