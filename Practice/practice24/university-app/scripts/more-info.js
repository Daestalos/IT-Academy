const renderMoreInfo = async () => {
    const univerCountry = window.location.search.split('?q=')[1].split('&')[0]
    const univerName = window.location.search.split('&univer=')[1]

    const univerItem = await getUniverItem(univerCountry, univerName);

    const countryCode = document.querySelector('#country-code');
    const website = document.querySelector('#domain');
    const country = document.querySelector('#country');

    countryCode.innerHTML = univerItem[0].alpha_two_code;
    website.innerHTML = `Domain: <a id="website" href="${univerItem[0].web_pages[0]}">${univerItem[0].name}</a>`;
    country.innerHTML = univerItem[0].country;
}

renderMoreInfo();