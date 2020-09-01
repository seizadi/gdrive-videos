import React from "react";
import { connect } from 'react-redux';

import { getStream } from "../../actions";
import Loading from "../Loading";

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.getStream( this.props.match.params.id );
  }

  renderRecording() {
    const recording = this.props.stream.Recording;
    if (recording) {
      return(
        <div className={'ui embed'}>
          <iframe title={'Video Player'} src={recording} />
        </div>
      );
    }
  }

  render() {
    if ( !this.props.stream ) {
      return (
        <div className="ui container">
          <Loading show={true} message={'Loading'} />
        </div>
      );
    }

    const talk = this.props.stream;
    return(
      <div>
        {this.renderRecording()}
        <h1>{ talk.Topic }</h1>
        <h5>{ talk.Presenter}</h5>
        <h5>{ talk.Description }</h5>
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  return { stream: state.streams[ ownProps.match.params.id ]};
}

export default connect(mapStateToProps, { getStream })(StreamShow);
