const panels = document.querySelectorAll('.panel');

//Switch Light/Dark Modes
const switchSetting = () => {
    const elem = document.body;
    elem.classList.toggle('light-mode');
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}