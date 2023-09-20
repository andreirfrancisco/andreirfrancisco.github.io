import { icon_to_sub , sub_to_main , intrdoction} from './text.js';

window.onload = function() {
    const elements = document.querySelectorAll(".header, .Main-Code");
    const maincontentElement = document.querySelector(".Main-Content");
  
    maincontentElement.textContent = "Learn more about Andrei and his 3 projects for data analysis.";
    maincontentElement.style.textAlign = "center";
    maincontentElement.style.fontSize = "40px"; // Change the font size to 24 pixels (adjust as needed)
    elements.forEach(element => {
        element.textContent = "";
        element.style.cssText = "text-align: center; justify-content: none; align-items: none; flex: none;";
    });
}
//get window.innerwidth to make sure page is full 

document.addEventListener("DOMContentLoaded", function() {
    // obtain the icons 
    const icons = document.querySelectorAll('.Tab-Icons i');
    // adds clicks to the icons
    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            const text = document.querySelector('.Sub-Icons');
            const iconId = parseInt(icon.id);
            if (icon_to_sub.has(iconId)) {
                const tabs = icon_to_sub.get(iconId);
                displayTabs(tabs, text);
                displaySub();
            } else {
                text.textContent = "Default Content";
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // obtain the icons 
    const icons = document.querySelectorAll('.Sub-Icons i');
    // adds clicks to the icons
    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            const text = document.querySelector('.Sub-Icons');
            const iconId = parseInt(icon.id);
            if (sub_to_main.has(iconId)) {
                const tabs = icon_to_sub.get(iconId);
                displayTabs(tabs, text);
                displaySub();
            } else {
                text.textContent = "Default Content";
            }
        });
    });
});

function displayTabs(tabs, text) {
    let content = "";
    for (let i = 0; i < tabs.length; i++) {
        content += "<p>" + tabs[i] + "</p>";
    }
    text.innerHTML = content;
}

function displaySub() {
    let style_1 = document.querySelector('.Subjects');
    let style_2 = document.querySelector('.Main');
    if (style_1.style.width === '12%') {
        style_1.style.width = '0';
        style_2.style.width = '96%';
    } else {
        style_1.style.width = '12%';
        style_2.style.width = '84%';
    }
    style_1.style.transition = '0.2s';
}
