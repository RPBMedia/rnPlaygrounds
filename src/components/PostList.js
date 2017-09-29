import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { postsFetch } from '../actions';
import ListItem from './ListItem';

class PostList extends Component {
  componentWillMount() {
    this.props.postsFetch();
  }

  renderRow(post) {
    return <ListItem item={post} />;
  }

  render() {
    
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.postList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderRow(item)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        removeClippedSubviews={false}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

const mapStateToProps = state => {
  const { postList } = state.posts;
  return { postList };
};

export default connect(mapStateToProps, { postsFetch })(PostList);
