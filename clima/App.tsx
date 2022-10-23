import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useEffect, useState } from "react";


export default function App() {
  const [ciudad, setCiudad] = useState(null);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);
  const [consultar1, guardarconsultar1] = useState(false);
  const [resultado1, guardarresultado1] = useState({});

  function citySplitter(string, length = 1000) {
    
    const words = string.split(", ");
    setCiudad(words[0]);
    setLon(words[1]);
    setLat(words[2]);    
    guardarconsultar1(true);
  }

  var urlApi =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=c09c7c1ab7cd139158e79e68b6c594d3";
  useEffect(() => {
    const consultarPais = async () => {
      
      if (consultar1) {
        var item = [ciudad];
        try {
          const respuesta = await fetch(urlApi);
          const resultado = await respuesta.json();
          //console.log(resultado);
          item[1] = resultado.main.temp;
          item[2] = resultado.weather[0].description;
          item[3] = resultado.main.temp_min;
          item[4] = resultado.main.temp_max;
          item[5] = resultado.main.humidity;
          item[6] = resultado.wind.deg;
          item[7] = resultado.wind.speed;
          //console.log(item);
          guardarresultado1(item);
        } catch (error) {
          Alert.alert("Error", "No hay resultado intenta con otra ciudad");
        }
      };
    };
    consultarPais();
  });

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => citySplitter(value)}
        placeholder={{
          label: "--Seleccione una ciudad--",
          value: "Seleccione un valor, 0, 0",
        }}
        items={[
          { label: "Aguilares", value: "Aguilares, -89.183989, 13.960084" },
          { label: "Apopa", value: "Apopa, -89.182064, 13.811251" },
          {
            label: "Ayutuxtepeque",
            value: "Ayutuxtepeque, -89.1991992021823, 13.750721468170465",
          },
          {
            label: "Ciudad Delgado",
            value: "Ciudad Delgado, -89.1593524332, 13.754027388359908",
          },
          {
            label: "Cuscatancingo",
            value: "Cuscatancingo, -89.18363315526794, 13.751022420925505",
          },
          {
            label: "El Paisnal",
            value: "El Paisnal, -89.21758764133163, 13.974754432980871",
          },
          {
            label: "Guazapa",
            value: "Guazapa, -89.17317022953021, 13.875696199873992",
          },
          {
            label: "Ilopango",
            value: "Ilopango, -89.11350260725612, 13.692069522270277",
          },
          {
            label: "Mejicanos",
            value: "Mejicanos, -89.20817153480269, 13.732246272328014",
          },
          {
            label: "Nejapa",
            value: "Nejapa, -89.23398695265742, 13.813177256833171",
          },
          {
            label: "Panchimalco",
            value: "Panchimalco, -89.17806085005326, 13.611588598519662",
          },
          {
            label: "Rosario de Mora",
            value: "Rosario de Mora, -89.20516490767481, 13.575328487238094",
          },
          {
            label: "San Marcos",
            value: "San Marcos, -89.17558076669361, 13.658070197832654",
          },
          {
            label: "San Martín",
            value: "San Martin, -89.06719710353744, 13.736026894092197",
          },
          {
            label: "San Salvador ",
            value: "San Salvador, -89.21353475171482, 13.69364124381271",
          },
          {
            label: "Santiago Texacuangos",
            value:
              "Santiago Texacuangos, -89.11879984268823, 13.639056062706421",
          },
          {
            label: "Santo Tomás ",
            value: "Santo Tomas, -89.1447187965708, 13.641038431560585",
          },
          {
            label: "Soyapango",
            value: "Soyapango, -89.14029024741102, 13.708443272147177",
          },
          {
            label: "Tonacatepeque",
            value: "Tonacatepeque, -89.1176045920687, 13.779333320104868",
          },
        ]}
      />
      <StatusBar style="auto" />
      <Text style={styles.Titulo}>◉ {ciudad}</Text>
      <Text style={styles.Titulo}>Temperatura: {resultado1[1]}°</Text>
      <Text style={styles.normal}>Tipo Clima: {resultado1[2]}</Text>
      <Text style={styles.normal}>Minimo: {resultado1[3]}°  Maximo: {resultado1[4]}°</Text>
      <Text style={styles.normal}>Humedad: {resultado1[5]}%</Text>
      <Text style={styles.normal}>viento: {resultado1[6]} grados | {resultado1[7]} km/h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    fontSize: 30,
  },
  normal: {
    fontSize: 15,
  },
});
