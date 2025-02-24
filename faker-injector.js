(async function() {
    const fakerEthiopia = await import(chrome.runtime.getURL('ethiopian-faker.js'));
    console.log("Ethiopian Faker Injected:", fakerEthiopia.name({ lang: 'en' }));
})();