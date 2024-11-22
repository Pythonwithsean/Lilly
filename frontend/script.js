import createMedicine from "../frontend/helpers/createMedicine.js";
import fetchMedcine from "../frontend/helpers/fetchMedicine.js";
import fetchAverage from "../frontend/helpers/fetchAverage.js";
import searchMedince from "../frontend/helpers/searchMedicine.js";

const form = document.querySelector("#add-medicine-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  createMedicine(formdata);
});

const refreshMedicines = async () => {
  const medicinesList = document.querySelector("#medicine-list");
  medicinesList.innerHTML = "Loading...";
  await fetchMedcine();
};

fetchAverage();
searchMedince();
refreshMedicines();
