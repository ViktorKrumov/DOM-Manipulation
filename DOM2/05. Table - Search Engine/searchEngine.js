function solve() {
   document.getElementById('searchBtn').addEventListener('click', onClick);

   function onClick() {
      let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
      let searchBtn = document.getElementById("searchBtn");
      let searchField = document.querySelector("#searchField");
      searchBtn.addEventListener('click', function () {
      let regex = new RegExp(searchField.value, 'gim');
      dataTr.map(e => {
          e.classList.remove('select');
          if (e.innerText.match(regex) !== null) {
              e.className = 'select';
          }
      });
      searchField.value = '';
  });

   }
}