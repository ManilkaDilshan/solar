import React from 'react';

function DashboardCard02() {

  return (
    <div className="flex flex-col col-span-4 row-span-1 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Anual Electricity Usage</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$17,489</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
