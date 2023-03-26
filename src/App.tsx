import Header from "./components/Header";
import { Post, PostType } from "./components/Post";
import style from "./app.module.css";
import Sidebar from "./components/Sidebar";

import "./index.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/94940400?v=4",
      name: "Eduardo Leite",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragrafo",
        content:
          "'Nós somos quem escolhemos ser... Por isso, escolha!' - Peter Parker ",
      },
      { type: "paragrafo", content: "CARA QUE OBRA INCRIVEL!" },
      { type: "link", content: "spider-man/filmecompleto" },
    ],
    publishedAt: new Date("01-05-2023"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/4248081?v=4",
      name: "Filipe Deschamps",
      role: "Fã de Anime",
    },
    content: [
      {
        type: "paragrafo",
        content:
          "Na vida, você sempre passará por altos e baixos, mas Naruto sempre deu um jeito. E quer saber? Eu tambem darei!",
      },
    ],
    publishedAt: new Date("01-05-2023"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/11837941?v=4",
      name: "Matheus Battisti",
      role: "Nerd Rico",
    },
    content: [
      { type: "paragrafo", content: "E ai pessoal, tudo bem com vocês hoje?" },
    ],
    publishedAt: new Date("01-05-2023"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={style.Wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
