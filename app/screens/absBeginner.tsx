/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const absBeginner: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const crunches = require('/Users/HP235999/Desktop/test/assets/images/crunches.gif');
  const russianTwist = require('/Users/HP235999/Desktop/test/assets/images/russianTwist.gif');
  const mountainClimber = require('/Users/HP235999/Desktop/test/assets/images/mountainClimber.gif');
  const heelTouch = require('/Users/HP235999/Desktop/test/assets/images/heelTouch.gif');
  const legRaises = require('/Users/HP235999/Desktop/test/assets/images/legRaises.gif');
  const plank = require('/Users/HP235999/Desktop/test/assets/images/plank.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '', marginLeft: 20 }}>ABS</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20, color: '' }}>Beginner</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20, color: '' }}>18mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20, color: '' }}>Abs</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text
          style={{ fontSize: 16, fontWeight: 'bold', color: '', marginTop: 20, marginLeft: 20 }}>
          Exercises(14)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={crunches} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ABDOMINAL CRUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 16</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={russianTwist} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>RUSSIAN TWIST</Text>
            <Text style={{ fontSize: 20 }}>x 32</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={mountainClimber} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>MOUNTAIN CLIMBER</Text>
            <Text style={{ fontSize: 20 }}>x 16</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={heelTouch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HEEL TOUCH</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={legRaises} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>LEG RAISES</Text>
            <Text style={{ fontSize: 20 }}>x 16</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={plank} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PLANK</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={crunches} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ABDOMINAL CRUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 16</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={russianTwist} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>RUSSIAN TWIST</Text>
            <Text style={{ fontSize: 20 }}>x 32</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={mountainClimber} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>MOUNTAIN CLIMBER</Text>
            <Text style={{ fontSize: 20 }}>x 12</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={heelTouch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HEEL TOUCH</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={legRaises} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>LEG RAISES</Text>
            <Text style={{ fontSize: 20 }}>x 14</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={plank} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PLANK</Text>
            <Text style={{ fontSize: 20 }}>x 25</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default absBeginner;
