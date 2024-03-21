// Отримання елементів кнопки і результату для першого калькулятора
let Task1Btn = document.getElementById("Task1-btn");
let result1 = document.getElementById("result1");

// Функція для обчислення значень для першого калькулятора
let Task1 = () => {
  // Отримання введених значень з полів вводу і конвертування їх у числа
  let Hp = Number(document.getElementById("Hp").value);
  let Cp = Number(document.getElementById("Cp").value);
  let Sp = Number(document.getElementById("Sp").value);
  let Np = Number(document.getElementById("Np").value);
  let Op = Number(document.getElementById("Op").value);
  let Wp = Number(document.getElementById("Wp").value);
  let Ap = Number(document.getElementById("Ap").value);

  let Kpc = 100 / (100 - Wp);
  let Kpg = 100 / (100 - Wp - Ap);

  let Hc = Hp * Kpc;
  let Cc = Cp * Kpc;
  let Sc = Sp * Kpc;
  let Nc = Np * Kpc;
  let Oc = Op * Kpc;
  let Ac = Ap * Kpc;


  let Hg = Hp * Kpg;
  let Cg = Cp * Kpg;
  let Sg = Sp * Kpg;
  let Ng = Np * Kpg;
  let Og = Op * Kpg;


  let Qph = (339 * Cp + 1030 * Hp - 108.8 * (Op - Sp) - 25 * Wp)/1000;
  let Qch = (Qph + 0.025 * Wp) * 100 / (100 - Wp);
  let Qgh = (Qph + 0.025 * Wp) * 100 / (100 - Wp - Ap);

// Виведення результатів у відповідні блоки на сторінці
  result1.innerHTML = `
<div class="row">
  <div class="left-align">Коефіцієнт переходу від робочої до сухої маси K<sup>PC</sup>:</div>
  <div class="right-align"><span>${Kpc.toFixed(2)}</span></div>
</div>
<div class="row">
  <div class="left-align">Коефіцієнт переходу від робочої до горючої маси K<sup>PG</sup>:</div>
  <div class="right-align"><span>${Kpg.toFixed(2)}</span></div>
</div>
<div class="flex-container">
  <div class="flex-item">H<sup>C</sup>:</div>
  <div class="flex-item">C<sup>C</sup>:</div>
  <div class="flex-item">S<sup>C</sup>:</div>
  <div class="flex-item">N<sup>C</sup>:</div>
  <div class="flex-item">O<sup>C</sup>:</div>
  <div class="flex-item">A<sup>C</sup>:</div>
  <div class="flex-item">${Hc.toFixed(2)}</div>
  <div class="flex-item">${Cc.toFixed(2)}</div>
  <div class="flex-item">${Sc.toFixed(2)}</div>
  <div class="flex-item">${Nc.toFixed(2)}</div>
  <div class="flex-item">${Oc.toFixed(2)}</div>
  <div class="flex-item">${Ac.toFixed(2)}</div>
  <div class="flex-item">H<sup>G</sup>:</div>
  <div class="flex-item">C<sup>G</sup>:</div>
  <div class="flex-item">S<sup>G</sup>:</div>
  <div class="flex-item">N<sup>G</sup>:</div>
  <div class="flex-item">O<sup>G</sup>:</div>
  <div class="flex-item">${Hg.toFixed(2)}</div>
  <div class="flex-item">${Cg.toFixed(2)}</div>
  <div class="flex-item">${Sg.toFixed(2)}</div>
  <div class="flex-item">${Ng.toFixed(2)}</div>
  <div class="flex-item">${Og.toFixed(2)}</div>
</div>
<div class="row">
  <div class="left-align">Нижча теплота згорання для робочої маси:</div>
  <div class="right-align"><span>${Qph.toFixed(2)}</span></div>
</div>
<div class="row">
  <div class="left-align">Нижча теплота згорання для сухої маси:</div>
  <div class="right-align"><span>${Qch.toFixed(2)}</span></div>
</div>
<div class="row">
<div class="left-align">Нижча теплота згорання для горючої маси:</div>
<div class="right-align"><span>${Qgh.toFixed(2)}</span></div>
</div>`
}

// Отримання елементів кнопки і результату для другого калькулятора
let Task2Btn = document.getElementById("Task2-btn");
let result2 = document.getElementById("result2");

// Функція для обчислення значень для другого калькулятора
let Task2 = () => {
  // Отримання введених значень з полів вводу і конвертування їх у числа
  let Hg = Number(document.getElementById("Hg").value);
  let Cg = Number(document.getElementById("Cg").value);
  let Sg = Number(document.getElementById("Sg").value);
  let Og = Number(document.getElementById("Og").value);
  let Vg = Number(document.getElementById("Vg").value);
  let Wg = Number(document.getElementById("Wg").value);
  let Ag = Number(document.getElementById("Ag").value);
  let Qdafi = Number(document.getElementById("Qdafi").value);


  let Hp = Hg * (100 - Wg - Ag) / 100;
  let Cp = Cg * (100 - Wg - Ag) / 100;
  let Sp = Sg * (100 - Wg - Ag) / 100;
  let Op = Og * (100 - Wg - Ag) / 100;
  let Ap = Ag * (100 - Wg) / 100;
  let Vp = Vg * (100 - Wg) / 100;

 
  let Qri = Qdafi * (100 - Wg - Ag) / 100 - 0.025 * Wg;

// Виведення результатів у відповідні елементи HTML
  result2.innerHTML = `
<div class="flex-container">
  <div class="flex-item">H<sup>P</sup>:</div>
  <div class="flex-item">C<sup>P</sup>:</div>
  <div class="flex-item">S<sup>P</sup>:</div>
  <div class="flex-item">O<sup>P</sup>:</div>
  <div class="flex-item">A<sup>P</sup>:</div>
  <div class="flex-item">V<sup>P</sup>:</div>
  <div class="flex-item">${Hp.toFixed(2)}</div>
  <div class="flex-item">${Cp.toFixed(2)}</div>
  <div class="flex-item">${Sp.toFixed(2)}</div>
  <div class="flex-item">${Op.toFixed(2)}</div>
  <div class="flex-item">${Ap.toFixed(2)}</div>
  <div class="flex-item">${Vp.toFixed(2)}</div>
</div>
<div class="row">
  <div class="left-align">Нижча теплота згоряння мазуту на робочу масу:</div>
  <div class="right-align"><span>${Qri.toFixed(2)}</span></div>
</div>`
};

// Додавання обробника подій для кнопок обчислення
Task1Btn.addEventListener("click", Task1);
Task2Btn.addEventListener("click", Task2);

// Обчислення результатів при завантаженні сторінки
window.addEventListener("load", () => {
  Task1(); 
  Task2(); 
});

