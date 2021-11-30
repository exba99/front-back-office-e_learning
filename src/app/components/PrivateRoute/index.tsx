/**
 *
 * PrivateRoute
 *
 */
import { memo } from 'react';
import { Redirect, Route } from 'react-router';

interface Props {
  component: any;
  exact: boolean;
  path: string;
}

export const PrivateRoute = memo((props: Props) => {
  const { component, ...rest } = props;
  const Component = component;

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('id_token') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
});
