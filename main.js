const fs = require('fs')
const path = require('path')

const data = require('./devices.json')
const json = data.devices

json.map((e, index) => {
  // A list of devices illustrations used for the banners
  let device_types = [
    `<g id="_0" data-name="0">
    <g class="cls-100">
      <path
        class="cls-200"
        d="M960.14,644.85,843.91,761.07,622.29,982.7,405.22,1199.77l-520.6,520.6a81,81,0,0,1-114.49,0L-663.3,1287a81.06,81.06,0,0,1,0-114.5L412.22,96.93a81.07,81.07,0,0,1,114.51,0L597,167.16l11.35-11.35q53.58,42.27,103.78,88.5l-19,19,267,267.05A81,81,0,0,1,960.14,644.85Z"
      />
      <path
        class="cls-200"
        d="M843.91,761.07,622.29,982.7,405.22,1199.77l-520.6,520.6a81,81,0,0,1-114.49,0L-663.3,1287a81.06,81.06,0,0,1,0-114.5L295,214.17q14.14,8.36,28.13,17A1565.84,1565.84,0,0,1,826.83,733Q835.53,747,843.91,761.07Z"
      />
      <path
        class="cls-200"
        d="M622.29,982.7,405.22,1199.77l-520.6,520.6a81,81,0,0,1-114.49,0L-663.3,1287a81.06,81.06,0,0,1,0-114.5L73.08,436.07q14.91,7.57,29.58,15.55a1262.19,1262.19,0,0,1,504,501.61Q614.66,967.84,622.29,982.7Z"
      />
      <path
        class="cls-200"
        d="M405.22,1199.77l-520.6,520.6a81,81,0,0,1-114.49,0L-663.3,1287a81.06,81.06,0,0,1,0-114.5l518.87-518.87q16.16,6.27,32,13.13a972.28,972.28,0,0,1,504.35,501.21Q398.88,1183.7,405.22,1199.77Z"
      />
    </g>
    <g id="_1-2" data-name="1">
      <path
        class="cls-300"
        d="M960.14,530.35l-267-267,54.25-54.25a9.38,9.38,0,0,0,0-13.26L664.46,112.9a9.38,9.38,0,0,0-13.25,0l-42.9,42.91L597,167.16,526.73,96.92a81.07,81.07,0,0,0-114.51,0L-663.3,1172.45a81.06,81.06,0,0,0,0,114.5l433.43,433.42a81,81,0,0,0,114.49,0l520.6-520.6L622.29,982.7,843.91,761.07,960.14,644.85A81,81,0,0,0,960.14,530.35ZM661.68,169.67a20.43,20.43,0,1,1,0,28.89A20.43,20.43,0,0,1,661.68,169.67ZM937.57,622.28,826.83,733,606.62,953.23-137.95,1697.8a49.09,49.09,0,0,1-69.35,0l-433.43-433.42a49.11,49.11,0,0,1,0-69.36l528.31-528.31L102.66,451.62,434.79,119.5a49.11,49.11,0,0,1,69.37,0L937.58,552.92A49.1,49.1,0,0,1,937.57,622.28Z"
      />
    </g>
  </g>`,
    `<g id="_1" data-name="1">
  <g class="cls-100">
    <path
      class="cls-200"
      d="M960.14,644.85,847.2,757.79,624.48,980.51,405.6,1199.39l-521,521a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L412.21,96.92a81.06,81.06,0,0,1,114.51,0L960.14,530.34A81.06,81.06,0,0,1,960.14,644.85Z"
    />
    <path
      class="cls-200"
      d="M847.2,757.79,624.48,980.51,405.6,1199.39l-521,521a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L306.23,202.9q14,8.52,27.79,17.35A1565.88,1565.88,0,0,1,830.45,729.4Q839,743.5,847.2,757.79Z"
    />
    <path
      class="cls-200"
      d="M624.48,980.51,405.6,1199.39l-521,521a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L85.36,423.77q14.69,7.82,29.13,16a1262.17,1262.17,0,0,1,494.78,510.8Q617.07,965.43,624.48,980.51Z"
    />
    <path
      class="cls-200"
      d="M405.6,1199.39l-521,521a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51l532.86-532.86q15.82,6.61,31.36,13.78c222.2,102.34,399,286.33,492.06,513.52Q399.57,1183,405.6,1199.39Z"
    />
  </g>
  <g id="_2-2" data-name="2">
    <path
      class="cls-300"
      d="M960.14,530.34,526.72,96.92a81.06,81.06,0,0,0-114.51,0L-663.31,1172.44a81.06,81.06,0,0,0,0,114.51l433.42,433.42a81.06,81.06,0,0,0,114.51,0l521-521L624.48,980.51,847.2,757.79,960.14,644.85A81.06,81.06,0,0,0,960.14,530.34Zm-22.57,91.94-328.3,328.3L393,1166.88-137.95,1697.8a49.12,49.12,0,0,1-69.37,0l-433.42-433.42a49.12,49.12,0,0,1,0-69.37L434.78,119.49a49.12,49.12,0,0,1,69.37,0L937.57,552.91A49.12,49.12,0,0,1,937.57,622.28Z"
    />
    <circle class="cls-300" cx="692.82" cy="364.25" r="20.43" />
  </g>
</g>`,
    `<g id="_2" data-name="2">
<g class="cls-100">
  <path
    class="cls-200"
    d="M960.14,644.85,856.49,748.5,635.22,969.77,418.75,1186.24l-534.13,534.13a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L412.21,96.92a81.06,81.06,0,0,1,114.51,0L960.14,530.34A81.06,81.06,0,0,1,960.14,644.85Z"
  />
  <path
    class="cls-200"
    d="M856.49,748.5,635.22,969.77,418.75,1186.24l-534.13,534.13a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51l968.05-968Q319,212.7,333,221.29A1565.76,1565.76,0,0,1,839.27,720.58Q848,734.44,856.49,748.5Z"
  />
  <path
    class="cls-200"
    d="M635.22,969.77,418.75,1186.24l-534.13,534.13a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L82.45,426.68q15,7.5,29.75,15.39A1262.27,1262.27,0,0,1,619.39,940.46Q627.5,955,635.22,969.77Z"
  />
  <path
    class="cls-200"
    d="M418.75,1186.24l-534.13,534.13a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51l527.62-527.62q16.26,6.16,32.24,12.9a972.26,972.26,0,0,1,508.68,496.9Q412.28,1170.28,418.75,1186.24Z"
  />
</g>
<g id="_3-2" data-name="3">
  <path
    class="cls-300"
    d="M960.14,530.34,526.72,96.92a81.06,81.06,0,0,0-114.51,0L-663.31,1172.44a81.06,81.06,0,0,0,0,114.51l433.42,433.42a81.06,81.06,0,0,0,114.51,0l534.13-534.13L635.22,969.77,856.49,748.5,960.14,644.85A81.06,81.06,0,0,0,960.14,530.34Zm-22.57,91.94L-137.95,1697.8a49.12,49.12,0,0,1-69.37,0l-433.42-433.42a49.12,49.12,0,0,1,0-69.37l537.29-537.29L112.2,442.07,333,221.29l101.8-101.8a49.12,49.12,0,0,1,69.37,0L937.57,552.91A49.12,49.12,0,0,1,937.57,622.28Z"
  />
  <circle class="cls-300" cx="473.43" cy="167.29" r="20.43" />
</g>
</g>`,
    `<g id="_3" data-name="3">
<g class="cls-100">
  <path
    class="cls-200"
    d="M939,666,838.62,766.37,618,987,402.5,1202.5-94.19,1699.19a111.06,111.06,0,0,1-156.88,0l-391-391a111.06,111.06,0,0,1,0-156.88l481.87-481.87L59,450.1l332-332a110.82,110.82,0,0,1,93.89-31.36q55.62,36.33,108.28,76.65L927.66,497.86Q946,521.8,963.51,546.39A111.09,111.09,0,0,1,939,666Z"
  />
  <path
    class="cls-200"
    d="M838.62,766.37,618,987,402.5,1202.5-94.19,1699.19a111.06,111.06,0,0,1-156.88,0l-391-391a111.06,111.06,0,0,1,0-156.88l481.87-481.87L59,450.1,282,227.15q14.34,8.17,28.48,16.66A1565.87,1565.87,0,0,1,821.19,738.67Q830.06,752.43,838.62,766.37Z"
  />
  <path
    class="cls-200"
    d="M618,987,402.5,1202.5-94.19,1699.19a111.06,111.06,0,0,1-156.88,0l-391-391a111.06,111.06,0,0,1,0-156.88l481.87-481.87L59,450.1q15.13,7.35,30,15.1A1262.33,1262.33,0,0,1,601.85,958Q610.1,972.4,618,987Z"
  />
  <path
    class="cls-200"
    d="M402.5,1202.5-94.19,1699.19a111.06,111.06,0,0,1-156.88,0l-391-391a111.06,111.06,0,0,1,0-156.88l481.87-481.87q16.47,6,32.65,12.49c227.82,91.84,412.7,267.8,516.19,489.39Q395.8,1186.73,402.5,1202.5Z"
  />
</g>
<g id="_4-2" data-name="4">
  <path
    class="cls-300"
    d="M963.51,546.39A110.42,110.42,0,0,0,939,509.16l-11.3-11.3L593.2,163.4l-45.29-45.29a111.05,111.05,0,0,0-156.88,0L59,450.1-160.25,669.39l-481.87,481.87a111.06,111.06,0,0,0,0,156.88l391.05,391a111.06,111.06,0,0,0,156.88,0L402.5,1202.5,618,987,838.62,766.37,939,666A111.09,111.09,0,0,0,963.51,546.39Zm-47.12,97.07-95.2,95.21L601.85,958,388.59,1171.27l-505.35,505.35a79.11,79.11,0,0,1-111.74,0l-391-391a79.1,79.1,0,0,1,0-111.74L413.6,140.68a79.1,79.1,0,0,1,111.74,0l391,391.05A79.1,79.1,0,0,1,916.39,643.46Z"
  />
  <circle class="cls-300" cx="493.41" cy="187.27" r="20.43" />
</g>
</g>`,
    `<g id="_4" data-name="4">
<g class="cls-100">
  <path
    class="cls-200"
    d="M960.14,644.85-115.38,1720.37a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-139.6,648.73,77.3,431.83,298.84,210.29,412.21,96.92a81.06,81.06,0,0,1,114.51,0L960.14,530.34A81.06,81.06,0,0,1,960.14,644.85Z"
  />
  <path
    class="cls-200"
    d="M845,760l-960.37,960.37a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-139.6,648.73,77.3,431.83,298.84,210.29q14.1,8.42,28,17.13A1565.91,1565.91,0,0,1,828,731.83Q836.66,745.81,845,760Z"
  />
  <path
    class="cls-200"
    d="M623,982l-738.37,738.37a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-139.6,648.73,77.3,431.83q14.83,7.65,29.43,15.71A1262.28,1262.28,0,0,1,607.49,952.36Q615.42,967.06,623,982Z"
  />
  <path
    class="cls-200"
    d="M405.32,1199.67l-520.7,520.7a81.06,81.06,0,0,1-114.51,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-139.6,648.73q16,6.39,31.78,13.36A972.26,972.26,0,0,1,392.25,1167.6Q399.06,1183.49,405.32,1199.67Z"
  />
</g>
<g id="_5-2" data-name="5">
  <path
    class="cls-300"
    d="M960.14,530.34,526.72,96.92a81.06,81.06,0,0,0-114.51,0L298.84,210.29,77.3,431.83l-216.9,216.9-523.71,523.71a81.06,81.06,0,0,0,0,114.51l433.42,433.42a81.06,81.06,0,0,0,114.51,0L960.14,644.85A81.06,81.06,0,0,0,960.14,530.34Zm-22.57,91.94L-137.95,1697.8a49.12,49.12,0,0,1-69.37,0l-433.42-433.42a49.12,49.12,0,0,1,0-69.37l532.92-532.92L326.85,227.42,434.78,119.49a49.12,49.12,0,0,1,69.37,0L937.57,552.91A49.12,49.12,0,0,1,937.57,622.28Z"
  />
  <path
    class="cls-300"
    d="M904.24,585.46a20.42,20.42,0,0,1-28.89,0l-62.84-62.84a20.43,20.43,0,1,1,28.89-28.89l62.84,62.84A20.42,20.42,0,0,1,904.24,585.46Z"
  />
</g>
</g>`,
    `<g id="_5" data-name="5">
<g class="cls-100">
  <path
    class="cls-200"
    d="M960.15,644.85,623.77,981.23,403.62,1201.38l-519,519a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l539.8-539.8L91.26,417.88l321-321a81.06,81.06,0,0,1,114.51,0L960.15,530.33A81.08,81.08,0,0,1,960.15,644.85Z"
  />
  <path
    class="cls-200"
    d="M847.23,757.77,623.77,981.23,403.62,1201.38l-519,519a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l539.8-539.8L91.26,417.88,311.51,197.63q13.88,8.66,27.56,17.58A1566,1566,0,0,1,830.73,729.13Q839.13,743.35,847.23,757.77Z"
  />
  <path
    class="cls-200"
    d="M623.77,981.23,403.62,1201.38l-519,519a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l539.8-539.8L91.26,417.88q14.55,8,28.85,16.29A1262.25,1262.25,0,0,1,608.87,951Q616.52,966,623.77,981.23Z"
  />
  <path
    class="cls-200"
    d="M403.62,1201.38l-519,519a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l539.8-539.8q15.61,6.84,31,14.19c220.36,105.8,394.52,292.49,484,521.59Q397.82,1184.75,403.62,1201.38Z"
  />
</g>
<g id="_6-2" data-name="6">
  <path
    class="cls-300"
    d="M960.15,530.33,526.73,96.92a81.06,81.06,0,0,0-114.51,0l-321,321L-123.5,632.64l-539.8,539.8a81,81,0,0,0,0,114.51l433.41,433.42a81.08,81.08,0,0,0,114.52,0l519-519L623.77,981.23,960.15,644.85A81.08,81.08,0,0,0,960.15,530.33ZM686.48,346.26a17.28,17.28,0,0,1,24.34,24.34c-.33.4-.68.79-1.05,1.16a17.29,17.29,0,0,1-24.45-24.45C685.69,346.94,686.08,346.59,686.48,346.26Zm251.1,276L830.73,729.13-137.94,1697.8a49.12,49.12,0,0,1-69.38,0l-433.41-433.42a49.11,49.11,0,0,1,0-69.37L-92.55,646.83,120.11,434.17,434.79,119.49a49.12,49.12,0,0,1,69.37,0L681.91,297.24a36.92,36.92,0,0,1-9.82,34.63l0,0c-.38.34-.76.7-1.13,1.07a37.57,37.57,0,1,0,53.12,53.13c.37-.37.73-.75,1.07-1.13l0,0a36.91,36.91,0,0,1,34.63-9.83L937.58,552.9A49.12,49.12,0,0,1,937.58,622.28Z"
  />
</g>
</g>`,
    `<g id="_6" data-name="6">
<g class="cls-100">
  <path
    class="cls-200"
    d="M981.59,606.54a80.41,80.41,0,0,1-21.44,38.31l-136,136L602.39,1002.61l-717.76,717.76a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L412.22,96.92a80.45,80.45,0,0,1,37.87-21.34,1790.26,1790.26,0,0,1,254,198.73q41.1,38.6,79.72,79.72A1789.43,1789.43,0,0,1,981.59,606.54Z"
  />
  <path
    class="cls-200"
    d="M824.11,780.89,602.39,1002.61l-717.76,717.76a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l939.2-939.2q14.14,8.37,28.1,17A1565.8,1565.8,0,0,1,807.05,752.81Q815.74,766.75,824.11,780.89Z"
  />
  <path
    class="cls-200"
    d="M602.39,1002.61l-717.76,717.76a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L54.1,455q14.9,7.6,29.55,15.59A1262.39,1262.39,0,0,1,586.77,973.09Q594.77,987.73,602.39,1002.61Z"
  />
  <path
    class="cls-200"
    d="M385.16,1219.84l-500.53,500.53a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51l500.05-500.05q16.13,6.3,31.95,13.19a972.27,972.27,0,0,1,503.23,502.35Q378.83,1203.74,385.16,1219.84Z"
  />
</g>
<g id="_7-2" data-name="7">
  <path
    class="cls-300"
    d="M960.14,530.34l-256-256L526.72,96.93a81,81,0,0,0-114.5,0L-663.3,1172.44a81,81,0,0,0,0,114.51l433.41,433.42a81.08,81.08,0,0,0,114.52,0l717.76-717.76L824.11,780.89l136-136a81,81,0,0,0,0-114.51ZM713.77,342.43a14.62,14.62,0,0,1,.44,21.13,14.28,14.28,0,0,1-4.72,3.17A14.65,14.65,0,0,1,693.37,343,14.8,14.8,0,0,1,713.77,342.43ZM937.58,622.28,807.05,752.81,586.77,973.09-137.94,1697.8a49.11,49.11,0,0,1-69.38,0l-433.41-433.42a49.11,49.11,0,0,1,0-69.37L-131.3,685.58l215-215L304,250.28,434.79,119.49a49.11,49.11,0,0,1,69.36,0l175.4,175.39a68.45,68.45,0,0,1,4.39,30.73A24.29,24.29,0,0,1,679.79,337l0,0a29,29,0,0,0,40.32,40.31,28.49,28.49,0,0,0,2.47-1.86,7.86,7.86,0,0,1,4.56-1.88,99.51,99.51,0,0,1,22.95,1.17,96.64,96.64,0,0,1,12.21,2.88l175.31,175.3A49.11,49.11,0,0,1,937.58,622.28Z"
  />
</g>
</g>`,
    `<g id="_7" data-name="7">
<g class="cls-100">
  <path
    class="cls-200"
    d="M960.15,644.85-115.37,1720.37a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L412.22,96.92a81.06,81.06,0,0,1,114.5,0L960.14,530.34A81.07,81.07,0,0,1,960.15,644.85Z"
  />
  <path
    class="cls-200"
    d="M856.91,748.09l-972.28,972.28a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L294.77,214.37q14.44,8.06,28.71,16.43A1565.73,1565.73,0,0,1,839.25,720.61Q848.22,734.25,856.91,748.09Z"
  />
  <path
    class="cls-200"
    d="M636.9,968.1l-752.27,752.27a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L71,438.14q15.3,7.19,30.36,14.78A1262.18,1262.18,0,0,1,620.5,939.36Q628.89,953.61,636.9,968.1Z"
  />
  <path
    class="cls-200"
    d="M422.53,1182.47l-537.9,537.9a81.08,81.08,0,0,1-114.52,0L-663.3,1287a81,81,0,0,1,0-114.51L-149.66,658.8q16.71,5.7,33.14,12C113.33,758.89,301.07,932,408.18,1151.68Q415.62,1166.92,422.53,1182.47Z"
  />
</g>
<g id="_8-2" data-name="8">
  <path
    class="cls-300"
    d="M960.14,530.34,526.72,96.93a81.06,81.06,0,0,0-114.5,0L-663.3,1172.44a81,81,0,0,0,0,114.51l433.41,433.42a81.08,81.08,0,0,0,114.52,0L960.15,644.85A81.07,81.07,0,0,0,960.14,530.34ZM736.22,378.56a11.44,11.44,0,1,1,0,16.18A11.39,11.39,0,0,1,736.22,378.56Zm-42.4-42.4a4.69,4.69,0,0,1,6.64,0L720.9,356.6a4.7,4.7,0,0,1,0,6.65,4.7,4.7,0,0,1-6.64,0l-20.44-20.44a4.7,4.7,0,0,1,0-6.65ZM937.58,622.28,620.5,939.36,408.18,1151.68-137.94,1697.8a49.12,49.12,0,0,1-69.38,0l-433.41-433.42a49.1,49.1,0,0,1,0-69.37L434.79,119.49a49.1,49.1,0,0,1,69.36,0L654.82,270.16a10.64,10.64,0,0,1-1.36,13.37L647,290a25.13,25.13,0,0,0,0,35.53l84.54,84.53a25.12,25.12,0,0,0,35.54,0l6.51-6.51a10.61,10.61,0,0,1,13.36-1.35L937.57,552.91A49.12,49.12,0,0,1,937.58,622.28Z"
  />
</g>
</g>`,
    `<g id="_8" data-name="8">
<g class="cls-100">
  <path
    class="cls-200"
    d="M960.14,644.84-115.38,1720.36a81,81,0,0,1-114.5,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-145.88,655,71.65,437.49,293.56,215.58,412.22,96.92a81.11,81.11,0,0,1,88.13-17.6q14.26,9.63,28.33,19.54L960.15,530.34c.9.9,1.77,1.81,2.61,2.74q6.13,8.7,12.14,17.47A81.1,81.1,0,0,1,960.14,644.84Z"
  />
  <path
    class="cls-200"
    d="M842.57,762.41l-957.95,958a81,81,0,0,1-114.5,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-145.88,655,71.65,437.49,293.56,215.58q14.16,8.34,28.14,17A1566,1566,0,0,1,825.48,734.36Q834.17,748.3,842.57,762.41Z"
  />
  <path
    class="cls-200"
    d="M621,984l-736.33,736.33a81,81,0,0,1-114.5,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-145.88,655,71.65,437.49q14.92,7.58,29.6,15.54a1262.35,1262.35,0,0,1,504,501.53Q613.31,969.17,621,984Z"
  />
  <path
    class="cls-200"
    d="M403.9,1201.08l-519.28,519.28a81,81,0,0,1-114.5,0L-663.31,1287a81.06,81.06,0,0,1,0-114.51L-145.88,655q16.15,6.27,32,13.12a972.28,972.28,0,0,1,504.46,501.1Q397.53,1185,403.9,1201.08Z"
  />
</g>
<g id="_9-2" data-name="9">
  <path
    class="cls-300"
    d="M974.9,550.55a80.33,80.33,0,0,0-12.14-17.47c-.84-.93-1.71-1.84-2.61-2.74L528.68,98.86l-1.95-2a81,81,0,0,0-114.51,0L293.56,215.58,71.65,437.49-145.88,655-663.3,1172.44a81.06,81.06,0,0,0,0,114.51l433.43,433.42a81,81,0,0,0,114.5,0L960.14,644.84A81.1,81.1,0,0,0,974.9,550.55Zm-301-223.82a7.24,7.24,0,0,1,10.24,0l37.92,37.92a7.24,7.24,0,0,1,0,10.23,7.24,7.24,0,0,1-10.22,0L673.93,337A7.22,7.22,0,0,1,673.92,326.73Zm-85-90.47a15.59,15.59,0,1,1,0,22.05A15.58,15.58,0,0,1,589,236.26Zm348.62,386L-137.95,1697.79a49.1,49.1,0,0,1-69.36,0l-433.42-433.42a49.11,49.11,0,0,1,0-69.37l526.87-526.87L101.25,453,434.79,119.49a49.11,49.11,0,0,1,69.37,0L580.64,196l-16.73,16.73a29.45,29.45,0,0,0,0,41.64L794.47,484.89a29.43,29.43,0,0,0,41.63,0l16.73-16.73,84.75,84.75A49.1,49.1,0,0,1,937.57,622.27Z"
  />
</g>
</g>`,
    `<g id="_9" data-name="9">
<g class="cls-100">
  <path
    class="cls-200"
    d="M998.52,605.6a31.85,31.85,0,0,1-4,4.85L615.11,989.88l-215,215-549.9,549.9a32.37,32.37,0,0,1-45.72,0L-697.7,1252.56a32.36,32.36,0,0,1,0-45.72l531-531L53.14,456,276.45,232.68,441.32,67.81A1785.57,1785.57,0,0,1,633.86,204.05L896.43,466.62Q950.73,533.52,998.52,605.6Z"
  />
  <path
    class="cls-200"
    d="M835.48,769.51,615.11,989.88l-215,215-549.9,549.9a32.37,32.37,0,0,1-45.72,0L-697.7,1252.56a32.36,32.36,0,0,1,0-45.72l531-531L53.14,456,276.45,232.68q14.39,8.13,28.58,16.57A1565.81,1565.81,0,0,1,818,741.9Q826.88,755.61,835.48,769.51Z"
  />
  <path
    class="cls-200"
    d="M615.11,989.88l-215,215-549.9,549.9a32.37,32.37,0,0,1-45.72,0L-697.7,1252.56a32.36,32.36,0,0,1,0-45.72l531-531L53.14,456q15.21,7.27,30.18,15A1262.17,1262.17,0,0,1,598.87,961Q607.18,975.31,615.11,989.88Z"
  />
  <path
    class="cls-200"
    d="M400.13,1204.87l-549.9,549.9a32.37,32.37,0,0,1-45.72,0L-697.7,1252.56a32.36,32.36,0,0,1,0-45.72l531-531q16.57,5.85,32.86,12.28C94.83,778.36,281,953.08,386,1173.83Q393.35,1189.21,400.13,1204.87Z"
  />
</g>
<g id="_10-2" data-name="10">
  <path
    class="cls-300"
    d="M994.54,564.73,492.33,62.52a32.37,32.37,0,0,0-45.72,0l-5.29,5.29L276.45,232.68,53.14,456-166.73,675.87l-531,531a32.36,32.36,0,0,0,0,45.72l502.21,502.21a32.37,32.37,0,0,0,45.72,0l549.9-549.9,215-215L994.54,610.45a31.85,31.85,0,0,0,4-4.85A32.35,32.35,0,0,0,994.54,564.73ZM681.07,309.15a5.14,5.14,0,0,1,7.27,0l63.33,63.33a5.14,5.14,0,1,1-7.27,7.27l-63.33-63.33A5.15,5.15,0,0,1,681.07,309.15Zm261,308.64L818,741.9,598.87,961,386,1173.83-172.34,1732.2a.42.42,0,0,1-.58,0L-675.13,1230a.41.41,0,0,1,0-.58L305,249.25,439.65,114.62a12.58,12.58,0,0,1,13.57,2.49L939.8,603.68A12.65,12.65,0,0,1,942.06,617.79Z"
  />
</g>
</g>`,
    `<g id="_10" data-name="10">
<g class="cls-100">
  <path
    class="cls-200"
    d="M966.38,637.84a80.31,80.31,0,0,1-6.24,7L800.94,804l-916.32,916.32a81,81,0,0,1-114.51,0L-663.31,1287a81.07,81.07,0,0,1,0-114.51L-156.81,666h0L56.11,453,412.22,96.92A80.41,80.41,0,0,1,446,76.7,1792.52,1792.52,0,0,1,966.38,637.84Z"
  />
  <path
    class="cls-200"
    d="M800.94,804l-916.32,916.32a81,81,0,0,1-114.51,0L-663.31,1287a81.07,81.07,0,0,1,0-114.51L-156.81,666h0L56.11,453,275.24,233.9q13.67,8.85,27.13,18A1565.71,1565.71,0,0,1,784.88,775Q793.07,789.41,800.94,804Z"
  />
  <path
    class="cls-200"
    d="M575.94,1029l-691.32,691.32a81,81,0,0,1-114.51,0L-663.31,1287a81.07,81.07,0,0,1,0-114.51L-156.81,666h0L56.11,453q14.27,8.22,28.3,16.84A1262,1262,0,0,1,561.64,998.2Q569,1013.5,575.94,1029Z"
  />
  <path
    class="cls-200"
    d="M353.17,1251.81l-468.55,468.55a81,81,0,0,1-114.51,0L-663.31,1287a81.07,81.07,0,0,1,0-114.51L-156.81,666h0q15.24,7.23,30.17,15c216.91,112.33,386,304.23,468.5,537.06Q347.82,1234.74,353.17,1251.81Z"
  />
</g>
<g id="_11-2" data-name="11">
  <path
    class="cls-300"
    d="M960.14,530.35,526.72,96.92a81,81,0,0,0-114.5,0L56.11,453-156.8,666h0L-663.3,1172.44a81.07,81.07,0,0,0,0,114.51l433.42,433.42a81,81,0,0,0,114.51,0L800.94,804l159.2-159.2a80.9,80.9,0,0,0,0-114.49Zm-39,108.31L784.88,775,561.64,998.2l-699.59,699.59a49.1,49.1,0,0,1-69.36,0l-433.43-433.42a49.11,49.11,0,0,1,0-69.37L418.4,135.88l.05.05a19.78,19.78,0,0,1,28,0L920,609.46a19.79,19.79,0,0,1,0,28Z"
  />
</g>
</g>`,
    `<g id="_11" data-name="11">
<g class="cls-100">
  <path
    class="cls-200"
    d="M940.84,664.15,776.41,828.57,554,1051l-218.4,218.39-461.4,461.4a66.31,66.31,0,0,1-93.66,0l-454.26-454.26a66.3,66.3,0,0,1,0-93.66L-204,713.14,12.25,496.9,233.39,275.76,397.16,112A1792.74,1792.74,0,0,1,940.84,664.15Z"
  />
  <path
    class="cls-200"
    d="M776.41,828.57,554,1051l-218.4,218.39-461.4,461.4a66.31,66.31,0,0,1-93.66,0l-454.26-454.26a66.3,66.3,0,0,1,0-93.66L-204,713.14,12.25,496.9,233.39,275.76q14,8.49,27.87,17.26A1566,1566,0,0,1,759.58,800.26Q768.15,814.32,776.41,828.57Z"
  />
  <path
    class="cls-200"
    d="M554,1051l-218.4,218.39-461.4,461.4a66.31,66.31,0,0,1-93.66,0l-454.26-454.26a66.3,66.3,0,0,1,0-93.66L-204,713.14,12.25,496.9Q27,504.64,41.5,512.78a1262.26,1262.26,0,0,1,497.16,508.4Q546.52,1036,554,1051Z"
  />
  <path
    class="cls-200"
    d="M335.59,1269.39l-461.4,461.4a66.31,66.31,0,0,1-93.66,0l-454.26-454.26a66.3,66.3,0,0,1,0-93.66L-204,713.14q15.92,6.51,31.53,13.6a972.28,972.28,0,0,1,495.25,510.31Q329.48,1253.07,335.59,1269.39Z"
  />
</g>
<g id="_12" data-name="12">
  <path
    class="cls-300"
    d="M970.57,540.76,516.31,86.5a66.29,66.29,0,0,0-93.66,0L397.16,112,233.39,275.76,12.25,496.9-204,713.14l-469.74,469.73a66.3,66.3,0,0,0,0,93.66l454.26,454.26a66.31,66.31,0,0,0,93.66,0l461.4-461.4L554,1051,776.41,828.57,940.84,664.15l29.73-29.73A66.31,66.31,0,0,0,970.57,540.76ZM654.43,338.54l64.08,64.08a5.76,5.76,0,1,1-8.14,8.15l-64.08-64.09a5.76,5.76,0,1,1,8.14-8.14Zm-29.31-21.17a12.46,12.46,0,1,1,0-17.62A12.46,12.46,0,0,1,625.12,317.37ZM759.58,800.26,538.66,1021.18l-687,687a34.35,34.35,0,0,1-48.52,0L-651.16,1254a34.35,34.35,0,0,1,0-48.52L384.3,170,887.08,672.76Z"
  />
</g>
</g>`,
    `<g id="_12" data-name="12">
 <g class="cls-100">
   <path
     class="cls-200"
     d="M960.26,617.22a80.66,80.66,0,0,1-16.51,23.85L799,785.86,577.07,1007.75,359.59,1225.23l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-679.7,1283.17a81.06,81.06,0,0,1,0-114.51L-186.84,675.8,30.26,458.7,251.91,237.05,395.82,93.14a80.51,80.51,0,0,1,25-17q19.53,12.57,38.72,25.65,24.6,16.75,48.61,34.31A1794.09,1794.09,0,0,1,897.35,525.3q19.47,26.63,38,54Q948,598.08,960.26,617.22Z"
   />
   <path
     class="cls-200"
     d="M799,785.86,577.07,1007.75,359.59,1225.23l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-679.7,1283.17a81.06,81.06,0,0,1,0-114.51L-186.84,675.8,30.26,458.7,251.91,237.05Q266,245.45,280,254.14a1565.94,1565.94,0,0,1,502,503.59Q790.6,771.7,799,785.86Z"
   />
   <path
     class="cls-200"
     d="M577.07,1007.75,359.59,1225.23l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-679.7,1283.17a81.06,81.06,0,0,1,0-114.51L-186.84,675.8,30.26,458.7q14.86,7.64,29.48,15.66a1262.27,1262.27,0,0,1,501.78,503.8Q569.49,992.83,577.07,1007.75Z"
   />
   <path
     class="cls-200"
     d="M359.59,1225.23l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-679.7,1283.17a81.06,81.06,0,0,1,0-114.51L-186.84,675.8q16.08,6.35,31.86,13.28a972.26,972.26,0,0,1,501.43,504.14Q353.3,1209.07,359.59,1225.23Z"
   />
 </g>
 <g id="_13-2" data-name="13">
   <path
     class="cls-300"
     d="M-250.06,1720.37-683.48,1287a81.06,81.06,0,0,1,0-114.51L392.05,96.92a81.06,81.06,0,0,1,114.51,0L940,530.34a81.06,81.06,0,0,1,0,114.51L-135.55,1720.37A81.06,81.06,0,0,1-250.06,1720.37ZM484,119.49a49.09,49.09,0,0,0-69.36,0L-660.91,1195a49.12,49.12,0,0,0,0,69.37l433.42,433.42a49.1,49.1,0,0,0,69.37,0L917.41,622.28a49.12,49.12,0,0,0,0-69.37Z"
   />
   <path
     class="cls-300"
     d="M539.87,241.26a20.42,20.42,0,0,1-28.89,0l-62.83-62.84A20.43,20.43,0,0,1,477,149.53l62.83,62.84A20.42,20.42,0,0,1,539.87,241.26Z"
   />
 </g>
</g>`,
    `<g id="_13" data-name="13">
<g class="cls-100">
  <path
    class="cls-200"
    d="M956.48,621A80.66,80.66,0,0,1,940,644.85L795.18,789.64,573.29,1011.53,355.81,1229l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-683.48,1287a81.06,81.06,0,0,1,0-114.51l492.86-492.86,217.1-217.1L248.13,240.83,392,96.92a80.51,80.51,0,0,1,25-17q19.53,12.57,38.72,25.65,24.6,16.75,48.61,34.31A1794.09,1794.09,0,0,1,893.57,529.08q19.47,26.63,38,54Q944.25,601.86,956.48,621Z"
  />
  <path
    class="cls-200"
    d="M795.18,789.64,573.29,1011.53,355.81,1229l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-683.48,1287a81.06,81.06,0,0,1,0-114.51l492.86-492.86,217.1-217.1L248.13,240.83q14.13,8.4,28.06,17.09a1565.94,1565.94,0,0,1,502,503.59Q786.82,775.48,795.18,789.64Z"
  />
  <path
    class="cls-200"
    d="M573.29,1011.53,355.81,1229l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-683.48,1287a81.06,81.06,0,0,1,0-114.51l492.86-492.86,217.1-217.1Q41.35,470.12,56,478.14a1262.27,1262.27,0,0,1,501.78,503.8Q565.7,996.61,573.29,1011.53Z"
  />
  <path
    class="cls-200"
    d="M355.81,1229l-491.36,491.36a81.06,81.06,0,0,1-114.51,0L-683.48,1287a81.06,81.06,0,0,1,0-114.51l492.86-492.86q16.08,6.34,31.86,13.28A972.26,972.26,0,0,1,342.67,1197Q349.53,1212.86,355.81,1229Z"
  />
</g>
<g id="_14" data-name="14">
  <path
    class="cls-300"
    d="M940,530.34,506.55,96.93a81.05,81.05,0,0,0-114.51,0L-683.48,1172.44a81.06,81.06,0,0,0,0,114.51l433.42,433.42a81.06,81.06,0,0,0,114.51,0L940,644.85A81.07,81.07,0,0,0,940,530.34ZM724.57,415.15a19.28,19.28,0,1,1-27.27,0A19.27,19.27,0,0,1,724.57,415.15ZM662.71,350a10.46,10.46,0,0,1,14.8,0l13.83,13.83a10.46,10.46,0,0,1,0,14.79l-1,1a10.47,10.47,0,0,1-14.79,0l-13.83-13.83a10.47,10.47,0,0,1,0-14.8Zm-38.3,13.7a6.69,6.69,0,0,1,9.46,0l43.77,43.78a6.69,6.69,0,0,1,0,9.46l-.47.47a6.68,6.68,0,0,1-9.46,0l-43.78-43.78a6.69,6.69,0,0,1,0-9.45Zm6-54.11a23.51,23.51,0,1,1-33.25,0A23.5,23.5,0,0,1,630.43,309.61ZM-158.12,1697.79a49,49,0,0,1-69.37,0l-433.42-433.41a49.05,49.05,0,0,1,0-69.37L414.61,119.49a49.09,49.09,0,0,1,69.37,0L604.45,240a20.33,20.33,0,0,1,0,28.75L572,301.18a36.53,36.53,0,0,0,0,51.68l112,112a36.53,36.53,0,0,0,51.68,0l32.46-32.46a20.33,20.33,0,0,1,28.75,0L917.39,552.91a49,49,0,0,1,0,69.37Z"
  />
</g>
</g>`,
    ` <g id="_14" data-name="14">
    <g class="cls-100">
    <path
      class="cls-200"
      d="M1109.14,736.75-167.07,2013a96.19,96.19,0,0,1-135.88,0l-514.29-514.29a96.19,96.19,0,0,1,0-135.88L459,86.58A95.36,95.36,0,0,1,488.61,66.4q23.19,14.92,45.95,30.44,29.21,19.88,57.68,40.71,22.26,16.29,44.1,33.13L1021,555.3q16.85,21.81,33.13,44.09,23.1,31.59,45.05,64.07,15.07,22.29,29.6,45A95.94,95.94,0,0,1,1109.14,736.75Z"
    />
    <path
      class="cls-200"
      d="M937.33,908.56,674,1171.86,416,1429.92l-583,583a96.19,96.19,0,0,1-135.88,0l-514.29-514.29a96.19,96.19,0,0,1,0-135.88L-232.42,778,25.19,520.36l263-263q16.77,10,33.3,20.28A1858,1858,0,0,1,917.13,875.19Q927.41,891.75,937.33,908.56Z"
    />
    <path
      class="cls-200"
      d="M674,1171.86,416,1429.92l-583,583a96.19,96.19,0,0,1-135.88,0l-514.29-514.29a96.19,96.19,0,0,1,0-135.88L-232.42,778,25.19,520.36q17.64,9.06,35,18.58a1497.79,1497.79,0,0,1,595.4,597.81Q665,1154.15,674,1171.86Z"
    />
    <path
      class="cls-200"
      d="M416,1429.92l-583,583a96.19,96.19,0,0,1-135.88,0l-514.29-514.29a96.19,96.19,0,0,1,0-135.88L-232.42,778q19.1,7.53,37.81,15.76a1153.64,1153.64,0,0,1,595,598.21Q408.53,1410.75,416,1429.92Z"
    />
    </g>
    <g id="_15" data-name="15">
      <path
        class="cls-300"
        d="M1116.09,650.44,545.27,79.62a72.17,72.17,0,0,0-102,0l-957.65,957.65A71.72,71.72,0,0,0-535,1080.55a72,72,0,0,0,20.67,58.68L56.48,1710.05a72.16,72.16,0,0,0,102,0L1116.08,752.4A72.17,72.17,0,0,0,1116.09,650.44ZM138.33,1690a43.7,43.7,0,0,1-61.75,0l-570.82-570.82a43.7,43.7,0,0,1,0-61.75L463.41,99.72a43.72,43.72,0,0,1,61.76,0L1096,670.54a43.72,43.72,0,0,1,0,61.76Z"
      />
    </g>
  </g>`,
  ]

  // The svg file that is going to be modified based
  // on the "devices.json" file and get exported as .svg
  let svg_image = `
<svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 1080"
    >
      <defs>
        <style>
          .cls-1 {
            fill: url(#radial-gradient);
          }
          .cls-2 {
            opacity: 0.58;
          }
          .cls-3 {
            fill: #26292b;
            opacity: 0.57;
          }
          .cls-4 {
            fill: #262728;
          }
          .cls-5 {
            fill: url(#linear-gradient);
          }
          .cls-6 {
            fill: url(#linear-gradient-2);
          }
          .cls-12,
          .cls-7,
          .cls-8 {
            fill: #d3d3d3;
            color: #d3d3d3;
          }
          .cls-8 {
            font-size: 34.7px;
            font-family: Montserrat-Regular, Montserrat;
          }
          .cls-9 {
            letter-spacing: -0.01em;
          }
          .cls-10 {
            opacity: 0.65;
          }
          .cls-11 {
            fill: #818081;
          }
          .cls-12 {
            font-size: 58.91px;
            font-family: Montserrat-ExtraBold, Montserrat;
            font-weight: 700;
          }
          .cls-13 {
            letter-spacing: 0em;
          }
          .cls-14 {
            letter-spacing: 0em;
          }
          .cls-15 {
            letter-spacing: -0.01em;
          }
          .cls-16,
          .cls-17,
          .cls-18 {
            font-size: 46.57px;
            font-family: Montserrat-ExtraBoldItalic, Montserrat;
            font-style: italic;
          }
          .cls-16 {
            letter-spacing: -0.01em;
          }
          .cls-17 {
            letter-spacing: 0em;
          }
          .cls-18 {
            letter-spacing: 0em;
          }

          .cls-100 {
            opacity: 0.58;
          }
          .cls-200 {
            fill: #26292b;
            opacity: 0.57;
          }
          .cls-300 {
            fill: #262728;
          }
        </style>
        <radialGradient
          id="radial-gradient"
          cx="1918"
          cy="14.88"
          r="581.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#424956" />
          <stop offset="0.09" stop-color="#383e48" />
          <stop offset="0.27" stop-color="#292b32" />
          <stop offset="0.47" stop-color="#1e1e22" />
          <stop offset="0.69" stop-color="#171619" />
          <stop offset="1" stop-color="#151416" />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="360.73"
          y1="441.22"
          x2="587.16"
          y2="441.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#8eadd4" />
          <stop offset="1" stop-color="#f2acc2" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="342.89"
          y1="659.76"
          x2="581.49"
          y2="659.76"
          xlink:href="#linear-gradient"
        />
      </defs>
      <title>banner</title>
      <rect id="BG" class="cls-1" width="1920" height="1080" />
      
      ${device_types[e.device_type]}

      <g id="EVO_Logo" data-name="EVO Logo">
        <path
          class="cls-5"
          d="M580.5,410.2H367.41a6.66,6.66,0,0,0-4.85,11.23l46,48.73a6.68,6.68,0,0,0,4.85,2.09H568.46a6.65,6.65,0,0,0,6.46-5.07L587,418.46A6.66,6.66,0,0,0,580.5,410.2Z"
        />
        <path
          class="cls-6"
          d="M447.19,622l89.7,77.89a6.67,6.67,0,0,1,2.19,6.2l-10.7,59.69a6.66,6.66,0,0,1-11,3.76L345.07,612.9a6.63,6.63,0,0,1-2-6.39l11.91-53a6.66,6.66,0,0,1,6.5-5.2H539.11a6.67,6.67,0,0,1,5.38,2.72l35.7,48.71a6.66,6.66,0,0,1-5.37,10.6H451.56A6.66,6.66,0,0,0,447.19,622Z"
        />
      </g>
      <g id="_13_Logo" data-name="13 Logo">
        <g id="g6323">
          <path
            class="cls-7"
            d="M1811.92,160.89c-4.28-5.31-5.89-9.68-6.46-17.5-.53-7.22-2.61-10-9.76-13-5-2.13-9.62-6-11.87-9.93-4.53-8-7.62-9.9-15.06-9.44-7.86.49-12.08-.44-17.36-3.86-6.88-4.46-11.06-4.46-17.94,0-5.28,3.42-9.5,4.35-17.36,3.86-4.53-.28-6.9.32-9.84,2.5-1.82,1.36-2.25,1.92-5.19,6.9a25.84,25.84,0,0,1-12.49,10.2c-6.43,2.59-8.61,5.78-9.27,13.57s-2,11.31-6.37,16.74c-4.75,5.93-5.16,9.79-1.82,17a25,25,0,0,1,1.95,17.4c-1.48,7.16.08,11.11,6.18,15.59,5.38,3.95,7.83,7.66,10.18,15.39,1.89,6.27,5,8.89,12.15,10.1,6.85,1.17,10.79,3.24,15.64,8.18,2.91,3,5,4.33,7.47,4.92,2.74.65,5,.4,9.3-1a24.69,24.69,0,0,1,17,0c7.49,2.46,11.34,1.55,16.7-3.94,4.83-5,8.77-7,15.64-8.2,7.1-1.21,10.26-3.83,12.16-10.1,2.34-7.73,4.79-11.44,10.17-15.39,6.1-4.48,7.66-8.43,6.17-15.59a25,25,0,0,1,2-17.4C1817.09,170.67,1816.68,166.81,1811.92,160.89Zm-79.11,56.84H1719V150h-11.88V136.17h25.69ZM1742,221l1.83-4.55,1.42-3.45,1.78-4.83c12.33,4.22,23.64-4.31,23.77-15.78,0-12.56-9.68-17.63-18.5-18.24l-5.66-.7,5.75-11.85,5.8-11.59-6.82-.09-6.92-.09V136.17h36.22l-6.9,13.8-6.9,13.8c12.18,6.13,17.93,17,17.93,28.28A31.17,31.17,0,0,1,1742,221Z"
          />
        </g>
      </g>

      <text class="cls-8" text-anchor="end" transform="translate(1800 1002.18)">
        Maintainer: ${e.maintainer}
        <tspan class="cls-9" y="0"></tspan>
      </text>

      <g id="Text">
        <g class="cls-10">
          <polygon
            class="cls-11"
            points="806.54 454.5 772.13 412.96 753.98 412.96 753.98 490.92 775.58 490.92 775.58 449.37 809.99 490.92 828.15 490.92 828.15 412.96 806.54 412.96 806.54 454.5"
          />
          <polygon
            class="cls-11"
            points="863.56 459.62 898.2 459.62 898.2 443.14 863.56 443.14 863.56 430 902.88 430 902.88 412.96 841.73 412.96 841.73 490.92 904.32 490.92 904.32 473.88 863.56 473.88 863.56 459.62"
          />
          <polygon
            class="cls-11"
            points="998.36 463.18 982.61 412.96 962.35 412.96 945.84 462.71 930.16 412.96 907.44 412.96 932.72 490.92 956.33 490.92 971.91 443.44 986.85 490.92 1010.46 490.92 1035.73 412.96 1014.69 412.96 998.36 463.18"
          />
          <path
            class="cls-11"
            d="M1139.75,457a26.91,26.91,0,0,0,4.23-15.2,27.67,27.67,0,0,0-4.23-15.42,26.89,26.89,0,0,0-12-10,45,45,0,0,0-18.43-3.45h-35.64v78h22V470.2h12l14.13,20.71h23.61l-16.84-24.54A26.58,26.58,0,0,0,1139.75,457Zm-21.44-23.66q3.4,3,3.4,8.46a10.54,10.54,0,0,1-3.4,8.35q-3.39,3-10.3,3h-12.25V430.33H1108Q1114.91,430.33,1118.31,433.34Z"
          />
          <polygon
            class="cls-11"
            points="1175.94 459.62 1210.58 459.62 1210.58 443.14 1175.94 443.14 1175.94 430 1215.26 430 1215.26 412.96 1154.12 412.96 1154.12 490.92 1216.7 490.92 1216.7 473.88 1175.94 473.88 1175.94 459.62"
          />
          <polygon
            class="cls-11"
            points="1249 412.96 1226.95 412.96 1226.95 490.92 1286.2 490.92 1286.2 473.43 1249 473.43 1249 412.96"
          />
          <polygon
            class="cls-11"
            points="1314.7 459.62 1349.34 459.62 1349.34 443.14 1314.7 443.14 1314.7 430 1354.02 430 1354.02 412.96 1292.88 412.96 1292.88 490.92 1355.46 490.92 1355.46 473.88 1314.7 473.88 1314.7 459.62"
          />
          <path
            class="cls-11"
            d="M1390.77,413l-34.41,78h22.49l6.08-15.14H1418l6.08,15.14H1447l-34.52-78Zm.69,46.55,10-24.93,10,24.93Z"
          />
          <path
            class="cls-11"
            d="M1504.47,450.54a36.13,36.13,0,0,0-8.63-4c-3.15-1-6.31-1.83-9.46-2.5s-6.05-1.32-8.69-1.95a21.41,21.41,0,0,1-6.35-2.45,4.61,4.61,0,0,1-2.39-4.06,5.66,5.66,0,0,1,1.22-3.57,8.42,8.42,0,0,1,4-2.5,23.45,23.45,0,0,1,7.35-.95,39.84,39.84,0,0,1,10.58,1.5,53,53,0,0,1,11,4.51l6.79-16.37a48.29,48.29,0,0,0-13.2-5.07,66.2,66.2,0,0,0-15.09-1.72q-11.46,0-19.15,3.45A26.66,26.66,0,0,0,1451,424a22.18,22.18,0,0,0-3.84,12.7,18.66,18.66,0,0,0,8.8,16.87,37.67,37.67,0,0,0,8.63,4.07,89.22,89.22,0,0,0,9.47,2.56c3.15.67,6,1.33,8.63,2a22.16,22.16,0,0,1,6.34,2.56,4.79,4.79,0,0,1,2.45,4.24,4.66,4.66,0,0,1-1.28,3.28,8.92,8.92,0,0,1-4.06,2.23,26.27,26.27,0,0,1-7.35.83,44.81,44.81,0,0,1-13.64-2.17,51,51,0,0,1-12.09-5.51l-7.24,16.26a48.12,48.12,0,0,0,14.43,6.18,70.09,70.09,0,0,0,18.43,2.39q11.58,0,19.21-3.45a26.45,26.45,0,0,0,11.47-9.19,22.05,22.05,0,0,0,3.84-12.53,19.91,19.91,0,0,0-2.39-10.19A19.52,19.52,0,0,0,1504.47,450.54Z"
          />
          <polygon
            class="cls-11"
            points="1543.12 473.88 1543.12 459.62 1577.75 459.62 1577.75 443.14 1543.12 443.14 1543.12 430 1582.43 430 1582.43 412.96 1521.29 412.96 1521.29 490.92 1583.88 490.92 1583.88 473.88 1543.12 473.88"
          />
        </g>
        
        <switch>
        <foreignObject width="1000" height="500" transform="translate(750.6 500) ">
          <p xmlns="http://www.w3.org/1999/xhtml" class="cls-12">
          ${e.device_name} <tspan class="cls-16" y="0">${e.codename}</tspan>
          </p>
        </foreignObject>
      </switch>
      </g>
    </svg>
`

  // Writes the .svg files
  fs.writeFile(
    path.join(__dirname, 'files', `${index + 1}_${e.codename}.svg`),
    svg_image,
    (err) => {
      if (err) throw err
      console.log('Write complete')
    }
  )
})
