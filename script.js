function contar(){
var a = document.getElementById('txtini')
var b = document.getElementById('txtfim')
var c = document.getElementById('txtpass')
var res = document.getElementById('res')
if(a.value.length == 0 || b.value.length == 0 || c.value.length == 0){
    window.alert("[ERRO] Faltam dados!")
}
res.innerHTML = `Contando:`
var ini = Number(txtini.value) // Convertendo o valor de txtini para número
var fim = Number(txtfim.value)
var pass = Number (txtpass.value)
if(ini < fim){
    //contagem crescente
    for(var c = ini; c <= fim; c+= pass) {
        res.innerHTML+= `${c} \u{1f449}`
    }
    res.innerHTML+= `\u{1F3C1}`
} else{
    //contagem decrescente
    for(c=ini;c>=fim;c-=pass){
        res.innerHTML+= `${c} \u{1f449}`
     }
     res.innerHTML += `\u{1F3C1}`
}

}
