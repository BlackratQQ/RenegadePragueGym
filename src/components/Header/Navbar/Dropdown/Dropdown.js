import React, {useState} from 'react';
import {MenuItems} from '../MenuItems';


import {Wrapper, WrapperLi, MenuLink} from './styledDropdown'


const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <Wrapper
        onClick={handleClick}
        className={click}
      >
        {MenuItems.map((item, index) => {
          return (
            <WrapperLi
              key={index}>
              <MenuLink to={item.path}>{item.title}</MenuLink>
            </WrapperLi>

          );
        })}
      </Wrapper>
    </div>
  )
    ;
}

export default Dropdown;
