import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';


export const Map = ({dropoffCoordinates,pickupCoordinates}) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw';


useEffect(()=> {

    const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',   // mapbox://styles/mapbox/streets-v11
        center: [113.341334,23.193119] ,   // United States coordinates [-99.29011, 39.39172]  // China  [113.341334,23.193119] 
        //Xiamen [ 118.10000,	24.479834]
        zoom: 3
      });


       // addToMap(map)
       if(pickupCoordinates ){
        addToMap(map, pickupCoordinates)
        console.log('pickUpCoordinates at Map.js', pickupCoordinates)
      }

      if(dropoffCoordinates){
        addToMap(map, dropoffCoordinates)
        console.log('dropOffCoordinates at Map.js', dropoffCoordinates)
      }

      if(pickupCoordinates && dropoffCoordinates){
        map.fitBounds([
          pickupCoordinates,
          dropoffCoordinates
        ], {
          padding: 60
        })
      }


         //Get the mapbox road lines
         map.on('load', () => {
          map.addSource('lines', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    color: '#F7455D', // red
                  },
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      pickupCoordinates,
                      dropoffCoordinates
                  
                    ],
                  },
                },
                {
                  type: 'Feature',
                  properties: {
                    color: '#F7455D', // blue //#33C9EB
                  },
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      pickupCoordinates,
                      dropoffCoordinates
                    ],
                  },
                },
              ],
            },
          });
          map.addLayer({
            id: 'lines',
            type: 'line',
            source: 'lines',
            paint: {
              'line-width': 3,
              // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
              // to set the line-color to a feature property value.
              //'line-color': 'yellow',
              'line-color': ['get', 'color']
            },
          });
        })
},[dropoffCoordinates,pickupCoordinates])


const addToMap = (map, coordinates) => {
  const marker1 = new mapboxgl.Marker()
.setLngLat(coordinates)
//United States coordinates [-99.29011, 39.39172]
.addTo(map);
}


  return (
    <MapContainer id='map'></MapContainer>
  )
}

const MapContainer = tw.section`w-full flex h-1/2 bg-gray-300 `

