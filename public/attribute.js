// Q. 테이블의 크기를 내가 원하는 만큼 설정하기
// style width-> 그 때 그 때 원하는 만큼으로.

//1.버튼을 누른다.
//1-1. 버튼 요소를 가지고 온다.
//1-2. 버튼 요소에 eventListener(click)를 달아준다.
//1-3. 버튼을 눌렀을 때 실행시킬 메소드(함수)를 작성한다.
//2. table태그 요소를 가지고 온다.
//2-1. prompt창을 띄운다.
//2-2. prompt 창에 내가 원하는 사이즈를 입력한다.
//2-3. table의 style속성 중 width속성을 반영한다.

//하다가 데이터 타이빙 리스트일수도 있고 해서 콘솔로그 꼭찍어봐야한다.
var btn = document.getElementById('SetAttribute');
console.log(btn);
btn.onclick=function() {
    console.log("button!");
    setWidth();

}

function setWidth() {
    var tb = document.getElementById('mytable');
    var size = prompt("원하는 사이즈를 입력해보세요.");
    console.log(size);
    tb.setAttribute('style', 'width:' + size + '%');
}

