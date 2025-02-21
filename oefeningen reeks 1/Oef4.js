const Auto1 = {
  kleur: "rood",
  merk: "Audi",
  bouwjaar: "2023",
  prijs: 2500,
};
const Auto2 = {
  kleur: "bklauw",
  merk: "Porche",
  bouwjaar: "2013",
  prijs: 1000,
};
const Auto3 = {
  kleur: "zwart",
  merk: "Kia",
  bouwjaar: "2027",
  prijs: 3000,
};
function som() {
  uitkomst = Auto1.prijs + Auto2.prijs + Auto3.prijs;
  return uitkomst;
}
console.log(som());
