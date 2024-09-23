'use strict;'

/** popup */
const display_popup_ad = function (){
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('popup-close-btn');

  // 2秒後にポップアップを表示する
  setTimeout(function() {
    popup.classList.add('show');
  }, 1000);

  // 閉じるボタンをクリックしたらポップアップを非表示にする
  closeBtn.onclick = function() {
    popup.classList.remove('show');
    popup.style.transition = "opacity 0.5s ease, visibility 0s 0.5s"; // 消えるときのアニメーション
    display_popup_ad(); // ループ用
  };
}

/** slide_in */
const display_slide_in_ad = function (){
  const popup = document.getElementById('slide_in');
  const closeBtn = document.getElementById('slide_in-close-btn');

  // 1.5秒後にポップアップをスライドインさせる
  setTimeout(function() {
      popup.classList.add('show');
  }, 1500);

  // 閉じるボタンをクリックしたらポップアップをスライドアウトさせる
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_slide_in_ad(); // ループ用
  };
};

const display_zoom_ad = function() {
  const popup = document.getElementById('zoom');
  const closeBtn = document.getElementById('zoom_close-btn');

  // 1秒後にポップアップを拡大表示する
  setTimeout(function() {
      popup.classList.add('show');
  }, 500);

  // 閉じるボタンをクリックしたらポップアップを縮小して非表示にする
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_zoom_ad();  // ループ用
  };
};


/** トリガー */
window.onload = display_popup_ad();
window.onload = display_slide_in_ad();
window.onload = display_zoom_ad();
