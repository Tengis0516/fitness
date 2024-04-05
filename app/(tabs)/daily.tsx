import { Feather } from '@expo/vector-icons';
import { View, Text, ImageBackground, ScrollView } from 'react-native';

const Daily: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const daily = require('/Users/HP235999/Desktop/test/assets/images/daily.png');
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            marginLeft: 22,
            color: 'white',
            marginTop: 60,
          }}>
          Six Pack In 30 days
        </Text>
        <View style={{ alignItems: 'center' }}>
          <ImageBackground source={daily} style={{ width: 400, height: 200 }}>
            <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginTop: 80 }}>
              LOSE BELLY FAT
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>30</Text>
              <Text style={{ color: 'grey', fontSize: 20 }}>Days left</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 1
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 2
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 3
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 4
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 220, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 5
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 6
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 7
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 8
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 220, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 9
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 10
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 11
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 12
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 220, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 13
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 14
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 15
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 16
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 220, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 17
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 18
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 19
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 20
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 215, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 21
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 22
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 23
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 24
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 215, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 25
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 26
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 27
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 28
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  Rest Day
                </Text>
              </View>
              <Feather
                style={{ marginLeft: 215, marginTop: 10 }}
                name="coffee"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 29
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: 'grey',
              height: 80,
              justifyContent: 'center',
              width: 400,
              borderRadius: 15,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 28, color: 'white', marginLeft: 20, fontWeight: 'bold' }}>
                  Day 30
                </Text>
                <Text
                  style={{ fontSize: 20, color: 'rgb(62, 62, 62)', marginLeft: 20, marginTop: 5 }}>
                  15 Exercises
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 120,
                  height: 50,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 150,
                }}>
                <Text style={{ color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Start</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Daily;
