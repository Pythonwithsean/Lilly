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

export default createMedicine;
