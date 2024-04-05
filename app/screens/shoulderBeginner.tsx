/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const shoulderBeginner: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const sideRaise = require('/Users/HP235999/Desktop/test/assets/images/sideRaise.gif');
  const pushUp = require('/Users/HP235999/Desktop/test/assets/images/pushUp.gif');
  const armScissors = require('/Users/HP235999/Desktop/test/assets/images/armScissors.gif');
  const scissorSkier = require('/Users/HP235999/Desktop/test/assets/images/scissorSkier.gif');
  const dumbbelFrontRaise = require('/Users/HP235999/Desktop/test/assets/images/dumbbelFrontRaise.gif');
  const dumbbelShoulderPress = require('/Users/HP235999/Desktop/test/assets/images/dumbbelShoulderPress.gif');
  const wallShoulderStretch = require('/Users/HP235999/Desktop/test/assets/images/wallShoulderStretch.gif');
  const shoulderStretch = require('/Users/HP235999/Desktop/test/assets/images/shoulderStretch.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>SHOULDER&BACK</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Beginner</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>15mins</Text>
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
          <Image source={sideRaise} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIDE ARM RAISE</Text>
            <Text style={{ fontSize: 20 }}>45sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={pushUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>KNEE PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 14</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={armScissors} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ARM SCISSORS</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={scissorSkier} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SCISSORS SKIER</Text>
            <Text style={{ fontSize: 20 }}>x 12</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={pushUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>KNEE PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 12</Text>
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
          <Image source={wallShoulderStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>WALL SHOULDER STRETCH</Text>
            <Text style={{ fontSize: 20 }}>60sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={shoulderStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SHOULDER STRETCH</Text>
            <Text style={{ fontSize: 20 }}>30sec</Text>
          </View>
        </View>
        <View style={{ height: 100 }}>
          <Text style={{ color: 'white' }}>d</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default shoulderBeginner;
