## AJUSTES NETFLIX PAGE

1. Cambio del logo de Boostrap a Netflix y ajuste de la navbar eliminando opciones tales como(Features,Enterprise,Support y Pricing) y agregando Sign In.

   También se saco el navbar a un div independiente que permitiera ajustar su ancho al de la pantalla.  

2. Se modifico el header, agregando la información proporcionada por la pagina de netflix. Se re utilizo el codigo de los elementos de check para tener una pagina más cercana a la realidad.

   Acontinuación se mostrara el codigo inicial de Boostrap y posteriormente como quedo el codigo final en HTML.

   ```html
       <header>
         <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
           <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img">
               <title>Bootstrap</title>
               <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                 fill="currentColor"></path>
             </svg>
             <span class="fs-4">Pricing example</span>
           </a>
   
           <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
             <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
             <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
             <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
             <a class="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a>
           </nav>
         </div>
   
         <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
           <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
           <p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with
             this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
           </p>
         </div>
       </header>
   ```

   ```html
    <header>
         <div class="p-3 pb-md-4 mx-auto">
           <p class="fs-6">STEP <span class="fw-semibold">1</span> OF <span class="fw-semibold">3</span></p>
           <h1 class="display-4 fw-normal text-body-emphasis fs-1 fw-semibold">Choose the plan that's right for you</h1>
           <ul class="list-unstyled">
             <li class="d-flex"><svg class="bi2 me-2 " width="24" height="24">
                 <use xlink:href="#check" />
               </svg>Watch all you want. Ad-free.</li>
             <li class="d-flex"><svg class="bi2 me-2" width="24" height="24">
                 <use xlink:href="#check" />
               </svg>Recommendations just for you.</li>
             <li class="d-flex"><svg class="bi2 me-2" width="24" height="24">
                 <use xlink:href="#check" />
               </svg>Change or cancel your plan anytime.</li>
           </ul>
         </div>
       </header>
   ```

   

3. En su parte principal o main, se hicieron multiples modificaciones reutilizando el codigo inicial y ajustandolo lo más aproximado posible. (NOTA: se presentara el antes y después del codigo para cada uno de los apartados)

   1. Ajuste de los bloques que dan información del tipo de plan y sus costos.

      ```html
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Free</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Pro</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Enterprise</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
                  </div>
                </div>
              </div>
            </div>
      ```

      ```html
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-0 shadow-sm">
                  <div class="card-header rounded-0 py-3 bg-danger-subtle">
                    <h4 class="my-0 fw-normal text-light">Basic</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title fs-2">$6.99<small
                        class="text-body-secondary fw-light">/mo</small></h1>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-0 shadow-sm">
                  <div class="card-header rounded-0 py-3 bg-danger-subtle">
                    <h4 class="my-0 fw-normal text-light">Standard</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title fs-2">$15.49<small
                        class="text-body-secondary fw-light">/mo</small></h1>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-0 shadow-sm ">
                  <div class="card-header rounded-0 py-3  bg-danger text-light">
                    <h4 class="my-0 fw-normal">Premium</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title fs-2">$19.99<small
                        class="text-body-secondary fw-light">/mo</small></h1>
                  </div>
                </div>
              </div>
            </div>
      ```

   2. Ajustamos la tabla comparativa de los planes existentes y sus respectivas caracteristicas 					adaptandola a la pagina de Netflix, adicionalmente se agrego nota proporsionada por netflix sobre terminos y condiciones que tiene la empresa.

      ```html
            <div class="table-responsive">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th style="width: 34%;"></th>
                    <th style="width: 22%;">Free</th>
                    <th style="width: 22%;">Pro</th>
                    <th style="width: 22%;">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="text-start">Public</th>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">Private</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                </tbody>
      
                <tbody>
                  <tr>
                    <th scope="row" class="text-start">Permissions</th>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">Sharing</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">Unlimited members</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">Extra security</th>
                    <td></td>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                </tbody>
              </table>
            </div>
      ```

      ```html
            <div class="table-responsive">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th style="width: 34%;"></th>
                    <th style="width: 22%;">Basic</th>
                    <th style="width: 22%;">Standard</th>
                    <th style="width: 22%;" class="text-danger">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="text-start fw-medium">Video quality</th>
                    <td>
                      <p class="fw-bolder text-secondary">Good</p>
                    </td>
                    <td>
                      <p class="fw-bolder text-secondary">Better</p>
                    </td>
                    <td>
                      <p class="text-danger fw-bolder">Best</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start fw-medium">Resolution</th>
                    <td>
                      <p class="fw-bolder text-secondary">720p</p>
                    </td>
                    <td>
                      <p class="fw-bolder text-secondary">1080p</p>
                    </td>
                    <td>
                      <p class="text-danger fw-bolder">4k+HDR</p>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row" class="text-start fw-medium">Watch on your TV,computer,mobile,phone and tablet</th>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                    <td><svg class="bi2" width="24" height="24">
                        <use xlink:href="#check" />
                      </svg></td>
                  </tr>
                </tbody>
              </table>
              <p class="text-secondary fs-6">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
                internet service and device capabilities. Not all content is available in all resolutions. See our <a href="" class="text-decoration-none">Terms of
                  Use</a> for more details.
                Only people who live with you may use your account. Watch on 4 different devices at the same time with
                Premium, 2 with Standard and 1 with Basic.</p>
            </div>
      ```

      4. Finalmente se ajusto el footer, eliminando logos de boostrap,se reutilizo la estructura proporcionada por boostrap y agregando la información necesaria para completar la pagina web de Netflix.

         Acontinuación se mostrara el codigo inicial y final. 

      ```html
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                <img class="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19">
                <small class="d-block mb-3 text-body-secondary">&copy; Campuslands 2023 Bucaramanga</small>
              </div>
              <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                  <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
                </ul>
              </div>
            </div>
          </footer>
      ```

      ```html
      <footer class="my-mt-5 pt-md-5 border-top bg-light px-3">
          <p class="link-secondary fs-6">Questions? Call 01 800 917 1563</p>
          <div class="row">
            <div class="col-12 col-md">
              <small class="d-block mb-3 text-body-secondary">&copy; Campuslands 2023 Bucaramanga</small>
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">FAQ</a></li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Privacy</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Help Center</a></li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Cookie Preferences</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Netflix Shop</a></li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Corporate Information</a></li>
                <li class="mb-1"><a class="link-secondary fs-6 text-decoration-none" href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </footer>
      ```

      

5.Con respecto al codigo de CSS, se agregaron las fuentes utilizadas por la pagina de Netflix, y para este caso especifico se modificaron las siguientes familias:

```css
/* Clases Cristian */
.bg-danger-subtle {
  background: rgb(239, 107,114) !important;
}
.bg-danger {
  background: rgb(229, 9,20)!important;
}
.bg-danger-subtle {
  background-color: var(--bs-danger-bg-subtle) !important;
}
:root, [data-bs-theme="light"] {
  --bs-danger: rgb(229,9,20);
  --bs-danger-bg-subtle: rgb(239,107,114);
}
.text-danger {
  --bs-text-opacity: 1;
  color: rgb(229, 9,20) !important;
}
.text-secondary {
  --bs-text-opacity: 2;
  color: rgba(115,115,115) !important;
}
.fs-6 {
  font-size: 0.8rem !important;
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(243,243,243) !important;
}
/* Fin clases cristian */
```
NOTA:
No se creo ninguna familia nueva, en cambio se manejo las ya predefinidas por el framework de boostrap.

