console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {

    const bucket = "app-agenda1";
    const key = "liste-agenda.json";
    const params = {
        Bucket: bucket,
        Key: key,
    };
    const id = 0;

    try {
        const data = await s3.getObject(params).promise();
        console.log("Raw text:\n" + data.Body.toString('utf-8'));
        const listeAgendaJson = data.Body.toString('utf-8');
        const listeAgenda = JSON.parse(listeAgendaJson);

        const agenda = listeAgenda.find(agenda => agenda.id === id);
        return JSON.stringify(agenda).toString('utf-8');


    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
