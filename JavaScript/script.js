//loading function
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    }
    else {
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("#loader").style.display = "none";
    }
};

//page loaded
$(document).ready(function () {
    window.mobile = false
    window.fullPageJs = false
    var width = window.matchMedia("(max-width: 990px)")
    handleWidth(width)
    width.addListener(handleWidth)

    //slider function
    $('#slider').fullpage({
        // menu: '#nav-ul',
        // sectionsColor: ['#ccc', '#fff'],
        sectionSelector: '.slide-section',
        loopBottom: true,
        fadingEffect: true,
        responsiveWidth: 990,
        dragAndMove: 'fingersonly',
        anchors: ['main', 'skills', 'education', 'projects', 'interests', 'contact']
        // anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']
    });

    //if window resizes, it will jumps to top
    window.onresize = function () {
        jumpToTag('');
        // $("html, body").animate({ scrollTop: 0 }, "slow");
        window.location.reload();
    };
});

//scroll function
// $(window).scroll(function () {
//     navEffect($(window).scrollTop() >= 30);
// });

//highlighting nav item on section
document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "nav-ul",
        offset: 200
    })
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
});

//width function
function handleWidth(width, allowMobile = true) {
    if (width.matches && !allowMobile) {
        window.mobile = true
        window.fullPageJs = false
        document.querySelector("#nav-ul").style.display = "none";
    }
    else {
        window.mobile = false
        window.fullPageJs = true
        document.querySelector("#nav-ul").style.display = "contents";
    }
}

//adding/removing navbar classes
function navEffect(bool, allowMobile = true) {
    if (bool) {
        if (allowMobile || window.mobile) {
            $("#header").addClass("add-shadow")
            $("#header").addClass("blur-bg")
        }
    }
    else {
        $("#header").removeClass("add-shadow")
        $("#header").removeClass("blur-bg")
    }
}

//jump to a tag
function jumpToTag(tag) {
    window.location.href = "#" + tag;
}