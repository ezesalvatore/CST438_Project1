import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Assume you have a RootStackParamList defined in your app
type RootStackParamList = {
    LandingPage: undefined;
    PracticeWords: undefined;
    // Add other screens here
};

type LandingPageNavigationProp = StackNavigationProp<RootStackParamList, 'LandingPage'>;

interface LandingPageProps {
    username: string;
}

export default function LandingPage({ username }: LandingPageProps) {
    const [randomWord, setRandomWord] = useState('Loading...');
    const navigation = useNavigation<LandingPageNavigationProp>();

    useEffect(() => {
        // Simulate fetching a random word
        // Replace this with actual API call when ready
        setTimeout(() => {
            setRandomWord('Serendipity');
        }, 1000);
    }, []);

    const handlePracticePress = () => {
        navigation.navigate('PracticeWords');
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.welcomeText}>Welcome {username}</ThemedText>

            <ThemedText style={styles.levelSystem}>Level System Placeholder</ThemedText>

            <ThemedText style={styles.randomWord}>{randomWord}</ThemedText>

            <View style={styles.buttonContainer}>
                <Button
                    title="Favorite"
                    onPress={() => console.log('Favorite button pressed')}
                />
                <Button
                    title="Practice"
                    onPress={handlePracticePress}
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 32,
    },
    levelSystem: {
        fontSize: 18,
        marginTop: 24,
    },
    randomWord: {
        fontSize: 20,
        marginTop: 48,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 56,
    },
});