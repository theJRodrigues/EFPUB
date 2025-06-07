import { Link } from "react-router";

const styles = {
  header: "bg-slate-800 text-white flex items-center justify-between px-4",
  nav: "flex gap-2 w-1/2 justify-around",
  items:
    "py-2 px-0.5 text-xl  tracking-wider relative before:absolute before:left-0 before:bottom-0 before:w-full before:scale-x-0 before:h-[1px] before:rounded before:bg-slate-300 hover:text-slate-300 hover:before: hover:before:scale-x-100 hover:before:duration-150 cursor-pointer",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="font-bold text-5xl">EFPUB</h1>

      <nav>
        <ul className={styles.nav}>
          <li className={styles.items}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.items}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={styles.items}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.items}>
            <Link to="/login">Entrar</Link>
          </li>
          <li className={styles.items}>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
