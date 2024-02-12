function outsideClick(e) {
    var container = document.getElementById('customDrp');

    if (!container.contains(e.target) && container.classList.contains('active')) {
        container.classList.remove('active');
        document.removeEventListener('click', outsideClick);
    }
}


document.addEventListener('click', outsideClick);

// Slide Toggle
function slideToggle(element, duration) {
    var element = document.querySelector(element);
    if (element.offsetHeight > 0) {
        slideUp(element, duration);
    } else {
        slideDown(element, duration);
    }
}

// Slide Up
function slideUp(element, duration) {
    var element = document.querySelector(element);
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = duration + 'ms';
    element.style.display = 'block';
    element.style.height = element.scrollHeight + 'px';
}

// Slide Down
function slideDown(element, duration) {
    var element = document.querySelector(element);
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = duration + 'ms';
    element.style.height = '0px';
    setTimeout(function () {
        element.style.display = 'none';
    }, duration)
}



window.onload = function () {

    var custmonDropDwon = document.getElementsByClassName('custmonDropDwon');
    custmonDropDwon.forEach(function (e) {
        e.addEventListener('click', function () {
            if (e.target.classList.contains('crossString') || e.target.classList.contains('bowiro')) {
                return false;
            }

            if (e.target.tagName.toLowerCase() === 'a') {
                return true;
            }

            e.preventDefault();

            console.log(e.target);

            if (e.target.classList.contains('language') || e.target.parentElement.classList.contains('language')) {
                languageFunc();
            }

            if (window.matchMedia('(max-width: 1170px)').matches) {
                document.body.style.overflow = 'hidden';
            }

            if (e.target.classList.contains("searchCoinDrp")) {
                document.getElementById('tokensearch1').focus();
            }

            if (document.querySelector('.customDrp').nextElementSibling.length) {
                document.querySelector('.customDrp').nextElementSibling.checkVisibility.classList.add('active');
            } else {
                let childrenElements = this.querySelectorAll('.customDrp');
                childrenElements.forEach(function (child) {
                    child.classList.add('active');
                })
            }

            e.stopPropagation();
            document.addEventListener('click', outsideClick);
        });
    });

    // Banner

    let basic_banner_read_btn = false;
    var basic_banner = document.getElementsByClassName('basic_banner_read_btn');
    basic_banner.forEach(function (e) {
        e.addEventListener('click', function () {
            if (basic_banner_read_btn == false) {
                this.textContent = 'Read Less';
                slideToggle('.basic_banner_text', 500);
                basic_banner_read_btn = true;
            }else {
                slideToggle('.basic_banner_text',500);
                this.textContent = "Read More";
                basic_banner_read_btn = false;
             }
        });
    });

    // Filter Toggle

    var filterToggleBtn = document.querySelectorAll('.filterToggleBtn');
    filterToggleBtn.forEach(function(e){
        e.addEventListener('click', function(){
            slideToggle('.filterToggel', 'active');
        })
    });
    
    // HideCustomDrp

    var hideCustomDrp = document.querySelectorAll('.hideCustomDrp');
    hideCustomDrp.forEach(function (h) {
        h.addEventListener('click', function () {
            var customDrp = document.querySelectorAll('.customDrp');
            customDrp.forEach(function (c) {
                c.classList.remove('active');
            })
        })
    })

    // Close

    var closeIcon = document.querySelectorAll('.closeIcon');

    closeIcon.forEach(function (element) {
        element.addEventListener('click', function () {
            var customPopUp = document.querySelectorAll('.customPopup');
            customPopUp.forEach(function (e) {
                e.classList.remove('active');
            });

            var commonPopUp = document.querySelectorAll('.commonPopup');
            commonPopUp.forEach(function (e) {
                e.classList.remove('active');
            });

            if (!document.querySelector(".headerMain").classList.contains("active")) {
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Main Table
    var mainTable = document.querySelectorAll('.mainTable');
    mainTable.addEventListener('scroll', function (e) {
        var isScroll = e.currentTarget.scrollLeft;
        var temp = document.querySelectorAll('.ListingTable th:nth-child(3), td:nth-child(3)');
        if (isScroll) {
            temp.forEach(function (t) {
                t.classList.add('before');
            })
        } else {
            temp.forEach(function (t) {
                t.classList.remove('before');
            })
        }
    });
}