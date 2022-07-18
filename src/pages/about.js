import * as React from 'react'
import Layout from '../components/layout'
import { divider } from '../../styles/main.module.css'
import { noDecorationList } from '../../styles/about.module.css'

const AboutPage = () => {
    return (
        <React.StrictMode>
            <Layout
                pageTitle="About">
                <section>
                    <p>
                        Hi, I'm Juan Fernando- Cocodriltte for the friends. I'm from Colombia and live in Medellín. I'm 21 years old and studying Law (Derecho) at Universidad de Antioquia and I'm about to start studying Systems Engineering at Universidad Nacional de Colombia.
                    </p>
                    <p>
                        I'm a frontend developer, and I'm currently working on this site. I'm currently learning React, Gatsby, Node.js, Next.js and Nest.js.
                    </p>
                    <p>
                        I'm also know a bit of Python and Django. I'm also know how to use Git and GitHub.
                    </p>
                    <p>
                        Also, I'm currently working on a paper about Smart Contracts from a legal perspective for my degree work. So, I needed to learn a lot of things about Web 3, Solidity, Ethereum, Blockchain, distributed systems, decentralized applications, and more.
                    </p>
                    <p>
                        <em>Down below you can find some of my projects. And the source code of this site and all my socials</em>
                    </p>
                </section>
                
                <div className={divider}></div>
                
                <h2>
                    Projects
                </h2>

                <ul className={noDecorationList}>
                    <li>✅ <a href='https://github.com/Cocodrilette/coco-devblog' title='See on Github'>This site</a></li>
                    <li>✅ <a href='https://invincible-melted-headlight.glitch.me' title='See on Github'>Shooping List Web-App without backend</a>(using localstorage)</li>
                    <li>✅ <a href='https://github.com/Cocodrilette/moz-todo-react.git' title='See on Github'>To Do App </a>(using React)</li>
                    <li>✅ <a href='https://github.com/Cocodrilette/Xasify-App' title='See on Github'>Sales and inventory recorder</a>(Using Django, deploy on Heroku and conected PostgresSQL with Excel)</li>
                    <li>✅ <a href='https://boiling-crystal-newsprint.glitch.me' title='See on Glicth'>Abandoned blog</a> using Eleventy on Glitch</li>
                </ul>

                <h2>
                    My socials
                </h2>
                <ul className={noDecorationList}>
                    <li>🔆 <a href='https://www.instagram.com/cocodrilette/' title='Go to my Instagram'>Instagram</a></li>
                    <li>🔆 <a href='https://www.linkedin.com/in/juan-fernando-cogollo-doria-66890523b/' title='Go to my Linkedin'>Linkedin</a></li>
                    <li>🔆 <a href='https://github.com/Cocodrilette' title='Go to my Github'>GitHub</a></li>
                    <li>🔆 <a href='emailto:cocodrilette@gmail.com' title='Email me'>Personal email</a></li>
                </ul>
            </Layout>
        </React.StrictMode>
    )
}

export default AboutPage