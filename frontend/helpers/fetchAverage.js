const averageElm = document.querySelector("#average-price");
const fetchAverage = async () => {
  console.log("Fetching average");
  try {
    const endpoint = "http://localhost:8000/average";
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    averageElm.innerHTML =
      "<h1> Average Price: " + data["average_price"] + "</h1>";
    averageElm.style.color = "green";
    averageElm.style.textAlign = "center";
    return data["average_price"];
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchAverage;
