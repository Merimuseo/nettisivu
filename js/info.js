const footerYear = document.getElementsByClassName("footer-year");
const page1Dates = document.getElementsByClassName("page1-dates");
const osoitteet = document.getElementsByClassName("addressFI");
const adresser = document.getElementsByClassName("addressSV");

function getInfo() {
    for (i=0; i<footerYear.length;i++) {
        footerYear[i].innerHTML = vuosi;
    }
    for (i=0; i<page1Dates.length;i++) {
        page1Dates[i].innerHTML = pvm;
    }
    for (i=0; i<osoitteet.length;i++) {
        osoitteet[i].innerHTML = postiosoite;
    }
    for (i=0; i<adresser.length;i++) {
        adresser[i].innerHTML = postadress;
    }
}
