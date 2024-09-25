'use strict;'

/////////////////////////////////////////////////////////////////////////
/******************************
 **** ロゴ押下イベント ****
******************************/
document.getElementById('logo').addEventListener('click', (event) => {
  if(!confirm('github.com に移動します。よろしいですか？')) event.preventDefault();
});

/////////////////////////////////////////////////////////////////////////
const popup_next_btn_ad_time = 10000;

/******************************
 ** "next_btn_ad.png"イベント **
******************************/
(function display_next_btn_ad() {
  const popup = document.getElementById('next_btn_ad');
  const closeBtn = document.getElementById('next_btn_ad-close-button');

  // 数秒後にポップアップを表示する
  setTimeout(function() {
    popup.classList.add('show');
  }, popup_next_btn_ad_time);

  // 閉じるボタンをクリックしたらポップアップを非表示にする
  closeBtn.onclick = function() {
    popup.classList.remove('show');
    popup.style.transition = "opacity 0.5s ease, visibility 0s 0.5s"; // 消えるときのアニメーション
    display_next_btn_ad(); // ループ用
    display_fake_alert();
  };
})();

/******************************
 ** "fake_alert.png"イベント **
******************************/
let close_count = -5; // 初期表示で+5されてしまう関係で-5
const display_alert_count = 20;

function display_fake_alert() {
  // 一定回数広告を閉じられたら表示
  if(close_count === display_alert_count) {
    const closeBtn = document.getElementById('fake_alert-close-btn');
    // 数秒後にポップアップを表示する
    document.getElementById('fake_alert').classList.add('active');

    // 閉じるボタンをクリックしたらポップアップを非表示にする
    closeBtn.onclick = function() {
      document.getElementById('fake_alert').classList.remove('active');
      display_fake_alert(); // ループ用
      close_count = 0; // 非表示後に再度カウントリセット
    };
  } else {
    close_count++;
  }
};


/////////////////////////////////////////////////////////////////////////
/******************************
 **** 表示時のルーティン ****
******************************/
function display_routine(target_img, animation_name) {
  set_image_src(target_img);
  apply_display_order(animation_name);
  display_fake_alert();
}

/******************************
 **** 画像ランダムプロセス ****
******************************/
function set_image_src(target_img) {
  // 画像名
  const images_names = [
    'ad01.png',
    'ad02.png',
    'ad03.png',
    'ad04.png',
    'ad05.png',
    'ad06.png',
    'ad07.png',
    // 'ad08.png',
  ];
  const image_path = './images/' // 画像のフォルダーパス
  const ad_img_src = document.getElementById(target_img); // ソース属性取得
  const index = Math.floor(Math.random() * images_names.length); // 画像番号

  // パスを生成し src にセット
  ad_img_src.src = image_path.concat(images_names[index]);
}

/******************************
 *** z-index のランダム決定 ****
******************************/
function apply_display_order(target_ad) {
  const z_index_ary = [
    100,
    200,
    300,
    400,
    500
  ];
  // 要素の取得
  const target_ad_div = document.getElementById(target_ad);

  // z-index がある場合
  if(target_ad_div.style.zIndex  === '') {
    // Fisher-Yatesアルゴリズム
    for(let i = (z_index_ary.length - 1); 0 < i; i--){
      // 0〜(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));

      // 要素の並び替えを実行
      let tmp = z_index_ary[i];
      z_index_ary[i] = z_index_ary[r];
      z_index_ary[r] = tmp;
    }

    // zIndex の操作
    const z_index = Math.floor(Math.random() * z_index_ary.length); // 配列より取得

    // zIndex をセット
    // target_ad_div.style.zIndex = z_index_ary[z_index];
    target_ad_div.style.zIndex = z_index_ary.pop(z_index);
  } else {
    // z-index がない場合、zIndex をリセット
    z_index_ary.push(target_ad_div.style.zIndex);
    target_ad_div.style.zIndex = '';
    display_fake_alert();
  }
}

/******************************
 ****** 広告表示プロセス *******
******************************/
const display_popup_time = 2500;
const display_slide_inout_time = 2500;
const display_zoom_time = 2500;
const display_slide_down_time = 2500;
const display_bounce_time = 2500;

/** popup */
(function display_popup_ad(){
  display_routine('popup_img', 'popup');

  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('popup-close-btn');

  // 数秒後にポップアップを表示する
  setTimeout(function() {
    popup.classList.add('show');
  }, display_popup_time);

  // 閉じるボタンをクリックしたらポップアップを非表示にする
  closeBtn.onclick = function() {
    popup.classList.remove('show');
    popup.style.transition = "opacity 0.5s ease, visibility 0s 0.5s"; // 消えるときのアニメーション
    display_popup_ad(); // ループ用
  };
})();

/** slide_inout */
(function display_slide_inout_ad(){
  display_routine('slide_inout_img', 'slide_inout');

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
        setTimeout(display_slide_inout_ad, display_slide_inout_time);
    }, 500);
  }
})();

/** zoom */
(function display_zoom_ad() {
  display_routine('zoom_img', 'zoom');

  const popup = document.getElementById('zoom');
  const closeBtn = document.getElementById('zoom_close-btn');

  // 数秒後にポップアップを拡大表示する
  setTimeout(function() {
      popup.classList.add('show');
  }, display_zoom_time);

  // 閉じるボタンをクリックしたらポップアップを縮小して非表示にする
  closeBtn.onclick = function() {
      popup.classList.remove('show');
      display_zoom_ad();  // ループ用
  };
})();

/** slide_down */
(function display_slide_down_ad() {
  // ページロード時にポップアップを表示
  const closeSlideDownButton = document.getElementById('slide_down-close-btn');
    // 数秒後にポップアップを拡大表示する
    setTimeout(function() {
      display_routine('slide_down_img', 'slide_down');
      document.getElementById('slide_down').style.display = 'flex';
  }, 2500);

  closeSlideDownButton.addEventListener('click', () => {
    // ポップアップを非表示
    document.getElementById('slide_down').style.display = 'none';
    display_slide_down_ad(); // ループ用
  });
})();

/** bounce */
(function display_bounce_ad() {
  const bounce = document.getElementById('bounce');
  const closeButton = document.getElementById('bounce_close-button');

  function showbounce() {
    display_routine('bounce_img', 'bounce');
    bounce.style.display = 'block';
  }

  function hidebounce() {
    bounce.style.display = 'none';
  }

  // 最初のポップアップ表示
  setTimeout(showbounce, 1000); // 1秒後に表示

  closeButton.addEventListener('click', () => {
      hidebounce(); // 数秒後に再表示
      setTimeout(showbounce, 2500); // 5秒後に再表示
  });
})();
