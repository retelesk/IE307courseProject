import React from "react";
import { TouchableOpacity, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function DashboardScreen({ navigation }) {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          position: "absolute",
          top: 60,
          right: 30,
          flexDirection: "row",
          columnGap: 10,
        }}
      >
        <TouchableOpacity>
          <FontAwesome6
            iconStyle="solid"
            name="bell"
            size={20}
            color="#25215E"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6
            iconStyle="solid"
            name="comment-dots"
            size={20}
            color="#25215E"
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <VictoryChart width={350} theme={VictoryTheme.clean}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    </View>
  );
}
const styles = {};
