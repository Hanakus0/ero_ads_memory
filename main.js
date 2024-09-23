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
    'ad04.png',
    'ad05.png',
  ];
  const image_path = './images/' // 画像のフォルダーパス
  const ad_img_src = document.getElementById(target_img); // ソース属性取得
  const index = Math.floor(Math.random() * images_name.length); // 画像番号

  // パスを生成し src にセット
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

/** slide_inout */
const display_slide_inout_ad = function (){
  // 画像セット
  set_image_src('slide_inout_img');
  // ポップアップを表示
  document.getElementById('slide_inout').style.display = 'flex';
  const slideInoutContent = document.getElementById('slide_inout-content');
  // スライドインアニメーション
  slideInoutContent.style.animation = 'slideIn 0.5s forwards'; 

  // 閉じるボタンをクリックしたらポップアップを非表示にする
  const closeBtn = document.getElementById('slide_inout-close-btn');
  closeBtn.onclick = function() {
    // スライドアウトアニメーションを適用
    slideInoutContent.style.animation = 'slideOut 0.5s forwards';
    setTimeout(() => {
      // アニメーション後にポップアップを非表示
      // 非同期処理はアニメーションの時間と同じだけ待つ
        document.getElementById('slide_inout').style.display = 'none';
        setTimeout(display_slide_inout_ad, 3000);
    }, 500);
  }
};

/** zoom */
const display_zoom_ad = function() {
  // 画像セット
  set_image_src('zoom_img');

  const popup = document.getElementById('zoom');
  const closeBtn = document.getElementById('zoom_close-btn');

  // 数秒後にポップアップを拡大表示する
  setTimeout(function() {
      popup.classList.add('show');
  }, 2000);

  // 閉じるボタンをクリックしたらポップアップを縮小して非表示にする
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_zoom_ad();  // ループ用
  };
};

/** slide_down */
const display_slide_down_ad = function() {
  // 画像セット
  set_image_src('slide_down_img');
  
  // ページロード時にポップアップを表示
  const closeSlideDownButton = document.getElementById('slide_down-close-btn');
    // 数秒後にポップアップを拡大表示する
    setTimeout(function() {
      document.getElementById('slide_down').style.display = 'flex';
  }, 1500);

  closeSlideDownButton.addEventListener('click', () => {
    // ポップアップを非表示
    document.getElementById('slide_down').style.display = 'none';
    display_slide_down_ad();
  });
};
  

/** 
 * トリガー 
 * */
// window.onload = display_popup_ad();
window.onload = display_slide_inout_ad();
// window.onload = display_zoom_ad();
// window.onload = display_slide_down_ad();
