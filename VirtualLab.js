import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

const VirtualLab = () => {
  const ballY = useRef(new Animated.Value(-400)).current;
  const [density, setDensity] = useState(1000);
  const [info, setInfo] = useState("Bola mengapung karena memiliki kepadatan setingkat dengan minyak goreng yang berdensitas mendekati 910 kg/m^3.Apakah Anda tahu? Berdasarkan penelitian di tahun 2022 masyarakat Indonesia menggunakan sebanyak 2.65 juta ton minyak goreng.");
  const [judul,setJudul]=useState("Minyak Goreng");
  const [target, setTarget] = useState(-400);

  useEffect(() => {
    Animated.timing(ballY, {
      toValue: target, // Move ball to position
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [target]); // Re-run when target changes

  const handleDensity = (amount) => {
    setDensity((prevDensity) => {
      const newDensity = density + amount; // Calculate new density
      
      console.log('New Density:', newDensity);

      // Update target position and info text
      if (newDensity <=0) {
        setTarget(-600); 
        setInfo("Bola melayang di udara karena densitas bola lebih kecil dari densitas udara bahkan melewati gas hidrogen dengan densitas disekitar 0.089 kg/m^3. Apakah Anda tahu? Hidrogen adalah elemen yang paling melimpah di alam semesta tetapi cukup langka di bumi.");
        setJudul("Hidrogen")
      } else if (newDensity > 1 && newDensity<=200) {
        setTarget(-450); // Ball sinks to the bottom
        setInfo("Bola sedang mengapung dengan kepadatan mendekati Styrofoam yang berdensitas mendekati 75 kg/m^3.Apakah Anda tahu? Dibutuhkan lebih dari 500 tahun untuk mendekomposisi styrofoam dan 17.2% dari semua sampah plastik di laut berupa styrofoam.");
        setJudul("Styrofoam")
      }else if (newDensity > 200 && newDensity<=800) {
        setTarget(-425); // Ball sinks to the bottom
        setInfo("Bola sedang mengapung dengan kepadatan seperti kayu yang berdensitas disekitar 700 kg/m^3.Apakah Anda tahu? Kayu yang paling sering dipakai di dunia adalah kayu ek yang tidak hanya digunakan untuk membuat perabotan tetapi juga sebagai bahan bangunan.");
        setJudul("Kayu")
      } else if (newDensity > 800 && newDensity<=1000) {
        setTarget(-400); // Ball sinks to the bottom
        setInfo("Bola mengapung karena memiliki kepadatan setingkat dengan minyak goreng yang berdensitas mendekati 910 kg/m^3.Apakah Anda tahu? Berdasarkan penelitian di tahun 2022 masyarakat Indonesia menggunakan sebanyak 2.65 juta ton minyak goreng.");
        setJudul("Minyak Goreng")
      } else if (newDensity > 1000 && newDensity<=1030) {
        setTarget(-350); // Ball sinks to the bottom
        setInfo("Bola sedang melayang di air karena densitas bola sama dengan densitas air disekitar 1000 kg/m^3.Apakah Anda tahu? Karena konsentrasi garam, air laut memiliki densitas sekitar 3% lebih besar daripada air tawar.");
        setJudul("Air")
      } else if (newDensity > 1030 && newDensity<1700) {
        setTarget(0); // Ball sinks to the bottom
        setInfo("Bola tenggelam dengan kepadatan mendekati Pasir yang berdensitas 1600 kg/m^3.Apakah Anda tahu? Pasir terbentuk sebagian besar dari kristal erosi berbatuan tetapi juga memiliki sebagian pecahan kerang, pecahan koral dan tinja ikan.");
        setJudul("Pasir")
      } 
      else if (newDensity > 1700 && newDensity<2500) {
        setTarget(0); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat dengan aluminium dengan densitas mendekati 2700 kg/m^3.Apakah Anda tahu? Aluminium adalah logam yang paling melimpah, cukup ringan dan dapat di daur ulang berkali-kali sehinga pemakaiannya pun juga melimpah.");
        setJudul("Beton")
      } 
      else if (newDensity > 2500 && newDensity<2800) {
        setTarget(0); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat dengan aluminium dengan densitas mendekati 2700 kg/m^3.Apakah Anda tahu? Aluminium adalah logam yang paling melimpah, cukup ringan dan dapat di daur ulang berkali-kali sehinga pemakaiannya pun juga melimpah.");
        setJudul("Aluminium")
      } 
      else{
        setTarget(0); // Ball sinks to the bottom
        setInfo("Bola tenggelam karena memiliki kepadatan setingkat denganberlian yang berdensitas mendekati 3500 kg/m^3.Apakah Anda tahu? Cincin berlian pada awalnya bukanlah hal yang wajar dalam pernikahan, konsep cincin berlian pernikahan tersebut berasal dari iklan De Beers sebuah perusahaan berlian pada tahun 1947.");
        setJudul("Berlian")
      } 

      return Math.max(0, Math.min(newDensity, 3700)); // Clamp density between 0 and 100
    });
  };

  return (
    <View style={styles.container}>
      {/* Left Panel */}
      <View style={styles.leftPanel}>
        <View style={styles.sky}>
          <View style={styles.sun} />
        </View>
        <View style={styles.water}>
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [{ translateY: ballY }],
              },
            ]}
          />
        </View>
      </View>

      {/* Right Panel */}
      <View style={styles.rightPanel}>
        {/* Element Information */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{judul}</Text>
          <Text style={styles.infoText}>{info}</Text>
        </View>

        {/* Density Information */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Densitas bola anda sekarang {density} kg/m^3</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          {[-100, -10, +10, +100].map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleDensity(value)}
            >
              <Text style={styles.buttonText}>{value > 0 ? `+${value}` : value}</Text>
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
    flexDirection: 'row', // Split screen into two panels
    backgroundColor: '#f0f0f0',
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  sky: {
    flex: 1,
    backgroundColor: '#87CEEB',
    position: 'relative',
  },
  sun: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFD54F',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  water: {
    flex: 1,
    backgroundColor: '#0047AB',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderWidth: 2,
    borderColor: 'brown',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#0047AB',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VirtualLab;
