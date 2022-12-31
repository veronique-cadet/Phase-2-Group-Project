const NavBar = () => {
  return (
    <div className="nav-div">
      <div className="nav-header">
        <h1 className="nav-title">Lotus</h1>
        <img id="nav-icon" src="assets/lotus (3).png" alt="lotus" />
      </div>
      <div className="nav-options">
        <p className="nav-item">LOG</p>
        <p className="nav-item">STATS</p>
        <p className="nav-item">GET ZEN</p>
      </div>
    </div>
  );
};

export default NavBar;
