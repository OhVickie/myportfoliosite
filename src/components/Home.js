import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home-grid">
                <div className='captions'>
                    <div className="main-caption">
                        <h1 className="main-caption__top">Hello,</h1>
                        <h1 className="main-caption__bottom">my name is Victory</h1>
                    </div>
                    <div className="sub-caption">
                        <h4 >
                             An upcoming developer and designer
                        </h4>
                        <p> I love beautiful things and have a strong sense for aesthetics and interactions and so pursuing a part of software development
                            that was related to this just made sense to me. </p>

                    </div>
                </div>
                
                <div className="social-links">
                    <a href="https://github.com/OhVickie?tab=repositories" rel="noopener noreferrer" target="_blank">
                        VIEW MY PROJECTS
                    </a>

                </div>


            </div>
            );
    }
}

export default Home;