import React from 'react';

function Home() {
    const skillsArr = [
        {
            desc: 'HTML5',
            icon: ''
        },
        {
            desc: 'CSS3',
            icon: ''
        },
        {
            desc: 'JavaScript',
            icon: ''
        },
        {
            desc: 'jQuery',
            icon: ''
        },{
            desc: 'NodeJs',
            icon: ''
        },
        {
            desc: 'React',
            icon: ''
        },
        {
            desc: 'MongoDb',
            icon: ''
        },
        {
            desc: 'MySql',
            icon: ''
        }
    ]
    return(
        <main>
            <section id="welcome">
                <h3>about me</h3>
                <p>hi, i am brandon. i am a full-stack web developer. i am currently available for freelance work. you can view some of my recent projects <a href='/gallery'>here</a>. if you would like to work with me you can contact me <a href='/contact'>here</a>.</p>
            </section>
            <section id="technologies">
                <h3>skills</h3>
                {skillsArr.map(skill => {
                    return (
                        <img src={skill.icon} alt={`${skill.desc} icon`} />
                    )
                })}
            </section>
        </main>
    )
}

export default Home;