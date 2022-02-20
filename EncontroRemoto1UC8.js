// Encontro Remoto
var listaDePecas = ['Pneus','Pastilhas de Freio','Retrovisor'] // vetor ou array

// Verificação de peso
let peso = 100

if (peso < 200) {
    console.log("Poxa, a peça deve pesar no mínimo 200g :(")
} else {
    console.log("Legal, peso adequado :)")
} 

// A caixa suporta até 10 peças
if (listaDePecas.length < 10) { 
    console.log ("Ainda é possível cadastrar mais peças!")
} else {
    console.log ("Acabou o espaço!")
}

// Verificação de nomes
let nome = "Pneus"
if (nome.length <= 3) {
    console.log ( "Erro no cadatro do nome, deve conter mais que 3 caracteres!!!" )
} else if (nome.length > 3) {
    console.log ( "Correto para cadastro :)" )
} else if  (nome.length == 0) {
    console.log ( "O nome não pode estar vazio :(" )
}