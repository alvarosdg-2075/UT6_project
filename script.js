function toggleOptions() {
    var options = document.getElementById('optionsPanel');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function changeText() {
    document.getElementById('paragraph').innerText = "You personalized this text!";
}

function changeBgColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function changeTextStyle() {
    var paragraph = document.getElementById('paragraph');
    paragraph.style.fontSize = '20px';
    paragraph.style.fontWeight = 'bold';
}