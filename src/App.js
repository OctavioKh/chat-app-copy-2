import React, {  Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Showcase from './components/showcase';
import About from './components/about';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Gallery.js';
import Fotix from './components/component.js';
import Menu from './components/navbar.js'
import Fotix2 from './components/component2.js';
import Press from './components/press.js';
import Fotix3 from './components/component3.js';
import Foto120 from './components/120.js';
/* import MusicPlayer from "./components/MusicPlayer.js"; */

/* import Music from './components/musicplayer.js';
 */
function App() {
  return (
    
    
<Fragment>
{/* <MusicPlayer
        urls={[
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ]}
      /> */}
{/* <Music/> */}
      <Router >
        <Menu />
        
        <Switch>
          <Route exact path='/' component={Fotix}></Route>
          <Route exact path='/videos' component={Showcase}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/facetime' component={Fotix2}></Route>
          <Route exact path='/documental' component={Fotix3}></Route>
          <Route exact path='/120' component={Foto120}></Route>
          <Route exact path='/press' component={Press}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

        export default App;
        