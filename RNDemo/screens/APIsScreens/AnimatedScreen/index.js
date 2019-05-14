import React from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, Easing } from 'react-native';
import BaseScreen from '../../BaseScreen';
import { getScreenName } from '../../../tools';
import Section from './Section'; 

class FadeInView extends React.Component {
    state = {
        scale: new Animated.Value(1),
        positionX: new Animated.Value(0),
        fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };

    componentDidMount() {
        Animated.timing(
            // Animate over time
            this.state.fadeAnim, // The animated value to drive
            {
                toValue: 1, // Animate to opacity: 1 (opaque)
                duration: 1000, // Make it take a while
                easing: Easing.back()
            }
        ).start(); // Starts the animation

        
        this.animateScale();        
    }

    animateScale() {
        Animated.timing(
            this.state.scale, {
                toValue: 0.5,
                duration: 2000       
            }
        ).start(({finished})=>{
            if (finished) {
                this.state.scale.setValue(1);
                this.animateScale();
            }
        });
    }

    render() {
        let { fadeAnim, scale, positionX } = this.state;

        return (
            <Animated.View // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim, // Bind opacity to animated value
                    transform:[
                        {scale} 
                    ]
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

class FadeInText extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Animated.timing(
            // Animate over time
            this.state.fadeAnim, // The animated value to drive
            {
                toValue: Math.min(1, this.props.endValue || 1.0), // Animate to opacity: 1 (opaque)
                duration: 1000 // Make it take a while
            }
        ).start(); // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;
        console.warn(this.props.content);
        return (
            <Animated.Text // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim // Bind opacity to animated value
                }}
            >
                {this.props.content}
            </Animated.Text>
        );
    }
}

class FadeInImage extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Animated.timing(
            // Animate over time
            this.state.fadeAnim, // The animated value to drive
            {
                toValue: Math.min(1, this.props.endValue || 1.0), // Animate to opacity: 1 (opaque)
                duration: 1000 // Make it take a while
            }
        ).start(); // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state; 

        return (
            <Animated.Image // Special animatable View
                
                style={{
                    ...this.props.style,
                    opacity: fadeAnim // Bind opacity to animated value
                }}
                source= {this.props.source}
            />
        );
    }
}

export default class AnimatedScreen extends BaseScreen {
    static navigationOptions = {
        title: 'Animated'
    };

    static description = 'Animated';
    static screenName = getScreenName('api', 'Animated');

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
        };
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 1000
        });
    }

    fadingView() {
        return (
            <Section title="fading view">
                <FadeInView
                    style={{
                        width: 250,
                        height: 50,
                        backgroundColor: 'powderblue'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 28,
                            textAlign: 'center',
                            margin: 10
                        }}
                    >
                        Fading in
                    </Text>
                </FadeInView>
            </Section>
        );
    }

    fadingText() {
        return (
            <Section title="fading text">
                <FadeInText
                    endValue={1}
                    content="I am the content!"
                    style={{ color: 'red' }}
                />
            </Section>
        );
    }

    fadingImage() {
        return (
            <Section title="fading image">
                <FadeInImage
                    style={{
                        height:50,
                        width: 50,
                        backgroundColor: 'gray'
                    }}
                    endValue={1}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/header_logo.png'
                    }}
                />
            </Section>
        );
    }
    render() {
        return (
            <ScrollView style={{ alignContent: 'center', flex: 1 }}>
                <Section title="Fading Animations">
                    {this.fadingView()}
                    {this.fadingText()}
                    {this.fadingImage()}
                </Section>
            </ScrollView>
        );
    }
}
