function verify() {
    let correct_answers = 0;
    let form = document.getElementById("questions").elements;

    for (let i = 0; i < form.length; i++) {
        if (form[i].checked && form[i].value === "1")
            correct_answers++;
    }

    if (correct_answers >= 5)
        document.getElementById("result").style.color = "green";
    else
        document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = correct_answers.toString();
}