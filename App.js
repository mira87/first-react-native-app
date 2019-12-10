import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';






class One extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    this.state = {
      refresh: false,
      data: [
        {
          name: 'pic1',
          img: 'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg'
        },
        {
          name: 'pic2',
          img: 'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg'
        },
        {
          name: 'pic3',
          img: 'https://images.pexels.com/photos/1234901/pexels-photo-1234901.jpeg'
        },
        {
          name: 'pic4',
          img: 'https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg'
        },
        {
          name: 'pic5',
          img: 'https://images.pexels.com/photos/2101841/pexels-photo-2101841.jpeg'
        }
      ]

    }
  }

  refreshData = () => {

    this.setState({
      refresh: true
    })


    this.setState({
      refresh: true,
      data: [{
        name: 'pic1',
        img: 'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg'
      },
      {
        name: 'pic2',
        img: 'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg'
      }
      ]
    })

  }
  render() {
    return (
      <View style={{
        paddingTop: 40,
        flex: 1, justifyContent:
          'center', alignItems: 'center'
      }}>
        <Text>Hi</Text>





        <FlatList style={{ width: '100%' }}

          data={this.state.data}
          onRefresh={this.refreshData}
          refreshing={this.state.refresh}

          keyExtractor={(item, index) => index.toString()}
          // renderItem={({ item, seperators }) => (
          renderItem={({ item, index }) => (
            <View style={[
              styles.rowStyle,
              index % 2 > 0 ? styles.itemOdd : styles.itemEven
            ]}>
              <Image style={{ borderRadius: 50 / 2, width: 50, height: 50 }} source={{ uri: item.img }} />
              <Text style={{ marginLeft: 25, lineHeight: 50, fontWeight: 'bold', color: 'blue', opacity: 0.75 }}>{item.name}</Text>
            </View>
          )
          }
        />






      </View >
    )
  }
}




const styles = StyleSheet.create({
  // image:{
  //   borderRadius:50/2,
  //   width:50,
  //   height:50
  // },
  rowStyle: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderColor: 'lightgrey',
    borderBottomWidth: 1
  },
  itemOdd: {
    backgroundColor: '#f1f1f1'
  },
  itemEven: {
    backgroundColor: '#fff'
  }
})




class Two extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation

  }
  render() {
    return (
      <View style={{
        flex: 1, justifyContent:
          'center', alignItems: 'center'
      }}>
        <Text>Two</Text>
      </View>
    )
  }
}



class Three extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation

  }
  render() {
    return (
      <View style={{
        backgroundColor: 'yellow',
        flex: 1, justifyContent:
          'center', alignItems: 'center'
      }}>
        <Text>Three</Text>
      </View>
    )
  }
}

const MainStack = createBottomTabNavigator({
  One: { screen: One },
  Two: { screen: Two },
  Three: { screen: Three }
})

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MainStack />

      </AppContainer>
    )

  }
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refresh: false,
//       // data: ['Me', 'You', 'I', 'We', 'She', 'Her'],
//       data: [
//         {
//           name: 'pic1',
//           img: 'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg'
//         },
//         {
//           name: 'pic2',
//           img: 'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg'
//         },
//         {
//           name: 'pic3',
//           img: 'https://images.pexels.com/photos/1234901/pexels-photo-1234901.jpeg'
//         },
//         {
//           name: 'pic4',
//           img: 'https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg'
//         },
//         {
//           name: 'pic5',
//           img: 'https://images.pexels.com/photos/2101841/pexels-photo-2101841.jpeg'
//         }
//       ]
//     }
//   }

//   refreshData = () => {

//     this.setState({
//       refresh: true
//     });


//     this.setState({
//       refresh: false,
//       data: [
//         {
//           name: 'Updated',
//           img: 'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg'
//         },
//         {
//           name: 'Data',
//           img: 'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg'
//         },

//       ]
//     })

//   }


//   render() {
//     return (
//       <View style={styles.container} >
//         {/* <Text>Hiiii!</Text> */}
//         <Text>{this.state.name}</Text>

//         <FlatList style={{ width: '100%' }}

//           data={this.state.data}
//           onRefresh={this.refreshData}
//           refreshing={this.state.refresh}

//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, seperators }) => (
//             <View style={{ paddingHorizontal: 10, paddingVertical: 45, borderBottomWidth: 1 }}>
//               <Image style={{ width: 50, height: 50 }} source={{ uri: item.img }} />
//               <Text>{item.name}</Text>
//             </View>
//           )}
//         />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
