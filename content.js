(async function() {
    const { name, phone, address } = await import(chrome.runtime.getURL('ethiopian-faker.js'));

    function autofillForm() {
        document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']").forEach(input => {
            if (input.name.toLowerCase().includes("name")) {
                input.value = name({ lang: 'en' });
            } else if (input.name.toLowerCase().includes("phone")) {
                input.value = phone();
            } else if (input.name.toLowerCase().includes("address")) {
                input.value = address({ lang: 'en' });
            }
        });
    }

    // Run autofill when the page loads
    document.addEventListener("DOMContentLoaded", autofillForm);
})();