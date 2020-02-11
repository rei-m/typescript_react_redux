import { connect } from 'react-redux';
import { setVisibilityFilter, SetVisibilityFilterAction } from '../actions';
import Link from '../components/Link';
import { GlobalState } from '../reducers/index';
import { Dispatch } from 'redux';

export interface Props {
  filter: string;
}

const mapStateToProps = (state: GlobalState, props: Props) => {
  return {
    active: props.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<SetVisibilityFilterAction>,
  props: Props
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
