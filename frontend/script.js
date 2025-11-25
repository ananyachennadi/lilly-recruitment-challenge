const nameValue = document.getElementById("name");
const price = document.getElementById("price");
const form = document.getElementById("medicineForm");
const average_price = document.getElementById("average-price")

window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8000/average")
    .then(res => res.json())
    .then(avg => {
            average_price.textContent = `£${avg}`;
        })
    .catch(err => console.error(err));
})

form.addEventListener("submit", function() {
    const formData = new FormData();
    formData.append("name", nameValue.value);
    formData.append("price", price.value);

    fetch("http://localhost:8000/create", {
        method: "GET",
        body: formData
    })
    .then(res => res.json())
    .catch(err => console.error(err));
});

