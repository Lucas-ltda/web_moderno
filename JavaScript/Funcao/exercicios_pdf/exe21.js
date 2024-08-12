const convenio = idade => {
    if (idade < 10) {
        console.log("180")
    } else if ( idade >= 10 && idade <=30 ) {
            console.log("150")
    }else if (idade > 30 && idade <=60 ) {
        console.log("195")
    }else if(idade > 60 && idade <= 110){
        console.log("230")
    } else {
        console.log('Tá vivendo em filho!...')
    }

}


convenio(7)