import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import LoggedComp from "../../components/LoggedComp";
import { UserContext } from "../../context/UserContext";
import { Color } from "../../COLORS/Colors";
import CameraIcon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/Entypo";
import ShoppingBag from "react-native-vector-icons/Feather";
import HeartIcon from "react-native-vector-icons/Feather";
import Percent from "react-native-vector-icons/Feather";
import Credit from "react-native-vector-icons/Entypo";

const ProfileScreen = () => {
  const { user } = useContext(UserContext);

  const email = "Jahidulislamakashroy96@gmail.com";

  // console.log(user);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {user ? (
        <ScrollView contentContainerStyle={styles.mainWrapper}>
          <View style={styles.profilemainWrapper}>
            <View>
              <Text style={styles.nameText}>Jahidul islam</Text>
              <Text style={styles.email}>{email}</Text>
              <Text style={styles.phnText}>+880 1881383269</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.profieImgWrapper}>
              <CameraIcon name="camera-off" size={35} />
            </View>
          </View>
          {/* app activity */}

          <View style={styles.activityWrapper}>
            <ActivityComp
              Icon={LocationIcon}
              name="location"
              text="My Address"
            />
            <ActivityComp
              Icon={ShoppingBag}
              name="shopping-bag"
              text="Shopping"
            />
            <ActivityComp Icon={HeartIcon} name="heart" text="Favourites" />
            <ActivityComp Icon={Percent} name="percent" text="Offers" />
            <ActivityComp
              Icon={Credit}
              name="creative-cloud"
              text="Transiction's"
            />
          </View>
          {/* terms & conditions */}

          <View style={styles.termsWrapper}>
            <TouchableOpacity>
              <Text style={styles.termsText}>Fags</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsText}>T&c</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          {/* logout */}
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.termsText}>LogOut</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <LoggedComp />
      )}
    </View>
  );
};

export default ProfileScreen;

const ActivityComp = ({ name, text, Icon }) => (
  <TouchableOpacity style={styles.activityCompStyle}>
    <Icon name={name} size={18} />
    <Text style={styles.activityText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrapper: {
    paddingHorizontal: 15,
  },
  backBtnCompWrapper: {
    height: 60,
    marginBottom: 20,
  },
  backBtnCompWrapperExtraStyle: {
    paddingHorizontal: 0,
  },
  profilemainWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    marginTop: 50,
  },
  nameText: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 3,
  },
  email: {
    width: "90%",
  },
  phnText: {
    marginVertical: 4,
  },
  editText: {
    color: Color.RED,
    fontWeight: "500",
  },

  profieImgWrapper: {
    width: 70,
    height: 70,
    borderColor: Color.GRAY,
    borderWidth: 1,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  activityWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Color.GRAY,
    borderTopWidth: 1,
    borderTopColor: Color.GRAY,
    paddingVertical: 20,
  },
  activityCompStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  activityText: {
    marginLeft: 15,
    fontWeight: "500",
  },
  termsWrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.GRAY,
  },
  termsText: {
    marginBottom: 5,
    fontWeight: "500",
  },
  logoutBtn: {
    paddingVertical: 20,
  },
});
