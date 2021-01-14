import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ data }) => {
  const containerStyle = {
    height: '50vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }

  return (
    // AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw
    <LoadScript googleMapsApiKey='AIzaSyA-XDX-KYa9kf8HPqIBKx-1rqgEToXtNiA' >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map