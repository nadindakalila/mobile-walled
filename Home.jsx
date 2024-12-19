import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { fetchUser } from "./api/restApi";
import { fetchTransactions } from "./api/restApi";
import { useAuth } from "./context/AuthContext";


const TransactionItem = ({ name, type, amount }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionDetails}>
      <Image
        source={require("./ManAvatar.png")}
        style={styles.transactionPic}
      ></Image>
      <View>
        <Text style={styles.transactionName}>{name}</Text>
        <Text style={styles.transactionType}>{type}</Text>
        {/* <Text style={styles.transactionDate}>{date}</Text> ini gakk */}
      </View>
    </View>
    <Text style={styles.transactionAmount}>{amount}</Text>
  </View>
);

const ava1 = require("./ManAvatar.png");
const ava2 = require("./WomanAvatar.png");

export default function Home({ navigation }) {
  const [transactions, setTransaction] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [refresh] = useAuth()
  const auth = useAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser();
        setUser(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransaction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  } // kondisi ketika proses memuat response dari backend belum selesai

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  } // ketika mendapatkan response error backend

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={[styles.containerHead, styles.shadow]}>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            height: 80,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("./foto.png")}
            style={{
              width: 46,
              height: 46,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "teal",
            }}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{user.full_name}</Text>
            <Text>Personal Account</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <Icon name="sunny" color={"orange"} size={30} />
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={auth.logout}>
            <Icon name="login" color={"grey"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <ScrollView style={{flex: 1, backgroundColor: 'white'}}> */}

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: 80,
          }}
        >
          <View style={styles.hero}>
            <Text style={styles.title}>
              Good Morning, {user.full_name.split(" ")[0]}
            </Text>
            <Text style={styles.desc}>
              Check all your incoming and outgoing transactions here
            </Text>
          </View>
          <Image source={require("./Group.png")} />
        </View>

        <View style={styles.box}>
          <Text style={styles.textBox}>Account No.</Text>
          <Text style={[styles.textBox, styles.textBoxSemiBold]}>
            {user.account_no}
          </Text>
        </View>

        <View style={styles.balance}>
          <View>
            <Text style={{ fontSize: 16 }}>Balance</Text>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              Rp. {user.balance}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                name="add"
                color={"white"}
                size={20}
                onPress={() => navigation.navigate("TopUp")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, styles.iconSend]}>
              <Icon
                name="send"
                color={"white"}
                size={20}
                onPress={() => navigation.navigate("Transfer")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View
            style={{
              marginHorizontal: 15,
              padding: 20,
              borderBottomWidth: 2,
              borderBottomColor: "whitesmoke",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Transaction History
            </Text>
          </View>

          <View>
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                // pic={transactions.pic} ini gakk
                name={transaction.from_to}
                type={transaction.type === "c" ? "TopUp" : "Transfer"}
                amount={
                  transaction.type === "c"
                    ? `+ ${transaction.amount}`
                    : `- ${transaction.amount}`
                }
              />
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
  },
  containerHead: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    marginBottom: 15,
    zIndex: 10,
  },
  shadow: {
    // shadowColor: 'gray',
    // shadowOpacity: 0.25,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 6
    borderBottomWidth: 2,
    borderBottomColor: "whitesmoke",
  },
  iconButton: {
    backgroundColor: "#19918F",
    padding: 10,
    borderRadius: 10,
  },
  iconSend: {
    marginTop: 10,
  },
  balance: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
  },
  button: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
  },
  logo: {
    marginLeft: 15,
    marginTop: 10,
  },
  text: {
    margin: 15,
    fontSize: 16,
  },
  primary: {
    backgroundColor: "teal",
    marginVertical: 15,
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "teal",
    fontWeight: "500",
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  box: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 12,
    backgroundColor: "#19918F",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBox: {
    fontSize: 16,
    color: "white",
  },
  textBoxSemiBold: {
    fontWeight: "600",
  },
  transactionItem: {
    marginTop: 15,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  transactionPic: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 8,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionType: {
    fontSize: 14,
    paddingTop: 1,
  },
  transactionDate: {
    fontSize: 14,
    color: "darkgrey",
    paddingTop: 1,
  },
  transactionAmount: {
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});
