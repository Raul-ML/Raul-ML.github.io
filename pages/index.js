function main(){
    const headerEl=document.querySelector("header");
    const footerEl=document.querySelector("footer");
    var cardEl=document.querySelector(".card-container");
    const formEl=document.querySelector(".form-container");
    const cards_list=[
        {
            image: "../imgs/website.png",
            title: "Desarrollo de paginas web",
            text: "Creacion de paginas webs, totalmente responsive y mobile first. "
        },
        {
            image: "../imgs/animations.png",
            title: "Animaciones para webs",
            text: "Animaciones personalizadas con CSS , JS y Frameworks."
        },
        {
            image: "../imgs/apps.png",
            title: "Desarrollo de Apps",
            text: "Creación, desarrollo y mantenimiento de Apps de forma personalizada."
        }
    ]

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
    
        // PARA CERRAR MENU SI TOCO EN LO NEGRO, NO ME INTERESA SINO PIERDE SENTIDO LA CRUZ DE CERRAR
        // blackscreenEl.addEventListener('click', function(e) {
        //     if (e.target === blackscreenEl) {
        //         blackscreenEl.style.display = 'none';
        //     }
        // });
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


    fetch('./components/card.html')
    .then(response => 
        response.text()
    )    
    .then(data => {
        console.log("card YES");
        let ie=0;
        for (const element of cards_list) {
            ie+=1
            const newcardEl= document.createElement("div")
            newcardEl.innerHTML=data;
            newcardEl.querySelector('img').className = "card-img"+ie;
            newcardEl.querySelector('img').style.width="100%";
            newcardEl.querySelector('img').style.height="100%";
            
            newcardEl.querySelector('h2').className = "card-title"+ie;
            newcardEl.querySelector('p').className = "card-text"+ie;
            
            console.log(cardEl)
            
            newcardEl.querySelector('.card-img'+ie).src = element.image;
            newcardEl.querySelector('.card-title'+ie).innerText = element.title;
            newcardEl.querySelector('.card-text'+ie).innerText = element.text;
            
            const clonecardEl=document.importNode(newcardEl, true)
            cardEl.appendChild(clonecardEl);
        }    



        });


};

main();
