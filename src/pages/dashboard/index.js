import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import { gridSpacing } from '../../store/constant';

const Page = dynamic(() => import('components/ui-component/Page'));
const EarningCard = dynamic(() => import('components/dashboard/Default/EarningCard'));
const PopularCard = dynamic(() => import('components/dashboard/Default/PopularCard'));
const TotalOrderLineChartCard = dynamic(() => import('components/dashboard/Default/TotalOrderLineChartCard'));
const TotalIncomeDarkCard = dynamic(() => import('components/dashboard/Default/TotalIncomeDarkCard'));
const TotalIncomeLightCard = dynamic(() => import('components/dashboard/Default/TotalIncomeLightCard'));
const TotalGrowthBarChart = dynamic(() => import('components/dashboard/Default/TotalGrowthBarChart'));

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Page title="Default Dashboard">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <EarningCard isLoading={isLoading} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TotalOrderLineChartCard isLoading={isLoading} />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeDarkCard isLoading={isLoading} />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeLightCard isLoading={isLoading} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
              <TotalGrowthBarChart isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={4}>
              <PopularCard isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
