import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 30 }}>

      <Scene key="main">
        <Scene
          key="postList"
          component={PostList}
          onRight={() => Actions.postCreate()}
          rightTitle="Add"
          title="Posts"
        />
        <Scene
          key="postCreate"
          component={PostCreate}
          title="Create Post"
        />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
