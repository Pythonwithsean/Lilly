import display from "../../frontend/helpers/display.js";

const fetchMedcine = async () => {
  console.log("Fetching medicines");
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

export default fetchMedcine;
