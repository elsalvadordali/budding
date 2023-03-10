import { Pressable, Text, View } from 'react-native'
import styled from 'styled-components/native';
import styles from '$styles/global'
import { useState } from 'react';

const Input = styled.Pressable`
  background-color: '#fff';
  border-radius: 6px;
  border: 1px solid #9CADA4;
  font-size: 16px;
  height: 48px;
  margin-top: 20px;
  padding: 12px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Arrow = styled.Image`
    width: 20px;
    height: 20px;
`
const Box = styled.View`
    border: 1px solid #9CADA4;
    border-bottom: none;
    border-radius: 6px;
    width: 80%;
    position: absolute;
    background-color: #fff;
    top: 0px;
    left: 10%;
`
const Option = styled.Pressable`
    padding: 12px;
    border: 1px solid #9CADA4;
    border-radius: 3px;
`
const OptionFont = styled.Text`
    border-bottom: 1px solid #9CADA4;
    padding: 12px;
    text-align: center;
    font-size: 16px;
`
const Selection = ({ list }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    if (isOpen) return (
        <Box>
            {list.map((item) => <Option onPress={() => setSelected(item)}><OptionFont>{item}</OptionFont></Option>)}
            <Option onPress={() => setIsOpen(false)}><OptionFont>×</OptionFont></Option>
        </Box>
    )
    return (
    <Input
        onPress={() => setIsOpen(!isOpen)}
    >
        <Text>Selection</Text>
        <Text>{selected}</Text>
        <Arrow source={require('../../assets/down-arrow.png')} />
    </Input>)
}

export default Selection