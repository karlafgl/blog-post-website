import React from 'react';

const Footer = () => {
  return(
    <footer className="bg-light blue">
      <div id="copyright-year" className="footer-copyright text-center py-3 ">© {(new Date().getFullYear())} Copyright
        <a className="ml-2" href="https://github.com/karlafgl/blog-post-website" target="_blank" rel="noopener noreferrer">Post Website</a>
      </div>
    </footer>
  )
}

export default Footer;