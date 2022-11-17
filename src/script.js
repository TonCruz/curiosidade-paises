const content = document.getElementById("boxMensagem")
const button = document.getElementById("btnMensagem")

const paises = [
    ["Brasil", "O Brasil é conhecido como o país do futebol. Já foi 5 vezez campeão mundial.", 0],
    ["Argentina", "A  Argentina é um dos cinco países do mundo (junto com Uruguai, Brasil, Nova Zelândia e Austrália), que tem mais vacas do que pessoas!", 0],
    ["Colombia", "O país tem uma grande variedade de climas separados por poucas horas de distância: picos nevados, praias caribenhas, florestas tropicais.", 0],
    ["Peru", "O Peru é o sexto colocado no ranking mundial de produção de ouro. A mineração por lá aumentou cerca de 400% nos últimos dez anos.", 0],
    ["Chile", "O deserto mais seco do mundo fica no Chile, o Deserto do Atacama, um lugar extremamente árido e desolado – e de beleza sem igual.", 0],
    ["Egito", "Aqui temos uma das 7 maravilhas do Mundo, as Pirâmides do Egito.", 0],
    ["Equador", "Cuy e Cabelazo", 0],
    ["Bolívia", "Majao e Cochabamba", 0],
    ["Uruguai", "Chivito e Churrasco", 0],
    ["Paraguai", "Chipá e Kaburé", 0],
]

const btnSorteio = () => {
    const number = Math.floor(Math.random() * paises.length)
    paises[number][2] += 1
    content.innerHTML = `<h2>${paises[number][0]}</h2>
    <span>${paises[number][1]}</span>
    <p>Vezes sorteado: ${paises[number][2]}</p>`
}

button.addEventListener('click', btnSorteio)