import { Animate } from 'react-simple-animate';

import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';

const contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText="contact" icon={<BsInfoCircleFill size={40} />} />
      <div className='contact_content'>
        <Animate
          play
          duration={1}
          delay={0} 
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3 className='contact-content__header-text'>let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0} 
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <div className='contact__content__form'>
            <div className='contact__content__form__controlswrapper'></div>
            <div className='nameWrapper'>
              <input required name='name' className='inputName' type={'text'} />
              <label htmlFor='name' className='nameLabel'>
                Name
              </label>
            </div>

            <div className='emailWrapper'>
              <input required name='email' className='inputEmail' type={'text'} />
              <label htmlFor='email' className='emailLabel'>
                Email
              </label>
            </div>
            <div className='descriptionWrapper'>
              <input required name='description' className='inputdescription' type={'text'} />
              <label htmlFor='description' className='descriptionLabel'>
                Description
              </label>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default contact;
