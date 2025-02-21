let prijzen = [20000, 15000, 30000, 25000];
let totaalsom = prijzen.reduce((acc, prijs) => acc + prijs, 0);
console.log(totaalsom);
