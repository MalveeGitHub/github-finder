const usernameInput = document.querySelector("input.input");
const github = new GitHub();
usernameInput.addEventListener("keyup",handelUserInput);
//Userinfo from DOM
const img = document.querySelector("img");
const username = document.querySelector(".username");
const loc = document.querySelector(".location");
const followers = document.querySelector(".followers");
const other = document.querySelector("div.other");

function handelUserInput(e){
  const value = e.target.value;
  if(value !== ''){
    github.getUser(value,function(data){
      img.setAttribute("src",data.avatar_url);
      username.textContent = `User Name: ${data.name}`;
      loc.textContent = `Location: ${data.location}`;
      followers.textContent = `Followers: ${data.followers}`;
      other.innerHTML  = `
        <h6>===Profile===<h6>
        <a href=${data.html_url} target="_" class="btn btn-primary">Go to Profile</a>
        <p>User BIO: ${data.bio}</p>
      `;
      if(data.message === "Not Found"){
        console.warn("User not found");
      }
    });
  }
}
