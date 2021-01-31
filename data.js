function data(Question)
{
    
    const Questions = [{
            Question1:{
                question:"Kuala lampur is the capitale of",
                answer:"Malaisia"
            },
            Question2:{
                question:"Alger is the capitale of",
                answer:"Algeria"
            },
            Question3:{
                question:"Washington is the capitale of",
                answer:"USA"
            },
            Question4:{
                question:"Bamako is the capitale of",
                answer:"Bamako"
            },
            Question5:{
                question:"Bruxelles is the capitale of",
                answer:"Belgique"
            },
            Question6:{
                question:"Rabat is the capitale of",
                answer:"Maroc"
            },
            Question7:{
                question:"Berne is the capitale of",
                answer:"Suisse"
            },
            Question8:{
                question:"Ottawa is the capitale of",
                answer:"Canada"
            },
            Question9:{
                question:"Le Caire is the capitale of",
                answer:"Egypte"
            },
            Question10:{
                question:"Brazzaville is the capitale of",
                answer:"Congo"
            },
            Question11:{
                question:"Riyad is the capitale of",
                answer:"Arabie saoudite"
            },
            Question12:{
                question:"Moscou is the capitale of",
                answer:"Russie"
            },
            Question13:{
                question:"Ankara is the capitale of",
                answer:"Turqie"
            },
            Question14:{
                question:"Pékin is the capitale of",
                answer:"China"
            },
            Question15:{
                question:"Brasília is the capitale of",
                answer:"Brésil"
            },
            Question16:{
                question:"Niamey is the capitale of",
                answer:"Niger"
            },
            Question17:{
                question:"Berlin is the capitale of",
                answer:"Allemagne"
            },
            Question18:{
                question:"Tokyo is the capitale of",
                answer:"Japon"
            },
            Question19:{
                question:"Bogota is the capitale of",
                answer:"Colombie"
            },
            Question20:{
                question:"Buenos Aires is the capitale of",
                answer:"Argentina"
            }
    }]
    while (!Question) {
        for (const child of Questions) {
            let rdm = Math.random(1,10)
            console.log("j'espere que ca marche si non je vais niquer ta mere")
            if(rdm===4){
               Question = child 
            }
        }
    }
}
export default data