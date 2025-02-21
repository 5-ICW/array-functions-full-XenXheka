const wagens = [
  { kleur: "Rood", merk: "Toyota", bouwjaar: 2018, prijs: 15000 },
  { kleur: "Blauw", merk: "Ford", bouwjaar: 2020, prijs: 18000 },
  { kleur: "Zwart", merk: "BMW", bouwjaar: 2019, prijs: 25000 },
];
const wagen4 = wagens.map((auto) => ({
  merk: auto.merk,
  bouwjaar: auto.bouwjaar,
}));

console.log(wagen4);
