const nameValue = document.getElementById("name");
const price = document.getElementById("price");
const form = document.getElementById("medicineForm");
const average_price = document.getElementById("average-price")
const container = document.querySelector(".medicine-div")

window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8000/average")
    .then(res => res.json())
    .then(avg => {
            average_price.textContent = `$${avg}`;
        })
    .catch(err => console.error(err));

    fetch("http://localhost:8000/medicines")
    .then(res => res.json())
    .then(data => {
            const medicines = data.medicines;

            medicines.forEach(med => {
                const card = document.createElement('div');
                card.className = 'medicine-card';

                const name = med.name || "Unknown";
                const price = med.price != null ? `$${med.price.toFixed(2)}` : "Unknown"

                card.innerHTML = `
                    <div class="medicine-buttons">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    </div>
                    <h3 class="medicine-name">${name}</h3>
                    <p><strong>Price: </strong>${price}</p>
                `;

                container.appendChild(card);
            });
        })
    .catch(err => console.error(err));
})

form.addEventListener("submit", function() {
    const formData = new FormData();
    formData.append("name", nameValue.value);
    formData.append("price", price.value);

    fetch("http://localhost:8000/create", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .catch(err => console.error(err));
    
});

container.addEventListener("click", async(event) => {

    const deleteBtn = event.target.closest(".delete-button");
    const editBtn = event.target.closest(".edit-button");
    if(!deleteBtn || editBtn) return;

    if(deleteBtn){
        const card = deleteBtn.closest(".medicine-card");
        const name = card.querySelector("h3").textContent;

        const deleteData = new FormData();
        deleteData.append("name", name)

        const res = await fetch(`http://localhost:8000/delete`,{
            method: "DELETE",
            body: deleteData
        });
        
        const result = await res.json();

        if(result.message){
            card.remove();
        }
    }
})