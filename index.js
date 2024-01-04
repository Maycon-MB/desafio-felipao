let nomeHeroi = "Maycon"
let qtdExperiencia = 11000
let nivel = "";

if (qtdExperiencia < 1000){
    nivel = "Ferro";
} else if (qtdExperiencia >= 1001 && qtdExperiencia <= 2000 ){
    nivel = "Bronze";  
} else if (qtdExperiencia >= 2001 && qtdExperiencia <= 5000){
    nivel = "Prata";
} else if (qtdExperiencia >= 5001 && qtdExperiencia <= 7000){
    nivel = "Ouro";
} else if (qtdExperiencia >= 7001 && qtdExperiencia <= 8000){
    nivel = "Platina";
} else if (qtdExperiencia >= 8001 && qtdExperiencia <= 9000){
    nivel = "Ascendente";
} else if (qtdExperiencia >= 9001 && qtdExperiencia <= 10000){
    nivel = "Imortal";
} else if(qtdExperiencia >= 10001){
    nivel = "Radiante";
}

console.log("O Herói de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**" )