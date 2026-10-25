
import type { TabsProps } from "../../types";

export const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => (

   <div className="tabs">{
      tabs.map((tab) => (
         <button
            key={tab}
            type="button"
            className={tab === activeTab ? 'tab is-active' : 'tab'}
            onClick={() => onChange(tab)}
         >
            {tab}
         </button>
      ))
   }
   </div>
);




