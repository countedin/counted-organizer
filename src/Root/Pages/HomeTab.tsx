import { Tab } from "@mui/base/Tab"
import { TabPanel } from "@mui/base/TabPanel"
import { Tabs } from "@mui/base/Tabs"
import { TabsList } from "@mui/base/TabsList"
import PastEvents from "./PastEvents"
import NewEvent from "./NewEvent"


const HomeTab = () => {

  return (
    <>
     <Tabs defaultValue={'newevent'} className="home-tab">
       <TabsList className="tab-list">
         <Tab id="tab-event" value={'newevent'}>
           New Event
         </Tab>
         <Tab id="tab-event" value={'pastevents'}>
           Past Events
         </Tab>
       </TabsList>
       <TabPanel  value={'newevent'}>
         <NewEvent/>
       </TabPanel>
       <TabPanel  value={'pastevents'}>
         <PastEvents/>
       </TabPanel>
     </Tabs>
    </>
  )  
}

export default HomeTab


