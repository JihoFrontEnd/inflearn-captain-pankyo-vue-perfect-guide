# chart-lib

## Process

1.  차트 라이브러리 NPM으로 설치
2.  설치된 라이브러리를 import로 App.vue에서 로딩
3.  mounted() 라이프 사이클 훅에서 차트를 렌더링
4.  차트를 컴포넌트화
5.  컴포넌트의 플러그인화
6.  컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합

>   ### Chart.js 에러
>   
>   ref: https://github.com/sgratzl/chartjs-chart-wordcloud/issues/4
>   
>   업데이트 되면서 import 방식의 차이가 생겼다.
>   ```js
>   import { Chart } from 'chart.js';   // X
>   import Chart from 'chart.js/auto';  // O
>   ```
