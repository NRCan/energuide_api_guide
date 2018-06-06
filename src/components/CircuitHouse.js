import React from 'react'
import { css } from 'react-emotion'
import { mediaQuery, theme } from './styles'

const headerImg = css`
  position: absolute;
  height: 100%;
  top: 105px;
  right: 0px;
  padding-top: ${theme.spacing.xl}px;
`

const headerWidth = css`
  width: 24em;

  ${mediaQuery.large(css`
    padding-top: 2em;
    width: 20em;
  `)};

  ${mediaQuery.medium(css`
    width: 0em;
  `)};
`

const CircuitHouse = () => (
  <div className={headerImg}>
    <svg
      version="1.1"
      viewBox="0 0 550 1052"
      height="1052px"
      width="550px"
      className={headerWidth}
    >
      <defs>
        <path d="M0,4.5 C0,6.985 2.014,9 4.5,9 C6.985,9 9,6.985 9,4.5 C9,2.014 6.985,0 4.5,0 C2.014,0 0,2.014 0,4.5 Z" />
        <path d="M0,4.5 C0,6.985 2.014,9 4.5,9 C6.985,9 9,6.985 9,4.5 C9,2.014 6.985,0 4.5,0 C2.014,0 0,2.014 0,4.5 Z" />
        <polygon points="0 0.001 26 0.001 26 7 0 7" />
        <polygon points="0 0 26 0 26 7 0 7" />
      </defs>
      <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
        <g>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="#E7AE27"
            d="M342,73.3627518 L342,27.6984565 L376.504358,27.6984565 L404.848784,27.5346695 C404.848784,27.5346695 420.827222,26.5367096 421.825874,16.55711 C422.824527,6.57751036 408.843393,11.5673102 411.83935,19.5509899 C414.835307,27.5346695 425.820484,27.5346695 425.820484,27.5346695 L451.785446,27.5346695 L452,155 L399.110433,155"
          />
          <path
            fill="#FDD262"
            strokeWidth="3"
            stroke="#E7AE27"
            d="M437.423163,15.3844583 C437.55234,14.7622083 437.620915,14.1185833 437.620915,13.4583333 C437.620915,8.21195833 433.336562,3.95833333 428.052288,3.95833333 C425.181699,3.95833333 422.61332,5.21945833 420.859869,7.20733333 C420.692418,3.19991667 417.376889,0 413.300654,0 C409.116771,0 405.72549,3.36695833 405.72549,7.52083333 C405.72549,8.02670833 405.77732,8.51991667 405.873007,8.99808333 C405.463948,9.21895833 405.068444,9.46041667 404.683307,9.716125 C403.606039,8.15179167 401.796771,7.125 399.745098,7.125 C396.441529,7.125 393.764706,9.78341667 393.764706,13.0625 C393.764706,13.345125 393.79102,13.6198333 393.829294,13.891375 C387.786706,14.2682083 383,19.2390833 383,25.3333333 C383,31.673 388.17583,36.8125 394.562092,36.8125 C397.641595,36.8125 400.433242,35.6091667 402.505647,33.6592917 C405.302876,36.34225 409.104013,38 413.300654,38 C417.495699,38 421.295242,36.3430417 424.092471,33.6616667 C426.196771,35.8435 429.154275,37.2083333 432.437908,37.2083333 C438.823373,37.2083333 444,32.0688333 444,25.7291667 C444,21.1652083 441.309621,17.2345833 437.423163,15.3844583 Z"
          />
          <g transform="translate(0.000000, 32.000000)">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M456.5,322 C456.5,330.008 450.008,336.5 442,336.5 C433.992,336.5 427.5,330.008 427.5,322 C427.5,313.992 433.992,307.5 442,307.5 C450.008,307.5 456.5,313.992 456.5,322 Z"
            />
            <polygon
              points="178.5 357.5 207.5 357.5 207.5 269.5 178.5 269.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="101.5 115.5 101.5 102.5 134.5 102.5 134.5 121.5 153.5 121.5 153.5 102.5 180.5 102.5 180.5 142.5 226.5 142.5 226.5 102.5 250.5 102.5 250.5 178.5 181.5 178.5 181.5 222.5 227.5 222.5 250.5 222.5 250.5 265.5 293.5 265.5 293.5 272.5 298.5 272.5 298.5 277.5 307.5 277.5 307.5 282.5 315.5 282.5 315.5 288.5 323.5 288.5 323.5 295.5 314.5 295.5 314.5 300.5 306.5 300.5 306.5 305.5 298.5 305.5 298.5 310.5 289.5 310.5 289.5 316.5 282.5 316.5 282.5 320.5 274.5 320.5 274.5 326.5 265.5 326.5 265.5 331.5 256.5 331.5 256.5 336.5 248.5 336.5 248.5 341.5 238.5 341.5 238.5 346.5 228.5 346.5 228.5 352.5 221.5 352.5 221.5 357.5 207.5 357.5 207.5 269.5 178.5 269.5 178.5 300"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M106.5,193 C106.5,201.008 100.008,207.5 92,207.5 C83.992,207.5 77.5,201.008 77.5,193 C77.5,184.992 83.992,178.5 92,178.5 C100.008,178.5 106.5,184.992 106.5,193 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M172.5,315.5 L185.5,315.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M168,309.5 L189,309.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M173,304.5 L186,304.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M168,299.5 L189,299.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M44.5,341.5 L61.5,341.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M105,119.5 C105,121.433 103.433,123 101.5,123 C99.567,123 98,121.433 98,119.5 C98,117.567 99.567,116 101.5,116 C103.433,116 105,117.567 105,119.5 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M101.5,147.5 L101.5,184.5 C101.5,184.5 101.5,195.5 93.5,198.5 C85.5,201.5 80.5,187.5 90.5,188.5 C100.5,189.5 101.5,205.5 101.5,205.5 L101.5,255.5 L27.5,255.5 L27.5,296.25 L17.75,296.25 L30.5,309 L17,309 L30.5,322.5 L16.5,322.5 L25.5,331.5 L25.5,357.5 L44.5,357.5 L44.5,329.5 L61.5,329.5 L61.5,357.5 L69.5,357.5 L69.5,329.5 L87.5,329.5 L87.5,340.5 L77.5,340.5 L77.5,357.5 L94.5,357.5 L94.5,329.5 L101.5,329.5 L101.5,357.5 L147.5,357.5 L178.5,357.5 L178.5,316.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M250.5,144 L287,144"
            />
            <polyline
              points="250 178 250 187 384 187 384 165"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M312.5,141 C312.5,147.903 306.903,153.5 300,153.5 C293.097,153.5 287.5,147.903 287.5,141 C287.5,134.097 293.097,128.5 300,128.5 C306.903,128.5 312.5,134.097 312.5,141 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M291.8496,131.5352 L307.5006,151.0002"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M292.8496,151 L308.5006,131.535"
            />
            <polyline
              points="323 287 360 287 360 187 341.5 187 341.5 237.5 312.5 237.5 312.5 187 292.85 187 292.85 264.5 282 264.5 282 202.5 255.5 202.5 255.5 262.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polygon
              points="359.75 250.1758 371.5 229.8238 348 229.8238"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="#FDD262"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M348.5,250.5 L373,250.5"
            />
            <polyline
              points="229.5 360.5 338.5 294.5 359.5 294.5 360.5 357.5 433.5 357.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="359.75 282 463.5 282 463.5 275.5 359.75 275.5 359.75 256.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="383.5 256.5 422.5 256.5 464.5 275.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M97.5,121.5 L76.5,136.5"
            />
            <polyline
              points="396.5 255.5 396.5 239.5 396.5 186.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="396.5 150.5 396.5 109.5 419.5 84.5 419.5 76.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M400.5,154 C400.5,155.933 398.933,157.5 397,157.5 C395.067,157.5 393.5,155.933 393.5,154 C393.5,152.067 395.067,150.5 397,150.5 C398.933,150.5 400.5,152.067 400.5,154 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M400.5,183 C400.5,184.933 398.933,186.5 397,186.5 C395.067,186.5 393.5,184.933 393.5,183 C393.5,181.067 395.067,179.5 397,179.5 C398.933,179.5 400.5,181.067 400.5,183 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M392,168.9165 L407,168.9165"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M407.5,154.5 L407.5,183.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M433.5,357.5 L433.5,331.5 C433.5,331.5 433.5,320.5 441.5,317.5 C449.5,314.5 454.5,328.5 444.5,327.5 C434.5,326.5 433.5,310.5 433.5,310.5 L433.5,282.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M422.5,73 C422.5,74.933 420.933,76.5 419,76.5 C417.067,76.5 415.5,74.933 415.5,73 C415.5,71.067 417.067,69.5 419,69.5 C420.933,69.5 422.5,71.067 422.5,73 Z"
            />
            <polyline
              points="376.5 57.5 233.5 1.5 94.5 0.5 94.5 7.5 232.5 8.5 406.5 77.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M383.5,58 C383.5,59.933 381.933,61.5 380,61.5 C378.067,61.5 376.5,59.933 376.5,58 C376.5,56.067 378.067,54.5 380,54.5 C381.933,54.5 383.5,56.067 383.5,58 Z"
            />
            <polyline
              points="198.5 51.5 156.5 51.5 156.5 26.5 134.5 26.5 134.5 51.5 113.5 51.5 0.5 96.5 38.5 96.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="226.5 102.5 263.5 102.5 263.5 51.5 233.5 51.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polygon
              points="40.5 102.5 84.5 102.5 84.5 91.5 40.5 91.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="#FDD262"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="85.5 97.5 88.5 97.5 88.5 113.5 48.5 113.5 48.5 168.5 26.5 168.5 26.5 128.5 19.5 128.5 19.5 254.5 19.5 269.5 27.5 269.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="233.25 51.5 233.25 43.25 220.5 56 220.5 42.5 207 56 207 42 198.5 51.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="181.5 196 140 196 140 220 146 227"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polygon
              points="148.728 223.8506 150.913 231.8886 142.859 229.7606"
              fill="#E7AE27"
            />
            <polyline
              points="178 273.5 139.5 273.5 140.5 249.5 151.5 236.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M151.5,220 L151.5,251"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M151.5,236.5 L250,236.5"
            />
            <polyline
              points="365 85.5 365 95.5 353 95.5 353 85.5 343.5 95 343.5 103.5 365 103.5 365 115.5 360 115.5 360 107.5 344 107.5 344 115.5 344 119.5 344 126.5 365 126.5 365 140.5 345 140.5 345 146.5 365 146.5 344 159.5 365 159.5 365 184.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polyline
              points="344.5 52.5 344.5 71 364.5 71 344.5 85 364.5 85"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M354.5,126.5 L354.5,140.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M300,154 L300,187.333"
            />
            <polyline
              points="344 103 340 103 340 121 340 133.5 324.5 133.5 324.5 141.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M328.5,146 C328.5,147.933 326.933,149.5 325,149.5 C323.705,149.5 322.574,148.796 321.969,147.751 C321.671,147.236 321.5,146.638 321.5,146 C321.5,144.067 323.067,142.5 325,142.5 C326.933,142.5 328.5,144.067 328.5,146 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M321.5,149.5 L314.5,156.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M324.5,167 L324.5,187"
            />
            <polyline
              points="93 5 77 5 77 23"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <polygon
              points="76.75 43.1763 88.5 22.8243 65 22.8243"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="#FDD262"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M65.5,43.5 L90,43.5"
            />
            <polyline
              points="76.5 43.5 76.5 54.5 84.925 62.925"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M328.5,163 C328.5,164.933 326.933,166.5 325,166.5 C323.705,166.5 322.574,165.796 321.969,164.751 C321.671,164.236 321.5,163.638 321.5,163 C321.5,161.067 323.067,159.5 325,159.5 C326.933,159.5 328.5,161.067 328.5,163 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M105,142.5 C105,144.433 103.433,146 101.5,146 C99.567,146 98,144.433 98,142.5 C98,140.567 99.567,139 101.5,139 C103.433,139 105,140.567 105,142.5 Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M57.1411,26.1631 L46.8591,37.8371"
            />
            <path
              fill="#E7AE27"
              d="M42.8574,43.3027 L49.7034,41.0517 C50.0524,40.9367 50.1324,40.4787 49.8434,40.2517 L43.5454,35.3177 C43.2554,35.0907 42.8304,35.2787 42.8024,35.6447 L42.2544,42.8307 C42.2304,43.1577 42.5454,43.4057 42.8574,43.3027"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M60.1411,39.1631 L49.8591,50.8371"
            />
            <path
              fill="#E5BF73"
              d="M344.60429,562.08365 L351.45029,559.83265 C351.79929,559.71765 351.87929,559.25965 351.59029,559.03265 L345.29229,554.09865 C345.00229,553.87165 344.57729,554.05965 344.54929,554.42565 L344.00129,561.61165 C343.97729,561.93865 344.29229,562.18665 344.60429,562.08365"
            />
            <path
              fill="#E5BF73"
              d="M347.60429,575.08365 L354.45029,572.83265 C354.79929,572.71765 354.87929,572.25965 354.59029,572.03265 L348.29229,567.09865 C348.00229,566.87165 347.57729,567.05965 347.54929,567.42565 L347.00129,574.61165 C346.97729,574.93865 347.29229,575.18665 347.60429,575.08365"
            />
            <path
              fill="#E7AE27"
              d="M45.8574,56.3027 L52.7034,54.0517 C53.0524,53.9367 53.1324,53.4787 52.8434,53.2517 L46.5454,48.3177 C46.2554,48.0907 45.8304,48.2787 45.8024,48.6447 L45.2544,55.8307 C45.2304,56.1577 45.5454,56.4057 45.8574,56.3027"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M19.5,228.5 L30.5,228.5 L30.5,222.5 C30.5,222.5 32.5,218.5 34.5,222.5 L34.5,233.5 C34.5,233.5 37.5,237.5 39.5,233.5 L39.5,213.5 C39.5,213.5 42.5,207.5 45.5,213.5 L45.5,227.5 L101.5,227.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M354.25,294.5 L354.25,354.64 C354.25,356.318 353.397,357.935 351.918,358.728 C350.922,359.261 349.681,359.44 348.343,358.502 C347.141,357.659 346.5,356.218 346.5,354.749 L346.5,306.078 C346.5,304.521 345.742,302.996 344.375,302.25 C343.331,301.681 341.927,301.544 340.217,302.824 C339.111,303.651 338.5,304.987 338.5,306.367 L338.5,354.129 C338.5,356.15 337.553,358.1 335.863,359.21 C334.533,360.083 332.814,360.538 330.977,359.277 C329.367,358.174 328.5,356.267 328.5,354.315 L328.5,315.555 C328.5,313.644 327.558,311.781 325.875,310.875 C324.78,310.285 323.402,310.093 321.854,311.101 C320.35,312.08 319.5,313.811 319.5,315.606"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M319.25,314.5 L319.25,354.64 C319.25,356.318 318.397,357.935 316.918,358.728 C315.922,359.261 314.681,359.44 313.343,358.502 C312.141,357.659 311.5,356.218 311.5,354.749 L311.5,326.078 C311.5,324.521 310.742,322.996 309.375,322.25 C308.331,321.681 306.927,321.544 305.217,322.824 C304.111,323.651 303.5,324.987 303.5,326.367 L303.5,354.129 C303.5,356.15 302.553,358.1 300.863,359.21 C299.533,360.083 297.814,360.538 295.977,359.277 C294.367,358.174 293.5,356.267 293.5,354.315 L293.5,335.555 C293.5,333.644 292.558,331.781 290.875,330.875 C289.78,330.285 288.402,330.093 286.854,331.101 C285.35,332.08 284.5,333.811 284.5,335.606 L284.5,360.5 L230.5,360.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#D89500"
              d="M172,290 L172,294"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M174,292 L170,292"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M170.5,320.5 L174.5,320.5"
            />
            <polygon
              points="127.5 26.5 162.5 26.5 162.5 18.5 127.5 18.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="#FDD262"
              strokeWidth="3"
              stroke="#E7AE27"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M139,269.5 L65.5,269.5"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E7AE27"
              d="M57,269.75 L29.5,269.75"
            />
            <path
              fill="#E7AE27"
              d="M58.2803,276.5 L55.2193,276.5 C54.8223,276.5 54.5003,276.178 54.5003,275.78 L54.5003,263.22 C54.5003,262.822 54.8223,262.5 55.2193,262.5 L58.2803,262.5 C58.6773,262.5 59.0003,262.822 59.0003,263.22 L59.0003,275.78 C59.0003,276.178 58.6773,276.5 58.2803,276.5"
            />
            <path
              fill="#E7AE27"
              d="M66.2803,276.5 L63.2193,276.5 C62.8223,276.5 62.5003,276.178 62.5003,275.78 L62.5003,263.22 C62.5003,262.822 62.8223,262.5 63.2193,262.5 L66.2803,262.5 C66.6773,262.5 67.0003,262.822 67.0003,263.22 L67.0003,275.78 C67.0003,276.178 66.6773,276.5 66.2803,276.5"
            />
          </g>
          <g transform="translate(65.000000, 424.000000)">
            <polyline
              points="0.239746094 0.334472656 0.239746094 8.62282578 143.152 8.6614 143.152 87.7294 207.538 87.7294 212.008 88.1514 212.008 76.9474"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E5BF73"
            />
            <g transform="translate(210.000000, 68.000000)">
              <mask fill="white">
                <use />
              </mask>
              <g />
              <polygon
                points="-5 14 14 14 14 -5 -5 -5"
                mask="url(#mask-2)"
                fill="#FFFFFF"
              />
            </g>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="#E5BF73"
              d="M214.5,77 C216.985,77 219,74.985 219,72.5 C219,70.015 216.985,68 214.5,68 C212.015,68 210,70.015 210,72.5 C210,74.985 212.015,77 214.5,77 Z"
            />
            <g transform="translate(252.000000, 68.000000)">
              <mask fill="white">
                <use />
              </mask>
              <g />
              <polygon
                points="-5 14 14 14 14 -5 -5 -5"
                mask="url(#mask-4)"
                fill="#FFFFFF"
              />
            </g>
            <g
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="#E5BF73"
              transform="translate(132.000000, 51.000000)"
            >
              <path d="M124.5,26 C126.985,26 129,23.985 129,21.5 C129,19.015 126.985,17 124.5,17 C122.015,17 120,19.015 120,21.5 C120,23.985 122.015,26 124.5,26 Z" />
              <polyline points="130 22 165.778 22 165.778 57.524 181.214 57.524 181.438 94.564" />
              <path d="M86,18.1992 L109.611,0.0002" />
              <path
                fill="#FFFFFF"
                d="M180.6055,120.2109 L169.4475,97.8949 C168.9535,96.9059 169.3535,95.7049 170.3415,95.2109 C170.6195,95.0719 170.9255,94.9999 171.2365,94.9999 L191.7635,94.9999 C192.8685,94.9999 193.7635,95.8959 193.7635,96.9999 C193.7635,97.3109 193.6915,97.6169 193.5525,97.8949 L182.3945,120.2109 C182.1475,120.7049 181.5465,120.9049 181.0525,120.6579 C180.8595,120.5619 180.7025,120.4039 180.6055,120.2109 Z"
              />
              <path d="M169,122 L195.774,122" />
              <path d="M181.8008,121 L181.8008,167.946 L181.8008,216.599 L164.9998,216.599 L90.9998,216.599 C90.9998,216.599 70.9998,212 76.9998,198 C82.9998,184 85.9998,199 85.9998,199 C85.9998,199 91.9998,213 66.9998,217 C61.8438,217.825 55.9638,218.31 49.8778,218.56 C26.4608,219.521 -0.0002,217 -0.0002,217 L-0.0002,260" />
              <polyline points="0 274.5 0 333.848 27.104 333.848 35.135 317.889 38.146 338.835 43.165 316.892 46.177 338.835 51.196 316.892 55.211 332.851 103.396 332.851 103.396 357.786 125.48 357.786 125.48 379.73 148.066 379.73 147.564 414.641 91.727 413.105 91.727 483.238" />
              <path d="M102,202.5 C102,213.822 92.822,223 81.5,223 C70.178,223 61,213.822 61,202.5 C61,191.178 70.178,182 81.5,182 C92.822,182 102,191.178 102,202.5 Z" />
            </g>
            <g transform="translate(120.000000, 310.000000)">
              <mask fill="white">
                <use />
              </mask>
              <g />
              <polygon
                points="-5 12 31 12 31 -5 -5 -5"
                mask="url(#mask-6)"
                fill="#E5BF73"
              />
            </g>
            <g transform="translate(120.000000, 321.000000)">
              <mask fill="white">
                <use />
              </mask>
              <g />
              <polygon
                points="-5 12 31 12 31 -5 -5 -5"
                mask="url(#mask-8)"
                fill="#E5BF73"
              />
            </g>
            <g
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="#E5BF73"
              transform="translate(166.000000, 152.000000)"
            >
              <path d="M47,73 L47,55" />
              <path d="M47,148 L47,130" />
              <path d="M75.5,101.5 L93.5,101.5" />
              <path d="M0.5,101.5 L18.5,101.5" />
              <path d="M67.1523,121.6523 L79.8813,134.3813" />
              <path d="M14.1191,68.6191 L26.8481,81.3481" />
              <path d="M67.1523,81.3477 L79.8813,68.6187" />
              <path d="M14.1191,134.3809 L26.8481,121.6519" />
              <polyline points="57 419 57 463 148 463" />
              <path d="M61,386.5 C61,388.433 59.433,390 57.5,390 C55.567,390 54,388.433 54,386.5 C54,384.567 55.567,383 57.5,383 C59.433,383 61,384.567 61,386.5 Z" />
              <path d="M61,415.5 C61,417.433 59.433,419 57.5,419 C55.567,419 54,417.433 54,415.5 C54,413.567 55.567,412 57.5,412 C59.433,412 61,413.567 61,415.5 Z" />
              <path d="M52.5,401.417 L67.5,401.417" />
              <path d="M68,387 L68,416" />
              <path d="M148.75,454.75 L148.75,467.75" />
              <path d="M154.75,450.25 L154.75,471.25" />
              <path d="M159.75,455.25 L159.75,468.25" />
              <path d="M164.75,450.25 L164.75,471.25" />
              <path d="M174.25,454.25 L170.25,454.25" />
              <path d="M172.25,456.25 L172.25,452.25" />
              <path d="M143.75,452.75 L143.75,456.75" />
              <path d="M166,463 L316,463" />
              <path d="M127.8887,0.5 L117.6057,12.174" />
              <path d="M130.8887,13.5 L120.6057,25.174" />
            </g>
          </g>
          <path strokeWidth="3" stroke="#E7AE27" d="M65,388 L65,427" />
        </g>
      </g>
    </svg>
  </div>
)

export default CircuitHouse
