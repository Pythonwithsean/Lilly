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

export default deleteMedicine;
