import * as React from 'react';
import './Footer.css'
import {config} from '../../config'

import { Facebook, Instagram, Reddit, Youtube, Twitter } from "grommet-icons";
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Tooltip from '@mui/joy/Tooltip';

const assetUrl = config.client.url+":"+config.client.port+"/assets"
const payments = [
  {
    name:"Visa",
    path: assetUrl+"/images/payment/visa.png"
  },{
    name:"MasterCard",
    path: assetUrl+"/images/payment/mastercard.png"
  },{
    name:"JCB",
    path: assetUrl+"/images/payment/jcb.png"
  },{
    name:"AmericanExpress",
    path: assetUrl+"/images/payment/ae.png"
  },{
    name:"CashOnDelivery",
    path: assetUrl+"/images/payment/cod.png"
  },{
    name:"PayLater",
    path: assetUrl+"/images/payment/tragop.png"
  }
]
const shippings = [
  {
    name:"BestExpress",
    path: assetUrl+"/images/shipping/bestexpress.png"
  },{
    name:"BeExpress",
    path: assetUrl+"/images/shipping/beexpress.png"
  },{
    name:"GiaoHangNhanh",
    path: assetUrl+"/images/shipping/ghn.jfif"
  },{
    name:"GiaoHangTietKiem",
    path: assetUrl+"/images/shipping/ghtk.png"
  },{
    name:"Grab",
    path: assetUrl+"/images/shipping/grab.png"
  },{
    name:"J&TExpress",
    path: assetUrl+"/images/shipping/jt.png"
  },{
    name:"NinjaVan",
    path: assetUrl+"/images/shipping/ninjavan.png"
  },{
    name:"VietnamPost",
    path: assetUrl+"/images/shipping/vietnampost.png"
  },{
    name:"ViettelPost",
    path: assetUrl+"/images/shipping/viettelpost.png"
  }
]
const refs = [
  {
    name:"Facebook",
    color:"#1877f2",
    href:"https://www.facebook.com/nguyen.anvi.2312/",
    element: (<Facebook />)
  },{
    name:"Instagram",
    color:"#5851DB",
    href:"#",
    element: (<Instagram />)
  },{
    name:"Reddit",
    color:"#ff5700",
    href:"#",
    element: (<Reddit />)
  },{
    name:"Youtube",
    color:"#FF0000",
    href:"#",
    element: (<Youtube />)
  },{
    name:"Twitter",
    color:"#1da1f2",
    href:"#",
    element: (<Twitter />)
  }
]

const Footer = () => {
  return (
    <Sheet variant='solid' color='primary' className='app-footer'>
      <Grid container spacing={2}>
        <Grid md={3}>
            <div>
              <h3>CUSTOMER SERVICE</h3>
              <div className='footer-link-item'>Help Centre</div>
              <div className='footer-link-item'>BuBu Blog</div>
              <div className='footer-link-item'>BuBu Mall</div>
              <div className='footer-link-item'>How To Buy</div>
              <div className='footer-link-item'>How To Sell</div>
              <div className='footer-link-item'>Payment</div>
              <div className='footer-link-item'>BuBu Mora</div>
              <div className='footer-link-item'>Shipping</div>
              <div className='footer-link-item'>Return & Refund</div>
              <div className='footer-link-item'>Contact Us</div>
              <div className='footer-link-item'>Warranty Policy</div>
            </div>
        </Grid>
        <Grid md={3}>
            <div>
              <h3>ABOUT BUBU</h3>
              <div className='footer-link-item'>About Us</div>
              <div className='footer-link-item'>BuBu Careers</div>
              <div className='footer-link-item'>BuBu Policies</div>
              <div className='footer-link-item'>Privacy Policy</div>
              <div className='footer-link-item'>BuBu Mall</div>
              <div className='footer-link-item'>Seller Centre</div>
              <div className='footer-link-item'>Flash Deals</div>
              <div className='footer-link-item'>Ambassador Prog.</div>
              <div className='footer-link-item'>Media Contact</div>
            </div>
        </Grid>
        <Grid md={3}>
            <div>
              <h3>PAYMENT</h3>
              <div className='footer-payments'>
                {payments.map((item, key) => (
                  <div className='footer-payment-items'  key={key} lg={2}>
                    <Tooltip placement="top" title={item.name}>
                      <img src={item.path}/>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div>
                <h3>LOGISTICS</h3>
                <div className='footer-payments'>
                  {shippings.map((item,key) => (
                    <div className='footer-payment-items'  key={key} lg={2}>
                      <Tooltip placement="top" title={item.name}>
                        <img src={item.path}/>
                      </Tooltip>
                    </div>
                  ))}
                </div>
                
            </div>
        </Grid>
        <Grid md={3}>
          <div>
              <h3>MULTIPLATFORM</h3>
              <Grid container>
                <Grid xs={6}><img className='footer-qr-img' src={assetUrl+"/images/QR/rr.png"} /></Grid>
                <Grid xs={6}>
                  <Grid xs={12}>
                    <img className='footer-platform-img' src={assetUrl+"/images/platform/appgallery.png"} />
                  </Grid>
                  <Grid xs={12}>
                    <img className='footer-platform-img' src={assetUrl+"/images/platform/appstore.png"} />
                  </Grid>
                  <Grid xs={12}>
                    <img className='footer-platform-img' src={assetUrl+"/images/platform/googleplaystore.png"} />
                  </Grid>
                </Grid>
              </Grid>
          </div>
          <div>
              <h3>FOLLOW US</h3>
              <div className='footer-refs'>
                  {refs.map((item, key) => (
                    <a href={item.href} key={key}>
                      <div className='footer-ref-items'>
                        <div className='footer-ref-item-avt'>
                          {item.element}
                        </div>
                        <div className='footer-ref-item-label'>
                          {item.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
          </div>
        </Grid>
      </Grid>
      
    </Sheet>
  );
};
export default Footer;
