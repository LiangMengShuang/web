var img=document.getElementById('picScroll');
var img1=document.getElementById('picScroll1');
var img2=document.getElementById('picScroll2');

function changeToLeft() {
    if(img.scrollLeft-img1.offsetWidth>=0)
    {
    img.scrollLeft=0;
    }
    else{
    img.scrollLeft+=1;
    }
}
var MyMove=setInterval(changeToLeft,10)
    img.onmouseover=function() 
    {
    	clearInterval(MyMove);
    }
    img.onmouseout=function() 
    {
    	MyMove=setInterval(changeToLeft,10);
    }
