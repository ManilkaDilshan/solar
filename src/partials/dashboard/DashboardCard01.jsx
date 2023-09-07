import React from 'react';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

import map from '../../images/map.png';

function DashboardCard01() {

  return (
    <div className="flex flex-col col-span-4 row-span-2 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Solar Radiation Map</h2>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow p-5">
        {/* Change the height attribute to adjust the chart height */}
        <img src={map} alt="" />
      </div>
    </div>
  );
}

export default DashboardCard01;
