// to make the website js easier to read

// default page is when user enters sets content to blank
 function default_page(){
    if (window.innerWidth >= window.innerHeight * 0.84) {
        const elements = document.querySelectorAll(".header, .Main-Code");
        const maincontentElement = document.querySelector(".Main-Content");
        maincontentElement.textContent = introduction;
        maincontentElement.style.textAlign = "center";
        maincontentElement.style.fontSize = "40px";
        elements.forEach(element => {
            element.textContent = "";
            element.style.cssText = "text-align: center; justify-content: none; align-items: none; flex: none;";
        });
    }
};
 const introduction = "Welcome to Andrei's Website ";  
// maps to transition pages
 const icon_to_sub = new Map([
    [1, ["Education", "Skills", "Projects", "Socials"]],
    [2, ["Database", "Queries", "Conversions", "Update Database"]],
    [3, ["Programs Needed", "Cleaning Data", "Figures", "Model Preparation"]],
    [4, ["Libraries/Programs Needed", "HTML", "Styles", "Create Dashboard"]]
]);

 const sub_to_main = new Map  ([  
    [1, ["UCLA Economics B.A", "June 2023" , "Coursera IBM Data Analytics", "August 2023"]],
    [2, ["Python : 2years", "R:2years", "Tableau:1 year", "Javascript : 2 months", "Microsoft Office : 2 years", "Statistics : 2 years" , "MySQL : 1 year"]],
    [3, ["Website", "You are looking at Andrei's Website made in September 2023" , "Past Reports such as classification, forecasts, and many other click on github"]],
    [4, ["MySQL Key 1", "MySQL Key 2", "MySQL Key 3", "MySQL Key 4"]],
    [5, ["Cleaning Key 1", "Cleaning Key 2", "Cleaning Key 3", "Cleaning Key 4"]],
    [6, ["Dashboard Key 1", "Dashboard Key 2", "Dashboard Key 3", "Dashboard Key 4"]],
    [7, ["Dashboard Key 5", "Dashboard Key 6", "Dashboard Key 7", "Dashboard Key 8"]],
    [8, ["Cleaning Key 5", "Cleaning Key 6", "Cleaning Key 7", "Cleaning Key 8"]],
    [9, ["Cleaning Key 9", "Cleaning Key 10", "Cleaning Key 11", "Cleaning Key 12"]],
    [10, ["MySQL Key 5", "MySQL Key 6", "MySQL Key 7", "MySQL Key 8"]],
    [11, ["MySQL Key 9", "MySQL Key 10", "MySQL Key 11", "MySQL Key 12"]],
    [12, ["Dashboard Key 9", "Dashboard Key 10", "Dashboard Key 11", "Dashboard Key 12"]],
    [13, ["Dashboard Key 13", "Dashboard Key 14", "Dashboard Key 15", "Dashboard Key 16"]],
    [14, ["Cleaning Key 13", "Cleaning Key 14", "Cleaning Key 15", "Cleaning Key 16"]],
    [15, ["MySQL Key 13", "MySQL Key 14", "MySQL Key 15", "MySQL Key 16"]],
    [16, ["Insert Later"]]
    ]);


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

   
 // Change the media query to your desired condition

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
