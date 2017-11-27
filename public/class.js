
// Q. 버튼을 눌렀을 때, table 태그에 class를 추가/삭제 한다.

// 1. 버튼을 누른다.

// 1-1.버튼 요소를 가지고 온다.

// 1-2.버튼 요소에 eventlistener가 있을 때 달아준다.

// 1-3.버튼을 눌렀을 때 실행시킬 메소드를 작성한다.

// 2.table 태그 요소를 가지고 온다.

// 3.table 태그에 내가 원하는 class(table-hover)가 있는지 확인한다.

// class가 있으면 뺀다.

// class가 없으면 넣는다.

var btn = document.getElementById('SetClass');
console.log(btn);
btn.onclick=function() {
    console.log("button!");
    toggleClass();
}
//토글 있으면 넣고 없으면 빼는거
function toggleClass() {
    var tb = document.getElementsByClassName("table")[0];
    // console.log(tb.classList);
    // console.dir(tb.classList);
    // if(tb.classList.contains('table-hover')){
    //     tb.classList.remove('table-hover');        
    // }else{
    //     tb.classList.add('table-hover');
    // }
    // tb.classList.remove('table-hover');
    tb.classList.toggle('table-hover');
    
}


