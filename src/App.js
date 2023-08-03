import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    /* The drawer is always open in large screens. The header is always shown, even in small screens. */
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" 
        title={<Link className="header-text" to= "/">My Portfolio</Link>}
         scroll>
            <Navigation>
             
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link className="header-text" to= "/">My Portfolio</Link>}>
            <Navigation>
                
                <Link className="header-text" to="/Resume">Resume</Link>
                <Link className="header-text" to="/Projects">Projects</Link>
                <Link className="header-text" to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
