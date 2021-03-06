import PropTypes from 'prop-types';
import React from 'react';

import {connect, ExportsContainer} from '../../containers';
import Export from './export';

class Exports extends React.Component {
  render() {
    const {exports, cancel, openInEditor} = this.props;

    return (
      <div>
        {
          exports.map(exp => (
            <Export
              {...exp}
              key={exp.createdAt}
              cancel={() => cancel(exp.createdAt)}
              openInEditor={() => openInEditor(exp.createdAt)}/>
          ))
        }
        <style jsx>{`
            flex: 1;
            overflow-y: auto;
        `}</style>
      </div>
    );
  }
}

Exports.propTypes = {
  exports: PropTypes.arrayOf(PropTypes.object),
  cancel: PropTypes.func,
  openInEditor: PropTypes.func
};

export default connect(
  [ExportsContainer],
  ({exports}) => ({exports}),
  ({cancel, openInEditor}) => ({cancel, openInEditor})
)(Exports);
