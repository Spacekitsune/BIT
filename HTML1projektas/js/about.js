const allPerson ={person:[
        {photo: "../img/about/profile1.PNG", name: "Robert Langdon", title: "CEO", about: "Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic."},
        {photo: "../img/about/profile2.PNG", name: "Deanna I Martin", title: "Marketing Coordinator", about: "Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer."},
        {photo: "../img/about/profile3.PNG", name: "Claudette G Hann", title: "Web Designer", about: "Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic."},
        {photo: "../img/about/profile4.PNG", name: "Bruce K Collins", title: "Project Manager", about: "Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover."},
        {photo: "../img/about/profile5.PNG", name: "Sammy M Stoll", title: "Web Designer", about: "Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert."},
        {photo: "../img/about/profile6.PNG", name: "Adriana E Hubert", title: "Web Designer", about: "Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff."},
    ]};

const profile = allPerson['person'];

const largePhoto=document.getElementById('large-photo')
largePhoto.classList.add('photo1');

const aboutMe = document.getElementById('about-me');
const name = document.createElement('h2');
const jobTitle = document.createElement('h5');
const description = document.createElement('p');
aboutMe.appendChild(name);
name.innerText=profile[0].name;
aboutMe.appendChild(jobTitle);
jobTitle.innerText=profile[0].title;
aboutMe.appendChild(description);
description.innerText=profile[0].about;

const profileButton1 = document.getElementById('profile-button1');
const profileButton2 = document.getElementById('profile-button2');
const profileButton3 = document.getElementById('profile-button3');
const profileButton4 = document.getElementById('profile-button4');
const profileButton5 = document.getElementById('profile-button5');
const profileButton6 = document.getElementById('profile-button6');

profileButton1.addEventListener('click', doSomething, false);
profileButton2.addEventListener('click', doSomething, false);
profileButton3.addEventListener('click', doSomething, false);
profileButton4.addEventListener('click', doSomething, false);
profileButton5.addEventListener('click', doSomething, false);
profileButton6.addEventListener('click', doSomething, false);

function doSomething(e) {
        var clickedItem =e.target.id;
        switch (clickedItem) {
                case 'profile-button1':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo1');
                        aboutMe.appendChild(name);
                        name.innerText=profile[0].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[0].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[0].about;
                        break;
                case 'profile-button2':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo2');
                        aboutMe.appendChild(name);
                        name.innerText=profile[1].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[1].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[1].about;
                        break;
                case 'profile-button3':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo3');
                        aboutMe.appendChild(name);
                        name.innerText=profile[2].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[2].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[2].about;
                        break;
                case 'profile-button4':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo4');
                        aboutMe.appendChild(name);
                        name.innerText=profile[3].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[3].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[3].about;
                        break;
                case 'profile-button5':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo5');
                        aboutMe.appendChild(name);
                        name.innerText=profile[4].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[4].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[4].about;
                        break;
                case 'profile-button6':
                        largePhoto.className = "photo";
                        largePhoto.classList.add('photo6');
                        aboutMe.appendChild(name);
                        name.innerText=profile[5].name;
                        aboutMe.appendChild(jobTitle);
                        jobTitle.innerText=profile[5].title;
                        aboutMe.appendChild(description);
                        description.innerText=profile[5].about;
                        break;
        }
}