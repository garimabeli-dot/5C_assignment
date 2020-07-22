import React, { useState, useEffect } from "react";
import CompanyDetails from './CompanyDetails';
import { Row, Col, Card } from 'antd';
import '../style/App.css';
import "antd/dist/antd.css";
import { CheckCircleFilled } from '@ant-design/icons';

function App() {
  const [company, setCompany] = useState([]);
  const [companyDetail, setCompanyDetail] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/mralexgray/repos",
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setCompany(response);
      })
      .catch(error => console.log(error));
  }, []);

  const showDetail = (id, name, full_name, avatar_url, html_url) => {
    let companyObj = {
      id: id,
      name: name,
      full_name: full_name,
      avatar_url: avatar_url,
      html_url: html_url
    }
    setCompanyDetail(companyObj);
    setShowDetails(true);
  }
  return (
    <div className="App">
      {!showDetails ?
        <Row gutter={16} className="company-row">
          {company.map((c, index) => (
            <Col span={12} key={index} className="company-list">
              <Card
                className="create-card"
                key={c.id}
                onClick={() => showDetail(c.id, c.name, c.full_name, c.owner.avatar_url, c.owner.html_url)}
              >
                <Row>
                  <Col span={5} offset={3} className="company-icon">
                    <img
                      alt="Picture"
                      src={c.owner.avatar_url}
                      className="avatar"
                    />
                  </Col>
                  <Col span={16} className="company-desc">
                    <span className="color-highlight">{c.name}</span><CheckCircleFilled />
                    <br></br>
                    <div className="color-highlight-grey">{c.full_name}</div>
                  </Col>
                </Row>
              </Card>
            </Col>

          ))}
        </Row>
        :
        <CompanyDetails
          companyDetail={companyDetail}
        >
        </CompanyDetails>
      }
    </div>
  );
}

export default App;
