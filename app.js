const pro_names = [
    "Backend" ,// 1 > backend include Python / Django
    "Frontend",  // 2 > frontend Javascript / React
    "Databases", // 3 > database MySQL / JSON
    "Data Analytics", // 4 Data Analytics Tools Google Software
    "Data Science / Machine Learning", // 5 Machine learning
    "Cheatsheets" // 6 Other Topics
]; 
const pro_descript = [
    "Learn Backend with Python/Django with Projects", 
    "Learn Frontend JavaScript/React with Projects " ,
    "Learn Database with MySQL and JSON" , 
    "Learn Data Analytics with DA Tools Google Software", 
    "Learn Data Science / Machine Learning with Pytorch/Pandas", 
    "General Cheatsheets"

];

const coming_s = ["COMING SOON!","COMING SOON!","COMING SOON!","COMING SOON!","COMING SOON!","COMING SOON!",]

const pro_links = [
    "PDB" , 
    "FJR", 
    "MJD", 
    "AGD",
    "PPDS" ,
    "GC"
]; 
function displayCard() {
    titles = document.querySelectorAll('.pro .pro_card .pro_detail');
    descs = document.querySelectorAll('.pro .pro_card .pro_desc')
    titles.forEach((title, index) => {
        title.textContent = pro_names[index];
    });
    descs.forEach(
        (desc, index)=>{
            desc.textContent = coming_s[index];
        }
    )

    console.log(titles);
}
document.addEventListener('DOMContentLoaded', displayCard)



function MYmedia(x) {
    if (x.matches) { // If media query matches
        console.log("PHONE");
        document.querySelector('.row_1').style.flexDirection = 'column';
        document.querySelectorAll('.pro_card').forEach(card => {
            card.style.flexDirection = 'column';
        });
    } else {
        console.log("COMP");
        document.querySelector('.row_1').style.flexDirection = 'row';
        document.querySelectorAll('.pro_card').forEach(card => {
            card.style.flexDirection = 'row';
        });
    }
}

var media = window.matchMedia("(max-width: 700px)");
MYmedia(media); // Call listener function at run time
media.addListener(MYmedia); // Attach listener function on state changes

// comp 
// row_1 : row
// item_1 : row

// pro_row : row
