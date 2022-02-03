import React from 'react';
import { Link } from 'react-router-dom';

import './presentation.css';

function Presentation() {
  return (
    <div className="presentation">
      <Link to="/" className="goback">
        go back
      </Link>
      <h2>Presentation</h2>
      <div className="presentationText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at est at
          nisl porta ullamcorper eu non purus. Cras porttitor hendrerit quam, ut
          pellentesque velit imperdiet non. Vestibulum eros neque, pharetra quis
          nisl nec, sollicitudin convallis tortor. Vivamus at leo sem.
          Suspendisse congue erat nec diam convallis pretium. Morbi non magna
          convallis, posuere nulla id, eleifend metus. Nullam ut sollicitudin
          leo, nec tempor elit.
        </p>

        <p>
          Vivamus lectus felis, suscipit vitae congue venenatis, tristique
          aliquet augue. Vivamus consequat dolor ligula, sit amet feugiat odio
          tincidunt id. Praesent eget sem a odio sagittis vehicula eget sit amet
          libero. Sed convallis sapien ut lorem placerat, sed posuere leo
          interdum. Nullam non ante pretium, dignissim neque ac, euismod nibh.
          Sed rutrum non turpis pulvinar rutrum. In sed augue libero.
        </p>
      </div>
      <div className="direction">
        <Link to="/projects" className="subdirection">
          Projects
        </Link>
        <Link to="/contact" className="subdirection">
          contact Me
        </Link>
      </div>
    </div>
  );
}
export default Presentation;
