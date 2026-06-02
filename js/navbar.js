// Bottom Navigation Bar Implementation
document.addEventListener("DOMContentLoaded", () => {
    // 1. CSS Styles Inject Karna (Pehle jaisa hi rahega)
    const styles = `
        :root {
            --nav-bg: rgba(255, 255, 255, 0.85);
            --nav-shadow: 2px 4px 6px rgba(31, 38, 135, 0.07);
            --nav-border: rgba(255, 255, 255, 0.18);
            --text-muted: #666;
            --color-home: #7F56D9; --bg-home: #F4EBFF;
            --color-likes: #E31B54; --bg-likes: #FEE4E2;
            --color-search: #DC6803; --bg-search: #FEF0C7;
            --color-profile: #0694A2; --bg-profile: #E0F2FE;
        }
        .custom-bottom-nav-container { position: fixed; bottom: 0; left: 0; width: 100%; display: flex; justify-content: center; padding: 12px; box-sizing: border-box; z-index: 9999; background: transparent; pointer-events: none; }
        .custom-navbar { pointer-events: auto; background: var(--nav-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--nav-border); box-shadow: var(--nav-shadow); border-radius: 24px; width: 100%; max-width: 450px; height: 64px; display: flex; align-items: center; justify-content: space-around; padding: 0 12px; box-sizing: border-box; }
        .nav-item { display: flex; align-items: center; justify-content: center; text-decoration: none; color: var(--text-muted); padding: 10px 14px; border-radius: 18px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600; gap: 6px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); -webkit-tap-highlight-color: transparent; }
        .nav-item svg { width: 22px; height: 22px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .nav-item span { display: none; opacity: 0; transform: translateX(-5px); transition: all 0.3s ease; }
        .nav-item.active span { display: inline-block; opacity: 1; transform: translateX(0); }
        .nav-item.active[data-page="index"] { color: var(--color-home); background: var(--bg-home); }
        .nav-item.active[data-page="likes"] { color: var(--color-likes); background: var(--bg-likes); }
        .nav-item.active[data-page="search"] { color: var(--color-search); background: var(--bg-search); }
        .nav-item.active[data-page="profile"] { color: var(--color-profile); background: var(--bg-profile); }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // 2. HTML Structure
    const navbarHTML = `
        <div class="custom-bottom-nav-container">
            <nav class="custom-navbar">
                <a onclick="window.location.reload()" class="nav-item" data-page="index">
                    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span>Home</span>
                </a>
                <a href="categories.html" class="nav-item" data-page="category">
                    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>Likes</span>
                </a>
                <a href="settings.html" class="nav-item" data-page="search">
                    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span>Search</span>
                </a>
                <a href="settings.html" class="nav-item" data-page="setting">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>Profile</span>
                </a>
            </nav>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navbarHTML);

    // ==========================================
    // NAYA LOGIC: Body ke attribute se check karna
    // ==========================================
    const activePage = document.body.getAttribute("data-current-page") || "index";

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        if (item.getAttribute("data-page") === activePage) {
            item.classList.add("active");
        }
    });
});

