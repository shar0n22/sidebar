let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
};

function showContent(component) {
    var contentDivs = document.querySelectorAll('#content > div');
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = 'none';
    }

    var selectedDiv = document.getElementById(component);
    selectedDiv.style.display = 'block';
}

window.addEventListener('load', function () {
    showContent('home');
});
