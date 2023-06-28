const togglePreloader = () => {
    const preloader = document.querySelector('.wrap-preloader');
    preloader.classList.toggle('preloader-show')
}

const renderUniverList = async () => { 

    const currentCounty = document.querySelector('#current-tour').value;   
    togglePreloader();
    const univerData = await getUniverList(currentCounty);
    const univerList = document.querySelector('#list-matches');

    univerList.innerText = '';
    univerData.forEach(element => {
        univerList.innerHTML += `
            <a href="more-info.html?q=${currentCounty}&univer=${element.name}" class="collection-item" target="_blank">
                ${element.name}
            </a>
        `
    });
    togglePreloader();
}

renderUniverList();
document.querySelector('#current-tour').addEventListener('change', renderUniverList)