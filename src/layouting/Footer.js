import "../style/footer.css";
import logo_nutziverse from "../images/footer_nutzyverse.png";

export default function Footer() {
  return (
    <div class="mt-5 box">
      <div className="container">
        <div class="row mt-4">
          <div class="col-12 col-md-4 mb-4 mb-lg-0">
            <div>
              <img className="me-auto mb-3" src={logo_nutziverse} height="50px" alt="Logo"></img>
              <p>Nutrisi and Gizi for our universe</p>
              <p>Jl. Jenderal Sudirman, Senayan, Jakarta 10270</p>
            </div>
          </div>
          <div class="col-12 col-md-4 mt-2 mb-4 mb-lg-0">
            <div className="d-flex ">
              <div className="ms-md-auto me-md-auto">
                <p>Tentang Kami</p>
                <p>Kebijakan Privasi</p>
                <p>Hubungi Kami</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mt-2 text-md-center">
            <p>Partner Kami</p>
            <div className="d-flex flex-column align-items-md-center">
              <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" height="80px" width="160px" alt="Logo"></img>

              <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" height="80px" width="160px" alt="Logo"></img>
            </div>
          </div>
        </div>
        <div class="copyright mb-5 mb-lg-0">
          <div class="row mb-4 mt-5 text-center">
            <div class="col-12 mb-5 mb-lg-0">Copyright © Danone 2021 | All Right Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
