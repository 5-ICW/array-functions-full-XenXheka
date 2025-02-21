const wagens = [
  { kleur: "Rood", merk: "Toyota", bouwjaar: 2018, prijs: 15000 },
  { kleur: "Blauw", merk: "Ford", bouwjaar: 2020, prijs: 18000 },
  { kleur: "Zwart", merk: "BMW", bouwjaar: 2019, prijs: 25000 },
];
wagens.sort((a, b) => a.merk.localeCompare(b.merk));
console.log(wagens);
