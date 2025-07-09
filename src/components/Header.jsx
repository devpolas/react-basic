import styles from './Header.module.css';
import reactImage from './../assets/react-core-concepts.png';

function Header() {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  function genRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const descriptionID = genRandomInt(reactDescriptions.length);
  return (
    <header className={styles.header}>
      <img src={reactImage} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[descriptionID]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;
