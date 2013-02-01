HTMLとかCSSとかAPIとか (仮) メモ
================================

スライド用のメモ。

(2012-09-18追記) このノートはスライドを作る際に「たしかこういうことがあったはず……」という記憶に頼った情報のまとめとしてスタートしているので、間違った情報が含まれてる可能性が多分にあります。あしからず。

HTML5とWHATWG HTML
==================

W3C HTML5とWHATWG HTML
----------------------

### HTML5 - W3C HTML WGが作る仕様

いわゆる「HTML5」の中核。タグ、パーサ（エラー処理）、WindowオブジェクトなどHTML文書を解釈するために必要なものの多くを定義。

* [HTML5](http://www.w3.org/html5/)
* [HTML5 (Editor's Draft)](http://dev.w3.org/html5/spec/)

[Canvas 2D Context (Canvas API)](http://dev.w3.org/html5/2dcontext/), [Microdata](http://dev.w3.org/html5/), [Web Workers](http://dev.w3.org/html5/workers/), [Web Storage](http://dev.w3.org/html5/webstorage/), [WebSocket API](http://dev.w3.org/html5/websockets/), [Server-sent Events](), [Web Messaging](http://dev.w3.org/html5/postmsg/)などは別の仕様。多くはもともとHTML5仕様に含まれていたが、諸般の事情で分離された。

分離された仕様のうち、Canvas 2D Context, Microdata以外はWebApps WGに移管。WebSocketのプロトコル部分はIETFに移管され、すでにRFC ****として公開済。

2011年5月に[最初のLast Call](http://www.w3.org/TR/2011/WD-html5-20110525/)。2012年3月に[新しいWD](http://www.w3.org/TR/2012/WD-html5-20120329/)が公開。現在はCandidate Recommendationに向けて動いている。

### WHATWG HTML (Living Standard) - HTML5以降の進化、継続的な改善

WHATWGで公開されている、HTML5仕様や他の仕様のもとになっている仕様。

* [WHATWG HTML](http://whatwg.org/html)

上で書いた仕様をすべて含み、あとちょっと新しい機能も追加されている。
Living Standard (生ける標準)。逐次更新。

名前として、Editorの位置づけとしては違うが、まあ「HTML5」だと。

* [Is this HTML5?](http://whatwg.org/html#is-this-html5?)

WHATWG HTMLのみに追加されている機能を除けば、両者に大きな違いはそんなにない。今後増えるかもしれない。

### 2012年の「分裂」騒動

2012年4月: W3CがHTML5の勧告に向けた準備を本格的に。WHATWG HTML, HTML5ほか幾つかのEditorを務めていたIan Hickson (Hixie)はHTML5のEditorから離れることに（WHATWG HTMLに注力）。HTML WGはStablilization Planの発表と新しいEditorを募集開始。

* [HTML5 Stabilization Plan](http://dev.w3.org/html5/decision-policy/html5-stabilization-plan.html)
* [HTML Working Group Changes](http://lists.w3.org/Archives/Public/public-html/2012Apr/0204.html)

### 新しいEditor (Team)の発表

2012年7月: HTML WGがHTML5仕様のEditor Teamを発表。Microsoftから2人、Appleから1人、Invited Expert（個人のWG参加者）1人の4人。

* [Editorial team for HTML5](http://lists.w3.org/Archives/Public/public-html/2012Jul/0183.html)

2012年8月: Canvas 2D Context (Canvas API) 仕様のEditorも発表。Microsoftから2人、Adobeから1人、Googleから1人の4人。

* [Editorial team for Canvas 2D Context](http://lists.w3.org/Archives/Public/public-html/2012Aug/0060.html)

並行してW3CはTech Editorのpositionを募集していたが、2012年9月にSVGやDAP WGに関わっていたRobin BerjonがHTML Editor Teamに参加。

* [The Flowing Standard](http://www.w3.org/QA/2012/09/the_flowing_standard.html)

### 勧告に向けた議論

2012年8月: Candidate RecommendationのExit Criteria (CRを抜けるための条件) について議論開始。HTML5の勧告を早めたいW3Cの意向と、長くても互換性が保証されるような仕様にしたいという意見の衝突などあり。

* [CR exit criteria and features at risk for HTML5](http://lists.w3.org/Archives/Public/public-html/2012Aug/0190.html)

### W3C HTML WGは何をするのか。WHATWG HTMLから離れるのか？

WHATWG HTMLとの一貫性は保ちつつ、HTML5に寄せられたコメントの処理をして、HTML5仕様を勧告に持っていく。

WHATWG HTMLがHTML仕様のtrunk, W3CのHTML5仕様や他の仕様がbranchのようなもの。
安定版のためにHTML5ブランチを切った感じ。適当にtrunkのものもマージするけど、新しい機能追加は（安定してないことが予想されるので）基本的にしない。

Editor Team発足後、HTML5仕様はGitHubでの運用を開始。git-flowライクなモデルの導入を示唆。Pull Requestを受け付けるかなど細かなところは更新しながら検討とのこと。

### 最近追加された要素

#### `<dialog>`要素	

「ダイアログ」を表現する要素とAPI。

もともと`<dialog>`は[会話文をマークアップする要素]()としてHTML5に存在したが、[必要性の薄さから削除された]()。

ダイアログとあるが、ポップアップなども実現可能。専用の要素とAPIの提供で、アクセシビリティの向上もねらえる。

HTML.next
---------

HTML5の勧告に向けた動きと並行して、その次のバージョンもすすめる。通称「HTML.next」。
HTML5のタイムフレームには間に合わないが、追加されるのが決定した機能、強く求められている機能が入る。

*[]()

ベースは何になるか未定だが、HTML5/WHATWG HTMLを拡張していく形になるだろうと。

W3CのCommunity Groupで作られている仕様も関わってくる？

* WebVTT ([Web Media Text Tracks CG](http://www.w3.org/community/texttracks/))
* [HTML Editing API](http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html)
* [UndoManager and DOM Transaction](http://dvcs.w3.org/hg/undomanager/raw-file/tip/undomanager.html)

### `inputmode`属性

2012年7月にWHATWG HTMLに(再)追加。テキストフィールドの推奨入力モードを指定する属性。

* [The inputmode attribute](http://whatwg.org/html#input-modalities:-the-inputmode-attribute)

ケータイのブラウザでは以前から実装されて使われている。タッチデバイスで、バーチャルキーボードが変化するようなものに特に便利。

* numeric - 数字などの入力に（iPhoneの`<input type=tel>`のキーボードみたいな）
* katakana - 「フリガナ」フィールドとか
* email - 「@」や「.com」
* url - 「.com」や「/」

    <label>郵便番号</label>: <input name="zip" inputmode="numeric">

`<input type=number>`や`<input type=email>`との違いは、`inputmode`が入力モードを指定するのに足しし、`type`は入力される値を制約する。前者はUIに影響し、後者はフォームのvalidationに影響する。

PCでは物理キーボードが一般的で、モードも簡単に分からないため、使われると悪影響かも……

### Responsie Images

Responsive Web Designで課題となってる、画像の出し分け問題にアドレスする機能。

* 異なるピクセル密度（Retina Displayなど高密度なディスプレイ）
* 異なる解像度（スマートフォンの画面幅、デスクトップの画面幅）
* 異なる表示領域（大きな画面では全体を、小さな画面では一部にフォーカス）

2012年○月: WHATWG HTMLに`<img srcset>`が追加。Appleが提案したCSSのimage-set()と似た仕組み。

`<picture>`というのがW3CのCommunity Groupで検討中。`<picture>`, `srcset`を組み合わせたものがHTML5に組み込まれるかも？

* []()
* []()

それぞれの構文に課題あり。

### その他

* "Intents"関連要素/API ― Web Intentsで提案されている`<intent>`要素やAPI
* カスタム要素、テンプレート ― Web Componentsで提案されてる要素やAPI
* HD Canvas API ― Retina Displayなど高密度ディスプレイでのAPI、Appleがすでに追加済
* [Canvas Path Object](http://whatwg.org/html#path-objects) ― SVGのPathをCanvasで

Ruby Markup
-----------

`<rb>`を含める提案が一旦白紙に。ルビの使われ方を調べると、それだけでは足りないことが判明。

I18n WGでユースケースを集めた文書が公開。

*[Use Cases and Exploratory Approaches for Ruby Markup](http://www.w3.org/TR/ruby-use-cases/)

Validator.nu
------------

HTML5時代のvalidator。より細かくチェックしてくれる。
W3CでもValidator.nuのインスタンスを提供開始。

*[Nu Validator](http://validator.w3.org/nu/)

開発中なので、文書が仕様に適合してなくてもValidと出たりすることも……

Media Fragments
---------------

Mar PR

メディア（画像や動画など）のURI（URL）に特殊なフラグメントIDをつけて、状態や部分を参照する。

* [Media Fragments URI 1.0 (basic)](http://www.w3.org/TR/media-frags/)

* [Spatial Dimension](http://www.w3.org/TR/media-frags/#naming-space) ― `#xywh=` で領域を指定
* [Temporal Dimension](http://www.w3.org/TR/media-frags/#naming-time) ― `#t=` で時間を指定

Temporal DimensionはFirefox XXで実装済。（WebKitもたしか……）

Spatial Dimensionが入るとスプライトやResponsive Imagesが楽に？
(CSS3 Image ValuesではSpatial Dimensionを参照？）

CSS2, CSS3, CSS4
================

2011年: CSS 2.1、CSS3セレクタ、CSS3 Colorなどが勧告、CSS4セレクタFPWD（最初のWD）公開
2012年: Media Queries勧告、Image Values、Values、FlexboxがCRに。IE10, Firefox, Opera 12.50でAnimations, Transitions, Transforms, Gradientsから接頭辞が外れる。

CSS3も次世代ではなくなった。

Flexbox
-------

* [CSS Flexible Box Layout Module](http://dev.w3.org/csswg/css3-flexbox/)

Jun LC

#### 構文にまつわるかなしい歴史

空気読んで良い感じに幅を調整してくれたり、ボックスの生成順を変えられたりするレイアウトモジュール。
もともとMozillaがMozilla (現SeaMonkey)のUIで使うためにつくった独自拡張（FirefoxのUIでも利用）。仕様作ってたひとがAppleに移籍→WebKitにも導入（もうちょっと高機能に）

CSS WGに持ち込まれ標準化開始→GoogleのひとがEditorに→WebKitが実装してたものをベースに構文変える→MicrosoftがIE9で実装しようとする（PPで使えたりした）も不安定なのでドロップ→さらに構文変わる（…）→Chromeが新しい構文で実装→IE10も実装→さらに構文変わる（…）→Chrome追従、IE10は間に合わず、Safariは古いのを使い続ける（新しいのは無視する）→ようやくCandidate Recommendationになりそう（もう構文変わんない…はず）←イマココ

* Chrome ― CR版おおむね実装
* IE10 ― WD版実装
* Firefox ― CR版実装中
* Safari ― WebKit拡張のまま
* Opera ― わかんない

CSS3関連の本で紹介されてるのはだいたい初期版、もしくはWD版。
3種類の構文を使い分けないといけない不遇の時代に。

Image Values
------------

グラデーションを定義しているモジュール。

* [CSS Image Values and Replaced Content Module Level 3](http://dev.w3.org/csswg/css3-images/)

LC in Jan
CR in Apr

#### 構文にまつわるかなしい歴史（その2）

Appleが拡張として提案→CSSWG「いいね！」→Firefoxが別の構文を提案→CSSWG「こっちで」→Firefox実装、Opera実装、WebKit実装、IE10で実装→`linear-gradient()`の構文がauthor friendlyじゃない的な話になって変わる（互換性ないけど無視される）→角度の解釈も変わる（互換性ないし構文そのままなので影響ない）→さらに`radial-gradient()`も変わる→反対もけっこうあった気がするけどCSSWGは納得→仕様はCRに→IE10がprefixなしのを実装→Firefoxもprefixなしのを実装→Opera 12.50もprefixなしのを実装＆`-o-linear/radial-gradient()`をドロップ（代わりに`-webkit-linear/radial-gradient()`をサポート）→コンテンツやフレームワーク側があんま対応してない←イマココ

CRになり、IE10、Fx16、Opera 12.50で実装
接頭辞つきバージョンと互換性なし、一部曲解されるので注意
`linear-gradient()`で`deg`を使う場合は要注意
Bootstrap 2.1で対応済み、Compassは仕組み上まだ対応されていない
Fireworks CS6のCSS3書き出しとかでdegつかうけど対応されてないので切ないことになる

### グラデーションは置いといて他にも面白い機能がある

* `image()` ― フォールバックを指定したり、色を画像として扱ったり
* `object-fit` ― アスペクト比を保って拡大縮小してくれる
* `image-resolution` ― 画像の持つdpiを考慮してくれる
* `dppx` ― デバイスピクセル比を考慮したもの。Retina displayだと 2dppx になる（はず）。Firefox XX, WebKit, ...で対応

### Level 4ではさらに拡張

* [CSS Image Values and Replaced Content Module Level 4](http://dev.w3.org/csswg/css4-images/)

* `image-set()` ― Responsive Images系。Chrome, Safari 6, iOS Safari (6) で実装
* `element()` ― 任意の要素を画像にして参照。`-moz-element()` `-webkit-canvas`
* `cross-fade()` ― クロスフェードする
* `conic-gradient()` ― 円錐を上から見たような感じのグラデーション

※ グラデーションを早くCRに持ってきたいって理由でLevel 3から外された機能が多い（でもそれが話されてからCRになるまで1年位上かかった）

Regions, Exclusions
-------------------

Adobeが提案した仕様。雑誌みたいにいろんな領域にテキストが流れる 「領域」を定義。Exclusionsは円形の領域にテキストを配置したり、任意の形にくりぬいたり。

* [CSS Regions Module Level 3](http://dev.w3.org/csswg/css3-regions/)
* [CSS Exclusions and Shapes Module Level 3](http://dev.w3.org/csswg/css3-exclusions/)

RegionsはWebKit, IE10に実装。Chromeではフラグつけると使用可に。ExclusionsはIE10に実装。

Adobeのブログが参考になる。

* []()

Grid Layout
-----------

Microsoftが提案。グリッドの線を引いて、それにスナップさせる感じ。使いやすいテーブルレイアウト。

* [CSS Grid Layout](http://dev.w3.org/csswg/css3-grid-layout)

IE10で実装。(かつてMetroと呼ばれていた) Style Appsなスタイルには必須か。

※ Microsoftは結構前からCSSのグリッドレイアウトを研究してたり

Conditional Rules
-----------------

条件分岐。

* [CSS Conditional Rules Module Level 3](http://dev.w3.org/csswg/css3-conditional/)

### Feature Queries

`@supports`という@-ruleで、何かをサポートしている/いない場合のスタイルを定義可能。

    @supports (display: flexbox) {
    	/* Flexboxサポートしてるのだけ */
    }

Firefox 17で実装（仕様の状況によってはオフにされるかも）。Operaも実装中。WebKitはパッチを投げた人がいる。

先行実装や拡張の多いWebKit, Tridentにこそ欲しい機能……

### `@document`

`@document`で特定の文書（ドメイン、regexなど）にスタイルシートを当てるブロックもあり。Mozillaではずいぶん前から`@-moz-document`が実装。	

### nested @rule

`@media`とか入れ子にできる

    @media screen {
    	@media (max-width: 800px) {
    		...
    	}
    	@media (min-width: 799px) {
    		...
    	}
    }

この例だととくに嬉しくないけど……

Selectors Level 4
-----------------

CSS4セレクタ。夢いっぱい。

* [Selctors Level 4](http://dev.w3.org/csswg/selectors4/)

### Subject Indicator

親などを選択できる。

    /* href属性を持つa要素の親のli要素 */
    !li > a[href] {
    	/* あんまいい例じゃないね */
    }

### `:matches()`

括弧内の「どれか」にマッチしたらマッチ。

    :matches(section, article, nav, aside) > h1 {
    	/* どれかセクションの子の h1 */
    }
    section > h1, article > h1, nav > h1, aside > h1 {
    	/* これと同じだけど書くのだるい */
    	/* あとセクションの入れ子を考えると悲惨 */
    }

Firefoxが`:-moz-any()`として実装。WebKitも続いて`:-webkit-any()`として実装。

### `:nth-match()`, `:nth-last-match()`

`:nth-child()`や`:nth-last-child()`は要素にマッチだけどこっちは属性やら擬似クラスでもマッチ。

	/* なんかうまい例 */

### `:scope`  

Scoped stylesheetsやSelectors API2のメソッドで使われる。

### `/fragid/`

誰得。

Basic User Interface
--------------------

* [CSS Basic User Interface Module Level 3](http://dev.w3.org/csswg/css3-ui/)

LC in Jan

Positioned Layout
-----------------

* []()

Feb FPWD

Transforms
----------

* [CSS Transforms](http://dev.w3.org/csswg/css-transforms/)

Feb WD - [2D Transforms](http://dev.w3.org/csswg/css3-2d-transforms/), [3D Transforms](http://dev.w3.org/csswg/css3-3d-transforms/), [SVG Transforms]()を統合。

※ もともと2D, 3Dはひとつの仕様だったりしたので出戻り感ある

Fragmentation
-------------

* [](http://dev.w3.org/csswg/css3-break/)

`page-break-before`や`column-break`などを統合。

Alignment
---------

* [](http://dev.w3.org/csswg/css3-align/)

いろんなドラフトにあるalign系の機能を定義。

`<center>`がCSSだけで実現可能に。垂直方向のセンタリングも楽に？

CSS Values & Units
------------------

* [CSS Values and Units Module Level 3](http://dev.w3.org/csswg/css3-values/)

Mar LC

`calc()` - Fx16でunprefix, IEは9から（WebKit?）

`vw`, `vh`, `vmin`, `vmax` ― Viewportの幅に相対な単位。

	/* framesetを駆使しなくても上下中央に！ */
	#main {
		width: 80vw;
		height: 80vh;
		margin: 10vh auto;
		overflow: scroll;
	}

`attr()` - 文字列以外の型も返せるように。IE9でたしか実装されてた気がする。

Cascading Variables
-------------------

* [CSS Cascading Values Level 1](http://dev.w3.org/csswg/css-variables)

April FPWD

### カスタムプロパティ

「カスタムプロパティ」として紹介。プロパティ（の値）を定義するだけなのでセレクタやメディアクエリーとかには使えない。

`var-foo`で定義。

	:root {
    	var-myRed: #908120;
    }

`var(foo)`で参照

	:link {
    	color: var(myRed);
    }

※ 無視されてドロップされることがないので、要素にカスタムデータをCSSで格納することもできたり。

### $fooは？

「var-とかだるい」っていう意見多数（いまも）。Sassみたいに`$foo`も検討されていたけれど見送られた。Sassの変数と挙動が違う（Sassのは変数というかマクロ）、Mixin, @extendなどの変数ライクな機能などを導入するときに、使える記号が減ると困るから。

* []()
* []()

### 実装状況

WebKitで実装。Chromeではflagつけて利用可能。
Firefoxでも検討中。接頭辞なしで実装したいとの意向。標準化も早まる？

OMをどうしようかってところ。CSSOMでは`style.propName`として各プロパティを実装してるので、別の仕組みが必要。

### おまけ

Sassの`@extend`に相当する機能のアイデアがMozillaのひとから投げられている。

* []()

Backgrounds & Borders
---------------------

* [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/)

CRのまま。

### `background-position`の拡張

オフセットの基点を指定できる。

	background-position: right 20px bottom 10px;

IE9, Opera XX, Firefox 13から対応。つまりWebKit以外は対応。

### `border-image`

Firefox 14でunprefixされた。prefixなものと一部互換性なし。
IE10でも実装されず。Metroにはいらないから？

Fonts
-----

* [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/)

Same-origin policyが仕様に。

### フォントが読み込まれたときのイベント

フォントがロードされたときのイベントやらAPIやらについて議論中。

* []()
* []()

### WOFF 2.0

Googleがもっといい圧縮アルゴリズムを開発。これをベースにWOFF 2.0をつくるっぽい。

* []()

Media Queries
-------------

Jul REC!

* [Media Queries](http://www.w3.org/TR/css3-mediaqueries/)

### Level 4

script, pointer, touchなどが検出可能になるかも。

* [Media Queries Level 4](http://dev.w3.org/csswg/mediaqueries4/)

### `matchMedia()`

（MQ仕様ではなくてCSSOMで定義してるけど、MQなのでこっちで）

* []()

`matchMedia('(max-width: 800px)').matches`などで状態取得可能。リスナーも登録できる。

	var query = '(max-width: 800px)';
	var mql = window.matchMedia(query);

	mql.addListener(function (mql) {
		// メディアクエリーにマッチしてたら
		if (mql.matches) {
			// なにかしよう
		} else {
			// なにかしよう
		}
	});

Fx, WebKit, IE10で実装。

※ どうにかしてCSSとクエリーを共有できないものか……

Prefix
------

WebKitがモバイルでデファクト化。WebKitかっこいい。
他のエンジンで実装されても接頭辞のせいで動かない。
標準化でテストケース作るときもかなり面倒…
CRになってテストケースがないと接頭辞は基本的に外せないポリシー

なぜかDOM APIにも接頭辞がつくように…

### 接頭辞外しの乱

Microsoftがしびれ切らしてIE10でAnimations, Transitions, Transforms, Gradientsから接頭辞削除。
CSS WGがこれらの機能に対し特例で接頭辞削除を認める。Firefox、Operaが続く。
年末か来年はじめには`-webkit-`と標準だけ書いとけばよさそう。

互換性のためOpera 12.50では一部の`-webkit-`プロパティを解釈するように。そして`-o-`はドロップ

早すぎる時点での実装、独自拡張の提案など、不安要素が多いので慎重にもなるけれど、スピードが増しているなかではかなり面倒。なんとかしてー

### 接頭辞のポリシー

今のprefixつき機能に関するものじゃなくて、これからについて。

* 仕様がまだ安定してないものについては安定版に含めない（もしくは無効にする）

などが検討中（TODO: F2Fのminutesをちゃんと読む）

SVG, FXTF
=========

SVG2
----

HTML5のようにXML以外でも使えるように。HTML5との親和性向上。

* []()

Aug FPWD

Compositing, Blending
---------------------

アルファ合成やブレンドモードの機能追加。

* []()

Aug FPWD

Filter Effects, Shaders
-----------------------

SVGのフィルタをCSSでも。

* []()

WebKitで実装中。Chrome, Safari 6でつかえる。
Firefoxは間にSVGかませばHTMLでもつかえる（そりゃそうだ）。

Shadersと呼ばれてたものはカスタムフィルタとしてFilter Effectsに統合。

Masking
-------

Appleの`-webkit-mask`やMozillaの`clip-path`を標準化。

* []()

DOM
===

DOM4
----

Web DOM Core→DOM Core→DOM4。変な経緯からDOM4に。

HTML5にあったいくつかのプロパティなどが移動。

### Event ctors

引数の順番覚えなくていい！
カスタムイベントも定義済みのメンバを入れたオブジェクトを渡す。

### Mutation Observerss

Mutation Eventsを置き換えるもの。

Mutation Events - とにかくfireされまくる→パフォーマンスに悪い。
Observers - 特定のmutationを監視して、非同期に返す

Firefox XXでunprefix
WebKitではまだunprefixできてない（V8とJSCの挙動の違いなどが背景にあった気がする…あとで。）

DOM3 Events
-----------

Sep LC

Firefox 17が`WheelEvent`を実装。

* []()

いろいろイベントふえてるよ。

DOM Parsing & Serialization
---------------------------

HTMLから`innerHTML`や`insertAdjacentHTML()`を分離。WebAppsで作業。

* []()


Perf APIs
=========

Navigation Timing
-----------------

Jan CR
Mar CR
Jul PR

Resource Timing
---------------

May CR

User Timing
-----------

Jul CR

Timing control for script-based animations
------------------------------------------

`requestAnimationFrame()`。rAF。

タイマーで1msとかするのではなく、フレームレートにあわせてフレーム描画を「リクエスト」。
ブラウザがフレームレートにあわせて描画、バックグラウンドにあるものは実行しないなどよしなにしてくれる。

※ タイマーで1msにしても10msとか4msにclampされちゃうはず。

setImmediate
------------

Microsoftが提案。標準化はしない？わかんない。

Performance Timeline
--------------------

Jul CR

Page Visibility
---------------

Jul CR

prefixとれた。

High Resolution Time
--------------------

Mar, FPWDにしてLC
May CR

`performance.now()` を定義。

1970からの秒ではなく、`navigationStart`からの時間。
返す値はmonotonicなのでシステムの時間に依存しない。

MozillaはFxXXで`performance.now()`を実装
WebKitは`performance.webkitNow()`を実装。Chrome XXから搭載。
Operaも12.50で実装するもNavigation Timingとの整合性のため無効に。
現在接頭辞を削除するために動いてる。

Navigation Timing 2
-------------------

Perf. Timeline対応。

`linkNegotiationStart`とかが入る。

WebApps APIs
============

Clipboard API & Events
----------------------

Feb WD更新。

Operaのひとが代々Editor。

XHR (XHR2)
----------

すでにどのブラウザもXHR Lv.1にある機能は実装済み。
XHR2の機能も実装中のため、XHR2をXHRとして公開。

* クロスオリジン通信（with CORS）
* FormData
* responsType = 'document', 'json', 'arraybuffer', 'blob'
** Microsoftは 'ms-stream' を追加
** Mozillaもなにかを追加してた気がする


File API
--------

### Blob Ctor

全ブラウザで実装。`BlobBuilder`さよなら。

FileWriter, FileSystem
----------------------

Chrome固有感たかし。

Quota Management API
--------------------

Jul FPWD

AppCacheなどのクオータ管理。Googleが提案。

Web Workers
-----------

May CR

Web Messaging
-------------

May CR

Server-sent Events
------------------

Apr LC

Screen Orientation API
----------------------

回転をロック。

WebSocket API
-------------

May LC
Aug LC
Sep CR

Indexed Database
----------------

May LC

IE10, Firefox 16でunprefix。
Chromeはまだちょっと仕様に沿ってないところがあるらしい。


IME API
-------

May FPWD

URL API
-------

May FPWD

XBL2
----

Web Componentsにとってかわられる感じに。

May Note

Gamepad API
-----------

May FPWD

ローレベルなAPI。

Pointer Lock
------------

FPS系ゲームや3Dモデリングアプリなどでマウスカーソルを固定したいときなどに。

May FPWD

From-Origin Header
------------------

特定のoriginに限定してリソースの「処理」を許可する/しないを指定。

CORSは「アクセス」だがこっちは「処理」。レスポンスヘッダ。

もともとWeb FontsのSOR用に提案された。直リン禁止とかそういうのにも。

May Note

Fullscreen API
--------------

Jul FPWD

Firefox, Chromeで実装されてる。Operaもたしか。
セレクタなども定義。使ってる名前に多少違いあり。

Selectors API
-------------

Jun L1 LC, L2 WD

L2では`find()`提案中。jQueryみたくチェーンできるようになるはず。

### contextual selector（:scope）

`$('ul').find('> li')` みたいなのはできない。CSSの文法と引っかかるので。
scoped stylesheetにも関連。

	var main = document.querySelector('#main');
	var headings = main.querySelector(':scope > h2');

HTMLで`window.find()`が定義されかかってたけどドロップ。ただChromeとかがページ内検索に利用してたりしたはず。

あとイベントハンドラ属性で`onclick=find()`とかやってたらどうすんの問題。

Web Components
==============

Intro
-----

それなあに的なノート。

Shadow DOM
----------

基本アクセスできないDOM。Shadow Rootというのを定義して、そこに突っ込んでいく。

Googleが提案。Chromeに実装。`<input>`のdate関連UIをはじめいろいろ使ってる。

Custom DOM Elements
-------------------

`x-foo`的な名前で定義。独自のAPIなどもつっこめる。

Templates
---------

テンプレート。


Web Notifications
-----------------

Jun WD

もともとChromeが提案。WebApps WGでってなりそうだったけど諸般の事情で独立WGに。	

AppleがWGに参加してAPI変更。
Mountain LionのSafari 6で実装。Notification Centerと統合。

Chromeも実装してるけど古い仕様。HTMLなどが含められなくなった。


WebAppSec
=========

CORS
----

CSP 1.0
-------

Jul LC

Mozilla, WebKit

Chrome拡張などでも使われ始めた。インラインスクリプト禁止とか。

CSP 1.1
-------

いろいろディレクティブが追加されてたはず。


WebEvents APIs
==============

イベント全般を策定していくグループ。
設立の経緯や、AppleやMicrosoftがいないことから実質Touch Events WG (...)

Touch Events Lv.1
-----------------

2012年1月、Appleが開示した特許に関してPAG設立。CRに進んでいた仕様の策定を一旦停止。

2012年7月、PAGがAppleの特許は関係しないという見解を発表。

Touch Events Lv.2
-----------------

どちらにもマルチタッチ（Gesture Events）は入らない（また特許が…）

(番外) MSPointer Events
-----------------------

MicrosoftがIE10に実装。マウス、タッチ、ペンなどを「pointer」として包括的に処理。標準化への提案は今のところなし。

(番外) Indie UI WG
------------------

アクセシビリティ絡み。

ビューをスクロール、オブジェクトにフォーカスが当たる、などのイベント。

タッチスクリーン、マウス、音声コマンドなどアクションの形式に依存しない。

「ダブルタップ」「スワイプ」とかのイベントではない。



Web IDL
-------

インターフェース定義言語。ECMAScriptへのバインディングも。

Feb LCに。

Apr CRに。

EDでLiving Draft更新中。



WebRTC
======

title
------

`getUserMedia()`を定義。Webcamとかの情報を取得。

Chrome, Opera 12で実装（APIかわってるかも）。

Firefox実装中。MicrosoftもHTML5 Labsで実験プラグイン公開中。

WebRTC
------

PeerConnectionとかブラウザ間のP2P通信などを定義。

Feb WD

2012年8月：Microsoft（Skype）が提案をしてくる。

### MediaStream Capture Scenarios

* [](http://www.w3.org/TR/2012/WD-capture-scenarios-20120306/)


Device APIs
===========

デバイス関連の情報をとってくる仕様を多数つくってた。

ブラウザベンダーとあんまり仲良くなかったけどだんだん仲良くなった。Mozilla, Opera, Microsoft, Googleが参加。

いろいろAPI出してたけど、Web Intentsでやればいいじゃん的な流れになっていろいろ再編成。
ユーザの許可などセキュリティモデルが必要なAPIはSystem Applications WGに移行。

Battery Status
--------------

CR

FxOS, WebKit (Tizen?)

Vibration
---------

CR

FxOS, WebKit (Tizen?)

Proximity Events
----------------

Jul FPWD

Ambient Light Events
--------------------

Aug FPWD


Web Intents
===========

Jun FPWD

サービスいっぱい。

share - Tw, Fb, G+, etc.

使わないサービスでも`<iframe>`読みまくる。パフォーマンスにも影響。使ってるサービスがページにない場合はかなしい。

ページは「シェア」など「意図」を宣言するのみ。それに対応するサービスはユーザに任せる。

Chrome 19から利用可能（たしか拡張のみ）。

### Mozillaの提案（Web Activity）

### HTML5との統合？

`registerProtocolHandler()`, `registerContentHandler()`との統廃合などでちょくちょく議論。

### デバイス連携

* Pick Media Intent
* Pick Contacts Intent


Geolocation
===========

May PR

Lv 2（Addressを定義）は停止。


Web Audio
=========

Web Audio API
-------------

ハイレベルなAPI。Chrome, Safari 6で実装。Firefoxも実装開始。

MediaSream Processing API
-------------------------

May NOTE

MozillaのAudio Data APIがもともと。ローレベル。
Audio WGがWeb Audio APIにフォーカスすることを決定。Noteに。（ニーズがあればそのうち復活も？）

MIDI API
--------

Recharterして追加された。
