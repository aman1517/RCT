async function apiCall(url) {

    let res= await fetch(url);
    let data= await res.json();
    let data1= data.articles;

    return data1;

}


function appendArticles(articles, main) {


    articles.map(({title, description, image, content})=>{
        let mdiv=document.createElement("div");
        let img=document.createElement("img");
        let ldiv=document.createElement("h3");
        let middiv= document.createElement("p");
        let rdiv= document.createElement("div");
        rdiv.append(img);
        img.src=image;
        ldiv.textContent=title;
       
        middiv.textContent=description;

        mdiv.append(ldiv, middiv,rdiv);

        mdiv.addEventListener("click",()=>{
            let obj={
                title:title,
                description:description,
                image:image,
                content:content,
            };
            localStorage.setItem("news",JSON.stringify(obj));

            window.location.href="news.html";
        });
        main.append(mdiv);
    })

}

export { apiCall, appendArticles }