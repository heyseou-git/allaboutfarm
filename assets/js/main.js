/* (주)올어바웃팜 — 공통 스크립트: 모바일 메뉴 / 검색 / 문의 폼 */
(function () {
  "use strict";

  /* 모바일 햄버거 메뉴 */
  var toggle = document.querySelector(".nav-toggle");
  var gnb = document.querySelector(".gnb");
  if (toggle && gnb) {
    toggle.addEventListener("click", function () {
      var open = gnb.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    gnb.addEventListener("click", function (e) {
      if (e.target.tagName === "A") gnb.classList.remove("open");
    });
  }

  /* 검색: 입력어로 사이트 내 페이지 안내 (간단 클라이언트 검색) */
  var searchBtn = document.querySelector(".js-search-toggle");
  var searchBar = document.querySelector(".search-bar");
  if (searchBtn && searchBar) {
    searchBtn.addEventListener("click", function () {
      searchBar.classList.toggle("open");
      var input = searchBar.querySelector("input");
      if (searchBar.classList.contains("open") && input) input.focus();
    });
    var form = searchBar.querySelector("form");
    if (form) {
      var PAGES = [
        { t: "HOME 건강한 원료 웰니스 공급", u: "index.html" },
        { t: "BRAND 브랜드 핵심가치 clean safe tech nature sustainability", u: "brand.html" },
        { t: "PRODUCT SERVICE 펫푸드 oem 스마트팜 턴키 특허", u: "product-service.html" },
        { t: "TECHNOLOGY 순환형 스마트팜 바이오차 퇴비 특허", u: "technology.html" },
        { t: "WELLNESS STORY 반려동물 허브", u: "wellness-story.html" },
        { t: "CONTACT PARTNERSHIP 연락처 파트너십 문의", u: "contact-partnership.html" }
      ];
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = (form.querySelector("input").value || "").trim().toLowerCase();
        if (!q) return;
        var hit = PAGES.find(function (p) { return p.t.toLowerCase().indexOf(q) > -1; });
        window.location.href = hit ? hit.u : "index.html";
      });
    }
  }

  /* 문의 폼: 검증 + 전송 (Formspree 또는 mailto 폴백) */
  var cform = document.querySelector(".js-contact-form");
  if (cform) {
    var status = cform.querySelector(".form-status");
    var show = function (msg, ok) {
      if (!status) return;
      status.textContent = msg;
      status.className = "form-status show " + (ok ? "ok" : "err");
    };
    cform.addEventListener("submit", function (e) {
      var name = cform.querySelector("[name=name]");
      var email = cform.querySelector("[name=email]");
      var message = cform.querySelector("[name=message]");
      if (!name.value.trim() || !message.value.trim()) {
        e.preventDefault();
        show("이름과 문의 내용을 입력해 주세요.", false);
        return;
      }
      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        e.preventDefault();
        show("올바른 이메일 주소를 입력해 주세요.", false);
        return;
      }

      var action = cform.getAttribute("action") || "";
      // Formspree 미설정(placeholder) 시 mailto 폴백
      if (action.indexOf("YOUR_FORM_ID") > -1 || action === "") {
        e.preventDefault();
        var subject = encodeURIComponent("[홈페이지 문의] " + name.value.trim());
        var body = encodeURIComponent(
          "이름: " + name.value.trim() + "\n" +
          "연락처: " + (cform.querySelector("[name=phone]") ? cform.querySelector("[name=phone]").value : "") + "\n" +
          "이메일: " + email.value + "\n\n" + message.value.trim()
        );
        window.location.href = "mailto:heyseou@gmail.com?subject=" + subject + "&body=" + body;
        show("메일 앱으로 연결합니다. 전송을 완료해 주세요.", true);
        return;
      }

      // Formspree 설정 시 fetch 비동기 전송
      e.preventDefault();
      var btn = cform.querySelector(".btn");
      if (btn) { btn.disabled = true; btn.textContent = "전송 중..."; }
      fetch(action, {
        method: "POST",
        body: new FormData(cform),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) {
          cform.reset();
          show("문의가 정상적으로 접수되었습니다. 감사합니다.", true);
        } else {
          show("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.", false);
        }
      }).catch(function () {
        show("전송에 실패했습니다. 네트워크를 확인해 주세요.", false);
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = "문의 보내기"; }
      });
    });
  }

  /* 푸터 연도 (있을 경우) */
  var y = document.querySelector(".js-year");
  if (y) y.textContent = new Date().getFullYear();
})();
