//fade-in animation dodaj fae-in class vsem objektom
/*const faders = document.querySelectorAll
('.fade-in');

const appearOptions = {
    threshold: 0.8,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(
function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});
*/
//newsletter popup    
function showNewsletter() {
    document.getElementById("myForm").style.display = "block";
}

setTimeout(showNewsletter, 2500);

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


//open blog
function openBlog1() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog1.html';
}
function openBlog2() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog2.html';
}
function openBlog3() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog3.html';
}
function openBlog4() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog4.html';
}
function openBlog5() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog5.html';
}
function openBlog6() {
    window.location.href = '/sites/TeoRiznar/TeoRizanrBlog/blog6.html';
}