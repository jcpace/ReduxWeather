import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  redner(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) { // same as state in param
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);