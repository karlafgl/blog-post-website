import React from 'react';

const Footer = () => {

  // Dynamically add copyright year using new Date
  // document.getElementById('copyright-year').innerHTML = new Date().getFullYear();

  return(
    <footer className="bg-light blue">
      <div id="copyright-year" className="footer-copyright text-center py-3 ">© 2019 Copyright
        <a className="ml-2" href="https://github.com/karlafgl/blog-post-website" target="_blank" rel="noopener noreferrer">Post Website</a>
      </div>
    </footer>
  )
}

export default Footer;