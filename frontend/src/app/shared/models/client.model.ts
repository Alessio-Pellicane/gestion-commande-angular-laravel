export class Client {

    id: number;
    nom: string;
    prenom: string
    date_de_naissance: Date;
    telephone: string;
    email: string;

    constructor(id: number, nom: string, prenom: string, date_de_naissance: Date, telephone: string, email: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.date_de_naissance = date_de_naissance;
        this.telephone = telephone;
        this.email = email;
    }

}