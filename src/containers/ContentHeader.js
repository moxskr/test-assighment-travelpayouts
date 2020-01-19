import React from 'react';
import {connect} from 'react-redux';
import {getHeaderInfo} from "../actions/header";
import {selectHeaderInfo} from "../selectors/api";

const printCurr = currency => {
    switch(currency) {
        case 'rub' :
            return '₽';
        default :
            return '';
    }
};

class ContentHeader extends React.Component{
    componentDidMount() {
        this.props.getHeaderInfo();
    }
    render() {
        const {balance, next_payout, currency} = this.props.header;
        const curr = printCurr(currency);
        return <div className="content--header d-flex align-items-center">
            <div className="content--container">
                <div className="content--header-numbers">
                    <div>
                        <span className="content--header-numbers-top">Баланс</span>
                        <span className="content--header-numbers-bot">{balance} {curr}</span>
                    </div>
                    <div>
                        <span className="content--header-numbers-top">К выплате</span>
                        <span className="content--header-numbers-bot">{next_payout} {curr}</span>
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    header : selectHeaderInfo(state)
});

export default connect(mapStateToProps, {getHeaderInfo})(ContentHeader);
