    // Q.모든 타이들 들을 내가 원하는 이름으로 바꾸기
    // (버튼을 눌렀을 때)
    // 1.버튼이 눌린다.
    // 1-1.버튼의 내용을 가져온다.
    // 1-2.버튼에 onclickListener를 달아준다.)
    // 1-3.버튼을 눌렀을 때 메소드를 실행시킨다. 
    // 2.타이틀에 해당하는 html element들을 가져온다.(변수에 담는다.)
    // 3.각각의 순환하며 내용을 바꾼다.

function 함수이름(파라미터) {
    
}

var 함수이름

function setTitle() {
    var titles = document.getElementsByClassName('title');
    console.log(titles);
    for(var i = 0; i <titles.length; i++) {
        titles[i].innerHTML ="배가 아프다...";
    }
    
}

// var btn= document.getElementsByTagName('button')[0];
var btn = document.getElementById('SetTitle');
console.log(btn);
btn.onclick = function() {
    alert("Done");
    setTitle();
}


//자바스크립트로 HTML내용물 가져오기
// document.getElementById(ID명);
// document.getElementsByClassName(클래스명);
// document.getElementByTagName(태그이름);
// document.querySelectorAll(css selector);
