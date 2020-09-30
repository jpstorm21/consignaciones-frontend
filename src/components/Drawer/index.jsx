import React, { useContext, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ChevronLeft as ChevronLeftIcon,
  Home as HomeIcon,
  ExitToApp as LogoutIcon,
  Brightness3 as MoonIcon,
  Brightness7 as SunIcon,
  SupervisorAccount as AccountIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Apartment as ApartmentIcon,
  PieChart as PieChartIcon,
  FormatListBulleted as FormatListBulletedIcon,
  FormatListNumbered as FormatListNumberedIcon,
  Sync as SyncIcon,
} from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import {
  StyledDrawer,
  StyledSwitch,
  StyledDivider,
  StyledDrawerHeader,
  StyledIconButton,
  StyledLogo,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StyledDrawerFooter,
  StyledColapseList,
} from './styles';
import { ThemeContext, SessionContext } from '../../stores';

const Drawer = ({ isDrawerOpen, handleModalOpen, handleDrawerClose }) => {
  const { isDarkTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const [isItemsOpen, setItemsOpen] = useState([false, false, false, false]);
  const { logout, user } = useContext(SessionContext);
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleChangeTheme = () => {
    if (isDarkTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const colapseItem = (item) => () => {
    const newState = isItemsOpen.map((oldItem, index) =>
      index === item ? oldItem : false
    );
    newState[item] = !isItemsOpen[item];
    setItemsOpen(newState);
  };

  const link = (item, subitem) => async () => {
    if (item === 'general') history.push('/dashboard');
    if (item === 'users') history.push(`${path}/users`);

    if (item !== 'general' && item !== 'users')
      switch (subitem) {
        case 'resume':
          history.push(`${path}/faenas/${item}`);
          break;
        case 'agreement':
          history.push(`${path}/faenas/${item}/contratos`);
          break;
        case 'material':
          history.push(`${path}/faenas/${item}/materiales`);
          break;
        default:
          history.push('/');
      }
  };

  return (
    <StyledDrawer variant="persistent" anchor="left" open={isDrawerOpen}>
      <StyledDrawerHeader>
        <StyledLogo src="/img/amsa.png" />
        <StyledIconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </StyledIconButton>
      </StyledDrawerHeader>
      <StyledDivider />
      <StyledList>
        <StyledListItem button onClick={link('general')}>
          <StyledListItemIcon>
            <HomeIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Resumen General" />
        </StyledListItem>

        <StyledListItem button onClick={colapseItem(0)}>
          <StyledListItemIcon>
            <ApartmentIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Pelambres" />
          {isItemsOpen[0] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItem>

        <Collapse in={isItemsOpen[0]} timeout="auto" unmountOnExit>
          <StyledColapseList component="div" disablePadding>
            <StyledListItem button onClick={link('pelambres', 'resume')}>
              <StyledListItemIcon>
                <PieChartIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Resumen" />
            </StyledListItem>
            <StyledListItem button onClick={link('pelambres', 'agreement')}>
              <StyledListItemIcon>
                <FormatListBulletedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de contratos" />
            </StyledListItem>
            <StyledListItem button onClick={link('pelambres', 'material')}>
              <StyledListItemIcon>
                <FormatListNumberedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de Materiales" />
            </StyledListItem>
          </StyledColapseList>
        </Collapse>

        <StyledListItem button onClick={colapseItem(1)}>
          <StyledListItemIcon>
            <ApartmentIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Antucoya" />
          {isItemsOpen[1] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItem>

        <Collapse in={isItemsOpen[1]} timeout="auto" unmountOnExit>
          <StyledColapseList component="div" disablePadding>
            <StyledListItem button onClick={link('antucoya', 'resume')}>
              <StyledListItemIcon>
                <PieChartIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Resumen" />
            </StyledListItem>
            <StyledListItem button onClick={link('antucoya', 'agreement')}>
              <StyledListItemIcon>
                <FormatListBulletedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de contratos" />
            </StyledListItem>
            <StyledListItem button onClick={link('antucoya', 'material')}>
              <StyledListItemIcon>
                <FormatListNumberedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de Materiales" />
            </StyledListItem>
          </StyledColapseList>
        </Collapse>

        <StyledListItem button onClick={colapseItem(2)}>
          <StyledListItemIcon>
            <ApartmentIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Zaldivar" />
          {isItemsOpen[2] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItem>

        <Collapse in={isItemsOpen[2]} timeout="auto" unmountOnExit>
          <StyledColapseList component="div" disablePadding>
            <StyledListItem button onClick={link('zaldivar', 'resume')}>
              <StyledListItemIcon>
                <PieChartIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Resumen" />
            </StyledListItem>
            <StyledListItem button onClick={link('zaldivar', 'agreement')}>
              <StyledListItemIcon>
                <FormatListBulletedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de contratos" />
            </StyledListItem>
            <StyledListItem button onClick={link('zaldivar', 'material')}>
              <StyledListItemIcon>
                <FormatListNumberedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de Materiales" />
            </StyledListItem>
          </StyledColapseList>
        </Collapse>

        <StyledListItem button onClick={colapseItem(3)}>
          <StyledListItemIcon>
            <ApartmentIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Centinela" />
          {isItemsOpen[3] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItem>

        <Collapse in={isItemsOpen[3]} timeout="auto" unmountOnExit>
          <StyledColapseList component="div" disablePadding>
            <StyledListItem button onClick={link('centinela', 'resume')}>
              <StyledListItemIcon>
                <PieChartIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Resumen" />
            </StyledListItem>
            <StyledListItem button onClick={link('centinela', 'agreement')}>
              <StyledListItemIcon>
                <FormatListBulletedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de contratos" />
            </StyledListItem>
            <StyledListItem button onClick={link('centinela', 'material')}>
              <StyledListItemIcon>
                <FormatListNumberedIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Lista de Materiales" />
            </StyledListItem>
          </StyledColapseList>
        </Collapse>
      </StyledList>
      <StyledDrawerFooter>
        <StyledList>
          <StyledListItem>
            <StyledListItemIcon>
              {isDarkTheme ? <MoonIcon /> : <SunIcon />}
            </StyledListItemIcon>
            <StyledListItemText primary="Tema" />
            <StyledSwitch
              checked={isDarkTheme}
              onChange={handleChangeTheme}
              name="themeSwitch"
              inputProps={{ 'aria-label': 'Tema' }}
            />
          </StyledListItem>

          {user.type === 'Administrador' && (
            <StyledListItem button onClick={handleModalOpen}>
              <StyledListItemIcon>
                <SyncIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Actualizar Sistema" />
            </StyledListItem>
          )}

          {user.type === 'Administrador' && (
            <StyledListItem button onClick={link('users')}>
              <StyledListItemIcon>
                <AccountIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Administrar Usuarios" />
            </StyledListItem>
          )}

          <StyledListItem button onClick={logout}>
            <StyledListItemIcon>
              <LogoutIcon />
            </StyledListItemIcon>
            <StyledListItemText primary="Cerrar Sesión" />
          </StyledListItem>
        </StyledList>
      </StyledDrawerFooter>
    </StyledDrawer>
  );
};

Drawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Drawer;
