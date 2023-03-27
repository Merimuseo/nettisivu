/*********pvm päivitys*********/
var year = "2023";
var dates = "22.5 - 25.8.9999";
/******************************/

const footerYear = document.getElementsByClassName("footer-year");
const page1Dates = document.getElementsByClassName("page1-dates");
function getDates() {
    for (i=0; i<footerYear.length;i++) {
        footerYear[i].innerHTML = year;
    }
    for (i=0; i<page1Dates.length;i++) {
        page1Dates[i].innerHTML = dates;
    }
}

/*************Postiosoite päivitys************/
var postiosoite = "Satulatie 4, 65230 Vaasa";
var postadress = "Sadelvägen 4, 65230 Vasa";
/*********************************************/

var osoitteet = document.getElementsByClassName("addressFI");
var adresser = document.getElementsByClassName("addressSV");
function address() {
    for (i=0; i<osoitteet.length;i++) {
        osoitteet[i].innerHTML = postiosoite;
    }
    for (i=0; i<adresser.length;i++) {
        adresser[i].innerHTML = postadress;
    }
}