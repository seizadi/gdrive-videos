import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.listStreams();
  }

  renderList() {
    return this.props.streams.map( (stream) => {
      return (
        <div className="item" key={ stream.id } >
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/show/${stream.id}`}
                  className={'header'}
            >
              { stream.Topic }
            </Link>
            <div className="description">
              <h5>{stream.Presenter}</h5>
              { stream.Description }
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          { this.renderList() }
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn,
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams)
  };
};

export default connect(mapStateToProps, { listStreams })(StreamList);
