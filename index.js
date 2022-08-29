function myclick(no) {
  myform.display.value += no;
}

function equalto() {
  myform.display.value = eval(myform.display.value);
}

function clear() {
    myform.display.value = "";
}

function del() {
    var a = myform.display.value;
    myform.display.value=a.substr(0,a.length()-1)
}