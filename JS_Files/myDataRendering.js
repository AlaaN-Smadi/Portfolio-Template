'use strict';



// info_P
// take elements from HTML file ==>
let my_Profile = document.getElementById("my_Profile"),
    contact_Me = document.getElementById("contact_Me"),
    experiance = document.getElementById("experiance"),
    education = document.getElementById("education"),
    projects = document.getElementById("projects"),
    skills = document.getElementById("skills"),
    codePenLink = document.getElementById("codePenLink"),
    youTubeLink = document.getElementById("youTubeLink"),
    twitterLink = document.getElementById("twitterLink"),
    gitHubLink = document.getElementById("gitHubLink"),
    linkedInLink = document.getElementById("linkedInLink"),
    faceBookLink = document.getElementById("faceBookLink"),
    my_Image = document.getElementById("myProfileImage")

// image name
let my_Image_Name = 'alaa.png';
my_Image.setAttribute('src', `./assets/${my_Image_Name}`);
// links
let link_Arr = [
    {
        type: 'LinkedIn',
        link: "https://www.linkedin.com/in/alaa-smadi/"
    },
    {
        type: 'GitHub',
        link: "https://github.com/AlaaN-Smadi"
    },
    {
        type: 'Twitter',
        link: ""
    },
    {
        type: 'FaceBook',
        link: ""
    },
    {
        type: 'CodePen',
        link: "https://codepen.io/alaan-smadi/projects/"
    },
    {
        type: 'YouTube',
        link: ""
    }
];
// this array for all data needed to render your portfolio
let myData = [
    {
        // Contact info => each object contain one key and value
        head: "Contact",
        data: [{ Phone: "+962787189817" }, { Email: "alaasmadi1010@gmail.com" }, { Address: "Jordan / Amman" }]
    },
    {
        // Profile is a short leter about you to attract and take the attention of hiring manager
        head: "Profile",
        data: "I am 24 years old, single Jordanian who is social , ambitious and result oriented . I am ready to face challenges to build great accomplishments in my career .I am hard worker, dynamic and organized person with ability to learn and adopt any environment to achieve my goals , Born in a small town in Northern Jordan, where I study to be a full stack developer for Instant Domain Search, alongside my many ongoing projects. I love to create and tend to keep a few too many projects on the go at a time. I love to travel . I dream of being able to take my work with me while travelling the world. "
    },
    {
        // your work history right here, make sure to make every object contain all data with the same range
        // don't forget to make your work history ranged progressive where newest are in the top and oldest are in the bottom 
        head: "Experiance",
        data: [
            {
                Position: "Test Position",
                Company: "Test Company",
                StartDate: "Jan 2020",
                EndDate: "Jan 2021",
                TechnichalSkills: "Test Position Skills",
                Description: "Test position Description"
            },
            {
                Position: "Test Position 2",
                Company: "Test Company 2",
                StartDate: "Jan 2020",
                EndDate: "Jan 2021",
                TechnichalSkills: "Test Position Skills 2",
                Description: "Test position Description 2"
            }
        ]
    },
    {
        // your studying history right here, make sure to make every object contain all data with the same range
        // your history should be the same of experiance and work history, newest in the top and oldest in the bottom
        head: "Education",
        data: [
            {
                Degree: " Survey ",
                School: "BAU",
                StartDate: "Jan 2015",
                EndDate: "Jan 2020",
                TechnichalSkills: "Nothing",
                Description: "Description"
            }
        ]
    },
    {
        // If you have personal project this will be your area, give a great clear description 
        // It will be great and powerful if you put the for your project, if not; no worry about that
        head: "Projects",
        data: [{ Name: "Project 1",Image:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg", Link: "https://getbootstrap.com/docs/5.0/components/card/", Description: "Description 1" }, { Name: "Project 2",Image:"https://addons-media.operacdn.com/media/CACHE/images/themes/95/78195/1.0-rev1/images/f1b54fe9-e138-44e6-929b-182bb1e82a68/e692a2c2fe07202eda545c69833230bd.jpg", Link: "https://alaa-s-resume.netlify.app/", Description: "Description 2" }]
    },
    {
        // Your skills will be as elements in an array 
        // make sure to add all of your skills with any range you want 
        head: "Skills",
        data: [{skillName:'skill 1',percentage:70}, {skillName:'skill 2',percentage:67}, {skillName:'skill 3',percentage:35}]
    },

]


// => Functionality <=

myData.forEach(mainFeild => {
    switch (mainFeild.head) {
        // profile part
        case "Profile":
            let profile_P = document.createElement("p");
            profile_P.textContent = mainFeild.data;
            profile_P.setAttribute("class", "info_P");
            my_Profile.appendChild(profile_P);
            break;
        // education part
        case "Education":
            let leftDivEdu = document.createElement("div");
            let rightDivEdu = document.createElement("div");
            rightDivEdu.setAttribute('class', 'rightDiv');
            // Title
            let head_OF_FeildsEdu = document.createElement("p");
            head_OF_FeildsEdu.textContent = "Education"
            head_OF_FeildsEdu.setAttribute("class", "head_OF_Feilds");
            leftDivEdu.appendChild(head_OF_FeildsEdu);
            education.appendChild(leftDivEdu)
            // Data
            mainFeild.data.forEach(eduData => {
                let dataContainer = document.createElement("div");
                dataContainer.setAttribute("class", 'data_Container');
                // university
                let university = document.createElement("p");
                university.setAttribute("class", "company");
                university.textContent = eduData.School;
                dataContainer.appendChild(university);

                // Degree and Date
                let degree = document.createElement("p");
                degree.setAttribute("class", "position_With_Date");
                degree.textContent = `${eduData.Degree} * ${eduData.StartDate} - ${eduData.EndDate}`;
                dataContainer.appendChild(degree);

                // Skills
                let skills = document.createElement("p");
                skills.setAttribute("class", "position_Skills");
                skills.textContent = eduData.TechnichalSkills;
                dataContainer.appendChild(skills);

                // Description
                let description = document.createElement("p");
                description.setAttribute("class", "position_Description");
                description.textContent = eduData.Description;
                dataContainer.appendChild(description);

                // append it
                rightDivEdu.appendChild(dataContainer)
            })
            education.appendChild(rightDivEdu)

            break;
        // experiance part
        case "Experiance":
            let leftDivExp = document.createElement("div");
            let rightDivExp = document.createElement("div");
            rightDivExp.setAttribute('class', 'rightDiv')
            // Title
            let head_OF_Feilds_Exp = document.createElement("p");
            head_OF_Feilds_Exp.textContent = "Experiance"
            head_OF_Feilds_Exp.setAttribute("class", "head_OF_Feilds");
            leftDivExp.appendChild(head_OF_Feilds_Exp);
            experiance.appendChild(leftDivExp)
            // Data
            mainFeild.data.forEach(expData => {
                let dataContainer = document.createElement("div");
                dataContainer.setAttribute("class", 'data_Container');
                // company
                let company = document.createElement("p");
                company.setAttribute("class", "company");
                company.textContent = expData.Company;
                dataContainer.appendChild(company);

                // Position and Date
                let position = document.createElement("p");
                position.setAttribute("class", "position_With_Date");
                position.textContent = `${expData.Position} * ${expData.StartDate} - ${expData.EndDate}`;
                dataContainer.appendChild(position);

                // Skills
                let skills = document.createElement("p");
                skills.setAttribute("class", "position_Skills");
                skills.textContent = expData.TechnichalSkills;
                dataContainer.appendChild(skills);

                // Description
                let description = document.createElement("p");
                description.setAttribute("class", "position_Description");
                description.textContent = expData.Description;
                dataContainer.appendChild(description);

                // append it
                rightDivExp.appendChild(dataContainer)
            })
            experiance.appendChild(rightDivExp)
            break;
        // Skills part
        case "Skills":
            let leftDivSkill = document.createElement("div");
            let rightDivSkill = document.createElement("div");
            rightDivSkill.setAttribute('class', 'rightDiv');
            // Title 
            let head_OF_Feilds_skill = document.createElement("p");
            head_OF_Feilds_skill.textContent = "Skills"
            head_OF_Feilds_skill.setAttribute("class", "head_OF_Feilds");
            leftDivSkill.appendChild(head_OF_Feilds_skill);
            skills.appendChild(leftDivSkill)
            // Data 
            mainFeild.data.forEach(ski => {
                let dataContainer = document.createElement("div");
                dataContainer.setAttribute("class", 'data_Container');
                // skill
                let skill_ToBeRendered = document.createElement("p");
                skill_ToBeRendered.setAttribute("class", "company");
                skill_ToBeRendered.textContent = ski.skillName;
                dataContainer.appendChild(skill_ToBeRendered);

                let rangeContainer = document.createElement("div");
                rangeContainer.setAttribute('class', 'rangeContainer');
                let range = document.createElement('div');
                range.style.width = `${ski.percentage}%`;
                range.setAttribute('class', 'range');
                rangeContainer.appendChild(range);
                dataContainer.appendChild(rangeContainer);

                rightDivSkill.appendChild(dataContainer);
            })
            skills.appendChild(rightDivSkill);
            break;
        // project part
        case "Projects":
            let leftDivSPro = document.createElement("div");
            let rightDivPro = document.createElement("div");
            rightDivPro.setAttribute('class', 'projects_Container');
            // Title 
            let head_OF_Feilds_Pro = document.createElement("p");
            head_OF_Feilds_Pro.textContent = "Projects"
            head_OF_Feilds_Pro.setAttribute("class", "head_OF_Feilds");
            leftDivSPro.appendChild(head_OF_Feilds_Pro);
            projects.appendChild(leftDivSPro)
            // Data 
            mainFeild.data.forEach(pro => {
                let dataContainer = document.createElement("div");
                dataContainer.setAttribute("class", 'project_Card');
                
                let projectFront = document.createElement('div');
                projectFront.setAttribute('class','project_Front');
                dataContainer.appendChild(projectFront);
                
                let projectBack = document.createElement('div');
                projectBack.setAttribute('class','project_BackGround');
                dataContainer.appendChild(projectBack);
                
                // projects
                let project_ToBeRendered = document.createElement("p");
                project_ToBeRendered.setAttribute("class", "company");
                project_ToBeRendered.textContent = pro.Name;

                let myProjectImage = document.createElement('img');
                myProjectImage.setAttribute('alt','Project_Img');
                myProjectImage.setAttribute('class','Project_Img');
                myProjectImage.setAttribute('src',`${pro.Image}`);

                let projectLink_ToBeRendered = document.createElement("p");
                projectLink_ToBeRendered.setAttribute("class", "Pro-Link");
                projectLink_ToBeRendered.textContent = "🔗 Open link";

                let projectDesc_ToBeRendered = document.createElement("p");
                projectDesc_ToBeRendered.setAttribute("class", "Pro-Desc");
                projectDesc_ToBeRendered.textContent = pro.Description;

                projectFront.appendChild(project_ToBeRendered);
                projectFront.appendChild(myProjectImage);
                projectFront.appendChild(projectLink_ToBeRendered);
                projectFront.appendChild(projectDesc_ToBeRendered);

                
                dataContainer.addEventListener('click', function(){
                    location.href = pro.Link;
                })
                rightDivPro.appendChild(dataContainer)
            })
            projects.appendChild(rightDivPro)
            break;
        // contact info part
        case "Contact":
            let headOfContact = document.createElement('p');
            headOfContact.textContent = 'Contact Me';
            headOfContact.setAttribute('class', 'head_OF_Feilds');
            contact_Me.appendChild(headOfContact);
            // render Contact Infos
            mainFeild.data.forEach(call => {
                let callElement = document.createElement('p');
                let key = `${Object.keys(call)[0]}`;
                let val = `${Object.values(call)[0]}`;

                callElement.textContent = `${key}: ${val}`;
                callElement.setAttribute('class', 'contact-Data')
                contact_Me.appendChild(callElement);
            })

            break;
        // new feilds part
        default:
            break;
    }
})



//  Set Links To be work
let linksHTML_el = [linkedInLink, gitHubLink, twitterLink, faceBookLink, codePenLink, youTubeLink];
link_Arr.forEach((linkObj, idx) => {
    
        if (linkObj.link) {
            linksHTML_el[idx].onclick = function () {
                location.href = linkObj.link;
            };
        } else {
            linksHTML_el[idx].remove()
        }

})
