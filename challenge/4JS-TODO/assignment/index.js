const COUNTRY_LS = "country";
countriesSelect = document.getElementById("chooseCountries");

function handleSave() {
    const conVal = document.getElementById("chooseCountries");
    if (conVal.value !== "None") {
        console.log(conVal.value);
    }
}

function chooseCountry() {
    countriesSelect.addEventListener("change", handleSave);
}

chooseCountry();