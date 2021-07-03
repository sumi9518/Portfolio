import React from 'react';
import man from './../img/man.jpg';

const Main = () => {
    return (
        <>
            {/* <!-- Main --> */}
            <div className="container-fluid bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 m-auto text-center">
                            <img src={man} alt="laptop" className="img-fluid img-profile rounded-circle" />
                            <h1 className="my-3">Hi, I´m Andy</h1>
                            <p className="mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum officiis at deleniti reiciendis excepturi iste eius libero blanditiis quos? Reprehenderit quia iure possimus corrupti soluta accusantium facere culpa corporis voluptatem.
                            </p>
                            <a href="#skills" className="btn btn-success">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;