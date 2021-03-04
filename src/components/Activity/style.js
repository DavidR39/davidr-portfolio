import styled from 'styled-components'
import {Grid, Paper} from '@material-ui/core'

export const ActivitySection = styled.section`
    height: fit-content;
    min-height: 100vh;
`

export const ActivitiesWrapper = styled(Grid)`
    
`

export const ActivityItem = styled(Paper)`
    position: relative;
    padding: 15px;
    margin: 10px;
    min-width: 300px;
    width: 33%;
    min-height: 300px;
    overflow:hidden;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:hover > p {
        top:0;
    }
`

export const ActivityTitle = styled.h4`
    font-size: 2em;
    text-align: center;
`

export const ActivityIcon = styled.div`
    font-size: 8em;
    color: #000;
    width: fit-content;
    margin: auto;    
`

export const ActivityText = styled.p`
    position: absolute;
    left: 0;
    right: 0;
    top: -500px;
    height: 100%;
    color: #fff;
    background-color: rgba(0,0,0,0.8);
    margin: 0;
    padding: 10px;
    overflow-wrap: break-word;
    transition: all 0.6s ease-in-out;

`


export const ActivityTextSubtitle = styled.h5`
   color: #fff;
   text-transform: uppercase;
`