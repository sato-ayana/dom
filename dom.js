  const mainTitle = document.getElementById("main-title")
  console.log(mainTitle);

  const contents = document.getElementsByClassName("contents")
  console.log(contents);

  // idで指定したwrapperを取得
  const wrapper = document.getElementById("wrapper")
  // 挿入するHTML要素
  const newBox = `<div class="new-box">new-box要素</div>`
  // setTimeoutはJavaScriptが用意している関数です・
  setTimeout(function () {
  // wrapper要素内先頭にnewBoxに代入されたHTML要素を挿入
  wrapper.insertAdjacentHTML("afterbegin", newBox)
  // wrapper要素の直後にnewBoxに代入されたHTML要素を挿入
  wrapper.insertAdjacentHTML("afterend", newBox)
  }, 3000)