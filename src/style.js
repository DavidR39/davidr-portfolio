import {
    createMuiTheme
} from '@material-ui/core'

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: '3.75rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                color: '#DE9E36',
                opacity: 1,
                marginBottom: 30,
            },
            h2: {
                fontSize: '2.5rem',
                color: '#FFF',
                opacity: 0.7,
                marginBottom: 20,
            },
            h3: {
                fontSize: '3rem',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: ({ darkColor }) => (darkColor ? '#000' : '#F9F8F8'),
                paddingTop: 50,
                paddingBottom: 20,
                fontWeight: 400,
                width: 'fit-content',
                margin: 'auto',
                marginBottom: 50,
                borderBottom: ({ underlineDark }) => (underlineDark ? '8px solid #DE9E36' : '8px solid #FFF')
            }
        },
        MuiFormControl: {
            root: {
                color: '#fff',
                // backgroundColor: '#FFF',
                // opacity: 0.5,
            }

        },
        MuiInputBase: {
            root: {
                color: '#fff',
                opacity: 1,
                borderBottom: '1px solid #fff'
            },
        },
        MuiLink: {
            root: {
                borderRadius: 50,
                background: ({ primary }) => (primary ? '#DE9E36' : '#37323E'),
                whiteSpace: 'nowrap',
                padding: ({ big }) => (big ? '14px 48px' : '12px 30px'),
                color: ({ dark }) => (dark ? '#010606' : '#fff'),
                fontSize: ({ fontBig }) => (fontBig ? '20px' : '16px'),
                textDecoration: 'none',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    transition: 'all 0.2s ease-in-out',
                    background: ({ primary }) => (primary ? '#fff' : '#DE9E36'),
                    outline: 'none',
                    textDecoration: 'none',
                }
            },
            underlineHover: {
                outline: 'none',
                textDecoration: 'none',
                '&:hover': {
                    outline: 'none',
                    textDecoration: 'none',
                }
            },


        },
        MuiButton: {
            label: {
                color: '#fff',
            }
        }


    }
    //     input: {
    //         margin: 10,
    //     },
    //     inputMultiline: {
    //         padding: 10,
    //     }
    // }
    /* ################## NAVBAR */
    /* List */
    // MuiList: {
    //     root: {
    //         display: 'flex',
    //         width: '1100px',
    //         margin: '0 auto'
    //     }
    // },
    // /* List Item */
    // MuiListItem: {
    //     button: {
    //         color: 'white'

    //     },
    //     text: {
    //         textAlign: 'center'
    //     }
    // },

})

export default theme