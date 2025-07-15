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
    { title: "Node-Fire-Storage", description: "Connect with Firebase storage for file operations", githubLink: "https://github.com/sanjaykrishna1212/node-fire-storage", tech: ["Node.js", "Firebase"], screenshot: null },
    { title: "Search.io", description: "Client-side search implementation using search.io", githubLink: "https://www.npmjs.com/package/search-io", tech: ["JavaScript", "Search.io"], screenshot: null },
    { title: "Chat.io", description: "Offline chat interface for on-premise use", githubLink: "https://github.com/sanjaykrishna1212/chat.io", tech: ["JavaScript", "Socket.io"], screenshot: null },
    { title: "Launchpad", description: "Local deployment tool for testing applications", githubLink: "https://github.com/sanjaykrishna1212/launchpad", tech: ["Node.js", "CLI"], screenshot: null },
    { title: "RMS", description: "Restaurant management system for order processing", githubLink: "https://github.com/sanjaykrishna1212/RestaurantManagementSystem", tech: ["JavaScript", "Node.js"], screenshot: null },
    { title: "Wifi-Pass", description: "Retrieve saved Wi-Fi passwords", githubLink: "https://github.com/sanjaykrishna1212/wi-fi-pass", tech: ["Node.js", "Windows"], screenshot: null }
];
function generateProjectCards() {
    const projectContainer = document.getElementById('project-cards');
    projects.forEach((project, idx) => {
        const card = document.createElement('div');
        card.classList.add('project');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" class="btn" target="_blank">View on GitHub</a>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'a') return;
            showProjectModal(idx);
        });
        projectContainer.appendChild(card);
    });
}
function showProjectModal(idx) {
    const project = projects[idx];
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.tech ? project.tech.join(', ') : 'N/A'}</p>
        ${project.screenshot ? `<img src="${project.screenshot}" alt="${project.title} screenshot" style="width:100%;border-radius:8px;margin:12px 0;">` : ''}
        <a href="${project.githubLink}" class="btn" target="_blank">View on GitHub</a>
    `;
    modal.style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', generateProjectCards);
// Modal close logic
function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close-modal').onclick = closeProjectModal;
    document.getElementById('project-modal').onclick = function(e) {
        if (e.target === this) closeProjectModal();
    };
});

// Theme Selector
const themes = {
    ubuntu: { background: '#300A24', text: '#FFFFFF', accent: '#DD4814' },
    atom: { background: '#282C34', text: '#ABB2BF', accent: '#61AFEF' },
    dracula: { background: '#282A36', text: '#F8F8F2', accent: '#BD93F9' },
    github: { background: '#b4b4b4', text: '#24292E', accent: '#000000' },
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
    const savedTheme = localStorage.getItem('selectedTheme') || 'dracula';
    document.getElementById('theme-selector').value = savedTheme;
    applyTheme(savedTheme);
});

async function updateDateTimeRegion() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); 
    const region = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("date-time-region").textContent = `${formattedDateTime} | ${region}`;
}
setInterval(updateDateTimeRegion, 1000);
updateDateTimeRegion();

// Contact form: build mailto link with pre-filled subject and body

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();
            const body = `Hello Sanjay,%0D%0A%0D%0AYou have received a new message from your portfolio contact form.%0D%0A%0D%0A----------------------------------------%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}%0D%0A----------------------------------------%0D%0A%0D%0AThanx,%0D%0APortfolio Manager`;
            const mailto = `mailto:sanjaykrish1212@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${body}`;
            window.open(mailto, '_blank');
        });
    }
});