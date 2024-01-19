/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const button= document.getElementById("btn")
const ENDPOINT = 'https://api.github.com/users';

async function fetchUsers() {
    try {
        const response = await fetch(ENDPOINT);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
}

button.addEventListener("click", async()=>{
    const users =await fetchUsers(ENDPOINT);
    if(users){
        displayUsers(users);
    }
});

function displayUsers(users){
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML=""
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'singleUsersCard';
        userDiv.innerHTML = `
            <p><strong>Login:</strong> ${user.login}</p>
            <img src="${user.avatar_url}" alt="Avatar of ${user.login}" width="100" height="100">
        `;
        outputDiv.appendChild(userDiv);
    });

}