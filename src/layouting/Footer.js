import "../style/footer.css";
import logo_nutziverse from "../images/logo_nutziverse.png";

export default function Footer() {
  return (
    <div className="box">
      <div class="container">
        <div class="row">
          <div class="col">
            <div>
              <img className="me-auto mb-3" src={logo_nutziverse} height="50px" alt="Logo"></img>
              <p>Nutrisi and Gizi for our universe</p>
              <p>Jl. Jenderal Sudirman, Senayan, Jakarta 10270</p>
            </div>
          </div>
          <div class="two col">
            <p>Tentang Kami</p>
            <p>Kebijakan Privasi</p>
            <p>Hubungi Kami</p>
          </div>
          <div class="col">
            <p>Partner Kami</p>
            <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" height="80px" width="160px" alt="Logo"></img>
            <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" height="80px" width="160px" alt="Logo"></img>
          </div>
        </div>
      </div>

      <div class="copyright">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2"></div>
          <div class="col-md-auto">Copyright © Danone 2021 | All Right Reserved</div>
          <div class="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
