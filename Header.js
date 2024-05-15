import React from 'react'

const Header = () => {
  return (
    <>
    <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id='sideNav'
    >
        <a class="navbar-brand js-scroll-trigger" href='#page-top'
        >
        <span class="d-block d-lg-none">dastar</span>
        <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assest/data.jpg"
            alt='...'
            />
        </span>
        </a>
        <button class="navbar-toggler"
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Awards
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Education
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Experience
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Interest
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="index.html">
                        Skills
                    </a>
                </li>
            </ul>
        </div>


    </nav>
    
    </>
  )
}

export default Header