// Ensure the script loads before using fakerEthiopia
(async function() {
    const fakerEthiopia = await import(chrome.runtime.getURL('ethiopian-faker.js'));

    document.getElementById("generate-btn").addEventListener("click", () => {
        document.getElementById("name-output").innerText = fakerEthiopia.name({ lang: 'en' });
        document.getElementById("phone-output").innerText = fakerEthiopia.phone();
        document.getElementById("address-output").innerText = fakerEthiopia.address({ lang: 'en' });
    });
})();
