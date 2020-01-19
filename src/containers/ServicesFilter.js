import React from 'react';
import {changeFilter, cancelFilter} from "../actions/filter";
import {connect} from 'react-redux';

class ServicesFilter extends React.Component{
    state = {
        filter : ''
    };
    handleChange = e => {
        this.setState({
            filter : e.target.value
        }, () => {
            this.props.changeFilter(this.state.filter)
        });
    };
    cancel = () => {
        this.props.cancelFilter();
        this.setState({
            filter : ''
        })
    };
    render() {
        return (
            <div className="services--filter">
                <label>Фильтр</label>
                <input type="text" value={this.state.filter} onChange={this.handleChange}/>
                <button className="btn btn-outline-secondary" onClick={this.cancel}>
                    Сбросить
                </button>
            </div>
        );
    }
}

export default connect(null, {changeFilter, cancelFilter})(ServicesFilter);
