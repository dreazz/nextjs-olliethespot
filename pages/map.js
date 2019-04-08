import dynamic from 'next/dynamic'
import Map from "../components/Map";
import Header from '../components/Header'
import Head from 'next/head';
function map() {
  //no server side rendering for mapbox 
  const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
    
});

  return ( 
    <>
    <Head>
      <title>Ollie the spot</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <DynamicComponentWithNoSSR/>
   </>)

}

export default map