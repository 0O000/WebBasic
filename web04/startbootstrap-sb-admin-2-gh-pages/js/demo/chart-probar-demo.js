
function change_data() {

    var name = ["가", "나", "다", "라", "마"];
    var percent = [70, 50, 30, 60, 70];

    for (var i = 0; i < 5; i++) {
        set_data(name[i], percent[i], i + 1);
    }
}

function set_data(name, percent, index) {
    var elementName = document.getElementById("n" + index)
    elementName.innerText = name;
    var elementText = document.getElementById("s" + index);
    elementText.innerText = percent + "%";
    var elementWidth = document.getElementById("d" + index);
    elementWidth.style = "width: " + percent + "%"
}