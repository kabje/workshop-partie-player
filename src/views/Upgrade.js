import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";

import Button from "components/CustomButton/CustomButton";

class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                hCenter
                title="Join all the players around the world"
                category="Practice and learn the fun way "
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center"> ASK TO JOIN</th>
                        <th className="text-center">ASK FOR HELP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Maths Team</td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            join
                          </Button></td>
                        <td><Button
                          target="_blank"
                          round
                          fill
                          bsStyle="info"
                        >
                          ask
                          </Button></td>
                      </tr>
                      <tr>
                        <td>Chemsstry Team</td>
                        <td><Button
                          target="_blank"
                          round
                          fill
                          bsStyle="info"
                        >
                          join
                          </Button></td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            ask
                          </Button></td>
                      </tr>
                      <tr>
                        <td>Programming Team</td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            join
                          </Button></td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            ask
                          </Button></td>
                      </tr>
                      <tr>
                        <td>History Team</td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            join
                          </Button>
                        </td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            ask
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Litterature Team</td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            join
                          </Button>
                        </td>
                        <td>
                          <Button
                            target="_blank"
                            round
                            fill
                            bsStyle="info"
                          >
                            ask
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
