import svgMap from 'svgmap';
import MyMap from './MyMap';

// new svgMap({
//     targetElementID: 'svgMap',
//     data: {
//       data: {
//         gdp: {
//           name: 'GDP per capita',
//           format: '{0} USD',
//           thousandSeparator: ',',
//           thresholdMax: 50000,
//           thresholdMin: 1000
//         },
//         change: {
//           name: 'Change to year before',
//           format: '{0} %'
//         }
//       },
//       applyData: 'gdp',
//       values: {
//         AF: {gdp: 587, change: 4.73},
//         AL: {gdp: 4583, change: 11.09},
//         DZ: {gdp: 4293, change: 10.01}
//         // ...
//       }
//     }
// });

const MapComponent = () => {
    return  <MyMap/>
}

export default MapComponent