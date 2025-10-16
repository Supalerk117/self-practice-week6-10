document.addEventListener("DOMContentLoaded", () => {
  // DOM
  const bg = document.getElementById("bg-color");
  const color = document.getElementById("font-color");
  const size = document.getElementById("font-size");
  const save = document.getElementById("save");
  const reset = document.getElementById("reset");
  const display = document.querySelector("#display");

  // ค่า default
  const defaultBg = "#FFFFFF";
  const defaultColor = "black";
  const defaultSize = "medium";

  // เช็คว่าเอาอันไหน
  const IsBgColorInLocal = localStorage.getItem("bgColor") || defaultBg;
  const IsFontColorInLocal = localStorage.getItem("fontColor") || defaultColor;
  const IsFontSizeInlocal = localStorage.getItem("fontSize") || defaultSize;

  // แสดงค่า input ให้เป็นสีเดิม
  bg.value = IsBgColorInLocal
  color.value = IsFontColorInLocal
  size.value = IsFontSizeInlocal

  // แสดงสีตาม local storage ที่เก็บไว้
  display.style.backgroundColor = IsBgColorInLocal
  display.style.color = IsFontColorInLocal
  display.style.fontSize = IsFontSizeInlocal

  save.addEventListener("click", () => {
    // เก็บข้อมูลบน local storage
    localStorage.setItem("bgColor", bg.value);
    localStorage.setItem("fontColor", color.value);
    localStorage.setItem("fontSize", size.value);

    // แสดงสีตาม local storage ที่เก็บไว้
    display.style.backgroundColor = localStorage.getItem("bgColor");
    display.style.color = localStorage.getItem("fontColor");
    display.style.fontSize = localStorage.getItem("fontSize");
  });
  reset.addEventListener("click", () => {
    // เอาข้อมูลที่เก็บไว้บน local storage ออกก่อน
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontColor");
    localStorage.removeItem("fontSize");

    // แสดงค่า default
    display.style.backgroundColor = defaultBg;
    display.style.color = defaultColor;
    display.style.fontSize = defaultSize;

    // clear input
    bg.value = defaultBg;
    color.value = defaultColor;
    size.value = defaultSize;
  });
});