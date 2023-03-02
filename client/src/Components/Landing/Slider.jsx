import { useEffect, useState } from "react";
import styles from "../../Styles/landing.module.css";
import Alert from "./Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Slider() {
  const [hover, sethover] = useState(false);
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [date, setdate] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [output, setOutput] = useState([]);
  const [showName, setShowNames] = useState(false);
  const [outputdes, setOutputdes] = useState([]);
  const [showNamedes, setShowNamesdes] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (source === "") {
      setShowNames(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequest();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [source]);

  useEffect(() => {
    if (destination === "") {
      setShowNamesdes(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequestdes();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [destination]);

  const handleGetRequest = async () => {
    try {
      let res = await axios.post("http://localhost:8080/city", {
        source,
      });
      res = res.data;

      setOutput(res);
      setShowNames(true);
      console.log(output);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetRequestdes = async () => {
    try {
      let res = await axios.post("http://localhost:8080/city", {
        destination,
      });
      res = res.data;

      setOutputdes(res);
      setShowNamesdes(true);
    } catch (err) {
      console.log(err);
    }
  };

  function handelhover() {
    sethover(true);
  }

  function handelhoverout() {
    sethover(false);
  }

  function handleclicked() {
    if (date === "" || destination === "" || source === "") {
      setShow(true);
      setsource("");
      setdestination("");
      return;
    }
    if (source === destination) {
      setShow1(true);
      return;
    }
    setsource("");
    getcityinfo(source, destination, date);
  }

  async function getcityinfo(source, destination, date) {
    console.log(source, destination, date);
    navigate(`/selectbus/${source}/${destination}`);
    try {
      // let res = await axios.post("http://localhost:8080/city/showdata", {
      //   source,
      //   destination,
      //   date,
      // });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function handlecityclicked(name) {
    setsource(name);
    setShowNames(false);
    setTimeout(() => {
      setShowNames(false);
    }, [1100]);
  }
  function handlecityclicked1(name) {
    setdestination(name);
    setShowNamesdes(false);
    setTimeout(() => {
      setShowNamesdes(false);
    }, [1100]);
  }
  return (
    <>
      {show ? (
        <Alert
          variant={"info"}
          data={"Please Fill All The Details"}
          setShow={setShow}
          show={show}
        />
      ) : null}
      {show1 ? (
        <Alert
          variant={"info"}
          data={"Source And Destination Can't Be Same"}
          setShow={setShow1}
          show={show1}
        />
      ) : null}
      <div className={styles.Carousel}>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-1157386.jpeg")}
                className="object-fit-cover"
                style={{ height: "70vh", width: "100%" }}
                alt="..."
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-3935702.jpeg")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "70vh", width: "100%" }}
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-4452209.jpeg")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "70vh", width: "100%" }}
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
          </div>
          {hover ? (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
              onMouseOver={handelhover}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          ) : (
            <span className="visually-hidden">Previous</span>
          )}
          {hover ? (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              onMouseOver={handelhover}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          ) : (
            <span className="visually-hidden">Next</span>
          )}
        </div>
        <div className={styles.data}>
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setsource(e.target.value)}
            onCh
            className={styles.inputsource}
          />
          {showName && output.length != 0 && (
            <div className={styles.names}>
              {output?.map((item) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handlecityclicked(item.name)}
                >
                  <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                    {item.name},{item.state}
                  </h6>
                  <hr />
                </div>
              ))}
            </div>
          )}
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setdestination(e.target.value)}
            className={styles.inputsource1}
          />
          {showNamedes && outputdes.length != 0 && (
            <div className={styles.names1}>
              {outputdes?.map((item) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handlecityclicked1(item.name)}
                >
                  <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                    {item.name},{item.state}
                  </h6>
                  <hr />
                </div>
              ))}
            </div>
          )}
          <input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          <button onClick={handleclicked}>Search</button>
        </div>
        <div className={styles.infodiv}>
          <div>
            {" "}
            <img
              src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
              alt="shield"
            />
          </div>
          <div>
            <h4>Introducing Safety+ Program</h4>
            <p>
              A unique certification program that ensures safety in all buses
            </p>
          </div>
          <div>
            <div>
              {" "}
              <button>know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
