 var a;
     var b;
     var str;
     var num2;
     function  set()
     {

     	a="beStart";
     	str=0;
     	b="start";
     	num2=false;
     }
     function showData(i)
     {
     	if(num2==true)
     	{
     		
     		document.getElementById('result').value=i;
     		num2=false;
     	}
     	else
     	{
     		if(document.getElementById('result').value=="0")
     		{
     			document.getElementById('result').value=i;
     			a="beInteger";
     		}
     		else
     			document.getElementById('result').value+=i;
     	}
     }
     function addPoint()
     {
     	if(a=="beStart"||a=="beInteger")
     	{
     		cal.total.value+="";
     		a="beFloat";
     	}
     }
     function clearData()
     {
     	document.getElementById('result').value="0";
     	a="beStart";
     	b="start";
     }
     function count()
     {
     	if(b!="start")
     	{
     		switch(b)
     		{
     			case"+":
     			str=parseFloat(str)+parseFloat(document.getElementById('result').value);break;
     			case"-":
     			str=parseFloat(str)-parseFloat(document.getElementById('result').value);break;
     			case"*":
     			str=parseFloat(str)*parseFloat(document.getElementById('result').value);break;
     			case"/":
     			str=parseFloat(str)/parseFloat(document.getElementById('result').value);break;   			
     		}
     		document.getElementById('result').value=str;
     		num2=true;
     }
     	num2="start";
     }
     function setOper(oper)
     {
     	num2=true;
     	if(b=="start")
     	{    
     		str=0+document.getElementById('result').value;
     		b=oper;
     	}
     	else
     	{
     		count();
     		b=oper;
     	}
     }     