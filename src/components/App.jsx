import React from 'react';
import Card from './Card'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: '',
            array: [],
        };
    }

    handleEvent(e) {
        this.setState({
            chirp: e.target.value
        })
    }

    submitChirp(e) {
        e.preventDefault();

        let array = this.state.array;
        let chirp = this.state.chirp;
        array.push(chirp);

        this.setState({chirp: ''});
    }

    render() {
        return (
            <>
                <div className="row m-3 justify-content-center">
                    <form className="col-md-4 p-3 m-3 border border-dark bg-success form-group">
                        <h3 className="text-center">Chirper</h3>
                        <textarea
                            className="form-control"
                            rows={6}
                            value={this.state.chirp}
                            onChange={e => this.handleEvent(e)} />

                        <button onClick={(e) => this.submitChirp(e)} className="btn btn-primary shadow mt-3 btn-block">Chirp</button>
                    </form>
                </div>
                <div>
                    {this.state.array.map((ele, i) => {
                        return(<Card msg={ele} key= {i} />)
                    })}
                </div>
            </>
        )

    }
}

export default App;