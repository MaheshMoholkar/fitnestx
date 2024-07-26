import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const headerImage = require('../../assets/images/header.jpg');
const notification = require('../../assets/images/Notification.png');
const banner = require('../../assets/images/BG.png');
const fire = require('../../assets/images/fire.png');
const model = require('../../assets/images/model.png');
const couple = require('../../assets/images/couple.jpg');
const cycle = require('../../assets/images/cycle.png');
const yoga = require('../../assets/images/yoga.png');
const walk = require('../../assets/images/walk.png');
const next = require('../../assets/images/next.png');
const play = require('../../assets/images/play.png');
const star = require('../../assets/images/Star.png');
const book = require('../../assets/images/Book.png');

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Label>Your Activities</Label>
          <View className='flex-row'>
            {data.map((item, index) => (
              <Card data={item} key={index} index={index} />
            ))}
          </View>
          <View className='flex-row justify-between items-center'>
            <Label>Fitness Video</Label>
            <Text
              style={{
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text>
          </View>
          <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <VideoPlay key={index} index={index} />
            ))}
          </ScrollView>
        </View>
        <StatusBar style='dark' />
      </SafeAreaView>
  );
};

export default App;

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12,
      shadowOffset: {width: -5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: '#fff',
    }}>
    <View style={{borderRadius: 10, overflow: 'hidden'}}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300,
        }}>
      </ImageBackground>
      <Text
        style={{
          position: 'absolute',
          bottom: 5,
          left: 10,
          color: '#fff',
        }}>
        Transformation
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          padding: 5,
          right: 10,
          top: 10,
          borderRadius: 5,
        }}>
        <Image source={star} style={{height: 10, width: 10}} />
      </View>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#a5b4fc',
          padding: 10,
          right: 25,
          top: -15,
          borderRadius: 15,
          zIndex: 3,
        }}>
        <Image source={play} style={{height: 10, width: 10}} />
      </View>
      <Text>
        2 Hour Bulking Trainer
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{ fontSize: 12}}>
          <Image source={book} style={{height: 15, width: 15}} />
          {'   Beginner'}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#a5b4fc',
          }}>
          45 Min
        </Text>
      </View>
    </View>
  </View>
);

const Card = ({data, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 150 : 120,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
      </View>
      <View>
        <Text style={{fontSize: 10}}>
          {data.day}
        </Text>
        <Text style={{fontSize: 10}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}>
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};
const Header = () => (
  <View style={styles.header}>
    <ImageContainer image={headerImage} />
    <HeaderTitle />
    <ImageContainer image={notification} height={'50%'} width={'50%'} />
  </View>
);
const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          <View style={styles.fireContainer}>
            <Image
              source={fire}
              resizeMode="contain"
              style={styles.fireImage}
            />
          </View>
          <Text style={styles.offer}>limited offer</Text>
        </View>
        <OfferText>30% Discount</OfferText>
        <OfferText>Flash Sales</OfferText>
      </View>
    </ImageBackground>
    <Image source={model} style={styles.model} resizeMode="contain" />
  </>
);

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
);

const ImageContainer = ({image, height = '100%', width = '100%'}) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{height, width}]} />
  </View>
);
const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi, Jane</Text>
    <Text style={styles.smallTitle}>Aug 12, 2021</Text>
  </View>
);

const Label = ({children}) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 32},
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
  bigTitle: {fontSize: 16},
  smallTitle: {fontSize: 10, opacity: 0.6},
  image: {height: '100%', width: '100%'},
  fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: 'contain',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bannerContainer: {flex: 1},
  label: {fontSize: 20, marginVertical: 10},
  model: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: '75%',
    width: '50%',
    transform: [{rotateY: '180deg'}],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {margin: '3%'},
  offer: {color: 'white', fontSize: 10},
  offerText: {color: 'white', fontSize: 16,},

  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const data = [
  {
    name: 'Back',
    day: "Yestarday",
    status: 85,
    image: cycle,
    lightColor: '#f8e4d9',
    color: '#fcf1ea',
    darkColor: '#fac5a4',
  },
  {
    name: 'Legs',
    day: "Today",
    status: 25,
    image: walk,
    lightColor: '#d7f0f7',
    color: '#e8f7fc',
    darkColor: '#aceafc',
  },
  {
    name: 'Chest',
    day: "Tomorrow",
    status: 85,
    image: yoga,
    lightColor: '#dad5fe',
    color: '#e7e3ff',
    darkColor: '#8860a2',
  },
];