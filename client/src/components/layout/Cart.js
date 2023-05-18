import React from 'react';
// import { Space, Dropdown, theme, Divider, Button } from 'antd';
// const {useToken} = theme;

function getItem(label, key, disabled) {
  return {
    key,
    label,
    disabled,
  };
}

// const cartItems = [
//   getItem(<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">1st menu item</a>,'cart-item-1'),
//   getItem(<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">2nd menu item</a>,'cart-item-2', true),
//   getItem(<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">3rd menu item</a>,'cart-item-3', true),
// ];

const Cart = ()=>{
  // const { token } = useToken();
  // const contentStyle = {
  //   backgroundColor: token.colorBgElevated,
  //   borderRadius: token.borderRadiusLG,
  //   boxShadow: token.boxShadowSecondary,
  // };
  // const menuStyle = {
  //   boxShadow: 'none',
  // };
  return (
    <div></div>
    // <Dropdown
    //   menu={{
    //     cartItems,
    //   }}
    //   dropdownRender={(menu) => (
    //     <div 
    //     style={contentStyle}
    //     >
    //       {cartItems.map((item)=>(
    //         <div style={{
    //           padding:"20px"
    //         }}>
    //           {item.label}
    //         </div>
    //       ))}
    //       <Divider
    //         style={{
    //           margin: 0,
    //         }}
    //       />
    //       <Space
    //         style={{
    //           padding: 8,
    //         }}
    //       >
    //         <Button type="primary" htmlType='button'>Click me!</Button>
    //       </Space>
    //     </div>
    //   )}
    // >
    //   <a onClick={(e) => e.preventDefault()}></a>
    // </Dropdown>
  )
}
export default Cart