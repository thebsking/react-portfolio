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
                {/* content here */}
            </section>
            <section id="technologies">
                <h3>Skills</h3>
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