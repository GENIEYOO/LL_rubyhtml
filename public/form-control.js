$(function() {
    // alert("done");
    $('#post_title').val("jquery재밌당");
    $('#post_title').on('change', function() {//리스너달았네
        var text = $('#post_title').val();
        //바뀐값을 출력했네
        alert(text);
        // console.log("haha")
    //모든 이벤트가 발생했을 때 꼭 콘솔로 확인해야함.
    })
    //리스너 반응하는 애.
});

// Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인 가능
// 1. #post_title 요소를 가지고 온다.
// 1-1. 요소에 onChangeListener를 달아준다.
// 1-2. 요소에 바뀐 값을 추출한다.
// 1-3. 값을 변수에 저장한다.
// 2. 변수에 저장된 값을 alert한다.