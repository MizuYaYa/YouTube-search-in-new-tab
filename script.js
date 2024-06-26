function create_search_button() {
    let center_element = document.getElementById("center");
    let new_center_element = document.createElement("div");
    center_element.appendChild(new_center_element);
    new_center_element.outerHTML = '<div style="border-radius: 100px;margin-left: 12px;background-color: var(--yt-spec-additive-background);"><button type="button" class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default" onclick="window.open(`https://www.youtube.com/results?search_query=${document.querySelector(\'#search.ytd-searchbox\').value}`)"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18"><defs><style>.b {fill: var(--yt-spec-icon-inactive);}</style></defs><g><path class="b" d="M11.7,10.3c.4-.5.72-1.08.95-1.72.18-.51.29-1.03.33-1.58h-2.01c-.1,1.04-.53,1.93-1.28,2.69-.88.87-1.94,1.31-3.19,1.31s-2.31-.44-3.19-1.31c-.87-.88-1.31-1.94-1.31-3.19s.44-2.31,1.31-3.19c.76-.75,1.65-1.18,2.69-1.28V.02c-1.6.1-2.97.73-4.11,1.87C.63,3.15,0,4.68,0,6.5s.63,3.35,1.89,4.61,2.79,1.89,4.61,1.89c.73,0,1.42-.12,2.08-.35.64-.23,1.22-.55,1.72-.95l6.3,6.3,1.4-1.4-6.3-6.3Z"></path><path class="b c" d="M6.99,7l-.99-.99L10.59,1.42h-2.55V0h4.96v4.96h-1.42v-2.55l-4.59,4.59Z"></path></g></svg></button></div>';
}
setTimeout(() => {
    try {
        create_search_button();
    } catch (e) {
        console.error(`faild search_button \n${e}`);
        setTimeout(() => {
            create_search_button();
        }, 2000);
    }
}, 500);  
