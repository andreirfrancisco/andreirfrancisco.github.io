import {
	default_page,
	icon_to_sub,
	sub_to_main
} from './text.js';

window.onload = function() {
	let style_1 = document.querySelector('.Tab');
let style_2 = document.querySelector('.Subjects');
let style_3 = document.querySelector('.Main');
let page = document.querySelector('.page');

page.style.height = window.innerHeight + 'px';
style_1.style.height = '100%';
style_2.style.height = '100%';
style_3.style.height = '100%';

	default_page();
}

document.addEventListener("DOMContentLoaded", function() {
	const icons = document.querySelectorAll('.Tab-Icons i');

	icons.forEach(icon => {
		icon.addEventListener("click", function() {
			const text = document.querySelector('.Sub-Icons');
			// console.log("TEXT:" , text);
			const iconId = parseInt(icon.id);
			if (icon_to_sub.has(iconId)) {
				const tabs = icon_to_sub.get(iconId);
				// console.log("Tabs:", tabs);
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
	console.log("MaincontentElement:", maincontentElement); 
	if (content) {
		maincontentElement.style.opacity = '0';
		setTimeout(function() {
			maincontentElement.innerHTML = '';
			maincontentElement.style.textAlign = "left";
				// need to edit this for specifc content
			content.forEach(item => {
				const paragraph = document.createElement('p');
				console.log("Paragraph:", paragraph, "with", item);
				paragraph.textContent = item;
				paragraph.style.margin = "0";
				maincontentElement.appendChild(paragraph);
			});
				console.log("Goes to the div-main:", maincontentElement);
			maincontentElement.style.opacity = '1';
		}, 300);
	}
}
function first_icon(text,key) { 
    const parentElement = document.querySelector(".Main-Content"); 
	parentElement.style.backgroundcolorcolor = 'white';	
	parentElement.innerHTML = '';	
	const ucla_img = "tab_images/ucla.jpg"; 
	const coursera_img = "tab_images/coursera.png"; 
	const images = [ucla_img, coursera_img]; // Fixed the images array
	if(key==1){
		setTimeout(function() {
		const box = document.createElement('div'); 
		box.style.textAlign = "center"; 
		box.classList.add('box'); 
		// Loop through the images and text
		for (let i = 0; i < images.length; i++) { 
			const imgElement = document.createElement('img'); 
			imgElement.src = images[i]; // Set the src attribute
	
			const school = document.createElement('p'); 
			school.style.fontSize = "20px";
			school.textContent = text[i * 2]; // Adjusted text index
			const date = document.createElement('p'); 
			date.textContent = text[i * 2 + 1]; // Adjusted text index
			date.style.fontSize = "20px";
			box.appendChild(imgElement); 
			box.appendChild(school); 
			box.appendChild(date); 
		}
	
		parentElement.appendChild(box); 
		console.log("First_icon", text[0]); }, 300 )

	}
	else if (key == 2) {
      handleClick(text);
    } 
	else if (key == 3) {
        handleClick(text);
    } 
	else if (key == 4) {
        handleClick(text);
    } 
	else {
        console.log("error");
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
        paragraph.addEventListener('click', function() {
            const clickedTag = paragraph.textContent;
            console.log("CLICKED TAG:", clickedTag);
            const key = Array.from(icon_to_sub.values()).flat().indexOf(clickedTag) + 1;
            console.log("Key in icon_to_sub:", key);
            console.log("Content with sub_to_main:", sub_to_main);
            const content = sub_to_main.get(key);
            console.log("Key:", key , "with", content);
            const headerElement = document.querySelector(".header");
            console.log("Header Element:", headerElement); 
            if (key <= 4) {
                console.log("First Tags");
                first_icon(content,key);
                headerElement.innerHTML = clickedTag;
            } else if (key > 4 && key < 8) {
                console.log("Second Tags");
				handleClick(content);
                headerElement.innerHTML = clickedTag;
            } else if (key > 8 && key < 12) {
                console.log("Third Tags");
				handleClick(content);
                headerElement.innerHTML = clickedTag;
            } else {
                console.log("Fourth Tags");
				handleClick(content);
                headerElement.innerHTML = clickedTag;
            }
        });
    });
}
function displaySub() {
	let style_1 = document.querySelector('.Subjects');
	let style_2 = document.querySelector('.Main');
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
	// Initial call to applyStyles
	applyStyles();
}
