import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { userListInitialState, userListReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import SessionContext from './sessionStore';
import { URL } from '../config.json';

/**
 * User List Context
 */
const UserListContext = createContext();

/**
 * User List Provider
 * @param {Object} props
 * @param {Component} props.children
 */
export const UserListProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const initialSnackbarRef = useRef();
  const mountedRef = useRef(true);
  const [userListState, userListDispatch] = useReducer(
    userListReducer,
    userListInitialState
  );

  useEffect(() => {
    if (userListState.users.length === 0)
      initialSnackbarRef.current = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });
    return () => {
      mountedRef.current = false;
      closeSnackbar(initialSnackbarRef.current);
    };
  }, [userListState.users, enqueueSnackbar, closeSnackbar]);

  const getUsers = useCallback(async () => {
    const config = {
      headers: {
        authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(`${URL}/api/user/allUsers`, config);
      if (rawResponse.status !== 200) throw new Error('Session error.');
      const response = await rawResponse.json();
      const payload = {
        users: response,
      };
      userListDispatch({ type: 'USERS', payload });

      return true;
    } catch (error) {
      return false;
    }
  }, [token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const newUser = async ({ email, name, password, position, center }) => {
    const data = JSON.stringify({ email, name, password, position, center });

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: token,
      },
      body: `data=${encodeURIComponent(data)}`,
    };

    try {
      const rawResponse = await fetch(`${URL}/api/user/register`, config);
      const { msg } = await rawResponse.json();

      userListDispatch({ type: 'NEW_USER' });
      await getUsers(token);

      return { msg, state: true };
    } catch (error) {
      return false;
    }
  };

  const editUser = async ({ email, name, position, center }) => {
    const data = JSON.stringify({ email, name, position, center });

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: token,
      },
      body: `data=${encodeURIComponent(data)}`,
    };

    try {
      const rawResponse = await fetch(`${URL}/api/user/edit`, config);
      const { msg } = await rawResponse.json();

      userListDispatch({ type: 'EDIT_USER' });
      await getUsers();

      return { msg, state: true };
    } catch (error) {
      return false;
    }
  };

  const changeState = async (email) => {
    const config = {
      method: 'PUT',
      headers: {
        authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(
        `${URL}/api/user/changeState/${email}`,
        config
      );
      const { msg } = await rawResponse.json();

      userListDispatch({ type: 'CHANGE_STATE' });
      await getUsers(token);

      return { msg, state: true };
    } catch (error) {
      return false;
    }
  };

  return (
    <UserListContext.Provider
      value={{
        users: userListState.users,
        getUsers,
        newUser,
        editUser,
        changeState,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

UserListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserListContext;
