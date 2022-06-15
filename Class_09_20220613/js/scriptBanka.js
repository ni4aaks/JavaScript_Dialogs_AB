
var naudas_summa_konta = 250000;
var procenti_pirmaja_gada = 0.01;
var procenti_otraja_gada = 0.02;
var procenti_tresaja_gada = 0.03;
var procenti_ceturtaja_gada = 0.04;
var procenti_piektaja_gada = 0.05;
//console.log(naudas_summa_konta);
//console.log(procenti_pirmaja_gada);

Summa_1_gada = naudas_summa_konta * procenti_pirmaja_gada / 100;
console.log(Summa_1_gada);
Summa_2_gada = naudas_summa_konta * procenti_otraja_gada / 100;
console.log(Summa_2_gada);
Summa_3_gada = naudas_summa_konta * procenti_tresaja_gada / 100;
console.log(Summa_3_gada);
Summa_4_gada = naudas_summa_konta * procenti_ceturtaja_gada / 100;
console.log(Summa_4_gada);
Summa_5_gada = naudas_summa_konta * procenti_piektaja_gada / 100;
console.log(Summa_5_gada);

document.getElementById("Banka_kalkulacija").innerHTML = "Ja jūs to ieguldīsiet mūsu bankā uz 1 gadu, tad pēc gada jūsu nauds summa būs " + Summa_1_gada + " EUR";



console.log("1. gads: " + Summa_1_gada);