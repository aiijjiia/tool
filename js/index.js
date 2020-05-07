var content = document.getElementById('right_content');
var str = ''
for (var i = 1; i <= 15; i++) {
	str += '<div class="right_box"><img src="img/box' + i+'.png" ></div>'
}
content.innerHTML = str
var content_img = document.getElementsByClassName('right_box')
var state=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var count=0
var left_img=document.getElementById('left_img')
var left_middle=document.getElementById('left_middle')
for (var i = 0; i < content_img.length; i++) {
	content_img[i].setAttribute('id',i);
	content_img[i].addEventListener('mousedown', function() {
		state[this.id]=!state[this.id];
		if(state[this.id]){
			this.style.filter='none'
			count++;
		}else{
			this.style.filter='grayscale(100%)'
			count--;
		}
	})
	content_img[i].addEventListener('mouseover', function() {
		left_img.src='img/p'+(parseInt(this.id)+1)+'.png';
	})
}
function deal(){
	var right_img=document.getElementById('right2_box')
	str=''
	for(var i=0;i<15;i++){
		if(state[i]==true){
			str+='<img src="img/'+(i+1)+'.png" >'
		}
	}
	right_img.innerHTML=str
}
var right1=document.getElementById('right1')
var right2=document.getElementById('right2')
function change1(){
	if(count==0){
		alert("One-bottles is the minimum combination.")
		return;
	}
	if(count>4){
		alert("Four-bottles is the maximum combination.")
		return;
	}
	right1.style.display='none'
	right2.style.display='block'
	deal()
}
function change2(){
	count=0
	for(var i=0;i<15;i++){
		state[i]=false;
		content_img[i].style.filter='grayscale(100%)'
	}
	right1.style.display='block'
	right2.style.display='none'
}

