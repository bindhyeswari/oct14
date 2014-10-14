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
            name: td_name.textContent,
            symbol:h3_symbol.textContent.trim(),
            cap: tds[2].innerHTML === 'n/a' ? null : tds[2].textContent,
            country: tds[4].innerHTML === 'n/a' ? null : tds[4].textContent,
            ipo_year: tds[5].innerHTML === 'n/a' ? null : tds[5].textContent,
            sub_sector: tds[6].innerHTML === 'n/a' ? null : tds[6].textContent
        });
    }

    console.log(companies.map(function (company) { return company.name; }));
    console.log(companies);

});