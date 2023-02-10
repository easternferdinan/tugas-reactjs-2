import React from "react";
import './style/main-content.css'

export default class MainContent extends React.Component {

    render() {
        return(
            <main>
                <h3>How is my journey in web development?</h3>
                <p>My curiosity led me to learn how to build a website by watching HTML and CSS tutorials on YouTube. After graduating from high school, I decided to pursue web development more seriously and learned JavaScript, basic PHP, and MySQL. I then enrolled in a MERN stack class at <a href="eduwork.id">eduwork.id</a></p>

                <h3>I'm familiar with:</h3>
                <div>
                    <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="HTML badge" />
                    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS badge" />
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript badge" />
                    <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ badge" />
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap badge" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS badge" />
                    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL badge" />
                </div>

                <h3>Currently learning:</h3>
                <div>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React badge" />
                    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js badge" />
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js badge" />
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB badge" />
                </div>

                <h3>Having interest in:</h3>
                <div>
                    <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python badge" />
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" />
                </div>

                <h3>Feel free to check me out on:</h3>
                <div>
                    <a href="https://www.github.com/easternferdinan">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" />
                        <caption>(easternferdinan)</caption>
                    </a>
                    <a href="https://www.codewars.com/users/allout18">
                        <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=Codewars&logoColor=white" alt="Codewars Badge" />
                        <caption>(allout18)</caption>
                    </a>
                </div>
            </main>
        )
    }
}