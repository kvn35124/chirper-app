import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p>{this.props.msg}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;