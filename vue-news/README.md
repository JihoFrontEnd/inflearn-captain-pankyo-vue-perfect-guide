# vue-news

## `this`

>   Google Chrome Console에서 테스트 하면 수월하게 이해할 수 있다.
>   그냥 강의를 한 번 더 봐도 좋고.

-   ES6 시점
1.  `this`는 최상위 객체인 `window` 객체를 가리킨다.
    -   `var a = 10;` 처럼 선언할 경우 `window`의 속성이 된다.
2.  생성자 또는 객체 안의 `this`는 그 인스턴스를 가리킨다.
    -   일반적으로 이해할 수 있는 수준으로 느껴진다.
    -   Vue Component의 `this`는 해당 Vue Component를 가리킨다.
3.  Promise 객체로 인한 즉, callback 함수의 `this`는 `undifined`이다.
4.  그러나 화살표 함수를 사용할 경우, 상위(component) 객체를 카리킨다.

## callback

>   callback 지옥

```js
<script src="https://code.jquery.com/jquery-3.3.1.js" "..."></script>
<script>
  function a() {
    // 1
    var result = [];
    // 2
    $.ajax({
      url: "http...",
      success: function(data) {
        result = data;
        function b(result) {
          var newResult = parse(result);
          function c(newResult) {
            // ...
          }
        }
      }
    });
  }
  a();
</script>
```

>   `Promise` 객체가 대두한 이유

## `Promise`

>   비동기 처리에서 callback hell을 방지한다.

```js
function callAjax() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '',
      success: function(data) {
        resolve(data);
      },
      //...
    });
  });
}

callAjax()
  .then(function(data) {
    //...
  });
```

[reference](https://joshua1988.github.io/web-development/javascript/promise-for-beginners)

## Refactoring Components Design

## HOC vs Mixin

-   HOC는 Components Depth가 늘어남에 따라 통신의 관리가 힘들어질 수 있다.
-   Mixin은 Components Depth가 플랫해지지만, 관리해야 하는 Components가 늘어난다.
-   상황에 따라 유연하게 적용하면 좋다.
-   사용하는 방법은 Mixin이 더 직관적일 수 있다.
-   각각 문법의 차이가 있고, 정답은 없다.

## 데이터 호출 시점

1.  Router Navigation Guard
    -   `beforeEnter`: 특정 URL로 접근하기 전의 동작을 정의
2.  Component Life Cycle Hooks
    -   `created`: Component가 생성되자마자 호출되는 로직

>   프로젝트에서 세운 규칙에 따라 UX를 고려한 UI 설계를 하자.

## JS async process

```js
var id = $.get('example.com/id');
if (id === 'jiho')
    var products = $.get('example.com/id/products');
console.log(products);
```

위 처럼 코드를 직관적으로 사용하기 위해 `async/await`에 대해 학습한다.
>   실제 위 코드는 제대로 동작하지 않는다.

### example

```js
async function fetchData() {
    var list = await getUserList();
    console.log(list);
}

function getUserList() {
    return new Promise(function(resolve, reject) {
        var userList = ['user1', 'user2', 'user3'];
        resolve(userList);
    });
}

fetchData();
```

>   Google Console에서 동작하면 쉽게 확인할 수 있다.

```js
loginUser() {
  axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (response.data.id === 1) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then()
          .catch();
      }
    })
    .catch();
}
```
```js
async loginUser() {
  var response = await axios.get('https://...1');
  if (response.data.id === 1) {
    var list = await axios.get('https://...2')
    this.items = list;
  }
}
```
```js
import { handlerException } from './handler';

async loginUser() {
  try {
    var response = await axios.get('https://...1');
    if (response.data.id === 1) {
      var list = await axios.get('https://...2')
      this.items = list;
    }
  } catch (error) {
    handlerException(error.status);
    console.error(error);
  }
}

// hander.js
export function handlerException(status) {...}
```

## Chart.js [〽](https://www.chartjs.org)

> [State of JS](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks)

1.  외부 라이브러리 모듈화
    -   Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 한다.
2.  종류
    -   차트
    -   데이트 피커
    -   테이블
    -   스피너
