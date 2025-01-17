import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AndroidLab = () => {
  const ballY = useRef(new Animated.Value(-25)).current; // Ball position
  const [density, setDensity] = useState(0);
  const [target, setTarget] = useState(-25);
  const [info, setInfo] = useState("Bola mengapung karena memiliki kepadatan setingkat dengan minyak goreng yang berdensitas mendekati 910 kg/m^3.Apakah Anda tahu? Berdasarkan penelitian di tahun 2022 masyarakat Indonesia menggunakan sebanyak 2.65 juta ton minyak goreng.");
    const [judul,setJudul]=useState("Minyak Goreng");

  useEffect(() => {
    // Trigger animation when the target changes
    Animated.timing(ballY, {
      toValue: target,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [target]);

  const handleDensity = (amount) => {
    setDensity((prevDensity) => {
      const newDensity = prevDensity + amount;

      if (newDensity <=0) {
        setTarget(-150); 
        setInfo("Bola melayang di udara karena densitas bola lebih kecil dari densitas udara bahkan melewati gas hidrogen dengan densitas disekitar 0.089 kg/m^3. Apakah Anda tahu? Hidrogen adalah elemen yang paling melimpah di alam semesta tetapi cukup langka di bumi.");
        setJudul("Hidrogen")
      } else if (newDensity > 1 && newDensity<=200) {
        setTarget(-50); // Ball sinks to the bottom
        setInfo("Bola sedang mengapung dengan kepadatan mendekati Styrofoam yang berdensitas mendekati 75 kg/m^3.Apakah Anda tahu? Dibutuhkan lebih dari 500 tahun untuk mendekomposisi styrofoam dan 17.2% dari semua sampah plastik di laut berupa styrofoam.");
        setJudul("Styrofoam")
      }else if (newDensity > 200 && newDensity<=800) {
        setTarget(-35); // Ball sinks to the bottom
        setInfo("Bola sedang mengapung dengan kepadatan seperti kayu yang berdensitas disekitar 700 kg/m^3.Apakah Anda tahu? Kayu yang paling sering dipakai di dunia adalah kayu ek yang tidak hanya digunakan untuk membuat perabotan tetapi juga sebagai bahan bangunan.");
        setJudul("Kayu")
      } else if (newDensity > 800 && newDensity<=1000) {
        setTarget(-25); // Ball sinks to the bottom
        setInfo("Bola mengapung karena memiliki kepadatan setingkat dengan minyak goreng yang berdensitas mendekati 910 kg/m^3.Apakah Anda tahu? Berdasarkan penelitian di tahun 2022 masyarakat Indonesia menggunakan sebanyak 2.65 juta ton minyak goreng.");
        setJudul("Minyak Goreng")
      } else if (newDensity > 1000 && newDensity<=1030) {
        setTarget(50); // Ball sinks to the bottom
        setInfo("Bola sedang melayang di air karena densitas bola sama dengan densitas air disekitar 1000 kg/m^3.Apakah Anda tahu? Karena konsentrasi garam, air laut memiliki densitas sekitar 3% lebih besar daripada air tawar.");
        setJudul("Air")
      } else if (newDensity > 1030 && newDensity<1700) {
        setTarget(125); // Ball sinks to the bottom
        setInfo("Bola tenggelam dengan kepadatan mendekati Pasir yang berdensitas 1600 kg/m^3.Apakah Anda tahu? Pasir terbentuk sebagian besar dari kristal erosi berbatuan tetapi juga memiliki sebagian pecahan kerang, pecahan koral dan tinja ikan.");
        setJudul("Pasir")
      } 
      else if (newDensity > 1700 && newDensity<2500) {
        setTarget(125); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat dengan aluminium dengan densitas mendekati 2700 kg/m^3.Apakah Anda tahu? Aluminium adalah logam yang paling melimpah, cukup ringan dan dapat di daur ulang berkali-kali sehinga pemakaiannya pun juga melimpah.");
        setJudul("Beton")
      } 
      else if (newDensity > 2500 && newDensity<2800) {
        setTarget(125); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat dengan aluminium dengan densitas mendekati 2700 kg/m^3.Apakah Anda tahu? Aluminium adalah logam yang paling melimpah, cukup ringan dan dapat di daur ulang berkali-kali sehinga pemakaiannya pun juga melimpah.");
        setJudul("Aluminium")
      } 
      else{
        setTarget(125); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat denganberlian yang berdensitas mendekati 3500 kg/m^3.Apakah Anda tahu? Cincin berlian pada awalnya bukanlah hal yang wajar dalam pernikahan, konsep cincin berlian pernikahan tersebut berasal dari iklan De Beers sebuah perusahaan berlian pada tahun 1947.");
        setJudul("Berlian")
      } 
      return Math.max(0, Math.min(newDensity, 3700)); // Clamp density between 0 and 100
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.sky} />
        <View style={styles.water}>
          <Animated.View
            style={[
              styles.ball,
              { transform: [{ translateY: ballY }] },
            ]}
          />
        </View>
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{judul}</Text>
          <Text style={styles.infoText}>{info}</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Density Display */}
        <View style={styles.densityBox}>
          <Text style={styles.densityText}>Densitas bola anda sekarang {density} kg/m^3</Text>
        </View>

        {/* Control Buttons */}
        <View style={styles.buttonRow}>
          {[-100, -10, +10, +100].map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleDensity(value)}
            >
              <Text style={styles.buttonText}>
                {value > 0 ? `+${value}` : value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light background color
  },
  topSection: {
    flex: 2,
    position: "relative",
  },
  sky: {
    flex: 1,
    backgroundColor: "#87CEEB", // Sky blue
  },
  water: {
    flex: 1,
    backgroundColor: "#0047AB", // Deep blue
  },
  ball: {
    position: "absolute",
    left: "50%",
    marginLeft: -25, // Center ball horizontally
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  middleSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  infoBox: {
    width: "90%",
    backgroundColor: "#D3D3D3", // Light gray
    borderWidth: 2,
    borderColor: "brown",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Shadow for Android
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  bottomSection: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  densityBox: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0047AB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  densityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0047AB",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#0047AB",
    marginHorizontal: 5,
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default AndroidLab;
