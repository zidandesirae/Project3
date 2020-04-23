# PAGE BREAKDOWN

## Full breakdown - including each individual component
```
<Container1>
    <TitleH1 />
    <Card>
        <SignUpForm />
    </Card>
</Container1>
```

## Condensed Section
```
<Outer /> =

<Container1>
    <TitleH1 />
    <Card>
        {props.children}
    </Card>
</Container1>
```

## Condensed Page Breakdown - used for App.js render (pages folder)
```
<Outer>
    <SignUpForm />
</Outer>
```