import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
        <div>
            <h2>I'm the header</h2>
        </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

export default Header;
