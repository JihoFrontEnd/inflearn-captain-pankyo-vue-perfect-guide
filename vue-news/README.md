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