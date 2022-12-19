const content = document.getElementById("boxMensagem")
const button = document.getElementById("btnMensagem")

const paises = [
    ["Brasil", "O Brasil é conhecido como o país do futebol. Já foi 5 vezez campeão mundial.", 0],
    ["Argentina", "A  Argentina é um dos cinco países do mundo (junto com Uruguai, Brasil, Nova Zelândia e Austrália), que tem mais vacas do que pessoas!", 0],
    ["Colombia", "O país tem uma grande variedade de climas separados por poucas horas de distância: picos nevados, praias caribenhas, florestas tropicais.", 0],
    ["Peru", "O Peru é o sexto colocado no ranking mundial de produção de ouro. A mineração por lá aumentou cerca de 400% nos últimos dez anos.", 0],
    ["Chile", "O deserto mais seco do mundo fica no Chile, o Deserto do Atacama, um lugar extremamente árido e desolado – e de beleza sem igual.", 0],
    ["Egito", "Aqui temos uma das 7 maravilhas do Mundo, as Pirâmides do Egito.", 0],
    ["Equador", "Equador é o país que tem o ponto mais perto da terra ao espaço. A Montanha Chimborazo é a montanha mais alta da Terra, sua altitudo é de 6.263 metros.", 0],
    ["Bolívia", "A estrada mais perigosa do mundo fica na Bolívia. E ela não poderia ser reconhecida por um nome mais simpático: “Estrada da Morte da Bolívia”, ou ainda, “Camino a Los Yungas”.", 0],
    ["Uruguai", "O país sediou a 1ª Copa do Mundo. Assim como nós brasileiros, os uruguaios são apaixonados por futebol e pela “la celeste”, como chamam a seleção nacional. O Uruguai, que é bi campeão mundial, sediou a primeira partida internacional de futebol em 1902, e também a primeira Copa em 1930.", 0],
    ["Paraguai", "A bebida mais popular e típica do Paraguai é o Tererê, que é uma infusão da erva-mate em água fria.", 0],
]

const btnSorteio = () => {
    const number = Math.floor(Math.random() * paises.length)
    paises[number][2] += 1
    content.innerHTML = `<h2>${paises[number][0]}</h2>
    <span>${paises[number][1]}</span>
    <p>Vezes sorteado: ${paises[number][2]}</p>`
}

button.addEventListener('click', btnSorteio)