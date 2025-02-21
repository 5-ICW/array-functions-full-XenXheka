const wagens = [
  { kleur: "Rood", merk: "Toyota", bouwjaar: 2018, prijs: 15000 },
  { kleur: "Blauw", merk: "Ford", bouwjaar: 2020, prijs: 18000 },
  { kleur: "Zwart", merk: "BMW", bouwjaar: 2019, prijs: 25000 },
];

const merkEnBouwjaar = wagens.map(
  (wagen) => `Merk: ${wagen.merk}, Bouwjaar: ${wagen.bouwjaar}`
);
console.log(merkEnBouwjaar);
