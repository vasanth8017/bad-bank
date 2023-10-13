import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="right">
        <Card
          className="card mb-3"
          maxWidth="26rem"
          txtcolor="black"
          header="Bad-Bank"
          title="Welcome to Bad-Bank"
          text=""
          body={<img src="bank-logo.png" className="img-fluid" alt="Logo" />}
        />
      </div>
    </div>
  );
}

export default Home;
