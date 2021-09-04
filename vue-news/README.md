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