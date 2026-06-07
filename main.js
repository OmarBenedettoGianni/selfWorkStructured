let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];
const un = array_1[0][0];
const anello = array_1[1][0];
const per = array_1[0][1];
const domarli = array_2[4][0][0];
const trovarli = array_1[1][1];
const ghermirli = array_1[2][0];
const e = array_1[2][1];
const nel = array_2[3][0];
const buio = array_2[4][1];
const incatenarli = array_1[0][2];
const unMaiuscolo = un.charAt(0).toUpperCase() + un.slice(1);
const frase = `${unMaiuscolo} ${anello} ${per} ${domarli} ${un} ${anello} ${per} ${trovarli} ${un} ${anello} ${per} ${ghermirli} ${e} ${nel} ${buio} ${incatenarli}`;
console.log(frase);