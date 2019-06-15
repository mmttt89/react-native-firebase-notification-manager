import React from 'react';
import Svg, { LinearGradient, Stop, Path } from 'react-native-svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const widthDP = wp('6%');

const Inbox = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox} >
        <LinearGradient
            id="prefix__a"
            gradientUnits="userSpaceOnUse"
            x1={241.604}
            y1={463.407}
            x2={241.604}
            y2={190.437}
            gradientTransform="matrix(1.0667 0 0 -1.0667 3.267 557.532)"
        >
            <Stop offset={0} stopColor="#c2d600" />
            <Stop offset={1} stopColor="#7bd101" />
        </LinearGradient>
        <Path
            d="M142.267 211.575l104.277 137.897c7.241 9.575 21.627 9.575 28.867 0l104.277-137.897c9.014-11.92.511-29.011-14.434-29.011h-40.278V41.48a8.62 8.62 0 0 0-8.62-8.62H205.599a8.62 8.62 0 0 0-8.62 8.62v141.085h-40.278c-14.945-.001-23.448 17.09-14.434 29.01z"
            fill="url(#prefix__a)"
        />
        <LinearGradient
            id="prefix__b"
            gradientUnits="userSpaceOnUse"
            x1={236.938}
            y1={229.617}
            x2={236.938}
            y2={26.797}
            gradientTransform="matrix(1.0667 0 0 -1.0667 3.267 557.532)"
        >
            <Stop offset={0} stopColor="#ffcf95" />
            <Stop offset={0.427} stopColor="#ffc954" />
            <Stop offset={1} stopColor="#ffc200" />
        </LinearGradient>
        <Path
            d="M512 341.116v108.582c0 16.259-13.181 29.44-29.44 29.44H29.44c-16.259 0-29.44-13.181-29.44-29.44V341.116c0-16.259 13.181-29.44 29.44-29.44h99.775a29.442 29.442 0 0 1 27.692 19.445l7.211 19.978a29.44 29.44 0 0 0 27.692 19.445h128.383a29.442 29.442 0 0 0 27.692-19.445l7.211-19.978a29.44 29.44 0 0 1 27.692-19.445h99.774c16.257 0 29.438 13.181 29.438 29.44z"
            fill="url(#prefix__b)"
        />
        <LinearGradient
            id="prefix__c"
            gradientUnits="userSpaceOnUse"
            x1={236.938}
            y1={133.617}
            x2={236.938}
            y2={69.807}
            gradientTransform="matrix(1.0667 0 0 -1.0667 3.267 557.532)"
        >
            <Stop offset={0} stopColor="#ffc200" stopOpacity={0} />
            <Stop offset={0.203} stopColor="#fb0" stopOpacity={0.203} />
            <Stop offset={0.499} stopColor="#ffa700" stopOpacity={0.499} />
            <Stop offset={0.852} stopColor="#f80" stopOpacity={0.852} />
            <Stop offset={1} stopColor="#ff7800" />
        </LinearGradient>
        <Path
            d="M0 405.911v43.788c0 16.259 13.181 29.44 29.44 29.44h453.12c16.259 0 29.44-13.181 29.44-29.44v-43.788H0z"
            fill="url(#prefix__c)"
        />
        <LinearGradient
            id="prefix__d"
            gradientUnits="userSpaceOnUse"
            x1={365.441}
            y1={-46.24}
            x2={195.841}
            y2={208.959}
            gradientTransform="matrix(1.0667 0 0 -1.0667 3.267 557.532)"
        >
            <Stop offset={0} stopColor="#ffc200" stopOpacity={0} />
            <Stop offset={0.203} stopColor="#fb0" stopOpacity={0.203} />
            <Stop offset={0.499} stopColor="#ffa700" stopOpacity={0.499} />
            <Stop offset={0.852} stopColor="#f80" stopOpacity={0.852} />
            <Stop offset={1} stopColor="#ff7800" />
        </LinearGradient>
        <Path
            d="M382.372 403.603a6.75 6.75 0 0 0-5.466-2.778H135.093c-4.078 0-7.231 3.577-6.72 7.622l3.764 29.804c.241 1.905 1.274 3.521 2.725 4.589.262.363 21.139 21.212 36.26 36.3h286.785l-75.535-75.537z"
            fill="url(#prefix__d)"
        />
        <LinearGradient
            id="prefix__e"
            gradientUnits="userSpaceOnUse"
            x1={236.938}
            y1={82.617}
            x2={236.938}
            y2={114.107}
            gradientTransform="matrix(1.0667 0 0 -1.0667 3.267 557.532)"
        >
            <Stop offset={0} stopColor="#ff9102" />
            <Stop offset={0.128} stopColor="#ff9409" />
            <Stop offset={0.314} stopColor="#ff9c1d" />
            <Stop offset={0.537} stopColor="#ffaa3d" />
            <Stop offset={0.785} stopColor="#ffbc69" />
            <Stop offset={1} stopColor="#ffcf95" />
        </LinearGradient>
        <Path
            d="M373.142 444.176H138.858a6.774 6.774 0 0 1-6.72-5.924l-3.764-29.804c-.511-4.046 2.642-7.622 6.72-7.622h241.813c4.078 0 7.231 3.577 6.72 7.622l-3.764 29.804a6.774 6.774 0 0 1-6.721 5.924z"
            fill="url(#prefix__e)"
        />
    </Svg>
)

Inbox.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: '0 0 512 512'
}

export default Inbox;