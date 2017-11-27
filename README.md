# 20171127 변수명 설정 룰 + 자바스크립트+jquery

#  변수명 설정

* 캐멀케이스(startName)

   * 스네이크케이스(start_name)
  * 헝가리언케이이스(stsStartName) -> is_admin?


* 인덴트 잘 지켜주기!

* BSD가 퍼포먼스가 좋지만 K&R 방식이 읽기 좋다. 주로 k&R사용!



```java
//k&R
if(조건문)
{
    //실행문   
} else if {
```

```java
//BSD
if(조건문)
{
    //실행문   
} 
else if {
}
```

# 자바스크립트

## 자바스크립트 특징

-변수를 선언할 수 있다.

```javascript
var el = 10;
const
let
```

-로그를 찍어 볼 수 있다.(웹에서 실행한 후 웹개발자 도구로 뭐가 출력되는지 확인 가능)!!

```javascript
for(var a =1; a <10; 1++) {
  console.log("HI")
  console.dir(el)
}
```

## 개발자도구, 자바스크립트와 콘솔창을 활용 네이버 장난

-네이버 창 오픈 - 개발자 도구 - console

```javascript
var el = document.getElementsByClassName('tnb_link');

console.log(el);
//콘솔에 뜨는 리스트 활용하여 for로 출력한다.

for(var i =0; i <el.length; i++)  {
    el[i].innerHTML="영원히 고통받는 네이버";
}
```

-자바스크립트 문법 확인 시 [w3 school]https://www.w3schools.com/js/

-개발자 도구를 켜고 서버에서 날라온 파일을 받아 수정해도 아무도 모른다.

## 자바 스크립트 펑션 쓰기

1. 뷰 파일에 일단 펑션 적용할 페이지 삽입해 두기.

```html
<script src="./파일명.js"></script>
```

2. function 을 js파일에  선언하기!



## 논리적 사고 연습

코드 짜기전에 미리 생각해보기(일단 텍스트로 코딩해보는 연습)

자바 스크립트 펑션 만들기 위한 사고.


Q.오늘 출석한 사람중에서 가장 키가 큰 사람은?

1.배열을 만든다. 배열에 모든 사람의 키를 입력한다.
2.첫번째 사람의 키를 알아낸다.(버블소팅?)
  이사람이 가장 큰 사람이라고 가정한다.
3.두 번째 사람, 세 번째 사람, 돌면서 가장 큰 사람과의 키를 비교한다.
4.가장 큰 사람보다 더 큰 사람이 나타나면 그 사람이 가장 큰 사람이라고 다시 가정한다.

5.모든 사람의 키를 비교하고 나면 가장 큰 사람의 키를 알 수 있다.




Q. 홈페이지에 가입할 때, 아이디 중복체크하는 과정(상세하게 짜야함)
(순서도도 짜고, 코드 텍스트로 짜야함.)

1. 아이디를 폼에 입력한다.
2. 중복확인 버튼(이벤트 리스너)을 클릭한다.(ajax로 바로 뿌려줄 수도 있지만 대부분 클릭해야함. 서버에 부하)(이벤트)
3. form이 빈 칸 인가? => alert!안내메시지 출력(메소드) / 빈 칸이 아닌가? => DB에 쿼리를 날린다.
4. row가 존재하는지 확인한다.
5. 결과값을 출력한다.




Q.모든 타이들 들을 내가 원하는 이름으로 바꾸기
(버튼을 눌렀을 때)
​	1.버튼이 눌린다.

​	1-1.버튼의 내용을 가져온다.

​	1-2.버튼에 onclickListener를 달아준다.

​	1-3.버튼을 눌렀을 때 메소드를 실행시킨다. 

​	2.타이틀에 해당하는 html element들을 가져온다.(변수에 담는다.)

​	3.각각의 순환하며 내용을 바꾼다.

```javascript
function setTitle() {
  var title = document.getElementByClassName('title');
  cosole.log('title');
  for(var i=0; i<titles.length; i++) {
    titles[i].innerHTML="배가 아프다."
  }
}
var btn = document.getElmentById('SetTItle');
console.log(btn);
btn.onclick=function() {
  alert('Done')
  setTitle();
}
```

Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인 가능(jquery)

1. ''#post_title' 요소를 가지고 온다.

  1-1. 요소에 onchangeListener를 달아준다.

  1-2. 요소에 바뀐 값을 추출한다.

  1-3. 값을 변수에 저장한다.

2. 변수에 저장된 값을 alert한다.

```javascript
$(function(){
  $('#post_title').val('jquery재밌당');
  $('#post_title').on(change, function() {
    var text = $('#post_title').val();
    alert(text);
  })
});
```

 Q. 버튼을 눌렀을 때, table 태그에 class를 추가/삭제 한다.

1. 버튼을 누른다.

  1-1.버튼 요소를 가지고 온다.

 1-2.버튼 요소에 eventlistener가 있을 때 달아준다.

 1-3.버튼을 눌렀을 때 실행시킬 메소드를 작성한다.

 2.table 태그 요소를 가지고 온다.

 3.table 태그에 내가 원하는 class(table-hover)가 있는지 확인한다.

 class가 있으면 뺀다.

 class가 없으면 넣는다.

