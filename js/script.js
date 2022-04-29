var url="https://carlosreneas.github.io/endpoints/noticias.json";
var noticias;

function leernoticias(){
  fetch(url,{
    method: 'GET',
    body: JSON.stringify(data),
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:',error))
  .then(response => {
    console.log('Success:',response);
     noticias = response; 
  });
}