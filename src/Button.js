function Button({setHitCount}) {
  const handleButtonClick = () => {
    fetch("https://api.countapi.xyz/hit/mysite.com/1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
    .then(res => res.json())
    .then(result => setHitCount(result.value))
  }
  return (
    <button className="Button" onClick={handleButtonClick}>
      Click Me
    </button>
  );
}

export default Button;
