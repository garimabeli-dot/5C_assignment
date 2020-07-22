import React from "react";
import { Row, Col, Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

function CompanyDetails(props) {
    return (
        <div className="company_details">
            <Row>
                <Col span={4} offset={6} className="detail-heading">
                    <img
                        alt="Picture"
                        src={props.companyDetail.avatar_url}
                    />
                    <div><CheckCircleFilled />
                        <span className="c1">Verified by GitHub</span>
                    </div>
                    <div className="c2 dark-grey">GitHub confirms that this app meets the 
                        <span className="color-highlight"> requirements for verification</span>.
                    </div>
                    <div className="color-highlight-grey">Categories</div>
                    <Button className="color-highlight">Code review</Button>
                    <Button className="color-highlight">IDEs</Button>
                    <Button className="color-highlight">Free</Button>
                    <Button className="color-highlight">Paid</Button>
                </Col>
                <Col span={9} offset={1} className="detail">
                    <div className="color-highlight-grey">Application </div>
                    <div className="one">{props.companyDetail.full_name}</div>
                    <div ><Button type="primary">Set up a plan</Button></div>
                    <div><span className="color-highlight two">{props.companyDetail.name}</span> 
                         <b> is the online IDE for GitHub.</b></div>
                    <div className="dark-grey">It launches a complete dev environment for any GitHub project,
                    by simply prefixing the GitHub URL with <b>{props.companyDetail.html_url}.</b></div>
                    <div className="dark-grey">Install this app and get your project prebuilt,
                    so you don't have to wait for your build downloading
                    the internet when starting a  {props.companyDetail.name} workspace.</div>
                    <div className="dark-grey">{props.companyDetail.name} is <b>the first IDE that builds your 
                        project before you even open it.</b></div>
                </Col>
            </Row>
        </div>
    );
}

export default CompanyDetails;
