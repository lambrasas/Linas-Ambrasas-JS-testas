const tableContent = document.getElementById("tableContentContainer")
async function getData(){
    try{
        const response= await fetch("https://testapi.io/api/Cress/resource/Skills")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result=await response.json()
        const data = result.data
        return data
    }catch (error) {
        console.error(error);
        alert('Failed to create user. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        let skills = await getData();
        renderTable(skills)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function renderTable(skills){
    skills.forEach(skill => {
        let skillRow=document.createElement("div")

        skillRow.setAttribute("id",`${skill.id}`)
        skillRow.setAttribute("class","skillRow")


        let idDiv=document.createElement("div")
        idDiv.innerHTML=skill.ID

        let skillDiv=document.createElement("div")
        skillDiv.innerHTML=skill.Skill

        let actionDiv=document.createElement("div")

        let deleteButton =document.createElement("button")
        deleteButton.setAttribute("class", "deleteButton")
        deleteButton.innerHTML="Delete"
        deleteButton.addEventListener('click', function() {
            deleteRow(this);
        });
        actionDiv.appendChild(deleteButton)


        skillRow.appendChild(idDiv)
        skillRow.appendChild(skillDiv)
        skillRow.appendChild(actionDiv)

        tableContent.appendChild(skillRow)
    });

}

async function deleteRow(element){
    const skillId = element.parentNode.parentNode.id
    const skillRow=element.parentNode.parentNode
    console.log(skillRow)
    try {
        const response = await fetch(`https://testapi.io/api/Cress/resource/Skills/${skillId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        skillRow.remove();
    }catch (error){
        console.error(error);
    }
}