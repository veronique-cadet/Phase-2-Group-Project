const Home = ({ setHome }) => {
  setHome(true);
  return (
    <div>
      <video id="video" muted autoPlay={"autoplay"} preLoad="auto" loop>
        <source src="assets/AdobeStock_331088417 (1).mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
