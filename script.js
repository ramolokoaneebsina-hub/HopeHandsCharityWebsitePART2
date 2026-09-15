/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
   ========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent = currentYear;

}


/* =========================================
   ENQUIRY FORM
   ========================================= */

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (formMessage) {

            formMessage.textContent =
                "Thank you for your enquiry! " +
                "We will get back to you as soon as possible.";

            formMessage.style.marginTop = "20px";
            formMessage.style.fontWeight = "bold";

        }

        enquiryForm.reset();

    });

}


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm = document.getElementById("contactForm");
const contactMessageDisplay =
    document.getElementById("contactMessageDisplay");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (contactMessageDisplay) {

            contactMessageDisplay.textContent =
                "Thank you for contacting Hope Hands Charity Foundation. " +
                "We will respond to your message soon.";

            contactMessageDisplay.style.marginTop = "20px";
            contactMessageDisplay.style.fontWeight = "bold";

        }

        contactForm.reset();

    });

}

