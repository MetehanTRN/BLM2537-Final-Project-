document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("my-table");
    table.classList.add("show");
  
    // Çizgilerin sonradan görünmesini sağlamak için timeout kullanıyoruz
    setTimeout(function () {
      var cells = document.querySelectorAll("#my-table th, #my-table td");
      cells.forEach(function (cell) {
        cell.style.borderColor = "#000"; // Çizgi rengini değiştirebilirsiniz
      });
    }, 1000); // 1000 milisaniye (1 saniye) sonra çalıştır
  });