import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            left: 0
         }
    }
    componentDidMount() {
        this.setState({left: 500});
      }
      willLeave() {
        return {width: spring(0), height: spring(0)};
      }
      render() {
        const springConfig = {stiffness: 180, damping: 12};
        const theStyle = {
          left: spring( this.state.left, springConfig)
        }
    
        return (  <Motion style={theStyle} key="theKey" ref="theRef">
        {({left}) =>
          <div style={{position: 'absolute', left: left}}>
            <h1 className='home-component'>MY Contact-List</h1>
          </div>
        }
      </Motion>
    );
  
    }
}
 
export default Home;