const Download = () => {
    return (
        <div className="mb-5 mt-5 pb-5">
        <h2 className="section-title text-center">DOWNLOAD</h2>

        <section className="download-section" id="download">
            <div className="container text-center">
            <p>Available on iOS and Android.</p>
            <div className="download-buttons">
            <a href="https://example.com/ios-download" className="btn download-btn ios-btn">
                <i className="fab fa-apple"></i> iOS
                  </a>
                <a href="https://example.com/android-download" className="btn download-btn android-btn">
                <i className="fab fa-android"></i> Android
                </a>
            </div>
            </div>
        </section>
        </div>
    );
};

export default Download;
  