import React from 'react';
import laptop from './../img/laptop.jpg';

const Work = () => {
    return (
        <>
            {/* <!-- Work --> */}
            <section className="bg-grey">
                <div className="row text-center" id="work">
                    <div className="col-10 m-auto">
                        <h2 className="my-5">Work</h2>
                        <img src={laptop} alt="#" className="img-work img-fluid rounded-circle mb-5 shadow"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente a. Unde impedit cumque veniam ad? Doloremque, quasi tenetur suscipit numquam voluptate quo eligendi? Minus maxime dolore rerum ratione expedita.</p>
                        <a href="#" className="btn btn-outline-success mb-5">Git Repository</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;