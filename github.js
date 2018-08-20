class GitHub{
  constructor(){
    this.clientId = "89103e2a572ff740be66";
    this.clientSecret = "530703b4979b1320d469960cad9b7d47716ed59b";
  }

  getUser(userName,callback){ 
    fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    .then(response => response.json()) 
    .then(data =>{
      callback(data);
    });
    
  }
}