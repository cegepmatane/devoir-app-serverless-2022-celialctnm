class VueAjouterAgenda{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-agenda").innerHTML;
        this.ajouterAgenda = null;
    }

    initialiserAjouterAgenda(ajouterAgenda){
        this.ajouterAgenda = ajouterAgenda;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let matiere = document.getElementById("agenda-matiere").value;
        let type = document.getElementById("agenda-type").value;
        let date = document.getElementById("agenda-date").value;
        let description = document.getElementById("agenda-description").value;
        let duree = document.getElementById("agenda-duree").value;

        this.ajouterAgenda(new Agenda(matiere, type, date, description,duree, null));

    }

}