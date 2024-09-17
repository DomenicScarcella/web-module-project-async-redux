import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

const DataList = (props) => {
    const { fetchData } = props;

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='joke-wrapper'>
            <h1>Ten random jokes from 'official-joke-api'</h1>
            <h3><i>Refresh browser for a new set of hilarious results!</i></h3>
            {props.isLoading ? <h3>Loading jokes . . .</h3> : null}
            {props.error ? <p>{props.error}</p> : null}
            {props.data.map((joke) => (
                <div className='joke' key={joke.id}>
                    <p><b>{joke.setup}</b></p>
                    <div className='reveal'>
                        <p className='hint'><i>Mouseover this box to reveal punchline!</i></p>
                        <p className='punchline'><b>{joke.punchline}</b></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        data: state.data,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData })(DataList);