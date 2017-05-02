var index=0;//当前位置
//上一张图片
function carousel_before()
{
	if(index<=0)
	{
		index=2;
	}else{
		index--;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg"
}
function carousel_next()
{
	if(index>=2)
	{
		index=0;
	}else{
		index++;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
}
//鼠标放到指定列表项
function carousel_li(icon_index)
{
	index=icon_index-1;
	document.getElementById("carousel_img").src="img/banner"+(icon_index)+".jpg";
	
	var l1=document.getElementById("carousel_li_1");
    var l2=document.getElementById("carousel_li_2");
    var l3=document.getElementById("carousel_li_3");
    
    l1.style.backgroundColor="#666666";
     l2.style.backgroundColor="#666666";
      l3.style.backgroundColor="#666666";
    
    if(icon_index==1)
    {
    	l1.style.backgroundColor="#00408f";
    }else  if(icon_index==2)
    {
    	l2.style.backgroundColor="#00408f";
    }else  if(icon_index==3)
    {
    	l3.style.backgroundColor="#00408f";
    }
}



