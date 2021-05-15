import React from 'react';
import './home.css';

class Home extends React.Component {
    submit = () => {
        alert('Registration opens in August!');
    };

    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <h1 className="home-title">hackTAMS</h1>
                    {/* TODO make not button */}
                    <div className="home-register" onClick={this.submit}>
                        Register Now
                    </div>
                    <p>Registration opens in August!</p>
                </div>
            </div>
        );
    }
}

export default Home;
