'use strict;'

/**
 * 画像ランダムプロセス
*/
function set_image_src(target_img) {
  // 画像名
  const images_name = [
    'ad01.png',
    'ad02.png',
    'ad03.png',
  ];
  const image_path = './images/' // 画像のフォルダーパス
  const ad_img_src = document.getElementById(target_img); // ソース属性取得
  const image_num = 3; // 画像枚数
  const index = Math.floor(Math.random() * image_num); // 画像番号

  // process
  ad_img_src.src = image_path.concat(images_name[index]);
}

/**
 * 広告表示プロセス
*/
/** popup */
const display_popup_ad = function (){
  // 画像セット
  set_image_src('popup_img');

  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('popup-close-btn');

  // 数秒後にポップアップを表示する
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
  // 画像セット
  set_image_src('slide_in_img');

  const popup = document.getElementById('slide_in');
  const closeBtn = document.getElementById('slide_in-close-btn');

  // 数秒後にポップアップをスライドインさせる
  setTimeout(function() {
      popup.classList.add('show');
  }, 2500);

  // 閉じるボタンをクリックしたらポップアップをスライドアウトさせる
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_slide_in_ad(); // ループ用
  };
};

const display_zoom_ad = function() {
  // 画像セット
  set_image_src('zoom_img');

  const popup = document.getElementById('zoom');
  const closeBtn = document.getElementById('zoom_close-btn');

  // 数秒後にポップアップを拡大表示する
  setTimeout(function() {
      popup.classList.add('show');
  }, 500);

  // 閉じるボタンをクリックしたらポップアップを縮小して非表示にする
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_zoom_ad();  // ループ用
  };
};


/** 
 * トリガー 
 * */
window.onload = display_popup_ad();
window.onload = display_slide_in_ad();
window.onload = display_zoom_ad();
