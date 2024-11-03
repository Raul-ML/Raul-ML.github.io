function main(){
    const headerEl=document.querySelector("header");
    const footerEl=document.querySelector("footer");
    const formEl=document.querySelector(".form-container");

    fetch('./components/header.html')
    .then(response => 
        response.text()
    )
    .then(data => {
        console.log("header YES")
        headerEl.innerHTML=data;
        
        const blackscreenEl = headerEl.querySelector('.header-black-screen');
        const closeEl = headerEl.querySelector('.close-menu');
        const menuEl=headerEl.querySelector(".container-menu-header");
        const pageslinksEl=headerEl.querySelector(".header-pages-url");

        menuEl.addEventListener( "click", ()=> {
            blackscreenEl.style.display = 'flex'; 
            pageslinksEl.style.display = 'flex'; 
            closeEl.style.display = 'flex'; 
        });
    
        closeEl.addEventListener('click', function() {
            blackscreenEl.style.display = 'none'; 
            pageslinksEl.style.display = 'none'; 
            closeEl.style.display = 'none'; 
        });
    
    });

    fetch('./components/footer.html')
    .then(response => 
        response.text()
    )    
    .then(data => {
        console.log("footer YES")
        footerEl.innerHTML=data;
    });    
    
    fetch('./components/form.html')
    .then(response => 
        response.text()
    )
    .then(data => {
        formEl.innerHTML=data;
    });



};

main();
