/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const legIntermediate: React.FC = () => {
  const squats = require('/Users/HP235999/Desktop/test/assets/images/squats.gif');
  const sideLegLifts = require('/Users/HP235999/Desktop/test/assets/images/sideLegLifts.gif');
  const frontBackLunges = require('/Users/HP235999/Desktop/test/assets/images/frontBackLunges.gif');
  const donkeyKick = require('/Users/HP235999/Desktop/test/assets/images/donkeyKick.gif');
  const squadStretch = require('/Users/HP235999/Desktop/test/assets/images/squadStretch.gif');
  const calfStretch = require('/Users/HP235999/Desktop/test/assets/images/calfStretch.gif');
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const fireHydrant = require('/Users/HP235999/Desktop/test/assets/images/fireHydrant.gif');
  const flutterKicks = require('/Users/HP235999/Desktop/test/assets/images/flutterKicks.gif');
  const wallSit = require('/Users/HP235999/Desktop/test/assets/images/wallSit.gif');
  const calfRaise = require('/Users/HP235999/Desktop/test/assets/images/calfRaise.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>LEG</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Intermediate</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>36mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>Leg</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
          Exercises(11)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>30sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={squats} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SQUATS</Text>
            <Text style={{ fontSize: 20 }}>x 15 (3set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={sideLegLifts} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIDE LEG LIFTS</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={frontBackLunges} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>FRONT AND BACK LUNGES</Text>
            <Text style={{ fontSize: 20 }}>x 14 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={donkeyKick} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DONKEY KICKS</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={fireHydrant} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>FIRE HYDRANT</Text>
            <Text style={{ fontSize: 20 }}>x 25 (3set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={flutterKicks} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>FLUTTER KICKS</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={wallSit} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>WALL SIT</Text>
            <Text style={{ fontSize: 20 }}>30sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={calfRaise} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>CALF RAISE WITH SPLAYED FOOT</Text>
            <Text style={{ fontSize: 20 }}>20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={squadStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>QUAD STRETCH</Text>
            <Text style={{ fontSize: 20 }}>45sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={calfStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>CALF STRETCH</Text>
            <Text style={{ fontSize: 20 }}>45sec</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default legIntermediate;
