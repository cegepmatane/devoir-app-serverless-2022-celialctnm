class VueListeAgenda{
    constructor(){
        this.html = document.getElementById("html-vue-liste-agenda").innerHTML;
        this.listeAgendaDonnee = null;
    }

    initialiserListeAgenda(listeAgendaDonnee){
        this.listeAgendaDonnee = listeAgendaDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeAgenda = document.getElementById("liste-agenda");
        const listeAgendaItemHTML = listeAgenda.innerHTML;
        let listeAgendaHTMLRemplacement = "";

        for(var numeroAgenda in this.listeAgendaDonnee){
            let listeAgendaItemHTMLRemplacement = listeAgendaItemHTML;
            listeAgendaItemHTMLRemplacement = listeAgendaItemHTMLRemplacement.replace("{Agenda.id}",this.listeAgendaDonnee[numeroAgenda].id);
            listeAgendaItemHTMLRemplacement = listeAgendaItemHTMLRemplacement.replace("{Agenda.matiere}",this.listeAgendaDonnee[numeroAgenda].matiere);
            listeAgendaHTMLRemplacement += listeAgendaItemHTMLRemplacement;
        }
        listeAgenda.innerHTML = listeAgendaHTMLRemplacement;
    }

}
