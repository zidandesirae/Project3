# PAGE BREAKDOWN

## Full breakdown - including each individual component
```
<NavBar />
<Container2>
    <Col10>
    <TitleH2 />
        <Card>
            ----------------------------------
            <Row>
                <Col>
                    <Description />
                </Col>
                <Col>
                    <UserData />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Description />
                </Col>
                <Col>
                    <UserData />
                </Col>
            </Row>
            -----------------------------------
            <Row>
                <Col>
                    <Description />
                    -----------------------
                    <Card>
                        <Row>
                            <Col>
                                <UserData/>
                            </Col>
                        </Row>
                        ---------------
                        <Row>
                            <Col6>
                                <Description />
                            </Col6>
                            <Col6>
                                <UserData />
                            </Col6>
                        </Row>
                        <Row>
                            <Col6>
                                <Description />
                            </Col6>
                            <Col6>
                                <UserData />
                            </Col6>
                        </Row>
                        <Row>
                            <Col6>
                                <Description />
                            </Col6>
                            <Col6>
                                <UserData />
                            </Col6>
                        </Row>
                        ---------------
                    </Card>
                    -----------------------
                </Col>
            </Row>
            -----------------------------------
        </Card>
    </Col10>
</Container2>
<Footer />
```


## Condensed Section
```
<GroupSegment />    =

<Row>
    <Col>
        <Description />
    </Col>
    <Col>
        <UserData />
    </Col>
</Row>
```
-----------------------------------------------------
```
<MemberSegment />   =

<Row>
    <Col>
        <Description />
        <MemberInfo />
    </Col>
</Row>
```
-----------------------------------------------------
```
<MemberInfo />     =

<Card>
    <Row>
        <Col>
            <UserData />
        </Col>
    </Row>
    <MemberSpecs />
    <MemberSpecs />
    <MemberSpecs />
</Card>
```
-----------------------------------------------------
```
<MemberSpecs />     =

<Row>
    <Col6>
        <Description />
    </Col6>
    <Col6>
        <UserData />
    </Col6>
</Row>
```

## Condensed Page Breakdown - used for App.js render (pages folder)
```
<NavBar />
<Container2>
    <Col10>
        <TitleH2 />
        <Card>
            <GroupSegment />
            <GroupSegment />
            <MemberSegment />
        </Card>
    </Col10>
</Container2>
<Footer />
```