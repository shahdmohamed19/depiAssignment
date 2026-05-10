function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>FitZone</h2>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Plans</li>
        <li>Contact</li>
      </ul>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  )
}

export default Navbar
