import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { Loading } from "../components/LoadingComponent"
import { addSessionName } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    profiles: state.profiles
  }
}

const mapDispatchToProps = dispatch => ({
  addSessionName: (name) => dispatch(addSessionName(name)),
})

var avatar_url = 'https://pbs.twimg.com/profile_images/573391750829506560/Vgk8ZOfR.jpeg';

function HomeScreen(props) {
  useEffect(() => {
    console.log("___profiles_aheigaeipghaei__");
    console.log(props.profiles)
  }, []);

  if (props.profiles.isLoading) {
    return <Loading text="Loading" />
  }
  else {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.profiles.profiles}
          renderItem={({ item }) => (
            <ListItem
              topDivider
              title={item.name}
              subtitle={
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Icon
                      raised
                      name='call'
                      color='blue'
                      onPress={() => console.log('hello')} />
                  </View>
                </View>
              }
              bottomDivider
              chevron
            />
          )}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);