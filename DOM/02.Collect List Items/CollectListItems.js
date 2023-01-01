function extractText() {
    let items = document.getElementById('items').children;
    let resultEl = document.getElementById('result');
    let result = Array.from(items).map(x => x.textContent);
    resultEl.value ='';
    result.forEach(x => resultEl.value += `${x}\n`);
    // TODO
}