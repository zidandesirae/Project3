# PAGE BREAKDOWN

## Full breakdown - including each individual component
```
<NavBar />
<Container2>
    <Col10>
        <TitleH2 />
        <Card>
            <TitleH4 />
            ------------------------
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editablele />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editablele />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editablele />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editablele />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editablele />
                </Col6>
            </Row>
            ------------------------
            <EditSaveBtn />
        </Card>
        <Card>
            <TitleH4 />
            ------------------------
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <CheckBox />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <CheckBox />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <CheckBox />
                </Col6>
            </Row>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <CheckBox />
                </Col6>
            </Row>
            ------------------------
            <EditSaveBtn />
        </Card>
    </Col10>
</Container2>
<Footer />
```

## Condensed Section
```
<UserSegment />     =

<Row>
    <Col6>
        <Description />
    </Col6>
    <Col6>
        <Editablele />
    </Col6>
</Row>

-----------------------------------------------------

<Notifications />   =

<Row>
    <Col6>
        <Description />
    </Col6>
    <Col6>
        <CheckBox />
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
            <TitleH4 />
            <UserSegment />
            <UserSegment />
            <UserSegment />
            <UserSegment />
            <UserSegment />
            <EditSaveBtn />
        </Card>
        <Card>
            <TitleH4 />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <EditSaveBtn />
        </Card>
    </Col10>
</Container2>
<Footer />

```