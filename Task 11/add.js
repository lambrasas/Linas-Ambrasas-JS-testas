let input = document.getElementById("input")
let button = document.getElementById("submitButton")
let form=document.querySelector("form")

const addSkill=async(id,skill)=>{
    const body={
        ID:id,
        Skill:skill
    }
    try{
        const response = await fetch(
            "https://testapi.io/api/Cress/resource/Skills",{
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            }
        );

        if (!response.ok) {
            const errorBody = await response.text(); 
            throw new Error(`HTTP error! status: ${response.status}. Error: ${errorBody}`);
        }



    }catch(error){
        console.error(error);
        alert('Failed to add user. Please try again.');
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let id = guidGenerator()
    let skill = input.value
    
    await addSkill(id,skill);
    input.value=""
    window.location.href = 'index.html';
});

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4());
}