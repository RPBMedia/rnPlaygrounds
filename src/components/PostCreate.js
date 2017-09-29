import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { postRequest } from '../actions';
import { Button } from './Button';

class PostCreate extends Component {
  callRequest() {
    this.props.postRequest();
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.rowContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.callRequest.bind(this)}>Call Request</Button>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Text>
            {this.props.requestResult}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = {
  rowContainer: {
    padding: 10,
  }

};


const mapStateToProps = state => {
  const { requestResult } = state.posts;
  return { requestResult };
};

export default connect(mapStateToProps, { postRequest })(PostCreate);
