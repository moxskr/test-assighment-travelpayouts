import React from 'react';

const ServicesItem = ({title, description, link, promocode}) => {
    const copy = () => {
        navigator.clipboard.writeText(promocode);
    };
    return <div className="services--item">
        <div className="services--item-title">
            <h2>{title}</h2>
            <p>{description || 'Описание'}</p>
        </div>
        <div className="services--item-promocode">
            <label>ПРОМОКОД</label>
            <div>
                <input type="text" disabled value={promocode || ''}/>
                <div className="services--item-input-icon">
                    <img src={'./images/Icon.png'} alt="" onClick={copy}/>
                </div>
            </div>
        </div>
        <div className="services--item-link">
            <a className="btn btn-primary" href={link}>
                Получить бонус
            </a>
        </div>
    </div>
};

export default ServicesItem;
