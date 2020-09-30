import React, { useState, useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  ContentContainer,
  UploadFilesModal,
} from '../../components';
import {
  SessionContext,
  ResumeProvider,
  UserListProvider,
  ContractsListProvider,
  MainSummaryProvider,
  MaterialsListProvider,
  ContractProvider,
} from '../../stores';
import { DashboardContainer } from './styles';
import ContractsList from '../ContractsList';
import MaterialList from '../MaterialList';
import MainContent from '../MainContent';
import AdminUsers from '../UsersList';
import Error404 from '../Error404';
import Contract from '../Contract';
import Resume from '../Resume';

const Dashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useContext(SessionContext);
  const { path } = useRouteMatch();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <DashboardContainer>
      <UploadFilesModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
      <AppBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      >
        {user.name}
      </AppBar>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleModalOpen={handleModalOpen}
      />
      <Switch>
        <Route path={path} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <MainSummaryProvider>
              <MainContent />
            </MainSummaryProvider>
          </ContentContainer>
        </Route>
        <Route path={`${path}/faenas/:faena/`} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <ResumeProvider>
              <Resume />
            </ResumeProvider>
          </ContentContainer>
        </Route>
        <Route path={`${path}/faenas/:faena/contratos/`} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <ContractsListProvider>
              <ContractsList />
            </ContractsListProvider>
          </ContentContainer>
        </Route>
        <Route path={`${path}/faenas/:faena/contratos/:contract`} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <ContractProvider>
              <Contract />
            </ContractProvider>
          </ContentContainer>
        </Route>
        <Route path={`${path}/faenas/:faena/materiales/`} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <MaterialsListProvider>
              <MaterialList />
            </MaterialsListProvider>
          </ContentContainer>
        </Route>
        <Route path={`${path}/users`} exact>
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <UserListProvider>
              <AdminUsers />
            </UserListProvider>
          </ContentContainer>
        </Route>
        <Route path="/">
          <ContentContainer isDrawerOpen={isDrawerOpen}>
            <Error404 />
          </ContentContainer>
        </Route>
      </Switch>
    </DashboardContainer>
  );
};

export default Dashboard;
