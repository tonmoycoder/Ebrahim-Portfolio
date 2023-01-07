import React from 'react';
import './Testimonial.css'
import { Data } from './Data';

const Testimonial = () => {
    return (
        <section className="testimonial container section">
             <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">What my client say</span>

            <div className="testimonial__container">
                {Data.map(({id, image, title, description}) =>{
                    return(
                        <div className="testimonial__card" key={id}>
                            <img src={image} alt="testimonial" className='testimonial__img'/>

                            <h3 className='testimonial__name'>{title}</h3>
                            <p className='testimonial__description'>{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Testimonial;