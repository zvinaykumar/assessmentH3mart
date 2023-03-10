import React, { Fragment } from 'react';
import { Button, Table, Typography } from 'antd';
import { Col, Row } from 'antd';
import axios from 'axios';
import getData from '../services/request';



const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      // const price  =  record.priceUsd
      console.log(record)
      return (
        <>
        <div>
          <img src=''></img>
          <p>{record.name}</p>
          <p>{record.symbol}</p>

          
        </div>
        </>
      )
    },
  },
  {
    title: 'Price Usd',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    render: (text, record) => {
      const price  =  record.priceUsd
      return Number(price).toFixed(2);
    },
   
  },
  {
    title: 'marketCapUsd',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    render: (text, record) => {
      const price  =  record.marketCapUsd
      return Number(price).toFixed(2);
    },
  },
  {
    title: 'vwap24Hr',
    dataIndex: 'vwap24Hr',
    key: 'vwap24Hr',
    render: (text, record) => {
      const price  =  record.vwap24Hr
      return Number(price).toFixed(2);
    },
  },
  {
    title: 'supply',
    dataIndex: 'supply',
    key: 'supply',
    render: (text, record) => {
      const price  =  record.supply
      return Number(price).toFixed(2);
    },
  },
  {
    title: 'volumeUsd24Hr',
    dataIndex: 'volumeUsd24Hr',
    key: 'volumeUsd24Hr',
    render: (text, record) => {
      const price  =  record.volumeUsd24Hr
      return Number(price).toFixed(2);
    },
  },
  
  
];






class Home extends React.Component {

  constructor() {
    super();
    this.state = { coins: [] };
  }


  async componentDidMount() {
    const res = await getData()

    this.setState({ coins: res.data });

  }



  render() {
    return (
      <Fragment>
        {/* <Row className='main'> */}
        <div>
          <div className='main'>
            <div className='contant'>
              <div>
                <p>MARKET CAP</p>
                <p>CHF1.13T</p>
              </div>
              <div>
                <p>EXCHANGE VOL</p>
                <p>CHF33.34B</p>
              </div>
              <div>
                <p>ASSETS</p>
                <p>2,295</p>
              </div>
              <div>
                <p>EXCHANGES</p>
                <p>73</p>
              </div>
              <div>
                <p>MARKETS</p>
                <p>12,563</p>
              </div>
              <div>
                <p>BTC DOM INDEX</p>
                <p>35.2%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={this.state.coins}
            // {...tableProps}
            pagination={false}
            // dataSource={hasData ? data : []}
            // scroll={scroll}

            style={{ padding: '0 50px', marginTop: '-80px' }} />
          <div className='centerbutton'>

            <Button type="primary"
              // loading={loadings[2]}
              // onClick={() => enterLoading(2)}
              style={{ background: "rgb(24 198 131)", }} shape="round" >
              View More
            </Button>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default Home;