/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const outputDiv=document.getElementById("output")
document.addEventListener('DOMContentLoaded', () => {
    fetch('cars.json')
        .then(response => response.json())
        .then(data => displayCars(data))
        .catch(error => console.error('Error fetching cars:', error));
});
function displayCars(cars) {
    cars.forEach(car => {

        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';

        const brand = document.createElement('h2');
        brand.textContent = car.brand;

        const models = document.createElement('ul');
        car.models.forEach(model => {
            const modelItem = document.createElement('li');
            modelItem.textContent = model;
            models.appendChild(modelItem);
        });

        brandCard.appendChild(brand);
        brandCard.appendChild(models);
        outputDiv.appendChild(brandCard);
    });
}