function createSearchInNewTabButton() {
    const YT_VOICE_SEARCH = document.getElementById("voice-search-button");
    const YT_STYLE = getComputedStyle(YT_VOICE_SEARCH);
    const YT_CENTER = document.getElementById("center");

    const searchInNewTab = document.createElement("div");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const color = encodeURIComponent(YT_STYLE.getPropertyValue("--yt-spec-icon-inactive"));
    img.src = `data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cdefs%3E%3Cstyle%3E.b%20%7Bfill%3A%20${color}%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%3E%3Cpath%20class%3D%22b%22%20d%3D%22M11.7%2C10.3c.4-.5.72-1.08.95-1.72.18-.51.29-1.03.33-1.58h-2.01c-.1%2C1.04-.53%2C1.93-1.28%2C2.69-.88.87-1.94%2C1.31-3.19%2C1.31s-2.31-.44-3.19-1.31c-.87-.88-1.31-1.94-1.31-3.19s.44-2.31%2C1.31-3.19c.76-.75%2C1.65-1.18%2C2.69-1.28V.02c-1.6.1-2.97.73-4.11%2C1.87C.63%2C3.15%2C0%2C4.68%2C0%2C6.5s.63%2C3.35%2C1.89%2C4.61%2C2.79%2C1.89%2C4.61%2C1.89c.73%2C0%2C1.42-.12%2C2.08-.35.64-.23%2C1.22-.55%2C1.72-.95l6.3%2C6.3%2C1.4-1.4-6.3-6.3Z%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22b%20c%22%20d%3D%22M6.99%2C7l-.99-.99L10.59%2C1.42h-2.55V0h4.96v4.96h-1.42v-2.55l-4.59%2C4.59Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E`;
    button.appendChild(img);

    button.type = "button";
    button.classList.add("yt-spec-button-shape-next", "yt-spec-button-shape-next--text", "yt-spec-button-shape-next--mono", "yt-spec-button-shape-next--size-m", "yt-spec-button-shape-next--icon-only-default");
    button.onclick = () => {
        window.open(`https://www.youtube.com/results?search_query=${document.querySelector('.yt-searchbox-input').value}`);
    };
    searchInNewTab.appendChild(button);

    searchInNewTab.style.borderRadius = "100px";
    searchInNewTab.style.marginLeft = "12px";
    searchInNewTab.style.backgroundColor = YT_STYLE.getPropertyValue("--yt-spec-additive-background");
    YT_CENTER.appendChild(searchInNewTab);
}
setTimeout(() => {
    try {
        createSearchInNewTabButton();
    } catch (e) {
        console.error(`faild search_button \n${e}`);
        setTimeout(() => {
            createSearchInNewTabButton();
        }, 2000);
    }
}, 500);  
