/* Importing Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400&display=swap');

/* Default (Light Mode) */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
    color: #000;
}

/* Navbar Styles */
.navbar {
    margin-bottom: 0;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand, .nav-link {
    font-weight: bold;
    color: #000;
}

/* Header Section */
.header-section {
    padding: 100px 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.header-section .text-container h1 {
    font-family: 'Montserrat', sans-serif;
}

/* Skills Section */
.skills {
    text-align: center;
    padding: 50px 0;
}

.skills h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
}

.skill-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
}

.skill {
    width: 100%;
    max-width: 300px;
}

.skill h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
}

.progress {
    background-color: #e0e0e0;
    border-radius: 25px;
    overflow: hidden;
    height: 20px;
}

.progress-bar {
    background-color: #007bff;
    height: 100%;
    border-radius: 25px;
}

/* Text Container */
.text-container {
    margin-right: 30px;
}

/* Image Container Styles */
.image-container img {
    max-width: 100%;
    border-radius: 50%;
    transition: transform 0.3s ease, animation 2s;
}

.image-container img:hover {
    transform: scale(1.05);
    animation: spin 2s linear infinite;
}

/* Spinning Animation */
@keyframes spin {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
}

/* About Me Section */
.about-me {
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f8f9fa;
    padding: 2rem;
    flex-direction: row-reverse;
}

.about-me .text-container {
    max-width: 600px;
    text-align: left;
    margin-left: 40px;
}

.about-me h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
}

.about-me p {
    font-size: 1.25rem;
}

/* Projects Section */
.projects {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}

.projects h3 {
    font-size: 1.5rem;
}

.projects h1 {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

/* Photography Section */
.photography {
    height: 100vh;
    padding: 50px 20px;
    background-color: #ffffff;
}

.carousel-control-prev, .carousel-control-next {
    width: 5%;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
    background-color: #000;
    border-radius: 50%;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
}

.modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Footer Styles */
footer {
    padding: 20px;
    background-color: #343a40;
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Back to Top Button */
#back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
}

/* Dark Mode Styles */
body.dark-mode {
    background-color: #333;
    color: #f4f4f4;
}

body.dark-mode .navbar, 
body.dark-mode .header-section, 
body.dark-mode .about-me, 
body.dark-mode .projects, 
body.dark-mode .photography {
    background-color: #444;
}

body.dark-mode .modal-content {
    background-color: #555;
    color: #f4f4f4;
}

/* Dark Mode Toggle Button */
#dark-mode-toggle {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

#dark-mode-toggle:hover {
    background-color: #333;
}

.project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

html {
    scroll-behavior: smooth;
}

/* Lightbox for Photography Section */
.photography img {
    cursor: pointer;
    transition: transform 0.3s ease;
}
.photography img:hover {
    transform: scale(1.05);
}

/* Footer Enhancements */
footer .social-icons a {
    color: #fff;
    margin: 0 10px;
    transition: color 0.3s ease;
}
footer .social-icons a:hover {
    color: #007bff;
}

/* Dark Mode Toggle Animation */
#dark-mode-toggle {
    transition: background-color 0.3s ease, transform 0.3s ease;
}
#dark-mode-toggle:hover {
    transform: rotate(180deg);
}
/* Game HUD Styles */
#game-hud {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 15px;
    background: rgba(255,255,255,0.9);
    padding: 10px 15px;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
}

.game-stat {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
}

#game-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
}

/* Badges */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
    margin-top: 20px;
}

.badge {
    background: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease;
}

.badge:hover {
    transform: scale(1.05);
}

.badge i {
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: #ffc107;
}

/* Toast notifications */
.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1001;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    animation: slideIn 0.5s, fadeOut 0.5s 2.5s forwards;
}

@keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

/* Level Up Popup */
.level-up-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4CAF50;
    color: white;
    padding: 20px 30px;
    border-radius: 10px;
    z-index: 1002;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: popIn 0.5s;
}

@keyframes popIn {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

/* Game Menu Tabs */
.tab-container {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
}

.tab-btn {
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

.tab-btn.active {
    border-bottom: 3px solid #007bff;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Avatar Customization */
.avatar-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 20px;
}

.avatar-option {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.avatar-option:hover {
    border-color: #007bff;
    transform: scale(1.05);
}

.avatar-option.selected {
    border-color: #007bff;
    background-color: #e7f1ff;
}

.avatar-option img {
    width: 100%;
    border-radius: 50%;
}

/* Quest Items */
.quest-item {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quest-item.completed {
    background: #e8f5e9;
}

.quest-reward {
    color: #4CAF50;
    font-weight: bold;
}

/* Dark mode adaptations */
body.dark-mode .badge {
    background: #444;
    color: white;
}

body.dark-mode .quest-item {
    background: #555;
    color: white;
}

body.dark-mode .avatar-option {
    background: #555;
    border-color: #666;
}

body.dark-mode .avatar-option.selected {
    background: #334;
}
