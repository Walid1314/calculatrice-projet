console.log(" script chargé ! ");
let arraySignes = ["+" , "*" , "/" , "-"];
let saisies = []
let calcCorps = document.createElement("main");
document.body.appendChild(calcCorps);



                // ECRAN

let calcEcran = document.createElement("div");
calcEcran.innerText = 0;
calcEcran.classList.add("calc-ecran");
calcCorps.appendChild(calcEcran)


                // CLAVIER 

    let calcClavier = document.createElement("div");
    calcClavier.classList.add("calc-clavier");
    calcCorps.appendChild(calcClavier)

                            // CLAVIER CHIFFRE

        let clavierChiffres = document.createElement("div");
        clavierChiffres.classList.add("clavier-chiffres");
        for (let index = 9; index >= 0; index--) {
            let boutonChiffre = document.createElement("button");
            boutonChiffre.innerText = index;
            boutonChiffre.classList.add("chiffre-boutton");
            clavierChiffres.appendChild(boutonChiffre);
            calcClavier.appendChild(clavierChiffres);
            
        }

            // VIRGULE

        let boutonVirgule = document.createElement("button");
        boutonVirgule.innerText = ",";
        boutonVirgule.classList.add("bouton-virgule");
        calcClavier.appendChild(boutonVirgule);


            // SIGNES CLAVIER 


        let clavierSignes = document.createElement("div");
        clavierSignes.classList.add("clavier-signes")
        calcClavier.appendChild(clavierSignes)

            // SIGNES OPPERATION 

        let signesOpperation = document.createElement("div")
        signesOpperation.classList.add("signes-opperation")
        clavierSignes.appendChild(signesOpperation)
        arraySignes.forEach(arraySigne => {
            let signesBoutton = document.createElement("button")
            signesBoutton.classList.add("signes-boutton")
            signesBoutton.innerText = [arraySigne]
        }
            )












      


        



































