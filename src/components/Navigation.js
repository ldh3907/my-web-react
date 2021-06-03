import "./Navigation.css";

function Navigation() {
  return (
    <section id="navigation">
      <div className="navigation-container">
        <div className="nav-logo-img">
          <img
            src="https://image.flaticon.com/icons/png/128/639/639394.png"
            alt="logo"
            title="logo"
          />
        </div>
        <div className="nav-item-container">
          <div className="nav-item font-style">포트폴리오</div>
          <div className="nav-item font-style">포트폴리오</div>
          <div className="nav-item font-style">포트폴리오</div>
          <div className="nav-item font-style">포트폴리오</div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
