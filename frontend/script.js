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

const deleteMedicine = async (name) => {
  console.log("Deleting medicine", name);
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this medicine?"
  );
  if (shouldDelete) {
    const formdata = new FormData();
    formdata.append("name", name);
    try {
      const endpoint = `http://localhost:8000/delete`;
      const response = await fetch(endpoint, {
        method: "DELETE",
        body: formdata,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
};

const editMedicine = async (name, price) => {
  const formdata = new FormData();
  formdata.append("name", name);
  formdata.append("price", price);
  console.log("Editing medicine", name, price);
  try {
    const endpoint = `http://localhost:8000/update`;
    const response = await fetch(endpoint, {
      method: "POST",
      body: formdata,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
  return;
};

const fetchMedcines = async () => {
  try {
    const endpoint = "http://localhost:8000/medicines";
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    display(data);
  } catch (error) {
    console.log(error.message);
  }
};

const createMedicine = async (formdata) => {
  console.log("Creating medicine");
  try {
    const endpoint = "http://localhost:8000/create";
    const response = await fetch(endpoint, {
      method: "POST",
      body: formdata,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const form = document.querySelector("#add-medicine-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  createMedicine(formdata);
});

const refreshMedicines = async () => {
  const medicinesList = document.querySelector("#medicine-list");
  medicinesList.innerHTML = "Loading...";
  await fetchMedcines();
};

refreshMedicines();
