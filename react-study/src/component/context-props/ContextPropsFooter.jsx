
const ContextPropsFooter = ({ isDark, setIsDark }) => {

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <footer
      className="px-2 py-1 flex justify-end"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
    <button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={toggleTheme}>Dark Mode</button>
    </footer>
  )
}

export default ContextPropsFooter