
var naudas_summa_konta = 25000;
var procenti_pirmaja_gada = 0.01;
var procenti_otraja_gada = 0.02;
var procenti_tresaja_gada = 0.03;
var procenti_ceturtaja_gada = 0.04;
var procenti_piektaja_gada = 0.05;
//console.log(naudas_summa_konta);
//console.log(procenti_pirmaja_gada);

Klienta_vards = "Antons Bērziņš"

Summa_1_gada = naudas_summa_konta * procenti_pirmaja_gada / 100;
Summa_2_gada = naudas_summa_konta * procenti_otraja_gada / 100;
Summa_3_gada = naudas_summa_konta * procenti_tresaja_gada / 100;
Summa_4_gada = naudas_summa_konta * procenti_ceturtaja_gada / 100;
Summa_5_gada = naudas_summa_konta * procenti_piektaja_gada / 100;

document.getElementById("Banka_kalkulacija").innerHTML = Summa_1_gada;
console.log("1. gads: " + Summa_1_gada);