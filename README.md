| ... | ... |
| ---- | ---- |
| 2024/09/23 | リリース |

---
# えっちなさいとのおもひで

# 概要
- サイトURL : https://hanakus0.github.io/ero_ads_memory/
- リポジトリURL : https://github.com/Hanakus0/ero_ads_memory

| ＃ | 説明 |
| ---- | ---- |
| サイト名 | えっちなさいとのおもひで |
| ジャンル | ミニアプリ |
| 制作期間 | 2024/09/22|
| 制作時間 |  約6時間 |
| 対応端末 | レスポンシブ対応 |

# このアプリについて
## テーマ ： 「おもいで」
RUNTEQ内イベント「【'24シルバー】ミニアプリWeek応募フォーム【9/20~9/26】」に応募

### 「おもいで」要素 = 『"ムゲン∞シリーズ" x "ネット詐欺ページ"』

- 思い出要素は次の２点
  1. 無限プチプチなどの "ムゲン∞シリーズ"
  2. 誰しも経験のある苦い思い出の根源 "ネット詐欺ページ"

- 思い出は思い出でも「苦い思い出」を表現したかった
- 一時期大ブームだった "ムゲン∞シリーズ" と「"無限"に湧いてくるポップアップ広告」を連想して当アプリが誕生
- 誰しもがエロコンテンツにアクセスするために苦戦した「ポップアップ広告の x を押下する」作業の煩わしさを"無限"に味わえるようにした
  - この点については ムゲン∞シリーズ の快感を"無限"に味わえる点と相反する要素となっている

<details>
<summary>ネタバレ注意</summary>
・ 純粋無垢なクソガキを震え上がらせ地獄に叩き落とすような仕様を組み込めたのは良かった
</details>


## アプリについての作成背景・所感など
- ポップアップ広告について「ポップアップ広告のアイデアの発案者本人が発明したことに後悔の念がある」という旨の記述をとある本で知ってから強く興味を持ったため
- ポップアップ広告はよく目にするが実際に実装するとなるとどれほどの技術が必要なのか確かめたかったのも理由
<details>
<summary>ネタバレ注意</summary>
・当初はネット詐欺ページは実装予定になかったが、悪意のあるWebページというのを作ってみたくなり実装に含めた
<br>
・結果として当アプリのオチになったので良かった
</details>

### <関連ソース>
- https://jp.globalvoices.org/2023/08/04/61341/
- https://gigazine.net/news/20140819-pop-up-apology/
- https://www.dazeddigital.com/artsandculture/article/21296/1/inventor-of-pop-up-ads-im-sorry
- https://japan.cnet.com/article/35052472/
- https://www.forbes.com/sites/jaymcgregor/2014/08/15/the-man-who-invented-pop-up-ads-says-im-sorry/

---

# アプリについて
## 仕様技術・ツールなど
- **仕様技術**
  - HTML
  - CSS
  - JavaScript (バニラ)
- **ツール・リソース**
  - Figma
  - ChatGPT
  - [pxhere.com](https://pxhere.com/)
    - [広告画像1](https://pxhere.com/ja/photo/1437789)
    - [広告画像2](https://pxhere.com/ja/photo/1438109)
    - [広告画像3](https://pxhere.com/ja/photo/1437879)
    - [広告画像4(1)](https://pxhere.com/ja/photo/611041)
    - [広告画像4(2)](https://pxhere.com/ja/photo/1159337)
    - [広告画像5(1)](https://pxhere.com/ja/photo/1640118)
    - [広告画像5(2)](https://pxhere.com/ja/photo/1679886)
    - [広告画像5(3)](https://pxhere.com/ja/photo/839604)
    - [動画サムネイル画像](https://pxhere.com/ja/photo/876519)

## アプリ詳細
- レスポンシブなので PC でもスマホでも OK
- ファビコンは Figma で自作
- 広告画像をはじめとする画像は [pxhere.com](https://pxhere.com/) より拝借させていただき、Figma にて編集

| # | Webページ | 詳細 |
| ---- | ---- | ---- |
| 1 | ポップアップ広告ページ | ポップアップ広告 |
| 2 | 動画再生ページ？ | ポップアップページをくぐりぬけて再生した動画？のお楽しみページ |

## ポップアップ広告ページ
- ポップアップ広告を３種類のアニメーションで絶え間なく表示
- 広告画像は全３種類
  - アニメーション：３種類 x 広告画像：３種類 = ９パターン 

## 動画再生ページ？
<details>
<summary>ネタバレ注意</summary>
・ 免責事項を表記
<br>
・ カウントダウンとそれに追随したイベントを実装
<br>
・ デザインも黒を基調とした不安を煽るページに仕上げた
</details>

# 実装を通しての所感
- ChatGPT をフル活用してどこまで実装できるかというのが裏テーマとしてあり、実際に実装をし切れたことからもっと AI を活用すればフロントサイド、バックサイドのどちらにも実装労力を割いてより高級な Web アプリが作れるのだと認識した
- ポップアップ広告はもっと技術的にハードルの高いものかと思っていたが案外簡単に作れるのだと実感した
- アニメーションがあると見栄えが良くなるなという正直な感想。アプリと言えばバックエンドを作りこむことにあるかもしれないが、「UI/UX が大事」という意見が昨今強まっている理由が理解できた。</br>アニメーションが無かったらせっかくのアプリが安く見える、使っていてもどこか物足りない淡白に感じてしまうのはフロントサイドの比重が軽いからだと思った。
- 恐怖を煽るサイトは ChatGPT に拒否されて生成されない点。また、免責事項が無いと誤解を招くため表記が必要な点等勉強になった。

---

# 参考資料・利用サイト
- https://jp.globalvoices.org/2023/08/04/61341/
- https://www.forbes.com/sites/jaymcgregor/2014/08/15/the-man-who-invented-pop-up-ads-says-im-sorry/
- https://gigazine.net/news/20140819-pop-up-apology/
- https://pxhere.com/
- https://www.onlinesecurity.jp/tricks/ransomware.html
- https://www.youtube.com/watch?v=vZnENolQu-0
  - https://codepen.io/yoidea/pen/ZEXVOvy
  - https://lambda-tech-club.github.io/one-click/
