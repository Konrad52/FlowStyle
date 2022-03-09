/*

    FlowStyle 1.0.0
    (https://github.com/Konrad52/FlowStyle)

    Made by Konrád Kiss in one day on 09.03.2022. (One day before it's use)
    This code falls under the 2022 MIT License.

    This CSS file has everything necessary to make Bootstrap obsolete for
    myself (aka. the author).

    The main reason to create such a stylesheet is the fact that the 
    after-mentioned framework is too bloated and visually unappealing to me,
    while I had to use some kind of helping tool to prototype a website 
    for the 2022 Skills Junior competition.

    This file is for the helper functions used by FlowStyle.

*/

// Setup for the sidebars. A sidebar must be declared within a header, and with that
// it's height will be calculated accordingly.
"SETUP";
window.addEventListener('DOMContentLoaded', (event) => {
    const sidebars = document.getElementsByTagName('fs-sidebar');
    Array.from(sidebars).forEach((bar) => {
        const header = bar.parentElement;
        if (header.tagName != 'FS-HEADER')
        {
            console.error('Invalid sidebar definition: \"' + bar.id + "\"\nSidebar must be in a header tag.");
            return;
        }

        bar.style.height = "calc(100vh - " + header.clientHeight + "px)";
    });
});

// A function for the button that toggles a sidebar. Requires the ID aka name of the sidebar element.
// name: string
function fsToggleSidebar(name) {
    const sidebar = document.getElementById(name);
    if (sidebar.classList.contains('fs-opened-sidebar'))
        sidebar.classList.remove('fs-opened-sidebar');
    else
        sidebar.classList.add('fs-opened-sidebar');
}