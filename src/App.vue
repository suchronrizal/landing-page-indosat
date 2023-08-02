<template>
  <div id="app">
    <section class="topbar d-block d-lg-flex text-danger bg-transparent">
      <div class="container small-3">
        <nav class="nav">
          <a class="nav-link pl-0" href="#">Personal</a>
          <a class="nav-link" href="#">Business</a>
          <a class="nav-link d-none d-md-block d-lg-block" href="#">About Indosat Ooredoo</a>
          <a class="nav-link d-none d-md-block d-lg-block" href="#">Investor Relations</a>
        </nav>
        <nav class="nav">
          <a class="nav-link d-none d-md-block d-lg-block pl-0" href="#">English</a>
          <a class="nav-link d-none d-md-block d-lg-block" href="#">Bahasa Indonesia</a>
        </nav>
      </div>
    </section><!-- /.topbar -->

    <!-- Navbar -->
    <nav class=" mt-5 mt-lg-2 navbar navbar-expand-lg navbar-dark navbar-stick-dark" data-navbar="smart">
      <div class="container bg-white rounded-lg shadows py-3">
        <div class="row">
          <div class="col-md-11 mx-auto">
            <div class="row">
              <div class="col-lg-auto col-6 pl-5 pl-lg-3 position-relative">
                <a class="navbar-brand" href="#">
                  <img class="logo-dark" src="./assets/img/logo/logo_indosat.png" alt="logo">
                </a>
                <v-toolbar>
                  <p class="my-0 fs-9 fw-600 text-danger position-absolute" style="top:3.6rem">Ini Baru Internetan Seru</p> 
                </v-toolbar>
              </div>
              <div class="col-auto mr-auto d-none d-lg-block d-md-block">
                <nav class="nav nav-navbar nav-text-normal">
                  <a class="nav-link text-danger" href="#">Products</a>
                  <a class="nav-link text-danger" href="#">Why IM3 Ooredoo</a>
                  <a class="nav-link text-danger" href="#">Shop</a>
                  <a class="nav-link text-danger" href="#">myIM3</a>
                  <a class="nav-link text-danger" href="#">Buy SIM Card</a>
                  <a class="nav-link text-danger" href="#"><span class="badge badge-danger p-1 fs-9">BARU</span></a>
                </nav>
              </div>
              <div class="col-auto col-md-3 ml-auto">
                <div class="d-flex align-items-center">
                  <a href="" class="nav-link lead-3 d-lg-none d-md-none"><i class="fa fa-search"></i></a>
                  <a class="nav-link lead-3 d-lg-none d-md-none" href="#" data-toggle="offcanvas" data-target="#offcanvas-menu">&#9776;</a>
                  <div class="input-round d-none d-md-block d-lg-block">
                    <div class="input-group bg-white p-1">
                      <input type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-danger">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav><!-- /.navbar -->

     <!-- Header -->
     <header class="header pb-0" style="background-color: #FFD309">
      <div class="container">
        <div class="row align-items-center h-100 pt-3 pt-md-3">
          <div class="col-lg-6 col-12">
            <h1 class="fw-600">Upgrade <span class="text-danger">Prime </span>wia online<br>Now with nation-waide delivery</h1>
            <div style="border:2px solid #323D47" class="w-10 text-left rounded-lg"></div>
            <div class="row gap-y text-dark fw-600 py-5 position-relative">
              <div class="col-md-12 col-6">
                <div class="row">
                  <div class="col-md-6">
                    <div class="media">
                      <div class="lead-6 line-height-1 text-dark w-50px"><i class="icon-mobile"></i></div>
                      <div class="media-body">
                        <p>Billing Account up to 300k</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <div class="lead-6 line-height-1 text-dark w-50px"><i class="icon-mobile"></i></div>
                      <div class="media-body">
                        <p>A log of special number choice</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <div class="lead-6 line-height-1 text-dark w-50px"><i class="icon-mobile"></i></div>
                      <div class="media-body">
                        <p>Discount shipping free</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <div class="lead-6 line-height-1 text-dark w-50px"><i class="icon-mobile"></i></div>
                      <div class="media-body">
                        <p>Access VIU Premium without registration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-7 ml-auto d-lg-none position-absolute" style="right:0; top:5.9rem">
                <img src="./assets/img/vector/postpaid_person.webp" alt="">
              </div>
            </div>
            <p class="gap-xy pb-5">
              <a class="btn btn-round btn-danger mw-200" href="#">Order Now</a>
            </p>
          </div>
          <div class="col-lg-5 ml-auto d-none d-lg-block">
            <img src="./assets/img/vector/postpaid_person.webp" alt="img">
          </div>
        </div>
      </div>
    </header><!-- /.header -->

    <main class="main-content">
      <section class="section pb-8">
        <div class="container">
          <header class="section-header  text-left text-lg-center">
            <h2 class="fw-600">3 easy step to get  your IM3 Ooredoo SIM Card</h2>
            <p>Now, you can easily get your IM3 Ooredoo SIM Card without hassle</p>
          </header>
          <div class="row gap-y">
            <div class="col-md-6 col-xl-4">
              <div class="media">
                <div class="lead-6 line-height-1 text-lighter w-70px"><img src="./assets/img/icon/ico_simcard.svg" alt=""></div>
                <div class="media-body">
                  <h5 class="fw-600">1. Choose Number & Plan</h5>
                  <p>Choose your desired number and data plan</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="media">
                <div class="lead-6 line-height-1 text-lighter w-70px"><img src="./assets/img/icon/ico_shipping_info.svg" alt=""></div>
                <div class="media-body">
                  <h5 class="fw-600">2. Fill In Shipping Info</h5>
                  <p>Complete your shipping information</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="media">
                <div class="lead-6 line-height-1 text-lighter w-70px"><img src="./assets/img/icon/ico_cc.svg" alt=""></div>
                <div class="media-body">
                  <h5 class="fw-600">3. Make Your Payment</h5>
                  <p>Pay easily with vorious payment method</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section py-3 bg-gray overflow-hidden">
        <div class="container">
          <div class="row gap-y">
            <div class="col-md-6 text-center text-lg-right algin-self-end"><img src="./assets/img/vector/postpaid_person_mobile.webp" width="400px" alt=""></div>
            <div class="col-md-6 align-self-center order-md-first">
              <h6>POSTPAID</h6>
              <h2 class="fw-600">Free yourself form reload routine, subscribe <span class="text-danger">Prime</span> & <span class="text-danger">get bill discount up to 300k</span></h2>
              <div class="row gap-y pt-5">
                <div class="col-md-6 col-xl-4">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_delivery.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">Discount shipping free</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 px-lg-0">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_billpayment.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">Billing discount up to 300k</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 px-lg-0">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_delivery.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">A lot of special number choice</p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="gap-xy pt-5 text-center text-lg-left">
                <a class="btn btn-round btn-danger mx-200 " href="#">Subscribe POSTPAID</a>
              </p>
              <p class="gap-y">
                <div class="rounded-lg d-flex align-items-center p-4 fs-12 fw-600" style="background-color: #F9F9F9;">
                  <span class="mr-3 fs-14">Already  have prepaid number? Upgrade to postpaid</span>
                  <a href="" class="text-danger ml-auto">Updgrade now <i class="fa fa-angle-right"></i></a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section py-3">
        <div class="container">
          <div class="row gab-y">
            <div class="col-md-6 text-center pb-7"><img src="./assets/img/vector/prepaid_person.webp" alt=""></div>
            <div class="col-md-6 align-self-center">
              <h6>POSTPAID</h6>
              <h2>Prepaid SIM Card make your days with exciting bonus and discount<span class="text-danger">Prime</span> & <span class="text-danger">get bill discount up to 300k</span></h2>
              <div class="row gap-y py-5">
                <div class="col-md-6 col-xl-4">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_delivery.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">Discount shipping free</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 px-lg-0">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_freedom_internet.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">Billing discount up to 300k</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4 px-lg-0">
                  <div class="media">
                    <div class="lead-6 line-height-1 text-lighter w-50px"><img src="./assets/img/icon/ico_simcard.svg" alt=""></div>
                    <div class="media-body">
                      <p class="fs-16 fw-600">A lot of special number choice</p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="gap-xy">
                <a class="btn btn-round btn-danger mw-200" href="#">ORDER REPAID</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section py-0 bg-gray">
        <div class="container pt-5 pb-8 overflow-hidden">
          <header class="section-header">
            <h2>Already place an order for IM3 Ooredoo SIM Card</h2>
          </header>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="media bg-white rounded-lg p-5 shadow-5">
                <div class="lead-6 line-height-1 text-lighter w-70px"><img src="./assets/img/icon/img_track_order.svg" alt=""></div>
                <div class="media-body">
                  <h5>Track Your Order</h5>
                  <p class="fs-12">Already ordered? get to now your order status</p>
                  <a href="" class="text-danger fw-600 fs-12">Track Now <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="media bg-white rounded-lg p-5 shadow-5">
                <div class="lead-6 line-height-1 text-lighter w-70px"><img src="./assets/img/icon/img_activate_postpaid.svg" alt=""></div>
                <div class="media-body">
                  <h5>Track Your Order</h5>
                  <p class="fs-12">Already ordered? get to now your order status</p>
                  <a href="" class="text-danger fw-600 fs-12">Track Now <i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section pt-8 pb-0">
        <div class="container">
          <div class="row gap-y">
            <div class="col-md-5 align-self-center">
              <div class="rounded-lg" style="background-color: #3e3e3e;">
                <div class="py-8 d-flex justify-content-center align-self-center">
                  <a href="" class="iconbox iconbox iconbox-xxl">
                    <i class="fa fa-play text-danger"></i>
                  </a>
                </div>
              </div>
              <p class="text-center py-5 fw-600">Langsung play tanpa registrasi <a href="" class="text-danger">im3ooredoo.com/viu</a></p>
            </div>
            <div class="col-md-7 text-right"><img src="./assets/img/vector/viu_person.webp" alt=""></div>
          </div>
        </div>
      </section>
      <section class="section py-0" style="background-color: #FFD309;">
        <div class="container">
          <div class="row">
            <div class="col-md-8 pb-5 text-center text-md-left align-self-center">
              <h2>Have your SIM Card delivered to your doorstep</h2>
              <p class="gap-xy">
                <a class="btn btn-round btn-danger mw-200" href="#">Order Now</a>
              </p>
            </div>
            <div class="col-md-4 text-center order-md-first align-self-end"><img src="./assets/img/vector/image_reminder_cta.webp" alt=""></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="row gap-y justify-content-between align-items-center bg-gray rounded-lg">
            <div class="col-md-8">
              <div class="media align-items-center">
                <div class="lead-6 line-height-1 text-lighter w-90px"><img src="./assets/img/icon/img_suggest_feedback.svg" alt=""></div>
                <div class="media-body">
                  <h3>Have  a progblem or suggestion? Leave us a feedback</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center text-md-right"><button class="mw-200 btn btn-danger btn-round">Give Feedback</button></div>
          </div>
          <div class="pt-8 text-center text-lg-left">
            <h3 class="fw-600">Question and Answer</h3>
            <button class="btn btn-round btn-danger">General</button>
            <button class="btn btn-round btn-outline-secondary">Prepaid</button>
            <button class="btn btn-round btn-outline-secondary">Postpaid</button>
          </div>
          <div class="row gap-y pt-7">
            <div class="col-md-12">
              <ul class="list-unstyled">
                <li>
                  <span class="iconbox iconbox iconbox-xs bg-danger text-white mr-5"><i class="fa fa-angle-right"></i></span>
                  <span>What does it mean by online SIM Card purchase?</span>
                </li>
                <li>
                  <span class="iconbox iconbox iconbox-xs bg-danger text-white mr-5"><i class="fa fa-angle-right"></i></span>
                  <span>Is online SIM card purchase available in across Indonesia?</span>
                </li>
                <li>
                  <span class="iconbox iconbox iconbox-xs bg-danger text-white mr-5"><i class="fa fa-angle-right"></i></span>
                  <span>Do I need to take the SIM card myself to the nearest outlite</span>
                </li>
              </ul>
              <hr>
              <p class="gap-xy text-center">
                <a href="" class="text-danger">See all question <i class="fa fa-angle-down"></i></a>
              </p>
              <div class="row gap-y pt-5">
                <div class="col-md-12 text-center rounded-lg" style="background-color: #9b9b9b;">
                  <h6 class="text-white fw-600">Term & Conditions</h6>
                  <a href="" class="small">
                    <span class="iconbox iconbox iconbox-xs bg-default text-danger mr-1"><i class="fa fa-angle-right"></i></span>
                    <span class="text-white">Read all</span>
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <section class="section py-1" style="background-color: #FFD309;">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-8 mx-auto">
              <form action="" class="input-round">
                <div class="form-group row align-items-center">
                  <label for="" class="col-md-6 text-center text-lg-right pt-4"><h4 class="fw-600">Subscribe to stay in touch</h4></label>
                  <div class="col-md-6">
                    <div class="input-group bg-white p-1">
                      <input type="text" class="form-control" placeholder="Your Email">
                      <div class="input-group-append">
                        <button class="btn btn-danger" type="button">
                          <i class="fa fa-send text-white"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="section py-1 bg-danger">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center text-white">
              <h4 class="fw-600">Social Media</h4>
              <span class="text-center">
                <span class="iconbox mr-4">
                  <i class="fa fa-twitter text-danger"></i>
                </span>
                <span class="iconbox mr-4">
                  <i class="fa fa-facebook text-danger"></i>
                </span>
                <span class="iconbox mr-4">
                  <i class="fa fa-youtube text-danger"></i>
                </span>
                <span class="iconbox">
                  <i class="fa fa-instagram text-danger"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="section" style="background-color: #323D47;">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5 class="text-white">Support</h5>
              <div class="nav flex-column text-white">
                <a class="nav-link" href="#">Promotion</a>
                <a class="nav-link" href="#">FAQ</a>
                <a class="nav-link" href="#">Term & Conditions</a>
                <a class="nav-link" href="#">Privacy Policy</a>
                <a class="nav-link" href="#">Coverage Map</a>
              </div>
            </div>
            <div class="col-md-4">
              <h5 class="text-white">Investor Relations</h5>
              <div class="nav flex-column text-white">
                <a class="nav-link" href="#">About Indosat</a>
                <a class="nav-link" href="#">Ideabox</a>
                <a class="nav-link" href="#">Press Release</a>
                <a class="nav-link" href="#">Career</a>
              </div>
            </div>
            <div class="col-md-4">
              <h5 class="text-white">Kontak Kami</h5>
              <div class="nav flex-column text-white">
                <a class="nav-link" href="#">Contact Information</a>
                <a class="nav-link" href="#">Find a Store</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>