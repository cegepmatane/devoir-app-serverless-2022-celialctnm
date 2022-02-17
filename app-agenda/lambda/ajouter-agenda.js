console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let agenda = null;
  let agendajson = postdata["agendajson"];
  if(agendajson){
    agenda = JSON.parse(agendajson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de devoirs reçu",
  };
  
  if (agenda == null) {
    return response;
  }

  agenda.id = Date.now();

  const params = {
      Bucket: "app-agenda1",
      Key: "liste-agenda.json",
  };

  let data = await s3.getObject(params).promise();
  let listeAgendaJson = data.Body.toString('utf-8');
  const listeAgenda = JSON.parse(listeAgendaJson);
  listeAgenda.push(agenda);
  listeAgendaJson = JSON.stringify(listeAgenda);
  params.Body  = listeAgendaJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: agenda.id
  };

  return response;
};
