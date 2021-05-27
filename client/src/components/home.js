import React from "react";


function Home() {
    return (
           <div style={{position:"fixed", bottom:"0", left:"0", width:"100%"}}>
                {/* <!-- Icons Grid --> */} Pet
                <div>
      
                </div>
                
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>Technology</h3>
            <p className="lead mb-0">Utilizing Speech-to-Text technology to enable transcription of medical records.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Communication</h3>
            <p className="lead mb-0"> Using the systems built in microphone, Speech-to-Text is an easy way for medcial staff to dictate their medical finding into the pet's chart.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary"></i>
            </div>
            <h3>Problem-solving</h3>
            <p className="lead mb-0">Save more time while writing medical notes. Spend the extra time diagnosing and researching treatments for pets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
    );
}

export default Home;