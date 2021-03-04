import React from 'react'
import { Link } from '@material-ui/core'
import {
    Title,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    ImgWrap
} from './style'

const InfoSection = ({
    mainTitle,
    id,
    lightBg,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    desc1,
    desc2,
    desc3,
    buttonLabel,
    img,
    alt,
    link,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                {mainTitle ?
                    <Title variant='h3' darkColor={!lightText} underlineDark={true}>{mainTitle}</Title> :
                    <></>
                }
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightText={lightText}>{desc1}</Subtitle>
                                <Subtitle lightText={lightText}>{desc2}</Subtitle>
                                <Subtitle lightText={lightText}>{desc3}</Subtitle>
                                {
                                    link ?
                                        <BtnWrap>
                                            <Link
                                                href={link}
                                                target='blank'
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}>
                    
                                                {buttonLabel}
                                            </Link>
                                        </BtnWrap>
                                        :
                                        <></>
                                }
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
