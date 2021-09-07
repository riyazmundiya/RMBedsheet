import React from "react";

export const Footer = () => {
  return (
    <>
      <div class="container my-5">
        <footer
          class="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section
            class="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: "#21D192" }}
          >
            <div class="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">RM Bedsheets</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px",backgroundColor: "#7c4dff",
                      height: '2px'
                    }}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      BedSheets
                    </a>
                  </p>
                  
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> Five Star Complex ,Jetpur
                    ,360370 ,Gujrat
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> rmbedsheets@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +91 8160248753
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> +91 8866282482
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            class="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a class="text-dark" href="https://rmbedsheets.com/">
              RMBedsheets.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
