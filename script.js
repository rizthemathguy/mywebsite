document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const otherSocialsBtn = document.getElementById('other-socials-btn');
    const otherSocialsModal = document.getElementById('other-socials-modal');
    const closeBtn = document.querySelectorAll('.close-btn');
    const doubleClickModal = document.getElementById('double-click-modal');
    const carouselImages = document.querySelectorAll('.carousel-item img');
    const backToTopBtn = document.getElementById('back-to-top');

    // Function to update dark mode button text
    function updateButtonText() {
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Check for dark mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Initialize button text on load
    updateButtonText();

    // Dark mode toggle event
    darkModeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        }
        updateButtonText();
    });

    // Modal display logic
    otherSocialsBtn.addEventListener('click', function () {
        otherSocialsModal.style.display = 'block';
    });

    closeBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            otherSocialsModal.style.display = 'none';
            doubleClickModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (e) {
        if (e.target === otherSocialsModal) {
            otherSocialsModal.style.display = 'none';
        }
    });

    // Double-click modal
    carouselImages.forEach(function (img) {
        img.addEventListener('dblclick', function () {
            doubleClickModal.style.display = 'block';
        });
    });

    // Back to Top button logic
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox Effect for Photography
    const images = document.querySelectorAll('.photography img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = 0;
            lightbox.style.left = 0;
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            document.body.appendChild(lightbox);

            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            lightbox.appendChild(img);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
    // Game State
const gameState = {
    points: 0,
    level: 1,
    achievements: [],
    quests: [],
    avatar: 'default',
    storyProgress: 0,
    lastVisit: null
};

// Achievement definitions
const achievements = {
    first_visit: { name: "New Explorer", desc: "Visit the site for the first time", points: 100, icon: "fa-map" },
    dark_mode: { name: "Dark Knight", desc: "Enable dark mode", points: 50, icon: "fa-moon" },
    project_view: { name: "Project Hunter", desc: "View all projects", points: 150, icon: "fa-code" },
    about_visit: { name: "About Explorer", desc: "Visit the About section", points: 75, icon: "fa-user" },
    photo_explorer: { name: "Photo Fan", desc: "View the photography section", points: 75, icon: "fa-camera" },
    skill_checker: { name: "Skill Inspector", desc: "Check out the skills section", points: 75, icon: "fa-chart-bar" },
    daily_visitor: { name: "Daily Visitor", desc: "Visit the site on consecutive days", points: 50, icon: "fa-calendar-day" },
    cookie_finder: { name: "Cookie Finder", desc: "Find the hidden cookie", points: 200, icon: "fa-cookie" }
};

// Quest definitions
const quests = [
    { 
        id: 'explore_about', 
        title: "Learn About Riz", 
        action: "Visit About section", 
        reward: 100,
        required: ['about_visit']
    },
    { 
        id: 'view_projects', 
        title: "Project Explorer", 
        action: "Check out all projects", 
        reward: 200,
        required: ['project_view']
    },
    { 
        id: 'complete_profile', 
        title: "Complete Profile", 
        action: "Visit all main sections", 
        reward: 300,
        required: ['about_visit', 'project_view', 'photo_explorer', 'skill_checker']
    },
    { 
        id: 'dark_mode_user', 
        title: "Dark Mode User", 
        action: "Enable dark mode", 
        reward: 100,
        required: ['dark_mode']
    }
];

// Story progression
const story = [
    { trigger: 0, text: "Welcome explorer! Let's discover Riz's world together." },
    { trigger: 100, text: "You're getting the hang of this! Check out his projects next." },
    { trigger: 300, text: "Great progress! Have you seen his photography skills yet?" },
    { trigger: 500, text: "You're becoming quite the expert on Riz's work!" },
    { trigger: 1000, text: "Master Explorer! You've uncovered most of Riz's portfolio secrets." }
];

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const gameMenuBtn = document.getElementById('game-menu-btn');
    const gameMenu = document.getElementById('game-menu');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const avatarOptions = document.querySelectorAll('.avatar-option');

    // Initialize game
    initGame();

    // Game menu button
    gameMenuBtn.addEventListener('click', function() {
        gameMenu.style.display = 'block';
    });

    // Tab switching in game menu
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Avatar selection
    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            const avatar = option.getAttribute('data-avatar');
            gameState.avatar = avatar;
            saveGame();
            
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            showToast(`Avatar changed to ${option.querySelector('p').textContent}!`);
        });
    });

    // Initialize avatar selection
    document.querySelector(`.avatar-option[data-avatar="${gameState.avatar}"]`).classList.add('selected');

    // Section observers for achievements and quests
    const aboutObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            unlockAchievement('about_visit');
            checkQuestCompletion('explore_about');
            progressStory();
        }
    }, {threshold: 0.5});
    aboutObserver.observe(document.getElementById('about-me-section'));

    const projectsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            checkQuestCompletion('view_projects');
            progressStory();
        }
    }, {threshold: 0.5});
    projectsObserver.observe(document.getElementById('projects-section'));

    const photoObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            unlockAchievement('photo_explorer');
            checkQuestCompletion('complete_profile');
            progressStory();
        }
    }, {threshold: 0.5});
    photoObserver.observe(document.getElementById('photography-section'));

    const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            unlockAchievement('skill_checker');
            checkQuestCompletion('complete_profile');
            progressStory();
        }
    }, {threshold: 0.5});
    skillsObserver.observe(document.getElementById('skills-section'));

    // Dark mode achievement
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            unlockAchievement('dark_mode');
            checkQuestCompletion('dark_mode_user');
        }
    });

    // Cookie finder achievement
    document.querySelectorAll('.carousel-item img').forEach(img => {
        img.addEventListener('dblclick', function() {
            unlockAchievement('cookie_finder');
        });
    });
});

