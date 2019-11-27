import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card";
import { StatsCard } from "components/StatsCard/StatsCard.js";
import {
  dataPie
} from "variables/Variables.js";

import './dashboard.scss';

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Best Score"
                statsValue="2087 pts."
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-notebook text-info" />}
                statsText="Recent theme"
                statsValue="Maths"
                statsIconText="Pragramming, Chemistry, ..."
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-stopwatch text-info" />}
                statsText="Time spent"
                statsValue="00h49 min"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="time in hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-cup text-warning" />}
                statsText="Place in the team"
                statsValue="12/27"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Game in progress"
                category=""
                stats="last connexion :  3 minutes ago"
                content={
                  <div className="ct-chart">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown print crambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into <br />electronic
                  typesetting, remaining essentially unchanged. <br />It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, <br />
                    and more recently with desktop publishing software <br />like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                   
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Chat"
                content={
                  <div className="ct-chart">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown print crambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into <br />electronic
                  typesetting, remaining essentially unchanged. <br />It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, <br />
                    and more recently with desktop publishing software <br />like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />

                  </div>
                }

              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Other games"
                category="Start to play and collect stars"
                stats="Start"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into <br />electronic
                    typesetting, remaining essentially unchanged. <br />It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, <br />
                    and more recently with desktop publishing software <br />like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been  1500s,
                    when an unknown printer took a galley of type
                  </div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Gift"
                statsIcon="fa fa-history"
                content={
                  <div className="ct-chart table-full-width">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown print crambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into <br />electronic
                  typesetting, remaining essentially unchanged. <br />It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, <br />
                    and more recently with desktop publishing software <br />like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />

                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
