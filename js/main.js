(function(){
  "use strict";

  // "btn"idから要素を取得
  const btn = document.getElementById('btn');
  // イベントリスナーの設定。クリックされたら、"btn"内のテキストを"hit!"に変える。
  btn.addEventListener("click",function () {
    const n = Math.random();
    if (n < 0.05){
      this.textContent = "大吉";
    } else if (n < 0.2) {
      this.textContent = "中吉";
    } else {
      this.textContent = "凶";
    }
    // const results = ["大吉","中吉","凶","末吉"];
    // const results = ["大吉","中吉","凶","末吉"];
    // const n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];

    // switch (n) {
    //   case 0:
    //     this.textContent = "大吉";
    //     break;
    //   case 1:
    //     this.textContent = "中吉";
    //     break;
    //   case 2:
    //     this.textContent = "凶";
    //     break;
    //
    // }
    // if (n === 0) {
    //   this.textContent = "大吉";
    // } else if (n === 1) {
    //   this.textContent = "中吉";
    // } else {
    //   this.textContent = "凶";
    // }
  });
  // イベントリスナー。クリック時だけ押し込まれる。
  btn.addEventListener("mousedown",function () {
    this.className = "pushed";
  });
  // イベントリスナー。クリック終われば元に戻る。
  btn.addEventListener("mouseup",function () {
    this.className = "";
  });
})();
