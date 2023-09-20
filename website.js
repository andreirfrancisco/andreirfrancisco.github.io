import { education, skills, projects, tabs_1, tabs_2, tabs_3, tabs_4 } from "./text.js";
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.Tab-Icons i');
    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            const text = document.querySelector('.Sub-Icons');
            switch(icon.id) {
                case '1':
                    displayTabs(tabs_1, text);
                    break;
                case '2':
                    displayTabs(tabs_2, text);
                    break;
                case '3':
                    displayTabs(tabs_3, text);
                    break;
                case '4':
                    displayTabs(tabs_4, text);
                    break;
                default:
                    text.textContent = "Default Content";
            }
            displaySub();
        });
    });
});


// display main add 
// function displayMain() {

// }


function displayTabs(tabs, text) {
    var content = "";
    for (let i = 0; i < tabs.length; i++) {
        content += "<p>" + tabs[i] + "</p>";
    }
    text.innerHTML = content;
}

function displaySub() {
    let style_1 = document.querySelector('.Subjects');
    let style_2 = document.querySelector('.Main');

    if (style_1.style.width === '16%') {
        style_1.style.width = '0';
        style_2.style.width = '96%';
    } else {
        style_1.style.width = '16%';
        style_2.style.width = '80%';
    }

    style_1.style.transition = '0.5s';
}


