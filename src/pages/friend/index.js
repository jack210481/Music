import React, { Component } from 'react'
import {View} from "react-native"
import { connect } from 'react-redux'
import {add} from "../../actions/counter"
import axios from "axios"

@connect((state) => ({counter: state.counter}), {add})
export default class Index extends Component {

    componentDidMount() {
        this.props.add()
    }

    render() {
        console.log(this.props.counter)
        return (
            <View>
            </View>
        )
    }
}
