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

// Header

// Sets up the nav 
let nav = document.querySelectorAll("nav a");
counter = 1;
for (let i = 0; i < 6; i++) {
  nav[i].innerHTML = siteContent["nav"][`nav-item-${counter}`];
  counter++;
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA

// Text
let ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

// Button
let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content

// Titles
let textTitle = document.getElementsByTagName("h4");
textTitle[0].innerHTML = siteContent["main-content"]["features-h4"];
textTitle[1].innerHTML = siteContent["main-content"]["about-h4"];
textTitle[2].innerHTML = siteContent["main-content"]["services-h4"];
textTitle[3].innerHTML = siteContent["main-content"]["product-h4"];
textTitle[4].innerHTML = siteContent["main-content"]["vision-h4"];

// Text
let texts = document.getElementsByTagName("p");
texts[0].innerHTML = siteContent["main-content"]["features-content"];
texts[1].innerHTML = siteContent["main-content"]["about-content"];
texts[2].innerHTML = siteContent["main-content"]["services-content"];
texts[3].innerHTML = siteContent["main-content"]["product-content"];
texts[4].innerHTML = siteContent["main-content"]["vision-content"];

// Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Contact

// Title
textTitle[5].innerHTML = siteContent["contact"]["contact-h4"];

// Text
texts[5].innerHTML = siteContent["contact"]["address"];
texts[6].innerHTML = siteContent["contact"]["phone"];
texts[7].innerHTML = siteContent["contact"]["email"];

// Footer

texts[8].innerHTML = siteContent["footer"]["copyright"];