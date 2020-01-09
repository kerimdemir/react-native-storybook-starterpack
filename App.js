import React from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import Button from "./storybook/stories/Button";
import CenterView from "./storybook/stories/CenterView";

const App = () => {
    return (
        <CenterView>
            <Button onPress={() => alert("test")} children={<Text> Test </Text>}/>
        </CenterView>
    );
};

export default App;
