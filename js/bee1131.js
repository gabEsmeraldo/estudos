let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")
let [grenais,inter,gremio,empates] = [0,0,0,0]
do {
    var [golsInter,golsGremio] = lines.shift().split(" ")
    var outroGrenal = Number(lines.shift())
    grenais++
    switch(true){
        case (golsGremio>golsInter):
            gremio++
            break;
        case (golsInter>golsGremio):
            inter++
            break;
        case (golsInter === golsGremio):
            empates++
            break;
    }
    console.log("Novo grenal (1-sim 2-nao)")
}while(outroGrenal == 1)
console.log(`${grenais} grenais`)
console.log(`Inter:${inter}`)
console.log(`Gremio:${gremio}`)
console.log(`Empates:${empates}`)
console.log(checkWinner(inter,gremio))

function checkWinner(inter,gremio){
    switch(true){
        case (inter>gremio):
            return "Inter venceu mais"
        case (gremio>inter):
            return "Gremio venceu mais"
    }
}