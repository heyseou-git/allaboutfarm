# (주)올어바웃팜 홈페이지

Google Sites(`sites.google.com/view/allaboutfarm`)를 정적 웹사이트로 옮긴 버전입니다.
순수 HTML/CSS/JS로만 구성되어 별도 빌드 과정 없이 어디서나 호스팅할 수 있습니다.

## 페이지 구성

| 파일 | 메뉴 |
|------|------|
| `index.html` | HOME |
| `brand.html` | BRAND |
| `product-service.html` | PRODUCT & SERVICE |
| `technology.html` | TECHNOLOGY |
| `wellness-story.html` | WELLNESS STORY |
| `contact-partnership.html` | CONTACT & PARTNERSHIP |

공통 헤더/푸터, 스타일(`assets/css/style.css`), 스크립트(`assets/js/main.js`)를 모든 페이지가 공유합니다.

## 로컬에서 보기

```bash
cd allaboutfarm
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 이미지 교체 (대표님 고화질본으로)

현재 이미지는 원본 Google Sites에서 받은 **임시 이미지**입니다.
`assets/img/` 안의 파일을 **같은 파일명으로 덮어쓰기**만 하면 됩니다.

| 파일명 | 위치 / 용도 |
|--------|-------------|
| `logo.png` | 헤더 로고(AaF 삼각형) · 파비콘 |
| `home-hero.jpg` | HOME 상단 풀스크린 배경 (가로형 권장, 1600×900↑) |
| `brand-values.jpg` | (예비) BRAND 핵심가치 이미지 |
| `product-petfood.jpg` | PRODUCT — 프리미엄 펫푸드 원료 |
| `product-oem.jpg` | PRODUCT — OEM 가공 서비스 |
| `product-smartfarm.jpg` | PRODUCT — 스마트팜 설치 & 관리 |
| `product-turnkey.jpg` | PRODUCT — 턴키 패키지 솔루션 |
| `product-patent.jpg` | PRODUCT — 특허 기반 순환형 스마트팜 |
| `tech-intro.jpg` | TECHNOLOGY 인트로 이미지 |
| `wellness-1.jpg` ~ `wellness-8.jpg` | WELLNESS STORY 갤러리 8장 (세로형 3:4 권장) |

> 파일명만 같으면 HTML 수정 없이 바로 반영됩니다.

## 문의 폼 작동 설정 (Formspree)

`contact-partnership.html`의 문의 폼은 **Formspree**로 메일 수신되도록 준비되어 있습니다.

1. <https://formspree.io> 가입 → `heyseou@gmail.com` 수신 폼 생성
2. 발급된 엔드포인트(예: `https://formspree.io/f/abcdwxyz`)를 복사
3. `contact-partnership.html`에서 아래 부분의 `YOUR_FORM_ID`를 교체:
   ```html
   <form class="js-contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

> **설정 전까지는** 폼 제출 시 자동으로 **메일 앱(mailto)** 으로 폴백되어
> `heyseou@gmail.com`으로 보내는 메일 창이 열립니다. (즉, 지금도 문의는 가능)

## 배포 (GitHub Pages)

1. 이 `allaboutfarm` 폴더를 GitHub 저장소에 올림
2. 저장소 **Settings → Pages → Branch: main / root** 선택 후 저장
3. 발급된 `https://<계정>.github.io/<저장소>/` 주소로 접속

자체 도메인 연결도 GitHub Pages의 Custom domain 설정으로 가능합니다.

## 참고

- 폰트: Google Fonts `Quicksand`(제목) + `Noto Sans KR`(본문)
- 반응형: 데스크톱 가로 메뉴 → 모바일 햄버거 메뉴, 카드·갤러리 자동 1~2열 재배치
- 회사 정보(푸터): 주식회사 올어바웃팜 / 대표 윤서우 / 070-4243-0900 / 사업자등록번호 857-87-03331 / 서울시 강서구 양천로 24길 82
