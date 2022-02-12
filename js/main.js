var kapat = document.querySelectorAll('#kapat');
var resim = document.getElementsByClassName("resim-1");


for(var i = 0 ; i < resim.length;i++){
  resim[i].onmouseover = function(){
    var yazi = this.children;
    yazi[1].style.bottom = "-45px";
  };
}
for(var j = 0 ; j < resim.length;j++){
  resim[j].onmouseout = function(){
    var yazi = this.children;
    yazi[1].style.bottom = "0";
  };
}