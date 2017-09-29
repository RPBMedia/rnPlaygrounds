import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component {

  onRowPress() {
    console.log('Post pressed');
  }

  render() {
    const { title, body } = this.props.item;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <View style={styles.container}>

            <Text style={styles.titleStyle}>
              {title}
            </Text>

            <Text style={styles.descStyle}>
              {body}
            </Text>

        </View>


      </TouchableHighlight>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    flex: 1,
    position: 'relative',
    borderWidth: 2,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    fontSize: 13,
    color: 'grey'
  },
};

export default ListItem;
