import React from 'react'
import brokeScript from '../scripts/broke.js'

export default class Broke extends React.Component<unknown, unknown> {
  render() {
    return (
      <>
        <head>
          <title>Broke</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <main className="min-h-screen">
          <div
            className="illustration"
            dangerouslySetInnerHTML={{
              __html: `<div class="pencil-color">
            <div class="pencil-color-left">
              <svg id="pencil-color-left" xmlns="http://www.w3.org/2000/svg"
                   x="0px" y="0px" viewBox="0 0 2404 1090.6"
                   xml:space="preserve">
                  <path id="pencil-left-bottom" class="st4"
                        d="M1156.1,242.2l66-16.4h-773c0.9,3.8,1.4,8,1.4,12.6c0,24.8-15.6,37.5-15.6,37.5h770.2 l47-15.3L1156.1,242.2z"></path>
                <path id="pencil-left-middle" class="st3"
                      d="M434.9,201c0,0,10.3,8.4,14.1,24.9h773l77.5-19.2L1134,182.1l31.3-6.4H449.1 C445.4,192.4,434.9,201,434.9,201z"></path>
                <path id="pencil-left-top" class="st5"
                      d="M450.5,163.4c0,4.5-0.5,8.6-1.3,12.3h716.2l85.7-17.6l-77.5-13l54.5-19.2H434.9 C434.9,125.9,450.5,138.6,450.5,163.4z"></path>
                <path id="pencil-point-wood" class="st6"
                      d="M434.9,201c0,0,15.6-12.7,15.6-37.5s-15.6-37.5-15.6-37.5l-144.2,49.8 c2.7,7.9,4.2,16.4,4.2,25.3s-1.5,17.3-4.2,25.3L434.9,276c0,0,15.6-12.7,15.6-37.5S434.9,201,434.9,201z"></path>
                <path id="pencil-point-lead" class="st7"
                      d="M290.8,226.2c2.7-7.9,4.2-16.4,4.2-25.3s-1.5-17.3-4.2-25.3L217.6,201L290.8,226.2z"></path>
              </svg>
            </div>
            <div class="pencil-color-right">
              <svg id="pencil-color-right" xmlns="http://www.w3.org/2000/svg"
                   x="0px" y="0px" viewBox="0 0 2404 1090.6"
                   xml:space="preserve">
                  <path id="pencil-eraser" class="st1"
                        d="M2042,276V125.9c0,0,76,0,98,0s31.7,19.2,31.7,31.7c0,12.5,0,71.4,0,86.7 S2159.5,276,2140,276S2042,276,2042,276z"></path>
                <path id="pencil-metal-ring" class="st2" d="M1961.1,125.9h81V276h-81V125.9z"></path>
                <path id="pencil-right-bottom" class="st3"
                      d="M1125,182.1l31.3-6.4h804.7v50.1h-748l77.5-19.2L1125,182.1z"></path>
                <path id="pencil-right-middle" class="st4"
                      d="M1961.1,276h-765l47-15.3l-96-18.4l66-16.4h748V276z"></path>
                <path id="pencil-right-top" class="st5"
                      d="M1164.5,145.1l54.5-19.2h742.1v49.8h-804.7l85.7-17.6L1164.5,145.1z"></path>
              </svg>
            </div>
          </div>
          <div class="pencil-outline show">
            <svg id="pencil-outline" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px" viewBox="0 0 2404 1090.6"
                 xml:space="preserve">
              <path id="pencil-outline-eraser" class="st8"
                    d="M2042,276V125.9c0,0,76,0,98,0s31.7,19.2,31.7,31.7c0,12.5,0,71.4,0,86.7 S2159.5,276,2140,276S2042,276,2042,276"
                    style="stroke-dasharray: 532.378, 532.378; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-metal-ring" class="st8" d="M1961.1,125.9h81V276h-81V125.9z"
                    style="stroke-dasharray: 462.2, 462.2; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-bottom" class="st8"
                    d="M1213,225.9h-764c0.9,3.8,1.4,8,1.4,12.6c0,24.8-15.6,37.5-15.6,37.5h761.2h765 v-50.1H1213z"
                    style="stroke-dasharray: 3142.8, 3142.8; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-middle" class="st8"
                    d="M1156.3,175.7H449.1c-3.8,16.7-14.2,25.3-14.2,25.3s10.3,8.4,14.1,24.9h764h748 v-50.1H1156.3z"
                    style="stroke-dasharray: 3132.6, 3132.6; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-top" class="st8"
                    d="M1219,125.9H434.9c0,0,15.6,12.7,15.6,37.5c0,4.5-0.5,8.6-1.3,12.3h707.2h804.7v-49.8 H1219z"
                    style="stroke-dasharray: 3142.09, 3142.09; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-point-wood" class="st8"
                    d="M434.9,201c0,0,15.6-12.7,15.6-37.5s-15.6-37.5-15.6-37.5l-144.2,49.8 c2.7,7.9,4.2,16.4,4.2,25.3s-1.5,17.3-4.2,25.3L434.9,276c0,0,15.6-12.7,15.6-37.5S434.9,201,434.9,201z"
                    style="stroke-dasharray: 523.747, 523.747; stroke-dashoffset: 0;"></path>
              <path id="pencil-outline-point-lead" class="st8"
                    d="M290.8,226.2c2.7-7.9,4.2-16.4,4.2-25.3s-1.5-17.3-4.2-25.3L217.6,201 L290.8,226.2"
                    style="stroke-dasharray: 206.422, 206.422; stroke-dashoffset: 0;"></path>
          </svg>
          </div>
  <!--        Thanks Jon. https://codepen.io/jonwilcox/pen/LroYjb-->
  <!--        <div class="pencil-text">-->
  <!--          <svg id="pencil-text" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
  <!--               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2404 1090.6"-->
  <!--               style="enable-background:new 0 0 2404 1090.6;" xml:space="preserve">-->
  <!--            <path id="four-right" class="st0" d="M1647.1,826.6h-260l196-265v362"-->
  <!--                  style="stroke-dasharray: 951.607, 951.607; stroke-dashoffset: 0px;"></path>-->
  <!--            <path id="zero" class="st0"-->
  <!--                  d="M1297.1,667.9c0,34.3,0,85.7,0,144.8c0,59.1-39,110.9-104,110.9s-104-54.7-104-108.1 s0-106.5,0-146.2s30.3-107.7,104-107.7C1266.1,561.6,1297.1,625,1297.1,667.9z"-->
  <!--                  style="stroke-dasharray: 959.958, 959.958; stroke-dashoffset: 0px;"></path>-->
  <!--            <path id="four-left" class="st0" d="M983.1,826.6h-260l196-265v362"-->
  <!--                  style="stroke-dasharray: 951.607, 951.607; stroke-dashoffset: 0px;"></path>-->
  <!--        </svg>-->
  <!--        </div>-->`,
            }}
          ></div>
          <h2>Something Broke</h2>
        </main>
      </>
    )
  }

  componentDidMount() {
    brokeScript()
  }
}
