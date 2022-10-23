import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableHighlight,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import Category from "../components/Explore/Category";

var idvid = "8PFGvuLbNhU";
var vidplay = false;
var vidplayreload = true;
const youtubeAPIKey = "AIzaSyBqn3GpeWNdNLm5WdKd5PFsQ7LPl1xO80Q";
const youtubeList = "https://www.googleapis.com/youtube/v3/playlistItems";

const playlistId1 = "PLVxekAJ0cMoBbUxkA5kzw3ZQtf_frYwz1";
const playlistId2 = "PLVxekAJ0cMoBFMurS2kapZgSJBuv2uoR1";
const playlistId3 = "PLVxekAJ0cMoB7F2ue7GOpGRLyefXe1No6";

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  const [consultar1, guardarconsultar1] = useState(true);
  const [resultado1, guardarresultado1] = useState({});

  const [consultar2, guardarconsultar2] = useState(true);
  const [resultado2, guardarresultado2] = useState({});

  const [consultar3, guardarconsultar3] = useState(true);
  const [resultado3, guardarresultado3] = useState({});

  useEffect(() => {
    const consultarPais = async () => {
      if (consultar1) {
        const url = `${youtubeList}?part=snippet&part=contentDetails&playlistId=${playlistId1}&maxResults=6&key=${youtubeAPIKey}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado1(resultado);
        } catch (error) {
          mostrarAlerta();
        }
      }
      return () => {
        props: {
          resultado1;
        }
        guardarconsultar1(false);
      };
    };
    consultarPais();
  }, [consultar1]);

  useEffect(() => {
    const consultarPais = async () => {
      if (consultar2) {
        const url = `${youtubeList}?part=snippet&part=contentDetails&playlistId=${playlistId2}&maxResults=6&key=${youtubeAPIKey}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado2(resultado);
        } catch (error) {
          mostrarAlerta();
        }
      }
      return () => {
        props: {
          resultado2;
        }
        guardarconsultar2(false);
      };
    };
    consultarPais();
  }, [consultar2]);

  useEffect(() => {
    const consultarPais = async () => {
      if (consultar3) {
        const url = `${youtubeList}?part=snippet&part=contentDetails&playlistId=${playlistId3}&maxResults=6&key=${youtubeAPIKey}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado3(resultado);
        } catch (error) {
          mostrarAlerta();
        }
      }
      return () => {
        props: {
          resultado3;
        }
        guardarconsultar3(false);
      };
    };
    consultarPais();
  }, [consultar3]);

  var v;
  var pelicula1 = ["1", "2", "3", "4", "5", "6"];
  var nombre1 = ["1", "2", "3", "4", "5", "6"];
  var urlthumb1 = ["1", "2", "3", "4", "5", "6"];
  var pelicula2 = ["1", "2", "3", "4", "5", "6"];
  var nombre2 = ["1", "2", "3", "4", "5", "6"];
  var urlthumb2 = ["1", "2", "3", "4", "5", "6"];
  var pelicula3 = ["1", "2", "3", "4", "5", "6"];
  var nombre3 = ["1", "2", "3", "4", "5", "6"];
  var urlthumb3 = ["1", "2", "3", "4", "5", "6"];

  var category1 = [];
  var category2 = [];
  var category3 = [];

  const Blink = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);
  
     useEffect(() => {
       const toggle = setInterval(() => {
         setIsShowingText(vidplayreload);
         if(!vidplayreload){
          vidplayreload=true;
         }
       }, 1000);
  
       return () => clearInterval(toggle);
    })
  
    if (!isShowingText) {
      return null;
    }
  
    return <YoutubePlayer key={vidplayreload} height={250} play={vidplay} videoId={idvid} />;
  }

  return (
    <View style={{ flex: 1 }}>
       <Blink/>
        
      <ScrollView scrollEventThrottle={16} style={{ flex: 1 }}>
        <View style={{ backgroundColor: "black", paddingHorizontal: 20 }}>
          <Text style={styles.title}>Comedia</Text>

          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              {Object.entries(resultado1).map((item) => {
                if (item[0] == "items") {
                  v = item[1];
                  for (let i = 0; i < v.length; i++) {
                    pelicula1[i] = v[i];
                    nombre1[i] = pelicula1[i].snippet.title;
                    urlthumb1[i] = pelicula1[i].snippet.thumbnails.medium.url;
                    category1.push(
                      <TouchableHighlight
                        key={"touch" + i}
                        onPress={() => {
                          idvid = pelicula1[i].snippet.resourceId.videoId;
                          vidplay = true;
                          vidplayreload= false;
                        }}
                      >
                        <Category
                          imageUri={{ uri: urlthumb1[i] }}
                          name={nombre1[i]}
                        />
                      </TouchableHighlight>
                    );
                  }
                }
              })}
              {category1}
            </ScrollView>
          </View>
        </View>
        <View style={{ backgroundColor: "black", paddingHorizontal: 20 }}>
          <Text style={styles.title}>Acción</Text>

          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              {Object.entries(resultado2).map((item) => {
                if (item[0] == "items") {
                  v = item[1];
                  for (let i = 0; i < v.length; i++) {
                    pelicula2[i] = v[i];
                    nombre2[i] = pelicula2[i].snippet.title;
                    urlthumb2[i] = pelicula2[i].snippet.thumbnails.medium.url;
                    category2.push(
                      <TouchableHighlight
                        key={"touch" + i + 1}
                        onPress={() => {
                          idvid = pelicula2[i].snippet.resourceId.videoId;
                          vidplay = true;
                          vidplayreload= false;
                        }}
                      >
                        <Category
                          imageUri={{ uri: urlthumb2[i] }}
                          name={nombre2[i]}
                        />
                      </TouchableHighlight>
                    );
                  }
                }
              })}
              {category2}
            </ScrollView>
          </View>
        </View>

        <View style={{ backgroundColor: "black", paddingHorizontal: 20 }}>
          <Text style={styles.title}>Animaciones</Text>

          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              {Object.entries(resultado3).map((item) => {
                if (item[0] == "items") {
                  v = item[1];
                  for (let i = 0; i < v.length; i++) {
                    pelicula3[i] = v[i];
                    nombre3[i] = pelicula3[i].snippet.title;
                    urlthumb3[i] = pelicula3[i].snippet.thumbnails.medium.url;
                    category3.push(
                      <TouchableHighlight
                        key={"touch" + i + 2}
                        onPress={() => {
                          idvid = pelicula3[i].snippet.resourceId.videoId;
                          vidplay = true;
                          vidplayreload= false;
                        }}
                      >
                        <Category
                          imageUri={{ uri: urlthumb3[i] }}
                          name={nombre3[i]}
                        />
                      </TouchableHighlight>
                    );
                  }
                }
              })}
              {category3}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const mostrarAlerta = () => {
  Alert.alert("Error", "No hay resultado intenta con otraciudad o país"),
    [{ Text: "Ok" }];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});