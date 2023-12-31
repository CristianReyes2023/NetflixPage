
const path = "config";

let construirNavbar = async () => {
    let peticion = await fetch(`${path}.json`);
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


let construirElEncabezado = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myJsonSection");
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
        <p class="fs-6">${res.section.step}</p>
        <h1 class="display-4 fw-normal text-body-emphasis fs-1 fw-semibold">${res.section.titulo}</h1>
        <p class="parrafoSection">
            ${res.section.parrafo.map((value) =>/*html*/`
            <svg class="bi2 me-2 " width="24" height="24">
            <use xlink:href="#check" />
            </svg>${value.texto}<br>`).join(" ")}
        </p>
    `)
}
construirElEncabezado();

let construirPlanes = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myPlans");
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
    ${res.bloques.map((value, index) => {
        let bgClass = "card-header rounded-0 py-3 bg-danger-subtle";
        if (index === res.bloques.length - 1) {
            bgClass = "card-header rounded-0 py-3 bg-danger";
        }
        return /*html*/`
    <div class="col">  
        <div class="card mb-4 rounded-0 shadow-sm">
            <div class="${bgClass}">
                <h4 class="my-0 fw-normal text-light">${value.plan}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title fs-2">${value.precio}<small
                    class="text-body-secondary fw-light">/mo</small>
                </h1>
            </div>
        </div>
    </div>`}).join(" ")}`)
}
construirPlanes();

let construirTables = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myTable");
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <thead>
        <tr>
        ${res.table.thead.map((value, index) => {
        let widthColumn = "width:30%";
        let textColor = "";
        if (index != 0) {
            widthColumn = `width:${(70) / (res.table.thead.length)}%`;
        }
        if (index === res.table.thead.length - 1) {
            textColor = "text-danger"
        }
        return/*html*/`
        <th style="${widthColumn}" class="${textColor}">${value.tr}`
    }).join(" ")}</th> 
        </tr>
    </thead>
    <tbody>
        ${res.table.tbody.map((value) =>/*html*/`
        <tr>
        <th scope="row" class="text-start fw-medium">${value.th}</th>
        <td>
            <p class="fw-bolder text-secondary">${value.basic}</p>
        </td>
        <td>
        <p class="fw-bolder text-secondary">${value.standard}</p>
        </td>
        <td>
        <p class="text-danger fw-bolder">${value.premium}</p>
        </td>
        </tr>`).join(" ")}
    </tbody>`)
    let termUs = document.querySelector("#myTermUs");
    termUs.insertAdjacentHTML("beforeend",/*html*/ `
    <p id="myTermUs" class="text-secondary fs-6 w-95">${res.table.conditions}</p>
    `)
}
construirTables();


let construirFooter = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myFooter");
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <p class="link-secondary fs-6">${res.footer.contacto}</p>
    <div class="row">
        <div class="col-12 col-md">
        <small class="d-block mb-3 text-body-secondary">&copy;${res.footer.campus}</small>
        </div>
        ${res.footer.info.map((value) =>/*html*/`
        <div class="col-6 col-md">
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">${value.dato1}</a></li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">${value.dato2}</a>
                </li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">${value.dato3}</a>
                </li>
            </ul>
        </div>`).join(" ")}
    </div>
    </div>`)
}
construirFooter();
