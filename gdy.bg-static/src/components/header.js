import React, { Component } from 'react';
import SearchField from '../containers/search_field';
import Greeting from '../containers/greeting';

export default class Header extends Component {


    render() {
        return (
            <header className="n-main">
                <div className="n-main__wrapper">

                    <div className="n-main__header n-visibility--desktop">
                        <div className="n-main__header-logo">
                            {/*<a href="index.html" title="Vogue" className="">
                                <svg id="vogue-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.55 90">
                                    <title>vogue-logo</title>
                                    <path id="british_vogue" data-name="british vogue" d="M288.27,88.17a2.27,2.27,0,0,1-.1-0.41c0-.2.1-0.3,0.1-0.51h6.32c0.71,0,1-.2,1-0.51V3.89a0.75,0.75,0,0,0-1-.51h-14c-0.61-.1-0.92.1-0.92,0.51V66.56c0.1,7.95-2.65,14.06-7.85,18.24A24.64,24.64,0,0,1,256.68,90h-0.1c-21.3.1-31.89-9-31.89-27.21V4.5a1.26,1.26,0,0,0-1.63-1.12h-6.73a0.49,0.49,0,0,1-.1-0.51,0.62,0.62,0,0,1,.1-0.41h31.59a1.09,1.09,0,0,1,0,.92H241.2c-1.43-.1-2,0.31-2,1.22V70.94q0,7.8,4.28,12.84c3.16,3.57,7.54,5.4,13.14,5.3a24.05,24.05,0,0,0,14.67-5c5.09-4.08,7.64-10,7.54-17.53V3.89c0-.41-0.31-0.51-0.92-0.51h-8.76a0.56,0.56,0,0,1-.2-0.51,1.41,1.41,0,0,1,.2-0.41h80.4V33.55a0.51,0.51,0,0,1-.61,0,35,35,0,0,0-3.16-15.18q-6.72-15-24.15-15H311.2c-0.71-.1-1,0.1-1,0.51V42.72c0,0.41.3,0.61,1,.61h3.46c6.83-.1,11.51-2.85,13.76-8.46a17.46,17.46,0,0,0,1.43-8.46,0.49,0.49,0,0,1,.41-0.1c0.1,0,.2.1,0.31,0.1V61.47a0.22,0.22,0,0,1-.2.2,0.22,0.22,0,0,1-.2-0.2A23.06,23.06,0,0,0,328,52.7c-2.75-5.71-7.34-8.56-13.76-8.46H311.2c-0.71-.1-1,0.1-1,0.51V86.53c0,0.31.3,0.51,1,.61h10c12.53,0,21.2-5.3,26.09-16a38.81,38.81,0,0,0,3.46-16.3,0.86,0.86,0,0,1,.82,0V88.17H288.27ZM74.69,3.39H68.58a3,3,0,0,0-1.63.31,1.68,1.68,0,0,0-.41,1.12C66.44,5,57.47,33,39.64,88.57L39.33,88Q33.07,69.62,20.48,36C13.25,16.43,9.48,6,9.07,4.81a2.14,2.14,0,0,0-.61-1.22,0.88,0.88,0,0,0-.81-0.2H0.2A0.41,0.41,0,0,1,0,3,0.56,0.56,0,0,1,.2,2.47H31.08a1.4,1.4,0,0,1,.2.41,1.08,1.08,0,0,1-.2.51H24.76c-1.22-.1-1.63.2-1.32,0.92,0.1,0.1,7.34,20,21.91,59.61a1.66,1.66,0,0,0,.71,1.22Q65.32,5.37,65.42,5.32L65.73,4.2A0.68,0.68,0,0,0,65,3.39H58.08a1.09,1.09,0,0,1,0-.92H74.69a1.09,1.09,0,0,1,0,.92h0Zm61.55,58.9a48.64,48.64,0,0,1-8.66,14.27,42.62,42.62,0,0,1-12,9.58A29.42,29.42,0,0,1,102,89.59,30.34,30.34,0,0,1,87.94,86a37.74,37.74,0,0,1-11.82-9.58,46.42,46.42,0,0,1-8-14.16A50.16,50.16,0,0,1,65,44.86,49.11,49.11,0,0,1,76.53,13.68,38.48,38.48,0,0,1,88.55,4,27.46,27.46,0,0,1,102.31.43,30,30,0,0,1,116,3.79a37.41,37.41,0,0,1,12,9.27c7.85,8.66,11.72,19.36,11.62,31.79a46.12,46.12,0,0,1-3.36,17.42h0Zm-16.3-48.1Q114.74,1,102.2,1C87.84,1,81.63,15.61,81.63,44.45c0,14.78.19,25.27,2.64,31.59,3.16,8.56,9.17,12.84,18.14,12.84,8.25,0,14.16-4.38,17.53-13.25,2.65-6.93,4-17.32,4.08-31.18-0.1-13.35-1.43-23.54-4.08-30.26h0ZM197.79,52.7h-7a0.53,0.53,0,0,1-.2-0.41,0.77,0.77,0,0,1,.2-0.41h30.06c0,0.1.1,0.31,0.1,0.41a4.51,4.51,0,0,1-.1.51h-6.62c-0.61-.1-0.92.1-0.92,0.51V88.06c0,0.31-.2.41-0.41,0.2-0.2-1.43-1.22-2.75-3-4-2.14-1.43-4.89-1.63-8-.61a46.54,46.54,0,0,0-6.93,2.55l-4.48,1.94a22.55,22.55,0,0,1-9.78,1.43,27.43,27.43,0,0,1-12.84-3.77A36.05,36.05,0,0,1,157,76.45Q146.79,63.3,146.94,45.27a50.42,50.42,0,0,1,3.36-17.53,52.58,52.58,0,0,1,8.36-14.47,38.68,38.68,0,0,1,11.11-9.88C173.84,1,177.81-.18,181.58,0a23.4,23.4,0,0,1,8.05,1.53l6.11,2.24a10.43,10.43,0,0,0,5.4.61A12.28,12.28,0,0,0,206.86.84a1.22,1.22,0,0,1,.51-0.51c0.2-.31.41-0.31,0.51-0.1l-0.1,30.26c0,0.31-.2.41-0.61,0.2l-1.32-5a52.23,52.23,0,0,0-3.87-10C197,6.14,190.55,1.14,182.4.84c-7.44-.41-12.84,3.77-16,12.63-2.65,7.24-3.87,17.53-3.77,31.18q0.3,42.19,16.61,44a24.45,24.45,0,0,0,11.62-1.53c5.5-2.45,8.25-7,8.25-13.66V53.21c0-.41-0.41-0.51-1.33-0.51h0ZM88.41,45.87a1.42,1.42,0,0,0,.85-1.33v0a1.34,1.34,0,0,0-.4-1A2.16,2.16,0,0,0,87.3,43H84.62v6h2.76c1.33,0,2.21-.57,2.21-1.64v0A1.46,1.46,0,0,0,88.41,45.87Zm-2.76-1.94h1.51a0.85,0.85,0,0,1,1,.76v0a0.92,0.92,0,0,1-1.13.81H85.65V43.93Zm2.89,3.29a0.93,0.93,0,0,1-1.15.82H85.65V46.41h1.66c0.83,0,1.23.3,1.23,0.8v0ZM121.36,43v6h-1V46.46h-2.85V49h-1V43h1v2.48h2.85V43h1ZM98,43h1v6H98V43Zm9.25,0h1v6h-1V43Zm-11.11,1.9v0a1.8,1.8,0,0,0-.49-1.29A2.4,2.4,0,0,0,94,43H91.29v6h1V46.89h1.31L95.12,49h1.25l-1.61-2.26A1.79,1.79,0,0,0,96.17,44.91ZM92.34,46V44h1.53a1,1,0,0,1,1.24,1v0a1.06,1.06,0,0,1-1.23,1H92.34Zm8.42-3h4.85v1h-1.89v5h-1.06V44h-1.89V43Zm13.9,4.26v0a1.86,1.86,0,0,1-2.13,1.78,3.68,3.68,0,0,1-2.49-1l0.63-.75a2.76,2.76,0,0,0,1.89.78,0.89,0.89,0,0,0,1.06-.75v0c0-.43-0.24-0.66-1.35-0.91-1.27-.31-2-0.68-2-1.78v0a1.83,1.83,0,0,1,2-1.73,3.31,3.31,0,0,1,2.17.75l-0.56.79a2.71,2.71,0,0,0-1.62-.61,0.82,0.82,0,0,0-1,.71v0c0,0.46.27,0.67,1.42,0.94S114.66,46.27,114.66,47.26Z"
                                        transform="translate(0 0)" />
                                </svg>
                            </a>*/}
                            <a className="">
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" style={{ border: 0 }} />
                            </a>

                        </div>
                    </div>

                    <div className="n-main__nav-group n-main__nav-group--left">
                        <div className="n-main__nav-logo is-hidden">
                            {/* <a href="index.html" title="Vogue" className="">
                                <svg id="vogue-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.58 90.02">
                                    <title>vogue-logo</title>
                                    <path id="british_vogue" data-name="british vogue" d="M288.27,88.17a2.27,2.27,0,0,1-.1-0.41c0-.2.1-0.3,0.1-0.51h6.32c0.71,0,1-.2,1-0.51V3.89a0.75,0.75,0,0,0-.91-0.54l-0.09,0h-14c-0.61-.1-0.92.1-0.92,0.51V66.56c0.1,7.95-2.65,14.06-7.85,18.24A24.64,24.64,0,0,1,256.68,90h-0.1c-21.3.1-31.89-9-31.89-27.21V4.5a1.26,1.26,0,0,0-1.63-1.12h-6.73a0.49,0.49,0,0,1-.1-0.51,0.62,0.62,0,0,1,.1-0.41h31.59a1.09,1.09,0,0,1,0,.92H241.2c-1.43-.1-2,0.31-2,1.22V70.94q0,7.8,4.28,12.84c3.16,3.57,7.54,5.4,13.14,5.3a24.05,24.05,0,0,0,14.67-5c5.09-4.08,7.64-10,7.54-17.53V3.89c0-.41-0.31-0.51-0.92-0.51h-8.76a0.56,0.56,0,0,1-.2-0.51,1.41,1.41,0,0,1,.2-0.41h80.4V33.55a0.51,0.51,0,0,1-.61,0,35,35,0,0,0-3.16-15.18q-6.72-15-24.15-15H311.2c-0.71-.1-1,0.1-1,0.51V42.72c0,0.41.3,0.61,1,.61h3.46c6.83-.1,11.51-2.85,13.76-8.46a17.46,17.46,0,0,0,1.43-8.46,0.49,0.49,0,0,1,.41-0.1c0.1,0,.2.1,0.31,0.1V61.47a0.2,0.2,0,0,1-.4,0A23.06,23.06,0,0,0,328,52.7c-2.75-5.71-7.34-8.56-13.76-8.46h-3c-0.71-.1-1,0.1-1,0.51V86.53c0,0.31.3,0.51,1,.61h10c12.53,0,21.2-5.3,26.09-16a38.81,38.81,0,0,0,3.46-16.3,0.86,0.86,0,0,1,.82,0V88.17h-63.3ZM74.69,3.39H68.58A3,3,0,0,0,67,3.7a1.68,1.68,0,0,0-.41,1.12C66.44,5,57.47,33,39.64,88.57L39.33,88Q33.07,69.62,20.48,36C13.25,16.43,9.48,6,9.07,4.81a2.14,2.14,0,0,0-.61-1.22,0.88,0.88,0,0,0-.81-0.2H0.2A0.41,0.41,0,0,1,0,3,0.56,0.56,0,0,1,.2,2.47H31.08a1.4,1.4,0,0,1,.2.41,1.08,1.08,0,0,1-.2.51H24.76c-1.22-.1-1.63.2-1.32,0.92,0.1,0.1,7.34,20,21.91,59.61a1.66,1.66,0,0,0,.71,1.22Q65.32,5.37,65.42,5.32L65.73,4.2a0.68,0.68,0,0,0-.53-0.8H58.08a1.09,1.09,0,0,1,0-.92H74.69a1.09,1.09,0,0,1,0,.92h0Zm61.55,58.9a48.64,48.64,0,0,1-8.66,14.27,42.62,42.62,0,0,1-12,9.58A29.42,29.42,0,0,1,102,89.59,30.34,30.34,0,0,1,87.94,86a37.74,37.74,0,0,1-11.82-9.58,46.42,46.42,0,0,1-8-14.16A50.16,50.16,0,0,1,65,44.86,49.11,49.11,0,0,1,76.53,13.68,38.48,38.48,0,0,1,88.55,4,27.46,27.46,0,0,1,102.31.43,30,30,0,0,1,116,3.79a37.41,37.41,0,0,1,12,9.27c7.85,8.66,11.72,19.36,11.62,31.79a46.12,46.12,0,0,1-3.36,17.42h0Zm-16.3-48.1Q114.74,1,102.2,1C87.84,1,81.63,15.61,81.63,44.45c0,14.78.19,25.27,2.64,31.59,3.16,8.56,9.17,12.84,18.14,12.84,8.25,0,14.16-4.38,17.53-13.25q4-10.4,4.08-31.18c-0.1-13.35-1.43-23.54-4.08-30.26h0ZM197.79,52.7h-7a0.53,0.53,0,0,1-.2-0.41,0.77,0.77,0,0,1,.2-0.41h30.06c0,0.1.1,0.31,0.1,0.41a4.51,4.51,0,0,1-.1.51h-6.62c-0.61-.1-0.92.1-0.92,0.51V88.06c0,0.31-.2.41-0.41,0.2-0.2-1.43-1.22-2.75-3-4-2.14-1.43-4.89-1.63-8-.61A46.54,46.54,0,0,0,195,86.2l-4.48,1.94a22.55,22.55,0,0,1-9.78,1.43,27.43,27.43,0,0,1-12.84-3.77A36,36,0,0,1,157,76.45Q146.79,63.3,146.94,45.27a50.42,50.42,0,0,1,3.36-17.53,52.58,52.58,0,0,1,8.36-14.47,38.68,38.68,0,0,1,11.11-9.88c4.07-2.39,8-3.57,11.81-3.39a23.4,23.4,0,0,1,8.05,1.53l6.11,2.24a10.43,10.43,0,0,0,5.4.61A12.28,12.28,0,0,0,206.86.84a1.22,1.22,0,0,1,.51-0.51c0.2-.31.41-0.31,0.51-0.1l-0.1,30.26c0,0.31-.2.41-0.61,0.2l-1.32-5a52.23,52.23,0,0,0-3.87-10C197,6.14,190.55,1.14,182.4.84c-7.44-.41-12.84,3.77-16,12.63-2.65,7.24-3.87,17.53-3.77,31.18q0.3,42.19,16.61,44a24.45,24.45,0,0,0,11.62-1.53q8.25-3.67,8.25-13.66V53.21c0-.41-0.41-0.51-1.33-0.51h0Z"
                                        transform="translate(0.01 0.02)" />
                                </svg>
                            </a> */}
                            <a className="">
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" style={{ border: 0 }} />
                            </a>
                        </div>
                    </div>

                    <Greeting />
                </div>
            </header>
        );
    }
}