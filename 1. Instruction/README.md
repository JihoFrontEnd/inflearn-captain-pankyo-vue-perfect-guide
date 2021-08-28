# 소개 및 설계

## 제작할 사이트 및 API 소개

-   Hacker News[😎](https://news.ycombinator.com/)
-   Hacker News API[🤘](https://news.ycombinator.com/)

## 애플리케이션 라우터 설계

-   Pages
    -   News
    -   Ask
    -   Jobs
    -   Item
    -   User

## 비공개 레포지토리 소개 및 뷰 CLI 설명

[GitHub](https://github.com/joshua1988/vue-advanced/tree/master)

## Vue CLI 2.x vs Vue CLI 3.x

### Vue 2.x 생성

```bash
vue init <template> <project name>
vue init webpack-simple <project name>
```

### Vue 3.x 생성

```bash
# vue@cli 모듈 필요
vue create <project name>
```

###  CLI 차이점

|                | 2.x                    | 3.x                         |
| -------------- | ---------------------- | --------------------------- |
| 명령어         | `vue init`             | `vue create`                |
| 웹팩 설정 파일 | 노출 O                 | 노출 X                      |
| 프로젝트 구성  | 깃헙의 템플릿 다운로드 | 플러그인 기반으로 기능 추가 |
| ES6 이해도     | 필요 X                 | 필요 O                      |=
