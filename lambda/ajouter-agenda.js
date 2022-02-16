console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const bucket = "app-agenda1";
    const key = "liste-agenda.json";
    const params = {
        Bucket: bucket,
        Key: key,
    };
    //Le nombre de millisecondes écoulées depuis le premier janvier 1970 à minuit UTC
    const id = Date.now();
    const agenda = {
        matiere: "Maths",
        type: "devoirs",
        date: "2022-02-15",
        description: "Exercice 12 et 13 page 240",
        duree: 60,
        id: id,
    };

    try {
        let data = await s3.getObject(params).promise();
        console.log("Raw text:\n" + data.Body.toString('utf-8'));
        let listeAgendaJson = data.Body.toString('utf-8');
        const listeAgenda = JSON.parse(listeAgendaJson);
        listeAgenda.push(agenda);
        listeAgendaJson = JSON.stringify(listeAgenda);
        params.Body  = listeAgendaJson;
        data = await s3.putObject(params).promise();

        return data

    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
