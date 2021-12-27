'use strict';

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
    my_Image = document.getElementById("myProfileImage"),
    personal_Name = document.getElementById("personal_Name"),
    personal_Job = document.getElementById("personal_Job")


    // this array for all data needed to render your portfolio
let myData;
let myDataJson = './json_files/myData.json';

let link_Arr;
let link_Arr_JSON = './json_files/links_Arr.json';

function readTextFile(file, type) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                if (type == 'data') {
                    var allText = rawFile.responseText;
                    myData = (JSON.parse(allText));
                } else if (type == 'links') {
                    var allText = rawFile.responseText;
                    link_Arr = (JSON.parse(allText));
                }

            }
        }
    }
    rawFile.send(null);
}
readTextFile(myDataJson, 'data')
readTextFile(link_Arr_JSON, 'links')


// => Functionality <=

myData.forEach(mainFeild => {
    switch (mainFeild.head) {
        case "Personal":
            personal_Name.textContent = mainFeild.Name;
            personal_Job.textContent = mainFeild.Job
            break;
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
                projectFront.setAttribute('class', 'project_Front');
                dataContainer.appendChild(projectFront);

                let projectBack = document.createElement('div');
                projectBack.setAttribute('class', 'project_BackGround');
                dataContainer.appendChild(projectBack);

                // projects
                let project_ToBeRendered = document.createElement("p");
                project_ToBeRendered.setAttribute("class", "company");
                project_ToBeRendered.textContent = pro.Name;

                let myProjectImage = document.createElement('img');
                myProjectImage.setAttribute('alt', 'Project_Img');
                myProjectImage.setAttribute('class', 'Project_Img');
                myProjectImage.setAttribute('src', `${pro.Image}`);

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


                dataContainer.addEventListener('click', function () {
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
    if (linkObj.type == "Resume") {
        // resume link =>
        let resumeLink = document.getElementById('resumeLink');
        resumeLink.setAttribute('href', linkObj.link);
    } else if (linkObj.type == "Image") {
        // image name
        my_Image.setAttribute('src', `./assets/${linkObj.link}`);
    } else {
        if (linkObj.link) {
            linksHTML_el[idx].onclick = function () {
                location.href = linkObj.link;
            };
        } else {
            linksHTML_el[idx].remove()
        }
    }


})
