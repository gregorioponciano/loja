var header = document.getElementsByClassName('header');
var navigationHeader = document.getElementsByClassName('navigation_header');
var content = document.getElementsByClassName('content');
var showSidebar = false;

function toggleSidebar() 
{
    showSidebar = !showSidebar;
    if (showSidebar) 
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
    }
    else 
    {
        navigationHeader.style.marginLeft = '-100vw';
    }
}





