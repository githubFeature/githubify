'use strict';

import React from 'react';
//
import { Button } from 'react-bootstrap';
//
import ReposActions from '../../actions/ReposActions';

/**
 *  MoreButton contains button for pagination
 */
const MoreButton = React.createClass({

  loadMore() {
    ReposActions.getRepos(this.props.accessToken, this.props.nextPage);
  },

  render() {
    return (
      <div className="center-block text-center">
        { this.props.isScroll ?
            <Button
              id="more-button"
              bsStyle="primary"
              onClick={this.loadMore}
            >
              Load more repos...
            </Button> :
            null
        }
      </div>
    );
  }
});

export default MoreButton;
