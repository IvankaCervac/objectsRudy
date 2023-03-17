/*  Carolina trebuie să îl ducă pe Rudy la veterinar și nu
 vrea să îi mai explice doctorului tot istoricul lui. 
 Ea vrea să creeze o evidență electronică pe care să o poată accesa ușor.

Cerințe:
Creați un obiect care să conțină informații despre Rudy: 
rasă, culoarea părului, anul nașterii, vaccinuri și dacă 
are pașaport sau nu. Creați o funcție care afișează toate
 aceste informații într-un format care să fie citit ușor de către doctor.
Creați o funcție în obiect care calculează vârsta lui 
Rudy și afișați-o în mesaj.
Rudy a primit recent un vaccin pentru hepatită canină. 
Adăugați acest vaccin în istoricul medical.
Afișați un mesaj corespunzător dacă Rudy are voie sau nu 
să iasă din Moldova (dacă are pașaport).
Carolina a uitat când i-a făcut celelalte vaccinuri lui
 Rudy și acum știe că trebuie să pună în istoric data fiecărui
  vaccin. Actualizați obiectul pentru a conține această 
  informație și creați o funcție care afișează istoricul vaccinării.
   Dacă nu există niciun vaccin, să se afișeze "Rudy nu a făcut niciun vaccin până acum".*/

   let dogRudy = {
    tipRasa : "labrador",
    colorPar: "gold",
    birthDay: "2020",
    vaccin : [],
    passport: false,

     descriptionRudy() {
        return `Rudy este un caine de rasa ${this.tipRasa}, are culoarea  ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu " : ""} are pasaport `

    },
   }
   console.log(dogRudy.descriptionRudy());
