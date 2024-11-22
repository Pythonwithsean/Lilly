import deleteMedicine from "../../frontend/helpers/deleteMedicine.js";
import editMedicine from "../../frontend/helpers/editMedicine.js";

const display = async (data) => {
  console.log("Displaying medicines");
  const medicines = data;
  const medicinesList = document.querySelector("#medicine-list");
  if (!medicinesList || !medicines) {
    console.error("No medicines list found or no data found");
  }
  medicinesList.innerHTML = "";
  for (const medicine of medicines.medicines) {
    const medicineElement = document.createElement("div");
    medicineElement.innerHTML = `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${
      medicine.name.length > 0 ? medicine.name : "*Corrupted Data*"
    }</h5>
      <p class="card-text">${
        medicine.price !== undefined && medicine.price !== null
          ? Number.parseFloat(medicine.price).toFixed(2)
          : "*Corrupted Data*"
      }</p>
        <button class="btn btn-primary edit-btn" id="EditButton">Edit</button>
        <button class="btn btn-danger delete-btn" id="DeleteButton">Delete</button>
        <div class="update-card card-body">
        <form id="edit-medicine-form">
        <div class="form-group">
        </div>
        <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" name="price" id="price" placeholder="Enter Price" required>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
        </div>
`;
    if (
      medicine.price === undefined ||
      medicine.price === null ||
      medicine.name.length === 0
    ) {
      const cardTitle = medicineElement.querySelector(".card-title");
      const cardText = medicineElement.querySelector(".card-text");
      cardText.style.color = "red";
      cardTitle.style.color = "red";
    }
    medicinesList.appendChild(medicineElement);
  }
  const editButtons = document.querySelectorAll(".edit-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const updateForm = document.querySelectorAll(".update-card");
  if (!deleteButtons || !editButtons) {
    console.error("No edit or delete buttons found");
  }

  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", (e) => {
      const medicineName = e.target.parentElement.children[0].textContent;
      deleteMedicine(medicineName);
    });
  }

  for (const editButton of editButtons) {
    editButton.addEventListener("click", (e) => {
      console.log("Edit button clicked");
      const updateForm =
        e.target.parentElement.children[
          e.target.parentElement.children.length - 1
        ];
      updateForm.style.display =
        updateForm.style.display === "block" ? "none" : "block";
    });
  }

  for (const form of updateForm) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const updateForm = form.children[0];
      const medicineName =
        e.target.parentElement.parentElement.children[0].textContent;
      const formdata = new FormData(updateForm);
      const medicinePrice = formdata.get("price");
      editMedicine(medicineName, medicinePrice);
    });
  }
};

export default display;
