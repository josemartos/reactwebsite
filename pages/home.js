import Typist from 'react-typist';

const Home = () => (
  <article className="home">
    <div className="home-info">
      <h1 className="home-title">Hi, I am Jos&eacute; Martos</h1>
      <div className="home-position">
        <Typist>
          frontendDeveloper
          <Typist.Backspace count={12} delay={200} />
          -end developer
        </Typist>
      </div>
    </div>

    <nav className="home-nav">
      <div className="page-container">
        <ul className="home-nav-list">
          <li>
            <a
              href="https://500px.com/martosjosele/"
              target="_blank"
              rel="noopener noreferrer"
              title="500px photography profile"
            >
              photography
            </a>
          </li>
          <li>
            <a
              title="All job related info to date"
              href="/assets/pdf/CV_JoseMartos.pdf"
              download
            >
              resume
            </a>
          </li>
          <li>
            <a
              href="https://www.quellevardeviaje.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="A web article written in Spanish"
            >
              writings
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="home-greetings">
      <a
        href="mailto:martosjosele@gmail.com?subject=Hi%20there"
        title="Say hi to Jose, or send him a gift"
      >
        drop me
        <span>@</span> line
      </a>
    </div>

    <div className="page-container">
      <p className="home-bio">
        Passionate about the Web for a while now, currently based in Munich
      </p>
    </div>
  </article>
);

export default Home;