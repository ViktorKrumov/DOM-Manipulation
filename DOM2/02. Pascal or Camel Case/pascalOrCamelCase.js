function solve() {
  let text = document.getElementById("text").value;
  let naming = document.getElementById("naming-convention").value;


  let line = text.split(' ');
  let result = "";

  if(naming == "Pascal Case"){
    for (let i = 0; i < line.length; i++) {
      result += line[i][0].toUpperCase() + line[i].slice(1, line[i].length).toLowerCase();
    }
    document.getElementById('result').innerHTML = result;
  }
  else if(naming == "Camel Case"){
    result += line[0][0].toLowerCase() + line[0].slice(1, line[0].length).toLowerCase();
    for (let i = 1; i < line.length; i++) {
      result += line[i][0].toUpperCase() + line[i].slice(1, line[i].length).toLowerCase();
    }
    document.getElementById('result').innerHTML = result;
  }
  else{
    document.getElementById('result').innerHTML = "Error!";
  }

}