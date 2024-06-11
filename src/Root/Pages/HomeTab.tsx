// import { Tab } from "@mui/base/Tab"
// import { TabPanel } from "@mui/base/TabPanel"
// import { Tabs } from "@mui/base/Tabs"
// import { TabsList } from "@mui/base/TabsList"
// import PastEvents from "./PastEvents"
// import NewEvent from "./NewEvent"

// const HomeTab = () => {

//   return (
//     <>
//       <Tabs defaultValue={'newevent'} className="home-tab">
//         <TabsList className="tab-list">
//           <Tab id="tab-event-new" value={'newevent'} className="active-tab">
//             New Event
//           </Tab>
//           <Tab id="tab-event-past" value={'pastevents'} className="active-tab">
//             Past Events
//           </Tab>
//         </TabsList>
//         <TabPanel value={'newevent'}>
//           <NewEvent />
//         </TabPanel>
//         <TabPanel value={'pastevents'}>
//           <PastEvents />
//         </TabPanel>
//       </Tabs>
//     </>

//   )
// }

// export default HomeTab

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NewEvent from "./NewEvent";
import PastEvents from "./PastEvents";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    className: "text-indigo",
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="Home page Tabs">
          <Tab label="New Event" {...a11yProps(0)} />
          <Tab label="Past Events" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <NewEvent />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <PastEvents />
      </CustomTabPanel>
    </Box>
  );
}
