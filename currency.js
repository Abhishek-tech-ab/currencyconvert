const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/inr.json"

const dropdowns =document.querySelectorAll(".dropdown select");


for (let select of dropdowns) {
    for (code in countryList) {
        let newOption =document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
}