import { icon_to_sub, sub_to_main,dis_edu, dis_skills, dis_pro, dis_soc} from './text.js';

window.onload = function() {
    window.addEventListener('resize', function(){
        if(window.innerWidth < 600 || window.innerHeight <600){
            displaySub();
            const head = document.querySelector('.header')
            head.style.fontSize = "15px"; 
            console.log("size changed")
            const subs = document.querySelector('.Sub-Icons')
        }
    });
}
function filterSkills() {
    // Declare variables
    var input, filter, titles, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    titles = document.querySelectorAll('.skills .title');

    // Loop through all the titles and hide those that don't match the search query
    titles.forEach(function(title) {
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            title.closest('.skills').style.display = ''; // Show the whole skill block
        } else {
            title.closest('.skills').style.display = 'none'; // Hide the whole skill block
        }
    });
  
}
document.addEventListener('input', filterSkills);
document.addEventListener('resize', displaySub);
// add the event click to the icons in the first page
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.Tab-Icons i');
    // collects all the icons and add an event click to them 
    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            // want to add subjects to Sub-Icons
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
    const maincontentElement = document.querySelector(".Main");
    console.log("MaincontentElement:", maincontentElement); 
    maincontentElement.style.opacity = '0';
    setTimeout(function() {
        maincontentElement.innerHTML = '';
        maincontentElement.style.textAlign = "left";
        content.forEach(item => {
            const paragraph = document.createElement('p');
            console.log("Paragraph:", paragraph, "with", item);
            paragraph.textContent = item;
            paragraph.style.margin = "0";
            paragraph.style.marginTop = "20px";
            paragraph.style.textAlign = "center";
            maincontentElement.appendChild(paragraph);
        });
        console.log("Goes to the div-main:", maincontentElement);
        maincontentElement.style.opacity = '1';
    }, 300);
}
// purpose is to display the subjects that are going to be added below
function displayTabs(tabs, text) {
    let content = "";
    for (let i = 0; i < tabs.length; i++) {
        content += `<p class='clickable' data-index='${i}'>${tabs[i]}</p>`;
    }
    text.innerHTML = content;
    const clickableParagraphs = document.querySelectorAll('.clickable');
    // searchs for subjects that have class clickable
    clickableParagraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            const clickedTag = paragraph.textContent;
            const key = Array.from(icon_to_sub.values()).flat().indexOf(clickedTag) + 1;
            const content = sub_to_main.get(key);
            const headerElement = document.querySelector(".header");
            if(key==1){
                dis_edu();
            }
            else if(key==2)
            {
                dis_skills();
            }
            else if(key==3)
            {
                dis_pro();
            }
            else if(key==4){
                dis_soc();
            }
            
            else{
                handleClick(content);
            }
            headerElement.style.textAlign = "center";
            headerElement.innerHTML = clickedTag;
        });
    });
}
// if user clicks on icon allows subject bar to appear
// then if user in media mode aka 600 width then change width to display subject tab better
function displaySub() {
    const subjects = document.querySelector('.Subjects');
    const main = document.querySelector('.Main');
    function applyStyles() {
        if (window.innerWidth < 600) {
            subjects.style.width = '25%';
            main.style.width = '75%';
        }

        else {
            subjects.style.width = '12%';
            main.style.width = '84%';
        }
        subjects.style.transition = '0.2s';
    }
    applyStyles(); // Initial call to applyStyles
}
