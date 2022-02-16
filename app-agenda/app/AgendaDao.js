class AgendaDao{
    lister(action){
        fetch("https://f0a588rdsj.execute-api.us-east-1.amazonaws.com/default/lister-agenda", {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                //console.log(data);
                let listeAgenda = [];
                for(let position in data){
                    let agenda = new Agenda(data[position].matiere,
                        data[position].type,
                        data[position].date,
                        data[position].description,
                        data[position].duree,
                        data[position].id);

                    //console.log(agenda);
                    listeAgenda.push(agenda);
                }
                action(listeAgenda);
            });
    }
    chercher(id, action){
        fetch("https://2uyo1do39k.execute-api.us-east-1.amazonaws.com/default/chercher-par-id-agenda" + '?id=' + id , {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                //console.log(data);
                let agenda = new Agenda(data.matiere,
                    data.type,
                    data.date,
                    data.description,
                    data.duree,
                    data.id);
                action(agenda);
            });
    }
    ajouter(agenda, action){
        fetch("https://ni4k2ljkg8.execute-api.us-east-1.amazonaws.com/default/ajouter-agenda",
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: "agendajson=" + JSON.stringify(agenda),
                mode:'cors',
            })
            .then(response => response.text())
            .then(data =>
            {
                console.log('Détail:', data);
                action();
            });
    }
}
