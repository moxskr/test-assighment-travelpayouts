import React from 'react';
import {connect} from 'react-redux';
import {getServicesList} from "../actions/header";
import {selectServicesList} from "../selectors/api";
import ServicesItem from "../components/ServicesItem";
import {selectFilter} from "../selectors/filter";
import {filterList} from "../utils/filter";

class ServicesList extends React.Component{
    componentDidMount() {
        this.props.getServicesList();
    }
    render() {
        const {services} = this.props;
        return <div className="services--list">
            {filterList(services, this.props.filter).map(item => <ServicesItem key={item.title} description={item.description} link={item.link} promocode={item.promocode} title={item.title}/>)}
        </div>
    }
}

const mapStateToProps = state => ({
    services : selectServicesList(state),
    filter : selectFilter(state)
});

export default connect(mapStateToProps, {getServicesList})(ServicesList);
