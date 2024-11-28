
import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar"
import Topbar from '@/scenes/global/TopBar';
import AppSidebar from "@/components/ui/appSidebar"
import Dashboard from '@/scenes/dashboard';
import Bar from '@/scenes/bar';
import Contacts from '@/scenes/contacts';
import Geography from '@/scenes/geography';
import Invoices from '@/scenes/invoices';
import Line from '@/scenes/line';
import Pie from '@/scenes/pie';
import Team from '@/scenes/team';
import Faq from '@/scenes/faq';
import Calendar from '@/scenes/calendar';
import Form from '@/scenes/form';
const App = () => {
  return (
    <div className='app'>
      <SidebarProvider>
        <AppSidebar />
        <main className='content'>
          {/* <SidebarTrigger /> */}
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default App