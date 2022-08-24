function myFunction() {
    let text = "Nospiediet pogu!\nIzvēlieties Labi vai Atcelt";
    if (confirm(text) == true) {
        let answer = prompt("Uz kādu resursu?");
        if (answer != null) {
            document.getElementById(
                "demo1"
            ).innerHTML = `Jūs izvēlējāties resursu: ${answer}`;
            location.replace(`https://${answer}`);
        }
    } else {
        text = "Jūs atcēlāt!";
    }
    document.getElementById("demo").innerHTML = text;
}