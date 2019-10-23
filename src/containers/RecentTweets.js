import React, {Component} from 'react';
import List from '../components/List';
import {
    Grid,
  } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
        <div style={{margin: '20px', marginTop: '50px'}}>
            <Grid columns={2} stackable textAlign='center'>
            <Grid.Column width={4}>
                <h1>Umph's Hall of Fame Votes - Most Recent</h1>
                <h4 style={{color: '#565656'}}>Vote @UmphsHOFBot on Twitter</h4>
            </Grid.Column>
            
            <Grid.Column width={12} verticalAlign='middle'>
                <List />
            </Grid.Column>
            
            </Grid>
        </div>
    );
  }
}

export default Home