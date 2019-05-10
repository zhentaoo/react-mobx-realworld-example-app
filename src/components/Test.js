import ListErrors from './ListErrors';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@withRouter
@observer
class Test extends React.Component {

  // handleClickLogout = () =>
  //   this.props.authStore.logout()
  //     .then(() => this.props.history.replace('/'));

  render() {

    return (
      <div>
        TEST
      {JSON.stringify(this.props.commonStore.tags)}
      </div>
    );
  }
}

export default Test;
