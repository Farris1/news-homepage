  import './style.css'

  // NAV

    // create toggleOpenAttriubute const + arry
        // - Checks if it's open. If it has the open attribute
          // It'll know it's open,
            // - If it's open it'll delete the open attribute

    const toggleOpenAttriubute = (arrayOfItems) => {
      arrayOfItems.forEach((i) => {
        const isOpen = i.hasAttribute("open")
        isOpen
            ? i.removeAttribute("open") : i.setAttribute("open", "");
      })
    }

    // create toggleTabIndexes const + array
        const toggleTabIndexes = (arrayOfItems) => {
          arrayOfItems.forEach(i => {
            const isTabbable = i.tabIndex > -1;
            // Check if it's tabbable
            isTabbable
                  ? i.setAttribute('tabindex', "-1")
                  : i.setAttribute('tabindex', "0");

            // console.log(isTabbable);

          })
        }
  // get the query selector "#mobileNavBtn"
    // with a Const name of mobileNavBtn

  const mobileNavBtn = document.querySelector("#mobileNavBtn");

  // use query selector to get mobileNav
    // with a const name of mobileNav

  const mobileNav = document.querySelector("#mobileNav");
  
  // navBKG query selector

  const navBKG = document.querySelector(".nav-bkg")
  // Add an click event listener to mobileNav
      // With handleMobileNavClick function

  // Query selector "#closeBtn" with var name closeBtn.

  const closeBtn = document.querySelector("#closeBtn")

  // Query Selector '.nav-links'
    // With the name navLinks

  const navLinks = document.querySelectorAll('.nav-links');

  const handleMobileNavClick = (e) => {

    mobileNav.style.transition = 
    "transform 300ms ease-in-out"

    const isOpen = JSON.parse(e.target.getAttribute
      ("aria-expanded"));

      // console.log("handleMobileClick ~ isOpen", isOpen);
      
      // Change state of Button

      e.target.setAttribute("aria-expanded", !isOpen);

      // Open Mobile NAV
          // - Add set attribute to mobileNav with ("open", "")
      
          // Pass in the array 

      toggleOpenAttriubute([mobileNav, navBKG]);
      toggleTabIndexes([...navLinks, closeBtn]);

      mobileNav.setAttribute("open", "");

      // Toggle gray background
          // - Add set attribute to mobileNav with ("open", "")

      mobileNav.setAttribute("open", "");

  } 

  // Create closeMobileNav function calling nothing
    // Set mobileNavBtn aria-expanded to false
    // Call toggleOpenAttribute

    const closeMobileNav = () => {

      // console.log("Test");

      mobileNavBtn.setAttribute("aria-expanded", false);
      toggleOpenAttriubute([mobileNav, navBKG])
      toggleTabIndexes([...navLinks, closeBtn]);

    }

    // Mutation observer to close down mobile nav


  // EVENT LISTENERS

  mobileNavBtn.addEventListener("click", handleMobileNavClick);

  // addEventListener to navBKG with "click" + function closeMobileNav

  navBKG.addEventListener("click", closeMobileNav);

  // Close on click btn or bkg 
    // - Ability to close nav with keyboard

  // closeBtn event listener 
    // - With function closeMobileNAV

  closeBtn.addEventListener("click", closeMobileNav);

  window.addEventListener('keydown', (e) => {
    // Create if statement
      // If navBkg hasn't got the "open" attribute then return
        // - Use has Attribute to !navBkg 

    if(!navBKG.hasAttribute("open")) {
      return
    }; 
    e.key === "Escape" && closeMobileNav();
  })