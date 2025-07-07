function dortIslem() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let islem = document.getElementById("operation").value;
    let total;

    if (isNaN(num1) || isNaN(num2)) {
      total = "Lütfen geçerli iki sayı girin!";
    } else if (islem === "toplama") {
      total = num1 + num2;
    } else if (islem === "cıkarma") {
      total = num1 - num2;
    } else if (islem === "carpma") {
      total = num1 * num2;
    } else if (islem === "bolme") {
      total = num2 === 0 ? "❌ Sıfıra bölünemez!" : num1 / num2;
    } else {
      total = "Geçersiz işlem!";
    }

    document.getElementById("sonuc").innerText = `Sonuç: ${total}`;
  }