setInterval(ghaleb, 10);
function ghaleb () {
    if (document.getElementById("g1").checked) {
        document.getElementById("txt3").innerHTML = 'مثنوی'
    }
    if (document.getElementById("g2").checked) {
        document.getElementById("txt3").innerHTML = 'غزل'
    }
    if (document.getElementById("g3").checked) {
        document.getElementById("txt3").innerHTML = 'قطعه'
    }
    if (document.getElementById("g4").checked) {
        document.getElementById("txt3").innerHTML = 'دوبیتی'
    }
    if (document.getElementById("g5").checked) {
        document.getElementById("txt3").innerHTML = 'رباعی'
    }
}