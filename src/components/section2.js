import "../assets/css/section2.css";


function DetailSection() {

  const openLink = (link) => {
    window.open(link)
  }

  return (
    <div className="container-2">
      <div className="title" id="project-info">
        PROJECTS
      </div>
      <p className="description">You can click on the project title to see a repository.</p>
      <div className="projects-area">
        {/* <div className="project-box">
          <h2 className="circle-title" onClick={() => { openLink("https://github.com/whoisnaisu/find-a-book") }}>
            Find a Book
          </h2>
          <br />
          <p className="circle-description">
            Simple book search engine with google API using <strong>React</strong>.
          </p>
        </div> */}
        <div className="project-box" onClick={() => { openLink("https://github.com/techupth/home-service") }}>
          <h2 className="circle-title" >
            Home Service
          </h2>
          <br />
          <p className="circle-description">
            Collaborating on a group project with the <strong>Agile Scrum method</strong>, mainly
            responsible for front-end development using <strong>React</strong> and Chakra UI.
          </p>
          <br />
          <p className="circle-description">
            Stacks: HTML CSS JavsScript React ChakraUI Express.js PostgreSQL
          </p>
        </div>
        {/* <div className="project-box">
          <h2 className="circle-title">
            Pacman Game
          </h2>
          <br />
          <p className="circle-description">
            Nostrud eiusmod aliqua ea aliquip pariatur id esse. Cillum aliqua
            commodo et enim. Ut elit irure ad ex exercitation nulla proident
            Lorem ea Lorem consectetur irure est adipisicing.
          </p>
        </div> */}
      </div>

      <div className="title" id="work-info">
        WORK EXPERIENCE
      </div>
      <p className="description">Previous work experience && my responsible for the roles.</p>
      <div className="work-area">
        <div className="work-box">
          <h2 className="circle-title">Call Center (Internship), 2018</h2>
          <br />
          <p className="circle-description">
            <ul>
              <li>Informed the details to the person interested in attending the exhibition.</li>
              <li>Persuaded and followed up for confirmation from the attendees.</li>
              <li>Updated attendees' information to the database.</li>
            </ul>
          </p>
        </div>
        <div className="work-box">
          <h2 className="circle-title">Graphic Designer, 2019-2020</h2>
          <br />
          <p className="circle-description">
            <ul>
              <li>Designed digital graphic about the products for advertisement.</li>
              <li>Wrote digital content for brand promotion and marketing.</li>
            </ul>
          </p>
        </div>
        <div className="work-box">
          <h2 className="circle-title">Salesperson, 2020</h2>
          <br />
          <p className="circle-description">
            <ul>
              <li>Recommended the best match product to the client.</li>
              <li>Closed a sale, and convinced new lead.</li>
            </ul>
          </p>
        </div>

      </div>

      <hr className="close-line" />
    </div>
  );
}

export default DetailSection;
