const names = {
    male: {
      en: ["Abebe", "Kebede", "Yonas", "Tesfaye"],
      am: ["አበበ", "ከበደ", "ዮናስ", "ተስፋዬ"]
    },
    female: {
      en: ["Aster", "Mekdes", "Hanna", "Selam"],
      am: ["አስቴር", "መቅደስ", "ሃና", "ሰላም"]
    },
  };
  
  const addresses = {
    en: ["Bole, Addis Ababa", "Piassa, Addis Ababa", "Lege Tafo, Oromia"],
    am: ["ቦሌ, አዲስ አበባ", "ፒያሳ, አዲስ አበባ", "ለገ ጣፎ, ኦሮሚያ"]
  };
  
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function name({ lang = "en", gender = "male" } = {}) {
    return getRandom(names[gender][lang]);
  }
  
  export function address({ lang = "en" } = {}) {
    return getRandom(addresses[lang]);
  }
  
  export function phone() {
    return `+251 9${Math.floor(10000000 + Math.random() * 90000000)}`;
  }
  