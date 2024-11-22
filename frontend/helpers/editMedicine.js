const editMedicine = async (name, price) => {
  const shouldEdit = window.confirm(
    "Are you sure you want to edit this medicine?"
  );
  if (!shouldEdit) {
    return;
  }
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
};

export default editMedicine;
