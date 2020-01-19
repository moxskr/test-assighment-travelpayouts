import React from 'react';
import ServicesFilter from "../containers/ServicesFilter";
import ServicesList from "../containers/ServicesList";

const Services = () => <div className="services">
    <div className="content--container">
        <div className="services--header">
            <h1>Сервисы</h1>
        </div>
        <ServicesFilter/>
        <ServicesList/>
    </div>
</div>

export default Services;
