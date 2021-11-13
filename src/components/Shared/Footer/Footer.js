
  const Footer = () => {
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-white">
            <div className="col-md-12">
              <h4>NEWS LETTER</h4>
              <p>
                Enter your email address to receive up-to-date news, new patient
                information and other useful stuff, delivered right to your inbox.
              </p>
              <div>
                <input
                  className="mb-2 p-1"
                  type="email"
                  placeholder="enter your email"
                />
                <button className="ms-1 fw-bold p-1 bg-danger text-white border-0 px-3">
                  Subscribe
                </button>
              </div>
              <div>
                  <p className='text-center'>© 2020 <span className='text-danger'>Fazle Rabbi</span> All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  