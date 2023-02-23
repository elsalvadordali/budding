import styled from 'styled-components/native';

export const StyledSafeAreaView  = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`

export const FlexCol = styled.View`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const FlexRow = styled.View`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 80%
`
export const RowEnd = styled.View`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 80%
`
export const Centered = styled.View`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`

export const Spaced = styled.View`
  margin: 12px 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
export const CenteredCol = styled.View`
  margin: 6px 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
`