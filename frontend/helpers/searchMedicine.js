const searchMedicine = () => {
  const searchMedicineForm = document.querySelector("#search-medicine-form");
  searchMedicineForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(searchMedicineForm);
    try {
      const endpoint = `http://localhost:8000/medicines/${formData.get(
        "search"
      )}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      const searchResult = document.querySelector("#search-result");
      if (!data.name && !data.price) {
        searchResult.style.color = "red";
        searchResult.innerHTML = "<h3>Medicine not found</h3>";
        return;
      }
      searchResult.style.color = "green";
      searchResult.innerHTML = `
	  	<h1>Search Result</h1>
		<p>Name: ${data.name}</p>
		<p>Price: ${data.price}</p>
	  `;
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  });
};

export default searchMedicine;
