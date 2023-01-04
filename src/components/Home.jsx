const Home = ({ setHome }) => {
  setHome(true);
  console.log("Setting");
  return (
    <div>
      <video id="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
        <source src="assets/AdobeStock_331088417 (1).mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
