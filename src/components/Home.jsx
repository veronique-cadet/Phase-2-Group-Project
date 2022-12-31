const Home = () => {
  return (
    <div>
      <video id="video" muted autoPlay={"autoplay"} preLoad="auto" loop>
        <source
          src="assets/AdobeStock_331088417_Video_4K_Preview.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Home;
