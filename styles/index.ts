import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        backgroundColor: "#4CAF50",
        marginBottom: 20,
        textAlign: "center",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#4CAF50",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 30,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        borderColor: '#ddd'
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    optionButton: {
        backgroundColor: "#e0e0e0",
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 5,
    },

    selectedOptionButton: {
        backgroundColor: "#4CAF50",
    },

    optionText: {
        color: "#000",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
   
    containerSplash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    imageSplash: {
        resizeMode: "cover",
        marginBottom: 20,
    },
    titleSplash: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#4CAF50",
        marginBottom: 10,
    },
    subtitleSplash: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginHorizontal: 20,
    },
      

});

export default styles;
