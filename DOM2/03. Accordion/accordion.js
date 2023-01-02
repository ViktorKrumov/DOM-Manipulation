function toggle() {
    let button = document.querySelector(`span.button`);
    let div = document.getElementById(`extra`);

    if (button.textContent == `More`) {

        div.style.display = `block`;
        button.textContent = `Less`;

    } else if (button.textContent == `Less`) {

        div.style.display = `none`;
        button.textContent = `More`;
    }
}