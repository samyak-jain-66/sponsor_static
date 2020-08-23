import React from 'react';

function NavSidebar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
                    <a href="./" class="nav-link">Link</a>
                    <a href="./" class="nav-link">Link</a>
                    <a href="./" class="nav-link">Link</a>
                    <a href="./" class="nav-link">Link</a>
                    <a href="./" class="nav-link">Link</a>
                    <a href="./" class="nav-link">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavSidebar;