/**
 * Created by MartynenkoDV on 15.01.2018.
 */

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            currentPosition: {lat: null, lng: null},
            address: '1'
        };


        //{lat: 48.46471700000001, lng: 35.04618299999993}

        // binding this to event-handler functions
        this.onMapClicked = this.onMapClicked.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick (props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked (mapProps, map, event) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
            currentPosition: {lat: event.latLng.lat(), lng: event.latLng.lng()}
        }, this.getGeocode(event.latLng.lat(), event.latLng.lng()));
    }

    getCurrentPosition () {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    currentPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }, this.getGeocode(position.coords.latitude, position.coords.longitude));
            },
            error => console.log(error)
        );


    }

    getGeocode(lat, lng) {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ lat +','+ lng +'&key=AIzaSyBHgisLm4KhjpcPN6JYIrRTFocFf6kPNaA') // be sure your api key is correct and has access to the geocode api
            .then(response => {
                //console.log(response);
                this.setState({
                    address: response.data.results[0].formatted_address // access from response.data.results[0].formatted_address
                })
            }).catch((error) => { // catch is called after then
        });
    }

    componentWillMount() {
        this.getCurrentPosition();
    }


    render() {
        let markerDefault = require('./icons/marker.svg');
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={this.state.currentPosition}
                centerAroundCurrentLocation={true}
                onClick={this.onMapClicked}
                onReady={this.getAddress}
            >

                <Marker
                    onClick={this.onMarkerClick}
                    position={this.state.currentPosition}
                    icon={{
                        url: markerDefault
                    }}
                    name={this.state.address}
                />

                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}



export default GoogleApiWrapper({
    apiKey: ('AIzaSyBHgisLm4KhjpcPN6JYIrRTFocFf6kPNaA')
}) (GoogleMap)
