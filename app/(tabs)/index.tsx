/* eslint-disable @typescript-eslint/no-var-requires */

import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, ScrollView, Image } from 'react-native';

const Index: React.FC = () => {
  const chestBeginner = require('/Users/HP235999/Desktop/test/assets/images/chestBeginner.png');
  const absBeginner = require('/Users/HP235999/Desktop/test/assets/images/absBeginner.png');
  const armBeginner = require('/Users/HP235999/Desktop/test/assets/images/armBeginner.png');
  const legBeginner = require('/Users/HP235999/Desktop/test/assets/images/legBeginner.png');
  const shoulderBeginner = require('/Users/HP235999/Desktop/test/assets/images/shoulderBeginner.png');
  const absInter = require('/Users/HP235999/Desktop/test/assets/images/absInter.png');
  const chestInter = require('/Users/HP235999/Desktop/test/assets/images/chestInter.png');
  const armInter = require('/Users/HP235999/Desktop/test/assets/images/armInter.png');
  const legInter = require('/Users/HP235999/Desktop/test/assets/images/legInter.png');
  const shoulderInter = require('/Users/HP235999/Desktop/test/assets/images/shoulderInter.png');
  // const shoulderAdvanced = require('/Users/HP235999/Desktop/test/assets/images/shoulderAdvanced.png');
  // const absAdvanced = require('/Users/HP235999/Desktop/test/assets/images/absAdvanced.png');
  // const chestAdvanced = require('/Users/HP235999/Desktop/test/assets/images/chestAdvanced.png');
  // const armAdvanced = require('/Users/HP235999/Desktop/test/assets/images/armAdvanced.png');
  // const legAdvanced = require('/Users/HP235999/Desktop/test/assets/images/legAdvanced.png');
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 15, marginLeft: 10, color: 'white', marginTop: 50 }}>
          Good Morning🔥
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold', color: 'white' }}>
          Name
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          Classic Workouts
        </Text>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 400, height: 500, backgroundColor: '#444343', borderRadius: 30 }}>
            <Text style={{ marginLeft: 30, marginTop: 30, fontSize: 35, color: 'white' }}>
              Beginner
            </Text>

            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={absBeginner}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Abs : Beginner</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>18mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 119 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={chestBeginner}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Chest : Beginner</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>8mins</Text>
              </View>
              <Link href="../screens/chestBeginner" style={{ marginLeft: 105 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/chestBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={armBeginner}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Arm : Beginner</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>16mins</Text>
              </View>
              <Link href="../screens/armBeginner" style={{ marginLeft: 117 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/armBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={legBeginner}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Leg : Beginner</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>22mins</Text>
              </View>
              <Link href="../screens/legBeginner" style={{ marginLeft: 119 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/legBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={shoulderBeginner}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Shoulder & Back : Beginner</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>15mins</Text>
              </View>
              <Link href="../screens/shoulderBeginner" style={{ marginLeft: 26 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/shoulderBeginner"
                />
              </Link>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 400, height: 500, backgroundColor: '#444343', borderRadius: 30 }}>
            <Text style={{ marginLeft: 30, marginTop: 30, fontSize: 35, color: 'white' }}>
              Intermediate
            </Text>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={absInter}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Abs : Intermediate</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>18mins</Text>
              </View>
              <Link href="../screens/absIntermediate" style={{ marginLeft: 93 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absIntermediate"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={chestInter}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Chest : Intermediate</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>18mins</Text>
              </View>

              <Link href="../screens/chestIntermediate" style={{ marginLeft: 78 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/chestIntermediate"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={armInter}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Arm : Intermediate</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>16mins</Text>
              </View>
              <Link href="../screens/armIntermediate" style={{ marginLeft: 90 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/armIntermediate"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={legInter}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Leg : Intermediate</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>22mins</Text>
              </View>
              <Link href="../screens/legIntermediate" style={{ marginLeft: 94 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/legIntermediate"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={shoulderInter}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Shoulder & Back : Intermediate</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>15mins</Text>
              </View>
              <Link href="../screens/shoulderIntermediate" style={{ marginLeft: 1 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/shoulderIntermediate"
                />
              </Link>
            </View>
          </View>
        </View>
        {/* <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 400, height: 500, backgroundColor: '#444343', borderRadius: 30 }}>
            <Text style={{ marginLeft: 30, marginTop: 30, fontSize: 35, color: 'white' }}>
              Advanced
            </Text>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={absAdvanced}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Abs : Advanced</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>18mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 112 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={chestAdvanced}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Chest : Advanced</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>18mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 98 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={armAdvanced}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Arm : Advanced</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>16mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 110 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={legAdvanced}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Leg : Advanced</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>22mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 113 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: 'black',
                borderTopWidth: 1,
                alignItems: 'center',
                height: 80,
              }}>
              <Image
                source={shoulderAdvanced}
                style={{ width: 80, height: 60, borderRadius: 10, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Shoulder & Back : Advanced</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>15mins</Text>
              </View>
              <Link href="../screens/absBeginner" style={{ marginLeft: 19 }}>
                <AntDesign
                  name="rightcircle"
                  size={25}
                  color="black"
                  link="/tabs/index"
                  linkDetail="/screens/absBeginner"
                />
              </Link>
            </View>
          </View>
        </View> */}
      </View>
      <View style={{ height: 150 }}>
        <Text>f</Text>
      </View>
    </ScrollView>
  );
};

export default Index;
