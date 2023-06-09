import React from 'react';

class WaktuDanTanggal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waktu: new Date().toLocaleTimeString(),
      tanggal: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      waktu: new Date().toLocaleTimeString(),
      tanggal: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    });
  }

  render() {
    return (
      <div>
        <center>
          <h3>{this.state.waktu}</h3>
          <p>Tanggal: {this.state.tanggal}</p>
        </center>
      </div>
    );
  }
}

export default WaktuDanTanggal;
