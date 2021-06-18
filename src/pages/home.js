import React from 'react';

function Home() {
    const skillsArr = [
        {
            desc: 'HTML5',
            icon: <i className="devicon-html5-plain colored" />
        },
        {
            desc: 'CSS3',
            icon: <i className="devicon-css3-plain colored" />
        },
        {
            desc: 'JavaScript',
            icon: <i className="devicon-javascript-plain colored" />
        },
        {
            desc: 'jQuery',
            icon: <i className="devicon-jquery-plain colored" />
        }, {
            desc: 'NodeJs',
            icon: <i className="devicon-nodejs-plain colored" />
        },
        {
            desc: 'git',
            icon: <i className="devicon-git-plain colored" />
        },
        {
            desc: 'handlebars',
            icon: <i className="devicon-handlebars-plain colored" />
        },
        {
            desc: 'React',
            icon: <i className="devicon-react-plain colored" />
        },
        {
            desc: 'WordPress',
            icon: <i class="devicon-wordpress-plain"></i>
        }
    ]
    return (
        <main>
            <section id="welcome">
                <h3>about me</h3>
                <p>hi, i am brandon. i am a full-stack web developer located in columbus,oh. i am a musician that loves facts and figures. that blend of analytical and creative thinking is what drew me to coding.</p>
                <p>i am currently available for freelance work. you can view some of my recent projects <a href='/gallery'>here</a>. if you would like to work with me you can contact me <a href='/contact'>here</a>.</p>
            </section>
            <section id="technologies">
                <h3>skills</h3>
                <div className='skill-container'>
                {skillsArr.map(skill => {
                    return (
                    
                            <span className='skill-logo'>{skill.icon}</span>
                        
                    )
                })}
                 </div>

            </section>
        </main>
    )
}

export default Home;