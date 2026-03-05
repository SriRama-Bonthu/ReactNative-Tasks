import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, Button, Card, Snackbar, Icon, List } from "react-native-paper";
import { useState } from "react";
import youtube from "./assets/youtube.webp";
import netflix from './assets/netflix.webp'
import coursera from './assets/coursera.webp'
import udemy from './assets/udemy.png'

export default function Cards() {
  const [statusInstall, setStatusInstall] = useState(false);
  const dataCards = [
    {
      title: "Entertainment",
      cards: [
        {
          id: 1,
          image: youtube,
          head:"Youtube",
          content:
            "YouTube is a video streaming platform that allows users to watch upload, and share videos across various categories.",
          button1: "details",
          button2: "install",
        },
        {
          id: 2,
          image: netflix,
          head:"Netflix",
          content:
            "Netflix is a streaming platform where users can watch movies, TV shows, and series online anytime.",
          button1: "details",
          button2: "install",
        }
        // {
        //   id: 3,
        //   image: youtube,
        //   content:
        //     "YouTube is a video streaming platform that allows users to watch upload, and share videos across various categories.",
        //   button1: "details",
        //   button2: "install",
        // },
      ],
    },
    {
      title: "Education",
      cards: [
        {
          id: 4,
          image: coursera,
          head:"Coursera",
          content:
            "Coursera is an online education platform that provides courses from top universities and companies.It helps students and professionals learn new skills and earn certificates online.",
          button1: "details",
          button2: "install",
        },
        {
          id: 5,
          image: udemy,
          head:"Udemy",
          content:
            "Udemy is an online learning platform that offers courses on technology, business, and personal development.It helps learners gain new skills through video-based lessons at their own pace.",
          button1: "details",
          button2: "install",
        },
        // {
        //   id: 6,
        //   image: youtube,
        //   content:
        //     "YouTube is a video streaming platform that allows users to watch upload, and share videos across various categories.",
        //   button1: "details",
        //   button2: "install",
        // },
        // {
        //   id: 7,
        //   image: youtube,
        //   content:
        //     "YouTube is a video streaming platform that allows users to watch upload, and share videos across various categories.",
        //   button1: "details",
        //   button2: "install",
        // },
      ],
    },
  ];
  return (
    <>
      <View style={styles.mainpage}>
        <Text
          style={[
            { backgroundColor: "#4f97db" },
            { color: "white" },
            { fontWeight: "bold" },
            { padding: 10 },
            { textAlign: "center" },
            { width: "100%" },
            { borderRadius: 20 },
            {marginBottom:10}
          ]}
        >
          Apps
        </Text>

        <FlatList
          data={dataCards}
          keyExtractor={(item) => item.title}
          renderItem={( {item }) => (
            <List.Accordion style={{marginBottom:10}} title={item.title}>
              {item.cards.map((singleCard) => (
                <Card key={singleCard.id} style={styles.solocard}>
                  <Card.Cover
                    style={styles.cardimage}
                    source={singleCard.image}
                  ></Card.Cover>
                  <Text style={styles.cardTitle}>{singleCard.head}</Text>
                  <Card.Content>
                    <Text style={styles.cardContent}>{singleCard.content}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button>{singleCard.button1}</Button>
                    <Button onPress={() => setStatusInstall(true)}>
                      {singleCard.button2}
                    </Button>
                  </Card.Actions>
                </Card>
              ))}
            </List.Accordion>
          )}
        />
        

        <Snackbar
          style={styles.snack}
          visible={statusInstall}
          icon={"close"}
          onIconPress={() => setStatusInstall(false)}
        >
          App is Installing
        </Snackbar>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cardimage: {
    alignSelf: "center",
    width: "95%",
    padding: 5,
    height: 100,
    marginVertical: 10,
  },
  solocard: {
    padding: 5,
    margin: 5,
  },
  mainpage: {
    backgroundColor: "black",
    padding: 15,
    width: "100%",
    height: "95%",
  },
  cardContent:{
    
    fontSize:13,
    fontStyle:'normal',
    fontWeight:'50',
    color:'gray',
  },
  cardTitle:{
    fontSize:24,
    fontWeight:'bold',
    padding:5,
    margin:10
  },
  snack: {
    backgroundColor: "#02369e",
    width: "100%",
    alignSelf: "center",
  },
});