// Initialize game
function initGame() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        Object.assign(gameState, JSON.parse(savedState));
    } else {
        unlockAchievement('first_visit');
    }
    
    checkDailyLogin();
    updateGameUI();
    startStory();
}

// Save game state
function saveGame() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Update all game UI elements
function updateGameUI() {
    document.getElementById('game-points').textContent = gameState.points;
    document.getElementById('game-level').textContent = gameState.level;
    updateAchievementsUI();
    updateQuestsUI();
    calculateLevel();
}

// Daily login bonus
function checkDailyLogin() {
    const today = new Date().toDateString();
    if (gameState.lastVisit !== today) {
        gameState.lastVisit = today;
        gameState.points += 50;
        unlockAchievement('daily_visitor');
        showToast('+50 points for daily login!');
        saveGame();
    }
}

// Achievement system
function unlockAchievement(id) {
    if (!gameState.achievements.includes(id)) {
        gameState.achievements.push(id);
        const achievement = achievements[id];
        gameState.points += achievement.points;
        showAchievementPopup(achievement);
        saveGame();
        updateGameUI();
    }
}

function updateAchievementsUI() {
    const container = document.getElementById('achievements-container');
    if (container) {
        container.innerHTML = gameState.achievements.map(id => {
            const achievement = achievements[id];
            return `
                <div class="badge">
                    <i class="fas ${achievement.icon}"></i>
                    <span>${achievement.name}</span>
                </div>
            `;
        }).join('');
    }
}

function showAchievementPopup(achievement) {
    const popup = document.createElement('div');
    popup.className = 'toast';
    popup.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${achievement.icon}" style="color: #ffc107; font-size: 1.5rem;"></i>
            <div>
                <h4 style="margin: 0;">Achievement Unlocked!</h4>
                <p style="margin: 5px 0;">${achievement.name}</p>
                <small>+${achievement.points} points</small>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}

// Quest system
function checkQuestCompletion(questId) {
    const quest = quests.find(q => q.id === questId);
    if (quest && !gameState.quests.includes(questId)) {
        const requirementsMet = quest.required.every(req => 
            gameState.achievements.includes(req)
        );
        
        if (requirementsMet) {
            gameState.quests.push(questId);
            gameState.points += quest.reward;
            showToast(`Quest complete! +${quest.reward} points`);
            saveGame();
            updateGameUI();
        }
    }
}

function updateQuestsUI() {
    const container = document.getElementById('quests-container');
    if (container) {
        container.innerHTML = quests.map(quest => {
            const isCompleted = gameState.quests.includes(quest.id);
            const requirementsMet = quest.required.every(req => 
                gameState.achievements.includes(req)
            );
            
            return `
                <div class="quest-item ${isCompleted ? 'completed' : ''}">
                    <div>
                        <h4>${quest.title}</h4>
                        <p>${quest.action}</p>
                        ${!isCompleted && requirementsMet ? '<small>Ready to complete!</small>' : ''}
                    </div>
                    <div class="quest-reward">+${quest.reward} pts</div>
                </div>
            `;
        }).join('');
    }
}

// Story progression
function startStory() {
    showStoryMessage(story[0].text);
}

function progressStory() {
    const nextChapter = story.find(s => s.trigger > gameState.storyProgress);
    if (nextChapter && gameState.points >= nextChapter.trigger) {
        gameState.storyProgress = nextChapter.trigger;
        showStoryMessage(nextChapter.text);
    }
}

function showStoryMessage(text) {
    const popup = document.createElement('div');
    popup.className = 'toast';
    popup.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-scroll" style="color: #2196F3; font-size: 1.5rem;"></i>
            <div>
                <p style="margin: 0;">${text}</p>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 4000);
}

// Level progression
function calculateLevel() {
    const pointsNeeded = Math.pow(gameState.level, 2) * 100;
    if (gameState.points >= pointsNeeded) {
        gameState.level++;
        showLevelUpPopup();
        saveGame();
    }
}

function showLevelUpPopup() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; overflow: hidden; pointer-events: none;">
            <div style="position: absolute; width: 10px; height: 10px; background: rgba(255,255,255,0.5); border-radius: 50%; 
                animation: confetti 2s ease-out forwards;"></div>
        </div>
        <h2 style="margin-top: 0;">Level Up!</h2>
        <p style="font-size: 1.5rem;">You've reached level <strong>${gameState.level}</strong></p>
        <i class="fas fa-trophy" style="font-size: 3rem; color: #FFC107;"></i>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
});
