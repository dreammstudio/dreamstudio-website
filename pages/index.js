import React from "react";
import ProgressBar from "../Compotents/ProgressBar";
import Head from 'next/head'
import styles from '../styles/App.module.css'
import {SiGithub,SiDevdotto,SiDiscord} from 'react-icons/si'
function App() {
  const userID = "432570314120101889";
  const github_username = "dreammstudio"
  let [user, setUser] = React.useState(undefined);
  let [repos, setRepos] = React.useState([])
  React.useEffect(() => {
    const OPCODES = {
      INFO: 0,
      HELLO: 1,
      INIT: 2,
      HEARTBEAT: 3,
    };
    // credit: https://github.com/5elenay/5elenay.github.io
    const lanyard = new WebSocket("wss://api.lanyard.rest/socket")

    lanyard.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);

      if (parsedData.op == OPCODES.HELLO) {
        lanyard.send(
          JSON.stringify({
            op: OPCODES.INIT,
            d: {
              subscribe_to_id: userID,
            },
          })
        );

        setInterval(function() {
          lanyard.send(
            JSON.stringify({
              op: OPCODES.HEARTBEAT,
            })
          );
        }, parsedData.d.heartbeat_interval);
      } else if (parsedData.op == OPCODES.INFO) {
        if (parsedData.t == "INIT_STATE") {
          const user = parsedData.d;
          user.discord_user.avatar = `https://cdn.discordapp.com/avatars/${userID}/${user.discord_user.avatar}.png?size=256`;
          setUser(user);
        } else if (parsedData.t == "PRESENCE_UPDATE") {
          const user = parsedData.d;
          user.discord_user.avatar = `https://cdn.discordapp.com/avatars/${userID}/${user.discord_user.avatar}.png?size=256`;
          setUser(user)
        }
      }
      // 
    };
    fetch(`https://api.github.com/users/${github_username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data)
      })
  }, []);
  if (!user) return <div>Loading...</div>
  return (
    <div className={styles.App}>
      <Head>
        <link rel="icon" href={user.discord_user.avatar} />
        <title>           {user.discord_user.username +
          "#" +
          user.discord_user.discriminator}</title>
      </Head>
      <div className={`${styles.item} ${styles.personal}`}>
        <img src={user.discord_user.avatar} alt=""></img>
        <div className={styles.text}>
          <h1>
            {user.discord_user.username +
              "#" +
              user.discord_user.discriminator}
          </h1>
          <p>
            I am a student from Turkey I have been in coding since 2019. I am a newbie full stack developer. I have been working on web development for the last 1 years.
          {user.activities.length !== 0 && user.activities.filter(e => e.name == "Custom Status").length !== 0 && <> <br /> <span style={{ fontSize: ".75rem !important", opacity: "0.5" }}>Custom Status: {user.activities.filter(e => e.name === "Custom Status")[0].state} </span> </>}
            {user.activities.length !== 0 && user.activities.filter(e => e.name === "Visual Studio Code").length !== 0 && <>            <br /><span style={{ fontSize: ".75rem !important", opacity: "0.5" }}>{user.activities.filter(e => e.name === "Visual Studio Code")[0].details}.</span> </>}
            {user.discord_status === "offline" && <>            <br /> <span style={{ fontSize: ".75rem !important", opacity: "0.5" }}>Offline</span> </>}
          </p>
          <ul className={styles["social_medias"]}>
            <li><a href={`https://discord.com/channels/@me/${userID}`}><SiDiscord/></a></li>
            <li><a href="https://dev.to/dreammstudio"><SiDevdotto/></a></li>
            <li><a href="https://github.com/dreammstudio"><SiGithub/></a></li>
          </ul>
        </div>
      </div>
      <div className={`${styles.languages} ${styles.item}`}>
        <h1 style={{ width: "100%", textAlign: "center", "margin": ".05rem" }}>I use</h1>
        <article>
          <p>CSS</p>
          <ProgressBar percent={80}></ProgressBar>
        </article>
        <article>
          <p>Javascript</p>
          <ProgressBar percent={90}></ProgressBar>
        </article>
        <article>
          <p>HTML</p>
          <ProgressBar percent={60}></ProgressBar>
        </article>
        <article>
          <p>ReactJS</p>
          <ProgressBar percent={75}></ProgressBar>
        </article>
        <article>
          <p>TailwindCSS</p>
          <ProgressBar percent={40}></ProgressBar>
        </article>
        <article>
          <p>NextJS</p>
          <ProgressBar percent={50}></ProgressBar>
        </article>
      </div>
      <div className={styles.github}>
        <h3>My Github Repositories</h3>
        <div className={styles.repos}>
          {repos.map((repo) => (
            <a key={repo.name} className={styles.repo} rel="noreferrer" target="_blank" href={repo.html_url}>
              <p>{repo.name}</p>
            </a>
          ))
          }
        </div>
      </div>
    </div>
  );
}
// Here we have taken the styles from different file, but you can also do it in the same file.
// Example: Compotents/ProgressBar.js Line:19

export default App;
