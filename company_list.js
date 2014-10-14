// company List

document.addEventListener('DOMContentLoaded', function () {

    // an array to store company information
    var companies = [];

    var trs = document.getElementById('CompanylistResults').getElementsByTagName('tr');

    for (var i = 0, len = trs.length; i < len; i+=2) {
        var tds = trs[i].children;


        var td_name = tds[0]; // access the td element which contains the name information
        // access the h3 element which contains the symbol information
        var h3_symbol = tds[1].getElementsByClassName('symbol_links')[0].firstElementChild;

        // create and push a company object into the list of companies
        companies.push({
            name: (td_name.firstElementChild || td_name).innerHTML,
            symbol:(h3_symbol.firstElementChild || h3_symbol).innerHTML.trim(),
            cap: tds[2].innerHTML === 'n/a' ? null : tds[2].innerHTML,
            country: tds[4].innerHTML === 'n/a' ? null : tds[4].innerHTML,
            ipo_year: tds[5].innerHTML === 'n/a' ? null : tds[5].innerHTML,
            sub_sector: tds[6].innerHTML === 'n/a' ? null : tds[6].innerHTML,
        });
    }

    console.log(companies);
});