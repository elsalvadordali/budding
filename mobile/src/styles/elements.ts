import styled from 'styled-components/native';
import styles from '$styles/global'

export const ShortButton = styled.Pressable`
  background-color: ${styles.colors.primary};
  padding: 12px;
  border-radius: 20px;
  width: 40%;
  margin-top: 20px;
  height: 48px;
`
//must declare color for each Button though, based on state. See Login
export const LongButton = styled.Pressable`
  background-color: ${props => props.color};
  border-radius: 20px;
  font-size: 16px;
  height: 48px;
  margin-top: 20px;
  padding: 12px;
  width: 80%;
`
export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-family: "Barlow-SemiBold";
  font-size: 16px;
`
export const Label = styled.Text`
  color: ${styles.colors.primary};
  //display: block;
  font-family: "Barlow-SemiBold";
  font-size: 16px;
  line-height: 28px;
  padding: 4px;
  text-align: left;
  width: 80%;
  margin-top: 12px;
`
export const Input = styled.TextInput`
  border: 1px solid ${styles.colors.grey};
  border-radius: 20px;
  color: ${styles.colors.primary};
  font-family: "Barlow-SemiBold";
  font-size: 16px;
  height: 48px;
  padding: 12px;
  placeholder: ${styles.colors.grey};
  text-align: left;
  width: 80%;
`
export const Logo = styled.Image`
  background-color: ${styles.colors.primary};
  //border-radius: 50%;
  height: 50px;
  padding: 6px;
  width: 50px;
  
`
export const Budding = styled.Text`
color: ${styles.colors.primary};
//display: block;
font-family: "Barlow-SemiBold";
font-size: 50px;
line-height: 54px;
padding: 4px;
`
export const SmallText = styled.Text`
color: ${styles.colors.primary};
//display: block;
font-family: "Barlow-SemiBold";
font-size: 16px;
line-height: 16px;
padding: 6px 4px;
`
export const LinkText = styled.Text`
color: ${styles.colors.linkGreen};
//display: block;
font-family: "Barlow-SemiBold";
font-size: 16px;
line-height: 16px;
padding: 6px 4px;
`
export const BlackText = styled.Text`
color: #000;
//display: block;
font-family: "Barlow-SemiBold";
font-size: 16px;
line-height: 16px;
padding: 6px 4px;
`
