function ProgressBar(id){
	this.id=id;	
	this.value=0;	
}

ProgressBar.prototype.add=function(num){
	this.value+=num;
	if(this.value<0){
		this.value=0;
	}
				
	//change span
	var span=document.querySelector('#'+this.id+" > span:first-of-type");				
	span.innerHTML=this.value+'%';
				
	//change div
	var div=document.querySelector('#'+this.id+" > div:first-of-type");
	if(this.value>100){
		div.style.width="100%";
		div.className='overlimit'
	}else{
		div.style.width=this.value+"%";
		div.className='';
	}
}
			
			
var progressbars=new Array();
progressbars[0]=new ProgressBar('p1');
progressbars[1]=new ProgressBar('p2');
progressbars[2]=new ProgressBar('p3');
			
window.onload=function(){
	progressbars[0].add(25);
	progressbars[1].add(50);
	progressbars[2].add(75);
}			
		
function add(num){
	var current=document.getElementById('current').value;		
	progressbars[current].add(num);		
}