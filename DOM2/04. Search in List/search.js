function search() {
   towns = Array.from(document.querySelectorAll('ul#towns>li'));
   searchText = document.getElementById('searchText').value;
   

   let matches = 0;

   towns.forEach(town => {
      let name = town.textContent;
      if (name.includes(searchText)) {
         town.innerHTML = `<bold><u>${name}</u></bold>`;
         matches++;
      }
      
   });
  

   
   document.getElementById('result').innerHTML = `${matches} matches found`;
}