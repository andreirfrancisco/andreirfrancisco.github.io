// to make the website js easier to read

// default page is when user enters sets content to blank
export function default_page(){
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
export const introduction = "Welcome to Andrei's Website ";  
// maps to transition pages
export const icon_to_sub = new Map([
    [1, ["Education", "Skills", "Projects", "Socials"]],
    [2, ["Database", "Queries", "Conversions", "Update Database"]],
    [3, ["Programs Needed", "Cleaning Data", "Figures", "Model Preparation"]],
    [4, ["Libraries/Programs Needed", "HTML", "Styles", "Create Dashboard"]]
]);

export const sub_to_main = new Map  ([  
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