```javascript
var btn = documnet.getElementById('SetClass');
console.log(btn);
btn.onclick=function() {
  console.log("button!");
  toglleClass();
}

function toggleClass() {
  var tb= document.getElementByClassName('table')[0];
  tb.classList.toggle('table-hover')
}
```

Q. 테이블의 크기를 내가 원하는 만큼 설정하기
style width-> 그 때 그 때 원하는 만큼으로.

​	1.버튼을 누른다.

​	1-1. 버튼 요소를 가지고 온다.

​	1-2. 버튼 요소에 eventListener(click)를 달아준다.

​	1-3. 버튼을 눌렀을 때 실행시킬 메소드(함수)를 작성한다.

​	

​        2.table태그 요소를 가지고 온다.

   	2-1. prompt창을 띄운다.

​	2-2. prompt 창에 내가 원하는 사이즈를 입력한다.

​	2-3. table의 style속성 중 width속성을 반영한다.

```javascript
var btn = document.getElemtByID('SetAttribute');
console.log('btn');
btn.onclock=function() {
  cosole.log("button!");
  setWidth();
}
```



```javascript
function setWidth() {
  var tb=document.getElementById('mytable');
  var size = prompt("원하는 사이즈를 입력해 보세요");
  console.log(size);
  tb.setAttribute('style', 'width' + size + '%');
}
```

Q. 50분 마다 잠시 쉬는 시간을 가지는 안내 메시지를 출력

    17시는 마지막 시간이므로 수고하셨습니다. 메시지 출력 
    그 이전에는 열공합니다. 메시지 출력
    1.현재 시간을 가져옵니다.
    2.현재 시간에서 시에 해당하는 부분을 가져옵니다.
    3. 시에 해당하는 부분이 17 이상일 경우 잘가용
    아닌 경우 '열공해용' 메시지를 출력합니다.(alert로 출력)
    4. 1,2,3에 해당하는 과정을 50분에 한 번 씩만 나오게!



```javascript
function alertRest() {
 var time = new Date();
 console.log(time);
 var hour = time.getHours();
 console.log(hour);
 if(hour >= 17)
 {
   alert("잘가용!!수고수고")
 } else {
   alert("열공!!")
 }
}

setInterval(alertRest, 10000*5);
```



##jquery

-자바스크립트 안에 들어간 라이브러리

-$가  jquery를 쓰겠다는 뜻!

-[jquery event목록](https://api.jquery.com/category/events/)에서 

```javascript
<script src="./come.js"></script>
```



## 루비 온 레일즈에서 jquery

-public폴더에 js가 기본 설정 되어있어야 한다.

-javascripts 폴더의 posts에 posts.js 저장하면 전역 html에 적용 

-이 때 coffee file  지우고 dir 찍어서 메소드 있는지 확인




## java script 개발을 위한 윈도우 콘솔창 활용법 f12

* 자바 스크립트 잘 활용하려면 개발자 도구 console 잘 찍어봐야 함.

console.log("hi") : 괄호를 닫으면 메소드를 실행시키면 된다.

괄호 안 붙어도 값 출력하는 것을 속성이라고 한다.



#### 콘솔창 내에서  input 가능 !!!!!!

```javascript
- var logo = document. getElementsByClassName('naver_logo');
- cosole.dir(logo);
```



## 루비 HTML<참고>

-gem 'bootstrap-scss' 사용가능

-gem 설치후 application.scss에 @import 'bootstrap' 후 class명 이용해 적용.



## Ajax

* 비동기 방식이란?

| 동기                     | 비동기                                 |
| ---------------------- | ----------------------------------- |
| 청소, 설거지, 빨래 각각을 끝내야 다음 | 청소-로봇 설거지-세척기 빨래-세탁기 callback(요청완료) |

-비동기 방식을 사용하면 

-------------------------

에러? 팁

-지수 알고리즘 문제. 변수를 함수 밖으로 빼줘야 변수가 계속 변하지 않아서

 -모든 이벤트가 발생했을 때 꼭 콘솔로 확인해야함.

-오늘 typora로 다이어 그램 설치하려고 했는데

-윈도우에서는 Node.js설치 >>  npm으로 yarn 설치하고 >> yarn 명령어로 mermaid install해야함.

-[yarn설치](https://www.vobour.com/book/view/Y5vcMHJGHyN5ayheM)

-[npm설치](https://www.vobour.com/book/view/Y5vcMHJGHyN5ayheM)

-다른 사람들이 git README.md 받았을 때,  못 읽을 수도 있으니까 그냥 이미지로 넣는 것이 나음.

-멋사프로젝트 진행 중.

오늘 git flow 배움 [깃플로우](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

* 개발 하기 전에 pull먼저 하고 개발하는 것이 좋다.(충돌 예방)
* git pull하기 전 내 껀 commit 다 된 상태에서
* feature finish 안하고 push 가능
* develop 브랜치에서 해야하므로 master 라면 체크아웃 push 도 origin develop으로 한다.
* git feature finish 안하고 push 하면 가지와 함께 커밋됨.

-codacademy로 Jquery공부하기!!

-[강사님 git ](https://github.com/lovings2u/javascript_1)

-자바스크립트를 잘 하려면 내장 이벤트 공부를 해야 할듯!!/또한 개발자 도구로 끊임없이 콘솔 찍어서 확인!!

-자바스크립트는 액션주는 개념!!html 문서에