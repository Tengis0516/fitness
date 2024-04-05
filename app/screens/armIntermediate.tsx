/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const armIntermadiate: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const sideRaise = require('/Users/HP235999/Desktop/test/assets/images/sideRaise.gif');
  const tricepDips = require('/Users/HP235999/Desktop/test/assets/images/tricepDips.gif');
  const armCircle = require('/Users/HP235999/Desktop/test/assets/images/armCircle.gif');
  const pushUp = require('/Users/HP235999/Desktop/test/assets/images/pushUp.gif');
  const diagonal = require('/Users/HP235999/Desktop/test/assets/images/diagonal.gif');
  const legBarbell = require('/Users/HP235999/Desktop/test/assets/images/legBarbell.gif');
  const punch = require('/Users/HP235999/Desktop/test/assets/images/punch.gif');
  const inchworms = require('/Users/HP235999/Desktop/test/assets/images/inchworms.gif');
  const chestStretch = require('/Users/HP235999/Desktop/test/assets/images/chestStretch.gif');
  const rotation = require('/Users/HP235999/Desktop/test/assets/images/rotation.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>ARM</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Intermediate</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>24mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>Arm</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
          Exercises(11)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={sideRaise} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIDE ARM RAISE</Text>
            <Text style={{ fontSize: 20 }}>45sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={tricepDips} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TRICEPS DIPS</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={armCircle} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ARM CIRCLES CLOCKWISE</Text>
            <Text style={{ fontSize: 20 }}>45sec</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={pushUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>KNEE PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 25</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={rotation} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ROTATION</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={legBarbell} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>LEG BARBELL CURL</Text>
            <Text style={{ fontSize: 20 }}>x 16 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={diagonal} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DIAGONAL PLANK</Text>
            <Text style={{ fontSize: 20 }}>x 15 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={punch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={inchworms} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>INCHWORMS</Text>
            <Text style={{ fontSize: 20 }}>x 15</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={chestStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>CHEST STRETCH</Text>
            <Text style={{ fontSize: 20 }}>60sec</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default armIntermadiate;
