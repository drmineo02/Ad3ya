// قائمة الأدعية
const duas = [
    "اللهم إني أسألك العفو والعافية في الدنيا والآخرة.",
    "اللهم اشرح صدري ويسر أمري.",
    "اللهم اجعل لي من كل هم فرجًا ومن كل ضيق مخرجًا.",
    "اللهم اغفر لي ذنوبي وبارك لي في رزقي.",
    "اللهم ارزقني حسن الخاتمة.",
    "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
    "اللهم اجعلني من عبادك الصالحين.",
    "اللهم اجعل القرآن العظيم ربيع قلبي ونور صدري.",
    "اللهم يسر أمري واشرح لي صدري.",
    "اللهم احفظ أهلي وأحبتي من كل سوء.",
    "اللهم ارحمني برحمتك التي وسعت كل شيء.",
    "اللهم يا مقلب القلوب ثبت قلبي على دينك.",
    "اللهم إني أسألك الجنة وما قرب إليها من قول وعمل.",
    "اللهم قني عذابك يوم تبعث عبادك.",
    "اللهم لا تدع لي ذنبًا إلا غفرته ولا همًا إلا فرجته.",
    "اللهم احفظني من كل شر وسوء.",
    "اللهم ارزقني حسن الخاتمة وأحسن عاقبتي في الأمور كلها."
];

// قائمة الثيمات
const themes = {
    default: { background: "#009688", emoji: "🌿" },
    dark: { background: "#222", emoji: "🌙" },
    blue: { background: "#2196F3", emoji: "💙" },
    purple: { background: "#9C27B0", emoji: "💜" },
    pink: { background: "#E91E63", emoji: "🌸" },
    gold: { background: "#FFD700", emoji: "📿" },
    red: { background: "#F44336", emoji: "❤️" },
    gray: { background: "#607D8B", emoji: "🩶" },
    teal: { background: "#008080", emoji: "🦚" },
    brown: { background: "#795548", emoji: "🤎" }
};

// عرض دعاء عشوائي
function getRandomDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    document.getElementById("dua").innerText = duas[randomIndex];
}

// تغيير الثيم
function changeTheme() {
    const selectedTheme = document.getElementById("theme-selector").value;
    document.body.style.background = themes[selectedTheme].background;
    document.querySelector("h1").innerHTML = themes[selectedTheme].emoji + " دعاء اليوم " + themes[selectedTheme].emoji;
}

// إظهار / إخفاء الإعدادات
function toggleSettings() {
    const panel = document.querySelector(".settings-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

// تشغيل الأكواد عند تحميل الصفحة
window.onload = () => {
    getRandomDua();
    changeTheme();
};
