console.log("script is running");

document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        setTimeout(()=>{
            document.querySelector('.ham').style.display='inline';
            document.querySelector('.cross').style.display='none';
        },250)
       
    } else {
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';

        },320)
       
        document.querySelector('.ham').style.display='none';
    }
})
