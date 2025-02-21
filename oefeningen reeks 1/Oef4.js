const wagens = [
  { kleur: "Rood", merk: "Toyota", bouwjaar: 2018, prijs: 15000 },
  { kleur: "Blauw", merk: "Ford", bouwjaar: 2020, prijs: 18000 },
  { kleur: "Zwart", merk: "BMW", bouwjaar: 2019, prijs: 25000 },
];
function berekenTotalePrijs(autos) {
  return autos.reduce((totaal, auto) => totaal + auto.prijs, 0);
}
console.log(berekenTotalePrijs(wagens));
