import { default_page, icon_to_sub, sub_to_main } from './text.js';

window.onload = function () {
    let style_1 = document.querySelector('.Tab');
    let style_2 = document.querySelector('.Subjects');
    let style_3 = document.querySelector('.Main');
    default_page();
}

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.Tab-Icons i');

    icons.forEach(icon => {
        icon.addEventListener("click", function () {
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

function handleClick(content) {
    const maincontentElement = document.querySelector(".Main-Content");

    if (content) {
        maincontentElement.style.opacity = '0';
        setTimeout(function () {
            maincontentElement.innerHTML = '';

            content.forEach(item => {
                const paragraph = document.createElement('p');
                paragraph.textContent = item;
                maincontentElement.appendChild(paragraph);
            });

            maincontentElement.style.opacity = '1';
        }, 300);
    }
}

function displayTabs(tabs, text) {
    let content = "";
    for (let i = 0; i < tabs.length; i++) {
        content += `<p class='clickable' data-index='${i}'>${tabs[i]}</p>`;
    }

    text.innerHTML = content;

    const clickableParagraphs = document.querySelectorAll('.clickable');

    clickableParagraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function () {
            const clickedTag = paragraph.textContent;
            const key = Array.from(icon_to_sub.values()).flat().indexOf(clickedTag) + 1;

            if (key > 0) {
                const content = sub_to_main.get(key);
                handleClick(content);
                const headerElement = document.querySelector(".header");
                headerElement.innerHTML = clickedTag;
            }
        });
    });
}

function displaySub() {
    let style_1 = document.querySelector('.Subjects');
    let style_2 = document.querySelector('.Main');

    let mediaQuery = window.matchMedia('(max-width: 768px)'); // Change the media query to your desired condition

    function applyStyles() {
        if (style_1.style.width === '12%') {
            style_1.style.width = '0';
            style_2.style.width = '96%';
            default_page();
        } else {
            style_1.style.width = '12%';
            style_2.style.width = '84%';
        }
        style_1.style.transition = '0.2s';
    }

  
}
