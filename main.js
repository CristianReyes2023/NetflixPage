
// const path = "config";

// let construirElEncabezado = async()=>{
//     let peticion= await fetch(`${path}.json`);
//     let res = await peticion.json();
//     let selecion = document.querySelector("#myJsonSection");
//         selecion.insertAdjacentHTML("beforeend",/*html*/ `
//         <p class="fs-6">${res.section.step}</p>
//         <h1 class="display-4 fw-normal text-body-emphasis fs-1 fw-semibold">${res.section.titulo}</h1>
//         <p class="d-flex">
//             ${res.section.parrafo.map((value)=>/*html*/`
//                 <svg src="${value.imagen}"
//                     class="bi2 me-2"
//                     style=""></svg>${value.texto}<br>`).join(" ")}
//         </p>
//     `)
// }
// construirElEncabezado();

const path = "config";

let construirNavbar = async()=>{
    let peticion= await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#navBar");
        selecion.insertAdjacentHTML("beforeend",/*html*/ `
        <img
            class="netFliximg"
            src="assets/brand/Netflix_2015_logo.svg">
        <p class="signIn">${res.navbar.parrafo}</p>
    `)
}
construirNavbar();


let construirElEncabezado = async()=>{
    let peticion= await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myJsonSection");
        selecion.insertAdjacentHTML("beforeend",/*html*/ `
        <p class="fs-6">${res.section.step}</p>
        <h1 class="display-4 fw-normal text-body-emphasis fs-1 fw-semibold">${res.section.titulo}</h1>
        <p class="parrafoSection">
            ${res.section.parrafo.map((value)=>/*html*/`
            <svg class="bi2 me-2 " width="24" height="24">
            <use xlink:href="#check" />
          </svg>${value.texto}<br>`).join(" ")}
        </p>
    `)
}
construirElEncabezado();











// let proceso = new Promise((resolve,reject) => {
//     resolve("Todo ok continue")
// });

// let obtener = async(p1)=>{
//     let peticion= await fetch(`${p1}.json`);
//     let res = await peticion.json();
//     console.log(res);
// }
// obtener("config");

//Modo pro

// (async(p1)=>{
//     let peticion = await fetch(`${p1}.json`);
//     let res = await peticion.json();
//     console.log(res);
// })("config")




































//Tenemos temporizadores 
//setTimeour()
//setInterval()

//https://jsonformatter.curiousconcept.com/
//Para valiar la estructura del json