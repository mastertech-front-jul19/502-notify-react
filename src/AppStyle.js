import banner from './img/banner.png';
import appleIcon from './img/icone-ios.png';
import androidIcon from './img/icone-android.png';
import windowsIcon from './img/icone-windows.png';

const AppStyle = {
  container: {
    height: 'auto',
    width: 1365,
    margin: '0 auto'
  },
  faixa: {
    backgroundColor: '#2ecd70',
    width: 1365,
    height: 10
  },
  banner: {
    backgroundImage: `url("${banner}")`,
    width: 1365,
    height: 601,
    display: 'flex',
    flexDirection: 'row'
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    margin: '137px 0px 0px 210px'
  },
  title: {
    color: '#fff',
    fontFamily: "'Pacifico', cursive",
    fontSize: 42
  },
  subTitle: {
    width: 389,
    color: '#fff',
    fontSize: 20,
    marginTop: 28
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 19,
    padding: '19px 20px 0px 0px'
  },
  iconApple: {
    backgroundImage: `url("${appleIcon}")`,
    height: 26,
    width: 26
  },
  iconAndroid: {
    backgroundImage: `url("${androidIcon}")`,
    marginLeft: 10,
    width: 26,
    height: 26
  },
  iconWindows: {
    backgroundImage: `url("${windowsIcon}")`,
    marginLeft: 10,
    width: 26,
    height: 26
  },
  iconHover: {
    backgroundColor: '#2ecd70'
  }
};

export default AppStyle;
