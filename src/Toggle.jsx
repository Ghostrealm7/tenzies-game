function Toggle({ changeTheme, isDark }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={changeTheme}
        checked={isDark}
      />
      <label htmlFor="check">{isDark ? "Dark Mode" : "Light Mode"}</label>
    </div>
  );
}

export default Toggle;
