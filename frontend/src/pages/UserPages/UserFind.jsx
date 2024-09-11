import React from 'react';
import Card from '../../components/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faRoute, faPersonWalking, faCar,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Find.scss'; // Import custom CSS

function Find() {
  return (
    <main className='find-main-container'>

        <section className='find-upper-part'>
            <section className= 'find-Map w-full h-full text-center'>
                The Map
            </section>
        </section>

        <section className='find-lower-part'>
            <section className='find w-full pt-5  '>
                <h2 className='find-card-title find-title'>Select Location</h2>
            </section>               
            <section className='find-upper-section find-w-full find-flex find-justify-around'>
                <Card className="find-upper-card">
                    <section className='find-card-icon'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    </section>
                    <section>
                        <h2 className="find-card-title">Location</h2>
                        <h2 className='find-place'>Barnato Hall</h2>
                    </section>
                </Card>
                <Card className="find-upper-card">
                    <section className='find-card-icon'>
                        <FontAwesomeIcon icon={faCheckCircle} className='icon' />
                    </section>
                    <section>
                        <h2 className="find-card-title">Destination</h2>
                        <h2 className='find-place'>Library Laws</h2>
                    </section>
                </Card>
            </section>
            <section className='find-lower-section'>
                <Card className="find-lower-card-section">
                    <section className='find-card-content'>
                        <span className='find-card-title'>Walk</span>
                    </section>
                    <section className='find-card-icon'>
                        <FontAwesomeIcon icon={faPersonWalking} />
                    </section>
                </Card>
                <Card className="find-lower-card-section">
                    <section className='find-card-content'>
                        <span className='find-card-title'>View Routes</span>
                    </section>
                    <section className='find-card-icon'>
                        <FontAwesomeIcon icon={faRoute} />
                    </section>
                </Card>
                <Card className="find-lower-card-section">
                    <section className='find-card-content'>
                        <span className='find-card-title'>Vehicle</span>
                    </section>
                    <section className='find-card-icon'>
                        <FontAwesomeIcon icon={faCar} />
                    </section>
                </Card>
            </section>
        </section>    
    </main>
  );
}

export default Find;
