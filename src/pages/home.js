import React from 'react';
import {Icon} from 'semantic-ui-react'

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
                <h3 className="section-head">about me</h3>
                <img id="bk-image" src='./assets/bk-headshot.png' alt="headshot" />
                <div id='content-wrapper'>

                    <p>hi, i am brandon. i am a full-stack web developer located in columbus,oh. i am a musician that loves facts and figures. that blend of analytical and creative thinking is what drew me to coding.</p>
                    <p>i am currently available for freelance work. you can view some of my recent projects <a href='/gallery'>here</a>. if you would like to work with me you can contact me <a href='/contact'>here</a>.</p>
                </div>
            </section>
            <section id="technologies">
                <h3 className="section-head">skills</h3>
                <div className='skill-container'>
                    {skillsArr.map(skill => {
                        return (

                            <span className='skill-logo'>{skill.icon}</span>

                        )
                    })}
                </div>

            </section>
            <section id="resume">
                <h3 className="section-head">resume</h3>
                <div className="res-container">
                    <h4 className="res-head">
                        education
                    </h4>
                    <p>
                        <em>b.a. communication technology</em><br />
                        the ohio state university | <strong>2009</strong>
                    </p>
                    <p>
                        <em>full-stack development certificate</em><br />
                        ohio state college of engineering | <strong>2021</strong>
                    </p>
                    <h4 className="res-head">experience</h4>
                    <p>the ohio credit union league | 2021-present</p>
                    <p>big brothers big sisters of central ohio | 2017-2021</p>
                </div>
            </section>
            <section id="social">
                <h3 className="section-head">social</h3>
                <div className='social-container'>
                    <a class='no-deco social-link'href="https://github.com/thebsking"><Icon color='red' size ='huge' name='github' /></a>
                    <a class='no-deco social-link'href="https://linkedin.com/in/brandonsking"><Icon color="red" name='linkedin' size='huge' /></a>
                    <a class='no-deco social-link'href="https://twitter.com/thebsking"><Icon name='twitter' size='huge' color="red"/></a>
                </div>
            </section>
        </main>
    )
}

export default Home;