import MainPanel from '../atoms/MainPanel';
import WelcomingPanel from '../atoms/WelcomingPanel';
import WhiteSection from '../atoms/WhiteSection';
import { useAuth } from '../hooks/AuthContext';
const Dashboard = () => {
  const { userName } = useAuth();
  return (
    <section>
      <div className="pt-16 flex justify-center mb-20 mx-4" style={{ paddingLeft: '80px' }}>
        <MainPanel>
          <WhiteSection>
            <div className="relative p-0 mb-[-20px] overflow-hidden rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DashboardPanels - 2/3 */}
            <div className="w-full md:col-span-3">
              <WelcomingPanel
                userName={userName || ''}
              />
            </div>
            {/* Leaderboard - 1/3 */}
          </div>
          </WhiteSection>
        </MainPanel>
      </div>
    </section>
  );
};

export default Dashboard;
