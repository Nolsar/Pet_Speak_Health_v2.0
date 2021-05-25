import React from "react";


function Home() {
    return (
           <div style={{position:"fixed", bottom:"0", left:"0", width:"100%"}}>
                {/* <!-- Icons Grid --> */}
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>Technology</h3>
            <p className="lead mb-0">Radiologists typically are supervising technicians who operate the machines used for imaging, so they must have expert-level knowledge of how to operate them.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Communication</h3>
            <p className="lead mb-0"> Veterinary radiologists typically are part of a team. Whether they work in a veterinary clinic or a radiology clinic that contracts with multiple vets, they need to be able to discuss results and treatment options with other veterinarians.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary"></i>
            </div>
            <h3>Problem-solving</h3>
            <p className="lead mb-0">Diagnoses are not always obvious and straightforward. Symptoms may be vague, so radiologists need to figure out from the information they have the best way to get images and the best way to use that information.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
    );
}

export default Home;