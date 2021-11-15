import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselApp.css'

const CarouselApp = () => {
    return (
        <div>
            <h3 className="gallery">A P A R T M E N T &nbsp; G A L L E R I A</h3>
            <Carousel className="container">

                <Carousel.Item interval={1000} img-fluid>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560449752-8b6023e2ab5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185127-bc36ce01f6e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185009-dddeb820c7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560184897-1ca2636ec816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Apartment</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default CarouselApp;