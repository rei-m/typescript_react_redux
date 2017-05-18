import * as React from 'react';
import { Props as FilterLinkProps } from '../containers/FilterLink';

export interface Props extends React.Props<{}> {
  active: boolean;
  onClick: () => void;
}

const Link = (props: Props & FilterLinkProps): JSX.Element => {

  if (props.active) {
    return <span>{props.children}</span>;
  }

  const handleOnClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <a href='#' onClick={handleOnClick}>
      {props.children}
    </a>
  );
};

export default Link;
