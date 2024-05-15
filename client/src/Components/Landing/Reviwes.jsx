import styles from "../../Styles/landing.module.css";
function Reviews() {
  return (
    <>
      <h2
        style={{
          marginBottom: "28px",
          color: "#4a4a4a",
          textAlign: "center",
          fontWeight: 800,
          fontSize:"30px",
        }}
      >
        Customer Reviews
      </h2>
      <div className={styles.reviewmain}>
        <div className="card">
          <img
          style={{
                  height:"350px",
                  display:"block",
                  objectFit:"cover",
                  
          }}
            src={require("../../Images/mithun.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Mithun Kumar Yadav</h5>
            <p className="card-text">
              BookMyBus is good plateform to book online tiket and BookMyBus provide easy and simple way of booking ticket with online payment .
            </p>
          </div>
        </div>
        <div className="card">
          <img
           style={{
            height:"350px",
            display:"block",
            objectFit:"cover"
            
    }}
            src={require("../../Images/zeeshan.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Mohd Zeeshan</h5>
            <p className="card-text">
              BookMyBus is a simple online booking aplcation which help to available buses and book ticket.
            </p>
          </div>
        </div>
        <div className="card">
          <img
          style={{
            height:"355px",
            display:"block",
            objectFit:"cover",
            
            
    }}
            src={require("../../Images/priyanshu.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Priyanshu Kumar</h5>
            <p className="card-text">
            BookMyBus is a simple online booking platform to booking ticket with online payment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
