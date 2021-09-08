# Vue.js 완벽 가이드 - 실습과 리펙토링으로 배우는 실전 개념

## Inflearn - 캡틴판교

### 강의에서 다루는 내용

-   Part 1. 애플리케이션 제작 실습
-   Part 2. 애플리케이션 실무 활용

1.  Vue.js를 이용한 **웹 서비스 구현 절차**
2.  실무 프로젝트 진행 방식(컴포넌트, **라우터**, **API**, **스토어**)
3.  **컴포넌트 디자인 패턴**과 **자바스크립트 비동기 처리**
4.  **Mixins**와 **HOC**를 이용한 컴포넌트 재활용 방법
5.  **외부 라이브러리 모듈화** 및 **실무 프로젝트 구성** 방법
6.  사용자 경험을 높이는 라우터 설계 방법과 **고급 라우터 패턴**

### 개발 환경

-   Node.js 10.x
-   VSCODE
-   [GitHub](https://github.com/joshua1988/vue-advanced)
    ([gist에 요청](https://gist.github.com/joshua1988/da1b9ab5703480f71cef88b2f8cb6ede))

### VSCODE 플러그인 목록

-   Vetur
-   TSLint
-   ESLint
-   Auto Close Tag
-   Material Icon
-   Night Owl

### Vue Convention

-   [Official Style Guide](https://vuejs.org/v2/style-guide)

## Deploy

-   [Netlify](https://www.netlify.com)
-   [Published Site](https://vigilant-aryabhata-691839.netlify.app)

>   엄청 간단해서 놀랐다.

-   [Base Directory Setup](https://app.netlify.com/sites/vigilant-aryabhata-691839/settings/deploys)
    >   Netlify가 업데이트 되면서 초기 설정에 이미 Base Directory가 있었다.

-   `404 Not Found` 문제 해결 방법
    -   [Vue CLI](https://cli.vuejs.org/guide/deployment.html#netlify)
    1.  배포하는 프로젝트의 `/public` 디렉토리 내에
        `_redirect`라는 파일을 생성한다.
    2.  아래 내용으로 채운다.
        ```conf
        # Netlify settings for single-page application
        /*    /index.html   200
        ```
