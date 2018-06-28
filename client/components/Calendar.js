import React, { Component } from 'react';
import axios from 'axios'
import {Table, Panel} from 'react-bootstrap'

function eventParser (data) {
  
}

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('api/events')
      .then(res => {
        const events = res.data;
        this.setState({ events });
      })
  }


  render () {
    let events = this.state.events
    let eventsByDate = eventParser(events)
    
    console.log(events)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const days1 = [1, 2, 3, 4, 5, 6, 7]
    const days2 = [8, 9, 10, 11, 12, 13, 14]
    const days3 = [15, 16, 17, 18, 19, 20, 21]
    const days4 = [22, 23, 24, 25, 26, 27, 28]
    // console.log(days)
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              {
                daysOfWeek.map((weekday,i) => {
                  return <th key={i}>{weekday}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                days1.map((day, i) => {
                  return <td key={i}>
                    <Panel>
                      <Panel.Heading>{day}</Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                  </td>
                })
              }
            </tr>
            <tr>
              {
                days2.map((day, i) => {
                  return <td key={i}>
                    <Panel>
                      <Panel.Heading>{day}</Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                  </td>
                })
              }
            </tr>
            <tr>
              {
                days3.map((day, i) => {
                  return <td key={i}>
                    <Panel>
                      <Panel.Heading>{day}</Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                  </td>
                })
              }
            </tr>
            <tr>
              {
                days4.map((day, i) => {
                  return <td key={i}>
                    <Panel>
                      <Panel.Heading>{day}</Panel.Heading>
                      <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                  </td>
                })
              }
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

class Day extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.day}</h1>
      </div>
    );
  }
}