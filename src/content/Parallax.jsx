import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import pingu from '../assets/pingu.png'
import iceburger from '../assets/iceburger.png'
import fish from '../assets/fish.png'
import '../App.css'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>



export default class ParallaxContainer extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={0} speed={0} style={{ background: 'linear-gradient(to bottom, rgba(41,184,229,1) 0%, rgba(41,184,229,1) 1%, rgba(179,220,237,1) 100%)' }} />
        <ParallaxLayer offset={1} speed={0} style={{ background: 'linear-gradient(#33ccff, #0099ff)' }} />
        <ParallaxLayer offset={2} speed={0} style={{ background: 'linear-gradient(#0099ff, #0066cc)' }} />


        <ParallaxLayer offset={0.75} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={iceburger} style={{ position: 'absolute', marginLeft: '25%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.15} speed={-0.6} style={{ pointerEvents: 'none' }}>
          <img src={pingu} style={{ width: 60, marginLeft: '60%' }} />
        </ParallaxLayer>

{/*         <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer offset={2} speed={-0.6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <div id="slide2">

                <img src={fish} style={{width:100}} />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={-0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                      <div id="slide">

                <img src={fish} style={{width:100}} />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                      <div id="slide2">

                <img src={fish} style={{width:100}} />
            </div>
        </ParallaxLayer>
{/*         <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />
 */}
{/*         <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>
 */}
{/*         <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>
 */}
{/*         <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
    )
  }
}

