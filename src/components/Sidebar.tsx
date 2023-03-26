import style from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react' 
import Avatar from "./Avatar";
function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={style.profile}>
        <Avatar hasBorder
          src="https://avatars.githubusercontent.com/u/94940400?v=4"/>
        <strong>Eduardo Leite</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="http://">
          <PencilLine size={20}/> Editar Perfil
          </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
