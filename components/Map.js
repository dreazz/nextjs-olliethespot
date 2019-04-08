import {Component} from 'react';
import ReactMapGL, {Popup,Marker} from 'react-map-gl';
import Form from '../components/Form'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
class Map extends Component {
    state = {
        viewport: {
            width: '100vw',
            height: '100vh',
            latitude: 41.390205,
            longitude:2.154007 ,
            zoom: 11
        },
    };

    render() {
        return (
          
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken={publicRuntimeConfig.mapboxApiAccessToken}
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}>
                <Marker latitude={41.390205} longitude={2.154007} offsetLeft={-20} offsetTop={-10}>
                <h1>hola</h1>
                </Marker>
               
            </ReactMapGL>
          );
    }
}

export default Map;