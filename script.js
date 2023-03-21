 function filterBrands() {
    
      const selectedLetter = document.getElementById("alphabet").value;
    
    
      const brandImages = document.querySelectorAll(".brand-image");
    
    
      brandImages.forEach((image) => {
        const imageLetter = image.getAttribute("data-alphabet");
    
        if (selectedLetter === "" || imageLetter === selectedLetter) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
    filterBrands();