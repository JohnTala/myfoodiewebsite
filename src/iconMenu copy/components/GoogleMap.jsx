import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    
        const defaultProps = {
          center: {
            lat:-34.254570,
            lng:18.406263
          },
          zoom: 11
        };
    return ( 
        <div style={{ height: "50vh", width: "30%" }} className='mapgoogle'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
             defaultZoom={defaultProps.zoom}
              >
            <AnyReactComponent
               lat={59.955413}
               lng={30.337844}
                text="My Marker"
              />
      </GoogleMapReact>

            </div>
            
     );
}
 
export default GoogleMap;