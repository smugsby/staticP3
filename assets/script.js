
function test() {
    //get distance input
    var dist = document.getElementById("distance").value;
    //get putt input
    var putt = document.getElementById("puttsMade").value;
    //get firstOne input
    var first = document.getElementById("firstMade").checked;
    if (first == true) {
        first = Number(1)
    } else {
        first = Number(0)
    }
    //get lastOne input
    var last = document.getElementById("lastMade").checked;
    if (last == true) {
        last = Number(1)
    } else {
        last = Number(0)
    };
    //get allMade input
    var all = document.getElementById("allMade").checked;
    if (all == true) {
        all = Number(3)
    } else {
        all = Number(0)
    };

    //get feet multiplier
    var feetMutli = (dist / 10);
    //input total
    var inputTotal = (parseInt(putt) + parseInt(first) + parseInt(last) + parseInt(all));
    var totalScore = parseInt((feetMutli * inputTotal));
    // alert("this is dist" + dist)
    // alert("this is putt" + putt)
    // alert("this is first" + first)
    // alert("this is last" + last)
    // alert("this is all" + all)
    // alert("this is feetmulti" + feetMutli)
    // alert("this is inputTotal" + inputTotal)
    // alert("this is totalScore" + totalScore)
    // alert(totalScore);
    var outputEl = document.getElementById("score");
    outputEl.innerHTML = totalScore;
    // var scoreEl = document.getElementById("submit");
    // scoreEl.innerHTML = totalScore;
    var scoreCheck = localStorage.getItem('savedScore');
    if (totalScore > scoreCheck)
        localStorage.setItem('savedScore', totalScore);
    else
        return
};

var highEl = document.getElementById("highScore");
highEl.innerHTML = localStorage.getItem('savedScore');

function reset() {
    localStorage.removeItem('savedScore');
}