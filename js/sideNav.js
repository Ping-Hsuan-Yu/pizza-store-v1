function openCloseNav() {
    const sideNav = document.getElementById("bar");
    let sideNavZ = getComputedStyle(sideNav).getPropertyValue("z-index");
    const navIconImg = document.getElementById("nav-icon-img")
    if (sideNavZ == 0) {
        sideNav.style.right = 0;
        sideNav.style.zIndex = 1;
        let xD = "M3.7,3.7c0.3-0.3,0.7-0.3,0.9,0l0,0L8,7.1l3.4-3.4c0.3-0.3,0.7-0.3,0.9,0c0.3,0.3,0.3,0.7,0,0.9L8.9,8l3.4,3.4 c0.3,0.3,0.3,0.7,0,0.9c-0.3,0.3-0.7,0.3-0.9,0L8,8.9l-3.4,3.4c-0.3,0.3-0.7,0.3-0.9,0c-0.3-0.3-0.3-0.7,0-0.9L7.1,8L3.7,4.6 C3.4,4.3,3.4,3.9,3.7,3.7L3.7,3.7z";
        navIconImg.setAttribute("d", xD);
        navIconImg.setAttribute("fill-rule", "null");
    }
    else {
        sideNav.style.right = null;
        sideNav.style.zIndex = null;
        let listD = "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z";
        navIconImg.setAttribute("d", listD);
        navIconImg.setAttribute("fill-rule", "evenodd");
    }
}