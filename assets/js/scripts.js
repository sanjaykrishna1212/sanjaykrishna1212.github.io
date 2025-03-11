// Typing Effect
const typingText = "Welcome to My Portfolio";
const typingSpeed = 100;
let index = 0;
function typeLetter() {
    if (index < typingText.length) {
        document.getElementById('typing-text').textContent += typingText.charAt(index);
        index++;
        setTimeout(typeLetter, typingSpeed);
    } else {
        setTimeout(resetTypingEffect, 2000);
    }
}
function resetTypingEffect() {
    document.getElementById('typing-text').textContent = '';
    index = 0;
    typeLetter();
}
document.addEventListener('DOMContentLoaded', typeLetter);

// Project Cards Generation
const projects = [
    { title: "Node-Fire-Storage", description: "Connect with Firebase storage for file operations", githubLink: "https://github.com/sanjaykrishna1212/node-fire-storage" },
    { title: "Search.io", description: "Client-side search implementation using search.io", githubLink: "https://www.npmjs.com/package/search-io" },
    { title: "Chat.io", description: "Offline chat interface for on-premise use", githubLink: "https://github.com/sanjaykrishna1212/chat.io" },
    { title: "Launchpad", description: "Local deployment tool for testing applications", githubLink: "https://github.com/sanjaykrishna1212/launchpad" },
    { title: "RMS", description: "Restaurant management system for order processing", githubLink: "https://github.com/sanjaykrishna1212/RestaurantManagementSystem" },
    { title: "Wifi-Pass", description: "Retrieve saved Wi-Fi passwords", githubLink: "https://github.com/sanjaykrishna1212/wi-fi-pass" }
];
function generateProjectCards() {
    const projectContainer = document.getElementById('project-cards');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" class="btn" target="_blank">View on GitHub</a>
        `;
        projectContainer.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', generateProjectCards);

// Theme Selector
const themes = {
    ubuntu: { background: '#300A24', text: '#FFFFFF', accent: '#DD4814' },
    atom: { background: '#282C34', text: '#ABB2BF', accent: '#61AFEF' },
    dracula: { background: '#282A36', text: '#F8F8F2', accent: '#BD93F9' },
    github: { background: '#F5F5F5', text: '#24292E', accent: '#0366D6' },
    hacker: { background: '#000000', text: '#00FF00', accent: '#008000' },
    googledark: { background: '#202124', text: '#E8EAED', accent: '#8AB4F8' },
    googlelight: { background: '#FFFFFF', text: '#202124', accent: '#1A73E8' },
    monokai: { background: '#272822', text: '#F8F8F2', accent: '#F92672' },
    powershell: { background: '#012456', text: '#E0E0E0', accent: '#007ACC' }
};
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (theme) {
        document.documentElement.style.setProperty('--background-color', theme.background);
        document.documentElement.style.setProperty('--text-color', theme.text);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        localStorage.setItem('selectedTheme', themeName);
    }
}
function createThemeSelector() {
    const selector = document.getElementById('theme-selector');
    for (const theme in themes) {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
        selector.appendChild(option);
    }
    selector.addEventListener('change', (event) => {
        applyTheme(event.target.value);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    createThemeSelector();
    const savedTheme = localStorage.getItem('selectedTheme') || 'hacker';
    document.getElementById('theme-selector').value = savedTheme;
    applyTheme(savedTheme);
});

async function updateDateTimeRegion() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Auto formats based on user's locale

    // Fetch user's region (timezone)
    const region = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Update the display
    document.getElementById("date-time-region").textContent = `${formattedDateTime} | ${region}`;
}
setInterval(updateDateTimeRegion, 1000);
updateDateTimeRegion();