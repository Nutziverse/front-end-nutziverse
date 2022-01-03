import "../style/footer.css";
import logo_nutziverse from "../images/footer_nutzyverse.png";

export default function Footer() {
  return (
    <div class="mt-5 box">
      <div className="container-fluid mt-5">
        <div class="row ms-5">
          <div class="col-4">
            <div>
              <img className="me-auto mb-3" src={logo_nutziverse} height="50px" alt="Logo"></img>
              <p>Nutrisi and Gizi for our universe</p>
              <p>Jl. Jenderal Sudirman, Senayan, Jakarta 10270</p>
            </div>
          </div>
          <div class="col-4 mt-2">
            <div className="d-flex mt-2">
              <div className="ms-auto me-auto">
                <p>Tentang Kami</p>
                <p>Kebijakan Privasi</p>
                <p>Hubungi Kami</p>
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 text-center">
            <p>Partner Kami</p>
            <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" height="80px" width="160px" alt="Logo"></img>
            <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" height="80px" width="160px" alt="Logo"></img>
          </div>
        </div>
        <div class="copyright">
          <div class="row mb-4 mt-5 text-center">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">Copyright © Danone 2021 | All Right Reserved</div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
