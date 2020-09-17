const sendPostRequest = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
};

const sendGetRequest = async (url = "") => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response; // parses JSON response into native JavaScript objects
};

module.exports = { sendPostRequest, sendGetRequest };
