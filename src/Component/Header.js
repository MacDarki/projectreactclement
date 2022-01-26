import logo from '../assets/yugioh2.png';

function Header() {
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} alt='mon logo' className='logo' />
          <p>
            <h1>Bienvenue sur le site test REACT.</h1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn YU-GI-OH !!!
          </a>
        </header>
      </div>
    )
}
export default Header