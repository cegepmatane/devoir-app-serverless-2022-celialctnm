class VueAgenda{
    constructor(){
        this.html = document.getElementById("html-vue-agenda").innerHTML;
        this.agenda = null;
    }

    initialiserAgenda(agenda){
        this.agenda = agenda;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("agenda-matiere").innerHTML = this.agenda.matiere;
        document.getElementById("agenda-type").innerHTML = this.agenda.type;
        document.getElementById("agenda-date").innerHTML = this.agenda.date;
        document.getElementById("agenda-description").innerHTML = this.agenda.description;
        document.getElementById("agenda-duree").innerHTML = this.agenda.duree;
    }

}
