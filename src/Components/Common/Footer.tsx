import React from 'react';
  
  const Footer: React.FC = () => {
  
return (

    <>
        <div className='container container mb-5 mt-5'>
            <div className='row'>
            <div className="socialMediaWarp mt-5 mb-3">
            <div><img src="/public/g.svg"/> </div>
            <div><img src="/public/f.svg"/> </div>
            <div><img src="/public/i.svg"/> </div>
            <div><img src="/public/x.svg"/> </div>
            </div>

            <div className="socialMediaWarp flex-column gap-0">
            <p>examples@gmail.com</p>
            <p>Copyright © 2020 Name. All rights reserved.</p>
            </div>

            </div>
            </div>
  

  </>
);
};

export default Footer;