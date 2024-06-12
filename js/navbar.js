/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMobileNavbar() 
{
    var x = document.getElementById("nav-list");
    
    if (x.style.display === "block") 
    {
        x.style.display = "none";
    } 
    else 
    {
        x.style.display = "block";
    }  
}

function debug() {
    var debugPrint = document.getElementById("debug-print");
    debugPrint.style.display = "block";
}

// Function to set image dimensions
function openFullscreenImage(clickedElement) {
    var fullscreen = document.getElementById("fullscreen-image");
    var img = document.getElementById("fullscreen-image-img");
    //var debugPrint = document.getElementById("debug-print");
    //debugPrint.innerHTML = clickedElement;
    
    
    // Set image
    img.src = clickedElement;
    
    // Make DIV clickable
    fullscreen.style.display="flex";
    fullscreen.style.opacity = "0";
    
    // Fade in background
    setTimeout(function(){    
        fullscreen.style.opacity = "1";
        fullscreen.style.transition = "opacity 0.25s ease";
     }, 1);
}
// Function to reset image dimensions
function closeFullscreenImage() {
    var fullscreen = document.getElementById("fullscreen-image");
    var img = document.getElementById("fullscreen-image-img");
    //var debugPrint = document.getElementById("debug-print");
    //debugPrint.innerHTML = "Close";
    
    // Make DIV unclickable
    setTimeout(function(){fullscreen.style.display="none";}, 200);

    // Fade out background
    fullscreen.style.opacity = "0";
    fullscreen.style.transition = "opacity 0.25s ease";
}

function onKeyPress() {
    var fullscreen = document.getElementById("fullscreen-image");

    
    if (!(fullscreen.style.display === "none" || fullscreen.style.display === "")){
        document.onkeydown = (e) =>{
            if (e.key === "ArrowLeft"){
                alert("LEEFT ".concat(fullscreen.style.display, " = ", fullscreen.style.display === "none"));
            }
            else if (e.key === "ArrowRight"){
                alert("RIGHTEUU " + document.getElementById("fullscreen-image").style.display);
            }
            else if (e.key === "Escape"){
                alert("Escape " + document.getElementById("fullscreen-image").style.display);
            }
        }    
    }
}