function tabuada() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    var n = Number(num.value)
    var tab = '';   
    for (var p = 1; p <= 10; p++) {
        tab += `${n} x ${p} = ${n*p} <br />`
    } res.innerHTML = tab
}