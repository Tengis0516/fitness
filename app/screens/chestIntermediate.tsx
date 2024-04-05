/* eslint-disable @typescript-eslint/no-var-requires */
import { View, Text, Image, ScrollView } from 'react-native';

const chestIntermediate: React.FC = () => {
  const jumpingJackets = require('/Users/HP235999/Desktop/test/assets/images/jumping-Jacks.gif');
  const pushUP = require('/Users/HP235999/Desktop/test/assets/images/pushUp.gif');
  const staggered = require('/Users/HP235999/Desktop/test/assets/images/staggered.gif');
  //   const tricepDips = require('/Users/HP235999/Desktop/test/assets/images/tricepDips.gif');
  const chestStretch = require('/Users/HP235999/Desktop/test/assets/images/chestStretch.gif');
  const hinduPushUp = require('/Users/HP235999/Desktop/test/assets/images/hinduPushUp.gif');
  const declinePushUp = require('/Users/HP235999/Desktop/test/assets/images/declinePushUp.gif');
  const absStretch = require('/Users/HP235999/Desktop/test/assets/images/absStretch.gif');
  //   const chestStretch = require('/Users/HP235999/Desktop/test/assets/images/chestStretch.gif');
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>CHEST</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Intermediate</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Level</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>16mins</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Time</Text>
          </View>
          <View style={{ marginLeft: 80 }}>
            <Text style={{ fontSize: 20 }}>Chest</Text>
            <Text style={{ fontSize: 20, color: 'grey' }}>Focus area</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
          Exercises(8)
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={jumpingJackets} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>JUMPING JACKS</Text>
            <Text style={{ fontSize: 20 }}>x 30</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={pushUP} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>KNEE PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={staggered} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>STAGGERED ARM PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 20 (2set)</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={hinduPushUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HINDU PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 15 </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={declinePushUp} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DECLINE PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 15 </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={staggered} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>STAGGERED ARM PUSH-UPS</Text>
            <Text style={{ fontSize: 20 }}>x 10</Text>
          </View>
        </View>
        {/* <View style={{ flexDirection: 'row' }}>
          <Image source={tricepDips} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TRICEPS DIPS</Text>
            <Text style={{ fontSize: 20 }}>x 10</Text>
          </View>
        </View> */}
        <View style={{ flexDirection: 'row' }}>
          <Image source={absStretch} style={{ height: 120, width: 120 }} />
          <View style={{ marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>COBRA STRETCH</Text>
            <Text style={{ fontSize: 20 }}>40sec</Text>
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

export default chestIntermediate;
