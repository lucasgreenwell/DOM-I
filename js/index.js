const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navParent = document.querySelector('nav');
let nav = document.querySelectorAll('nav a');
for (let i = 0; i < nav.length; i ++){
  nav[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
  nav[i].style.color = 'green';
}
const greg = document.createElement('a');
greg.innerHTML = "Greg";
navParent.prepend(greg);
const jeff = document.createElement('a');
jeff.innerHTML = "Jeff";
navParent.append(jeff);


const title = document.querySelector("h1");
title.innerHTML = siteContent['cta']['h1'];

const button = document.querySelector(".cta-text button");
button.innerHTML = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const textContent = document.querySelectorAll(".text-content");
const nameList = ["features", "about", "services", "product", "vision"]


for (let i = 0; i < textContent.length; i ++){
  const childContent = textContent[i].childNodes;
  childContent[1].innerHTML = siteContent["main-content"][`${nameList[i]}-h4`];
  childContent[3].innerHTML = siteContent["main-content"][`${nameList[i]}-content`];
}

const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contactChildren = document.querySelector(".contact").childNodes;
contactChildren[1].innerHTML = siteContent["contact"]["contact-h4"];
contactChildren[3].innerHTML = siteContent["contact"]["address"];
contactChildren[5].innerHTML = siteContent["contact"]["phone"];
contactChildren[7].innerHTML = siteContent["contact"]["email"];

const copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent.footer.copyright;