const About = () => {
  return (
    <div className="page-container">
      <h1>About This Project</h1>
      <p>This project showcases advanced React Router features including:</p>

      <div className="feature-list">
        <div className="feature">
          <h3>Nested Routes</h3>
          <p>
            The Profile section contains nested routes for Details and Settings.
          </p>
        </div>

        <div className="feature">
          <h3>Dynamic Routing</h3>
          <p>Blog posts use dynamic URLs based on their ID.</p>
        </div>

        <div className="feature">
          <h3>Protected Routes</h3>
          <p>The Profile section requires authentication to access.</p>
        </div>

        <div className="feature">
          <h3>Route Parameters</h3>
          <p>
            Blog posts extract parameters from the URL to display specific
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
