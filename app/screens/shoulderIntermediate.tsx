/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const shoulderIntermediate: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const sideRaise = require('/Users/HP235999/Desktop/test/assets/images/sideRaise.gif');
  const dumbbelFrontRaise = require('/Users/HP235999/Desktop/test/assets/images/dumbbelFrontRaise.gif');
  const dumbbelShoulderPress = require('/Users/HP235999/Desktop/test/assets/images/dumbbelShoulderPress.gif');
  const wallShoulderStretch = require('/Users/HP235999/Desktop/test/assets/images/wallShoulderStretch.gif');
  const absStretch = require('/Users/HP235999/Desktop/test/assets/images/absStretch.gif');
  const swimmerSuperman = require('/Users/HP235999/Desktop/test/assets/images/swimmerSuperman.gif');
  const floorTricepDips = require('/Users/HP235999/Desktop/test/assets/images/floorTricepDips.gif');
  const tricepsKickbacks = require('/Users/HP235999/Desktop/test/assets/images/tricepsKickbacks.gif');

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>SHOULDER&BACK</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Intermediate</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>17mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>Shoulder&Back</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
          Exercises(12)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={tricepsKickbacks} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TRICEPS KICKBACKS</Text>
            <Text style={{ fontSize: 20 }}>x 15 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={sideRaise} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIDE ARM RAISE</Text>
            <Text style={{ fontSize: 20 }}>x 25</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={dumbbelFrontRaise} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DUMBBEL FRONT RAISE</Text>
            <Text style={{ fontSize: 20 }}>x 10 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={dumbbelShoulderPress} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DUMBBEL SHOULDER PRESS</Text>
            <Text style={{ fontSize: 20 }}>x 10 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={floorTricepDips} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>FLOOR TRICEP DIPS</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={swimmerSuperman} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SWIMMER AND SUPERMAN</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={wallShoulderStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>WALL SHOULDER STRETCH</Text>
            <Text style={{ fontSize: 20 }}>60sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={absStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>COBRA STRETCH</Text>
            <Text style={{ fontSize: 20 }}>60sec</Text>
          </View>
        </View>
        <View style={{ height: 100 }}>
          <Text style={{ color: 'white' }}>d</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default shoulderIntermediate;
