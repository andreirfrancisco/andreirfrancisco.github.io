// to make the website js easier to read

// default page is when user enters sets content to blank

export const introduction = "Welcome to Andrei's Website ";  
// maps to transition pages
export const icon_to_sub = new Map([
    [1, ["Education", "Skills", "Projects", "Socials"]],
    [2, ["Database", "Queries", "Conversions", "Update Database"]],
    [3, ["Programs Needed", "Cleaning Data", "Figures", "Model Preparation"]],
    [4, ["Libraries Needed", "HTML", "Styles", "Create Dashboard"]]
]);


export const sub_to_main = new Map  ([  
    [1, ["University of California Los Angeles, Economics B.A", "June 2023" , "Coursera IBM Data Analytics", "August 2023"]],
    [2, ["Python: 2years", "R: 2years", "Tableau: 1 year", "Javascript: 2 months", "Microsoft Office: 2 years", "Statistics : 2 years" , "MySQL : 1 year"]],
    [3, ["Website", "This website was made with Javacscript, HTML, and CSS. Users can learn more about Andrei and eventually organize Python Dataframes, organize their database, and create dashboard with Python's Library Dash." , " IBM Capstone Project ", "For the IBM Data Analyst Certfication, I was tasked to create a presentation slide. I used Python, IBM Congos Analytics , Microsoft Office Slides and APIs such as BeautifulSoup to obtain the data and create a final project.",  "Past Data Analysis Reports", "During my time at UCLA, I had completed multiple data analysis reports whether it was about multi dimension regression, classification, forecasting, statistical models like Holt Winters, etc. They can be asked upon request."]],
    [4, ["Github : https://github.com/andreirfrancisco", "Website: https://andreirfrancisco.github.io/ "]],
    [5, ["Coming Soon Feature", "Expected October"]],
    [6, ["Coming Soon Feature", "Expected October"]],
    [7, ["Coming Soon Feature", "Expected October"]],
    [8, ["Coming Soon Feature", "Expected October"]],
    [9, ["Coming Soon Feature", "Expected October"]],
    [10, ["Coming Soon Feature", "Expected October"]],
    [11, ["Coming Soon Feature", "Expected October"]],
    [12, ["Coming Soon Feature", "Expected October"]],
    [13, ["Coming Soon Feature", "Expected October"]],
    [14, ["Coming Soon Feature", "Expected October"]],
    [15, ["Coming Soon Feature", "Expected October"]],
    [16, ["Coming Soon Feature", "Expected October"]]
    ]);
export function dis_edu(){ 
    const main_content_Element = document.querySelector(".Main-Content");
    main_content_Element.innerHTML = "<br>";

    const newContent = `
    <br>
    <div class="flex"> 
        <div class="image"> 
            <img src="image/ucla.jpg" alt="UCLA Image">
        </div>
        <div class="box"> 
            <div class='icon'> 
                June 2023
            </div>
            <div class='icon'> 
                B.A Economics , University of California, Los Angeles
            </div>
        </div>
    </div>
    <br>
    <div class="flex"> 
    <div class="image"> 
        <img src="image/coursera.svg" alt="UCLA Image">
    </div>
    <div class="box"> 
        <div class='icon'> 
           August 2023
        </div>
        <div class='icon'> 
        IBM Data Analyst Professional Certificate
        </div>
    </div>

    `;
    
    main_content_Element.innerHTML = newContent;
    
}
export function filterSkills() {
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

export function dis_skills(){ 
    const main_content_Element = document.querySelector(".Main-Content");
    main_content_Element.innerHTML = "<br>";

    const newContent = ` <div class="field">
    <input type="text" id="myInput" class="searchbar" onkeyup="filterSkills()" placeholder="Search for Skills">
    <div class="skill_box">
      <div class="skills"> 
        <div class="title">Python</div>
        <div class="acc">Libraries such as  Pandas, Numpy, and Matplotlib used for data analysis at UCLA </div>
        <div class="year">Experience: 2 years</div>
      </div>
  
      <div class="skills"> 
        <div class="title">R</div>
        <div class="acc">Libraries such as ggplot2, tidyverse, and forecast used for data analysis  at UCLA.</div>
        <div class="year">Experience: 2 years</div>
      </div>
  
      <div class="skills">
          <div class="title">MySQL</div>
          <div class="acc"> Practice through Coursera, and sites like SQL understanding.</div>
          <div class="year">Experience: 6 months</div>
      </div>
   
       <div class="skills"> 
        <div class="title">Javascript/HTML/CSS</div>
        <div class="acc">Used these 3 skills to create my personal website. Learn more about this website here :</div>
        <div class="year">Experience: 2  months</div>
      </div>
  <div class="skills"> 
        <div class="title">Microsoft Office</div>
        <div class="acc"> Performed tasks such as organizing GDP data with pivot tables and complex functions, calculated results for financial models, and or visualized data for data analysis at UCLA  </div>
        <div class="year">Experience: 2 years</div>
      </div>
      <div class="skills"> 
        <div class="title">Data Analysis Experience</div>
        <div class="acc">Experience relating to data analysis can include : forecasting data, training/testing data, classification models and  multilevel regression.</div>
        <div class="year">Experience: 2 years</div>
      </div>
    </div>
  </div>
  `;
    main_content_Element.innerHTML = newContent;
    
}
