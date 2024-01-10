
     let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        let activeImage = null;
        const tripleClickTimeThreshold = 500;

        const dragStart = function (e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target.classList.contains("draggable")) {
                active = true;
                activeImage = e.target;
            }
        };

        const dragEnd = function () {
            initialX = currentX;
            initialY = currentY;

            active = false;
            activeImage = null;
        };

        const drag = function (e) {
            if (active) {
                e.preventDefault();

                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, activeImage);
            }
        };

        const setTranslate = function (xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        };
        

        const doubleClick = function (e) {
            const imageUrl = e.target.getAttribute("src");
            window.open(getWebsiteUrl(imageUrl), "_blank");
        };

        const getWebsiteUrl = function (imageUrl) {
            const imageToUrlMap = {
                "guiux.png": "https://carmfia.dk/kea/03_ux/01_kodet_site/",
                "gweb.png": "https://carmfia.dk/kea/02_web/01_website/website/operativsystemer.html",
                "image3.jpg": "https://carmfia.dk/kea/04_animation/website/spil.html",
                "givideosite.png": "https://cast0002.github.io/videosite.github.io/",
                "givirksomhedssite.png": "https://master--radiant-mandazi-166865.netlify.app/merge"
            };

            return imageToUrlMap[imageUrl] || "";
        };
     
        document.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("mousemove", drag);

        document.getElementById("image1").addEventListener("dblclick", doubleClick);
        document.getElementById("image2").addEventListener("dblclick", doubleClick);
        document.getElementById("image3").addEventListener("dblclick", doubleClick);
        document.getElementById("image4").addEventListener("dblclick", doubleClick);
        document.getElementById("image5").addEventListener("dblclick", doubleClick);
    
 /*scroll*/

        function scrollToBottom() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
     
    function scrollToBottom() {
        const customScrollDistance = 2000;
        window.scrollTo({
            top: customScrollDistance,
            behavior: 'smooth'
        });
    }
            function scrollToBottom() {
            const customScrollDistance = 2000;
            window.scrollTo({
                top: customScrollDistance,
                behavior: 'smooth'
            });
        }
/*om mig*/
const popImage = document.getElementById("popImage");

function handleScroll() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage.offsetTop;

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    popImage.style.opacity = 1;
    popImage.classList.add("pop-animation");
  }
}

window.addEventListener("scroll", handleScroll);

const popImage2 = document.getElementById("popImage2");

function handleScroll2() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage2.offsetTop;

  // Tidsforsinkelse på 500 ms (0.5 sekunder)
  const delay = 1000;

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    // Brug setTimeout til at forsinke visningen af det andet billede
    setTimeout(() => {
      popImage2.style.opacity = 1;
      popImage2.classList.add("pop-animation");
    }, delay);
  }
}

window.addEventListener("scroll", handleScroll2);
