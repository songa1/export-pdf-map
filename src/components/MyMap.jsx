import React from 'react'
import {Map, GeoJSON} from 'react-leaflet'
import countries from './data/countries.json';
import 'leaflet/dist/leaflet.css';
import './map.css'

class MyMap extends React.Component {
    state = { color: "#000000" };
    componentDidMount() {
    }
    countryStyle = {
        fillColor: 'red',
        fillOpacity: 1,
        color: 'black',
        weight: 2,
        dashArray: 2,
    }
    colorChange = (e) => {
        this.setState({color: e.target.value})
    }

    onCountryClick = (e) => {
        e.target.setStyle({
            fillColor: this.state.color,
            fillOpacity: 1
        })
    }
    onCountry =(feature, layer) => {
        const countryName = feature.properties.ADMIN
        console.log(feature)
        layer.bindPopup(countryName + " ("+feature.properties.ISO_A3+")")

        layer.options.fillOpacity = 0.2

        layer.on({
            click: this.onCountryClick
        })
    }
    render(){
        return (
            <div>
                <Map style={{height: "30vh"}} zoom={2} center={[20,100]}>
                    <GeoJSON style={this.countryStyle} data={countries.features} onEachFeature={this.onCountry}/>
                </Map>
                <input type="color" value={this.state.color} onChange={this.colorChange} />
            </div>
        )
    }
}

export default MyMap