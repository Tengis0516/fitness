/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const absIntermediate: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const crunches = require('/Users/HP235999/Desktop/test/assets/images/crunches.gif');
  const mountainClimber = require('/Users/HP235999/Desktop/test/assets/images/mountainClimber.gif');
  const heelTouch = require('/Users/HP235999/Desktop/test/assets/images/heelTouch.gif');
  const legRaises = require('/Users/HP235999/Desktop/test/assets/images/legRaises.gif');
  const plank = require('/Users/HP235999/Desktop/test/assets/images/plank.gif');
  const standingCrossCrunches = require('/Users/HP235999/Desktop/test/assets/images/standingCrossCrunches.gif');
  const gluteBridge = require('/Users/HP235999/Desktop/test/assets/images/gluteBridge.gif');
  const bicycleCrunches = require('/Users/HP235999/Desktop/test/assets/images/bicycleCrunches.gif');
  const vUp = require('/Users/HP235999/Desktop/test/assets/images/vUp.gif');
  const absStretch = require('/Users/HP235999/Desktop/test/assets/images/absStretch.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '', marginLeft: 20 }}>ABS</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20, color: '' }}>Intermediate</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20, color: '' }}>25mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20, color: '' }}>Abs</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text
          style={{ fontSize: 16, fontWeight: 'bold', color: '', marginTop: 20, marginLeft: 20 }}>
          Exercises(13)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={heelTouch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HEEL TOUCH</Text>
            <Text style={{ fontSize: 20 }}>x 26</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={mountainClimber} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>MOUNTAIN CLIMBER</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={standingCrossCrunches} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>STANDING CROSS CRUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={gluteBridge} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>GLUTE BRIDGE</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={bicycleCrunches} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>BICYCLE CRUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={vUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>V UP</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={heelTouch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HEEL TOUCH</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
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
          <Image source={plank} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PLANK</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={legRaises} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>LEG RAISES</Text>
            <Text style={{ fontSize: 20 }}>x 15</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={bicycleCrunches} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>BICYCLE CRUNCHES</Text>
            <Text style={{ fontSize: 20 }}>x 20</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={absStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>COBRA STRETCH</Text>
            <Text style={{ fontSize: 20 }}>60sec</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default absIntermediate;
