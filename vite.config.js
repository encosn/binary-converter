import { defineConfig } from 'vite';

/**
 * binary-converter (10진수 → 2진수 변환 실습기) - 개발/빌드 설정
 *
 * 이 설정 파일은 앱 폴더 안에 있고, 웹서버의 문서 루트도 이 폴더다.
 *   npm start  →  http://localhost:8080/ 에서 이 폴더의 index.html 이 메인 페이지로 열린다.
 *
 * 설치·빌드 결과물(node_modules/, dist/)도 모두 이 폴더 안에 생긴다.
 * 프로젝트 루트(C:\project_AI)에는 아무것도 설치하지 않는다.
 * → 새 앱을 만들 때도 그 앱 폴더 안에 package.json 과 이 설정 파일을 따로 둔다.
 */
export default defineConfig({
  // 문서 루트 = 이 설정 파일이 있는 폴더 (= binary-converter)
  root: '.',

  // 파일을 직접 열어도(file://) 경로가 깨지지 않도록 상대 경로로 빌드한다
  base: './',

  server: {
    port: 8080,
    strictPort: true,   // 8080이 사용 중이면 조용히 다른 포트로 옮기지 않고 알려 준다
    open: false         // 교실에서 자동으로 브라우저를 띄우려면 true 로 바꾼다
  },

  preview: {
    port: 8080,
    strictPort: true
  },

  build: {
    // 결과물은 이 폴더 안의 dist 에 모은다
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
